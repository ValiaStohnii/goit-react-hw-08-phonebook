(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[327],{4119:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},4327:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ze}});var r=n(2791),o=n(6361),a=n(1413),i=n(885),s=n(4942),c=n(1048),d=n(2793),l=n(8182),u=n(767),m=n(627),p=n(2065),f=n(7630),v=n(1046),Z=n(7119),g=n(9103),b=n(162),h=n(2071),y=n(6199),x=n(5159),S=n(208);function I(e){return(0,x.Z)("MuiListItem",e)}var w=(0,S.Z)("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]);var j=(0,S.Z)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function C(e){return(0,x.Z)("MuiListItemSecondaryAction",e)}(0,S.Z)("MuiListItemSecondaryAction",["root","disableGutters"]);var A=n(184),P=["className"],k=(0,f.ZP)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.disableGutters&&t.disableGutters]}})((function(e){var t=e.ownerState;return(0,d.Z)({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},t.disableGutters&&{right:0})})),N=r.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItemSecondaryAction"}),o=n.className,a=(0,c.Z)(n,P),i=r.useContext(y.Z),s=(0,d.Z)({},n,{disableGutters:i.disableGutters}),m=function(e){var t=e.disableGutters,n=e.classes,r={root:["root",t&&"disableGutters"]};return(0,u.Z)(r,C,n)}(s);return(0,A.jsx)(k,(0,d.Z)({className:(0,l.Z)(m.root,o),ownerState:s,ref:t},a))}));N.muiName="ListItemSecondaryAction";var M=N,R=["className"],L=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected"],F=(0,f.ZP)("div",{name:"MuiListItem",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.button&&t.button,n.hasSecondaryAction&&t.secondaryAction]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,d.Z)({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!r.disablePadding&&(0,d.Z)({paddingTop:8,paddingBottom:8},r.dense&&{paddingTop:4,paddingBottom:4},!r.disableGutters&&{paddingLeft:16,paddingRight:16},!!r.secondaryAction&&{paddingRight:48}),!!r.secondaryAction&&(0,s.Z)({},"& > .".concat(j.root),{paddingRight:48}),(t={},(0,s.Z)(t,"&.".concat(w.focusVisible),{backgroundColor:n.palette.action.focus}),(0,s.Z)(t,"&.".concat(w.selected),(0,s.Z)({backgroundColor:(0,p.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)},"&.".concat(w.focusVisible),{backgroundColor:(0,p.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.focusOpacity)})),(0,s.Z)(t,"&.".concat(w.disabled),{opacity:n.palette.action.disabledOpacity}),t),"flex-start"===r.alignItems&&{alignItems:"flex-start"},r.divider&&{borderBottom:"1px solid ".concat(n.palette.divider),backgroundClip:"padding-box"},r.button&&(0,s.Z)({transition:n.transitions.create("background-color",{duration:n.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:n.palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(w.selected,":hover"),{backgroundColor:(0,p.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity+n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(0,p.Fq)(n.palette.primary.main,n.palette.action.selectedOpacity)}}),r.hasSecondaryAction&&{paddingRight:48})})),T=(0,f.ZP)("li",{name:"MuiListItem",slot:"Container",overridesResolver:function(e,t){return t.container}})({position:"relative"}),G=r.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItem"}),o=n.alignItems,a=void 0===o?"center":o,i=n.autoFocus,s=void 0!==i&&i,p=n.button,f=void 0!==p&&p,x=n.children,S=n.className,j=n.component,C=n.components,P=void 0===C?{}:C,k=n.componentsProps,N=void 0===k?{}:k,G=n.ContainerComponent,_=void 0===G?"li":G,z=n.ContainerProps,D=(z=void 0===z?{}:z).className,V=n.dense,O=void 0!==V&&V,q=n.disabled,B=void 0!==q&&q,W=n.disableGutters,E=void 0!==W&&W,H=n.disablePadding,J=void 0!==H&&H,Y=n.divider,U=void 0!==Y&&Y,$=n.focusVisibleClassName,K=n.secondaryAction,Q=n.selected,X=void 0!==Q&&Q,ee=(0,c.Z)(n.ContainerProps,R),te=(0,c.Z)(n,L),ne=r.useContext(y.Z),re={dense:O||ne.dense||!1,alignItems:a,disableGutters:E},oe=r.useRef(null);(0,b.Z)((function(){s&&oe.current&&oe.current.focus()}),[s]);var ae=r.Children.toArray(x),ie=ae.length&&(0,g.Z)(ae[ae.length-1],["ListItemSecondaryAction"]),se=(0,d.Z)({},n,{alignItems:a,autoFocus:s,button:f,dense:re.dense,disabled:B,disableGutters:E,disablePadding:J,divider:U,hasSecondaryAction:ie,selected:X}),ce=function(e){var t=e.alignItems,n=e.button,r=e.classes,o=e.dense,a=e.disabled,i={root:["root",o&&"dense",!e.disableGutters&&"gutters",!e.disablePadding&&"padding",e.divider&&"divider",a&&"disabled",n&&"button","flex-start"===t&&"alignItemsFlexStart",e.hasSecondaryAction&&"secondaryAction",e.selected&&"selected"],container:["container"]};return(0,u.Z)(i,I,r)}(se),de=(0,h.Z)(oe,t),le=P.Root||F,ue=N.root||{},me=(0,d.Z)({className:(0,l.Z)(ce.root,ue.className,S),disabled:B},te),pe=j||"li";return f&&(me.component=j||"div",me.focusVisibleClassName=(0,l.Z)(w.focusVisible,$),pe=Z.Z),ie?(pe=me.component||j?pe:"div","li"===_&&("li"===pe?pe="div":"li"===me.component&&(me.component="div")),(0,A.jsx)(y.Z.Provider,{value:re,children:(0,A.jsxs)(T,(0,d.Z)({as:_,className:(0,l.Z)(ce.container,D),ref:de,ownerState:se},ee,{children:[(0,A.jsx)(le,(0,d.Z)({},ue,!(0,m.Z)(le)&&{as:pe,ownerState:(0,d.Z)({},se,ue.ownerState)},me,{children:ae})),ae.pop()]}))})):(0,A.jsx)(y.Z.Provider,{value:re,children:(0,A.jsxs)(le,(0,d.Z)({},ue,{as:pe,ref:de,ownerState:se},!(0,m.Z)(le)&&{ownerState:(0,d.Z)({},se,ue.ownerState)},me,{children:[ae,K&&(0,A.jsx)(M,{children:K})]}))})}));function _(e){return(0,x.Z)("MuiListItemAvatar",e)}(0,S.Z)("MuiListItemAvatar",["root","alignItemsFlexStart"]);var z=["className"],D=(0,f.ZP)("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"flex-start"===n.alignItems&&t.alignItemsFlexStart]}})((function(e){var t=e.ownerState;return(0,d.Z)({minWidth:56,flexShrink:0},"flex-start"===t.alignItems&&{marginTop:8})})),V=r.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItemAvatar"}),o=n.className,a=(0,c.Z)(n,z),i=r.useContext(y.Z),s=(0,d.Z)({},n,{alignItems:i.alignItems}),m=function(e){var t=e.alignItems,n=e.classes,r={root:["root","flex-start"===t&&"alignItemsFlexStart"]};return(0,u.Z)(r,_,n)}(s);return(0,A.jsx)(D,(0,d.Z)({className:(0,l.Z)(m.root,o),ownerState:s,ref:t},a))})),O=n(890);function q(e){return(0,x.Z)("MuiListItemText",e)}var B=(0,S.Z)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),W=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],E=(0,f.ZP)("div",{name:"MuiListItemText",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[(0,s.Z)({},"& .".concat(B.primary),t.primary),(0,s.Z)({},"& .".concat(B.secondary),t.secondary),t.root,n.inset&&t.inset,n.primary&&n.secondary&&t.multiline,n.dense&&t.dense]}})((function(e){var t=e.ownerState;return(0,d.Z)({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},t.primary&&t.secondary&&{marginTop:6,marginBottom:6},t.inset&&{paddingLeft:56})})),H=r.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiListItemText"}),o=n.children,a=n.className,i=n.disableTypography,s=void 0!==i&&i,m=n.inset,p=void 0!==m&&m,f=n.primary,Z=n.primaryTypographyProps,g=n.secondary,b=n.secondaryTypographyProps,h=(0,c.Z)(n,W),x=r.useContext(y.Z).dense,S=null!=f?f:o,I=g,w=(0,d.Z)({},n,{disableTypography:s,inset:p,primary:!!S,secondary:!!I,dense:x}),j=function(e){var t=e.classes,n=e.inset,r=e.primary,o=e.secondary,a={root:["root",n&&"inset",e.dense&&"dense",r&&o&&"multiline"],primary:["primary"],secondary:["secondary"]};return(0,u.Z)(a,q,t)}(w);return null==S||S.type===O.Z||s||(S=(0,A.jsx)(O.Z,(0,d.Z)({variant:x?"body2":"body1",className:j.primary,component:"span",display:"block"},Z,{children:S}))),null==I||I.type===O.Z||s||(I=(0,A.jsx)(O.Z,(0,d.Z)({variant:"body2",className:j.secondary,color:"text.secondary",display:"block"},b,{children:I}))),(0,A.jsxs)(E,(0,d.Z)({className:(0,l.Z)(j.root,a),ownerState:w,ref:t},h,{children:[S,I]}))})),J=n(3400),Y=n(7247),U=(0,n(9201).Z)((0,A.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function $(e){return(0,x.Z)("MuiAvatar",e)}(0,S.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var K=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],Q=(0,f.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,d.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:t.shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),X=(0,f.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ee=(0,f.ZP)(U,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var te=r.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiAvatar"}),o=n.alt,a=n.children,s=n.className,m=n.component,p=void 0===m?"div":m,f=n.imgProps,Z=n.sizes,g=n.src,b=n.srcSet,h=n.variant,y=void 0===h?"circular":h,x=(0,c.Z)(n,K),S=null,I=function(e){var t=e.crossOrigin,n=e.referrerPolicy,o=e.src,a=e.srcSet,s=r.useState(!1),c=(0,i.Z)(s,2),d=c[0],l=c[1];return r.useEffect((function(){if(o||a){l(!1);var e=!0,r=new Image;return r.onload=function(){e&&l("loaded")},r.onerror=function(){e&&l("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=o,a&&(r.srcset=a),function(){e=!1}}}),[t,n,o,a]),d}((0,d.Z)({},f,{src:g,srcSet:b})),w=g||b,j=w&&"error"!==I,C=(0,d.Z)({},n,{colorDefault:!j,component:p,variant:y}),P=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,u.Z)(n,$,t)}(C);return S=j?(0,A.jsx)(X,(0,d.Z)({alt:o,src:g,srcSet:b,sizes:Z,ownerState:C,className:P.img},f)):null!=a?a:w&&o?o[0]:(0,A.jsx)(ee,{className:P.fallback}),(0,A.jsx)(Q,(0,d.Z)({as:p,ownerState:C,className:(0,l.Z)(P.root,s),ref:t},x,{children:S}))})),ne=n(4806),re=function(e){var t=e.id,n=e.name,r=e.number,a=(0,o.Nt)(),s=(0,i.Z)(a,1)[0];return(0,A.jsxs)(G,{secondaryAction:(0,A.jsx)(J.Z,{type:"button",onClick:function(){return s(t)},edge:"end","aria-label":"delete",children:(0,A.jsx)(Y.Z,{theme:ne.Z,color:"secondary"})}),name:n,children:[(0,A.jsx)(V,{children:(0,A.jsx)(te,{sx:{bgcolor:"#2f2f3f"},alt:n,src:"/broken-image.jpg"})}),(0,A.jsx)(H,{primary:n}),(0,A.jsx)(H,{primary:r})]})},oe=n(493),ae=function(e){var t=e.contacts;return(0,A.jsx)(oe.Z,{sx:{width:"100%",maxWidth:360},children:t.map((function(e){return(0,A.jsx)(re,(0,a.Z)({},e),e.id)}))})},ie=n(4554),se=n(3767),ce=n(726),de=n(6151),le=function(){var e=(0,o.Lr)(),t=(0,i.Z)(e,2),n=t[0],a=t[1].isLoading,s=(0,r.useState)(""),c=(0,i.Z)(s,2),d=c[0],l=c[1],u=(0,r.useState)(""),m=(0,i.Z)(u,2),p=m[0],f=m[1],v=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":l(r);break;case"number":f(r);break;default:return}},Z=function(){l(""),f("")};return(0,A.jsx)(ie.Z,{component:"form",sx:{"& > :not(style)":{m:1,width:"100%"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),n({name:d,number:p}),Z()},children:(0,A.jsxs)(se.Z,{spacing:2,children:[(0,A.jsx)(ce.Z,{id:"outlined-name",label:"Name",type:"text",value:d,onChange:v,name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,A.jsx)(ce.Z,{id:"outlined-name",label:"Phone number",type:"tel",value:p,onChange:v,name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,A.jsxs)(de.Z,{theme:ne.Z,variant:"contained",color:"primary",type:"submit",disabled:a,children:[a&&"Add...","Add contact"]})]})})},ue=n(2978),me=n(4296),pe=function(){var e=(0,ue.I0)();return(0,A.jsx)(ce.Z,{id:"outlined-name",label:"Filter",type:"text",onChange:function(t){e((0,me.W1)(t.currentTarget.value))}})},fe=n(6445),ve=function(){var e=(0,o.Jx)().data,t=(0,ue.v9)((function(e){return e.filter}));return(0,A.jsxs)(fe.Z,{maxWidth:"sm",children:[(0,A.jsx)(O.Z,{variant:"h3",component:"div",sx:{flexGrow:1},children:"Phonebook"}),(0,A.jsx)(le,{}),(0,A.jsx)(O.Z,{variant:"h5",component:"div",sx:{flexGrow:1},children:"Contacts"}),(0,A.jsx)(pe,{}),e&&(0,A.jsx)(ae,{contacts:function(){var n=t.toLowerCase();return console.log(e),e.filter((function(e){return e.name.toLowerCase().includes(n)}))}()})]})},Ze=function(){return(0,A.jsx)(ve,{})}},7247:function(e,t,n){"use strict";var r=n(4119);t.Z=void 0;var o=r(n(5649)),a=n(184),i=(0,o.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=i},5649:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=n(4454)},4454:function(e,t,n){"use strict";n.r(t),n.d(t,{capitalize:function(){return o.Z},createChainedFunction:function(){return a},createSvgIcon:function(){return i.Z},debounce:function(){return s.Z},deprecatedPropType:function(){return c},isMuiElement:function(){return d.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return u.Z},requirePropFactory:function(){return m},setRef:function(){return p},unstable_ClassNameGenerator:function(){return x},unstable_useEnhancedEffect:function(){return f.Z},unstable_useId:function(){return v},unsupportedProp:function(){return Z},useControlled:function(){return g.Z},useEventCallback:function(){return b.Z},useForkRef:function(){return h.Z},useIsFocusVisible:function(){return y.Z}});var r=n(7829),o=n(4036),a=n(8949).Z,i=n(9201),s=n(3199);var c=function(e,t){return function(){return null}},d=n(9103),l=n(8301),u=n(7602);n(1860);var m=function(e,t){return function(){return null}},p=n(2971).Z,f=n(162),v=n(6248).Z;var Z=function(e,t,n,r,o){return null},g=n(8744),b=n(9683),h=n(2071),y=n(3031),x={configure:function(e){console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join("\n")),r.Z.configure(e)}}}}]);
//# sourceMappingURL=327.cb1376e0.chunk.js.map