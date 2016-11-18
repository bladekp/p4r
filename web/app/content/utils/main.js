/*
Uniform
*/

(function(e,t){"use strict";function n(e){var t=Array.prototype.slice.call(arguments,1);return e.prop?e.prop.apply(e,t):e.attr.apply(e,t)}function s(e,t,n){var s,a;for(s in n)n.hasOwnProperty(s)&&(a=s.replace(/ |$/g,t.eventNamespace),e.bind(a,n[s]))}function a(e,t,n){s(e,n,{focus:function(){t.addClass(n.focusClass)},blur:function(){t.removeClass(n.focusClass),t.removeClass(n.activeClass)},mouseenter:function(){t.addClass(n.hoverClass)},mouseleave:function(){t.removeClass(n.hoverClass),t.removeClass(n.activeClass)},"mousedown touchbegin":function(){e.is(":disabled")||t.addClass(n.activeClass)},"mouseup touchend":function(){t.removeClass(n.activeClass)}})}function i(e,t){e.removeClass(t.hoverClass+" "+t.focusClass+" "+t.activeClass)}function r(e,t,n){n?e.addClass(t):e.removeClass(t)}function l(e,t,n){var s="checked",a=t.is(":"+s);t.prop?t.prop(s,a):a?t.attr(s,s):t.removeAttr(s),r(e,n.checkedClass,a)}function u(e,t,n){r(e,n.disabledClass,t.is(":disabled"))}function o(e,t,n){switch(n){case"after":return e.after(t),e.next();case"before":return e.before(t),e.prev();case"wrap":return e.wrap(t),e.parent()}return null}function c(t,s,a){var i,r,l;return a||(a={}),a=e.extend({bind:{},divClass:null,divWrap:"wrap",spanClass:null,spanHtml:null,spanWrap:"wrap"},a),i=e("<div />"),r=e("<span />"),s.autoHide&&t.is(":hidden")&&"none"===t.css("display")&&i.hide(),a.divClass&&i.addClass(a.divClass),s.wrapperClass&&i.addClass(s.wrapperClass),a.spanClass&&r.addClass(a.spanClass),l=n(t,"id"),s.useID&&l&&n(i,"id",s.idPrefix+"-"+l),a.spanHtml&&r.html(a.spanHtml),i=o(t,i,a.divWrap),r=o(t,r,a.spanWrap),u(i,t,s),{div:i,span:r}}function d(t,n){var s;return n.wrapperClass?(s=e("<span />").addClass(n.wrapperClass),s=o(t,s,"wrap")):null}function f(){var t,n,s,a;return a="rgb(120,2,153)",n=e('<div style="width:0;height:0;color:'+a+'">'),e("body").append(n),s=n.get(0),t=window.getComputedStyle?window.getComputedStyle(s,"").color:(s.currentStyle||s.style||{}).color,n.remove(),t.replace(/ /g,"")!==a}function p(t){return t?e("<span />").text(t).html():""}function m(){return navigator.cpuClass&&!navigator.product}function v(){return window.XMLHttpRequest!==void 0?!0:!1}function h(e){var t;return e[0].multiple?!0:(t=n(e,"size"),!t||1>=t?!1:!0)}function C(){return!1}function w(e,t){var n="none";s(e,t,{"selectstart dragstart mousedown":C}),e.css({MozUserSelect:n,msUserSelect:n,webkitUserSelect:n,userSelect:n})}function b(e,t,n){var s=e.val();""===s?s=n.fileDefaultHtml:(s=s.split(/[\/\\]+/),s=s[s.length-1]),t.text(s)}function y(e,t,n){var s,a;for(s=[],e.each(function(){var e;for(e in t)Object.prototype.hasOwnProperty.call(t,e)&&(s.push({el:this,name:e,old:this.style[e]}),this.style[e]=t[e])}),n();s.length;)a=s.pop(),a.el.style[a.name]=a.old}function g(e,t){var n;n=e.parents(),n.push(e[0]),n=n.not(":visible"),y(n,{visibility:"hidden",display:"block",position:"absolute"},t)}function k(e,t){return function(){e.unwrap().unwrap().unbind(t.eventNamespace)}}var H=!0,x=!1,A=[{match:function(e){return e.is("a, button, :submit, :reset, input[type='button']")},apply:function(e,t){var r,l,o,d,f;return l=t.submitDefaultHtml,e.is(":reset")&&(l=t.resetDefaultHtml),d=e.is("a, button")?function(){return e.html()||l}:function(){return p(n(e,"value"))||l},o=c(e,t,{divClass:t.buttonClass,spanHtml:d()}),r=o.div,a(e,r,t),f=!1,s(r,t,{"click touchend":function(){var t,s,a,i;f||e.is(":disabled")||(f=!0,e[0].dispatchEvent?(t=document.createEvent("MouseEvents"),t.initEvent("click",!0,!0),s=e[0].dispatchEvent(t),e.is("a")&&s&&(a=n(e,"target"),i=n(e,"href"),a&&"_self"!==a?window.open(i,a):document.location.href=i)):e.click(),f=!1)}}),w(r,t),{remove:function(){return r.after(e),r.remove(),e.unbind(t.eventNamespace),e},update:function(){i(r,t),u(r,e,t),e.detach(),o.span.html(d()).append(e)}}}},{match:function(e){return e.is(":checkbox")},apply:function(e,t){var n,r,o;return n=c(e,t,{divClass:t.checkboxClass}),r=n.div,o=n.span,a(e,r,t),s(e,t,{"click touchend":function(){l(o,e,t)}}),l(o,e,t),{remove:k(e,t),update:function(){i(r,t),o.removeClass(t.checkedClass),l(o,e,t),u(r,e,t)}}}},{match:function(e){return e.is(":file")},apply:function(t,r){function l(){b(t,p,r)}var d,f,p,v;return d=c(t,r,{divClass:r.fileClass,spanClass:r.fileButtonClass,spanHtml:r.fileButtonHtml,spanWrap:"after"}),f=d.div,v=d.span,p=e("<span />").html(r.fileDefaultHtml),p.addClass(r.filenameClass),p=o(t,p,"after"),n(t,"size")||n(t,"size",f.width()/10),a(t,f,r),l(),m()?s(t,r,{click:function(){t.trigger("change"),setTimeout(l,0)}}):s(t,r,{change:l}),w(p,r),w(v,r),{remove:function(){return p.remove(),v.remove(),t.unwrap().unbind(r.eventNamespace)},update:function(){i(f,r),b(t,p,r),u(f,t,r)}}}},{match:function(e){if(e.is("input")){var t=(" "+n(e,"type")+" ").toLowerCase(),s=" color date datetime datetime-local email month number password search tel text time url week ";return s.indexOf(t)>=0}return!1},apply:function(e,t){var s,i;return s=n(e,"type"),e.addClass(t.inputClass),i=d(e,t),a(e,e,t),t.inputAddTypeAsClass&&e.addClass(s),{remove:function(){e.removeClass(t.inputClass),t.inputAddTypeAsClass&&e.removeClass(s),i&&e.unwrap()},update:C}}},{match:function(e){return e.is(":radio")},apply:function(t,r){var o,d,f;return o=c(t,r,{divClass:r.radioClass}),d=o.div,f=o.span,a(t,d,r),s(t,r,{"click touchend":function(){e.uniform.update(e(':radio[name="'+n(t,"name")+'"]'))}}),l(f,t,r),{remove:k(t,r),update:function(){i(d,r),l(f,t,r),u(d,t,r)}}}},{match:function(e){return e.is("select")&&!h(e)?!0:!1},apply:function(t,n){var r,l,o,d;return n.selectAutoWidth&&g(t,function(){d=t.width()}),r=c(t,n,{divClass:n.selectClass,spanHtml:(t.find(":selected:first")||t.find("option:first")).html(),spanWrap:"before"}),l=r.div,o=r.span,n.selectAutoWidth?g(t,function(){y(e([o[0],l[0]]),{display:"block"},function(){var e;e=o.outerWidth()-o.width(),l.width(d+e),o.width(d)})}):l.addClass("fixedWidth"),a(t,l,n),s(t,n,{change:function(){o.html(t.find(":selected").html()),l.removeClass(n.activeClass)},"click touchend":function(){var e=t.find(":selected").html();o.html()!==e&&t.trigger("change")},keyup:function(){o.html(t.find(":selected").html())}}),w(o,n),{remove:function(){return o.remove(),t.unwrap().unbind(n.eventNamespace),t},update:function(){n.selectAutoWidth?(e.uniform.restore(t),t.uniform(n)):(i(l,n),o.html(t.find(":selected").html()),u(l,t,n))}}}},{match:function(e){return e.is("select")&&h(e)?!0:!1},apply:function(e,t){var n;return e.addClass(t.selectMultiClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.selectMultiClass),n&&e.unwrap()},update:C}}},{match:function(e){return e.is("textarea")},apply:function(e,t){var n;return e.addClass(t.textareaClass),n=d(e,t),a(e,e,t),{remove:function(){e.removeClass(t.textareaClass),n&&e.unwrap()},update:C}}}];m()&&!v()&&(H=!1),e.uniform={defaults:{activeClass:"active",autoHide:!0,buttonClass:"button",checkboxClass:"checker",checkedClass:"checked",disabledClass:"disabled",eventNamespace:".uniform",fileButtonClass:"action",fileButtonHtml:"Choose File",fileClass:"uploader",fileDefaultHtml:"No file selected",filenameClass:"filename",focusClass:"focus",hoverClass:"hover",idPrefix:"uniform",inputAddTypeAsClass:!0,inputClass:"uniform-input",radioClass:"radio",resetDefaultHtml:"Reset",resetSelector:!1,selectAutoWidth:!0,selectClass:"selector",selectMultiClass:"uniform-multiselect",submitDefaultHtml:"Submit",textareaClass:"uniform",useID:!0,wrapperClass:null},elements:[]},e.fn.uniform=function(t){var n=this;return t=e.extend({},e.uniform.defaults,t),x||(x=!0,f()&&(H=!1)),H?(t.resetSelector&&e(t.resetSelector).mouseup(function(){window.setTimeout(function(){e.uniform.update(n)},10)}),this.each(function(){var n,s,a,i=e(this);if(i.data("uniformed"))return e.uniform.update(i),void 0;for(n=0;A.length>n;n+=1)if(s=A[n],s.match(i,t))return a=s.apply(i,t),i.data("uniformed",a),e.uniform.elements.push(i.get(0)),void 0})):this},e.uniform.restore=e.fn.uniform.restore=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n,s=e(this);n=s.data("uniformed"),n&&(n.remove(),t=e.inArray(this,e.uniform.elements),t>=0&&e.uniform.elements.splice(t,1),s.removeData("uniformed"))})},e.uniform.update=e.fn.uniform.update=function(n){n===t&&(n=e.uniform.elements),e(n).each(function(){var t,n=e(this);t=n.data("uniformed"),t&&t.update(n,t.options)})}})(jQuery);

