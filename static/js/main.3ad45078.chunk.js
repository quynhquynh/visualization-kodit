(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{278:function(e,t,a){e.exports=a(650)},283:function(e,t,a){},305:function(e,t,a){},517:function(e,t,a){},650:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(129),i=a.n(o),c=(a(283),a(182)),l=a.n(c),u=a(261),s=a(99),m=a(21),h=a(130),d=a(131),f=a(138),p=a(132),b=a(137),v=a(262),y=a.n(v),g=(a(305),function(e){if(!e.length)return null;var t=e.map(function(e){return e.price_sqm}).reduce(function(e,t){return e+t}),a=e.filter(function(e){return!e.price_sqm});return t/(e.length-a.length)}),_=a(277),E=function(e,t,a){e=t.length?t:e;var n=[],r=!0,o=!1,i=void 0;try{for(var c,l=function(){var t=c.value,a=[];a="balcony"===t?e.filter(function(e){return e.balcony>0}):e.filter(function(e){return e.description&&e.description.includes(t)}),n=Object(m.a)(n).concat(Object(m.a)(a))},u=a[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)l()}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n},w=function(e,t,a){e=t.length?t:e;var n=[],r=!0,o=!1,i=void 0;try{for(var c,l=function(){var t=c.value,a=e.filter(function(e){return e.room_count===parseInt(t)});n=Object(m.a)(n).concat(Object(m.a)(a))},u=a[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)l()}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n},O=function(e,t,a){e=t.length?t:e;var n=[],r=!0,o=!1,i=void 0;try{for(var c,l=function(){var t=c.value,a=parseInt(t),r=t.substr(4),o=[];if(r)o=e.filter(function(e){return"<"===r?e.built_year<a:e.built_year>a});else{var i=a+20;o=e.filter(function(e){return e.built_year>=a&&e.built_year<i})}n=Object(m.a)(n).concat(Object(m.a)(o))},u=a[Symbol.iterator]();!(r=(c=u.next()).done);r=!0)l()}catch(s){o=!0,i=s}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n},k={loc:[{name:"location",label:"Location",id:"location",placeholder:"Vallikatu"}],area:[{name:"size_sqm",placeholder:"min",id:"size_sqm_min",className:"min"},{name:"size_sqm",placeholder:"max",id:"size_sqm_max",className:"max"}],aprt_price:[{name:"price",placeholder:"min",id:"price_min",className:"min"},{name:"price",placeholder:"max",id:"price_max",className:"max"}],year:[{name:"built_year",label:"< 1970",id:"1970<"},{name:"built_year",label:"1970 - 1989",id:"1970"},{name:"built_year",label:"1990 - 2009",id:"1990"},{name:"built_year",label:"> 2010",id:"2010>"}],rooms:[{name:"room_count",label:"1R",id:"1"},{name:"room_count",label:"2R",id:"2"},{name:"room_count",label:"3R",id:"3"},{name:"room_count",label:"4R",id:"4"},{name:"room_count",label:"5R",id:"5"}],opts:[{name:"options",label:"Balcony",id:"balcony"},{name:"options",label:"Terrace",id:"terassi"},{name:"options",label:"Storage",id:"vh"},{name:"options",label:"Open-kitchen",id:"avok"},{name:"options",label:"Kitchenette",id:"kk"}]},j=a(183),x=function(e,t){var a=[],n=t.location,r=t.room_count,o=t.built_year,i=t.size_sqm,c=t.price,l=t.options;return n&&(a=function(e,t){var a=t=(t=t.toLowerCase().trim()).split(" "),n=Object(_.a)(a,2),r=n[0],o=n[1];if(o)return e.filter(function(e){return e.street.toLowerCase()===r&&e.street_number.toString()===o});var i=r.length;return e.filter(function(e){return e.street.toLowerCase().substr(0,i)===r})}(e,n)),(i.min||i.max)&&(a=function(e,t,a){e=t.length?t:e;var n=a.min,r=a.max;return n=parseInt(n)||0,r=parseInt(r)||200,e.filter(function(e){return e.size_sqm>=n&&e.size_sqm<=r})}(e,a,i)),(c.min||c.max)&&(a=function(e,t,a){e=t.length?t:e;var n=a.min,r=a.max;return n=parseInt(n)||0,r=parseInt(r)||Math.pow(10,7),e.filter(function(e){return e.size_sqm*e.price_sqm>=n&&e.size_sqm*e.price_sqm<=r})}(e,a,c)),r.length&&(a=w(e,a,r)),o.length&&(a=O(e,a,o)),l.length&&(a=E(e,a,l)),a},S=function(e){for(var t=j.Object.values(e),a={},n=0;n<t.length;n++){var r=t[n];r.constructor===String?a[r]=!!r:r.constructor===Array?a[r]=!!r.length:a[r]=!(!r.min&&!r.max)}return j.Object.values(a).every(function(e){return!e})},C=function(e,t){var a=t.balcony,n=t.rooms,r=t.years,o=t.price_room,i=t.price_loc,c=function(e,t,a){for(var n=t.length,r=Object(m.a)(t),o=Object(m.a)(a),i=1;i<6;i++){var c=w(e,[],[i]),l=c.length;n?(r[i-1].value=l,o[i-1].price_sqm=g(c)):(r.push({name:"#".concat(i," room(s)"),value:l}),o.push({name:"#".concat(i," room(s)"),price_sqm:g(c)}))}return{copy_rooms:r,copy_price_room:o}}(e,n,o),l=c.copy_rooms,u=c.copy_price_room;return{balcony:function(e,t){var a=t.length,n=Object(m.a)(t),r=E(e,[],["balcony"]).length,o=e.length;return a?(n[0].value=E(e,[],["balcony"]).length,n[1].value=e.length-n[0].value):(n.push({name:"balcony",value:r}),n.push({name:"no balcony",value:o-r})),n}(e,a),rooms:l,price_room:u,years:function(e,t,a){for(var n=t.length,r=Object(m.a)(t),o=a.year,i=a.opts,c=0;c<o.length;c++){var l=O(e,[],[o[c].id]);if(n){var u=r[c],s=!0,h=!1,d=void 0;try{for(var f,p=i[Symbol.iterator]();!(s=(f=p.next()).done);s=!0)u[k=f.value.id]=E(l,[],[k]).length}catch(j){h=!0,d=j}finally{try{s||null==p.return||p.return()}finally{if(h)throw d}}}else{var b={name:o[c].label},v=!0,y=!1,g=void 0;try{for(var _,w=i[Symbol.iterator]();!(v=(_=w.next()).done);v=!0){var k;b[k=_.value.id]=E(l,[],[k]).length}}catch(j){y=!0,g=j}finally{try{v||null==w.return||w.return()}finally{if(y)throw g}}r.push(b)}}return r}(e,r,k),price_loc:function(e,t){var a=t.length,n=Object(m.a)(t),r={},o=!0,i=!1,c=void 0;try{for(var l,u=e[Symbol.iterator]();!(o=(l=u.next()).done);o=!0){var s=l.value,h=s.street,d=s.street_number,f=s.price_sqm,p=s.size_sqm,b="".concat(h," ").concat(d),v=Math.round(p*f);r.hasOwnProperty(b)||(r[b]=[]),r[b].push(v)}}catch(O){i=!0,c=O}finally{try{o||null==u.return||u.return()}finally{if(i)throw c}}var y=Object.values(r),g=Object.keys(r);a&&(n.length=0);for(var _=0;_<y.length;_++){var E=Math.max.apply(Math,Object(m.a)(y[_])),w=Math.min.apply(Math,Object(m.a)(y[_]));n.push({name:g[_],min_price:w,max_price:E})}return n}(e,i)}},q=a(70),z=a(82),N=(a(517),function(e){var t=e.name,a=e.id,o=e.className,i=e.placeholder,c=e.value,l=e.handleChange;if(["min","max"].includes(i)){var u=c,s=u.min,m=u.max;c="min"===i?s:m}return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"text",name:t,id:a&&a,className:o&&o,value:c,placeholder:i,onChange:function(e){return l(e,o)}}))}),F=function(e){var t=e.name,a=e.id,o=e.label,i=e.checked,c=e.handleCheck;return r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"checkbox",name:t,id:a,checked:i,onChange:function(e){return c(e,a)}}),r.a.createElement("label",{htmlFor:a},o),r.a.createElement("br",null))},A=function(e){var t=e.p,a=e.arr,o=e.value,i=e.className,c=e.handleChange,l=e.handleCheck;return r.a.createElement(n.Fragment,null,r.a.createElement("p",null,t),r.a.createElement("div",{className:i&&i},a.map(function(e,t){return c?r.a.createElement(N,Object.assign({key:t},e,{value:o,handleChange:c})):r.a.createElement(F,Object.assign({key:t},e,{handleCheck:l}))})))},R=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).handleChange=function(e,t){var n=e.target,r=n.name,o=n.value,i=Object(z.a)(Object(z.a)(a)).state;switch(r){case"location":a.setState(Object(q.a)({},r,o));break;default:a.setState(Object(q.a)({},r,Object(s.a)({},i[r],Object(q.a)({},t,o))))}},a.handleCheck=function(e,t){var n=e.target,r=n.name,o=n.checked,i=Object(z.a)(Object(z.a)(a)).state;if(o)a.setState(Object(q.a)({},r,Object(m.a)(i[r]).concat([t])));else{var c=Object(m.a)(i[r]),l=c.indexOf(t);c.splice(l,1),a.setState(Object(q.a)({},r,c))}},a.handleSubmit=function(e){e.preventDefault(),(0,a.props.filter)(a.state)},a.state={location:"",room_count:[],built_year:[],size_sqm:{min:"",max:""},price:{min:"",max:""},options:[]},a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=k.loc,t=k.area,a=k.aprt_price,o=k.year,i=k.rooms,c=k.opts,l=this.state,u=l.location,s=l.size_sqm,m=l.price,h=this.handleChange,d=this.handleCheck,f=[{p:"Location:",arr:e,value:u,handleChange:h},{p:"Number of rooms:",arr:i,className:"flex",handleCheck:d},{p:"Built year:",arr:o,handleCheck:d},{p:"Area:",arr:t,className:"grid",value:s,handleChange:h},{p:"Price:",arr:a,className:"grid",value:m,handleChange:h},{p:"Other options",arr:c,handleCheck:d}];return r.a.createElement("form",{onSubmit:this.handleSubmit},f.map(function(e,t){return r.a.createElement(A,Object.assign({key:t},e))}),r.a.createElement(n.Fragment,null,r.a.createElement("input",{type:"submit",value:"Search data"})))}}]),t}(n.PureComponent),I=a(652),L=a(657),K=a(646),M=a(651),B=Math.PI/180,W=function(e){var t=e.cx,a=e.cy,n=e.midAngle,o=e.innerRadius,i=e.outerRadius,c=e.percent,l=(e.index,o+.5*(i-o)),u=t+l*Math.cos(-n*B),s=a+l*Math.sin(-n*B),m=parseInt((100*c).toFixed(0)),h=m?"".concat(m,"%"):"";return r.a.createElement("text",{x:u,y:s,fill:"white",textAnchor:u>t?"start":"end",dominantBaseline:"central"},h)},D=function(e){var t=e.balcony,a=e.rooms;return r.a.createElement(I.a,{width:"100%",height:300},r.a.createElement(L.a,{width:800,height:300},r.a.createElement(K.a,{isAnimationActive:!1,data:t,dataKey:"value",outerRadius:70,fill:"#8884d8",labelLine:!1,label:W}),r.a.createElement(K.a,{isAnimationActive:!1,data:a,dataKey:"value",outerRadius:95,innerRadius:75,fill:"#82ca9d",label:!0}),r.a.createElement(M.a,null)))},P=a(653),T=a(654),U=a(179),J=a(180),V=a(647),$=a(260),G=function(e){var t=e.data,a=e.opts,n=["#17becf","#82ca9d","#FFBB28","#8884d8","#FF8042"];return r.a.createElement(I.a,{width:"100%",height:350},r.a.createElement(P.a,{width:480,height:350,data:t,margin:{top:50,right:0,left:0,bottom:0}},r.a.createElement(T.a,{strokeDasharray:"3 3"}),r.a.createElement(U.a,{dataKey:"name"}),r.a.createElement(J.a,null),r.a.createElement(M.a,null),a.map(function(e,t){return r.a.createElement(V.a,{key:t,dataKey:e.id,stackId:"a",fill:n[t]})}),r.a.createElement($.a,{wrapperStyle:{left:"25%",display:"flex"}})))},H=a(655),Q=a(648),X=function(e){var t=e.data;return r.a.createElement(I.a,{width:"100%",height:350},r.a.createElement(H.a,{width:570,height:350,data:t,margin:{top:60,right:30,left:15,bottom:5}},r.a.createElement(U.a,{dataKey:"name"}),r.a.createElement(J.a,{tickFormatter:function(e){return e.toLocaleString()}}),r.a.createElement(T.a,{strokeDasharray:"3 3"}),r.a.createElement(M.a,{formatter:function(e){return e.toFixed(1).toLocaleString()}}),r.a.createElement($.a,{wrapperStyle:{left:"35%"}}),r.a.createElement(Q.a,{type:"monotone",dataKey:"price_sqm",stroke:"#17becf",activeDot:{r:9}})))},Y=a(656),Z=a(649),ee=function(e){var t=e.data;return r.a.createElement(I.a,{width:"100%",height:300},r.a.createElement(Y.a,{width:590,height:300,data:t,margin:{top:25,right:40,left:20,bottom:0}},r.a.createElement(T.a,{strokeDasharray:"3 3"}),r.a.createElement(U.a,{dataKey:"name"}),r.a.createElement(J.a,{tickFormatter:function(e){return e.toLocaleString()}}),r.a.createElement(M.a,{formatter:function(e){return e.toLocaleString()}}),r.a.createElement(Z.a,{type:"monotone",dataKey:"min_price",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),r.a.createElement(Z.a,{type:"monotone",dataKey:"max_price",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"})))},te=x,ae=S,ne=C,re=function(e){function t(e){var a;return Object(h.a)(this,t),(a=Object(f.a)(this,Object(p.a)(t).call(this,e))).handleFilter=function(e){var t=Object(m.a)(a.original),n=ae(e)?t:te(t,e);a.setState(Object(s.a)({},ne(n,a.state)))},a.state={balcony:[],rooms:[],years:[],price_room:[],price_loc:[],loading:!0},a.original=[],a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark(function e(){var t,a,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data",e.next=3,y.a.post("https://cc677kr6sc.execute-api.eu-central-1.amazonaws.com/data",{who_rules:"kodit.io"});case 3:t=e.sent,this.original=Object(m.a)(this.original).concat(Object(m.a)(t.data)),a=this.original,n=this.state,this.setState(Object(s.a)({loading:!1},ne(a,n)));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.balcony,a=e.rooms,n=e.years,o=e.price_room,i=e.price_loc,c=k.opts;return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement(R,{filter:this.handleFilter})),r.a.createElement("div",{className:"grid-45"},r.a.createElement(D,{balcony:t,rooms:a}),r.a.createElement(ee,{data:i}),r.a.createElement(G,{data:n,opts:c}),r.a.createElement(X,{data:o})))}}]),t}(n.Component),oe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ie(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(re,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/visualization-kodit",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/visualization-kodit","/service-worker.js");oe?(function(e,t){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ie(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ie(t,e)})}}()}},[[278,2,1]]]);
//# sourceMappingURL=main.3ad45078.chunk.js.map