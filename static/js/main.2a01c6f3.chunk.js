(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),c=n(3),o=n.n(c),i=(n(12),n(1)),l=function(){var t=function(){return{w:window.innerWidth,h:window.innerHeight}},e=Object(a.useState)(t()),n=Object(i.a)(e,2),r=n[0],c=n[1],o=function(){return c(t())};return Object(a.useEffect)(function(){return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[]),r};var s=n(5),u=n(4),h=2*Math.PI,m=(Math.PI,Math.PI,Math.PI,Math.abs,Math.sin,Math.cos,Math.tan,Math.sign,Math.sqrt,Math.pow,Math.log,Math.min,Math.max,Math.round,Math.trunc,Math.floor),d=Math.random,f=function(t){return m(d()*t)},w=function(t,e,n){return p(t+e*d(),n)},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return Number.isInteger(t)?t:parseFloat(t.toFixed(e))},y=function(t){var e=t.width,n=t.height,c=Object(u.a)(t,["width","height"]),o=Object(a.useRef)(null),i=Object(a.useRef)(document.createElement("canvas"));return Object(a.useEffect)(function(){var t=i.current;t.width=300,t.height=300;for(var e=t.getContext("2d",{alpha:!1}),n=function(){return(t=[0,30,60,90,120,180,240])[m(d()*t.length)];var t},a=300+f(200),r=0;r<a;r++)e.beginPath(),e.arc(f(301),f(301),w(.1,.9,2),0,h),e.fillStyle="hsla(".concat(n(),",").concat(50+f(50),"%,88%,").concat(w(.4,.6,2),")"),e.fill();console.log("".concat(a," stars generated in ").concat(300,"x").concat(300," pattern."))},[]),Object(a.useEffect)(function(){var t=o.current,e=t.getContext("2d");e.fillStyle=e.createPattern(i.current,"repeat"),e.fillRect(0,0,t.width,t.height)},[e,n]),r.a.createElement("canvas",{ref:o,width:e,height:n,style:Object(s.a)({position:"absolute",left:0,top:0},c)})},x=(n(13),function(t){var e=t.url;return r.a.createElement("iframe",{title:"Bohemian Rhapsody",width:"100%",height:"100%",src:e,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),g=[r.a.createElement("iframe",{width:"300",height:"300",title:"SpacetimeQ",src:"https://www.spacetimeq.com"}),r.a.createElement(x,{url:"https://www.youtube.com/embed/fJ9rUzIMcZQ?controls=0"}),r.a.createElement("img",{src:"images/shibaHelp.gif",width:"100%",alt:"Shiba Help"}),r.a.createElement("iframe",{width:"300",height:"300",title:"Cal",src:"https://spacetimeq.github.io"}),r.a.createElement(x,{url:"https://www.youtube.com/embed/T73WhWTawCE"}),r.a.createElement(x,{url:"https://www.youtube.com/embed/04854XqcfCY?controls=0"})],b=function(){var t=Object(a.useState)(0),e=Object(i.a)(t,2),n=e[0],c=e[1],o=300,l=300,s=10;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"s3scene"},r.a.createElement("div",{className:"s3body"},g.map(function(t,e){return function(t,e){var a=o/2,c=[{x:-o-s,y:-l-s},{x:0,y:-l-s},{x:o+s,y:-l-s},{x:-o-s,y:0},{x:0,y:0},{x:o+s,y:0}],i=[{x:0,y:0},{x:0,y:90},{x:0,y:180},{x:0,y:270},{x:90,y:0},{x:-90,y:0}],u=Math.round(o/(2*Math.tan(Math.PI/6))),h=[{x:0,y:0},{x:0,y:60},{x:0,y:120},{x:0,y:180},{x:0,y:240},{x:0,y:300}];return r.a.createElement("div",{key:e,className:"s3cell",style:{transform:function(){switch(n){case 0:return"translateX(".concat(c[e].x,"px) translateY(").concat(c[e].y,"px)");case 1:return(i[e].x?"rotateX(".concat(i[e].x,"deg) "):"")+(i[e].y?"rotateY(".concat(i[e].y,"deg) "):"")+"translateZ(".concat(a,"px)");case 2:return"translateX(".concat(50*e-a,"px) translateY(").concat(50*e-a,"px) translateZ(").concat(a/2-50*e,"px)");case 3:return(h[e].x?"rotateX(".concat(h[e].x,"deg) "):"")+(h[e].y?"rotateY(".concat(h[e].y,"deg) "):"")+"translateZ(".concat(u,"px)");default:return}}()}},t)}(t,e)}))),r.a.createElement("div",{className:"btn-container"},r.a.createElement(v,{onClick:function(){return c((n+1)%4)}},"Transform")))},v=function(t){return r.a.createElement("button",Object.assign({type:"button",className:"test-btn"},t),t.children)};var E=function(){var t=l();return r.a.createElement("div",{className:"App"},r.a.createElement(y,{width:t.w,height:t.h}),r.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,n){t.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.2a01c6f3.chunk.js.map