/*
Slider
*/

(function(e,t,n){e.fn.responsiveSlides=function(r){var s=e.extend({auto:true,speed:500,timeout:4e3,pager:false,nav:false,random:false,pause:false,pauseControls:true,prevText:"Previous",nextText:"Next",maxwidth:"",navContainer:"",manualControls:"",namespace:"rslides",before:e.noop,after:e.noop},r);return this.each(function(){n++;var o=e(this),u,a,f,l,c,h,p=0,d=o.children(),v=d.size(),m=parseFloat(s.speed),g=parseFloat(s.timeout),y=parseFloat(s.maxwidth),b=s.namespace,w=b+n,E=b+"_nav "+w+"_nav",S=b+"_here",x=w+"_on",T=w+"_s",N=e("<ul class='"+b+"_tabs "+w+"_tabs' />"),C={"float":"left",position:"relative",opacity:1,zIndex:2},k={"float":"none",position:"absolute",opacity:0,zIndex:1},L=function(){var e=document.body||document.documentElement;var t=e.style;var n="transition";if(typeof t[n]==="string"){return true}u=["Moz","Webkit","Khtml","O","ms"];n=n.charAt(0).toUpperCase()+n.substr(1);var r;for(r=0;r<u.length;r++){if(typeof t[u[r]+n]==="string"){return true}}return false}(),A=function(t){s.before(t);if(L){d.removeClass(x).css(k).eq(t).addClass(x).css(C);p=t;setTimeout(function(){s.after(t)},m)}else{d.stop().fadeOut(m,function(){e(this).removeClass(x).css(k).css("opacity",1)}).eq(t).fadeIn(m,function(){e(this).addClass(x).css(C);s.after(t);p=t})}};if(s.random){d.sort(function(){return Math.round(Math.random())-.5});o.empty().append(d)}d.each(function(e){this.id=T+e});o.addClass(b+" "+w);if(r&&r.maxwidth){o.css("max-width",y)}d.hide().css(k).eq(0).addClass(x).css(C).show();if(L){d.show().css({"-webkit-transition":"opacity "+m+"ms ease-in-out","-moz-transition":"opacity "+m+"ms ease-in-out","-o-transition":"opacity "+m+"ms ease-in-out",transition:"opacity "+m+"ms ease-in-out"})}if(d.size()>1){if(g<m+100){return}if(s.pager&&!s.manualControls){var O=[];d.each(function(e){var t=e+1;O+="<li>"+"<a href='#' class='"+T+t+"'>"+t+"</a>"+"</li>"});N.append(O);if(r.navContainer){e(s.navContainer).append(N)}else{o.after(N)}}if(s.manualControls){N=e(s.manualControls);N.addClass(b+"_tabs "+w+"_tabs")}if(s.pager||s.manualControls){N.find("li").each(function(t){e(this).addClass(T+(t+1))})}if(s.pager||s.manualControls){h=N.find("a");a=function(e){h.closest("li").removeClass(S).eq(e).addClass(S)}}if(s.auto){f=function(){c=setInterval(function(){d.stop(true,true);var e=p+1<v?p+1:0;if(s.pager||s.manualControls){a(e)}A(e)},g)};f()}l=function(){if(s.auto){clearInterval(c);f()}};if(s.pause){o.hover(function(){clearInterval(c)},function(){l()})}if(s.pager||s.manualControls){h.bind("click",function(t){t.preventDefault();if(!s.pauseControls){l()}var n=h.index(this);if(p===n||e("."+x).queue("fx").length){return}a(n);A(n)}).eq(0).closest("li").addClass(S);if(s.pauseControls){h.hover(function(){clearInterval(c)},function(){l()})}}if(s.nav){var M="<a href='#' class='"+E+" prev'>"+s.prevText+"</a>"+"<a href='#' class='"+E+" next'>"+s.nextText+"</a>";if(r.navContainer){e(s.navContainer).append(M)}else{o.after(M)}var _=e("."+w+"_nav"),D=_.filter(".prev");_.bind("click",function(t){t.preventDefault();var n=e("."+x);if(n.queue("fx").length){return}var r=d.index(n),i=r-1,o=r+1<v?p+1:0;A(e(this)[0]===D[0]?i:o);if(s.pager||s.manualControls){a(e(this)[0]===D[0]?i:o)}if(!s.pauseControls){l()}});if(s.pauseControls){_.hover(function(){clearInterval(c)},function(){l()})}}}if(typeof document.body.style.maxWidth==="undefined"&&r.maxwidth){var P=function(){o.css("width","100%");if(o.width()>y){o.css("width",y)}};P();e(t).bind("resize",function(){P()})}})}})(jQuery,this,0);

