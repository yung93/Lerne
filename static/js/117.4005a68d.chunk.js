"use strict";(self.webpackChunklerne=self.webpackChunklerne||[]).push([[117],{7343:function(n,e,t){t.d(e,{u_:function(){return S},_z:function(){return j},Od:function(){return z},ZT:function(){return p}});var r,i,a,c,l,o=t(1413),u=t(5987),d=t(2791),s=t(890),f=t(184),h=["children"],p=function(n){var e=n.children,t=(0,u.Z)(n,h);return(0,f.jsx)(s.Z,(0,o.Z)((0,o.Z)({},t),{},{children:e}))},x=t(168),g=t(1614),Z=t(9958),v=["children"],m=(0,Z.Z)(g.Z)(r||(r=(0,x.Z)(["\n  height: 100%;\n"]))),j=function(n){var e=n.children,t=(0,u.Z)(n,v);return(0,f.jsx)(d.Suspense,{fallback:(0,f.jsx)("div",{"data-testid":"pageLoader",children:"Loading..."}),children:(0,f.jsx)(m,(0,o.Z)((0,o.Z)({maxWidth:"md"},t),{},{children:e}))})},w=t(7047),y=["children","type"],b=Z.Z.div(i||(i=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: stretch;\n  align-items: center;\n"]))),k=(0,Z.Z)(w.Z)(a||(a=(0,x.Z)(["\n  width: 100%;\n"]))),z=function(n){n.children,n.type,(0,u.Z)(n,y);return(0,f.jsxs)(b,{children:[(0,f.jsx)(p,{variant:"h3",width:"100%",children:(0,f.jsx)(k,{variant:"text",width:"100%"})}),(0,f.jsx)(p,{variant:"h5",width:"50%",children:(0,f.jsx)(k,{variant:"text"})})]})},C=t(6934),L=t(1889),D=t(4554),P=t(8253),A=["children","header","onClose"],M=(0,C.ZP)(L.ZP)(c||(c=(0,x.Z)(["\n  background-color: ",";\n  padding: 10px;\n  & .MuiSvgIcon-root{\n    font-size: 40px;\n  }\n"])),(function(n){return n.theme.palette.background.paper})),R=(0,C.ZP)(D.Z)(l||(l=(0,x.Z)(["\n  height: 100%;\n  overflow: scroll;\n  padding: 10px;\n"]))),S=function(n){var e=n.children,t=n.header,r=n.onClose,i=(0,u.Z)(n,A);return(0,f.jsxs)(P.Z,(0,o.Z)((0,o.Z)({onClose:r},i),{},{children:[t&&(0,f.jsxs)(M,{direction:"column",alignItems:"center",container:!0,children:[t.icon,t.title&&(0,f.jsx)(p,{variant:"h5",textAlign:"center",children:t.title})]}),(0,f.jsx)(R,{children:e})]}))}},6832:function(n,e,t){t.d(e,{z:function(){return g},g:function(){return b}});var r,i,a,c=t(1413),l=t(5987),o=t(168),u=t(2791),d=t(6072),s=t(9958),f=t(7343),h=t(184),p=["children","size"],x=(0,s.Z)(d.Z)(r||(r=(0,o.Z)(["\n   &.MuiButton-sizeXLarge {\n     width: 100%;\n     max-width: 350px;\n     height: 100px;\n     border-width: 5px;\n     border-radius: 20px;\n     letter-spacing: 5px;\n   }\n"]))),g=u.forwardRef((function(n,e){var t=n.children,r=n.size,i=void 0===r?"large":r,a=(0,l.Z)(n,p);return(0,h.jsx)(x,(0,c.Z)((0,c.Z)({size:function(n){return"xlarge"===n?"large":n}(i),className:function(n){return"xlarge"===n?"MuiButton-sizeXLarge":n}(i),ref:e},a),{},{children:(0,h.jsx)(f.ZT,{variant:"h5",children:t})}))})),Z=t(326),v=t(6934),m=t(157),j=["size","required","color","disabled","name","rules"],w=(0,v.ZP)("div")(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n"]))),y=(0,v.ZP)(m.Z)(a||(a=(0,o.Z)(["\n  margin-right: 5px;\n  margin-left: 5px;\n  font-size: 40px;\n  max-width: 50px;\n  color: ",";\n  \n  & input {\n    text-align: center;\n    &.Mui-disabled {\n      color: ",";\n      -webkit-text-fill-color: ",";\n    }\n  }\n  &.Mui-disabled {\n    color: ",";\n  }\n"])),(function(n){var e=n.theme,t=n.color;return e.palette[t].main}),(function(n){var e=n.theme,t=n.color;return e.palette[t].main}),(function(n){var e=n.theme,t=n.color;return e.palette[t].main}),(function(n){var e=n.theme,t=n.color;return e.palette[t].main})),b=function(n){var e=n.size,t=n.required,r=n.color,i=void 0===r?"primary":r,a=n.disabled,o=n.name,d=n.rules,s=(0,l.Z)(n,j),f=u.useRef([]),p=(0,Z.Gc)().control,x=(0,Z.bc)((0,c.Z)({name:o,control:p,rules:(0,c.Z)({required:t},d)},s)),g=x.field,v=g.onChange,m=g.value,b=g.ref,k=x.fieldState.error;return u.useEffect((function(){a||f.current[0].focus()}),[a]),(0,h.jsx)(w,{children:Array(e).fill("").map((function(n,t){return(0,h.jsx)(y,{inputRef:function(n){f.current[t]=n,0===t&&b(n)},maxRows:1,multiline:!1,inputProps:{maxLength:1,autoCapitalize:"none",autoComplete:"none"},onChange:function(n){n.preventDefault(),function(n,t,r,i){var a=i||Array(e).fill("");a[t]=n.target.value,r(a),n.target.value.length>=1&&t<e-1&&f.current[t+1].focus(),n.target.value.length<=0&&t>0&&f.current[t-1].focus()}(n,t,v,m)},onFocus:function(n){n.target.select()},onKeyDown:function(n){!function(n,t,r,i){"Backspace"===n.key&&n.target.value.length<=0&&t>0&&(f.current[t-1].focus(),n.preventDefault()),"ArrowLeft"===n.key&&t>0&&(f.current[t-1].focus(),n.preventDefault()),"ArrowRight"===n.key&&t<e-1&&(f.current[t+1].focus(),n.preventDefault()),n.key===n.target.value&&t<e-1&&(f.current[t+1].focus(),n.preventDefault())}(n,t)},color:k?"error":i,disabled:a,value:m?m[t]:"",autoFocus:0===t},"".concat(o,"_").concat(t))}))})}},5117:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(168),i=(t(2791),t(7343)),a=t(1614),c=t(9958);var l,o,u,d,s,f=t.p+"static/media/logo.23944c5a835710a0a8702c2043c9cbd9.svg",h=t(6832),p=t(6871),x=t(184),g=(0,c.Z)(a.Z)(l||(l=(0,r.Z)(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]))),Z=c.Z.div(o||(o=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 50px;\n  margin-bottom: 40px;\n"]))),v=c.Z.img(u||(u=(0,r.Z)(["\n  height: 80px;\n  margin-right: 20px;\n"]))),m=(0,c.Z)(i.ZT)(d||(d=(0,r.Z)(["\n  text-transform: uppercase;\n  letter-spacing: 8px;\n"]))),j=c.Z.div(s||(s=(0,r.Z)(["\n  flex: 1;\n  padding-top: 100px;\n  width: 100%;\n  text-align: center;\n"]))),w=function(){var n=(0,p.s0)();return(0,x.jsxs)(g,{children:[(0,x.jsxs)(Z,{children:[(0,x.jsx)(v,{src:f}),(0,x.jsx)(m,{typography:"h3",children:"Lerne"})]}),(0,x.jsx)(j,{children:(0,x.jsx)(h.z,{variant:"outlined",size:"xlarge",onClick:function(){n("/spelling")},children:"Spelling"})})]})}}}]);
//# sourceMappingURL=117.4005a68d.chunk.js.map