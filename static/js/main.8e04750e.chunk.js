(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/loading.65978728.gif"},31:function(e,t,a){e.exports=a.p+"static/media/banner.aa76c6ef.png"},32:function(e,t,a){e.exports=a.p+"static/media/banner-mobile.8042c89c.png"},33:function(e,t,a){e.exports=a.p+"static/media/404.fa0b832c.png"},34:function(e,t,a){e.exports=a(79)},39:function(e,t,a){},45:function(e,t,a){},47:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(27),l=a.n(s),c=a(19),i=a(6),m=a(3),o=a(2);const u="@todolist-Token",p="@todolist-User",d="@todolist-Id",E=()=>null!==localStorage.getItem(u)&&null!==localStorage.getItem(p)&&null!==localStorage.getItem(d),b=()=>localStorage.getItem(d),g=(e,t,a)=>{localStorage.setItem(u,e),localStorage.setItem(p,t),localStorage.setItem(d,a)};a(39);var f=()=>{const e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(n.useState)(!1),c=Object(o.a)(l,2),b=c[0],g=c[1],f=Object(m.g)();return r.a.createElement("div",{className:a?"menu open":"menu"},r.a.createElement("button",{type:"button",className:"menu__hamburguer",onClick:function(){s(!a)}},r.a.createElement("span",null,r.a.createElement("i",null),r.a.createElement("i",null),r.a.createElement("i",null)),"Menu"),r.a.createElement("nav",null,r.a.createElement("ul",{className:"menu__list"},["Sobre","Produtos","Contato"].map(e=>r.a.createElement("li",{key:e,className:"menu__list-item"},r.a.createElement(i.b,{to:e,title:e},e))))),E()?r.a.createElement("div",{className:"menu__session"},r.a.createElement("button",{type:"button",onClick:function(){g(!b)},className:"menu__user"},localStorage.getItem(p),r.a.createElement("span",null)),r.a.createElement("div",{className:"menu__box ".concat(b?"active":"")},r.a.createElement("button",{type:"button",onClick:function(){localStorage.removeItem(u),localStorage.removeItem(p),localStorage.removeItem(d),f.push("/")}},"Logout"))):"")};a(45);var v=()=>r.a.createElement("header",{className:"main-header"},r.a.createElement("div",{className:"main-header__container"},r.a.createElement("h1",{className:"main-header__title"},r.a.createElement(i.b,{to:"/",title:"CorpInc."},"CorpInc.")),r.a.createElement(f,null))),h=a(1),_=a.n(h),N=a(4),O=a(12),j=a(29),k=a.n(j);a(47);var S=function(){return r.a.createElement("div",{className:"loading"},r.a.createElement("img",{src:k.a,alt:"Carregando",title:"Carregando"}))},y=a(30);const w=a.n(y).a.create({baseURL:"https://api-corpinc.herokuapp.com/"});w.interceptors.request.use(function(){var e=Object(N.a)(_.a.mark((function e(t){var a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=localStorage.getItem(u))&&(t.headers.Authorization="Bearer ".concat(a)),e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var x=w;a(66);const C=({handleClick:e})=>{const t=Object(O.a)(),a=t.register,s=t.errors,l=t.handleSubmit,c=Object(n.useRef)(),i=Object(n.useState)(""),m=Object(o.a)(i,2),u=m[0],p=m[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),b=E[0],g=E[1],f=Object(n.useState)(!1),v=Object(o.a)(f,2),h=v[0],j=v[1];function k(){return(k=Object(N.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.name,n=t.email,r=t.password,e.prev=1,j(!0),e.next=5,x.post("/auth/local/register",{username:a,email:n,password:r});case 5:j(!1),p("Usu\xe1rio cadastrado com sucesso."),c.current.click(),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),j(!1),p("Erro ao cadastrar");case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)(()=>{u&&(g(!0),setTimeout(()=>{p(""),g(!1)},3e3))},[u]),r.a.createElement("div",{className:"signup"},r.a.createElement("header",null,r.a.createElement("h3",null,"Criar uma conta"),r.a.createElement("button",{ref:c,type:"button","data-to":"1",onClick:e},"Acessar")),r.a.createElement("form",{className:"form-signup",onSubmit:l((function(e){return k.apply(this,arguments)})),method:"post"},r.a.createElement("div",{className:"form-signup__item"},r.a.createElement("label",{htmlFor:"signup-name"},"Nome"),r.a.createElement("input",{ref:a({required:"Nome \xe9 obrigat\xf3rio"}),type:"text",name:"name",id:"signup-name"}),s.name&&r.a.createElement("p",{className:"form-signin__error"},s.name.message)),r.a.createElement("div",{className:"form-signup__item"},r.a.createElement("label",{htmlFor:"signup-email"},"E-mail"),r.a.createElement("input",{ref:a({required:"E-mail \xe9 obrigat\xf3rio",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"E-mail inv\xe1lido"}}),type:"email",name:"email",id:"signup-email"}),s.email&&r.a.createElement("p",{className:"form-signin__error"},s.email.message)),r.a.createElement("div",{className:"form-signup__item"},r.a.createElement("label",{htmlFor:"signup-password"},"Senha"),r.a.createElement("input",{ref:a({required:"Senha \xe9 obrigat\xf3ria",minLength:{value:6,message:"A senha deve ter pelo menos 6 caracteres"}}),type:"password",name:"password",id:"signup-password"}),s.password&&r.a.createElement("p",{className:"form-signin__error"},s.password.message)),r.a.createElement("input",{disabled:h,className:"form-signup__submit",type:"submit",name:"Cadastrar",value:h?"Carregando...":"Cadastrar"}),h&&r.a.createElement(S,null),u&&r.a.createElement("p",{className:"form-signup__message ".concat(b?" active":"")},u)))};C.defaultProps={handleClick:()=>{}};var q=C;a(67);const I=({handleClick:e})=>{const t=Object(O.a)(),a=t.register,s=t.errors,l=t.handleSubmit,c=Object(n.useState)(""),i=Object(o.a)(c,2),u=i[0],p=i[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),b=E[0],f=E[1],v=Object(n.useState)(!1),h=Object(o.a)(v,2),j=h[0],k=h[1],y=Object(m.g)();function w(){return(w=Object(N.a)(_.a.mark((function e(t){var a,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.email,n=t.password,e.prev=1,k(!0),e.next=5,x.post("/auth/local/",{identifier:a,password:n});case 5:r=e.sent,k(!1),g(r.data.jwt,r.data.user.username,r.data.user._id),y.push("/tasks"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),k(!1),p("Erro ao autenticar. Confira os dados digitados.");case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}return Object(n.useEffect)(()=>{u&&(f(!0),setTimeout(()=>{p(""),f(!1)},3e3))},[u]),r.a.createElement("div",{className:"signin"},r.a.createElement("header",null,r.a.createElement("h3",null,"Acessar conta"),r.a.createElement("button",{type:"button","data-to":"0",onClick:e},"Cadastrar")),r.a.createElement("form",{className:"form-signin",onSubmit:l((function(e){return w.apply(this,arguments)})),method:"post"},r.a.createElement("div",{className:"form-signin__item"},r.a.createElement("label",{htmlFor:"signin-email"},"E-mail"),r.a.createElement("input",{ref:a({required:"E-mail \xe9 obrigat\xf3rio",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,message:"E-mail inv\xe1lido"}}),type:"email",name:"email",id:"signin-email"}),s.email&&r.a.createElement("p",{className:"form-signin__error"},s.email.message)),r.a.createElement("div",{className:"form-signin__item"},r.a.createElement("label",{htmlFor:"signin-password"},"Senha"),r.a.createElement("input",{ref:a({required:"Senha \xe9 obrigat\xf3ria",minLength:{value:6,message:"A senha deve ter pelo menos 6 caracteres"}}),type:"password",name:"password",id:"signin-password"}),s.password&&r.a.createElement("p",{className:"form-signin__error"},s.password.message)),r.a.createElement("input",{disabled:j,className:"form-signin__submit",type:"submit",name:"Acessar",value:j?"Carregando...":"Acessar"}),j&&r.a.createElement(S,null),u&&r.a.createElement("p",{className:"form-signin__message ".concat(b?" active":"")},u)))};I.defaultProps={handleClick:()=>{}};var A=I;a(68);var F=({children:e})=>{const t=Object(n.useRef)(),a=Object(n.useRef)();function s(e){const n=parseInt(e.target.getAttribute("data-to")),r=a.current.offsetWidth*n;t.current.style.transform="translateX(-".concat(r,"px)")}return r.a.createElement("div",{className:"slider"},r.a.createElement("ul",{ref:t,className:"slider__list"},e.map(e=>r.a.createElement("li",{key:e.type.name,ref:a,className:"slider__list-item"},r.a.createElement(e.type,{handleClick:s})))))};a(69);var L=()=>r.a.createElement("main",{className:"home"},r.a.createElement(v,null),r.a.createElement("section",{className:"home__card"},r.a.createElement("div",{className:"home__card-image"},r.a.createElement("h2",null,r.a.createElement("strong",null,"Venha conhecer"),r.a.createElement("br",null),"nossa aplica\xe7\xe3o!")),r.a.createElement(F,null,r.a.createElement(q,null),r.a.createElement(A,null)))),R=a(31),T=a.n(R),U=a(32),Z=a.n(U);a(70);var D=()=>r.a.createElement("section",{className:"banner"},r.a.createElement("picture",null,r.a.createElement("source",{media:"(max-width: 767px)",srcSet:Z.a,title:"CorpoInc.",alt:"CorpoInc."}),r.a.createElement("img",{src:T.a,title:"CorpoInc.",alt:"CorpoInc."})));a(71);var V=({formSubmited:e})=>{const t=Object(O.a)(),a=t.register,s=t.errors,l=t.handleSubmit,c=t.setValue,m=Object(n.useState)(!1),u=Object(o.a)(m,2),p=u[0],d=u[1],E=Object(n.useState)(""),g=Object(o.a)(E,2),f=g[0],v=g[1],h=Object(n.useState)(!1),j=Object(o.a)(h,2),k=j[0],y=j[1],w=Object(n.useState)(!1),C=Object(o.a)(w,2),q=C[0],I=C[1];const A=e=>parseFloat(e.replace(/\./g,"").replace(",","."));function F(){return(F=Object(N.a)(_.a.mark((function t(a){var n,r;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.value,r=a.observation,t.prev=1,I(!0),t.next=5,x.post("/tasks",{valor:A(n),observacao:r,user:b()});case 5:I(!1),v("Tarefa cadastrada com sucesso."),e(),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),I(!1),v("Erro ao cadastrar tarefa");case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)(()=>{f&&(y(!0),setTimeout(()=>{v(""),y(!1)},3e3))},[f]),r.a.createElement("form",{className:"form-list",method:"post",onSubmit:l((function(e){return F.apply(this,arguments)}))},r.a.createElement("div",{className:"form-list__entry"},r.a.createElement("div",{className:"form-list__entry-item"},r.a.createElement("label",{htmlFor:"value"},"Valor"),r.a.createElement("div",null,r.a.createElement("span",null,"R$"),r.a.createElement("input",{ref:a({required:"Valor obrigat\xf3rio",validate:{greaterThanZero:e=>function(e){return e?parseInt(e.replace(/\D/g,""))/100:0}(e)>0||"O valor deve ser maior que zero."}}),maxLength:12,type:"text",name:"value",id:"value",onChange:e=>c("value",function(e){if(e){return(parseInt(e.replace(/\D/g,""))/100).toLocaleString("pt-br",{minimumFractionDigits:2})}return"0,00"}(e.currentTarget.value))})),s.value&&r.a.createElement("p",{className:"form-list__error"},s.value.message)),r.a.createElement("div",{className:"form-list__entry-item"},r.a.createElement("label",{htmlFor:"observation"},"Observa\xe7\xe3o"),r.a.createElement("textarea",{ref:a({required:"Observa\xe7\xe3o obrigat\xf3ria",maxLength:{value:300,message:"A observa\xe7\xe3o deve ter no m\xe1ximo 300 caract\xe9res."}}),rows:"5",name:"observation",id:"observation"}),s.observation&&r.a.createElement("p",{className:"form-list__error"},s.observation.message))),r.a.createElement("div",{className:"form-list__send"},r.a.createElement("div",{className:"form-list__checkbox"},r.a.createElement("input",{ref:a,type:"checkbox",id:"check-terms",name:"check-terms",onChange:function(){d(!p)}}),r.a.createElement("label",{htmlFor:"check-terms"},"Aceito os termos"," ",r.a.createElement(i.b,{to:"/Termos",title:"descritos"},"descritos"))),r.a.createElement("input",{disabled:!p||q,className:"form-list__submit",type:"submit",name:"Adicionar",value:q?"Carregando...":"Adicionar"}),q&&r.a.createElement(S,null)),f&&r.a.createElement("p",{className:"form-list__message ".concat(k?" active":"")},f))};a(72);const P=({tasks:e})=>r.a.createElement("div",null,r.a.createElement("h3",{className:"list__title"},"Itens"),r.a.createElement("ul",{className:"list ".concat(e.length>6?"scroll":"")},e.map(e=>r.a.createElement("li",{key:e.id,className:"list__item"},r.a.createElement("p",null,e.valor.toLocaleString("pt-BR")),r.a.createElement(i.b,{to:"/tasks/".concat(e.id)},"Detalhes")))),r.a.createElement("p",{className:"list__message ".concat(0===e.length?"active":"")},"Nenhum item cadastrado"));var B=P;P.defaultProps={tasks:[]};a(73);var $=()=>r.a.createElement("footer",null,r.a.createElement("p",null,"\xa9 CorpInc. \xe9 uma marca registrada"));a(74);var z=()=>{const e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],s=t[1];function l(){return c.apply(this,arguments)}function c(){return(c=Object(N.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/tasks?user=".concat(b()));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)(()=>{l()},[]),r.a.createElement("main",{className:"admin"},r.a.createElement(v,null),r.a.createElement(D,null),r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"admin__description--mobile"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada."),r.a.createElement(V,{formSubmited:function(){l()}}),r.a.createElement("p",{className:"admin__description--desktop"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus sed vulputate odio ut enim blandit volutpat. Dignissim convallis aenean et tortor at risus viverra. Eget arcu dictum varius duis at consectetur lorem donec. Urna condimentum mattis pellentesque id nibh. Condimentum mattis pellentesque id nibh tortor id aliquet. Nisi quis eleifend quam adipiscing. Tellus in metus vulputate eu scelerisque. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Accumsan in nisl nisi scelerisque eu ultrices vitae. Rhoncus aenean vel elit scelerisque mauris. Ut venenatis tellus in metus vulputate. Sagittis aliquam malesuada."),r.a.createElement(B,{tasks:a})),r.a.createElement($,null))};a(75);var J=()=>{const e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],s=t[1],l=Object(m.h)().id;return Object(n.useEffect)(()=>{function e(){return(e=Object(N.a)(_.a.mark((function e(){var t;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/tasks/".concat(l));case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]),r.a.createElement("main",null,r.a.createElement(v,null),r.a.createElement(D,null),r.a.createElement("div",{className:"container"},r.a.createElement("article",{className:"task",key:a.id},r.a.createElement("h2",{className:"task__title"},a.valor),r.a.createElement("p",{className:"task__description"},a.observacao))))},H=a(33),M=a.n(H);a(76);var W=()=>r.a.createElement("main",{className:"not-found"},r.a.createElement("div",{className:"not-found__card"},r.a.createElement("img",{src:M.a,title:"Erro 404",alt:"Erro 404"}),r.a.createElement("h2",null,r.a.createElement("strong",null,"Ops!")," ","Ocorreu um erro."),r.a.createElement("p",null,"N\xe3o conseguimos encontrar a p\xe1gina acessada"),r.a.createElement(i.b,{to:"/"},"Voltar a Home")));const X=e=>{let t=e.component,a=Object(c.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:e=>E()?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/"}})}))},G=e=>{let t=e.component,a=Object(c.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},a,{render:e=>E()?r.a.createElement(m.a,{to:"/tasks"}):r.a.createElement(t,e)}))};var K=()=>r.a.createElement(i.a,{basename:"/todo-list"},r.a.createElement(m.d,null,r.a.createElement(G,{exact:!0,path:"/",component:L}),r.a.createElement(X,{exact:!0,path:"/tasks",component:z}),r.a.createElement(X,{path:"/tasks/:id",component:J}),r.a.createElement(m.b,{path:"*",component:W})));a(77);var Q=()=>r.a.createElement(K,null);a(78);l.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.8e04750e.chunk.js.map