/*
Kontrola wielkosci tekstu
*/
(function(){function v(){var e=false;if("localStorage"in window){try{window.localStorage.setItem("_tmptest","tmpval");e=true;window.localStorage.removeItem("_tmptest")}catch(t){}}if(e){try{if(window.localStorage){i=window.localStorage;u="localStorage";l=i.jStorage_update}}catch(n){}}else if("globalStorage"in window){try{if(window.globalStorage){if(window.location.hostname=="localhost"){i=window.globalStorage["localhost.localdomain"]}else{i=window.globalStorage[window.location.hostname]}u="globalStorage";l=i.jStorage_update}}catch(r){}}else{s=document.createElement("link");if(s.addBehavior){s.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(s);try{s.load("jStorage")}catch(o){s.setAttribute("jStorage","{}");s.save("jStorage");s.load("jStorage")}var a="{}";try{a=s.getAttribute("jStorage")}catch(f){}try{l=s.getAttribute("jStorage_update")}catch(c){}i.jStorage=a;u="userDataBehavior"}else{s=null;return}}S();N();g();C();if("addEventListener"in window){window.addEventListener("pageshow",function(e){if(e.persisted){y()}},false)}}function m(){var e="{}";if(u=="userDataBehavior"){s.load("jStorage");try{e=s.getAttribute("jStorage")}catch(t){}try{l=s.getAttribute("jStorage_update")}catch(n){}i.jStorage=e}S();N();C()}function g(){if(u=="localStorage"||u=="globalStorage"){if("addEventListener"in window){window.addEventListener("storage",y,false)}else{document.attachEvent("onstorage",y)}}else if(u=="userDataBehavior"){setInterval(y,1e3)}}function y(){var e;clearTimeout(f);f=setTimeout(function(){if(u=="localStorage"||u=="globalStorage"){e=i.jStorage_update}else if(u=="userDataBehavior"){s.load("jStorage");try{e=s.getAttribute("jStorage_update")}catch(t){}}if(e&&e!=l){l=e;b()}},25)}function b(){var e=n.parse(n.stringify(r.__jstorage_meta.CRC32)),t;m();t=n.parse(n.stringify(r.__jstorage_meta.CRC32));var i,s=[],o=[];for(i in e){if(e.hasOwnProperty(i)){if(!t[i]){o.push(i);continue}if(e[i]!=t[i]&&String(e[i]).substr(0,2)=="2."){s.push(i)}}}for(i in t){if(t.hasOwnProperty(i)){if(!e[i]){s.push(i)}}}w(s,"updated");w(o,"deleted")}function w(e,t){e=[].concat(e||[]);if(t=="flushed"){e=[];for(var n in a){if(a.hasOwnProperty(n)){e.push(n)}}t="deleted"}for(var r=0,i=e.length;r<i;r++){if(a[e[r]]){for(var s=0,o=a[e[r]].length;s<o;s++){a[e[r]][s](e[r],t)}}if(a["*"]){for(var s=0,o=a["*"].length;s<o;s++){a["*"][s](e[r],t)}}}}function E(){var e=(+(new Date)).toString();if(u=="localStorage"||u=="globalStorage"){try{i.jStorage_update=e}catch(t){u=false}}else if(u=="userDataBehavior"){s.setAttribute("jStorage_update",e);s.save("jStorage")}y()}function S(){if(i.jStorage){try{r=n.parse(String(i.jStorage))}catch(e){i.jStorage="{}"}}else{i.jStorage="{}"}o=i.jStorage?String(i.jStorage).length:0;if(!r.__jstorage_meta){r.__jstorage_meta={}}if(!r.__jstorage_meta.CRC32){r.__jstorage_meta.CRC32={}}}function x(){L();try{i.jStorage=n.stringify(r);if(s){s.setAttribute("jStorage",i.jStorage);s.save("jStorage")}o=i.jStorage?String(i.jStorage).length:0}catch(e){}}function T(e){if(!e||typeof e!="string"&&typeof e!="number"){throw new TypeError("Key name must be string or numeric")}if(e=="__jstorage_meta"){throw new TypeError("Reserved key name")}return true}function N(){var e,t,n,i,s=Infinity,o=false,u=[];clearTimeout(p);if(!r.__jstorage_meta||typeof r.__jstorage_meta.TTL!="object"){return}e=+(new Date);n=r.__jstorage_meta.TTL;i=r.__jstorage_meta.CRC32;for(t in n){if(n.hasOwnProperty(t)){if(n[t]<=e){delete n[t];delete i[t];delete r[t];o=true;u.push(t)}else if(n[t]<s){s=n[t]}}}if(s!=Infinity){p=setTimeout(N,s-e)}if(o){x();E();w(u,"deleted")}}function C(){var e,t;if(!r.__jstorage_meta.PubSub){return}var n,i=h;for(e=t=r.__jstorage_meta.PubSub.length-1;e>=0;e--){n=r.__jstorage_meta.PubSub[e];if(n[0]>h){i=n[0];k(n[1],n[2])}}h=i}function k(e,t){if(c[e]){for(var r=0,i=c[e].length;r<i;r++){try{c[e][r](e,n.parse(n.stringify(t)))}catch(s){}}}}function L(){if(!r.__jstorage_meta.PubSub){return}var e=+(new Date)-2e3;for(var t=0,n=r.__jstorage_meta.PubSub.length;t<n;t++){if(r.__jstorage_meta.PubSub[t][0]<=e){r.__jstorage_meta.PubSub.splice(t,r.__jstorage_meta.PubSub.length-t);break}}if(!r.__jstorage_meta.PubSub.length){delete r.__jstorage_meta.PubSub}}function A(e,t){if(!r.__jstorage_meta){r.__jstorage_meta={}}if(!r.__jstorage_meta.PubSub){r.__jstorage_meta.PubSub=[]}r.__jstorage_meta.PubSub.unshift([+(new Date),e,t]);x();E()}function O(e,t){var n=e.length,r=t^n,i=0,s;while(n>=4){s=e.charCodeAt(i)&255|(e.charCodeAt(++i)&255)<<8|(e.charCodeAt(++i)&255)<<16|(e.charCodeAt(++i)&255)<<24;s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16);s^=s>>>24;s=(s&65535)*1540483477+(((s>>>16)*1540483477&65535)<<16);r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)^s;n-=4;++i}switch(n){case 3:r^=(e.charCodeAt(i+2)&255)<<16;case 2:r^=(e.charCodeAt(i+1)&255)<<8;case 1:r^=e.charCodeAt(i)&255;r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16)}r^=r>>>13;r=(r&65535)*1540483477+(((r>>>16)*1540483477&65535)<<16);r^=r>>>15;return r>>>0}var e="0.4.7",t=window.jQuery||window.$||(window.$={}),n={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(e){return String(e).evalJSON()}||t.parseJSON||t.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||t.toJSON};if(!("parse"in n)||!("stringify"in n)){throw new Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page")}var r={__jstorage_meta:{CRC32:{}}},i={jStorage:"{}"},s=null,o=0,u=false,a={},f=false,l=0,c={},h=+(new Date),p,d={isXML:function(e){var t=(e?e.ownerDocument||e:0).documentElement;return t?t.nodeName!=="HTML":false},encode:function(e){if(!this.isXML(e)){return false}try{return(new XMLSerializer).serializeToString(e)}catch(t){try{return e.xml}catch(n){}}return false},decode:function(e){var t="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(e){var t=new ActiveXObject("Microsoft.XMLDOM");t.async="false";t.loadXML(e);return t},n;if(!t){return false}n=t.call("DOMParser"in window&&new DOMParser||window,e,"text/xml");return this.isXML(n)?n:false}};t.jStorage={version:e,set:function(e,t,i){T(e);i=i||{};if(typeof t=="undefined"){this.deleteKey(e);return t}if(d.isXML(t)){t={_is_xml:true,xml:d.encode(t)}}else if(typeof t=="function"){return undefined}else if(t&&typeof t=="object"){t=n.parse(n.stringify(t))}r[e]=t;r.__jstorage_meta.CRC32[e]="2."+O(n.stringify(t),2538058380);this.setTTL(e,i.TTL||0);w(e,"updated");return t},get:function(e,t){T(e);if(e in r){if(r[e]&&typeof r[e]=="object"&&r[e]._is_xml){return d.decode(r[e].xml)}else{return r[e]}}return typeof t=="undefined"?null:t},deleteKey:function(e){T(e);if(e in r){delete r[e];if(typeof r.__jstorage_meta.TTL=="object"&&e in r.__jstorage_meta.TTL){delete r.__jstorage_meta.TTL[e]}delete r.__jstorage_meta.CRC32[e];x();E();w(e,"deleted");return true}return false},setTTL:function(e,t){var n=+(new Date);T(e);t=Number(t)||0;if(e in r){if(!r.__jstorage_meta.TTL){r.__jstorage_meta.TTL={}}if(t>0){r.__jstorage_meta.TTL[e]=n+t}else{delete r.__jstorage_meta.TTL[e]}x();N();E();return true}return false},getTTL:function(e){var t=+(new Date),n;T(e);if(e in r&&r.__jstorage_meta.TTL&&r.__jstorage_meta.TTL[e]){n=r.__jstorage_meta.TTL[e]-t;return n||0}return 0},flush:function(){r={__jstorage_meta:{CRC32:{}}};x();E();w(null,"flushed");return true},storageObj:function(){function e(){}e.prototype=r;return new e},index:function(){var e=[],t;for(t in r){if(r.hasOwnProperty(t)&&t!="__jstorage_meta"){e.push(t)}}return e},storageSize:function(){return o},currentBackend:function(){return u},storageAvailable:function(){return!!u},listenKeyChange:function(e,t){T(e);if(!a[e]){a[e]=[]}a[e].push(t)},stopListening:function(e,t){T(e);if(!a[e]){return}if(!t){delete a[e];return}for(var n=a[e].length-1;n>=0;n--){if(a[e][n]==t){a[e].splice(n,1)}}},subscribe:function(e,t){e=(e||"").toString();if(!e){throw new TypeError("Channel not defined")}if(!c[e]){c[e]=[]}c[e].push(t)},publish:function(e,t){e=(e||"").toString();if(!e){throw new TypeError("Channel not defined")}A(e,t)},reInit:function(){m()},noConflict:function(e){delete window.$.jStorage;if(e){window.jStorage=this}return this}};v()})();


