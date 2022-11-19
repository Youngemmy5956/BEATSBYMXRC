const{__:__}=wp.i18n;!function(e){var t={debug:!1,logAs:"strongSlider",compat:{lazyload:{active:!1,classes:{}}},mode:"horizontal",slideSelector:"div.t-slide",infiniteLoop:!0,hideControlOnEnd:!0,speed:500,easing:null,slideMargin:10,startSlide:0,randomStart:!1,captions:!1,adaptiveHeight:!1,adaptiveHeightSpeed:500,video:!1,useCSS:!0,preloadImages:"visible",responsive:!0,slideZIndex:50,wrapperClass:"wpmslider-wrapper",stretch:!1,imagesLoaded:!0,touchEnabled:!0,swipeThreshold:50,oneToOneTouch:!0,preventDefaultSwipeX:!0,preventDefaultSwipeY:!1,ariaLive:!0,ariaHidden:!0,keyboardEnabled:!1,pager:!0,pagerType:"full",pagerShortSeparator:" / ",pagerSelector:null,buildPager:null,pagerCustom:null,controls:!0,nextText:"Next",prevText:"Prev",nextSelector:null,prevSelector:null,autoControls:!1,startText:"Start",stopText:"Stop",autoControlsCombine:!1,autoControlsSelector:null,auto:!0,pause:4e3,autoStart:!0,autoDirection:"next",stopAutoOnClick:!1,autoHover:!1,autoDelay:0,autoSlideForOnePage:!1,minSlides:1,maxSlides:1,moveSlides:0,onSliderLoad:function(){return!0},onSlideBefore:function(){return!0},onSlideAfter:function(){return!0},onSlideNext:function(){return!0},onSlidePrev:function(){return!0},onSliderResize:function(){return!0},onAutoChange:function(){return!0}};e.fn.strongSlider=function(i){if(0===this.length)return this;var n={},s=this,o=this.find(".wpmslider-content");if(!e(o).data("strongSlider")){var r=function(){if(!e(o).data("strongSlider")){n.visibilityInterval=0,n.hidden=!1;var r=s.data("slider-var"),a={};void 0!==window[r]&&(a=window[r].config),n.settings=e.extend({},t,a,i),n.debug=n.settings.debug,n.logAs=n.settings.logAs,n.debug&&console.log(n.logAs,"slider.settings",n.settings),n.children=o.children(n.settings.slideSelector),n.children.length<n.settings.minSlides&&(n.settings.minSlides=n.children.length),n.children.length<n.settings.maxSlides&&(n.settings.maxSlides=n.children.length),n.settings.randomStart&&(n.settings.startSlide=Math.floor(Math.random()*n.children.length)),n.active={index:n.settings.startSlide},c(),n.carousel&&(n.settings.preloadImages="all"),n.working=!1,n.controls={},n.interval=null,n.animProp="vertical"===n.settings.mode?"top":"left",n.usingCSS=n.settings.useCSS&&"fade"!==n.settings.mode&&function(){for(var e=document.createElement("div"),t=["WebkitPerspective","MozPerspective","OPerspective","msPerspective"],i=0;i<t.length;i++)if(void 0!==e.style[t[i]])return n.cssPrefix=t[i].replace("Perspective","").toLowerCase(),n.animProp="-"+n.cssPrefix+"-transform",!0;return!1}(),"vertical"===n.settings.mode&&(n.settings.maxSlides=n.settings.minSlides),o.data("origStyle",o.attr("style")),o.children(n.settings.slideSelector).each(function(){e(this).data("origStyle",e(this).attr("style"))}),o.getSlideCount()&&(n.settings.imagesLoaded?s.imagesLoaded(function(){l()}):l())}},a=function(){return s.is(":visible")&&"hidden"!==s.css("visibility")},l=function(){a()&&function(){if(n.settings.compat.lazyload){for(var e=!1,t=0,i=n.settings.compat.lazyload.classes.length;t<i;t++){var o=n.settings.compat.lazyload.classes[t].start,r=n.settings.compat.lazyload.classes[t].finish;o&&r?s.find("img."+o).length&&!s.find("img."+r).length&&(e=!0):o?s.find("img."+o).length&&(e=!0):r&&(s.find("img."+r).length||(e=!0))}if(e)return n.debug&&console.log(n.logAs,"lazy loading..."),!1}return n.debug&&console.log(n.logAs,"compat check complete"),!0}()?(clearInterval(n.visibilityInterval),d()):0===n.visibilityInterval&&(n.visibilityInterval=setInterval(l,4e3))},d=function(){var t=n.children.eq(n.settings.startSlide);o.wrap('<div class="'+n.settings.wrapperClass+'"><div class="wpmslider-viewport"></div></div>'),n.viewport=o.parent(),n.settings.ariaLive&&n.viewport.attr("aria-live","polite"),n.loader=e('<div class="wpmslider-loading" />'),n.viewport.prepend(n.loader),o.css({width:"horizontal"===n.settings.mode?1e3*n.children.length+215+"%":"auto",position:"relative"}),n.usingCSS&&n.settings.easing?o.css("-"+n.cssPrefix+"-transition-timing-function",n.settings.easing):n.settings.easing||(n.settings.easing="swing"),n.viewport.css({width:"100%",overflow:"hidden",position:"relative"}),n.viewport.parent().css({maxWidth:b()}),n.settings.pager||n.settings.controls||n.viewport.parent().css({margin:"0 auto"}),n.children.css({float:"horizontal"===n.settings.mode?"left":"none",listStyle:"none",position:"relative"}),g(),"horizontal"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginRight",n.settings.slideMargin),"vertical"===n.settings.mode&&n.settings.slideMargin>0&&n.children.css("marginBottom",n.settings.slideMargin),"fade"===n.settings.mode?(n.children.css({position:"absolute",zIndex:0,display:"none"}),n.children.eq(n.settings.startSlide).css({zIndex:n.settings.slideZIndex,display:"block"})):n.children.css({display:"block"}),n.controls.el=e('<div class="wpmslider-controls" />'),n.settings.captions&&L(),n.active.last=n.settings.startSlide===y()-1,n.settings.video&&o.fitVids(),"none"===n.settings.preloadImages?t=null:"all"===n.settings.preloadImages&&(t=n.children),n.settings.controls&&A(),n.settings.auto&&n.settings.autoControls&&z(),n.settings.pager&&I(),n.settings.controls&&M(),(n.settings.controls||n.settings.autoControls||n.settings.pager)&&n.viewport.after(n.controls.el),null===t||navigator.userAgent.indexOf("Firefox")?u():p(t,u)},c=function(){n.debug&&console.log(n.logAs,"setBreakpoint");var e=n.settings.breakpoints.single,t=n.settings.breakpoints.multiple;if("show_multiple"===n.settings.type)for(var i in t)if(t.hasOwnProperty(i)&&verge.viewportW()>=t[i].width){e=t[i];break}n.debug&&console.log("current breakpoint",e),n.settings.maxSlides=e.maxSlides,n.settings.moveSlides=e.moveSlides,n.settings.slideMargin=e.slideMargin,n.carousel=n.settings.minSlides>1||n.settings.maxSlides>1},g=function(){c(),n.children.css("width",C())},p=function(t,i){var n=t.find('img:not([src=""]), iframe').length,s=0;0!==n?t.find('img:not([src=""]), iframe').each(function(){e(this).one("load error",function(){++s===n&&i()}).each(function(){(this.complete||""===this.src)&&e(this).trigger("load")})}):i()},u=function(){if(n.settings.infiniteLoop&&"fade"!==n.settings.mode){var t="vertical"===n.settings.mode?n.settings.minSlides:n.settings.maxSlides,i=n.children.slice(0,t).clone(!0).addClass("wpmslider-clone"),s=n.children.slice(-t).clone(!0).addClass("wpmslider-clone");n.settings.ariaHidden&&(i.attr("aria-hidden",!0),s.attr("aria-hidden",!0)),o.append(i).prepend(s)}n.loader.remove(),"vertical"===n.settings.mode&&(n.settings.adaptiveHeight=!0),o.redrawSlider(),n.settings.onSliderLoad.call(o,n.active.index),n.initialized=!0,n.visibilityInterval=setInterval(f,500),n.settings.responsive&&v(),n.settings.auto&&n.settings.autoStart&&(y()>1||n.settings.autoSlideForOnePage)&&X(),n.settings.pager&&F(n.settings.startSlide),n.settings.controls&&Y(),n.settings.touchEnabled&&Z(),n.settings.keyboardEnabled&&e(document).trigger("keydown",R)},v=function(){window.addEventListener("resize",h,!1),window.addEventListener("orientationchange",h,!1),window.addEventListener("toggleFullContent",h,!1),window.addEventListener("blur",function(){m("blur")}),window.addEventListener("focus",function(){S("blur")})},h=_.debounce(function(){n.debug&&console.log(n.logAs,"updateLayout"),G()},250),f=function(){n.settings.auto&&(a()?S("hide"):m("hide"),verge.inViewport(o)?S("scroll"):m("scroll"))},m=function(e){n.interval&&(o.stopAuto(!0),n.autoPaused=e,n.debug&&console.log(n.logAs,"pause",e))},S=function(e){n.autoPaused===e&&(o.startAuto(!0),n.autoPaused=null,n.debug&&console.log(n.logAs,"play",e))},x=function(e){return Math.max.apply(Math,e)},w=function(){var t=0,i=e();if("vertical"===n.settings.mode||n.settings.adaptiveHeight)if(n.carousel){var s=1===n.settings.moveSlides?n.active.index:n.active.index*E();i=n.children.eq(s);for(var o=1;o<=n.settings.maxSlides-1;o++)i=s+o>=n.children.length?i.add(n.children.eq(o-1)):i.add(n.children.eq(s+o))}else i=n.children.eq(n.active.index);else i=n.children;return"vertical"===n.settings.mode?(i.each(function(i){t+=e(this).outerHeight()}),n.settings.slideMargin>0&&(t+=n.settings.slideMargin*(n.settings.minSlides-1))):t=Math.max.apply(Math,i.map(function(){return e(this).outerHeight(!1)}).get()),"border-box"===n.viewport.css("box-sizing")?t+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))+parseFloat(n.viewport.css("border-top-width"))+parseFloat(n.viewport.css("border-bottom-width")):"padding-box"===n.viewport.css("box-sizing")&&(t+=parseFloat(n.viewport.css("padding-top"))+parseFloat(n.viewport.css("padding-bottom"))),t},b=function(){return"100%"},C=function(){var e=n.viewport.width(),t=n.settings.slideMargin*(n.settings.maxSlides-1);return Math.floor((e-t)/n.settings.maxSlides)},P=function(){return n.settings.maxSlides},y=function(){var e=0,t=0,i=0;if(n.settings.moveSlides>0){if(!n.settings.infiniteLoop){for(;t<n.children.length;)++e,t=i+P(),i+=n.settings.moveSlides<=P()?n.settings.moveSlides:P();return i}e=Math.ceil(n.children.length/E())}else e=Math.ceil(n.children.length/P());return e},E=function(){return n.settings.moveSlides>0&&n.settings.moveSlides<=P()?n.settings.moveSlides:P()},T=function(t,i,s,r){var a,l;n.usingCSS?("vertical"===n.settings.mode?l="translateY("+t+"px)":"horizontal"===n.settings.mode?l="translateX("+t+"px":"none"===n.settings.mode&&(l="translateY("+t+"px)",s=0),o.css("-"+n.cssPrefix+"-transition-duration",s/1e3+"s"),"slide"===i?(o.css(n.animProp,l),0!==s?o.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd",function(t){e(t.target).is(o)&&(o.off("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),B())}):B()):"reset"===i&&o.css(n.animProp,l)):((a={})[n.animProp]=t,"slide"===i?o.animate(a,s,n.settings.easing,function(){B()}):"reset"===i&&o.css(n.animProp,t))},k=function(){for(var t="",i="",s=y(),o=0;o<s;o++)i="",n.settings.buildPager?("icons"===n.settings.buildPager&&(i=""),(e.isFunction(n.settings.buildPager)||n.settings.pagerCustom)&&(i=n.settings.buildPager(o)),n.pagerEl.addClass("wpmslider-custom-pager")):(i=o+1,n.pagerEl.addClass("wpmslider-default-pager")),t+='<div class="wpmslider-pager-item"><a href="" data-slide-index="'+o+'" class="wpmslider-pager-link">'+i+"</a></div>";n.pagerEl.html(t)},I=function(){n.settings.pagerCustom?n.pagerEl=e(n.settings.pagerCustom):(n.pagerEl=e('<div class="wpmslider-pager" />'),n.settings.pagerSelector?e(n.settings.pagerSelector).html(n.pagerEl):n.controls.el.addClass("wpmslider-has-pager").append(n.pagerEl),k()),n.pagerEl.on("click touchend","a",N)},A=function(){n.controls.prev=e('<a class="wpmslider-prev" href="/previous-slide"><span class="screen-reader-text">'+__("Previous Slide","strong-testimonials")+"</span>"+n.settings.prevText+"</a>"),n.controls.prev.on("click touchend",D),n.settings.prevSelector&&e(n.settings.prevSelector).append(n.controls.prev),n.settings.prevSelector||(n.controls.directionEl=e('<div class="wpmslider-controls-direction" />'),n.controls.directionEl.append(n.controls.prev),n.controls.el.addClass("wpmslider-has-controls-direction").append(n.controls.directionEl))},M=function(){n.controls.next=e('<a class="wpmslider-next" href="/next-slide"><span class="screen-reader-text">'+__("Next Slide","strong-testimonials")+"</span>"+n.settings.nextText+"</a>"),n.controls.next.on("click touchend",q),__("Next Slide","strong-testimonials"),n.settings.nextSelector&&e(n.settings.nextSelector).append(n.controls.next),n.settings.nextSelector||(n.controls.directionEl=e('<div class="wpmslider-controls-direction" />'),n.controls.directionEl.append(n.controls.next),n.controls.el.addClass("wpmslider-has-controls-direction").append(n.controls.directionEl))},z=function(){n.controls.start=e('<div class="wpmslider-controls-auto-item"><a class="wpmslider-start" href="">'+n.settings.startText+"</a></div>"),n.controls.stop=e('<div class="wpmslider-controls-auto-item"><a class="wpmslider-stop" href="">'+n.settings.stopText+"</a></div>"),n.controls.autoEl=e('<div class="wpmslider-controls-auto" />'),n.controls.autoEl.on("click",".wpmslider-start",H),n.controls.autoEl.on("click",".wpmslider-stop",O),n.settings.autoControlsCombine?n.controls.autoEl.append(n.controls.start):n.controls.autoEl.append(n.controls.start).append(n.controls.stop),n.settings.autoControlsSelector?e(n.settings.autoControlsSelector).html(n.controls.autoEl):n.controls.el.addClass("wpmslider-has-controls-auto").append(n.controls.autoEl),W(n.settings.autoStart?"stop":"start")},L=function(){n.children.each(function(t){var i=e(this).find("img:first").attr("title");void 0!==i&&(""+i).length&&e(this).append('<div class="wpmslider-caption"><span>'+i+"</span></div>")})},q=function(t){t.preventDefault(),t.stopPropagation(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&(n.debug&&console.log(n.logAs,"stop on navigation"),o.stopAuto()),e(".strong-view").hasClass("rtl")?o.goToPrevSlide():o.goToNextSlide())},D=function(t){t.preventDefault(),t.stopPropagation(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&(n.debug&&console.log(n.logAs,"stop on navigation"),o.stopAuto()),e(".strong-view").hasClass("rtl")?o.goToNextSlide():o.goToPrevSlide())},H=function(e){o.startAuto(),e.preventDefault(),e.stopPropagation()},O=function(e){o.stopAuto(),e.preventDefault(),e.stopPropagation()},N=function(t){var i,s;t.preventDefault(),t.stopPropagation(),n.controls.el.hasClass("disabled")||(n.settings.auto&&n.settings.stopAutoOnClick&&(n.debug&&console.log(n.logAs,"stop on navigation"),o.stopAuto()),void 0!==(i=e(t.currentTarget)).attr("data-slide-index")&&(s=parseInt(i.attr("data-slide-index")))!==n.active.index&&o.goToSlide(s))},F=function(t){var i=n.children.length;if("short"===n.settings.pagerType)return n.settings.maxSlides>1&&(i=Math.ceil(n.children.length/n.settings.maxSlides)),void n.pagerEl.html(t+1+n.settings.pagerShortSeparator+i);n.pagerEl.find("a").removeClass("active"),n.pagerEl.each(function(i,n){e(n).find("a").eq(t).addClass("active")})},B=function(){if(n.settings.infiniteLoop){var e="";0===n.active.index?e=n.children.eq(0).position():n.active.index===y()-1&&n.carousel?e=n.children.eq((y()-1)*E()).position():n.active.index===n.children.length-1&&(e=n.children.eq(n.children.length-1).position()),e&&("horizontal"===n.settings.mode?T(-e.left,"reset",0):"vertical"===n.settings.mode&&T(-e.top,"reset",0))}n.working=!1,n.settings.onSlideAfter.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)},W=function(e){n.settings.autoControlsCombine?n.controls.autoEl.html(n.controls[e]):(n.controls.autoEl.find("a").removeClass("active"),n.controls.autoEl.find("a:not(.wpmslider-"+e+")").addClass("active"))},Y=function(){1===y()?(n.controls.prev.addClass("disabled"),n.controls.next.addClass("disabled")):!n.settings.infiniteLoop&&n.settings.hideControlOnEnd&&(0===n.active.index?(n.controls.prev.addClass("disabled"),n.controls.next.removeClass("disabled")):n.active.index===y()-1?(n.controls.next.addClass("disabled"),n.controls.prev.removeClass("disabled")):(n.controls.prev.removeClass("disabled"),n.controls.next.removeClass("disabled")))},X=function(){n.settings.autoDelay>0?setTimeout(o.startAuto,n.settings.autoDelay):o.startAuto(),n.settings.autoHover&&o.hover(function(){m("hover")},function(){S("hover")})},R=function(e){var t=document.activeElement.tagName.toLowerCase();if(null===new RegExp(t,["i"]).exec("input|textarea")&&verge.inViewport(o)){if(39===e.keyCode)return q(e),!1;if(37===e.keyCode)return D(e),!1}},Z=function(){n.touch={start:{x:0,y:0},end:{x:0,y:0}},n.viewport.on("touchstart MSPointerDown pointerdown",U),n.viewport.on("click",".wpmslider a",function(e){n.viewport.hasClass("click-disabled")&&(e.preventDefault(),e.stopPropagation(),n.viewport.removeClass("click-disabled"))})},U=function(e){if(("touchstart"===e.type||0===e.button)&&"a"!==e.originalEvent.target.tagName.toLowerCase()&&!e.originalEvent.target.classList.contains("readmore-text"))if(n.controls.el.addClass("disabled"),n.working)e.preventDefault(),e.stopPropagation(),n.controls.el.removeClass("disabled");else{n.touch.originalPos=o.position();var t=e.originalEvent,i=void 0!==t.changedTouches?t.changedTouches:[t];if("function"==typeof PointerEvent&&void 0===t.pointerId)return;n.touch.start.x=i[0].pageX,n.touch.start.y=i[0].pageY,n.viewport.get(0).setPointerCapture&&(n.pointerId=t.pointerId,n.viewport.get(0).setPointerCapture(n.pointerId)),n.originalClickTarget=t.originalTarget||t.target,n.originalClickButton=t.button,n.originalClickButtons=t.buttons,n.originalEventType=t.type,n.hasMove=!1,n.viewport.on("touchmove MSPointerMove pointermove",j),n.viewport.on("touchend MSPointerUp pointerup",Q),n.viewport.on("MSPointerCancel pointercancel",V)}},V=function(e){e.preventDefault(),T(n.touch.originalPos.left,"reset",0),n.controls.el.removeClass("disabled"),n.viewport.off("MSPointerCancel pointercancel",V),n.viewport.off("touchmove MSPointerMove pointermove",j),n.viewport.off("touchend MSPointerUp pointerup",Q),n.viewport.get(0).releasePointerCapture&&n.viewport.get(0).releasePointerCapture(n.pointerId)},j=function(e){var t=e.originalEvent,i=void 0!==t.changedTouches?t.changedTouches:[t],s=Math.abs(i[0].pageX-n.touch.start.x),o=Math.abs(i[0].pageY-n.touch.start.y),r=0,a=0;n.hasMove=!0,3*s>o&&n.settings.preventDefaultSwipeX?(e.preventDefault(),e.stopPropagation()):3*o>s&&n.settings.preventDefaultSwipeY&&(e.preventDefault(),e.stopPropagation()),"touchmove"!==e.type&&e.preventDefault(),"fade"!==n.settings.mode&&n.settings.oneToOneTouch&&("horizontal"===n.settings.mode?(a=i[0].pageX-n.touch.start.x,r=n.touch.originalPos.left+a):(a=i[0].pageY-n.touch.start.y,r=n.touch.originalPos.top+a),T(r,"reset",0))},Q=function(t){t.preventDefault(),n.viewport.off("touchmove MSPointerMove pointermove",j),n.controls.el.removeClass("disabled");var i=t.originalEvent,s=void 0!==i.changedTouches?i.changedTouches:[i],r=0,a=0;n.touch.end.x=s[0].pageX,n.touch.end.y=s[0].pageY,"fade"===n.settings.mode?(a=Math.abs(n.touch.start.x-n.touch.end.x))>=n.settings.swipeThreshold&&(n.touch.start.x>n.touch.end.x?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):("horizontal"===n.settings.mode?(a=n.touch.end.x-n.touch.start.x,r=n.touch.originalPos.left):(a=n.touch.end.y-n.touch.start.y,r=n.touch.originalPos.top),!n.settings.infiniteLoop&&(0===n.active.index&&a>0||n.active.last&&a<0)?T(r,"reset",200):Math.abs(a)>=n.settings.swipeThreshold?(a<0?o.goToNextSlide():o.goToPrevSlide(),o.stopAuto()):T(r,"reset",200)),n.viewport.off("touchend MSPointerUp pointerup",Q),n.viewport.get(0).releasePointerCapture&&n.viewport.get(0).releasePointerCapture(n.pointerId),!1!==n.hasMove||0!==n.originalClickButton&&"touchstart"!==n.originalEventType||e(n.originalClickTarget).trigger({type:"click",button:n.originalClickButton,buttons:n.originalClickButtons})},G=function(e){n.initialized?n.working?(n.debug&&console.log(n.logAs,"slider working"),window.setTimeout(G,10)):(o.redrawSlider(),n.settings.onSliderResize.call(o,n.active.index)):n.debug&&console.log(n.logAs,"slider not initialized")},J=function(e){var t=P();n.settings.ariaHidden&&(n.children.attr("aria-hidden","true"),n.children.slice(e,e+t).attr("aria-hidden","false"))};return o.goToSlide=function(t,i){var s,r,a,l,d=!0,c=0,g={left:0,top:0},p=null;if(n.oldIndex=n.active.index,n.active.index=function(e){return e<0?n.settings.infiniteLoop?y()-1:n.active.index:e>=y()?n.settings.infiniteLoop?0:n.active.index:e}(t),!n.working&&n.active.index!==n.oldIndex){if(n.working=!0,void 0!==(d=n.settings.onSlideBefore.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index))&&!d)return n.active.index=n.oldIndex,void(n.working=!1);"next"===i?n.settings.onSlideNext.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(d=!1):"prev"===i&&(n.settings.onSlidePrev.call(o,n.children.eq(n.active.index),n.oldIndex,n.active.index)||(d=!1)),n.active.last=n.active.index>=y()-1,(n.settings.pager||n.settings.pagerCustom)&&F(n.active.index),n.settings.controls&&Y(),"fade"===n.settings.mode?(n.settings.adaptiveHeight&&n.viewport.height()!==w()&&n.viewport.animate({height:w()},n.settings.adaptiveHeightSpeed),n.children.filter(":visible").fadeOut(n.settings.speed).css({zIndex:0}),n.children.eq(n.active.index).css("zIndex",n.settings.slideZIndex+1).fadeIn(n.settings.speed,function(){e(this).css("zIndex",n.settings.slideZIndex),B()})):(n.settings.adaptiveHeight&&n.viewport.height()!==w()&&n.viewport.animate({height:w()},n.settings.adaptiveHeightSpeed),!n.settings.infiniteLoop&&n.carousel&&n.active.last?"horizontal"===n.settings.mode?(g=(p=n.children.eq(n.children.length-1)).position(),c=n.viewport.width()-p.outerWidth()):(s=n.children.length-n.settings.minSlides,g=n.children.eq(s).position()):n.carousel&&n.active.last&&"prev"===i?(r=1===n.settings.moveSlides?n.settings.maxSlides-E():(y()-1)*E()-(n.children.length-n.settings.maxSlides),g=(p=o.children(".wpmslider-clone").eq(r)).position()):"next"===i&&0===n.active.index?(g=o.find("> .wpmslider-clone").eq(n.settings.maxSlides).position(),n.active.last=!1):t>=0&&(l=t*parseInt(E()),g=n.children.eq(l).position()),void 0!==g&&(a="horizontal"===n.settings.mode?-(g.left-c):-g.top,T(a,"slide",n.settings.speed))),n.settings.ariaHidden&&J(n.active.index*E())}},o.goToNextSlide=function(){if((n.settings.infiniteLoop||!n.active.last)&&!0!==n.working){var e=parseInt(n.active.index)+1;o.goToSlide(e,"next")}},o.goToPrevSlide=function(){if((n.settings.infiniteLoop||0!==n.active.index)&&!0!==n.working){var e=parseInt(n.active.index)-1;o.goToSlide(e,"prev")}},o.startAuto=function(e){n.interval||(n.interval=setInterval(function(){"next"===n.settings.autoDirection?o.goToNextSlide():o.goToPrevSlide()},n.settings.pause),n.settings.onAutoChange.call(o,!0),n.settings.autoControls&&!0!==e&&W("stop"))},o.stopAuto=function(e){n.autoPaused&&(n.autoPaused=!1),n.interval&&(clearInterval(n.interval),n.interval=null,n.settings.onAutoChange.call(o,!1),n.settings.autoControls&&!0!==e&&W("start"))},o.getCurrentSlide=function(){return n.active.index},o.getCurrentSlideElement=function(){return n.children.eq(n.active.index)},o.getSlideElement=function(e){return n.children.eq(e)},o.getSlideCount=function(){return n.children.length},o.isWorking=function(){return n.working},o.redrawSlider=function(){var e,t,i,s,r;n.debug&&console.log(n.logAs,"redrawSlider"),g(),n.children.height("auto"),n.viewport.height(w()+2),n.settings.stretch&&(e=n.children.map(function(){return jQuery(this).actual("outerHeight")}).get(),t=x(e),n.children.height(t),n.children.add(o.find(".wpmslider-clone")).height(t)),n.children.add(o.find(".wpmslider-clone")).outerWidth(C()),n.children.length>n.settings.maxSlides&&n.active.last&&!n.settings.infiniteLoop?"horizontal"===n.settings.mode?(i=(s=n.children.last()).position(),T(-(i.left-(n.viewport.width()-s.outerWidth())),"reset",0)):"vertical"===n.settings.mode&&(r=n.children.length-n.settings.minSlides,i=n.children.eq(r).position(),T(-i.top,"reset",0)):(i=n.children.eq(n.active.index*E()).position(),n.active.index===y()-1&&(n.active.last=!0),void 0!==i&&("horizontal"===n.settings.mode?T(-i.left,"reset",0):"vertical"===n.settings.mode?T(-i.top,"reset",0):"none"===n.settings.mode&&T(-i.top,"reset",0))),n.active.last&&(n.active.index=y()-1),n.active.index>=y()&&(n.active.last=!0),n.settings.pager&&!n.settings.pagerCustom&&(k(),F(n.active.index)),n.settings.ariaHidden&&J(n.active.index*E())},o.destroySlider=function(){n.initialized&&(n.initialized=!1,e(".wpmslider-clone",this).remove(),n.children.each(function(){void 0!==e(this).data("origStyle")?e(this).attr("style",e(this).data("origStyle")):e(this).removeAttr("style")}),void 0!==e(this).data("origStyle")?this.attr("style",e(this).data("origStyle")):e(this).removeAttr("style"),e(this).unwrap().unwrap(),n.controls.el&&n.controls.el.remove(),n.controls.next&&n.controls.next.remove(),n.controls.prev&&n.controls.prev.remove(),n.pagerEl&&n.settings.controls&&!n.settings.pagerCustom&&n.pagerEl.remove(),e(".wpmslider-caption",this).remove(),n.controls.autoEl&&n.controls.autoEl.remove(),clearInterval(n.interval),clearInterval(n.visibilityInterval),n.settings.responsive&&e(window).off("resize",G),n.settings.keyboardEnabled&&e(document).off("keydown",R),e(this).removeData("strongSlider"))},o.reloadSlider=function(t){void 0!==t&&(i=t),o.destroySlider(),r(),e(o).data("strongSlider",o)},r(),e(o).data("strongSlider",o),s.attr("data-state","init"),n.debug&&console.log(n.logAs,"viewport",verge.viewportW(),"x",verge.viewportH()),this}}}(jQuery);