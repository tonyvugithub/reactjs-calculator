(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(1),F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2),F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4),F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(3),F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(6),F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__),_App_css__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(16),_App_css__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__),CalculatorApp=function(_React$Component){function CalculatorApp(e){var _;return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorApp),(_=Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorApp).call(this,e))).state={sequence:"",result:"0",tempVal:"",history:[]},_.handleClick=_.handleClick.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.handleXButtonClick=_.handleXButtonClick.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.calculateSequence=_.calculateSequence.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.clear=_.clear.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.clearEntry=_.clearEntry.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_.backspace=_.backspace.bind(Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__.a)(_)),_}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(CalculatorApp,_React$Component),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorApp,[{key:"calculateSequence",value:function calculateSequence(){var res=this.state.result,seq=this.state.sequence,calSeq=seq+res;if(calSeq=calSeq.replace(/x/g,"*"),calSeq=calSeq.replace(/\xf7/g,"/"),calSeq=calSeq.replace(/--/g,"+"),calSeq=calSeq.replace(/\u221a\d*\.?\d+/g,(function(e){var _=e.slice(1);return"Math.sqrt(".concat(_,")")})),calSeq=calSeq.replace(/\(-?\d*\/?-?\d*\.?\d+\)\xb2/g,(function(e){var _=e.slice(0,-1);return"(".concat(_,"*",_,")")})),calSeq=calSeq.replace(/\(-?\d*\/?-?\d*\.?\d+\)\xb3/g,(function(e){var _=e.slice(0,-1);return"(".concat(_,"*",_,"*",_,")")})),["+","-","x","\xf7"].includes(seq[seq.length-1]))this.setState({sequence:seq+res+"=",result:String(eval(calSeq)).length>9?eval(calSeq).toPrecision(9):eval(calSeq),tempVal:""});else{var resTemp=res.replace(/\u221a\d*\.?\d+/g,(function(e){var _=e.slice(1);return"Math.sqrt(".concat(_,")")}));resTemp=resTemp.replace(/\(-?\d*\/?-?\d*\.?\d+\)\xb2/g,(function(e){var _=e.slice(0,-1);return"(".concat(_,"*",_,")")})),resTemp=resTemp.replace(/\(-?\d*\/?-?\d*\.?\d+\)\xb3/g,(function(e){var _=e.slice(0,-1);return"(".concat(_,"*",_,"*",_,")")})),this.setState({sequence:res+"=",result:eval(resTemp)})}document.querySelector("div.history").classList.remove("hide")}},{key:"clear",value:function(){this.setState({sequence:"",result:"0",temp:""})}},{key:"clearEntry",value:function(){var e=this.state.result,_=this.state.sequence;"="===_[_.length-1]?this.clear():"0"!==e&&this.setState({result:"0",tempVal:""})}},{key:"backspace",value:function(){var e=this.state.sequence,_=this.state.result;"="===e[e.length-1]?this.setState({sequence:""}):_.length>1?this.setState({result:_.slice(0,-1)}):1===_.length&&this.setState({result:"0",tempVal:""})}},{key:"handleClick",value:function handleClick(event){var val=event.target.value,seq=this.state.sequence,res=this.state.result,temp=this.state.tempVal,calSeq=seq+res;calSeq=calSeq.replace(/x/g,"*"),calSeq=calSeq.replace(/\xf7/g,"/"),calSeq=calSeq.replace(/--/g,"+"),calSeq=calSeq.replace(/\u221a\d*\.?\d+/g,(function(e){var _=e.slice(1);return"Math.sqrt(".concat(_,")")})),calSeq=calSeq.replace(/\(\d*\/?\d*\.?\d+\)\xb2/g,(function(e){var _=e.slice(0,-1);return _.concat("*",_)})),calSeq=calSeq.replace(/\(\d*\/?\d*\.?\d+\)\xb3/g,(function(e){var _=e.slice(0,-1);return _.concat("*",_,"*",_)})),"C"===val?this.clear():"CE"===val?this.clearEntry():"="===val?"="!==seq[seq.length-1]&&(this.calculateSequence(),this.setState((function(e){return{history:e.history.concat({hisSeq:e.sequence,hisRes:e.result})}}))):"\u2190"===val?this.backspace():"\xb1"===val?"0"!==res&&("-"!==res[0]?this.setState({result:"-"+res}):this.setState({result:res.slice(1)})):"x2"===val?"0"!==res&&("\xb3"===res[res.length-1]?this.setState({result:res.slice(0,-1)+"\xb2",temp:""}):"\xb2"===res[res.length-1]||this.setState({result:"(".concat(res,")","\xb2"),temp:""})):"x3"===val?"0"!==res&&("\xb2"===res[res.length-1]?this.setState({result:res.slice(0,-1)+"\xb3",temp:""}):"\xb3"===res[res.length-1]||this.setState({result:"(".concat(res,")","\xb3"),temp:""})):"\u221a"===val?"0"!==res&&this.setState({result:"\u221a"+res}):"1/x"===val?"0"!==res&&this.setState({result:"1/"+res}):["+","-","x","\xf7"].includes(val)?["+","-","x","\xf7"].includes(seq[seq.length-1])?""!==temp?this.setState({sequence:seq+res+val,result:String(eval(calSeq)).length>9?eval(calSeq).toPrecision(9):eval(calSeq),tempVal:""}):this.setState({sequence:seq.replace(/.$/,val)}):this.setState({sequence:res+val}):"0"===res&&""===seq?this.setState({result:val}):["+","-","x","\xf7"].includes(seq[seq.length-1])?this.setState({tempVal:temp+val,result:temp+val}):"="===seq[seq.length-1]?(this.clear(),this.setState({result:val})):this.setState({result:res+val})}},{key:"handleXButtonClick",value:function(){this.setState({history:[]}),document.querySelector("div.history").classList.add("hide"),this.clear()}},{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1",null,"Tony's Calculator App",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("br",null),"Using ",react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span",null,"ReactJS")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calculator-container"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"calculator-body"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DisplaySequenceComponent,{sequence:this.state.sequence}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(DisplayResultComponent,{result:this.state.result}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"By Tony Vu"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"cube",value:"x3",onClick:this.handleClick},"x\xb3"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"square",value:"x2",onClick:this.handleClick},"x\xb2"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"1/x",value:"1/x",onClick:this.handleClick},"1/x"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{className:"squareroot",value:"\u221a",onClick:this.handleClick},"\u221ax")),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"7",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"8",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"9",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OperatorButton,{value:"\xf7",onClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"4",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"5",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"6",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OperatorButton,{value:"x",onClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"1",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"2",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"3",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OperatorButton,{value:"-",onClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OtherButton,{value:"\xb1",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(NumberButton,{value:"0",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OtherButton,{value:".",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OperatorButton,{value:"+",onClick:this.handleClick})),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"row"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OtherButton,{value:"C",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OtherButton,{value:"CE",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(OtherButton,{value:"\u2190",onClick:this.handleClick}),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(EqualButton,{value:"=",onClick:this.handleClick}))),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HistoryPaneComponent,{history:this.state.history,onXButtonClick:this.handleXButtonClick})))}}]),CalculatorApp}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),DisplaySequenceComponent=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"sequence"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",null,this.props.sequence))}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),DisplayResultComponent=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){var e=this.props.result;return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"result"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input",{value:e,type:"text",maxLength:"9",disabled:!0,autoFocus:!0}))}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),NumberButton=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{value:this.props.value,className:"number",onClick:this.props.onClick},this.props.value)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),OperatorButton=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{value:this.props.value,className:"operator",onClick:this.props.onClick},this.props.value)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),EqualButton=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{value:this.props.value,className:"equal",onClick:this.props.onClick},this.props.value)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),OtherButton=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{value:this.props.value,className:"other",onClick:this.props.onClick},this.props.value)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),HistoryPaneComponent=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){var e=this.props.history.map((function(e,_){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(HistoryItem,{key:_,sequence:e.hisSeq,result:e.hisRes})}));return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"history hide"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"history-title"},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2",null,"Memory"),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("button",{onClick:this.props.onXButtonClick,className:"reset-memory",title:"Clear Memory"},"X")),e)}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component),HistoryItem=function(e){function _(){return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,_),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__.a)(this,Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.a)(_).apply(this,arguments))}return Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__.a)(_,e),Object(F_files_Seneca_ExtraCirriculum_React_Study_calculator_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(_,[{key:"render",value:function(){return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div",{className:"history-item",onClick:this.props.onClick},react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",{className:"history-sequence"},this.props.sequence),react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p",{className:"history-result"},this.props.result))}}]),_}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);__webpack_exports__.a=CalculatorApp},function(e,_,t){e.exports=t(17)},,,,,function(e,_,t){},function(e,_,t){},function(e,_,t){"use strict";t.r(_);var a=t(0),l=t.n(a),r=t(8),c=t.n(r),s=(t(15),t(9));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(s.a,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[10,1,2]]]);
//# sourceMappingURL=main.264d4eb5.chunk.js.map