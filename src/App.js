/* eslint-disable no-eval */
import React from "react";
import "./App.css";

class CalculatorApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sequence: "",
      result: "0",
      tempVal: "",
      history: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleXButtonClick = this.handleXButtonClick.bind(this);
    this.calculateSequence = this.calculateSequence.bind(this);
    this.clear = this.clear.bind(this);
    this.clearEntry = this.clearEntry.bind(this);
    this.backspace = this.backspace.bind(this);
  }

  //Function to determine scenarios when hit equal "="
  calculateSequence() {
    const res = this.state.result;
    const seq = this.state.sequence;
    let calSeq = seq + res;
    calSeq = calSeq.replace(/x/g, "*");
    calSeq = calSeq.replace(/÷/g, "/");
    calSeq = calSeq.replace(/--/g, "+");
    calSeq = calSeq.replace(/√\d*\.?\d+/g, match => {
      let baseNum = match.slice(1);
      return "Math.sqrt(".concat(baseNum, ")");
    });
    calSeq = calSeq.replace(/\(\d*\/?\d*\.?\d+\)²/g, match => {
      let baseNum = match.slice(0, -1);
      return "(".concat(baseNum, "*", baseNum, ")");
    });
    calSeq = calSeq.replace(/\(\d*\/?\d*\.?\d+\)³/g, match => {
      let baseNum = match.slice(0, -1);
      return "(".concat(baseNum, "*", baseNum, "*", baseNum, ")");
    });
    if (["+", "-", "x", "÷"].includes(seq[seq.length - 1])) {
      this.setState({
        sequence: seq + res + "=",
        result:
          String(eval(calSeq)).length > 9
            ? eval(calSeq).toPrecision(9)
            : eval(calSeq),
        tempVal: ""
      });
    } else {
      this.setState({
        sequence: res + "="
      });
    }
    document.querySelector('div.history').classList.remove('hide');
  }
  //C function
  clear() {
    this.setState({
      sequence: "",
      result: "0",
      temp: ""
    });
  }
  //CE function
  clearEntry() {
    const res = this.state.result;
    const seq = this.state.sequence;
    if (seq[seq.length - 1] === "=") {
      this.clear();
    } else if (res !== "0") {
      this.setState({
        result: "0",
        tempVal: ""
      });
    }
  }
  //Backspace function
  backspace() {
    const seq = this.state.sequence;
    const res = this.state.result;
    if (seq[seq.length - 1] === "=") {
      this.setState({
        sequence: ""
      });
    } else if (res.length > 1) {
      this.setState({
        result: res.slice(0, -1)
      });
    } else if (res.length === 1) {
      this.setState({
        result: "0",
        tempVal: ""
      });
    }
  }
  //Handle click function for number, operator and other buttons
  handleClick(event) {
    let val = event.target.value;
    let seq = this.state.sequence;
    let res = this.state.result;
    let temp = this.state.tempVal;
    let calSeq = seq + res;
    calSeq = calSeq.replace(/x/g, "*");
    calSeq = calSeq.replace(/÷/g, "/");
    calSeq = calSeq.replace(/--/g, "+");
    //Using Callback function to access match instance of RegEx
    calSeq = calSeq.replace(/√\d*\.?\d+/g, match => {
      let baseNum = match.slice(1);
      return "Math.sqrt(".concat(baseNum, ")");
    });
    calSeq = calSeq.replace(/\(\d*\/?\d*\.?\d+\)²/g, match => {
      let baseNum = match.slice(0, -1);
      return baseNum.concat("*", baseNum);
    });
    calSeq = calSeq.replace(/\(\d*\/?\d*\.?\d+\)³/g, match => {
      let baseNum = match.slice(0, -1);
      return baseNum.concat("*", baseNum, "*", baseNum);
    });
    //If press C
    if (val === "C") {
      this.clear();
    } //If press CE
    else if (val === "CE") {
      this.clearEntry();
    } //If press =
    else if (val === "=") {
      if (seq[seq.length - 1] !== "=") {
        this.calculateSequence();
        this.setState(state => ({
          history: state.history.concat({
            hisSeq: state.sequence,
            hisRes: state.result
          })
        }));
        /* (Alternative) 
        this.setState(state => {
          const history = state.history.concat({hisSeq: state.sequence, hisRes: state.result}); 
          return {
            history
          }; 
        }); */
      }
    } //If press backspace
    else if (val === "←") {
      this.backspace();
    } //If press negate
    else if (val === "±") {
      if (res !== "0") {
        if (res[0] !== "-") {
          this.setState({
            result: "-" + res
          });
        } else {
          this.setState({
            result: res.slice(1)
          });
        }
      }
    } //If press x²
    else if (val === "x2") {
      if (res[res.length - 1] === "³") {
        this.setState({
          result: res.slice(0, -1) + "²",
          temp: ""
        });
      } else if (res[res.length - 1] === "²") {
      } else {
        this.setState({
          result: "(".concat(res,")","²"),
          temp: ""
        });
      }
    } //If press x³
    else if (val === "x3") {
      if (res[res.length - 1] === "²") {
        this.setState({
          result: res.slice(0, -1) + "³",
          temp: ""
        });
      } else if (res[res.length - 1] === "³") {
      } else {
        this.setState({
          result: "(".concat(res,")","³"),
          temp: ""
        });
      }
    } //If press √x
    else if (val === "√") {
      this.setState({
        result: "√" + res
      });
    } //If press 1/x
    else if (val === "1/x") {
      if (res !== "0") {
        this.setState({
          result: "1/" + res
        });
      }
    } //If press any operator
    else if (["+", "-", "x", "÷"].includes(val)) {
      if (["+", "-", "x", "÷"].includes(seq[seq.length - 1])) {
        if (temp !== "") {
          this.setState({
            sequence: seq + res + val,
            result:
              String(eval(calSeq)).length > 9
                ? eval(calSeq).toPrecision(9)
                : eval(calSeq),
            tempVal: ""
          });
        } else {
          this.setState({
            sequence: seq.replace(/.$/, val)
          });
        }
      } else {
        this.setState({
          sequence: res + val
        });
      }
    } //If press any number number
    else {
      //Start up case
      if (res === "0" && seq === "") {
        this.setState({
          result: val
        });
        //When sequence has the form "### +"
      } else if (["+", "-", "x", "÷"].includes(seq[seq.length - 1])) {
        this.setState({
          tempVal: temp + val,
          result: temp + val
        });
        //When sequence has the form "### + ### ="
      } else if (seq[seq.length - 1] === "=") {
        this.clear();
        this.setState({
          result: val
        });
        //When sequence is empty
      } else {
        this.setState({
          result: res + val
        });
      }
    }
  }
  //Function to handle when X button clicked
  handleXButtonClick(){
    this.setState({
      history: []
    });
    document.querySelector('div.history').classList.add('hide');
    this.clear();
  }
  //Render method
  render() {
    return (
      <div>
        <h1>
          Tony's Calculator App
          <br />
          Using <span>ReactJS</span>
        </h1>
        <div className="calculator-container">
          <div className="calculator-body">
            <DisplaySequenceComponent sequence={this.state.sequence} />
            <DisplayResultComponent result={this.state.result} />
            <div className="row">
              <button className="cube" value="x3" onClick={this.handleClick}>
                x³
              </button>
              <button className="square" value="x2" onClick={this.handleClick}>
                x²
              </button>
              <button className="1/x" value="1/x" onClick={this.handleClick}>
                1/x
              </button>
              <button
                className="squareroot"
                value="√"
                onClick={this.handleClick}
              >
                √x
              </button>
            </div>
            <div className="row">
              <NumberButton value="7" onClick={this.handleClick} />
              <NumberButton value="8" onClick={this.handleClick} />
              <NumberButton value="9" onClick={this.handleClick} />
              <OperatorButton value="÷" onClick={this.handleClick} />
            </div>
            <div className="row">
              <NumberButton value="4" onClick={this.handleClick} />
              <NumberButton value="5" onClick={this.handleClick} />
              <NumberButton value="6" onClick={this.handleClick} />
              <OperatorButton value="x" onClick={this.handleClick} />
            </div>
            <div className="row">
              <NumberButton value="1" onClick={this.handleClick} />
              <NumberButton value="2" onClick={this.handleClick} />
              <NumberButton value="3" onClick={this.handleClick} />
              <OperatorButton value="-" onClick={this.handleClick} />
            </div>
            <div className="row">
              <OtherButton value="±" onClick={this.handleClick} />
              <NumberButton value="0" onClick={this.handleClick} />
              <OtherButton value="." onClick={this.handleClick} />
              <OperatorButton value="+" onClick={this.handleClick} />
            </div>
            <div className="row">
              <OtherButton value="C" onClick={this.handleClick} />
              <OtherButton value="CE" onClick={this.handleClick} />
              <OtherButton value="←" onClick={this.handleClick} />
              <EqualButton value="=" onClick={this.handleClick} />
            </div>
          </div>
          {/*History Pane to display memory result after clicking =*/}
          <HistoryPaneComponent history={this.state.history} onXButtonClick={this.handleXButtonClick}/>
        </div>
      </div>
    );
  }
}

