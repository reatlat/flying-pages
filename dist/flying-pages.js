function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.apply(this,arguments)}var t=new Set,n=function(e,n,o){t.has(e)||(t.add(e),document.querySelector("a[href='"+e+"']").style.color="red",n(function(){return function(e){return new Promise(function(t,n){var o=document.createElement("link");o.rel="prefetch",o.as="document",o.href=e,o.onload=t,o.onerror=n,document.head.appendChild(o)})}(e).then(o).catch(o)}))},o=window.IntersectionObserver&&"isIntersecting"in IntersectionObserverEntry.prototype,r=navigator.connection&&(navigator.connection.saveData||(navigator.connection.effectiveType||"").includes("2g")),i=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);exports.listen=function(t){if(!r&&o&&(a=document.createElement("link")).relList&&a.relList.supports&&a.relList.supports("prefetch")){var a;t=e({},{throttle:3,desktopPreloadMethod:"nearby-mouse",mobilePreloadMethod:"all-in-viewport",mouseProximity:100,excludeKeywords:[]},t);var c,s,l=new Set,u=function(e){e=e||1;var t=[],n=0;function o(){n<e&&t.length>0&&(t.shift()(),n++)}return[function(e){t.push(e)>1||o()},function(){n--,o()}]}(t.throttle),f=u[0],d=u[1],h=i?t.mobilePreloadMethod:t.desktopPreloadMethod,p=new IntersectionObserver(function(e,t){e.forEach(function(e){"all-in-viewport"===h&&e.isIntersecting&&n(e.target.href,f,d),"nearby-mouse"===h&&(e.isIntersecting?l.add(e.target):l.delete(e.target))})});document.querySelectorAll("a[href^='"+window.location.origin+"']").forEach(function(e){var n=new RegExp(t.excludeKeywords.join("|"));t.excludeKeywords.length&&n.test(e.href)||p.observe(e)}),"nearby-mouse"===h&&document.addEventListener("mousemove",(c=function(e){[].concat(l).forEach(function(o){var r,i;r=o,i=e.pageY,Math.floor(Math.sqrt(Math.pow(e.pageX-(r.offsetLeft+r.offsetWidth/2),2)+Math.pow(i-(r.offsetTop+r.offsetHeight/2),2)))<t.mouseProximity&&(n(o.href,f,d),o.style.color="red")})},s=!1,function(){s||(c.apply(null,arguments),s=!0,setTimeout(function(){s=!1},500))}))}};
