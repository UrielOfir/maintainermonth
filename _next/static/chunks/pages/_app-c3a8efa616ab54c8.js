(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"===typeof e||"number"===typeof e)o+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.Z=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3815)}])},9613:function(e,t,n){"use strict";n.d(t,{g:function(){return o}});var r=JSON.parse('{"actions:view-more":"View more","anchor-nav:hero":"Maintainer Month","anchor-nav:about":"About","anchor-nav:get-involved":"Get involved","anchor-nav:events":"Schedule","anchor-nav:connection":"Connection","connection:image-description":"Connection illustration","event-button:podcast":"Listen to the podcast","event-button:stream":"Watch the stream","event-button:talk":"Watch the talk","event-button:meetup":"View the meetup","event-button:fundraising":"Help raise funds","event-button:conference":"View the conference","event-button:misc":"View the event","event-type:podcast":"Podcast","event-type:stream":"Stream","event-type:talk":"Talk","event-type:meetup":"Meetup","event-type:fundraising":"Fundraising","event-type:conference":"Conference","event-type:misc":"Misc","footer:copyright":"Made with \u2665\ufe0e\ufe0f by GitHub","footer:privacy-title":"Privacy terms and conditions","footer:privacy-url":"https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement","footer:repository-title":"Repository","footer:repository-url":"https://github.com/github/maintainermonth","footer:twitter-label":"Follow us on Twitter","footer:twitter-url":"https://twitter.com/github","footer:facebook-label":"Follow us on Facebook","footer:facebook-url":"https://www.facebook.com/GitHub/","footer:youtube-label":"Follow us on YouTube","footer:youtube-url":"https://www.youtube.com/github","footer:linkedin-label":"Follow us on LinkedIn","footer:linkedin-url":"https://www.linkedin.com/company/github","footer:github-label":"Follow us on GitHub","footer:github-url":"https://github.com/github/maintainermonth","hero:image-description":"Illustration inspired by M. C. Escher","library:title":"Library","library:description":"List of all the resources that will be useful during GitHub Maintainer Month.","meta:title":"Maintainer Month","meta:description":"A month for open source maintainers to gather, share, and be celebrated.","meta:event-description":"Check out this GitHub Maintainer Month event","message:tbd":"TBD","not-found:title":"Oops!","not-found:subtitle":"Page not found","not-found:button":"Go home","navigation:schedule":"Schedule","navigation:library":"Library","page:title":"Maintainer Month","page:title-mobile":"MM","page:date":"June 2022","schedule:title":"Schedule","schedule:description":"List of all events to be organized during GitHub Maintainer Month","share:event":"Check out this GitHub Maintainer Month event","timezone:utc":"UTC","timezone:pt":"PT"}'),o=function(e){return r[e]}},6724:function(e,t,n){"use strict";n.d(t,{Sd:function(){return o},$L:function(){return i},Ks:function(){return l},Y3:function(){return a}});var r=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.parent,r=void 0===n?o:n;return{path:e,parent:r,linkTo:function(t){return{pathname:e,query:t}}}},o=r("/",{parent:null}),i=r("/schedule"),l=r("".concat(i.path,"/[slug]"),{parent:i}),a=r("/library")},5512:function(e,t,n){"use strict";n.d(t,{E:function(){return l},h:function(){return a}});var r=n(5893),o=n(7294),i=(0,o.createContext)(),l=function(e){var t=e.children,n=(0,o.useState)(0),l={animationStep:n[0],setAnimationStep:n[1]};return(0,r.jsx)(i.Provider,{value:l,children:t})},a=function(){var e=(0,o.useContext)(i);if(void 0===e)throw new Error("useBackground must be used within a BackgroundProvider");return e}},8418:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){a=!0,o=s}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var i,l=(i=n(7294))&&i.__esModule?i:{default:i},a=n(6273),s=n(387),c=n(7190);var u={};function f(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var d=function(e){var t,n=!1!==e.prefetch,r=s.useRouter(),i=l.default.useMemo((function(){var t=o(a.resolveHref(r,e.href,!0),2),n=t[0],i=t[1];return{href:n,as:e.as?a.resolveHref(r,e.as):i||n}}),[r,e.href,e.as]),d=i.href,h=i.as,p=e.children,v=e.replace,b=e.shallow,g=e.scroll,m=e.locale;"string"===typeof p&&(p=l.default.createElement("a",null,p));var C=(t=l.default.Children.only(p))&&"object"===typeof t&&t.ref,y=o(c.useIntersection({rootMargin:"200px"}),2),w=y[0],x=y[1],j=l.default.useCallback((function(e){w(e),C&&("function"===typeof C?C(e):"object"===typeof C&&(C.current=e))}),[C,w]);l.default.useEffect((function(){var e=x&&n&&a.isLocalURL(d),t="undefined"!==typeof m?m:r&&r.locale,o=u[d+"%"+h+(t?"%"+t:"")];e&&!o&&f(r,d,h,{locale:t})}),[h,d,x,m,n,r]);var _={ref:j,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,i,l,s){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n))&&(e.preventDefault(),t[o?"replace":"push"](n,r,{shallow:i,locale:s,scroll:l}))}(e,r,d,h,v,b,g,m)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),a.isLocalURL(d)&&f(r,d,h,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var M="undefined"!==typeof m?m:r&&r.locale,L=r&&r.isLocaleDomain&&a.getDomainLocale(h,M,r&&r.locales,r&&r.domainLocales);_.href=L||a.addBasePath(a.addLocale(h,M,r&&r.defaultLocale))}return l.default.cloneElement(t,_)};t.default=d},7190:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],l=!0,a=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){a=!0,o=s}finally{try{l||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,r=e.disabled||!a,u=i.useRef(),f=o(i.useState(!1),2),d=f[0],h=f[1],p=o(i.useState(t?t.current:null),2),v=p[0],b=p[1],g=i.useCallback((function(e){u.current&&(u.current(),u.current=void 0),r||d||e&&e.tagName&&(u.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=c.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?t=s.get(r):(t=s.get(n),c.push(n));if(t)return t;var o=new Map,i=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(n,t={id:n,observer:i,elements:o}),t}(n),o=r.id,i=r.observer,l=r.elements;return l.set(e,t),i.observe(e),function(){if(l.delete(e),i.unobserve(e),0===l.size){i.disconnect(),s.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&h(e)}),{root:v,rootMargin:n}))}),[r,v,n,d]);return i.useEffect((function(){if(!a&&!d){var e=l.requestIdleCallback((function(){return h(!0)}));return function(){return l.cancelIdleCallback(e)}}}),[d]),i.useEffect((function(){t&&b(t.current)}),[t]),[g,d]};var i=n(7294),l=n(9311),a="undefined"!==typeof IntersectionObserver;var s=new Map,c=[]},3815:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),o=(n(7332),n(7294)),i=n(1163),l=n(523),a=n.n(l),s=n(6010),c=n(5512),u=n(6724),f=n(9613),d=function(){return(0,r.jsx)("svg",{className:"icon-twitter",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 7.92039C19.4485 8.16155 18.8551 8.32397 18.2326 8.3973C18.8681 8.02227 19.356 7.42872 19.5855 6.72147C18.9916 7.06894 18.3321 7.32044 17.6317 7.45677C17.0702 6.86814 16.2697 6.5 15.3853 6.5C13.6859 6.5 12.308 7.85641 12.308 9.52928C12.308 9.76651 12.3355 9.99783 12.388 10.2198C9.83018 10.0938 7.56283 8.8875 6.04493 7.05467C5.77995 7.50205 5.62846 8.02227 5.62846 8.57744C5.62846 9.62821 6.17092 10.5555 6.99737 11.0988C6.4924 11.0831 6.01843 10.9467 5.60296 10.7198V10.7577C5.60296 12.2259 6.66439 13.4499 8.07129 13.7289C7.81331 13.7978 7.54133 13.8352 7.26085 13.8352C7.06236 13.8352 6.86937 13.8161 6.68139 13.7806C7.07286 14.984 8.20979 15.86 9.5562 15.8846C8.50327 16.6967 7.17635 17.1815 5.73445 17.1815C5.48547 17.1815 5.24048 17.1672 5 17.1387C6.36191 17.998 7.9793 18.5 9.71718 18.5C15.3773 18.5 18.4726 13.884 18.4726 9.88118C18.4726 9.74977 18.4701 9.61886 18.4636 9.48942C19.0656 9.06124 19.5875 8.52773 20 7.92039Z",fill:"#000"})})},h=function(){return(0,r.jsx)("svg",{className:"icon-facebook",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M18.71 5.75H6.29C5.99131 5.75 5.75 5.99131 5.75 6.29V18.71C5.75 19.0087 5.99131 19.25 6.29 19.25H18.71C19.0087 19.25 19.25 19.0087 19.25 18.71V6.29C19.25 5.99131 19.0087 5.75 18.71 5.75ZM17.1508 9.69031H16.0724C15.227 9.69031 15.0633 10.0919 15.0633 10.6826V11.9836H17.0816L16.8183 14.0204H15.0633V19.25H12.959V14.0221H11.1989V11.9836H12.959V10.4818C12.959 8.73856 14.0238 7.7885 15.5797 7.7885C16.3256 7.7885 16.9651 7.84419 17.1524 7.8695V9.69031H17.1508Z",fill:"#000"})})},p=function(){return(0,r.jsx)("svg",{className:"icon-youtube",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M21.0888 7.86815C20.9777 7.45938 20.7611 7.0893 20.4622 6.79725C20.1548 6.49622 19.7781 6.28089 19.3676 6.17158C17.8313 5.75418 12.4943 5.75418 12.4943 5.75418C9.92829 5.72409 8.18099 5.85644 5.63074 6.1505C5.22023 6.26789 4.84422 6.48803 4.53617 6.79135C4.23349 7.09154 4.01425 7.46172 3.89972 7.86731C3.6246 9.39502 3.49093 10.9462 3.5005 12.5C3.49069 14.0524 3.62403 15.6031 3.89972 17.1327C4.01179 17.5366 4.23022 17.9051 4.53372 18.2027C4.83722 18.5004 5.21516 18.7154 5.63074 18.8293C7.18751 19.2458 12.4943 19.2458 12.4943 19.2458C15.0635 19.2759 16.8141 19.1436 19.3676 18.8495C19.7781 18.7402 20.1548 18.5248 20.4622 18.2238C20.761 17.9318 20.9773 17.5617 21.088 17.1529C21.3703 15.6258 21.5076 14.074 21.4979 12.5194C21.5191 10.9582 21.382 9.39993 21.0888 7.86815ZM10.5375 15.3872V9.61363L15.6585 12.5008L10.5375 15.3872Z",fill:"#000"})})},v=function(){return(0,r.jsxs)("svg",{className:"icon-linkedin",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.99039 7.22102C8.99039 8.02296 8.37977 8.67196 7.42487 8.67196C6.50718 8.67196 5.89657 8.02296 5.91547 7.22102C5.89657 6.3801 6.50717 5.75 7.44317 5.75C8.37976 5.75 8.97208 6.3801 8.99039 7.22102ZM5.99224 19.1592V9.81818H8.8953V19.1586H5.99224V19.1592Z",fill:"#000"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.2223 12.7992C11.2223 11.6341 11.1839 10.6408 11.1455 9.81938H13.6671L13.8011 11.0991H13.8584C14.2405 10.5068 15.1954 9.60974 16.7426 9.60974C18.6524 9.60974 20.085 10.8705 20.085 13.6201V19.1604H17.1819V13.9838C17.1819 12.7797 16.7621 11.9589 15.7115 11.9589C14.909 11.9589 14.4318 12.5128 14.2411 13.0472C14.1643 13.2386 14.1265 13.5055 14.1265 13.7736V19.1604H11.2235V12.7992H11.2223Z",fill:"#000"})]})},b=function(){return(0,r.jsx)("svg",{className:"icon-github",width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 5C8.35625 5 5 8.44114 5 12.6897C5 16.0924 7.14687 18.9664 10.1281 19.9853C10.5031 20.0526 10.6438 19.8219 10.6438 19.62C10.6438 19.4374 10.6344 18.8319 10.6344 18.1878C8.75 18.5435 8.2625 17.7168 8.1125 17.2843C8.02813 17.0632 7.6625 16.3808 7.34375 16.1981C7.08125 16.0539 6.70625 15.6983 7.33437 15.6887C7.925 15.6791 8.34687 16.2462 8.4875 16.4769C9.1625 17.6399 10.2406 17.3131 10.6719 17.1113C10.7375 16.6115 10.9344 16.275 11.15 16.0828C9.48125 15.8905 7.7375 15.2273 7.7375 12.286C7.7375 11.4497 8.02813 10.7577 8.50625 10.2194C8.43125 10.0271 8.16875 9.23895 8.58125 8.18161C8.58125 8.18161 9.20937 7.97976 10.6438 8.96981C11.2438 8.79679 11.8813 8.71028 12.5188 8.71028C13.1562 8.71028 13.7938 8.79679 14.3938 8.96981C15.8281 7.97015 16.4563 8.18161 16.4563 8.18161C16.8688 9.23895 16.6062 10.0271 16.5312 10.2194C17.0094 10.7577 17.3 11.4401 17.3 12.286C17.3 15.2369 15.5469 15.8905 13.8781 16.0828C14.15 16.3231 14.3844 16.7845 14.3844 17.5054C14.3844 18.5339 14.375 19.3605 14.375 19.62C14.375 19.8219 14.5156 20.0622 14.8906 19.9853C17.8531 18.9664 20 16.0828 20 12.6897C20 8.44114 16.6438 5 12.5 5Z",fill:"#000"})})},g=function(){var e=(0,i.useRouter)().pathname,t=(0,o.useMemo)((function(){return e===u.Sd.path}),[e]),n=(0,s.Z)("footer",{"is-home":t});return(0,r.jsxs)("footer",{className:n,children:[(0,r.jsxs)("div",{className:"footer__copyright",children:[(0,r.jsx)("a",{className:"footer__link",href:(0,f.g)("footer:repository-url"),target:"_blank",rel:"noreferrer",children:(0,f.g)("footer:repository-title")}),(0,r.jsx)("span",{className:"footer__divider"}),(0,r.jsx)("p",{children:(0,f.g)("footer:copyright")})]}),(0,r.jsxs)("div",{className:"footer__links",children:[(0,r.jsxs)("div",{className:"footer__social",children:[(0,r.jsx)("a",{className:"footer__button",href:(0,f.g)("footer:twitter-url"),target:"_blank",rel:"noreferrer","aria-label":(0,f.g)("footer:twitter-label"),children:(0,r.jsx)("span",{"aria-hidden":"true",children:(0,r.jsx)(d,{})})}),(0,r.jsx)("a",{className:"footer__button",href:(0,f.g)("footer:facebook-url"),target:"_blank",rel:"noreferrer","aria-label":(0,f.g)("footer:facebook-label"),children:(0,r.jsx)("span",{"aria-hidden":"true",children:(0,r.jsx)(h,{})})}),(0,r.jsx)("a",{className:"footer__button",href:(0,f.g)("footer:youtube-url"),target:"_blank",rel:"noreferrer","aria-label":(0,f.g)("footer:youtube-label"),children:(0,r.jsx)("span",{"aria-hidden":"true",children:(0,r.jsx)(p,{})})}),(0,r.jsx)("a",{className:"footer__button",href:(0,f.g)("footer:linkedin-url"),target:"_blank",rel:"noreferrer","aria-label":(0,f.g)("footer:linkedin-label"),children:(0,r.jsx)("span",{"aria-hidden":"true",children:(0,r.jsx)(v,{})})}),(0,r.jsx)("a",{className:"footer__button",href:(0,f.g)("footer:github-url"),target:"_blank",rel:"noreferrer","aria-label":(0,f.g)("footer:github-label"),children:(0,r.jsx)("span",{"aria-hidden":"true",children:(0,r.jsx)(b,{})})})]}),(0,r.jsx)("a",{className:"footer__link",href:(0,f.g)("footer:privacy-url"),target:"_blank",rel:"noreferrer",children:(0,f.g)("footer:privacy-title")})]})]})},m=n(1664);var C=function(){var e=(0,o.useState)({width:void 0,height:void 0}),t=e[0],n=e[1];return(0,o.useEffect)((function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),t},y=function(){return(0,r.jsx)("svg",{className:"github-logo",height:"32","aria-hidden":"true",viewBox:"0 0 16 16",version:"1.1",width:"32","data-view-component":"true",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"})})},w=function(){return(0,r.jsx)("svg",{className:"icon-calendar",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75V5.25H6C4.75736 5.25 3.75 6.25736 3.75 7.5V18C3.75 19.2426 4.75736 20.25 6 20.25H18C19.2426 20.25 20.25 19.2426 20.25 18V7.5C20.25 6.25736 19.2426 5.25 18 5.25H15.75V3.75C15.75 3.33579 15.4142 3 15 3C14.5858 3 14.25 3.33579 14.25 3.75V5.25H9.75V3.75ZM5.25 10.5V18C5.25 18.4142 5.58579 18.75 6 18.75H18C18.4142 18.75 18.75 18.4142 18.75 18V10.5L5.25 10.5ZM18.75 9L5.25 9V7.5C5.25 7.08579 5.58579 6.75 6 6.75H18C18.4142 6.75 18.75 7.08579 18.75 7.5V9Z",fill:"#000"})})},x=function(){return(0,r.jsxs)("svg",{className:"icon-books",width:"24",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M15.8419 6.72811C15.9491 7.12821 15.7117 7.53946 15.3116 7.64667L13.8627 8.0349C13.4626 8.14211 13.0513 7.90467 12.9441 7.50457C12.8369 7.10447 13.0744 6.69322 13.4745 6.58601L14.9234 6.19778C15.3235 6.09058 15.7347 6.32801 15.8419 6.72811Z",fill:"#000"}),(0,r.jsx)("path",{d:"M17.979 17.6014C18.3791 17.4942 18.6165 17.083 18.5093 16.6829C18.4021 16.2828 17.9908 16.0453 17.5907 16.1525L16.1418 16.5408C15.7417 16.648 15.5043 17.0592 15.6115 17.4593C15.7187 17.8594 16.13 18.0969 16.5301 17.9896L17.979 17.6014Z",fill:"#000"}),(0,r.jsx)("path",{d:"M17.9269 14.5095C18.0341 14.9096 17.7967 15.3209 17.3966 15.4281L15.9477 15.8163C15.5476 15.9235 15.1364 15.6861 15.0292 15.286C14.922 14.8859 15.1594 14.4746 15.5595 14.3674L17.0084 13.9792C17.4085 13.872 17.8197 14.1094 17.9269 14.5095Z",fill:"#000"}),(0,r.jsx)("path",{d:"M8.25 6.94414C8.25 7.35836 7.91421 7.69414 7.5 7.69414H6C5.58579 7.69414 5.25 7.35836 5.25 6.94414C5.25 6.52993 5.58579 6.19414 6 6.19414H7.5C7.91421 6.19414 8.25 6.52993 8.25 6.94414Z",fill:"#000"}),(0,r.jsx)("path",{d:"M7.5 18.0001C7.91421 18.0001 8.25 17.6643 8.25 17.2501C8.25 16.8358 7.91421 16.5001 7.5 16.5001H6C5.58579 16.5001 5.25 16.8358 5.25 17.2501C5.25 17.6643 5.58579 18.0001 6 18.0001H7.5Z",fill:"#000"}),(0,r.jsx)("path",{d:"M8.25 15.0001C8.25 15.4143 7.91421 15.7501 7.5 15.7501H6C5.58579 15.7501 5.25 15.4143 5.25 15.0001C5.25 14.5858 5.58579 14.2501 6 14.2501H7.5C7.91421 14.2501 8.25 14.5858 8.25 15.0001Z",fill:"#000"}),(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.9233 3.69487L14.8211 2.91841C16.0214 2.59679 17.2552 3.3091 17.5768 4.5094L21.0708 17.5494C21.3925 18.7497 20.6802 19.9835 19.4799 20.3051L16.5821 21.0815C15.3818 21.4032 14.148 20.6908 13.8264 19.4905L10.5 7.07625V18.7501C10.5 19.9927 9.49264 21.0001 8.25 21.0001H5.25C4.00736 21.0001 3 19.9927 3 18.7501V5.25005C3 4.00741 4.00736 3.00005 5.25 3.00005H8.25C9.37449 3.00005 10.3063 3.82496 10.4733 4.90264C10.7466 4.32809 11.2606 3.87245 11.9233 3.69487ZM12.3116 5.14376C11.9115 5.25096 11.674 5.66222 11.7812 6.06232L15.2753 19.1023C15.3825 19.5024 15.7937 19.7399 16.1938 19.6326L19.0916 18.8562C19.4917 18.749 19.7292 18.3377 19.622 17.9376L16.1279 4.89763C16.0207 4.49753 15.6094 4.26009 15.2093 4.3673L12.3116 5.14376ZM5.25 4.50005C4.83579 4.50005 4.5 4.83584 4.5 5.25005V18.7501C4.5 19.1643 4.83579 19.5001 5.25 19.5001H8.25C8.66421 19.5001 9 19.1643 9 18.7501V5.25005C9 4.83584 8.66421 4.50005 8.25 4.50005H5.25Z",fill:"#000"})]})},j=460;function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var M=function(){var e=(0,i.useRouter)().pathname,t=C().width,n=(0,o.useMemo)((function(){return e===u.Sd.path}),[e]),l=(0,o.useState)(n),a=l[0],c=l[1],d=(0,s.Z)("header__chip",{hide:a}),h=(0,o.useMemo)((function(){return t<j}),[t]);return(0,o.useEffect)((function(){if(n){c(!0);var e=function(e){var t=e.target.scrollingElement.clientHeight,n=e.target.scrollingElement.scrollTop;c(!(n>t/2))};return c(!0),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}c(!1)}),[n]),(0,r.jsx)("header",{className:"header",children:(0,r.jsxs)("div",{className:"header__content",children:[(0,r.jsxs)("div",{className:"header__logo",children:[(0,r.jsx)(m.default,{href:u.Sd.path,children:(0,r.jsxs)("a",{className:"header__home-link",children:[(0,r.jsx)(y,{}),(0,f.g)(h?"page:title-mobile":"page:title")]})}),(0,r.jsx)("p",{className:d,children:(0,f.g)("page:date")})]}),(0,r.jsx)("nav",{className:"header__navigation",children:(0,r.jsxs)("ul",{className:"header__list",children:[(0,r.jsx)("li",{children:(0,r.jsx)(m.default,{href:u.$L.path,"aria-label":(0,f.g)("navigation:schedule"),children:(0,r.jsxs)("a",{className:(0,s.Z)("header__link",_({},"is-active",e===u.$L.path)),"aria-label":(0,f.g)("navigation:schedule"),children:[(0,r.jsx)(w,{}),(0,r.jsx)("span",{className:"header__link-text",children:(0,f.g)("navigation:schedule")})]})})}),(0,r.jsx)("li",{children:(0,r.jsx)(m.default,{href:u.Y3.path,"aria-label":(0,f.g)("navigation:library"),children:(0,r.jsxs)("a",{className:(0,s.Z)("header__link",_({},"is-active",e===u.Y3.path)),"aria-label":(0,f.g)("navigation:library"),children:[(0,r.jsx)(x,{}),(0,r.jsx)("span",{className:"header__link-text",children:(0,f.g)("navigation:library")})]})})})]})})]})})};var L=function(e){var t,n,o,i=e.children,l=(0,c.h)().animationStep,a=(0,s.Z)("layout",(t={},n="step-".concat(l),o=!0,n in t?Object.defineProperty(t,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[n]=o,t));return(0,r.jsxs)("div",{className:a,children:[(0,r.jsxs)("div",{className:"layout__bubbles",children:[(0,r.jsx)("span",{className:"layout__back-bubble"}),(0,r.jsx)("span",{className:"layout__front-bubble"})]}),(0,r.jsxs)("div",{className:"layout__content",children:[(0,r.jsx)(M,{}),(0,r.jsx)("main",{children:i}),(0,r.jsx)(g,{})]})]})},k=function(){(0,o.useEffect)((function(){var e=function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh","".concat(e,"px"))};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[])};function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){H(e,t,n[t])}))}return e}var E=function(e){var t=e.Component,n=e.pageProps;k();var l=(0,i.useRouter)();return(0,o.useEffect)((function(){a().polyfill();var e=function(){window.scroll({top:0,left:0})};return l.events.on("routeChangeComplete",e),function(){l.events.off("routeChangeComplete",e)}}),[]),(0,r.jsx)(c.E,{children:(0,r.jsx)(L,{children:(0,r.jsx)(t,N({},n))})})}},7332:function(){},1664:function(e,t,n){e.exports=n(8418)},1163:function(e,t,n){e.exports=n(387)},523:function(e){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var n,r=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:r.prototype.scroll||a,scrollIntoView:r.prototype.scrollIntoView},i=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(n=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(n)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!==typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,"undefined"===typeof e?this.scrollLeft:~~e,"undefined"===typeof t?this.scrollTop:~~t)}else{if("number"===typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!==typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},r.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},r.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var n=d(this),r=n.getBoundingClientRect(),i=this.getBoundingClientRect();n!==t.body?(p.call(this,n,n.scrollLeft+i.left-r.left,n.scrollTop+i.top-r.top),"fixed"!==e.getComputedStyle(n).position&&e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):e.scrollBy({left:i.left,top:i.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function a(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!==typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"===typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,n){var r=e.getComputedStyle(t,null)["overflow"+n];return"auto"===r||"scroll"===r}function f(e){var t=c(e,"Y")&&u(e,"Y"),n=c(e,"X")&&u(e,"X");return t||n}function d(e){for(;e!==t.body&&!1===f(e);)e=e.parentNode||e.host;return e}function h(t){var n,r,o,l,a=(i()-t.startTime)/468;l=a=a>1?1:a,n=.5*(1-Math.cos(Math.PI*l)),r=t.startX+(t.x-t.startX)*n,o=t.startY+(t.y-t.startY)*n,t.method.call(t.scrollable,r,o),r===t.x&&o===t.y||e.requestAnimationFrame(h.bind(e,t))}function p(n,r,l){var s,c,u,f,d=i();n===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,f=o.scroll):(s=n,c=n.scrollLeft,u=n.scrollTop,f=a),h({scrollable:s,method:f,startTime:d,startX:c,startY:u,x:r,y:l})}}}}()}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(387)}));var n=e.O();_N_E=n}]);