(function(e){return e.fn.jfontsize=function(t){var n,r,i,s,o;n=e(this);s={btnMinusClasseId:"#jfontsize-minus",btnDefaultClasseId:"#jfontsize-default",btnPlusClasseId: "#jfontsize-plus",btnMinusMaxHits: 10,btnPlusMaxHits:10,sizeChange:1};if(t){t=e.extend(s,t)}o=function(){return e.jStorage.set("jfontsize",i)};r=function(){return n.each(function(n) {var r,s1,s2;if(!(e(this).data("initial_size")!=null)){r=e(this).css("font-size");r=parseInt(r.replace("px",""));e(this).data("initial_size",r)}if(!(e(this).data("initial_line")!=null)) {r=e(this).css("line-height");r=parseInt(r.replace("px",""));e(this).data("initial_line",r)}s1=e(this).data("initial_size")+i*t.sizeChange;s2=e(this).data("initial_line")+i*t.sizeChange;return e(this).css("font-size",s1+"px").css("line-height",s2+"px");})};e(t.btnMinusClasseId+", "+t.btnDefaultClasseId+", "+t.btnPlusClasseId).removeAttr("href");e(t.btnMinusClasseId+", "+t.btnDefaultClasseId+", "+t.btnPlusClasseId).css("cursor","pointer");i=e.jStorage.get("jfontsize",0);if(i===-t.btnMinusMaxHits) {e(t.btnMinusClasseId).addClass("jfontsize-disabled")}if(i===t.btnPlusMaxHits) {e(t.btnPlusClasseId).addClass("jfontsize-disabled")}r();e(t.btnMinusClasseId).click(function() {e(t.btnPlusClasseId).removeClass("jfontsize-disabled");if(i>-t.btnMinusMaxHits) {i--;if(i===-t.btnMinusMaxHits) {e(t.btnMinusClasseId).addClass("jfontsize-disabled")}r();return o()}});e(t.btnDefaultClasseId).click(function() {e(t.btnMinusClasseId).removeClass("jfontsize-disabled");e(t.btnPlusClasseId).removeClass("jfontsize-disabled");i=0;n.each(function(t) {return e(this).css("font-size",e(this).data("initial_size")+"px").css("line-height",e(this).data("initial_line")+"px")});return o()});return e(t.btnPlusClasseId).click(function() {e(t.btnMinusClasseId).removeClass("jfontsize-disabled");if(i<t.btnPlusMaxHits) {i++;if(i===t.btnPlusMaxHits) {e(t.btnPlusClasseId).addClass("jfontsize-disabled")}r();return o()}})}})(jQuery);

