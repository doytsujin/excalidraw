(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{263:function(e,t,n){},264:function(e,t,n){},265:function(e,t,n){"use strict";n.r(t);var r=n(26),a=n(2),o=n(3),l=n(7),i=n(6),c=n(8),s=n(0),u=n.n(s),h=n(21),f=n.n(h),d=n(20);function v(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function p(e,t){t.sort((function(e,t){return e-t}));var n=!0;t.forEach((function(t,r){(n=n&&t===r)||v(e,t-1,t)}))}function m(e,t){var n=t.sort((function(e,t){return t-e})),r=!0;n.forEach((function(t,n){(r=r&&t===e.length-n-1)||v(e,t+1,t)}))}function g(e,t){t.sort((function(e,t){return e-t}));var n=t.map((function(t){return e[t]})),r=t.reverse().concat([0]);r.forEach((function(t,n){if(0!==n)for(var a=r[n-1]-1;a>=t;--a)e[a+n]=e[a]})),n.forEach((function(t,n){e[n]=t}))}function y(e,t){var n=t.sort((function(e,t){return t-e})),r=n.map((function(t){return e[t]}));(t=n.reverse().concat([e.length])).forEach((function(n,r){if(0!==r)for(var a=t[r-1]+1;a<n;++a)e[a-r]=e[a]})),r.forEach((function(t,n){e[e.length-n-1]=t}))}function w(){return Math.floor(Math.random()*Math.pow(2,31))}function E(e,t){var n=Math.random;Math.random=function(e){return function(){return(Math.pow(2,31)-1&(e=Math.imul(48271,e)))/Math.pow(2,31)}}(e);var r=t();return Math.random=n,r}function k(e,t,n,r,a,o,l,i,c){var s=arguments.length>9&&void 0!==arguments[9]?arguments[9]:0,u=arguments.length>10&&void 0!==arguments[10]?arguments[10]:0,h={type:e,x:t,y:n,width:s,height:u,isSelected:!1,strokeColor:r,backgroundColor:a,fillStyle:o,strokeWidth:l,roughness:i,opacity:c,seed:w(),draw:function(e,t,n){}};return h}var S=n(5);function x(e,t,n,r,a,o){var l,i,c=a-n,s=o-r,u=c*c+s*s,h=-1;0!==u&&(h=((e-n)*c+(t-r)*s)/u),h<0?(l=n,i=r):h>1?(l=a,i=o):(l=n+h*c,i=r+h*s);var f=e-l,d=t-i;return Math.hypot(f,d)}function C(e,t,n,r,a){return[(e-n)*Math.cos(a)-(t-r)*Math.sin(a)+n,(e-n)*Math.sin(a)+(t-r)*Math.cos(a)+r]}function b(e){return e.width>=0?e.x:e.x+e.width}function M(e){return e.width>=0?e.x+e.width:e.x}function O(e){return e.height>=0?e.y:e.y+e.height}function B(e){return e.height>=0?e.y+e.height:e.y}function Y(e){var t=Math.floor(e.width/2)+1,n=e.width,r=Math.floor(e.height/2)+1;return[t,0,n,r,t,e.height,0,r]}function X(e){var t=e.width,n=e.height,r=Math.hypot(t-0,n-0),a=Math.min(30,r/2),o=t-(t-0)/r*a,l=n-(n-0)/r*a,i=C(o,l,t,n,-20*Math.PI/180),c=Object(S.a)(i,2),s=c[0],u=c[1],h=C(o,l,t,n,20*Math.PI/180),f=Object(S.a)(h,2);return[0,0,t,n,s,u,f[0],f[1]]}function D(e,t){var n=e.x,r=e.x+e.width,a=e.y,o=e.y+e.height,l={},i=e.width<0?8:-8,c=e.height<0?8:-8;return Math.abs(r-n)>40&&(l.n=[n+(r-n)/2+t.scrollX-4,a-4+t.scrollY+c,8,8],l.s=[n+(r-n)/2+t.scrollX-4,o-4+t.scrollY-c,8,8]),Math.abs(o-a)>40&&(l.w=[n-4+t.scrollX+i,a+(o-a)/2+t.scrollY-4,8,8],l.e=[r-4+t.scrollX-i,a+(o-a)/2+t.scrollY-4,8,8]),l.nw=[n-4+t.scrollX+i,a-4+t.scrollY+c,8,8],l.ne=[r-4+t.scrollX-i,a-4+t.scrollY+c,8,8],l.sw=[n-4+t.scrollX+i,o-4+t.scrollY-c,8,8],l.se=[r-4+t.scrollX-i,o-4+t.scrollY-c,8,8],"arrow"===e.type?{nw:l.nw,se:l.se}:l}function A(e,t,n){if("ellipse"===e.type){var r=Math.abs(t-e.x-e.width/2),a=Math.abs(n-e.y-e.height/2),o=.707,l=.707,i=Math.abs(e.width)/2,c=Math.abs(e.height)/2;return[0,1,2,3].forEach((function(e){var t=i*o,n=c*l,s=(i*i-c*c)*Math.pow(o,3)/i,u=(c*c-i*i)*Math.pow(l,3)/c,h=t-s,f=n-u,d=r-s,v=a-u,p=Math.hypot(f,h),m=Math.hypot(v,d);o=Math.min(1,Math.max(0,(d*p/m+s)/i)),l=Math.min(1,Math.max(0,(v*p/m+u)/c));var g=Math.hypot(l,o);o/=g,l/=g})),Math.hypot(i*o-r,c*l-a)<10}if("rectangle"===e.type){var s=b(e),u=M(e),h=O(e),f=B(e);return x(t,n,s,h,u,h)<10||x(t,n,u,h,u,f)<10||x(t,n,u,f,s,f)<10||x(t,n,s,f,s,h)<10}if("diamond"===e.type){t-=e.x,n-=e.y;var d=Y(e),v=Object(S.a)(d,8),p=v[0],m=v[1],g=v[2],y=v[3],w=v[4],E=v[5],k=v[6],C=v[7];return x(t,n,p,m,g,y)<10||x(t,n,g,y,w,E)<10||x(t,n,w,E,k,C)<10||x(t,n,k,C,p,m)<10}if("arrow"===e.type){var D=X(e),A=Object(S.a)(D,8),R=A[0],N=A[1],L=A[2],T=A[3],j=A[4],P=A[5],U=A[6],K=A[7];return x(t-=e.x,n-=e.y,j,P,L,T)<10||x(t,n,R,N,L,T)<10||x(t,n,U,K,L,T)<10}if("text"===e.type){var F=b(e),W=M(e),z=O(e),H=B(e);return t>=F&&t<=W&&n>=z&&n<=H}if("selection"===e.type)return console.warn("This should not happen, we need to investigate why it does."),!1;throw new Error("Unimplemented type "+e.type)}function R(e,t,n,r){if("text"===e.type)return!1;var a=D(e,r),o=Object.keys(a).filter((function(e){var o=a[e];return t+r.scrollX>=o[0]&&t+r.scrollX<=o[0]+o[2]&&n+r.scrollY>=o[1]&&n+r.scrollY<=o[1]+o[3]}));return o.length>0&&o[0]}function N(e){return"text"===e.type}var L=d.a.generator(null,null);function T(e){if("selection"===e.type)e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY,l=n.fillStyle;n.fillStyle="rgba(0, 0, 255, 0.10)",n.fillRect(e.x+a,e.y+o,e.width,e.height),n.fillStyle=l};else if("rectangle"===e.type){var t=E(e.seed,(function(){return L.rectangle(0,0,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(n,r,a){var o=a.scrollX,l=a.scrollY;r.globalAlpha=e.opacity/100,r.translate(e.x+o,e.y+l),n.draw(t),r.translate(-e.x-o,-e.y-l),r.globalAlpha=1}}else if("diamond"===e.type){var n=E(e.seed,(function(){var t=Y(e),n=Object(S.a)(t,8),r=n[0],a=n[1],o=n[2],l=n[3],i=n[4],c=n[5],s=n[6],u=n[7];return L.polygon([[r,a],[o,l],[i,c],[s,u]],{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(t,r,a){var o=a.scrollX,l=a.scrollY;r.globalAlpha=e.opacity/100,r.translate(e.x+o,e.y+l),t.draw(n),r.translate(-e.x-o,-e.y-l),r.globalAlpha=1}}else if("ellipse"===e.type){var r=E(e.seed,(function(){return L.ellipse(e.width/2,e.height/2,e.width,e.height,{stroke:e.strokeColor,fill:e.backgroundColor,fillStyle:e.fillStyle,strokeWidth:e.strokeWidth,roughness:e.roughness})}));e.draw=function(t,n,a){var o=a.scrollX,l=a.scrollY;n.globalAlpha=e.opacity/100,n.translate(e.x+o,e.y+l),t.draw(r),n.translate(-e.x-o,-e.y-l),n.globalAlpha=1}}else{if("arrow"===e.type){var a=X(e),o=Object(S.a)(a,8),l=o[0],i=o[1],c=o[2],s=o[3],u=o[4],h=o[5],f=o[6],d=o[7],v={stroke:e.strokeColor,strokeWidth:e.strokeWidth,roughness:e.roughness},p=E(e.seed,(function(){return[L.line(u,h,c,s,v),L.line(l,i,c,s,v),L.line(f,d,c,s,v)]}));return void(e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.globalAlpha=e.opacity/100,n.translate(e.x+a,e.y+o),p.forEach((function(e){return t.draw(e)})),n.translate(-e.x-a,-e.y-o),n.globalAlpha=1})}if(!N(e))throw new Error("Unimplemented type "+e.type);e.draw=function(t,n,r){var a=r.scrollX,o=r.scrollY;n.globalAlpha=e.opacity/100;var l=n.font;n.font=e.font;var i=n.fillStyle;n.fillStyle=e.strokeColor,n.fillText(e.text,e.x+a,e.y+e.actualBoundingBoxAscent+o),n.fillStyle=i,n.font=l,n.globalAlpha=1}}}function j(e,t,n,r,a){var o=1/0,l=0,i=1/0,c=0;e.forEach((function(e){o=Math.min(o,b(e)),l=Math.max(l,M(e)),i=Math.min(i,O(e)),c=Math.max(c,B(e))})),o+=r,l+=r,i+=a,c+=a;var s=Math.max(-o,0),u=Math.max(-(t-l),0),h=Math.max(-i,0),f=Math.max(-(n-c),0),d=null;(s||u)&&(d={x:Math.min(s+4,t-15-4),y:n-6-4,width:Math.max(t-u-s-8,15),height:6});var v=null;return(h||f)&&(v={x:t-6-4,y:Math.min(h+4,n-15-4),width:6,height:Math.max(n-f-h-12,15)}),{horizontal:d,vertical:v}}var P=n(38);function U(e,t,n,r,a,o){e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+a-o),e.quadraticCurveTo(t+r,n+a,t+r-o,n+a),e.lineTo(t+o,n+a),e.quadraticCurveTo(t,n+a,t,n+a-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath(),e.fill(),e.stroke()}function K(e){e.forEach((function(e){e.isSelected=!1}))}function F(e){for(var t=e.length-1;t>=0;--t)e[t].isSelected&&e.splice(t,1)}function W(e){var t=[];return e.forEach((function(e,n){e.isSelected&&t.push(n)})),t}var z=function(e){return e.some((function(e){return e.isSelected}))};function H(e,t){var n=Array.from(new Set(e.filter((function(e){return e.isSelected})).map((function(e){return t(e)}))));return 1===n.length?n[0]:null}function I(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},o=a.offsetX,l=a.offsetY,i=a.renderScrollbars,c=void 0===i||i,s=a.renderSelection,u=void 0===s||s;if(n){var h=n.getContext("2d"),f=h.fillStyle;"string"===typeof r.viewBackgroundColor?(h.fillStyle=r.viewBackgroundColor,h.fillRect(0,0,n.width,n.height)):h.clearRect(0,0,n.width,n.height),h.fillStyle=f;var d=W(e);if(r=Object(P.a)({},r,{scrollX:"number"===typeof o?o:r.scrollX,scrollY:"number"===typeof l?l:r.scrollY}),e.forEach((function(e){if(e.draw(t,h,r),u&&e.isSelected){var n=b(e),a=M(e),o=O(e),l=B(e),i=h.getLineDash();if(h.setLineDash([8,4]),h.strokeRect(n-4+r.scrollX,o-4+r.scrollY,a-n+8,l-o+8),h.setLineDash(i),"text"!==e.type&&1===d.length){var c=D(e,r);Object.values(c).forEach((function(e){h.strokeRect(e[0],e[1],e[2],e[3])}))}}})),c){var v=j(e,h.canvas.width/window.devicePixelRatio,h.canvas.height/window.devicePixelRatio,r.scrollX,r.scrollY),p=h.strokeStyle;h.fillStyle="rgba(0,0,0,0.3)",h.strokeStyle="rgba(255,255,255,0.8)",[v.horizontal,v.vertical].forEach((function(e){e&&U(h,e.x,e.y,e.width,e.height,3)})),h.strokeStyle=p,h.fillStyle=f}}}function J(e,t){var n=document.createElement("a");n.setAttribute("download",e),n.setAttribute("href",t),n.click(),n.remove()}function q(e,t,n){try{return t&&(e.splice.apply(e,[0,e.length].concat(Object(r.a)("string"===typeof t?JSON.parse(t):t))),e.forEach((function(e){e.fillStyle=e.fillStyle||"hachure",e.strokeWidth=e.strokeWidth||1,e.roughness=e.roughness||1,e.opacity=null===e.opacity||void 0===e.opacity?100:e.opacity,T(e)}))),n?JSON.parse(n):null}catch(a){return e.splice(0,e.length),null}}function V(e,t){localStorage.setItem("excalidraw",JSON.stringify(e)),localStorage.setItem("excalidraw-state",JSON.stringify(t))}function _(e,t){var n=[JSON.stringify(e),JSON.stringify(t)].map(btoa).join(":");document.location.replace("#"+n)}function Z(e,t,n){for(var r=null,a=e.length-1;a>=0;--a)if(A(e[a],t,n)){r=e[a];break}return r}function G(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Q(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement}var $=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(l.a)(this,Object(i.a)(t).call(this,e))).state={value:e.value,edit:!1},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.value})}},{key:"handleEdit",value:function(e){this.setState({value:e.target.value})}},{key:"handleBlur",value:function(){var e=this.state.value;e?(this.props.onChange(e),this.setState({edit:!1})):this.setState({value:this.props.value,edit:!1})}},{key:"render",value:function(){var e=this,t=this.state,n=t.value,r=t.edit;return u.a.createElement(s.Fragment,null,r?u.a.createElement("input",{className:"project-name-input",name:"name",maxLength:25,value:n,onChange:function(t){return e.handleEdit(t)},onBlur:function(){return e.handleBlur()},onKeyDown:function(t){"Enter"===t.key&&e.handleBlur()},autoFocus:!0}):u.a.createElement("span",{onClick:function(){return e.setState({edit:!0})},className:"project-name"},n))}}]),t}(s.Component);function ee(e){var t=e.options,n=e.value,r=e.onChange;return u.a.createElement("div",{className:"buttonList"},t.map((function(e){return u.a.createElement("button",{key:e.text,onClick:function(){return r(e.value)},className:n===e.value?"active":""},e.text)})))}var te=n(92);function ne(e){var t=e.children,n=e.left,r=e.onCloseRequest,a=e.top;return u.a.createElement("div",{className:"popover",style:{top:a,left:n}},u.a.createElement("div",{className:"cover",onClick:r,onContextMenu:function(e){e.preventDefault(),r&&r()}}),t)}function re(e){var t=e.color,n=e.onChange,r=u.a.useState(!1),a=Object(S.a)(r,2),o=a[0],l=a[1];return u.a.createElement("div",null,u.a.createElement("button",{className:"swatch",style:t?{backgroundColor:t}:void 0,onClick:function(){return l(!o)}}),o?u.a.createElement(ne,{onCloseRequest:function(){return l(!1)}},u.a.createElement(te.TwitterPicker,{colors:["#000000","#ABB8C3","#FFFFFF","#FF6900","#FCB900","#00D084","#8ED1FC","#0693E3","#EB144C","#F78DA7","#9900EF"],width:"205px",color:t||void 0,onChange:function(e){n(e.hex)}})):null,u.a.createElement("input",{type:"text",className:"swatch-input",value:t||"",onPaste:function(e){return n(e.clipboardData.getData("text"))},onChange:function(e){return n(e.target.value)}}))}var ae=[{icon:u.a.createElement("svg",{viewBox:"0 0 320 512"},u.a.createElement("path",{d:"M302.189 329.126H196.105l55.831 135.993c3.889 9.428-.555 19.999-9.444 23.999l-49.165 21.427c-9.165 4-19.443-.571-23.332-9.714l-53.053-129.136-86.664 89.138C18.729 472.71 0 463.554 0 447.977V18.299C0 1.899 19.921-6.096 30.277 5.443l284.412 292.542c11.472 11.179 3.007 31.141-12.5 31.141z"})),value:"selection"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"})),value:"rectangle"},{icon:u.a.createElement("svg",{viewBox:"0 0 223.646 223.646"},u.a.createElement("path",{d:"M111.823 0L16.622 111.823 111.823 223.646 207.025 111.823z"})),value:"diamond"},{icon:u.a.createElement("svg",{viewBox:"0 0 512 512"},u.a.createElement("path",{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"})),value:"ellipse"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M313.941 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.941v46.059c0 21.382 25.851 32.09 40.971 16.971l86.059-86.059c9.373-9.373 9.373-24.569 0-33.941l-86.059-86.059c-15.119-15.119-40.971-4.411-40.971 16.971V216z"})),value:"arrow"},{icon:u.a.createElement("svg",{viewBox:"0 0 448 512"},u.a.createElement("path",{d:"M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z"})),value:"text"}],oe=ae.map((function(e){return e.value[0]}));function le(e){return ae.reduce((function(t,n){return n.value[0]!==e?t:n.value}),"selection")}var ie,ce=function(){function e(){Object(a.a)(this,e),this.recording=!0,this.stateHistory=[],this.redoStack=[]}return Object(o.a)(e,[{key:"generateCurrentEntry",value:function(e){return JSON.stringify(e.map((function(e){return Object(P.a)({},e,{isSelected:!1})})))}},{key:"pushEntry",value:function(e){this.stateHistory.length>0&&this.stateHistory[this.stateHistory.length-1]===e||this.stateHistory.push(e)}},{key:"restoreEntry",value:function(e,t){var n=JSON.parse(t);e.splice(0,e.length),n.forEach((function(t){T(t),e.push(t)})),this.skipRecording()}},{key:"clearRedoStack",value:function(){this.redoStack.splice(0,this.redoStack.length)}},{key:"redoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.redoStack.pop();void 0!==n&&(this.restoreEntry(e,n),this.stateHistory.push(t))}},{key:"undoOnce",value:function(e){var t=this.generateCurrentEntry(e),n=this.stateHistory.pop();t===n&&(n=this.stateHistory.pop()),void 0!==n&&(this.restoreEntry(e,n),this.redoStack.push(t))}},{key:"isRecording",value:function(){return this.recording}},{key:"skipRecording",value:function(){this.recording=!1}},{key:"resumeRecording",value:function(){this.recording=!0}}]),e}();n(263),n(264);function se(e){var t=e.options,n=e.onCloseRequest,r=e.top,a=e.left;return u.a.createElement(ne,{onCloseRequest:n,top:r,left:a},u.a.createElement("ul",{className:"context-menu",onContextMenu:function(e){return e.preventDefault()}},t.map((function(e,t){return u.a.createElement("li",{key:t,className:"context-menu__option",onClick:n},u.a.createElement(ue,e))}))))}function ue(e){var t=e.label,n=e.action;return u.a.createElement("button",{className:"context-menu-option",onClick:n},t)}function he(){if(ie)return ie;var e=document.createElement("div");return document.body.appendChild(e),ie=e}function fe(){Object(h.unmountComponentAtNode)(he())}var de=function(e){var t=Array.of();e.options.forEach((function(e){e&&t.push(e)})),t.length&&Object(h.render)(u.a.createElement(se,{top:e.top,left:e.left,options:t,onCloseRequest:fe}),he())},ve={elements:Array.of()}.elements,pe={history:new ce}.history,me="excalidraw-".concat(function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,r=e.getDate(),a=e.getHours(),o=e.getMinutes(),l=e.getSeconds();return"".concat(t).concat(n).concat(r).concat(a).concat(o).concat(l)}()),ge="ArrowLeft",ye="ArrowRight",we="ArrowDown",Ee="ArrowUp",ke="Escape",Se="Delete",xe="Backspace",Ce=/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"metaKey":"ctrlKey",be="{}";function Me(e){return e===ge||e===ye||e===we||e===Ee}function Oe(){document.documentElement.style.cursor=""}function Be(e){Oe();var t=prompt("What text do you want?");if(null===t||""===t)return!1;e.text=t,e.font="".concat(20,"px Virgil");var n=je.font;je.font=e.font;var r=je.measureText(e.text),a=r.width,o=r.actualBoundingBoxAscent||20,l=r.actualBoundingBoxDescent||0;e.actualBoundingBoxAscent=o,je.font=n;var i=o+l;return e.x-=a/2,e.y-=o,e.width=a,e.height=i,!0}var Ye=-1,Xe=-1,De=null,Ae=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];return(n=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={draggingElement:null,resizingElement:null,elementType:"selection",exportBackground:!0,currentItemStrokeColor:"#000000",currentItemBackgroundColor:"#ffffff",viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0,name:me},n.onResize=function(){n.forceUpdate()},n.onKeyDown=function(e){if(!Q(e.target))if(e.key===ke)K(ve),n.forceUpdate(),e.preventDefault();else if(e.key===xe||e.key===Se)n.deleteSelectedElements(),e.preventDefault();else if(Me(e.key)){var t=e.shiftKey?5:1;ve.forEach((function(n){n.isSelected&&(e.key===ge?n.x-=t:e.key===ye?n.x+=t:e.key===Ee?n.y-=t:e.key===we&&(n.y+=t))})),n.forceUpdate(),e.preventDefault()}else if(e[Ce]&&e.shiftKey&&e.altKey&&"KeyB"===e.code)n.moveOneLeft(),e.preventDefault();else if(e[Ce]&&e.shiftKey&&"KeyB"===e.code)n.moveAllLeft(),e.preventDefault();else if(e[Ce]&&e.shiftKey&&e.altKey&&"KeyF"===e.code)n.moveOneRight(),e.preventDefault();else if(e[Ce]&&e.shiftKey&&"KeyF"===e.code)n.moveAllRight(),e.preventDefault();else if(e[Ce]&&"KeyA"===e.code)ve.forEach((function(e){e.isSelected=!0})),n.forceUpdate(),e.preventDefault();else if(oe.includes(e.key.toLowerCase()))n.setState({elementType:le(e.key)});else if(e[Ce]&&"KeyZ"===e.code)e.shiftKey?pe.redoOnce(ve):pe.undoOnce(ve),n.forceUpdate(),e.preventDefault();else if(e.metaKey&&e.shiftKey&&"KeyC"===e.code){var r=ve.find((function(e){return e.isSelected}));r&&(be=JSON.stringify(r))}else if(e.metaKey&&e.shiftKey&&"KeyV"===e.code){var a=JSON.parse(be);a.type&&ve.forEach((function(e){e.isSelected&&(e.backgroundColor=null===a||void 0===a?void 0:a.backgroundColor,e.strokeWidth=null===a||void 0===a?void 0:a.strokeWidth,e.strokeColor=null===a||void 0===a?void 0:a.strokeColor,e.fillStyle=null===a||void 0===a?void 0:a.fillStyle,e.opacity=null===a||void 0===a?void 0:a.opacity,T(e))})),n.forceUpdate(),e.preventDefault()}},n.deleteSelectedElements=function(){F(ve),n.forceUpdate()},n.clearCanvas=function(){window.confirm("This will clear the whole canvas. Are you sure?")&&(ve.splice(0,ve.length),n.setState({viewBackgroundColor:"#ffffff",scrollX:0,scrollY:0}),n.forceUpdate())},n.moveAllLeft=function(){g(ve,W(ve)),n.forceUpdate()},n.moveOneLeft=function(){p(ve,W(ve)),n.forceUpdate()},n.moveAllRight=function(){y(ve,W(ve)),n.forceUpdate()},n.moveOneRight=function(){m(ve,W(ve)),n.forceUpdate()},n.removeWheelEventListener=void 0,n.changeProperty=function(e){ve.forEach((function(t){t.isSelected&&(e(t),T(t))})),n.forceUpdate()},n.changeOpacity=function(e){n.changeProperty((function(t){return t.opacity=+e.target.value}))},n.changeStrokeColor=function(e){n.changeProperty((function(t){return t.strokeColor=e})),n.setState({currentItemStrokeColor:e})},n.changeBackgroundColor=function(e){n.changeProperty((function(t){return t.backgroundColor=e})),n.setState({currentItemBackgroundColor:e})},n.copyToClipboard=function(){if(navigator.clipboard){var e=JSON.stringify(ve.filter((function(e){return e.isSelected})));navigator.clipboard.writeText(e)}},n.pasteFromClipboard=function(e,t){navigator.clipboard&&navigator.clipboard.readText().then((function(r){return n.addElementsFromPaste(r,e,t)}))},n.handleWheel=function(e){e.preventDefault();var t=e.deltaX,r=e.deltaY;n.setState((function(e){return{scrollX:e.scrollX-t,scrollY:e.scrollY-r}}))},n.saveDebounced=Re((function(){V(ve,n.state),_(ve,n.state)}),300),n.addElementsFromPaste=function(e,t,a){var o;try{o=JSON.parse(e)}catch(u){}if(Array.isArray(o)&&o.length>0&&o[0].type){var l,i;if(K(ve),t){var c=Math.min.apply(Math,Object(r.a)(o.map((function(e){return e.x}))));l=t-c}if(a){var s=Math.min.apply(Math,Object(r.a)(o.map((function(e){return e.y}))));i=a-s}o.forEach((function(e){e.x=l?e.x+l:10-n.state.scrollX,e.y=i?e.y+i:10-n.state.scrollY,e.seed=w(),T(e),ve.push(e)})),n.forceUpdate()}},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onKeyDown,!1),window.addEventListener("resize",this.onResize,!1);var e=function(e){try{var t=document.location.hash.slice(1).split(":").map(atob),n=Object(S.a)(t,2);return q(e,n[0],n[1])}catch(r){return null}}(ve)||q(ve,localStorage.getItem("excalidraw"),localStorage.getItem("excalidraw-state"));e&&this.setState(e)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onKeyDown,!1),window.removeEventListener("resize",this.onResize,!1)}},{key:"updateProjectName",value:function(e){this.setState({name:e})}},{key:"render",value:function(){var e=this,t=window.innerWidth-250,n=window.innerHeight-0;return u.a.createElement("div",{className:"container",onCut:function(t){t.clipboardData.setData("text/plain",JSON.stringify(ve.filter((function(e){return e.isSelected})))),F(ve),e.forceUpdate(),t.preventDefault()},onCopy:function(e){e.clipboardData.setData("text/plain",JSON.stringify(ve.filter((function(e){return e.isSelected})))),e.preventDefault()},onPaste:function(t){var n=t.clipboardData.getData("text");e.addElementsFromPaste(n),t.preventDefault()}},u.a.createElement("div",{className:"sidePanel"},u.a.createElement("h4",null,"Shapes"),u.a.createElement("div",{className:"panelTools"},ae.map((function(t){var n=t.value,r=t.icon;return u.a.createElement("label",{key:n,className:"tool",title:"".concat(G(n)," - ").concat(G(n)[0])},u.a.createElement("input",{type:"radio",checked:e.state.elementType===n,onChange:function(){e.setState({elementType:n}),K(ve),document.documentElement.style.cursor="text"===n?"text":"crosshair",e.forceUpdate()}}),u.a.createElement("div",{className:"toolIcon"},r))}))),z(ve)&&u.a.createElement("div",{className:"panelColumn"},u.a.createElement("h4",null,"Selection"),u.a.createElement("div",{className:"buttonList"},u.a.createElement("button",{onClick:this.moveOneRight},"Bring forward"),u.a.createElement("button",{onClick:this.moveAllRight},"Bring to front"),u.a.createElement("button",{onClick:this.moveOneLeft},"Send backward"),u.a.createElement("button",{onClick:this.moveAllLeft},"Send to back")),u.a.createElement("h5",null,"Stroke Color"),u.a.createElement(re,{color:H(ve,(function(e){return e.strokeColor})),onChange:function(t){return e.changeStrokeColor(t)}}),ve.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type)}))&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",null,"Background Color"),u.a.createElement(re,{color:H(ve,(function(e){return e.backgroundColor})),onChange:function(t){return e.changeBackgroundColor(t)}}),u.a.createElement("h5",null,"Fill"),u.a.createElement(ee,{options:[{value:"solid",text:"Solid"},{value:"hachure",text:"Hachure"},{value:"cross-hatch",text:"Cross-hatch"}],value:H(ve,(function(e){return e.fillStyle})),onChange:function(t){e.changeProperty((function(e){e.fillStyle=t}))}})),function(e){return e.some((function(e){return e.isSelected&&("rectangle"===e.type||"ellipse"===e.type||"diamond"===e.type||"arrow"===e.type)}))}(ve)&&u.a.createElement(u.a.Fragment,null,u.a.createElement("h5",null,"Stroke Width"),u.a.createElement(ee,{options:[{value:1,text:"Thin"},{value:2,text:"Bold"},{value:4,text:"Extra Bold"}],value:H(ve,(function(e){return e.strokeWidth})),onChange:function(t){e.changeProperty((function(e){e.strokeWidth=t}))}}),u.a.createElement("h5",null,"Sloppiness"),u.a.createElement(ee,{options:[{value:0,text:"Draftsman"},{value:1,text:"Artist"},{value:3,text:"Cartoonist"}],value:H(ve,(function(e){return e.roughness})),onChange:function(t){return e.changeProperty((function(e){e.roughness=t}))}})),u.a.createElement("h5",null,"Opacity"),u.a.createElement("input",{type:"range",min:"0",max:"100",onChange:this.changeOpacity,value:H(ve,(function(e){return e.opacity}))||0}),u.a.createElement("button",{onClick:this.deleteSelectedElements},"Delete selected")),u.a.createElement("h4",null,"Canvas"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("h5",null,"Canvas Background Color"),u.a.createElement(re,{color:this.state.viewBackgroundColor,onChange:function(t){return e.setState({viewBackgroundColor:t})}}),u.a.createElement("button",{onClick:this.clearCanvas,title:"Clear the canvas & reset background color"},"Clear canvas")),u.a.createElement("h4",null,"Export"),u.a.createElement("div",{className:"panelColumn"},u.a.createElement("h5",null,"Name"),this.state.name&&u.a.createElement($,{value:this.state.name,onChange:function(t){return e.updateProjectName(t)}}),u.a.createElement("h5",null,"Image"),u.a.createElement("button",{onClick:function(){!function(e,t,n){var r=n.exportBackground,a=n.exportPadding,o=void 0===a?10:a,l=n.viewBackgroundColor,i=n.name;if(!e.length)return window.alert("Cannot export empty canvas.");var c=1/0,s=0,u=1/0,h=0;function f(e,t){return Math.abs(e>t?e-t:t-e)}e.forEach((function(e){c=Math.min(c,b(e)),s=Math.max(s,M(e)),u=Math.min(u,O(e)),h=Math.max(h,B(e))}));var v=document.createElement("canvas");v.style.display="none",document.body.appendChild(v),v.width=f(c,s)+2*o,v.height=f(u,h)+2*o,I(e,d.a.canvas(v),v,{viewBackgroundColor:r?l:null,scrollX:0,scrollY:0},{offsetX:-c+o,offsetY:-u+o,renderScrollbars:!1,renderSelection:!1}),J("".concat(i,".png"),v.toDataURL("image/png")),v!==t&&v.remove()}(ve,Le,e.state)}},"Export to png"),u.a.createElement("label",null,u.a.createElement("input",{type:"checkbox",checked:this.state.exportBackground,onChange:function(t){e.setState({exportBackground:t.target.checked})}}),"background"),u.a.createElement("h5",null,"Scene"),u.a.createElement("button",{onClick:function(){!function(e,t){var n=JSON.stringify({version:1,source:window.location.origin,elements:e});J("".concat(t,".json"),"data:text/plain;charset=utf-8,"+encodeURIComponent(n))}(ve,e.state.name)}},"Save as..."),u.a.createElement("button",{onClick:function(){(function(e){var t=document.createElement("input"),n=new FileReader;return t.type="file",t.accept=".json",t.onchange=function(){t.files.length?n.readAsText(t.files[0],"utf8"):alert("A file was not selected.")},t.click(),new Promise((function(t){n.onloadend=function(){if(n.readyState===FileReader.DONE){var r=JSON.parse(n.result);q(e,r.elements,null),t()}}}))})(ve).then((function(){return e.forceUpdate()}))}},"Load file..."))),u.a.createElement("canvas",{id:"canvas",style:{width:t,height:n},width:t*window.devicePixelRatio,height:n*window.devicePixelRatio,ref:function(r){e.removeWheelEventListener&&(e.removeWheelEventListener(),e.removeWheelEventListener=void 0),r&&(r.addEventListener("wheel",e.handleWheel,{passive:!1}),e.removeWheelEventListener=function(){return r.removeEventListener("wheel",e.handleWheel)},t===Ye&&n===Xe||(Ye=t,Xe=n,r.getContext("2d").scale(window.devicePixelRatio,window.devicePixelRatio)))},onContextMenu:function(t){t.preventDefault();var n=t.clientX-250-e.state.scrollX,r=t.clientY-0-e.state.scrollY,a=Z(ve,n,r);a?(a.isSelected||(K(ve),a.isSelected=!0,e.forceUpdate()),de({options:[navigator.clipboard&&{label:"Copy",action:e.copyToClipboard},navigator.clipboard&&{label:"Paste",action:function(){return e.pasteFromClipboard(n,r)}},{label:"Delete",action:e.deleteSelectedElements},{label:"Move Forward",action:e.moveOneRight},{label:"Send to Front",action:e.moveAllRight},{label:"Move Backwards",action:e.moveOneLeft},{label:"Send to Back",action:e.moveAllLeft}],top:t.clientY,left:t.clientX})):de({options:[navigator.clipboard&&{label:"Paste",action:function(){return e.pasteFromClipboard(n,r)}}],top:t.clientY,left:t.clientX})},onMouseDown:function(r){if(null!==De&&De(r),0===r.button){r.preventDefault(),Q(document.activeElement)&&document.activeElement.blur();var a=function(e,t,n,r,a,o,l){var i=j(e,r,a,o,l),c=[i.horizontal,i.vertical].map((function(e){return e&&e.x<=t&&t<=e.x+e.width&&e.y<=n&&n<=e.y+e.height})),s=Object(S.a)(c,2);return{isOverHorizontalScrollBar:s[0],isOverVerticalScrollBar:s[1]}}(ve,r.clientX-250,r.clientY-0,t,n,e.state.scrollX,e.state.scrollY),o=a.isOverHorizontalScrollBar,l=a.isOverVerticalScrollBar,i=r.clientX-250-e.state.scrollX,c=r.clientY-0-e.state.scrollY,s=k(e.state.elementType,i,c,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100),u=!1,h=!1,f=!1;if("selection"===e.state.elementType){var d=ve.find((function(t){return R(t,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor})}));if(e.setState({resizingElement:d||null}),d)u=R(d,i,c,{scrollX:e.state.scrollX,scrollY:e.state.scrollY,viewBackgroundColor:e.state.viewBackgroundColor}),document.documentElement.style.cursor="".concat(u,"-resize"),f=!0;else{var v=Z(ve,i,c);v?v.isSelected||(r.shiftKey||K(ve),v.isSelected=!0):K(ve),(h=z(ve))&&(document.documentElement.style.cursor="move")}}if(!N(s)||Be(s)){T(s),ve.push(s),"text"===e.state.elementType?(e.setState({draggingElement:null,elementType:"selection"}),s.isSelected=!0):e.setState({draggingElement:s});var p=i,m=c;(o||l)&&(p=r.clientX-250,m=r.clientY-0);var g=function(t){if(t.target instanceof HTMLElement){if(o){var n=t.clientX-250,r=n-p;return e.setState((function(e){return{scrollX:e.scrollX-r}})),void(p=n)}if(l){var a=t.clientY-0,i=a-m;return e.setState((function(e){return{scrollY:e.scrollY-i}})),void(m=a)}if(f&&e.state.resizingElement){var c=e.state.resizingElement,s=ve.filter((function(e){return e.isSelected}));if(1===s.length){var d=t.clientX-250-e.state.scrollX,v=t.clientY-0-e.state.scrollY;return s.forEach((function(e){switch(u){case"nw":e.width+=e.x-p,e.x=p,t.shiftKey?(e.y+=e.height-e.width,e.height=e.width):(e.height+=e.y-m,e.y=m);break;case"ne":e.width=p-e.x,t.shiftKey?(e.y+=e.height-e.width,e.height=e.width):(e.height+=e.y-m,e.y=m);break;case"sw":e.width+=e.x-p,e.x=p,t.shiftKey?e.height=e.width:e.height=m-e.y;break;case"se":e.width+=d-p,t.shiftKey?e.height=e.width:e.height+=v-m;break;case"n":e.height+=e.y-m,e.y=m;break;case"w":e.width+=e.x-p,e.x=p;break;case"s":e.height=m-e.y;break;case"e":e.width=p-e.x}c.x=e.x,c.y=e.y,T(c)})),p=d,m=v,pe.skipRecording(),void e.forceUpdate()}}if(h){var g=ve.filter((function(e){return e.isSelected}));if(g.length){var y=t.clientX-250-e.state.scrollX,w=t.clientY-0-e.state.scrollY;return g.forEach((function(e){e.x+=y-p,e.y+=w-m})),p=y,m=w,pe.skipRecording(),void e.forceUpdate()}}var E=e.state.draggingElement;if(E){var k=t.clientX-250-E.x-e.state.scrollX,S=t.clientY-0-E.y-e.state.scrollY;E.width=k,E.height=t.shiftKey?Math.abs(k)*Math.sign(S):S,T(E),"selection"===e.state.elementType&&function(e,t){var n=b(t),r=M(t),a=O(t),o=B(t);e.forEach((function(e){var t=b(e),l=M(e),i=O(e),c=B(e);e.isSelected="selection"!==e.type&&n<=t&&a<=i&&r>=l&&o>=c}))}(ve,E),pe.skipRecording(),e.forceUpdate()}}},y=function t(n){var r=e.state,a=r.draggingElement,o=r.elementType;if(De=null,window.removeEventListener("mousemove",g),window.removeEventListener("mouseup",t),Oe(),null===a)return K(ve),void e.forceUpdate();"selection"===o?(h&&(h=!1),ve.pop()):a.isSelected=!0,e.setState({draggingElement:null,elementType:"selection"}),e.forceUpdate()};De=y,window.addEventListener("mousemove",g),window.addEventListener("mouseup",y),pe.skipRecording(),e.forceUpdate()}}},onDoubleClick:function(t){var n=t.clientX-250-e.state.scrollX,r=t.clientY-0-e.state.scrollY;if(!Z(ve,n,r)){var a=k("text",n,r,e.state.currentItemStrokeColor,e.state.currentItemBackgroundColor,"hachure",1,1,100);Be(a)&&(T(a),ve.push(a),e.setState({draggingElement:null,elementType:"selection"}),a.isSelected=!0,e.forceUpdate())}}}))}},{key:"componentDidUpdate",value:function(){I(ve,Te,Le,{scrollX:this.state.scrollX,scrollY:this.state.scrollY,viewBackgroundColor:this.state.viewBackgroundColor}),this.saveDebounced(),pe.isRecording()&&(pe.pushEntry(pe.generateCurrentEntry(ve)),pe.clearRedoStack()),pe.resumeRecording()}}]),t}(u.a.Component);function Re(e,t){var n=0;return function(){for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];clearTimeout(n),n=window.setTimeout((function(){return e.apply(void 0,a)}),t)}}var Ne=document.getElementById("root");f.a.render(u.a.createElement(Ae,null),Ne);var Le=document.getElementById("canvas"),Te=d.a.canvas(Le),je=Le.getContext("2d");f.a.render(u.a.createElement(Ae,null),Ne)},93:function(e,t,n){e.exports=n(265)}},[[93,1,2]]]);
//# sourceMappingURL=main.6ab074c5.chunk.js.map