(this.webpackJsonpfrontned=this.webpackJsonpfrontned||[]).push([[0],{67:function(e,t,n){},69:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(0),i=n.n(r),c=n(11),s=n.n(c),u=(n(67),n(13)),o=n.n(u),l=n(22),d=n(14),f=n(111),j=n(119),p=n(117),b=n(116),h=n(118),v=n(121),O=(n(69),"https://interview-select-api.herokuapp.com"),m=function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(O+"/student/").then((function(e){return e.json()}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=i.a.useState(""),t=Object(d.a)(e,2),n=t[0],r=t[1],c=i.a.useState([]),s=Object(d.a)(c,2),u=s[0],g=s[1];i.a.useEffect((function(){x()}),[]);var x=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m().then((function(e){g(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch(O+"/student/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:-1,name:n})}).then((function(e){return console.log(e)}));case 4:return e.next=6,x();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"parent",children:[Object(a.jsxs)(f.a,{elevation:3,variant:"outlined",square:!0,className:"add-student",children:[Object(a.jsx)(j.a,{label:"Name",onChange:function(e){r(e.target.value)},value:n}),Object(a.jsx)(p.a,{variant:"contained",color:"primary",onClick:w,children:"Add New Student"})]}),Object(a.jsx)(f.a,{elevation:3,variant:"outlined",square:!0,children:Object(a.jsx)(b.a,{dense:!0,children:u.map((function(e){return Object(a.jsx)(h.a,{children:Object(a.jsx)(v.a,{primary:e.id+" "+e.name})},e.id)}))})})]})},x=n(42),w=n(53),S=n(120),y=(n(73),n(23)),C=function(e){var t=i.a.useState(""),n=Object(d.a)(t,2),r=n[0],c=n[1],s=i.a.useState(""),u=Object(d.a)(s,2),o=u[0],l=u[1],b=i.a.useState(""),h=Object(d.a)(b,2),v=h[0],m=h[1],g=i.a.useState([]),C=Object(d.a)(g,2),k=C[0],T=C[1];i.a.useEffect((function(){null!==e.interview&&(c(e.interview.name),l(N(e.interview.start_time)),m(N(e.interview.end_time)),T(e.interview.students))}),[e]);var N=function(e){return e.substr(0,e.length-3)};return Object(a.jsx)(f.a,{elevation:3,variant:"outlined",square:!0,className:"interview",children:Object(a.jsxs)("form",{children:[Object(a.jsx)(j.a,{label:"Name",onChange:function(e){c(e.target.value)},value:r}),Object(a.jsx)(j.a,{label:"Start Time",type:"datetime-local",InputLabelProps:{shrink:!0},value:o,onChange:function(e){l(e.target.value)}}),Object(a.jsx)(j.a,{label:"End Time",type:"datetime-local",InputLabelProps:{shrink:!0},value:v,onChange:function(e){m(e.target.value)}}),Object(a.jsx)(S.a,{multiple:!0,options:e.students,getOptionLabel:function(e){return e.name},onChange:function(e,t,n){T(t),console.log(t)},defaultValue:e.interview?Object(w.a)(e.interview.students):[],filterSelectedOptions:!0,renderInput:function(e){return Object(a.jsx)(j.a,Object(x.a)(Object(x.a)({},e),{},{variant:"standard",label:"Students",placeholder:"Students"}))}}),Object(a.jsx)(p.a,{variant:"contained",color:"primary",onClick:e.interview?function(){e.interview&&fetch(O+"/interview/",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.interview.id,name:r,start_time:o,end_time:v,students:k.map((function(e){return e.id}))})}).then((function(e){return e.json()})).then((function(e){y.b.success(e.message),console.log(e.message)})).catch((function(e){y.b.error(e.message),console.warn(e.message)}))}:function(){fetch(O+"/interview/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r,start_time:o,end_time:v,students:k.map((function(e){return e.id}))})}).then((function(e){return e.json()})).then((function(e){y.b.success(e.message),console.log(e.message)})).catch((function(e){y.b.error(e.message),console.warn(e.message)}))},children:e.interview?"Update":"Schedule"})]})})},k=function(){var e=i.a.useState([]),t=Object(d.a)(e,2),n=t[0],r=t[1],c=i.a.useState([]),s=Object(d.a)(c,2),u=s[0],f=s[1];i.a.useEffect((function(){j(),fetch(O+"/interview/").then((function(e){return e.json()})).then((function(e){f(e.data)}))}),[]);var j=function(){var e=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:m().then((function(e){r(e.data)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{children:[Object(a.jsx)(C,{students:n,interview:null},1),u.map((function(e){return Object(a.jsx)(C,{students:n,interview:e},e.id)}))]})};n(75),n(76);var T=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(y.a,{position:"bottom-center",autoClose:5e3,hideProgressBar:!0,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(a.jsx)(g,{}),Object(a.jsx)(k,{})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,123)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(T,{})}),document.getElementById("root")),N()}},[[77,1,2]]]);
//# sourceMappingURL=main.68ec637a.chunk.js.map