"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[377],{4377:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var a=t(2791),r=t(6361),o=t(1413),i=t(885),s=t(184),u=function(e){var n=e.id,t=e.name,a=e.number,o=(0,r.Nt)(),u=(0,i.Z)(o,2),c=u[0],d=u[1].isLoading;return(0,s.jsxs)("li",{name:t,children:[(0,s.jsx)("p",{children:t}),(0,s.jsx)("p",{children:a}),(0,s.jsx)("button",{type:"button",onClick:function(){return c(n)},children:d?"Deleting...":"Delete"})]})},c=function(e){var n=e.contacts;return(0,s.jsx)("ul",{children:n.map((function(e){return(0,s.jsx)(u,(0,o.Z)({},e),e.id)}))})},d=t(4554),l=t(3767),m=t(9203),h=t(6151),f=t(4806),x=function(){var e=(0,r.Lr)(),n=(0,i.Z)(e,2),t=n[0],o=n[1].isLoading,u=(0,a.useState)(""),c=(0,i.Z)(u,2),x=c[0],p=c[1],b=(0,a.useState)(""),j=(0,i.Z)(b,2),v=j[0],Z=j[1],g=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":p(a);break;case"number":Z(a);break;default:return}},C=function(){p(""),Z("")};return(0,s.jsx)(d.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"100%"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),t({name:x,number:v}),C()},children:(0,s.jsxs)(l.Z,{spacing:2,children:[(0,s.jsx)(m.Z,{id:"outlined-name",label:"Name",type:"text",value:x,onChange:g,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,s.jsx)(m.Z,{id:"outlined-name",label:"Phone number",type:"tel",value:v,onChange:g,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,s.jsxs)(h.Z,{theme:f.Z,variant:"contained",color:"primary",type:"submit",disabled:o,children:[o&&"Add...","Add contact"]})]})})},p=t(2978),b=t(4296),j=function(){var e=(0,p.I0)();return(0,s.jsx)(m.Z,{id:"outlined-name",label:"Filter",type:"text",onChange:function(n){e((0,b.W1)(n.currentTarget.value))}})},v=t(6445),Z=t(890),g=function(){var e=(0,r.Jx)().data,n=(0,p.v9)((function(e){return e.filter}));return(0,s.jsxs)(v.Z,{maxWidth:"sm",children:[(0,s.jsx)(Z.Z,{variant:"h3",component:"div",sx:{flexGrow:1},children:"Phonebook"}),(0,s.jsx)(x,{}),(0,s.jsx)(Z.Z,{variant:"h5",component:"div",sx:{flexGrow:1},children:"Contacts"}),(0,s.jsx)(j,{}),e&&(0,s.jsx)(c,{contacts:function(){var t=n.toLowerCase();return console.log(e),e.filter((function(e){return e.name.toLowerCase().includes(t)}))}()})]})},C=function(){return(0,s.jsx)(g,{})}}}]);
//# sourceMappingURL=377.3764f2c0.chunk.js.map