// Cookie
//(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else{e(jQuery)}})(function(e){function n(e){return u.raw?e:encodeURIComponent(e)}function r(e){return u.raw?e:decodeURIComponent(e)}function i(e){return n(u.json?JSON.stringify(e):String(e))}function s(e){if(e.indexOf('"')===0){e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")}try{e=decodeURIComponent(e.replace(t," "));return u.json?JSON.parse(e):e}catch(n){}}function o(t,n){var r=u.raw?t:s(t);return e.isFunction(n)?n(r):r}var t=/\+/g;var u=e.cookie=function(t,s,a){if(s!==undefined&&!e.isFunction(s)){a=e.extend({},u.defaults,a);if(typeof a.expires==="number"){var f=a.expires,l=a.expires=new Date;l.setTime(+l+f*864e5)}return document.cookie=[n(t),"=",i(s),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}var c=t?undefined:{};var h=document.cookie?document.cookie.split("; "):[];for(var p=0,d=h.length;p<d;p++){var v=h[p].split("=");var m=r(v.shift());var g=v.join("=");if(t&&t===m){c=o(g,s);break}if(!t&&(g=o(g))!==undefined){c[m]=g}}return c};u.defaults={};e.removeCookie=function(t,n){if(e.cookie(t)===undefined){return false}e.cookie(t,"",e.extend({},n,{expires:-1}));return!e.cookie(t)}});

