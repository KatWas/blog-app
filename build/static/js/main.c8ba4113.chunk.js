(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{280:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(126),i=n.n(r),s=n(132),o=n(9),l=n(65),j=n(33),d=n(22),h=n(42),b=n(16),u=function(e){return[e.getDate(),e.getMonth()+1,e.getFullYear()].join("/")},O=n(1),x=function(e){var t=e.postData;return Object(O.jsx)(h.a,{xs:"12",md:"6",lg:"4",className:"p-2 justify-content-between",children:Object(O.jsx)(d.a,{className:"mw-100 mt-2",children:Object(O.jsxs)(d.a.Body,{children:[Object(O.jsx)(d.a.Title,{children:t.title}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Author:  "}),t.author]}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Published:  "}),u(t.publishedDate)]}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Category: "}),t.category]}),Object(O.jsx)(d.a.Text,{children:t.shortDescription}),Object(O.jsx)(b.b,{to:"/post/"+t.id,children:Object(O.jsx)(j.a,{variant:"primary",children:"Read more"})})]})})})},p=n(19),f=n(2),m=n(14),g=n(128),y=n.n(g),w=function(e){return e.posts},v=function(e,t){return e.posts.find((function(e){return e.id===t}))},D=function(e){return"app/posts/".concat(e)},k=D("REMOVE_POST"),T=D("ADD_POST"),N=D("EDIT_POST"),S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return e.filter((function(e){return e.id!==t.payload}));case T:return[].concat(Object(m.a)(e),[Object(f.a)(Object(f.a)({},t.payload),{},{id:y()()})]);case N:return e.map((function(e){return e.id===t.payload.id?Object(f.a)(Object(f.a)({},e),t.payload):e}));default:return e}},C=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"d-flex justify-content-between me-auto",children:[Object(O.jsx)("h2",{children:"All posts"}),Object(O.jsx)(b.b,{to:"/post/add",children:Object(O.jsx)(j.a,{variant:"outline-info",children:"Add post"})})]})})},E=function(){var e=Object(p.c)(w);return Object(O.jsxs)("div",{children:[Object(O.jsx)(C,{}),Object(O.jsx)(l.a,{className:"justify-content-between align-items-between",children:e.map((function(e){return Object(O.jsx)(x,{postData:e},e.id)}))})]})},A=n(10),L=n(5),_=n(134),B=n(50),I=n(51),q=n(70),M=n(34),P=n(98),J=n(94),R=n(129),W=function(e){Object(P.a)(n,e);var t=Object(J.a)(n);function n(){return Object(B.a)(this,n),t.apply(this,arguments)}return Object(I.a)(n,[{key:"destroyEditor",value:function(){this.editor&&this.unhookEditor(this.editor)}},{key:"instantiateEditor",value:function(){this.editor&&this.hookEditor(this.editor),Object(q.a)(Object(M.a)(n.prototype),"instantiateEditor",this).call(this)}}]),n}(n.n(R).a),X=(n(230),n(130)),F=n.n(X),V=(n(231),n(135)),H=n(47),U=function(e){return e.categories},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"XX"===t.type?console.log(e):e},Y=function(e){var t=e.props;return Object(O.jsx)("option",{value:t,children:t})};var z=function(e){var t=Object(H.c)(U);return Object(O.jsxs)(_.a.Select,{children:[Object(O.jsx)("option",{children:e.data}),t.map((function(e){return Object(O.jsx)(Y,{props:e},e)}))]})},K=["action","actionText"],Q=function(e){var t=e.action,n=e.actionText,c=Object(L.a)(e,K),r=Object(a.useState)(c.title||""),i=Object(A.a)(r,2),s=i[0],o=i[1],d=Object(a.useState)(c.author||""),b=Object(A.a)(d,2),u=b[0],x=b[1],p=Object(a.useState)(c.publishedDate||""),m=Object(A.a)(p,2),g=m[0],y=m[1],w=Object(a.useState)(c.shortDescription||""),v=Object(A.a)(w,2),D=v[0],k=v[1],T=Object(a.useState)(c.content||""),N=Object(A.a)(T,2),S=N[0],C=N[1],E=Object(a.useState)(!1),B=Object(A.a)(E,2),I=B[0],q=B[1],M=Object(a.useState)(!1),P=Object(A.a)(M,2),J=P[0],R=P[1],X=Object(V.a)(),H=X.register,U=X.handleSubmit,G=X.formState.errors;return Object(O.jsxs)(_.a,{onSubmit:U((function(e){R(!g),q(!S),S&&g&&t({title:s,author:u,publishedDate:g,shortDescription:D,content:S})})),children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{className:"m-auto",lg:8,children:Object(O.jsxs)(_.a.Group,{className:"mb-3",controlId:"formBasicTitle",children:[Object(O.jsx)(_.a.Label,{children:"Title"}),Object(O.jsx)(_.a.Control,Object(f.a)(Object(f.a)({},H("title",{required:!0,minLength:3})),{},{type:"text",placeholder:"Enter title",value:s,onChange:function(e){return o(e.target.value)}})),G.title&&Object(O.jsx)("small",{className:"d-block form-text text-danger mt-2",children:"This field is required. Min 3 characters."}),Object(O.jsx)(_.a.Label,{children:"Author"}),Object(O.jsx)(_.a.Control,Object(f.a)(Object(f.a)({},H("author",{required:!0,minLength:3})),{},{type:"text",placeholder:"Enter author",value:u,onChange:function(e){return x(e.target.value)}})),G.author&&Object(O.jsx)("small",{className:"d-block form-text text-danger mt-2",children:"This field is required with the length min. 3 characters"}),Object(O.jsx)(_.a.Label,{children:"Poblished"}),Object(O.jsx)(F.a,{selected:g,onChange:function(e){return y(e)}}),J&&Object(O.jsx)("small",{className:"d-block form-text text-danger mt-2",children:"This field is required"}),Object(O.jsx)(_.a.Label,{children:"Category:"}),Object(O.jsx)(z,{data:c.category,className:"mt-2"}),Object(O.jsx)(_.a.Label,{children:"Short description"}),Object(O.jsx)(_.a.Control,Object(f.a)(Object(f.a)({},H("description",{required:!0,minLength:20})),{},{rows:4,as:"textarea",placeholder:"Enter short description",value:D,onChange:function(e){return k(e.target.value)}})),G.description&&Object(O.jsx)("small",{className:"d-block form-text text-danger mt-2",children:"This field is required with the length min. 20 characters"}),Object(O.jsx)(_.a.Label,{children:"Main content"}),Object(O.jsx)(W,{theme:"snow",value:S,onChange:C}),I&&Object(O.jsx)("small",{className:"d-block form-text text-danger mt-2",children:"This field also is required"})]})})}),Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{lg:"8",className:"d-flex justify-content-center w-100",children:Object(O.jsx)(j.a,{variant:"primary",type:"submit",children:n})})})]})},Z=function(){var e=Object(p.b)(""),t=Object(o.g)("");return Object(O.jsx)(Q,{category:"Open this select file...",action:function(n){e({type:T,payload:n}),t("/",{replace:!0})},actionText:"Add Post"})},$=function(){return Object(O.jsxs)(s.a,{children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{className:"m-auto",lg:8,children:Object(O.jsx)("h2",{children:"Add Post"})})}),Object(O.jsx)(Z,{})]})},ee=function(e){var t=Object(p.b)(""),n=Object(o.g)(""),a=e.postId,c=Object(p.c)((function(e){return v(e,a)}));return Object(O.jsx)(Q,{action:function(e){var c;t((c=Object(f.a)(Object(f.a)({},e),{},{id:a}),{type:N,payload:c})),n("/",{replace:!0})},actionText:"Edit Post",title:c.title,author:c.author,publishedDate:c.publishedDate,category:c.category,shortDescription:c.shortDescription,content:c.content})},te=function(){var e=Object(o.h)().postId;return e?Object(O.jsxs)(s.a,{children:[Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{className:"m-auto",lg:8,children:Object(O.jsx)("h2",{children:"Edit post here!"})})}),Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)(ee,{postId:e})})})]}):Object(O.jsx)(o.a,{to:"/"})},ne=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"About the page!"})})},ae=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Error 404"})})},ce=n(288),re=n(287),ie=function(){return Object(O.jsx)(ce.a,{expand:"lg",bg:"primary",variant:"dark",className:"mt-4 mb-4 rounded",children:Object(O.jsxs)(s.a,{children:[Object(O.jsx)(re.a,{children:Object(O.jsx)(ce.a.Brand,{children:"Blog.app"})}),Object(O.jsxs)(re.a,{className:"me-auto, justify-content-end",children:[Object(O.jsx)(re.a.Link,{as:b.c,to:"/",children:"Home"}),Object(O.jsx)(re.a.Link,{as:b.c,to:"/post/add",children:"Add"}),Object(O.jsx)(re.a.Link,{as:b.c,to:"/post/edit",children:"Edit"}),Object(O.jsx)(re.a.Link,{as:b.c,to:"/Categories",children:"Categories"}),Object(O.jsx)(re.a.Link,{as:b.c,to:"/About",children:"About"})]})]})})},se=function(){return Object(O.jsx)(s.a,{className:"text-center text-muted mt-5",children:"Copyright @ BlogApp 2022"})},oe=function(e){return Object(O.jsx)(d.a,{className:"w-50 mt-2 m-auto border-0",children:Object(O.jsxs)(d.a.Body,{children:[Object(O.jsxs)(d.a.Title,{children:["Title: ",e.postData.title]}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Author:  "}),e.postData.author]}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Published:  "}),u(e.postData.publishedDate)]}),Object(O.jsxs)(d.a.Text,{children:[Object(O.jsx)("b",{children:"Category:  "}),e.postData.category]})]})})},le=n(60),je=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(le.a,{show:e.dataShow,onHide:e.handleClose,children:[Object(O.jsx)(le.a.Header,{closeButton:!0,children:Object(O.jsx)(le.a.Title,{children:"Are you sure?"})}),Object(O.jsx)(le.a.Body,{children:"This operation will completely remove this post from the app! Are you sure you want to do this?"}),Object(O.jsxs)(le.a.Footer,{children:[Object(O.jsx)(j.a,{variant:"secondary",onClick:e.handleClose,children:"Cancel"}),Object(O.jsx)(j.a,{variant:"primary",onClick:e.handleRemove,children:"Delete"})]})]})})},de=function(){var e=Object(p.b)(),t=Object(o.h)().postId,n=Object(p.c)((function(e){return v(e,t)})),c=Object(a.useState)(!1),r=Object(A.a)(c,2),i=r[0],d=r[1],u=function(){return d(!1)};return i?Object(O.jsx)(je,{dataShow:i,handleClose:u,id:t,handleRemove:function(n){n.preventDefault(),e({type:k,payload:t}),u()}}):n?Object(O.jsxs)(s.a,{children:[Object(O.jsxs)(l.a,{children:[Object(O.jsx)(h.a,{className:"ml-5",children:Object(O.jsx)(oe,{postData:n})}),Object(O.jsxs)(h.a,{className:"mb-auto d-flex justify-content-left ",lg:"4",md:"3",xs:"2",children:[Object(O.jsx)(b.b,{to:"/post/edit/"+t,children:Object(O.jsx)(j.a,{className:"m-2",variant:"outline-info",children:"Edit"})}),Object(O.jsx)(j.a,{onClick:function(){return d((function(e){return!0}))},className:"m-2",variant:"outline-danger",children:"Delete"})]})]}),Object(O.jsx)(l.a,{children:Object(O.jsx)(h.a,{children:Object(O.jsx)("p",{dangerouslySetInnerHTML:{__html:n.content}})})})]}):Object(O.jsx)(o.a,{to:"/"})},he=function(e){var t=e.category;return Object(O.jsx)(b.b,{to:"/Category/"+t,children:Object(O.jsx)("li",{className:"list-group-item",children:t})})},be=function(){var e=Object(H.c)(U);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Categories:"}),Object(O.jsx)("ul",{className:"list-group",children:e.map((function(e){return Object(O.jsx)(he,{category:e},e)}))})]})},ue=function(){var e=Object(o.h)().category,t=Object(p.c)((function(t){return t.posts.filter((function(t){return t.category===e}))}));return Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Category: "}),Object(O.jsx)(l.a,{className:"justify-content-left",children:t.map((function(e){return Object(O.jsx)(x,{postData:e},e.id)}))})]})},Oe=function(){return Object(O.jsxs)(s.a,{children:[Object(O.jsx)(ie,{}),Object(O.jsxs)(o.d,{children:[Object(O.jsx)(o.b,{path:"/",element:Object(O.jsx)(E,{})}),Object(O.jsx)(o.b,{path:"/post/:postId",element:Object(O.jsx)(de,{})}),Object(O.jsx)(o.b,{path:"/post/add",element:Object(O.jsx)($,{})}),Object(O.jsx)(o.b,{path:"/post/edit/:postId",element:Object(O.jsx)(te,{})}),Object(O.jsx)(o.b,{path:"/Categories",element:Object(O.jsx)(be,{})}),Object(O.jsx)(o.b,{path:"/Category/:category",element:Object(O.jsx)(ue,{})}),Object(O.jsx)(o.b,{path:"/about",element:Object(O.jsx)(ne,{})}),Object(O.jsx)(o.b,{path:"*",element:Object(O.jsx)(ae,{})})]}),Object(O.jsx)(se,{})]})},xe=n(114),pe={categories:["Sport","News","Movie"],posts:[{id:"1",title:"Article title",shortDescription:"Short description of the article...",content:"To bring this to life, BBC Worklife travels the world to find stories that help develop fresh perspectives on what work and life can and should be, and discover new and interesting approaches to shaping ourselves and those around us. Through the eyes of world-leading experts and the people who live each story, we provide the context to understand what each new development means for you, and what to make of it in your own life.",publishedDate:new Date("02-01-2021"),author:"John Doe",category:"Sport"},{id:"2",title:"Antarctica",shortDescription:"The article about climate change in antarctica",content:"We\u2019ve dug into how we can grow and improve in unexpected ways, like how to learn effectively at any age. These insights bring both our outer and inner worlds to the surface, explaining how to understand and build on our both our present and future selvese",publishedDate:new Date("02-02-2022"),author:"John Doe",category:"News"},{id:"3",title:"Wild Africa",shortDescription:"Short description of fauna and flora this continent",content:"We tell focus on human-centric narratives with a global outlook, diving deep beyond the headlines. We\u2019ve looked at why workers are resigning en masse across the world, and what it means for your future. We\u2019ve spotlighted changing identities that help explain friends, family and colleagues alike, like why women are increasingly sexually fluid, and why family estrangement is becoming so common",publishedDate:new Date("04-03-2022"),author:"John Mackintosh",category:"Movie"},{id:"4",title:"Virus and men",shortDescription:"Short description natuer of viruses",content:"Our mission is to inform, inspire and empower you to live a more fulfilling life within yourself, your relationships and your workplace. BBC Worklife guides readers through the biggest issues of how to work, how to live and how to think today. From the new world of hybrid work, to the implications of inequality, to the forces that both breed and stifle success, we provide the insights needed to thrive as individuals",publishedDate:new Date("12-12-2019"),author:"Jane Dooma",category:"Sport"},{id:"5",title:"Oceans of the Venus",shortDescription:"Short description of second planet of solar system.",content:"Our professional and personal lives are shifting on an unprecedented scale. Now that we\u2019re working where we want and rethinking the value of what we do, a rigid nine-to-five office-based job seems like a quaint relic of the past. At the same time, as our work lives bleed into our private worlds, burnout, inequality and post-pandemic uncertainties are challenging us in ways that we far from fully understand",publishedDate:new Date("12-13-2008"),author:"Jackline Jackson",category:"News"}]},fe={posts:S,categories:G},me=Object(xe.a)(fe),ge=Object(xe.b)(me,pe,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());n(277);i.a.createRoot(document.getElementById("root")).render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(b.a,{children:Object(O.jsx)(p.a,{store:ge,children:Object(O.jsx)(Oe,{})})})}))}},[[280,1,2]]]);
//# sourceMappingURL=main.c8ba4113.chunk.js.map