class DisplaySequenceComponent extends React.Component {
  render() {
    return (
      <div className="sequence">
        <p>{this.props.sequence}</p>
      </div>
    );
  }
}

class DisplayResultComponent extends React.Component {
  render() {
    let result = this.props.result;
    return (
      <div className="result">
        <input value={result} type="tel" maxLength="9" disabled autoFocus/>
      </div>
    );
  }
}

class NumberButton extends React.Component {
  render() {
    return (
      <button
        value={this.props.value}
        className="number"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class OperatorButton extends React.Component {
  render() {
    return (
      <button
        value={this.props.value}
        className="operator"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class EqualButton extends React.Component {
  render() {
    return (
      <button
        value={this.props.value}
        className="equal"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class OtherButton extends React.Component {
  render() {
    return (
      <button
        value={this.props.value}
        className="other"
        onClick={this.props.onClick}
      >
        {this.props.value}
      </button>
    );
  }
}

class HistoryPaneComponent extends React.Component {
  render() {
    const historyItemsData = this.props.history;
    const historyItemsComponentList = historyItemsData.map((item, i) => {
      return (
        <HistoryItem
          key={i}
          sequence={item.hisSeq}
          result={item.hisRes}
        />
      );
    });
    return (
      <div className="history hide">
        <div className="history-title">
          <h2>Memory</h2>
          <button onClick={this.props.onXButtonClick} className="reset-memory" title="Clear Memory" >
            X
          </button>
        </div> 
        {historyItemsComponentList}
      </div>
    );
  }
}

class HistoryItem extends React.Component {
  render() {
    return (
      <div className="history-item" onClick={this.props.onClick}>
        <p className="history-sequence">{this.props.sequence}</p>
        <p className="history-result">{this.props.result}</p>
      </div>
    );
  }
}
export default CalculatorApp;
