(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{31:function(n,e,t){},44:function(n,e,t){"use strict";t.r(e);var r,a,i=t(1),c=t.n(i),o=t(19),s=t.n(o),l=(t(31),t(9)),d=t(3),m=t(7),p=t(4),u=t(14),f=t.n(u),j=t(20),h=function(n,e){var t=Object(i.useState)(null),r=Object(m.a)(t,2),a=r[0],c=r[1],o=Object(i.useState)(!1),s=Object(m.a)(o,2),l=s[0],p=s[1],u=Object(i.useState)(null),h=Object(m.a)(u,2),b=h[0],g=h[1],x=Object(i.useRef)(!0),O=Object(d.g)();return console.log(O.pathname),Object(i.useEffect)((function(){if(""===e&&x.current)x.current=!1;else{var t=function(){var e=Object(j.a)(f.a.mark((function e(){var t,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.prev=1,e.next=4,fetch(n);case 4:if((t=e.sent).ok){e.next=7;break}throw new Error(t.statusText);case 7:return e.next=9,t.json();case 9:r=e.sent,p(!1),c(r),g(null),e.next=20;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0.message),p(!1),g("There was an issue loading data.");case 20:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}}();t()}}),[n]),{data:a,loading:l,error:b,setError:g}},b=t(5),g=t.p+"static/media/plate.1bdd0f6d.png",x=t(2),O=b.a.button(r||(r=Object(p.a)(["\n  background: #698578;\n  padding: 1rem 3rem;\n  font-size: 1.4rem;\n  color: #fff;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  border-radius: 5rem;\n  transition: all 0.2s ease-in-out;\n  &:hover {\n    background: #5f6d5f;\n  }\n\n"]))),v=function(n){var e=n.text,t=n.click;return Object(x.jsx)(O,{onClick:t,children:e})},w=t(25),y=b.a.form(a||(a=Object(p.a)(["\n  display: flex;\n  border-radius: 5rem;\n  outline: 0.1rem solid #eee;\n  background: #fff;\n  justify-content: center;\n  align-items: center;\n  padding: 0 1rem;\n\n  input {\n    width: 100%;\n    outline: none;\n    border: 0;\n    background: transparent;\n    padding: 1rem 0.5rem;\n    font-size: 1.4rem;\n  }\n\n  .search-icon {\n    font-size: 1.5rem;\n    color: #608677;\n  }\n"])));var k,N,S,z,E=function(n){var e=n.func,t=n.value,r=n.update;return Object(x.jsxs)(y,{onSubmit:e,children:[Object(x.jsx)(w.a,{className:"search-icon"}),Object(x.jsx)("input",{type:"search",name:"search",id:"search",placeholder:"Search recipes",value:t,onChange:r})]})},T=b.a.div(k||(k=Object(p.a)(["\n  animation: fadeIn 0.3s ease-in;\n  overflow: hidden;\n  margin-bottom: 3rem;\n\n  .search {\n    background: #e6e8de;\n    width: 100%;\n    border-radius: 1rem;\n    padding: 2rem;\n    overflow: hidden;\n    position: relative;\n\n    img {\n        width: 100%;\n        animation: slideIn 0.5s linear;\n    }\n\n    .intro {\n      display: flex;\n      flex-flow: column nowrap;\n      row-gap: 2rem;\n    }\n  }\n\n  @keyframes slideIn {\n   from {\n      transform: translateX(100%) rotate(180deg);\n   }\n   to {\n      transform: translateX(0) rotate(0deg);\n   }\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @media (min-width: 576px) {\n    .search {\n      padding: 1rem;\n    }\n  } \n\n  @media (min-width: 768px) {\n    .search {\n      padding: 3rem 5rem;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      flex-flow: row wrap;\n      column-gap: 5rem;  \n      \n      .intro {\n          flex: 6;\n      }\n      .image {\n        flex: 6;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n    }\n"]))),I=function(n){var e=n.func,t=n.value,r=n.update;return Object(x.jsx)(T,{className:"container-fluid",children:Object(x.jsxs)("div",{className:"search",children:[Object(x.jsxs)("div",{className:"intro",children:[Object(x.jsx)("h2",{children:"Quick, Easy & Delicious Plant-based Recipes"}),Object(x.jsx)("p",{children:"Exlpore our collection of plant-based recipes to compliment your healthy lifestyle."}),Object(x.jsx)(E,{func:e,value:t,update:r})]}),Object(x.jsx)("div",{className:"image",children:Object(x.jsx)("img",{src:g,alt:"plate"})})]})})},C=t(26),P=b.a.article(N||(N=Object(p.a)(["\n  max-width: 320px;\n  padding: 1rem 1rem 2rem;\n  background: #f7fcfd;\n  border-radius: 0.5rem;\n  overflow: auto;\n  align-self: stretch;\n  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 1%);\n  cursor: pointer;\n\n  &:hover {\n    animation: scaleUp 0.5s linear forwards;\n    h2 {\n      color: #000;\n    }\n  }\n\n  header {\n    margin: 1rem 0;\n\n    h2 {\n      font-size: 1.5rem;\n      line-height: 2rem;\n      color: #616362;\n    }\n\n    .meta {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      column-gap: 0.5rem;\n      margin-bottom: 1rem;\n    }\n\n    span {\n      background: #608677;\n      color: #fff;\n      padding: 0.5rem 0.75rem;\n      border-radius: 1rem;\n      font-size: 0.75rem;\n      font-weight: 600;\n      display: inline-block;\n      margin-right: 0.5rem;\n    }\n\n    .time {\n      display: flex;\n      justify-content: flex-start;\n      align-items: center;\n      column-gap: 0.3rem;\n    }\n  }\n\n  img {\n    border-radius: 0.3rem;\n    width: 100%;\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n\n  @keyframes scaleUp {\n    from {\n      transform: translateY(0);\n    }\n    to {\n      transform: translateY(-0.5rem);\n    }\n  }\n"]))),R=function(n){var e=n.image,t=n.title,r=n.time,a=n.type,i=n.url;return Object(x.jsxs)(P,{onClick:function(){window.open(i,"_blank")},children:[Object(x.jsx)("img",{src:e,alt:t}),Object(x.jsxs)("header",{children:[Object(x.jsxs)("div",{className:"meta",children:[Object(x.jsx)("span",{children:a}),Object(x.jsxs)("p",{className:"time",children:[Object(x.jsx)(C.a,{className:"time-icon"}),r," mins"]})]}),Object(x.jsx)("h2",{children:t})]})]})},X=b.a.div(S||(S=Object(p.a)(["\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  z-index: 100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: auto;\n\n\n  &.hidden {\n    display: none;\n  }\n\n  div {\n    width: 35rem;\n    height: auto;\n    background-color: #fff;\n    border-radius: 0.5rem;\n    padding: 1.8rem;\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    row-gap: 1rem;\n    align-items: center;\n    position: relative;\n  }\n\n  .closeBtn {\n    position: absolute;\n    top: 1rem;\n    right: 1rem;\n    font-size: 1.5rem;\n    cursor: pointer;\n    background-color: transparent;\n    border: none;\n    outline: none;\n  }\n\n  .okBtn {\n    width: 5.5rem;\n    height: 2.5rem;\n    border-radius: 0.5rem;\n    background-color: #00a8ff;\n    color: #fff;\n    font-size: 1.2rem;\n    cursor: pointer;\n    outline: none;\n    border: none;\n\n    &:hover {\n      background-color: #0097e6;\n    }\n  }\n\n"])));function F(n){var e=n.closeModal,t=n.title,r=n.body;return Object(x.jsx)(X,{children:Object(x.jsxs)("div",{className:"modal",children:[Object(x.jsx)("button",{className:"closeBtn",onClick:function(){e(null)},children:"X"}),Object(x.jsx)("h2",{children:t}),Object(x.jsx)("p",{children:r}),Object(x.jsx)(v,{text:"Ok",click:function(){e(null)}})]})})}var B=b.a.main(z||(z=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: flex-start;\n  row-gap: 3rem;\n  overflow: hidden;\n  margin-bottom: 5rem;\n  animation: fadeIn 1s ease-in forwards;\n\n  button {\n    margin: 0 auto;\n  }\n\n  .recipes {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    row-gap: 3rem;\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"])));var D,L,M=function(){var n=Object(i.useState)("popular"),e=Object(m.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(""),c=Object(m.a)(a,2),o=c[0],s=c[1],l=Object(d.f)(),p="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=").concat("e7d8c517","&app_key=").concat("8aa35c072a105b7ce520481ea77454d7","&health=vegetarian"),u=h(p,t),f=u.data,j=u.loading,b=u.error,g=u.setError;return Object(x.jsx)("div",{className:"container-fluid",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)(I,{func:function(n){n.preventDefault(),r(o),s(""),l.push({pathname:"/search",state:{searchTerm:o}})},value:o,update:function(n){s(n.target.value)}}),Object(x.jsxs)(B,{children:[b&&Object(x.jsx)(F,{title:"Something Went Wrong!",body:"This could be a result of searching too quickly or no results were found. Please try again after 1 minute or try another search term.",closeModal:g}),Object(x.jsx)("h4",{children:"Most Popular Recipes"}),j&&Object(x.jsx)("p",{children:"Loading recipes..."}),Object(x.jsx)("div",{className:"recipes",children:f&&f.hits.map((function(n,e){return Object(x.jsx)(R,{image:n.recipe.image,title:n.recipe.label,time:n.recipe.totalTime,type:n.recipe.mealType,url:n.recipe.url},e)}))}),Object(x.jsx)(v,{text:"Explore more recipes",click:function(){l.push("/search")}})]})]})})},_=b.a.main(D||(D=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  row-gap: 3rem;\n  overflow: hidden;\n  margin-bottom: 5rem;\n  height: 100%;\n  min-height: 100vh;\n  animation: fadeIn 1s ease-in forwards;\n  \n\n  .loading {\n    margin-top: 3rem;\n  }\n\n  .recipes {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-between;\n    align-items: flex-start;\n    row-gap: 3rem;\n    margin-top: 4rem;\n  }\n\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n"]))),q=b.a.header(L||(L=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  row-gap: 1rem;\n  margin-bottom: 2rem;\n"])));var W,J,U,V,Y=function(){var n=Object(d.g)(),e="";n.state&&(e=n.state.searchTerm);var t=Object(i.useState)(""),r=Object(m.a)(t,2),a=r[0],c=r[1],o=Object(i.useState)(e),s=Object(m.a)(o,2),l=s[0],p=s[1],u=Object(i.useState)("Search our collection of plant-based recipes."),f=Object(m.a)(u,2),j=f[0],b=f[1],g="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(l,"&app_id=").concat("e7d8c517","&app_key=").concat("8aa35c072a105b7ce520481ea77454d7","&health=vegetarian"),O=h(g,l),v=O.data,w=O.loading,y=O.error,k=O.setError;return Object(i.useEffect)((function(){window.scrollTo(0,0),v?0===v.hits.length?b("No recipes found. Please try again."):b("Search results for ".concat(l)):b("Search our collection of plant-based recipes.")}),[v]),Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsxs)(q,{children:[Object(x.jsx)("h1",{children:"Explore Recipes"}),Object(x.jsx)("p",{children:j})]}),Object(x.jsx)(E,{func:function(n){n.preventDefault(),p(a),c("")},value:a,update:function(n){c(n.target.value)}}),Object(x.jsxs)(_,{children:[w&&Object(x.jsx)("p",{className:"loading",children:"Loading recipes..."}),Object(x.jsx)("div",{className:"recipes",children:v&&v.hits.map((function(n,e){return Object(x.jsx)(R,{title:n.recipe.label,image:n.recipe.image,type:n.recipe.mealType,time:n.recipe.totalTime,url:n.recipe.url,ingredients:n.recipe.ingredientLines},e)}))})]}),y&&Object(x.jsx)(F,{title:"Something Went Wrong!",body:"This could be a result of searching too quickly or no results were found. Please try again after 1 minute or try another search term.",closeModal:k})]})},A=b.a.nav(W||(W=Object(p.a)(["\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: flex-start;\n  justify-content: flex-start;\n  row-gap: 1rem;\n  background: #eee;\n  position: fixed;\n  top: 0;\n  right: 0;\n  height: 100vh;\n  width: 15rem;\n  padding: 3.5rem 2rem;\n  transition: transform 0.3s ease-in-out;\n  transform: ",";\n  z-index: 1;\n\n  a {\n    font-size: 1.4rem;\n  }\n  \n  @media (min-width: 576px) {\n    flex-flow: row nowrap;\n    align-items: center;\n    column-gap: 2rem;\n    position: initial;\n    top: initial;\n    right: initial;\n    width: initial;\n    background: transparent;\n    padding: 0;\n    transform: initial;\n    height: initial;\n    z-index: initial;\n  }\n"])),(function(n){return n.open?"translateX(0)":"translateX(100%)"})),H=function(n){var e=n.open;return Object(x.jsxs)(A,{open:e,children:[Object(x.jsx)(l.b,{to:"/",children:"Home"}),Object(x.jsx)(l.b,{to:"/search",children:"Explore Recipes"})]})},Q=b.a.div(J||(J=Object(p.a)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 1.5rem;\n  right: 2rem;\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: space-around;\n  z-index: 20;\n\n\n  div {\n    width: 2rem;\n    height: 0.25rem;\n    border-radius: 0.3rem;\n    background: #000;\n    transition: all 0.3s linear;\n    transform-origin: 1px;\n\n\n    &:nth-child(1) {\n      transform: ",";\n    }\n\n    &:nth-child(2) {\n      opacity: ",";\n      transform: ",";\n    }\n\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n\n  @media (min-width: 576px) {\n    display: none;\n  }\n"])),(function(n){return n.isOpen?"rotate(45deg)":"rotate(0)"}),(function(n){return n.isOpen?"0":"1"}),(function(n){return n.isOpen?"translateX(20px)":"translateX(0)"}),(function(n){return n.isOpen?"rotate(-45deg)":"rotate(0)"})),G=function(){var n=Object(i.useState)(!1),e=Object(m.a)(n,2),t=e[0],r=e[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(Q,{isOpen:t,onClick:function(){return r(!t)},children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]}),Object(x.jsx)(H,{open:t})]})},K=b.a.header(U||(U=Object(p.a)(["\n  margin-bottom: 1rem;\n\n  h1 {\n    color: #698578;\n    font-size: 3.8rem;\n  }\n\n  a {\n    color: #000;\n  }\n  .container-fluid {\n    height: 6.5rem;\n    background-color: transparent;\n    padding: 2rem 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: relative;\n  }\n"]))),Z=function(){return Object(x.jsx)(K,{children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("a",{href:"https://bramwellhorace-fs.github.io/vego-recipe-app",className:"logo",children:Object(x.jsx)("h1",{children:"Vego"})}),Object(x.jsx)(G,{})]})})},$=b.a.footer(V||(V=Object(p.a)(["\n  background-color: #E6E8DF;\n  padding: 20px 0;\n  text-align: center;\n  font-size: 14px;\n  color: #666;\n"]))),nn=function(){return Object(x.jsx)($,{children:Object(x.jsx)("div",{className:"container",children:Object(x.jsx)("p",{children:"Vego \xa9 2021. All Rights Reserved."})})})};var en=function(){return Object(x.jsx)(l.a,{children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsxs)("div",{className:"container",children:[Object(x.jsx)(Z,{}),Object(x.jsxs)(d.c,{children:[Object(x.jsx)(d.a,{exact:!0,path:"/",component:M}),Object(x.jsx)(d.a,{path:"/search",component:Y})]})]}),Object(x.jsx)(nn,{})]})})},tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(e){var t=e.getCLS,r=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;t(n),r(n),a(n),i(n),c(n)}))};s.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(en,{})}),document.getElementById("root")),tn()}},[[44,1,2]]]);
//# sourceMappingURL=main.d6d9ee67.chunk.js.map