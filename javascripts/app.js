!function(){"use strict";var e="undefined"==typeof global?self:global;if("function"!=typeof e.require){var a={},t={},n={},o={}.hasOwnProperty,s=/^\.\.?(\/|$)/,i=function(e,a){for(var t,n=[],o=(s.test(a)?e+"/"+a:a).split("/"),i=0,c=o.length;i<c;i++)t=o[i],".."===t?n.pop():"."!==t&&""!==t&&n.push(t);return n.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},r=function(a){return function(t){var n=i(c(a),t);return e.require(n,a)}},u=function(e,a){var n=g&&g.createHot(e),o={id:e,exports:{},hot:n};return t[e]=o,a(o.exports,r(e),o),o.exports},l=function(e){return n[e]?l(n[e]):e},d=function(e,a){return l(i(c(e),a))},p=function(e,n){null==n&&(n="/");var s=l(e);if(o.call(t,s))return t[s].exports;if(o.call(a,s))return u(s,a[s]);throw new Error("Cannot find module '"+e+"' from '"+n+"'")};p.alias=function(e,a){n[a]=e};var _=/\.[^.\/]+$/,f=/\/index(\.[^\/]+)?$/,b=function(e){if(_.test(e)){var a=e.replace(_,"");o.call(n,a)&&n[a].replace(_,"")!==a+"/index"||(n[a]=e)}if(f.test(e)){var t=e.replace(f,"");o.call(n,t)||(n[t]=e)}};p.register=p.define=function(e,n){if(e&&"object"==typeof e)for(var s in e)o.call(e,s)&&p.register(s,e[s]);else a[e]=n,delete t[e],b(e)},p.list=function(){var e=[];for(var t in a)o.call(a,t)&&e.push(t);return e};var g=e._hmr&&new e._hmr(d,p,a,t);p._cache=t,p.hmr=g&&g.wrap,p.brunch=!0,e.require=p}}(),function(){"undefined"==typeof window?this:window;require.register("initialize.js",function(e,a,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}var o=a("jquery"),s=n(o),i=a("fullpage.js"),c=(n(i),a("slick-carousel")),r=(n(c),a("fancybox")),u=n(r),l=a("jquery-validation"),d=(n(l),a("html2canvas")),p=(n(d),(0,s["default"])(".main-nav li a"));(0,s["default"])(document).ready(function(e){e("#fullpage").fullpage({anchors:["page-1","page-2","page-3","page-4","page-5","page-6","page-7","page-8","page-9","page-10"],menu:" #menu",navigation:!0,navigationPosition:"left",responsiveWidth:961,afterLoad:function(a){if(e(document).width()>940){if("page-1"===a){var t=400,n=e(".section1__features-item");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeInUp").dequeue()})})}if("page-1"!==a&&(e(".section1__features-item").css("opacity",0),e(".section1__features-item").removeClass("fadeInUp")),"page-2"===a){var o=function(e){s[e].classList.add("fadeInUp")},t=400,n=e(".section2__item"),s=[];s[0]=n[1],s[1]=n[2],s[2]=n[0];for(var i=0;s.length>i;i++){var c=t*i;setTimeout(o,c,i)}}if("page-2"!==a&&(e(".section2__item").css("opacity",0),e(".section2__item").removeClass("fadeInUp")),"page-4"===a){var t=300,n=e(".section4__seven, .section4__passport-item");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeIn").dequeue()})})}if("page-4"!==a&&(e(".section4__seven, .section4__passport-item").css("opacity",0),e(".section4__seven, .section4__passport-item").removeClass("fadeIn")),"page-6"===a){var t=300,n=e(".section6__passport-item");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeIn").dequeue()})})}if("page-6"!==a&&(e(".section6__passport-item").css("opacity",0),e(".section6__passport-item").removeClass("fadeIn")),"page-7"===a){var t=200,n=e(".funcybox-section7");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeInUp").dequeue()})})}if("page-7"!==a&&(e(".funcybox-section7").css("opacity",0),e(".funcybox-section7").removeClass("fadeInUp")),"page-8"===a){var t=100,n=e(".section8__ask");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeInUpAsk").dequeue()})})}if("page-8"!==a&&(e(".section8__ask").css("opacity",0),e(".section8__ask").removeClass("fadeInUpAsk")),"page-10"===a){var t=100,n=e(".section10-item");n.each(function(a){e(this).delay(t*a).queue(function(){e(this).addClass("fadeInUp").dequeue()})})}"page-10"!==a&&(e(".section10-item").css("opacity",0),e(".section10-item").removeClass("fadeInUp"))}},onLeave:function(a,t){if(1===t&&e(".arrow-up").css("opacity",0),1!==t&&e(".arrow-up").css("opacity",1),1===t||3===t||5===t||7===t||9===t){e(".page-header").css("color","#ffffff"),e(".page-header__mail a").css("color","#ffffff"),e(".page-header__tel-btn").css("color","#ffffff"),e(".main-nav").css("background","rgba(0,0,0,0.8)"),e(".page-header__logo").css("background-image",'url("images/logo-white.png")'),e(".page-header__logo").css("background-size","contain"),e(".page-header__logo").css("background-repeat","no-repeat"),e(".burger").css("background-image",'url("images/burger-white.png")'),e(".main-nav li a").css("color","#ffffff"),e(".main-nav__btn-close").css("background-image",'url("./images/main-nav-close-white.png")'),e(".main-nav__blur").css("background-color","rgba(0,0,0,0.8)"),e(document).width()<961&&e(".page-header").css("background-color","rgba(0, 0, 0, 0.5)");for(var n=0;p.length>n;n++)p[n].addEventListener("mouseenter",function(e){e.target.style.color="#accc3d"}),p[n].addEventListener("mouseout",function(e){e.target.style.color="#ffffff"})}else{e(".page-header").css("color","#000000"),e(".page-header__mail a").css("color","#000000"),e(".page-header__tel-btn").css("color","#000000"),e(".main-nav").css("background","rgba(255,255,255,0.9)"),e(".page-header__logo").css("background-image",'url("images/logo-black.png")'),e(".page-header__logo").css("background-size","contain"),e(".page-header__logo").css("background-repeat","no-repeat"),e(".burger").css("background-image",'url("images/burger-black.png")'),e(".main-nav li a").css("color","#000000"),e(".main-nav__btn-close").css("background-image",'url("./images/main-nav-close-black.png")'),e(".main-nav__blur").css("background-color","rgba(255,255,255,0.8)"),e(document).width()<961&&e(".page-header").css("background-color","rgba(255, 255, 255, 0.5)");for(var n=0;p.length>n;n++)p[n].addEventListener("mouseenter",function(e){e.target.style.color="#accc3d"}),p[n].addEventListener("mouseout",function(e){e.target.style.color="#000000"})}}})}),(0,s["default"])(".main-nav__btn-close").click(function(){(0,s["default"])(".main-nav").removeClass("menu-left"),(0,s["default"])(".main-nav").addClass("menu-right")}),(0,s["default"])(".burger").click(function(){(0,s["default"])(".main-nav").addClass("menu-left"),(0,s["default"])(".main-nav").removeClass("hidden")}),(0,s["default"])(".page-header__tel-btn").click(function(){(0,s["default"])(".popup__phone").removeClass("hidden")}),(0,s["default"])(".section2__form-btn").click(function(){(0,s["default"])(".popup__phone").removeClass("hidden")}),(0,s["default"])(".section5__btn").click(function(){(0,s["default"])(".popup__phone").removeClass("hidden")}),(0,s["default"])(".section7__btn").click(function(){(0,s["default"])(".popup__phone").removeClass("hidden")}),(0,s["default"])(".section8__btn").click(function(){(0,s["default"])(".popup__ask").removeClass("hidden")}),(0,s["default"])(".section9__btn").click(function(){(0,s["default"])(".popup__review").removeClass("hidden")}),(0,s["default"])(".section10__btn").click(function(){(0,s["default"])(".popup__phone").removeClass("hidden")}),(0,s["default"])(".popup__btn-close").click(function(){(0,s["default"])(".popup__phone").addClass("hidden"),(0,s["default"])(".popup__ask").addClass("hidden"),(0,s["default"])(".popup__review").addClass("hidden"),(0,s["default"])(".popup__success-phone").addClass("hidden"),(0,s["default"])(".popup__success-ask").addClass("hidden"),(0,s["default"])(".popup__success-review").addClass("hidden"),(0,s["default"])(".popup__slider").addClass("hidden")}),(0,s["default"])(".section3__counter-min").text("0"+(0,s["default"])(".section3__big-slider .big-slider__slide").length),(0,s["default"])(".section3__big-slider").slick({arrows:!1,autoplay:!0,autoplaySpeed:5e3,infinite:!1,asNavFor:".section3__min-slider",focusOnSelect:!1}),(0,s["default"])(".section3__min-slider").slick({autoplay:!0,autoplaySpeed:5e3,infinite:!1,appendArrows:(0,s["default"])(".section3-slider__arrows"),prevArrow:'<button id="prev" type="button" class="btn section3-btn-prev"><span class = "section3-btn-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',nextArrow:'<button id="next" type="button" class="btn section3-btn-next"><span class = "section3-btn-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>',asNavFor:".section3__big-slider"}),(0,s["default"])(".section3__big-slider").on("beforeChange",function(e,a,t,n){(0,s["default"])(".section3__counter-big").text("0"+(n+1))}),(0,s["default"])(".section3__big-slider").on("afterChange",function(e,a,t){var n=(0,s["default"])(".big-slider__slide-foto");(0,s["default"])(n[t-1]).removeClass("fadeInRight"),(0,s["default"])(n[t+1]).removeClass("fadeInRight")}),(0,s["default"])(".section9__counter-min").text("0"+(0,s["default"])(".section9__slide").length),(0,s["default"])(".section9__slider").slick({slidesToShow:1,slidesToScroll:1,infinite:!1,appendArrows:(0,s["default"])(".section9-slider__arrows"),prevArrow:'<button id="prev" type="button" class="btn section3-btn-prev"><span class = "section3-btn-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',nextArrow:'<button id="next" type="button" class="btn section3-btn-next"><span class = "section3-btn-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>',autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!0}),(0,s["default"])(".section9__slider").on("beforeChange",function(e,a,t,n){(0,s["default"])(".section9__counter-big").text("0"+(n+1))}),(0,s["default"])(".popup__slids").slick({slidesToShow:1,slidesToScroll:1,fade:!0,variableWidth:!0,appendArrows:(0,s["default"])(".popup-slider__arrows"),prevArrow:'<button id="prev" type="button" class="btn section3-btn-prev popup-slider-prev"><span class = "section3-btn-prev-text popup__slider-prev-text">Назад</span><div class="section3-btn-prev-arrow"></div></button>',nextArrow:'<button id="next" type="button" class="btn section3-btn-next popup-slider-next"><span class = "section3-btn-next-text popup__slider-next-text">Вперед</span><div class="section3-btn-next-arrow"></div></button>'}),(0,s["default"])(".popup__slider__counter-min").text((0,s["default"])(".popup__slid").length),(0,s["default"])(".popup__slids").on("beforeChange",function(e,a,t,n){n+1<10?(0,s["default"])(".popup__slider__counter-big").text("0"+(n+1)):(0,s["default"])(".popup__slider__counter-big").text(n+1)});var _=(0,s["default"])(".section1__form-checkbox");_.change(function(){_.prop("checked")?(0,s["default"])(".checkbox__circle").animate({left:"23px"},"fast",function(){(0,s["default"])(".checkbox__yes").css("display","block"),(0,s["default"])(".checkbox__no").css("display","none"),(0,s["default"])(".section1__form-btn").prop("disabled",!1)}):(0,s["default"])(".checkbox__circle").animate({left:"0"},"fast",function(){(0,s["default"])(".checkbox__yes").css("display","none"),(0,s["default"])(".checkbox__no").css("display","block"),(0,s["default"])(".section1__form-btn").prop("disabled",!0)})});var f=(0,s["default"])(".popup__phone .section1__form-checkbox");f.change(function(){f.prop("checked")?(0,s["default"])(".popup__phone .checkbox__circle").animate({left:"23px"},"fast",function(){(0,s["default"])(".popup__phone .checkbox__yes").css("display","block"),(0,s["default"])(".popup__phone .checkbox__no").css("display","none"),(0,s["default"])(".popup__btn").prop("disabled",!1)}):(0,s["default"])(".popup__phone .checkbox__circle").animate({left:"0"},"fast",function(){(0,s["default"])(".popup__phone .checkbox__yes").css("display","none"),(0,s["default"])(".popup__phone .checkbox__no").css("display","block"),(0,s["default"])(".popup__btn").prop("disabled",!0)})});var b=(0,s["default"])(".popup__ask .section1__form-checkbox");b.change(function(){b.prop("checked")?(0,s["default"])(".popup__ask .checkbox__circle").animate({left:"23px"},"fast",function(){(0,s["default"])(".popup__ask .checkbox__yes").css("display","block"),(0,s["default"])(".checkbox__no").css("display","none"),(0,s["default"])(".popup__btn").prop("disabled",!1)}):(0,s["default"])(".popup__ask .checkbox__circle").animate({left:"0"},"fast",function(){(0,s["default"])(".popup__ask .checkbox__yes").css("display","none"),(0,s["default"])(".checkbox__no").css("display","block"),(0,s["default"])(".popup__btn").prop("disabled",!0)})});var g=(0,s["default"])(".popup__review .section1__form-checkbox");g.change(function(){g.prop("checked")?(0,s["default"])(".popup__review .checkbox__circle").animate({left:"23px"},"fast",function(){(0,s["default"])(".popup__review .checkbox__yes").css("display","block"),(0,s["default"])(".checkbox__no").css("display","none"),(0,s["default"])(".popup__btn").prop("disabled",!1)}):(0,s["default"])(".popup__review .checkbox__circle").animate({left:"0"},"fast",function(){(0,s["default"])(".popup__review .checkbox__yes").css("display","none"),(0,s["default"])(".checkbox__no").css("display","block"),(0,s["default"])(".popup__btn").prop("disabled",!0)})});var h=(0,s["default"])(".section8__ask");h.each(function(e,a){(0,s["default"])(a).click(function(e){var a=(0,s["default"])(e.target).attr("data-slide");(0,s["default"])(".popup__slider").removeClass("hidden"),(0,s["default"])(".popup__slids").slick("slickGoTo",a)})}),(0,u["default"])(s["default"]),(0,s["default"])(document).ready(function(){(0,s["default"])("a[rel=lightbox-group]").fancybox({helpers:{overlay:{css:{background:"rgba(255,255,255,0.5)"}}}})}),(0,s["default"])("#section1__form").validate({rules:{your__name:{required:!0},your__tel:{required:!0,digits:!0},section1__checkbox:{required:!0}},messages:{your__name:{required:"укажите ваше имя"},your__tel:{required:"укажите ваш телефон",digits:"только цифры"}},submitHandler:function(e){}}),(0,s["default"])("#popup__phone-form").validate({rules:{phone__name:{required:!0},phone__tel:{required:!0,digits:!0},popup__phone__checkbox:{required:!0}},messages:{phone__name:{required:"укажите ваше имя"},phone__tel:{required:"укажите ваш телефон",digits:"только цифры"}}}),(0,s["default"])("#popup__ask-form").validate({rules:{ask__name:{required:!0},ask__email:{required:!0,email:!0},ask__area:{required:!0},popup__ask__checkbox:{required:!0}},messages:{ask__name:{required:"укажите ваше имя"},ask__email:{required:"укажите ваш email",email:"некорректрый email"},ask__area:{required:"введите ваш вопрос"}}}),(0,s["default"])("#popup__review-form").validate({rules:{review__name:{required:!0},review__area:{required:!0},popup__review__checkbox:{required:!0}},messages:{review__name:{required:"укажите ваше имя"},review__area:{required:"введите ваш отзыв"}}})}),require.register("___globals___",function(e,a,t){})}(),require("___globals___");