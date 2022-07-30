"use strict";(self.webpackChunklerne=self.webpackChunklerne||[]).push([[235],{7343:function(n,e,r){r.d(e,{u_:function(){return R},_z:function(){return j},Od:function(){return y},ZT:function(){return p}});var t,i,o,a,c,l=r(1413),u=r(5987),s=r(2791),d=r(890),f=r(184),h=["children"],p=function(n){var e=n.children,r=(0,u.Z)(n,h);return(0,f.jsx)(d.Z,(0,l.Z)((0,l.Z)({},r),{},{children:e}))},x=r(168),Z=r(1614),m=r(9958),v=["children"],g=(0,m.Z)(Z.Z)(t||(t=(0,x.Z)(["\n  height: 100%;\n"]))),j=function(n){var e=n.children,r=(0,u.Z)(n,v);return(0,f.jsx)(s.Suspense,{fallback:(0,f.jsx)("div",{"data-testid":"pageLoader",children:"Loading..."}),children:(0,f.jsx)(g,(0,l.Z)((0,l.Z)({maxWidth:"md"},r),{},{children:e}))})},b=r(7047),w=["children","type"],S=m.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: stretch;\n  align-items: center;\n"]))),k=(0,m.Z)(b.Z)(o||(o=(0,x.Z)(["\n  width: 100%;\n"]))),y=function(n){n.children,n.type,(0,u.Z)(n,w);return(0,f.jsxs)(S,{children:[(0,f.jsx)(p,{variant:"h3",width:"100%",children:(0,f.jsx)(k,{variant:"text",width:"100%"})}),(0,f.jsx)(p,{variant:"h5",width:"50%",children:(0,f.jsx)(k,{variant:"text"})})]})},C=r(6934),z=r(1889),O=r(4554),P=r(8253),T=["children","header","onClose"],I=(0,C.ZP)(z.ZP)(a||(a=(0,x.Z)(["\n  background-color: ",";\n  padding: 10px;\n  & .MuiSvgIcon-root{\n    font-size: 40px;\n  }\n"])),(function(n){return n.theme.palette.background.paper})),L=(0,C.ZP)(O.Z)(c||(c=(0,x.Z)(["\n  height: 100%;\n  overflow: scroll;\n  padding: 10px;\n"]))),R=function(n){var e=n.children,r=n.header,t=n.onClose,i=(0,u.Z)(n,T);return(0,f.jsxs)(P.Z,(0,l.Z)((0,l.Z)({onClose:t},i),{},{children:[r&&(0,f.jsxs)(I,{direction:"column",alignItems:"center",container:!0,children:[r.icon,r.title&&(0,f.jsx)(p,{variant:"h5",textAlign:"center",children:r.title})]}),(0,f.jsx)(L,{children:e})]}))}},6832:function(n,e,r){r.d(e,{z:function(){return Z},g:function(){return S}});var t,i,o,a=r(1413),c=r(5987),l=r(168),u=r(2791),s=r(6072),d=r(9958),f=r(7343),h=r(184),p=["children","size"],x=(0,d.Z)(s.Z)(t||(t=(0,l.Z)(["\n   &.MuiButton-sizeXLarge {\n     width: 100%;\n     max-width: 350px;\n     height: 100px;\n     border-width: 5px;\n     border-radius: 20px;\n     letter-spacing: 5px;\n   }\n"]))),Z=u.forwardRef((function(n,e){var r=n.children,t=n.size,i=void 0===t?"large":t,o=(0,c.Z)(n,p);return(0,h.jsx)(x,(0,a.Z)((0,a.Z)({size:function(n){return"xlarge"===n?"large":n}(i),className:function(n){return"xlarge"===n?"MuiButton-sizeXLarge":n}(i),ref:e},o),{},{children:(0,h.jsx)(f.ZT,{variant:"h5",children:r})}))})),m=r(326),v=r(6934),g=r(157),j=["size","required","color","disabled","name","rules"],b=(0,v.ZP)("div")(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n"]))),w=(0,v.ZP)(g.Z)(o||(o=(0,l.Z)(["\n  margin-right: 5px;\n  margin-left: 5px;\n  font-size: 40px;\n  max-width: 50px;\n  color: ",";\n  \n  & input {\n    text-align: center;\n    &.Mui-disabled {\n      color: ",";\n      -webkit-text-fill-color: ",";\n    }\n  }\n  &.Mui-disabled {\n    color: ",";\n  }\n"])),(function(n){var e=n.theme,r=n.color;return e.palette[r].main}),(function(n){var e=n.theme,r=n.color;return e.palette[r].main}),(function(n){var e=n.theme,r=n.color;return e.palette[r].main}),(function(n){var e=n.theme,r=n.color;return e.palette[r].main})),S=function(n){var e=n.size,r=n.required,t=n.color,i=void 0===t?"primary":t,o=n.disabled,l=n.name,s=n.rules,d=(0,c.Z)(n,j),f=u.useRef([]),p=(0,m.Gc)().control,x=(0,m.bc)((0,a.Z)({name:l,control:p,rules:(0,a.Z)({required:r},s)},d)),Z=x.field,v=Z.onChange,g=Z.value,S=Z.ref,k=x.fieldState.error;return u.useEffect((function(){o||f.current[0].focus()}),[o]),(0,h.jsx)(b,{children:Array(e).fill("").map((function(n,r){return(0,h.jsx)(w,{inputRef:function(n){f.current[r]=n,0===r&&S(n)},maxRows:1,multiline:!1,inputProps:{maxLength:1,autoCapitalize:"none",autoComplete:"none"},onChange:function(n){n.preventDefault(),function(n,r,t,i){var o=i||Array(e).fill("");o[r]=n.target.value,t(o),n.target.value.length>=1&&r<e-1&&f.current[r+1].focus(),n.target.value.length<=0&&r>0&&f.current[r-1].focus()}(n,r,v,g)},onFocus:function(n){n.target.select()},onKeyDown:function(n){!function(n,r,t,i){"Backspace"===n.key&&n.target.value.length<=0&&r>0&&(f.current[r-1].focus(),n.preventDefault()),"ArrowLeft"===n.key&&r>0&&(f.current[r-1].focus(),n.preventDefault()),"ArrowRight"===n.key&&r<e-1&&(f.current[r+1].focus(),n.preventDefault()),n.key===n.target.value&&r<e-1&&(f.current[r+1].focus(),n.preventDefault())}(n,r)},color:k?"error":i,disabled:o,value:g?g[r]:"",autoFocus:0===r},"".concat(l,"_").concat(r))}))})}},235:function(n,e,r){r.r(e),r.d(e,{default:function(){return _}});var t,i,o,a,c,l,u=r(1413),s=r(885),d=r(168),f=r(2791),h=r(1614),p=r(9958),x=JSON.parse('[{"word":"lernen","translation":"study, learn","partOfSpeech":"verb"},{"word":"essen","translation":"food","partOfSpeech":"noun"},{"word":"apfel","translation":"apple","partOfSpeech":"noun"},{"word":"trinken","translation":"drink","partOfSpeech":"verb"},{"word":"laufen","translation":"run","partOfSpeech":"verb"},{"word":"auge","translation":"eye","partOfSpeech":"noun"},{"word":"spielen","translation":"play","partOfSpeech":"verb"},{"word":"lesen","translation":"reading","partOfSpeech":"verb"},{"word":"kochen","translation":"cook","partOfSpeech":"verb"},{"word":"kind","translation":"child","partOfSpeech":"noun"},{"word":"vater","translation":"father","partOfSpeech":"noun"},{"word":"mutter","translation":"mother","partOfSpeech":"noun"}]'),Z=r(5987),m=r(7343),v=r(6832),g=r(326),j=r(6454),b=r(184),w=["vocab","loading","onNext"],S=(0,p.Z)(h.Z)(t||(t=(0,d.Z)(["\n    text-align: center;\n"]))),k=p.Z.div(i||(i=(0,d.Z)(["\n  margin-bottom: 50px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n"]))),y=p.Z.div(o||(o=(0,d.Z)(["\n  margin-bottom: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),C=function(n){var e=n.vocab,r=n.loading,t=n.onNext,i=(0,Z.Z)(n,w),o=f.useState(null),a=(0,s.Z)(o,2),c=a[0],l=a[1],d=(0,g.cI)({defaultValues:{answer:void 0}}),h=d.reset,p=d.handleSubmit,x=d.formState.isSubmitSuccessful,C=f.useRef(null),z=f.useRef(null);return f.useEffect((function(){var n=function(n){var e,r;"Enter"===n.key&&(n.preventDefault(),null!==c?null===z||void 0===z||null===(e=z.current)||void 0===e||e.click():null===C||void 0===C||null===(r=C.current)||void 0===r||r.click())};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}}),[c]),(0,b.jsx)(g.RV,(0,u.Z)((0,u.Z)({},d),{},{children:(0,b.jsxs)(S,(0,u.Z)((0,u.Z)({disableGutters:!0},i),{},{children:[(0,b.jsx)(k,{children:r?(0,b.jsx)(m.Od,{type:"vocab"}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(m.ZT,{variant:"h3",children:e.translation}),(0,b.jsx)(m.ZT,{variant:"h5",children:e.partOfSpeech})]})}),!r&&(0,b.jsx)(y,{children:(0,b.jsx)(v.g,{size:e.word.length,name:"answer",color:null===c?"primary":c?"success":"error",disabled:x,required:!0})}),null!==c?(0,b.jsx)(v.z,{variant:"outlined",type:"button",onClick:function(){null!==c&&(h({answer:void 0},{keepValues:!1,keepErrors:!1,keepIsSubmitted:!1}),l(null),t(c))},disabled:r,endIcon:(0,b.jsx)(j.Z,{}),ref:z,children:"Next"}):(0,b.jsx)(v.z,{variant:"contained",type:"submit",onClick:p((function(n){var r=n.answer.join("").toLowerCase()===e.word.toLowerCase();l(!!r),h({answer:e.word.split("")},{keepValues:!1,keepErrors:!1,keepIsSubmitted:!1})})),disabled:r,ref:C,children:"Submit"})]}))}))},z=r(6934),O=r(1889),P=r(6930),T=r(2590),I=function(n){switch(n){case"verb":return"v.";case"noun":return"n.";default:return n}},L=r(7911),R=["vocabs","onClose"],A=(0,z.ZP)(h.Z)(a||(a=(0,d.Z)(["\n  position: relative;\n"]))),E=function(n){var e=n.vocabs,r=n.onClose,t=(0,Z.Z)(n,R),i=e.filter((function(n){return n.correct})).length,o=e.length-i;return(0,b.jsx)(m.u_,(0,u.Z)((0,u.Z)({onClose:r,header:{icon:(0,b.jsx)(L.Z,{}),title:"Result"}},t),{},{children:(0,b.jsx)(A,{children:(0,b.jsxs)(O.ZP,{container:!0,direction:"column",mb:2,mt:2,children:[(0,b.jsxs)(O.ZP,{container:!0,item:!0,alignItems:"center",columnGap:2,alignSelf:"center",mb:2,children:[(0,b.jsxs)(O.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",xs:!0,columnGap:1,children:[(0,b.jsx)(P.Z,{fontSize:"medium",color:"success"}),(0,b.jsx)(m.ZT,{variant:"h5",color:"success.main",children:i})]}),(0,b.jsxs)(O.ZP,{item:!0,container:!0,alignItems:"center",justifyContent:"center",xs:!0,columnGap:1,children:[(0,b.jsx)(T.Z,{fontSize:"medium",color:"error"}),(0,b.jsx)(m.ZT,{variant:"h5",color:"error",children:o})]})]}),(0,b.jsx)(O.ZP,{container:!0,item:!0,rowGap:1,children:e.map((function(n,e){var r=n.word,t=n.translation,i=n.partOfSpeech,o=n.correct;return(0,b.jsxs)(O.ZP,{container:!0,item:!0,columnGap:2,children:[(0,b.jsx)(O.ZP,{item:!0,xs:2,children:(0,b.jsx)(m.ZT,{variant:"h4",textAlign:"right",children:e+1})}),(0,b.jsxs)(O.ZP,{item:!0,container:!0,direction:"column",xs:"auto",children:[(0,b.jsx)(m.ZT,{variant:"h5",color:o?"success.main":"error",children:r}),(0,b.jsxs)(O.ZP,{item:!0,container:!0,alignItems:"center",columnGap:1,children:[(0,b.jsx)(m.ZT,{variant:"body1",children:I(i)}),(0,b.jsx)(m.ZT,{variant:"body1",children:t})]})]})]},"".concat(r,"_").concat(e))}))})]})})}))},G=x,M=Math.min(G.length,10),D=(0,p.Z)(h.Z)(c||(c=(0,d.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),N=p.Z.div(l||(l=(0,d.Z)(["\n  margin-top: 50px;\n  margin-bottom: 100px;\n"]))),_=function(){var n=f.useState(0),e=(0,s.Z)(n,2),r=e[0],t=e[1],i=f.useState(!1),o=(0,s.Z)(i,2),a=o[0],c=o[1],l=f.useState(Array(M).fill(!1)),d=(0,s.Z)(l,2),h=d[0],p=d[1],x=f.useState(!1),Z=(0,s.Z)(x,2),v=Z[0],g=Z[1];f.useEffect((function(){a||(!function(n){for(var e=n.length-1;e>0;e--){var r=Math.floor(Math.random()*(e+1)),t=[n[r],n[e]];n[e]=t[0],n[r]=t[1]}}(G),p(Array(M).fill(!1)),t(0),c(G&&G.length>0))}),[a]);var j=f.useCallback((function(n){p((function(e){return e[r]=n,e})),r<M-1?t(r+1):g(!0)}),[r]);return(0,b.jsxs)(D,{children:[(0,b.jsx)(N,{children:(0,b.jsx)(m.ZT,{variant:"h5",children:"".concat(r+1," / ").concat(M)})}),(0,b.jsx)(C,{vocab:G[r],loading:!a,onNext:j}),(0,b.jsx)(E,{open:v,onClose:function(){g(!1),c(!1)},vocabs:h.map((function(n,e){return(0,u.Z)((0,u.Z)({},G[e]),{},{correct:n})}))})]})}}}]);
//# sourceMappingURL=235.65065786.chunk.js.map