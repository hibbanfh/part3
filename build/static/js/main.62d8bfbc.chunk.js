(this.webpackJsonpthe=this.webpackJsonpthe||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(14),u=t.n(c),o=(t(20),t(4)),l=t(2),i=function(e){var n=e.person,t=e.deleteToggle;return r.a.createElement("li",null,n.name," ",n.number," ",r.a.createElement("button",{onClick:t},"delete"))},m=function(e){var n=e.show,t=e.handle;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:n,onChange:t}))},f=t(3),d=t.n(f),s="http://localhost:3001/person",h=function(){return d.a.get(s).then((function(e){return e.data}))},b=function(e){return d.a.post(s,e).then((function(e){return e.data}))},E=function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},v=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},p=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],c=n[1],u=Object(a.useState)(""),f=Object(l.a)(u,2),d=f[0],s=f[1],p=Object(a.useState)(""),g=Object(l.a)(p,2),w=g[0],j=g[1],O=Object(a.useState)(""),S=Object(l.a)(O,2),k=S[0],y=S[1],C=Object(a.useState)(null),T=Object(l.a)(C,2),N=T[0],x=T[1],D=Object(a.useState)(null),I=Object(l.a)(D,2),J=I[0],A=I[1];Object(a.useEffect)((function(){h().then((function(e){c(e)}))}),[]);var B=t.filter((function(e){return e.name.match(new RegExp(k,"i"))})),P=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"notification"},n)},R=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"error"},n)};return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(R,{message:J}),r.a.createElement(P,{message:N}),r.a.createElement(m,{show:k,handle:function(e){return y(e.target.value)}}),r.a.createElement("h2",null,"Add a new"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:d,number:w},a=t.some((function(e){return e.name===d})),r=t.find((function(e){return e.name===d})),u=Object(o.a)(Object(o.a)({},r),{},{number:w});a?window.confirm("".concat(d," is already added to the phonebook, replace the old number with a new one?"))&&(v(u.id,u).then((function(e){c(t.map((function(n){return n.name!==d?n:e}))),s(""),j("")})),x("Updated ".concat(d)),setTimeout((function(){x(null)}),5e3)):(b(n).then((function(e){c(t.concat(e)),s(""),j("")})),x("".concat(d," has been added to the contact")))}},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:d,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:w,onChange:function(e){return j(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("h2",null,"Numbers"),r.a.createElement("ul",null,B.map((function(e){return r.a.createElement(i,{key:e.name,person:e,deleteToggle:function(){return function(e){var n=t.find((function(n){return n.id===e}));console.log(n.id),window.confirm("Delete ".concat(n.name," ?"))&&(E(n.id).then((function(e){console.log(e),window.location.reload()})),A("Information of ".concat(n.name," has already been removed from the server")),setTimeout((function(){A(null)}),5e3))}(e.id)}})}))))};u.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.62d8bfbc.chunk.js.map