(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,function(e,t,n){e.exports={default:"SuperButton_default__1r1to",red:"SuperButton_red__3bxY7",buttonAll:"SuperButton_buttonAll__3Eibb",buttonHigh:"SuperButton_buttonHigh__OfY1-",buttonMiddle:"SuperButton_buttonMiddle__3TW3k",buttonLow:"SuperButton_buttonLow__3tpP8",buttonAdd:"SuperButton_buttonAdd__1GSXd",buttonX:"SuperButton_buttonX__3EvtE"}},,,,function(e,t,n){e.exports={global:"Affairs_global__24Q5L",someClass:"Affairs_someClass__OcA0u",box:"Affairs_box__2oB5u",name:"Affairs_name__XGpkK",priority:"Affairs_priority__2pk1K"}},function(e,t,n){e.exports={superInput:"SuperInputText_superInput__2Trcg",errorInput:"SuperInputText_errorInput__2g8DZ",error:"SuperInputText_error__1bxmf",greetingInput:"SuperInputText_greetingInput__9GhWj"}},,function(e,t,n){e.exports={messageItem:"Message_messageItem__1AB88",avatar:"Message_avatar__5E585",name:"Message_name__iVYXo",insideMassage:"Message_insideMassage__1zoED",time:"Message_time__c9YwE",message:"Message_message__1lRn-"}},,function(e,t,n){e.exports={header:"header_header__2fPXk",header_active:"header_header_active__3-vPp",links:"header_links__3qbvf",arrow:"header_arrow__2Rn1M",arrow_active:"header_arrow_active__2pZOd"}},,,function(e,t,n){e.exports={someClass:"Greeting_someClass__KzXSf",errorInput:"Greeting_errorInput__2i6Ek",input:"Greeting_input__uEJmb"}},,function(e,t,n){e.exports={blue:"HW4_blue__39Q-n",column:"HW4_column__2GuPV",testSpanError:"HW4_testSpanError__1c4wn"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3v88v",spanClassName:"SuperCheckbox_spanClassName__2dztW"}},function(e,t,n){e.exports={span:"superEditableSpan_span__2Io66",enterText:"superEditableSpan_enterText__V8GxU"}},,function(e,t,n){e.exports={App:"App_App__33HXS"}},function(e,t,n){e.exports={error:"error_error__2GTwX"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(21),c=n.n(r),s=(n(28),n(22)),i=n.n(s),o=n(3),l=n(10),j=n(13),u=n.n(j),b=n.p+"static/media/arrow.1d22cbea.svg",d=n(0);var h=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{className:"".concat(n?u.a.header_active:u.a.header),children:[Object(d.jsx)("img",{src:b,className:"".concat(n?u.a.arrow_active:u.a.arrow),onClick:function(){return r(!n)},alt:b}),Object(d.jsxs)("div",{className:u.a.links,children:[Object(d.jsx)(l.b,{to:"/pre-junior",children:"pre-Junior"}),Object(d.jsx)(l.b,{to:"/junior",children:"Junior"}),Object(d.jsx)(l.b,{to:"/junior+",children:"Junior+"})]})]})},O=n(2),m=n(11),x=n.n(m),p=function(e){return Object(d.jsxs)("div",{className:x.a.messageItem,children:[Object(d.jsx)("div",{className:x.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(d.jsxs)("div",{className:x.a.message,children:[Object(d.jsx)("div",{className:x.a.name,children:e.name}),Object(d.jsx)("div",{className:x.a.insideMassage,children:e.message}),Object(d.jsx)("div",{className:x.a.time,children:e.time})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Andrey Zaytsev",g="\u0418\u0433\u043d\u0430\u0442! \u042f \u0441\u0434\u0435\u043b\u0430\u043b \u044d\u0442\u043e!",v="00:05 10.12.2021",C=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 1"}),Object(d.jsx)(p,{avatar:f,name:_,message:g,time:v}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},y=n(8),k=n.n(y),N=n(4),S=n.n(N),w=n(6),T=n(7),A=function(e){var t=e.red,n=e.className,a=Object(T.a)(e,["red","className"]),r="".concat(t?S.a.red:S.a.default," ").concat(n);return Object(d.jsx)("button",Object(w.a)({className:r},a))};var E=function(e){return Object(d.jsx)("ul",{className:k.a.someClass,children:Object(d.jsxs)("li",{className:k.a.box,children:[Object(d.jsx)("div",{className:k.a.name,children:e.affair.name}),Object(d.jsx)("div",{className:k.a.priority,style:"high"===e.affair.priority?{color:"red"}:"middle"===e.affair.priority?{color:"orange"}:{color:"green"},children:e.affair.priority}),Object(d.jsx)(A,{className:S.a.buttonX,onClick:function(){return e.deleteAffairCallback(e.affair._id)},children:"X"})]})})};var L=function(e){var t=e.data.map((function(t){return Object(d.jsx)(E,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{className:k.a.global,children:[t,Object(d.jsxs)("div",{style:{marginLeft:60},children:[Object(d.jsx)(A,{className:S.a.buttonAll,onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)(A,{className:S.a.buttonHigh,onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)(A,{className:S.a.buttonMiddle,onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)(A,{className:S.a.buttonLow,onClick:function(){e.setFilter("low")},children:"Low"})]})]})},I=[{_id:1,name:"React ",priority:"high"},{_id:2,name:"Anime ",priority:"low"},{_id:3,name:"Games ",priority:"low"},{_id:4,name:"Work ",priority:"high"},{_id:5,name:"HTML & CSS ",priority:"middle"}];var B=function(){var e=Object(a.useState)(I),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("all"),s=Object(o.a)(c,2),i=s[0],l=s[1],j=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 2"}),Object(d.jsx)(L,{data:j,setFilter:l,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},M=n(15),P=n(16),H=n.n(P),F=n(9),W=n.n(F),X=function(e){e.type;var t=e.onChange,n=e.onChangeText,a=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(W.a.error," ").concat(i||""),j="".concat(c?W.a.errorInput:W.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(w.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){a&&a(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},G=function(e){var t=e.name,n=e.setNameCallback,a=e.addUser,r=e.onKeyPress,c=e.error,s=e.totalUsers,i=e.users,o=c?H.a.errorInput:H.a.input,l="".concat(W.a.greetingInput," ").concat(o);return Object(d.jsxs)("div",{style:{marginLeft:20},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(X,{className:l,value:t,onChange:n,onKeyPress:r,onBlur:n,placeholder:"Add text"}),Object(d.jsx)(A,{className:S.a.buttonAdd,style:{marginLeft:20},onClick:a,children:"Add"}),Object(d.jsx)("span",{style:{marginLeft:20},children:s})]}),Object(d.jsx)("div",{className:H.a.someClass,children:c}),Object(d.jsx)("div",{children:i.map((function(e){return Object(d.jsx)("div",{children:e.name})}))})]})},K=function(e){var t=e.users,n=e.addUserCallback,r=Object(a.useState)(""),c=Object(o.a)(r,2),s=c[0],i=c[1],l=Object(a.useState)(""),j=Object(o.a)(l,2),u=j[0],b=j[1],h=function(){""!==s.trim()?(n(s),i(""),alert("Hello ".concat(s,"!")),b("")):(i(""),b("Name is required"))},O=t.length;return Object(d.jsx)(G,{users:t,name:s,setNameCallback:function(e){i(e.currentTarget.value),b("")},addUser:h,onKeyPress:function(e){"Enter"===e.key&&s&&(h(),b(""))},error:u,totalUsers:O})},U=n(32);var D=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 3"}),Object(d.jsx)(K,{users:n,addUserCallback:function(e){var t=[{_id:Object(U.a)(),name:e}].concat(Object(M.a)(n));r(t)}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(18),R=n.n(J),z=n(19),Y=n.n(z),Z=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,a=e.className,r=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Y.a.checkbox," ").concat(a||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(w.a)({type:"checkbox",onChange:function(e){n&&n(e.currentTarget.checked),t&&t(e)},className:s},c)),r&&Object(d.jsx)("span",{className:Y.a.spanClassName,children:r})]})};var q=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(a.useState)(!1),l=Object(o.a)(i,2),j=l[0],u=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 4"}),Object(d.jsxs)("div",{className:R.a.column,children:[Object(d.jsx)(X,{value:n,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(X,{className:R.a.blue}),Object(d.jsx)(A,{children:"default"}),Object(d.jsx)(A,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(A,{disabled:!0,children:"disabled"}),Object(d.jsx)(Z,{checked:j,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Z,{checked:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},V=n.p+"static/media/double-arrows.75c8dae6.svg",Q=n(20),$=n.n(Q),ee=function(e){e.autoFocus;var t=e.onBlur,n=e.onEnter,r=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),s=Object(a.useState)(!1),i=Object(o.a)(s,2),l=i[0],j=i[1],u=r||{},b=u.children,h=u.onDoubleClick,O=u.className,m=Object(T.a)(u,["children","onDoubleClick","className"]),x="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",O);return Object(d.jsxs)("span",{style:{marginLeft:20},className:$.a.span,children:[Object(d.jsx)("img",{style:{width:22,height:22},src:V,alt:"DoubleClick"}),Object(d.jsx)("div",{className:$.a.enterText,children:l?Object(d.jsx)(X,Object(w.a)({className:W.a.greetingInput,placeholder:"enter text...",autoFocus:!0,onBlur:function(e){j(!1),t&&t(e)},onEnter:function(){j(!1),n&&n()}},c)):Object(d.jsx)("span",Object(w.a)(Object(w.a)({onDoubleClick:function(e){j(!0),h&&h(e)},className:x},m),{},{children:b||c.value}))})]})};function te(e,t){var n=JSON.stringify(t);localStorage.setItem(e,n)}function ne(e,t){var n=t,a=localStorage.getItem(e);return null!==a&&(n=JSON.parse(a)),n}te("test",{x:"A",y:1});ne("test",{x:"",y:0});var ae=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 6"}),Object(d.jsx)("div",{children:Object(d.jsx)(ee,{value:n,onChangeText:r,spanProps:{children:n?void 0:"ENTER TEXT"}})}),Object(d.jsxs)("div",{style:{marginLeft:20,marginTop:20},children:[Object(d.jsx)(A,{className:S.a.buttonAll,onClick:function(){te("editable-span-value",n)},children:"save"}),Object(d.jsx)(A,{style:{marginLeft:20},className:S.a.buttonAll,onClick:function(){var e=ne("editable-span-value",n);r(e)},children:"restore"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var re=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(C,{}),Object(d.jsx)(B,{}),Object(d.jsx)(D,{}),Object(d.jsx)(q,{}),Object(d.jsx)(ae,{})]})},ce=n.p+"static/media/404notFound.87049462.jpg",se=n(23),ie=n.n(se);var oe=function(){return Object(d.jsx)("div",{children:Object(d.jsx)("img",{src:ce,className:ie.a.error,alt:"404notFound"})})},le=function(e){var t=e.options,n=e.onChange,a=e.onChangeOption,r=e.value,c=Object(T.a)(e,["options","onChange","onChangeOption","value"]),s=t?t.map((function(e,t){return Object(d.jsx)("option",{selected:r===e,value:e,children:e},e+"-"+t)})):[];return Object(d.jsx)("select",Object(w.a)(Object(w.a)({onChange:function(e){a&&a(e.currentTarget.value),n&&n(e)}},c),{},{children:s}))},je=function(e){e.type;var t=e.name,n=e.options,a=e.value,r=e.onChange,c=e.onChangeOption,s=Object(T.a)(e,["type","name","options","value","onChange","onChangeOption"]),i=function(e){c&&c(e.currentTarget.value),r&&r(e)},o=n?n.map((function(e,n){return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(w.a)({type:"radio",name:t,checked:a===e,value:e,onChange:i},s)),e]},t+"-"+n)})):[];return Object(d.jsx)(d.Fragment,{children:o})},ue=["x","y","z"];var be,de=function(){var e=Object(a.useState)(ue[1]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=function(e){r(e)};return console.log(n),Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 7"}),Object(d.jsx)("div",{style:{marginLeft:20},children:Object(d.jsx)(le,{options:ue,value:n,onChangeOption:c})}),Object(d.jsx)("div",{style:{marginLeft:20,marginTop:20},children:Object(d.jsx)(je,{name:"radio",options:ue,value:n,onChangeOption:c})}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SORT-UP":var n=Object(M.a)(e);return n.sort((function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));case"SORT-DOWN":var a=Object(M.a)(e);return a.sort((function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}));case"CHECK":return e.filter((function(e){return e.age>t.payload}));default:return e}},Oe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var me=function(){var e=Object(a.useState)(Oe),t=Object(o.a)(e,2),n=t[0],r=t[1],c=n.map((function(e){return Object(d.jsxs)("div",{className:k.a.box,children:[Object(d.jsx)("div",{children:e.name}),Object(d.jsx)("div",{children:e.age})]},e._id)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("h2",{style:{marginLeft:20},children:"homeworks 8"}),Object(d.jsx)("div",{style:{marginLeft:20,fontSize:"20px"},children:c}),Object(d.jsxs)("div",{style:{paddingTop:20,marginLeft:-9},children:[Object(d.jsx)(A,{className:S.a.buttonLow,onClick:function(){return r(he(Oe,{type:"SORT-UP",payload:"up"}))},children:"SortUp"}),Object(d.jsx)(A,{className:S.a.buttonHigh,onClick:function(){return r(he(Oe,{type:"SORT-DOWN",payload:"down"}))},children:"SortDown"}),Object(d.jsx)(A,{className:S.a.buttonMiddle,onClick:function(){return r(he(Oe,{type:"CHECK",payload:18}))},children:"Check18"})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},xe=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(de,{}),Object(d.jsx)(me,{})]})},pe=function(){return Object(d.jsx)("div",{})},fe="/pre-junior",_e="/junior",ge="/junior+";var ve=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(O.d,{children:[Object(d.jsx)(O.b,{path:"/",element:Object(d.jsx)(O.a,{to:fe})}),Object(d.jsx)(O.b,{path:fe,element:Object(d.jsx)(re,{})}),Object(d.jsx)(O.b,{path:_e,element:Object(d.jsx)(xe,{})}),Object(d.jsx)(O.b,{path:ge,element:Object(d.jsx)(pe,{})}),"// add routes",Object(d.jsx)(O.b,{path:"/*",element:Object(d.jsx)(oe,{})})]})})};var Ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(h,{}),Object(d.jsx)(ve,{})]})})};var ye=function(){return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("h1",{style:{marginLeft:20},children:"react homeworks:"}),Object(d.jsx)(Ce,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(d.jsx)(ye,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.a0ed234f.chunk.js.map