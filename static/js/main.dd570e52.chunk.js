(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{19:function(t,e,n){t.exports={list:"ContactsList_list__bZmfy",item:"ContactsList_item__1f_IU",button:"ContactsList_button__3vENl"}},24:function(t,e,n){t.exports={label:"Filter_label__1239a",input:"Filter_input__3DUDH"}},41:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e);var c={};n.r(c),n.d(c,"fetchContactsRequest",(function(){return x})),n.d(c,"fetchContactsSuccess",(function(){return _})),n.d(c,"fetchContactsError",(function(){return y})),n.d(c,"addContactRequest",(function(){return F})),n.d(c,"addContactSuccess",(function(){return N})),n.d(c,"addContactError",(function(){return w})),n.d(c,"deleteContactRequest",(function(){return k})),n.d(c,"deleteContactSuccess",(function(){return S})),n.d(c,"deleteContactError",(function(){return E})),n.d(c,"changeFilter",(function(){return q}));var r={};n.r(r),n.d(r,"fetchContacts",(function(){return z})),n.d(r,"addContact",(function(){return D})),n.d(r,"deleteContact",(function(){return U}));var a={};n.r(a),n.d(a,"getContacts",(function(){return I})),n.d(a,"getFilter",(function(){return M})),n.d(a,"getFilteredContacts",(function(){return G})),n.d(a,"isLoadingContacts",(function(){return H}));var o=n(0),u=n.n(o),s=n(15),i=n.n(s),l=(n(41),n(3)),d=n(21),b=n(36),f=n(22),j=n.n(f),O=n(6),p=n(7),m=n.n(p),h=n(18),C=n(2),v=n(11),g=n.n(v),x=Object(C.b)("contacts/fetchContactRequest"),_=Object(C.b)("contacts/fetchContactSuccess"),y=Object(C.b)("contacts/addContactError"),F=Object(C.b)("contacts/addContactRequest"),N=Object(C.b)("contacts/addContactSuccess"),w=Object(C.b)("contacts/addContactError"),k=Object(C.b)("contacts/deleteContactRequest"),S=Object(C.b)("contacts/deleteContactSuccess"),E=Object(C.b)("contacts/deleteContactError"),q=Object(C.b)("contacts/Filter");g.a.defaults.baseURL="https://6197aefa164fa60017c22d4f.mockapi.io/contacts";var A,L,R,z=Object(C.c)("contacts/fetchContacts",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,g.a.get("./contacts");case 4:return r=t.sent,t.abrupt("return",r.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),D=Object(C.c)("contacts/addContact",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c,r,a,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.name,r=e.number,a=n.rejectWithValue,t.prev=2,t.next=5,g.a.post("/contacts",{name:c,number:r});case 5:return o=t.sent,t.abrupt("return",o.data);case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return",a(t.t0));case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e,n){return t.apply(this,arguments)}}()),U=Object(C.c)("contact/deleteContact",function(){var t=Object(h.a)(m.a.mark((function t(e,n){var c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=n.rejectWithValue,t.prev=1,t.next=4,g.a.delete("contacts/".concat(e));case 4:return r=t.sent,t.abrupt("return",r.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",c(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),W=n(17),Z=n(4);console.log("addContact.fulfilled",D.fulfilled);var B=Object(C.d)([],(A={},Object(l.a)(A,z.fulfilled,(function(t,e){var n=e.payload;return console.log("payload in reducer",n),console.log("fetchContacts.fulfilled",z.fulfilled),n})),Object(l.a)(A,D.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(W.a)(t),[n])})),Object(l.a)(A,U.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n.id}))})),A)),J=Object(C.d)(!1,(L={},Object(l.a)(L,z.pending,(function(){return!0})),Object(l.a)(L,z.fulfilled,(function(){return!1})),Object(l.a)(L,z.rejected,(function(){return!1})),Object(l.a)(L,D.pending,(function(){return!0})),Object(l.a)(L,D.fulfilled,(function(){return!1})),Object(l.a)(L,D.rejected,(function(){return!1})),Object(l.a)(L,U.pending,(function(){return!0})),Object(l.a)(L,U.fulfilled,(function(){return!1})),Object(l.a)(L,U.rejected,(function(){return!1})),L)),P=Object(C.d)("",Object(l.a)({},q,(function(t,e){return e.payload}))),T=Object(C.d)(null,(R={},Object(l.a)(R,z.rejected,(function(t,e){return e.payload})),Object(l.a)(R,z.pending,(function(){return null})),Object(l.a)(R,D.rejected,(function(t,e){return e.payload})),Object(l.a)(R,U.rejected,(function(t,e){return e.payload})),R)),V=Object(Z.b)({items:B,filter:P,loading:J,error:T}),I=function(t){return t.contacts.items},M=function(t){return t.contacts.filter},G=function(t){var e=I(t),n=t.contacts.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))},H=function(t){return t.contacts.loading},X=n(8),$=n.n(X),K=n(1),Q=function(){var t=Object(o.useState)({name:"",number:""}),e=Object(b.a)(t,2),n=e[0],c=e[1],u=Object(O.c)(a.getContacts),s=Object(O.b)(),i=j.a.generate(),f=j.a.generate(),p=function(t){var e=t.currentTarget,n=e.name,r=e.value;c((function(t){return Object(d.a)(Object(d.a)({},t),{},Object(l.a)({},n,r))}))},m=function(){c({name:"",number:""})};return Object(K.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault(),u.find((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts")):(s(r.addContact(n)),m())},children:[Object(K.jsxs)("label",{className:$.a.label,htmlFor:i,children:["Name",Object(K.jsx)("input",{className:$.a.input,type:"text",name:"name",value:n.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:p,id:i})]}),Object(K.jsxs)("label",{className:$.a.label,htmlFor:f,children:["Number",Object(K.jsx)("input",{className:$.a.input,type:"tel",name:"number",value:n.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:p,id:f})]}),Object(K.jsx)("button",{className:$.a.button,type:"submit",children:"Add contact"})]})},Y=Object(o.memo)(Q),tt=n(19),et=n.n(tt);function nt(){var t=Object(O.c)(a.getFilteredContacts),e=Object(O.c)(a.isLoadingContacts),n=Object(O.b)();return Object(o.useEffect)((function(){n(r.fetchContacts())}),[n]),Object(K.jsxs)(K.Fragment,{children:[e&&Object(K.jsx)("h1",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),0===t.length?Object(K.jsx)("div",{children:" No contacts "}):Object(K.jsx)("ul",{className:et.a.list,children:t.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(K.jsxs)("li",{className:et.a.item,children:[c,": ",a,Object(K.jsx)("button",{className:et.a.button,type:"button",onClick:function(){return function(t){return n(r.deleteContact(t))}(e)},children:"Delete"})]},e)}))})]})}nt.defaultProps={contacts:[]};var ct=n(24),rt=n.n(ct),at=function(){var t=Object(O.c)(a.getFilter),e=Object(O.b)();return Object(K.jsxs)("label",{className:rt.a.label,children:["Find contacts by name",Object(K.jsx)("input",{className:rt.a.input,type:"text",value:t,onChange:function(t){return e(c.changeFilter(t.target.value))}})]})};at.defaultProps={value:""};var ot=at,ut=function(){return Object(K.jsxs)("div",{className:"App",children:[Object(K.jsx)("h1",{children:"Phonebook"}),Object(K.jsx)(Y,{}),Object(K.jsx)("h2",{children:"Contacts"}),Object(K.jsx)(ot,{}),Object(K.jsx)(nt,{})]})},st=n(35),it=n.n(st),lt=n(25),dt=n.n(lt),bt=n(9),ft=(dt.a,[].concat(Object(W.a)(Object(C.e)({serializableCheck:{ignoredActions:[bt.a,bt.f,bt.b,bt.c,bt.d,bt.e]}})),[it.a])),jt=(dt.a,Object(C.a)({reducer:{contacts:V},middleware:ft,devTools:!1}));i.a.render(Object(K.jsx)(u.a.StrictMode,{children:Object(K.jsx)(O.a,{store:jt,children:Object(K.jsx)(ut,{})})}),document.getElementById("root"))},8:function(t,e,n){t.exports={form:"Form_form__3uGWR",label:"Form_label__17cXu",input:"Form_input__2S9BS",button:"Form_button__1UCTw"}}},[[79,1,2]]]);
//# sourceMappingURL=main.dd570e52.chunk.js.map