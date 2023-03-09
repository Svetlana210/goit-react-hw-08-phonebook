"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[565],{7565:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(2791),s="contacts-page_container__T0FYf",r=t(4942),c=t(1413),i=t(9439),l="form_form__v9NsD",o="form_label__qLsdy",u="form_span__uOl4g",m="form_btn__7fiiK",d=t(184),h=function(e){var n=e.onSubmit,t=(0,a.useState)({name:"",number:""}),s=(0,i.Z)(t,2),h=s[0],f=s[1],p=function(e){var n=e.currentTarget,t=n.name,a=n.value;f((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,r.Z)({},t,a))}))};return(0,d.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),n(h),f({name:"",number:""})},children:[(0,d.jsxs)("label",{className:o,children:[(0,d.jsx)("span",{className:u,children:"Name"}),(0,d.jsx)("input",{type:"text",name:"name",value:h.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:p})]}),(0,d.jsxs)("label",{className:o,children:[(0,d.jsx)("span",{className:u,children:"Tel"}),(0,d.jsx)("input",{type:"tel",name:"number",value:h.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:p})]}),(0,d.jsx)("button",{className:m,type:"submit",children:"Add contact"})]})},f="contact-list_list__6PpQb",p="contact-list_item__YrRrv",_="contact-list_span__CyKE6",b="contact-list_btn__OV91a",x=function(e){var n=e.contacts,t=e.deleteContact,a=n.map((function(e){return(0,d.jsxs)("li",{id:e.id,className:p,children:[(0,d.jsxs)("span",{className:_,children:[e.name,":"]}),(0,d.jsx)("span",{children:e.number}),(0,d.jsx)("button",{className:b,onClick:function(){return t(e.id)},children:"Delete"})]},e.id)}));return(0,d.jsx)(d.Fragment,{children:n.length>0?(0,d.jsxs)("ul",{className:f,children:[a," "]}):(0,d.jsxs)("h2",{children:["Add some contacts ",(0,d.jsx)("br",{})," Your phonebook is empty"]})})},j="filter_span__gytXl",v=function(e){var n=e.filter,t=e.onChange;return(0,d.jsxs)("label",{children:[(0,d.jsx)("span",{className:j,children:"Find contacts by name"}),(0,d.jsx)("input",{type:"text",name:"filter",value:n,onChange:t})]})},C=t(9434),N=t(5653),g=function(e){var n=e.contacts,t=e.filter;return t?n.items.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})):n.items},y=function(e){return e.filter},k=t(1650),w=function(){var e=(0,C.v9)(g),n=(0,C.v9)(y),t=(0,C.I0)();(0,a.useEffect)((function(){t((0,k.CL)())}),[t]);return(0,d.jsxs)("div",{className:s,children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(h,{onSubmit:function(e){var n=e.name,a=e.number;t((0,k.v6)({name:n,number:a}))}}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(v,{onChange:function(e){var n=e.currentTarget.value;t((0,N.T)(n))},filter:n}),(0,d.jsx)(x,{contacts:e,deleteContact:function(e){var n=(0,k.in)(e);t(n)}})]})}}}]);
//# sourceMappingURL=565.7689b19b.chunk.js.map