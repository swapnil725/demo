(this["webpackJsonpflow-chart"]=this["webpackJsonpflow-chart"]||[]).push([[0],{55:function(e,t,n){},56:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),c=n(7),o=n.n(c),r=(n(55),n(32)),s=n(20),d=(n.p,n(56),n(13)),l=n(64),b=n(103),u=n(99),h=n(36),p=n.n(h),j=n(5),g=Object(u.a)((function(e){return{title:{fontSize:10,height:10,padding:5},paper:{padding:e.spacing(2),margin:"auto",maxWidth:200},heading:{fontSize:10,fontWeight:600,padding:5,cursor:"pointer",width:"100%",wordBreak:"break-word"},subheader:{padding:5},desc:{fontSize:7,cursor:"pointer",width:"100%",wordBreak:"break-word"},deleteIcon:{height:10},root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},inputHeading:{border:"1 solid grey",width:"100%"},inputDesc:{border:"1 solid grey",width:"100%"}}})),x=Object(i.memo)((function(e){var t=e.data,n=g();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d.b,{type:"target",position:"top",style:{background:"grey",width:10,height:10},onConnect:function(e){return console.log("handle onConnect",e)}}),Object(j.jsx)(l.a,{className:n.paper,children:Object(j.jsx)(b.a,{container:!0,spacing:1,children:Object(j.jsx)(b.a,{item:!0,xs:12,sm:!0,container:!0,children:Object(j.jsxs)(b.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2,children:[Object(j.jsx)(b.a,{item:!0,xs:!0,children:Object(j.jsx)(p.a,{labelClass:n.heading,inputClass:n.inputHeading,initialValue:t.name,save:function(e){console.log("Saving '".concat(e,"'"))}})}),Object(j.jsxs)(b.a,{item:!0,xs:!0,children:[Object(j.jsx)(p.a,{labelClass:n.desc,inputClass:n.inputDesc,initialValue:t.description,save:function(e){console.log("Saving '".concat(e,"'"))}})," "]})]})})})}),Object(j.jsx)(d.b,{type:"source",position:"left",id:"a",style:{background:"blue",width:10,height:10}}),Object(j.jsx)(d.b,{type:"source",position:"right",id:"b",style:{background:"blue",width:10,height:10}}),Object(j.jsx)(d.b,{type:"source",position:"bottom",id:"c",style:{background:"blue",width:10,height:10}})]})})),m=n(104),f=n(105),O=n(106),w=n(107),y=n(108),k=n(11),v=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(s.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(s.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(k.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(k.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(s.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}}));var C=function(){var e={selectorNode:x},t=(v(),Object(i.useState)(null)),n=Object(r.a)(t,2),a=(n[0],n[1],Object(i.useState)([])),c=Object(r.a)(a,2),o=c[0],s=c[1],l=Object(i.useState)(""),u=Object(r.a)(l,2),h=u[0],p=u[1],g={width:"100%",height:window.innerHeight-40+"px",margin:"10px"},k=function(e){return s((function(t){return Object(d.d)(e,t)}))},C=(Object(i.useCallback)((function(e){e.fitView()}),[]),function(){return"randomnode_".concat(+(new Date).getTime())}),S=Object(i.useCallback)((function(){var e={id:C(),type:"selectorNode",style:{width:"auto",maxWidth:"200px",fontSize:"8px",background:"#ffffff"},data:{name:h,description:"React Flow is a library for building node-based applications. These can be simple static diagrams or complex node-based editors."},position:{x:0,y:20}};p(""),s((function(t){return t.concat(e)}))}),[s,h,p,function(e){},C]),N=function(){return Object(j.jsx)(d.c,{children:Object(j.jsxs)(d.e,{className:"workpace",elements:o,style:g,snapToGrid:!0,onConnect:k,nodeTypes:e,defaultZoom:1.5,children:["  ",Object(j.jsx)(d.a,{color:"#aaa",gap:16})," "]})})};return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)("header",{className:"App-header",children:Object(j.jsxs)(b.a,{container:!0,spacing:3,children:[Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(m.a,{position:"static",children:Object(j.jsxs)(f.a,{children:[" ",Object(j.jsx)(O.a,{variant:"h6",color:"inherit",children:"Requirement Tracability Matrix"})]})})}),Object(j.jsx)(b.a,{item:!0,xs:10,children:Object(j.jsx)(N,{})}),Object(j.jsx)(b.a,{item:!0,xs:2,children:Object(j.jsxs)(b.a,{container:!0,spacing:3,children:[Object(j.jsxs)(b.a,{item:!0,xs:12,children:[" ",Object(j.jsx)(w.a,{id:"outlined-basic",value:h,onChange:function(e){p(e.target.value)},label:"Node Name",variant:"outlined"})]}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(y.a,{onClick:S,variant:"contained",children:"Add Node"})})]})})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,110)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};n(62);o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.8334e603.chunk.js.map