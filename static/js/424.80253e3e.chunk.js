"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[424],{7424:function(e,l,i){i.r(l),i.d(l,{default:function(){return m}});var r=i(9439),a=i(2791),o=i(7689),s=i(9434),n=i(6355),t=i(9306),f=i(184);function m(){var e,l,i,m,u,d=(0,s.I0)(),c=(0,o.TH)().state,p=null===c||void 0===c?void 0:c.userDetails,v=(0,s.v9)((function(e){return e.user})),_=v.isAuthenticated,h=v.isLoading,g=v.validationError,j=v.user,x={};x=null!=p?p:j,(0,a.useEffect)((function(){d((0,t.UA)())}),[d]);var N,I=(0,a.useState)(null===(e=x)||void 0===e?void 0:e.name),b=(0,r.Z)(I,2),y=b[0],F=b[1],P=(0,a.useState)(null===(l=x)||void 0===l?void 0:l.email),C=(0,r.Z)(P,2),E=C[0],L=C[1],w=(0,a.useState)(null===(i=x)||void 0===i?void 0:i.profileImage),U=(0,r.Z)(w,2),k=U[0],S=U[1];if(!_&&!h)return(0,f.jsx)(o.Fg,{to:"/"});if(null==(null===(m=x)||void 0===m?void 0:m.profileImage))N=(0,f.jsx)(n.m3W,{className:"profile__imagePreview"});else if("string"===typeof(null===(u=x)||void 0===u?void 0:u.profileImage)){var Z;N=null===(Z=x)||void 0===Z?void 0:Z.profileImage}return"object"===typeof k&&(N=URL.createObjectURL(k)),(0,f.jsxs)("div",{className:"profile",children:[(0,f.jsx)("h3",{className:"profile__heading",children:"My Profile"}),(0,f.jsxs)("form",{onSubmit:function(e){return function(e){var l;e.preventDefault(),d((0,t.Nq)({userId:null===(l=x)||void 0===l?void 0:l.userId,username:y,email:E,profileImage:k}))}(e)},className:"profile__form",children:[(0,f.jsxs)("div",{className:"profile__formField profile__image",children:[(0,f.jsx)("label",{className:"profile__formLabel",htmlFor:"profileImage",children:"Profile Picture"}),(0,f.jsx)("div",{className:"profile__imagePreviewContainer",children:(0,f.jsx)("img",{className:"profile__imagePreview",src:N,alt:"profile"})}),(0,f.jsx)("span",{className:"profile__formError",children:null===g||void 0===g?void 0:g.profileImage}),(0,f.jsx)("input",{className:"profile__formInput profile__imageInput",type:"file",id:"profileImage",onChange:function(e){return S(e.target.files[0])}})]}),(0,f.jsxs)("div",{className:"profile__info",children:[(0,f.jsxs)("div",{className:"profile__formField",children:[(0,f.jsx)("label",{className:"profile__formLabel",htmlFor:"username",children:"Username"}),(0,f.jsx)("input",{className:"profile__formInput",type:"text",id:"username",placeholder:"Jordan",value:y,onChange:function(e){return F(e.target.value)}}),(0,f.jsx)("span",{className:"profile__formError",children:null===g||void 0===g?void 0:g.username})]}),(0,f.jsxs)("div",{className:"profile__formField",children:[(0,f.jsx)("label",{className:"profile__formLabel",htmlFor:"email",children:"Email"}),(0,f.jsx)("input",{className:"profile__formInput",type:"text",id:"email",placeholder:"jordan@gmail.com",value:E,onChange:function(e){return L(e.target.value)}}),(0,f.jsx)("span",{className:"profile__formError",children:null===g||void 0===g?void 0:g.email})]})]}),(0,f.jsx)("button",{className:"profile__formButton",type:"submit",disabled:h,children:"Update Profile"})]})]})}}}]);
//# sourceMappingURL=424.80253e3e.chunk.js.map