// Informacje o ciasteczkach
//function getCookie(c_name){var i,x,y,ARRcookies=document.cookie.split(";");for(i=0;i<ARRcookies.length;i++){x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);x=x.replace(/^\s+|\s+$/g,"");if(x==c_name){return unescape(y)}}};

/*
blockUI
 */
!function(){"use strict";function e(e){function t(t,n){var s,h,k=t==window,y=n&&void 0!==n.message?n.message:void 0;if(n=e.extend({},e.blockUI.defaults,n||{}),!n.ignoreIfBlocked||!e(t).data("blockUI.isBlocked")){if(n.overlayCSS=e.extend({},e.blockUI.defaults.overlayCSS,n.overlayCSS||{}),s=e.extend({},e.blockUI.defaults.css,n.css||{}),n.onOverlayClick&&(n.overlayCSS.cursor="pointer"),h=e.extend({},e.blockUI.defaults.themedCSS,n.themedCSS||{}),y=void 0===y?n.message:y,k&&p&&o(window,{fadeOut:0}),y&&"string"!=typeof y&&(y.parentNode||y.jquery)){var m=y.jquery?y[0]:y,v={};e(t).data("blockUI.history",v),v.el=m,v.parent=m.parentNode,v.display=m.style.display,v.position=m.style.position,v.parent&&v.parent.removeChild(m)}e(t).data("blockUI.onUnblock",n.onUnblock);var g,I,w,U,x=n.baseZ;g=e(r||n.forceIframe?'<iframe class="blockUI" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="'+n.iframeSrc+'"></iframe>':'<div class="blockUI" style="display:none"></div>'),I=e(n.theme?'<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:'+x++ +';display:none"></div>':'<div class="blockUI blockOverlay" style="z-index:'+x++ +';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),n.theme&&k?(U='<div class="blockUI '+n.blockMsgClass+' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:fixed">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):n.theme?(U='<div class="blockUI '+n.blockMsgClass+' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:'+(x+10)+';display:none;position:absolute">',n.title&&(U+='<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">'+(n.title||"&nbsp;")+"</div>"),U+='<div class="ui-widget-content ui-dialog-content"></div>',U+="</div>"):U=k?'<div class="blockUI '+n.blockMsgClass+' blockPage" style="z-index:'+(x+10)+';display:none;position:fixed"></div>':'<div class="blockUI '+n.blockMsgClass+' blockElement" style="z-index:'+(x+10)+';display:none;position:absolute"></div>',w=e(U),y&&(n.theme?(w.css(h),w.addClass("ui-widget-content")):w.css(s)),n.theme||I.css(n.overlayCSS),I.css("position",k?"fixed":"absolute"),(r||n.forceIframe)&&g.css("opacity",0);var C=[g,I,w],S=e(k?"body":t);e.each(C,function(){this.appendTo(S)}),n.theme&&n.draggable&&e.fn.draggable&&w.draggable({handle:".ui-dialog-titlebar",cancel:"li"});var O=f&&(!e.support.boxModel||e("object,embed",k?null:t).length>0);if(u||O){if(k&&n.allowBodyStretch&&e.support.boxModel&&e("html,body").css("height","100%"),(u||!e.support.boxModel)&&!k)var E=d(t,"borderTopWidth"),T=d(t,"borderLeftWidth"),M=E?"(0 - "+E+")":0,B=T?"(0 - "+T+")":0;e.each(C,function(e,t){var o=t[0].style;if(o.position="absolute",2>e)k?o.setExpression("height","Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:"+n.quirksmodeOffsetHack+') + "px"'):o.setExpression("height",'this.parentNode.offsetHeight + "px"'),k?o.setExpression("width",'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"'):o.setExpression("width",'this.parentNode.offsetWidth + "px"'),B&&o.setExpression("left",B),M&&o.setExpression("top",M);else if(n.centerY)k&&o.setExpression("top",'(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),o.marginTop=0;else if(!n.centerY&&k){var i=n.css&&n.css.top?parseInt(n.css.top,10):0,s="((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "+i+') + "px"';o.setExpression("top",s)}})}if(y&&(n.theme?w.find(".ui-widget-content").append(y):w.append(y),(y.jquery||y.nodeType)&&e(y).show()),(r||n.forceIframe)&&n.showOverlay&&g.show(),n.fadeIn){var j=n.onBlock?n.onBlock:c,H=n.showOverlay&&!y?j:c,z=y?j:c;n.showOverlay&&I._fadeIn(n.fadeIn,H),y&&w._fadeIn(n.fadeIn,z)}else n.showOverlay&&I.show(),y&&w.show(),n.onBlock&&n.onBlock();if(i(1,t,n),k?(p=w[0],b=e(n.focusableElements,p),n.focusInput&&setTimeout(l,20)):a(w[0],n.centerX,n.centerY),n.timeout){var W=setTimeout(function(){k?e.unblockUI(n):e(t).unblock(n)},n.timeout);e(t).data("blockUI.timeout",W)}}}function o(t,o){var s,l=t==window,a=e(t),d=a.data("blockUI.history"),c=a.data("blockUI.timeout");c&&(clearTimeout(c),a.removeData("blockUI.timeout")),o=e.extend({},e.blockUI.defaults,o||{}),i(0,t,o),null===o.onUnblock&&(o.onUnblock=a.data("blockUI.onUnblock"),a.removeData("blockUI.onUnblock"));var r;r=l?e("body").children().filter(".blockUI").add("body > .blockUI"):a.find(">.blockUI"),o.cursorReset&&(r.length>1&&(r[1].style.cursor=o.cursorReset),r.length>2&&(r[2].style.cursor=o.cursorReset)),l&&(p=b=null),o.fadeOut?(s=r.length,r.stop().fadeOut(o.fadeOut,function(){0===--s&&n(r,d,o,t)})):n(r,d,o,t)}function n(t,o,n,i){var s=e(i);if(!s.data("blockUI.isBlocked")){t.each(function(e,t){this.parentNode&&this.parentNode.removeChild(this)}),o&&o.el&&(o.el.style.display=o.display,o.el.style.position=o.position,o.parent&&o.parent.appendChild(o.el),s.removeData("blockUI.history")),s.data("blockUI.static")&&s.css("position","static"),"function"==typeof n.onUnblock&&n.onUnblock(i,n);var l=e(document.body),a=l.width(),d=l[0].style.width;l.width(a-1).width(a),l[0].style.width=d}}function i(t,o,n){var i=o==window,l=e(o);if((t||(!i||p)&&(i||l.data("blockUI.isBlocked")))&&(l.data("blockUI.isBlocked",t),i&&n.bindEvents&&(!t||n.showOverlay))){var a="mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t?e(document).bind(a,n,s):e(document).unbind(a,s)}}function s(t){if("keydown"===t.type&&t.keyCode&&9==t.keyCode&&p&&t.data.constrainTabKey){var o=b,n=!t.shiftKey&&t.target===o[o.length-1],i=t.shiftKey&&t.target===o[0];if(n||i)return setTimeout(function(){l(i)},10),!1}var s=t.data,a=e(t.target);return a.hasClass("blockOverlay")&&s.onOverlayClick&&s.onOverlayClick(),a.parents("div."+s.blockMsgClass).length>0?!0:0===a.parents().children().filter("div.blockUI").length}function l(e){if(b){var t=b[e===!0?b.length-1:0];t&&t.focus()}}function a(e,t,o){var n=e.parentNode,i=e.style,s=(n.offsetWidth-e.offsetWidth)/2-d(n,"borderLeftWidth"),l=(n.offsetHeight-e.offsetHeight)/2-d(n,"borderTopWidth");t&&(i.left=s>0?s+"px":"0"),o&&(i.top=l>0?l+"px":"0")}function d(t,o){return parseInt(e.css(t,o),10)||0}e.fn._fadeIn=e.fn.fadeIn;var c=e.noop||function(){},r=/MSIE/.test(navigator.userAgent),u=/MSIE 6.0/.test(navigator.userAgent)&&!/MSIE 8.0/.test(navigator.userAgent),f=(document.documentMode||0,e.isFunction(document.createElement("div").style.setExpression));e.blockUI=function(e){t(window,e)},e.unblockUI=function(e){o(window,e)},e.growlUI=function(t,o,n,i){var s=e('<div class="growlUI"></div>');t&&s.append("<h1>"+t+"</h1>"),o&&s.append("<h2>"+o+"</h2>"),void 0===n&&(n=3e3);var l=function(t){t=t||{},e.blockUI({message:s,fadeIn:"undefined"!=typeof t.fadeIn?t.fadeIn:700,fadeOut:"undefined"!=typeof t.fadeOut?t.fadeOut:1e3,timeout:"undefined"!=typeof t.timeout?t.timeout:n,centerY:!1,showOverlay:!1,onUnblock:i,css:e.blockUI.defaults.growlCSS})};l();s.css("opacity");s.mouseover(function(){l({fadeIn:0,timeout:3e4});var t=e(".blockMsg");t.stop(),t.fadeTo(300,1)}).mouseout(function(){e(".blockMsg").fadeOut(1e3)})},e.fn.block=function(o){if(this[0]===window)return e.blockUI(o),this;var n=e.extend({},e.blockUI.defaults,o||{});return this.each(function(){var t=e(this);n.ignoreIfBlocked&&t.data("blockUI.isBlocked")||t.unblock({fadeOut:0})}),this.each(function(){"static"==e.css(this,"position")&&(this.style.position="relative",e(this).data("blockUI.static",!0)),this.style.zoom=1,t(this,o)})},e.fn.unblock=function(t){return this[0]===window?(e.unblockUI(t),this):this.each(function(){o(this,t)})},e.blockUI.version=2.65,e.blockUI.defaults={message:"<h1>Please wait...</h1>",title:null,draggable:!0,theme:!1,css:{padding:0,margin:0,width:"30%",top:"40%",left:"35%",textAlign:"center",color:"#000",border:"3px solid #aaa",backgroundColor:"#fff",cursor:"wait"},themedCSS:{width:"30%",top:"40%",left:"35%"},overlayCSS:{backgroundColor:"#000",opacity:.6,cursor:"wait"},cursorReset:"default",growlCSS:{width:"350px",top:"10px",left:"",right:"10px",border:"none",padding:"5px",opacity:.6,cursor:"default",color:"#fff",backgroundColor:"#000","-webkit-border-radius":"10px","-moz-border-radius":"10px","border-radius":"10px"},iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",forceIframe:!1,baseZ:1e3,centerX:!0,centerY:!0,allowBodyStretch:!0,bindEvents:!0,constrainTabKey:!0,fadeIn:200,fadeOut:400,timeout:0,showOverlay:!0,focusInput:!0,focusableElements:":input:enabled:visible",onBlock:null,onUnblock:null,onOverlayClick:null,quirksmodeOffsetHack:4,blockMsgClass:"blockMsg",ignoreIfBlocked:!1};var p=null,b=[]}"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e(jQuery)}();

if ($.cookie("p4b_style") !== undefined) {
	$("#p4bcss").attr("href",contextPath + "/css/styleKontrast.css");
}


// globalna flaga umożliwia ręczne wyłączenie zasłonki w wybranych miejscach
// dla żądań ajax, wystarczy dodać parametr "global: false,"
var zaslonkaWlaczona = true;
var pozostawZaslonke = false;

function wlaczZaslonke() {
	if (zaslonkaWlaczona && $('.blockOverlay:visible').length === 0) {
		$.blockUI({ message:null, overlayCSS:{opacity:0.25}, baseZ:1000000});
		setTimeout(wylaczZaslonke, 1000);
	}
}

function wylaczZaslonke() {
	if (zaslonkaWlaczona) {
		if (!pozostawZaslonke) {
			$.unblockUI();
		}
	}
}

$(window).bind('beforeunload', function (event) {
	pozostawZaslonke = true;
});

$(document).ready(function() {

	$("input[type='checkbox'], select").uniform({selectAutoWidth:false});
	
	$(".rslides").responsiveSlides({timeout:8000,pause:true});
	
	$("#buttonSzczegoly").click(function(e) {
		e.preventDefault();
		var div = $(this).attr('rel');
		if (div == 'szczegoly') {
			$(this).text("Ukryj");
			$(this).attr('rel', 'ukryj');
			$(".szczegoly").show();
		} else {
			$(this).text("Szczegóły");
			$(this).attr('rel', 'szczegoly');
			$(".szczegoly").hide();			
		}		
	});
	
	$(".ajaxload").click(function(e) {
		e.preventDefault();
		$(".ajaxafter").hide();
		$(".ajaxloader").fadeIn(300).delay(1800).fadeOut( 400 ).promise().done(function() {
		$(".ajaxafter").show();
		});
	});
	
	$(".ajaxload2").click(function(e) {
		e.preventDefault();
		$(".ajaxafter2").hide();
		$(".ajaxloader2").fadeIn(300).delay(1800).fadeOut( 400 ).promise().done(function() {
		$(".ajaxafter2").show();
		});
	});

	var mousebutton;

	var shiftWcisniety = false;
	var ctrlWcisniety = false;

	$(document).on("submit", "form", function (event) {
		if (!$(this).hasClass('skip') && !shiftWcisniety && !ctrlWcisniety) {
			wlaczZaslonke();
		}
	});

	$(document).on('mousedown', function (event) {
		mousebutton = event.which;
	});

	$(document).click(function (event) {
		var element = $(event.target).closest("a");
		if (element.length) {
			if (!element.hasClass('skip') && mousebutton == 1 && !element.hasClass('ui-datepicker-prev') &&
				!element.hasClass('ui-datepicker-next') && element.attr("target") != '_blank' &&
				!event.shiftKey && !event.ctrlKey) {
				wlaczZaslonke();
			}
		}
	});

	$wcisnietyElement = null;
	$(document).keydown(function (event) {
		$wcisnietyElement = $(event.target);
		if (event.keyCode == 17) {
			ctrlWcisniety = true;
		}
		if (event.keyCode == 16) {
			shiftWcisniety = true;
		}

		if (czyEnterNaLinkuJakoPrzycisk(event)) {
			$(event.target).trigger("click");
			event.preventDefault();
			event.stopPropagation();
		}
	});

	$(document).keyup(function (event) {
		if (event.keyCode == 17) {
			ctrlWcisniety = false;
		}
		if (event.keyCode == 16) {
			shiftWcisniety = false;
		}
		if ($wcisnietyElement === $(event.target) && czyEnterNaLinkuBezSkip(event)) {
			wlaczZaslonke();    //wlaczenie zaslonki on keyup bo nie dziala na FF oraz IE
		}
	});

	function czyEnterNaLinkuBezSkip(event) {
		var element = $(event.target);
		return event.keyCode === 13 && element.is("a") && !element.hasClass('skip');
	}

	function czyEnterNaLinkuJakoPrzycisk(event) {
		var element = $(event.target);
		return event.keyCode === 13 && element.is("a") && element.hasClass('clickTriggerOnEnter');
	}

	wylaczZaslonke();
});

$(function () {
	walidujKontrolkeKalendarza();
});

function walidujKontrolkeKalendarza() {
	var pattern_full = /^((((1[6-9]|[2-9]\d)\d{2})\-(0[13578]|1[02])\-(0[1-9]|[12]\d|3[01]))|(((1[6-9]|[2-9]\d)\d{2})\-(0[13456789]|1[012])\-(0[1-9]|[12]\d|30))|(((1[6-9]|[2-9]\d)\d{2})\-02\-(0[1-9]|1\d|2[0-8]))|(((1[6-9]|[2-9]\d)?(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00)|00)\-02-29))$/;
	var pattern_rokmc = /^((1[6-9]|[2-9]\d)\d{2})\-(0[1-9]|1[012])$/;
	var pattern_czas = /^([0-1]?[0-9]|[2][0-3]):([0-5][0-9])$/;

	$(':submit').each(function () {
		// flaga pozwalajaca na pominiecie walidacji (np. przycisk anuluj)
		if (!$(this).hasClass("pominWalidacje")) {
			$(this).click(function (event) {
				var error = false;
				$('#'+$(this).parents('form:first').attr('id') + ' .datepicker').each(function () {
					//walidacja tylko aktywnych pól
					if (!$(this).is('[disabled]')) {
						// czyszczę oznaczenie błędu jeżeli już zostało dodane
						$(this).parents("div:first").children("br:first").remove();
						// usuwam znacznik span z listą błędów
						$('#' + $(this).attr('id').replace(/\./g, '\\.') + '\\.errors').remove();
						// waliduję wpisaną datę z wzorcem i oznaczam błędem w przypadku niezgodności
						if ($(this).val() != '' && (
							$(this).attr("id").match(/dataBezDni/) && !$(this).val().match(pattern_rokmc)
							||
							!$(this).attr("id").match(/dataBezDni/) && !$(this).val().match(pattern_full))) {
							error = true;
							// html obiektu EM z błędem
							var errSpan = $('<br/><span id=\"' + $(this).attr('id') + '.errors\" class=\"blad\">' + $(this).val().replace("<", "&lt;").replace(">", "&gt;") + ' nie jest datą w formacie zgodnym z RRRR-MM-DD</span>');
							// wstawiam za walidowaną kontrolkę daty
							// dodaję oznaczenie błędu
							$(this).parents("div:first").append(errSpan);
						}
					}
				});
				if (error) {
					if($(this).hasClass("stopClickOnDateValidationError")) {
						event.stopImmediatePropagation();
					}
					return false;
				}
			});
		}
	});
	/*
	 pattern sprawdzono dla ponizszych dat, wszystko poza formatem YYYY-MM-DD jest nieprawidłowe
	 2012-01-01 ok
	 2012-02-29 ok
	 2013-02-29 zla
	 2012-01-32 zla
	 2012-03-32 zla
	 2016-02-29 ok
	 2015-05-31 ok
	 2015-06-31 zla
	 */
}
