(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(7),c=n.n(a),o=n(2),i=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),h=n(0),m=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={time:new Date},e.intervalID=void 0,e.handleTime=function(){e.setState({time:new Date})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.intervalID=window.setInterval(this.handleTime,1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name)),console.info("".concat(this.state.time.toUTCString().slice(-12,-4)))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this.state.time,t=this.props.name;return Object(h.jsxs)("div",{className:"Clock",children:[Object(h.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(h.jsx)("span",{className:"Clock__time",children:e.toUTCString().slice(-12,-4)})]})}}],[{key:"getRandomName",value:function(){return"Clock-".concat(Date.now().toString().slice(-4))}}]),n}(u.a.Component),d=(n(13),function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={hasClock:!0,name:"Clock-0"},e.intervalID=0,e.handleClick=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.handleContextMenu=function(){e.setState({hasClock:!0})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("click",this.handleContextMenu),window.addEventListener("contextmenu",this.handleClick),this.intervalID=window.setInterval((function(){return e.setState({name:m.getRandomName()})}),3300)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("click",this.handleContextMenu),window.removeEventListener("contextmenu",this.handleClick),window.clearInterval(this.intervalID)}},{key:"render",value:function(){var e=this.state;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),e.hasClock&&Object(h.jsx)(m,{name:e.name})]})}}]),n}(u.a.Component));c.a.render(Object(h.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.9b585f10.chunk.js.map