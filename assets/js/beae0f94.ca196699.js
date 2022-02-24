"use strict";(self.webpackChunkreservoir_docs=self.webpackChunkreservoir_docs||[]).push([[655],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),u=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=u(e.components);return o.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},p=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=n,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return t?o.createElement(m,a(a({ref:r},s),{},{components:t})):o.createElement(m,a({ref:r},s))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3433:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var o=t(7462),n=t(3366),i=(t(7294),t(3905)),a=["components"],l={sidebar_position:2},c="Order Book",u={unversionedId:"protocol/order-book",id:"protocol/order-book",title:"Order Book",description:"The Reservoir Order Book is an aggregated and filtered view of all available liquidity. It normalizes different formats (e.g. single token order vs trait bid) and sources (e.g. Open Sea vs Rarible) into a single universal standard that is easy to build on top of.",source:"@site/docs/protocol/order-book.md",sourceDirName:"protocol",slug:"/protocol/order-book",permalink:"/docs/protocol/order-book",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/protocol/order-book.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Lake",permalink:"/docs/protocol/data-lake"},next:{title:"Indexer",permalink:"/docs/protocol/indexer"}},s=[{value:"Order Kinds",id:"order-kinds",children:[],level:2},{value:"Liquidity Sources",id:"liquidity-sources",children:[{value:"Off-Chain",id:"off-chain",children:[],level:3}],level:2}],d={toc:s};function p(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"order-book"},"Order Book"),(0,i.kt)("p",null,"The Reservoir Order Book is an aggregated and filtered view of all available liquidity. It normalizes different formats (e.g. single token order vs trait bid) and sources (e.g. Open Sea vs Rarible) into a single universal standard that is easy to build on top of."),(0,i.kt)("h2",{id:"order-kinds"},"Order Kinds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Token > The most common order today, on a single token"),(0,i.kt)("li",{parentName:"ul"},"Contract > On any token in a collection"),(0,i.kt)("li",{parentName:"ul"},"Range > On a range of token ids, for contracts like Art Blocks"),(0,i.kt)("li",{parentName:"ul"},"List > ")),(0,i.kt)("p",null,"For more information on how multi-token orders work, check out the Token Sets page."),(0,i.kt)("h2",{id:"liquidity-sources"},"Liquidity Sources"),(0,i.kt)("h3",{id:"off-chain"},"Off-Chain"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"WyvernV2 (Open Sea)"),(0,i.kt)("li",{parentName:"ul"},"0x ","[COMING SOON]"),(0,i.kt)("li",{parentName:"ul"},"Rarible ","[COMING SOON]")))}p.isMDXComponent=!0}}]);