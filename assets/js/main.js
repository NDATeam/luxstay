$(window).on("load",(function(e){$("#loader-wrapper").delay(2500).fadeOut("linear"),setTimeout((function(){$(".loader-section").addClass("no-js")}),2200)})),$(".header__search-input").focus((function(){$(".header__search-suggest").fadeIn()})),$(".header__search-input").blur((function(){$(".header__search-suggest").fadeOut()})),$(".header__search-input").on("keyup",(function(){$(this).val().length>0?$(".header__search-icon-del").css("display","flex"):$(".header__search-icon-del").css("display","none")})),$(".header__search-icon-del").on("click",(function(){$(".header__search-input").val(""),$(this).css("display","none")})),$(".header__search-options-text").click((function(){$(".header__search-booking").toggleClass("show")})),$(".header__nav-language").click((function(){$(".change__languages").toggleClass("show")})),$((function(){$('input[name="datefilter"]').daterangepicker({autoUpdateInput:!1,locale:{cancelLabel:"Clear"}}),$('input[name="datefilter"]').on("apply.daterangepicker",(function(e,a){$(this).val(a.startDate.format("MM/DD")+" - "+a.endDate.format("MM/DD"))})),$('input[name="datefilter"]').on("cancel.daterangepicker",(function(e,a){$(this).val("")}))})),$((function(){$(".header__booking-plus").on("click",(function(){let e=$(this).parent(),a=e.find(".header__booking-number"),n=e.find(".header__booking-minus"),o=a.val();a.val(++o),n.removeClass("header__booking-minus--disabled")})),$(".header__booking-minus").on("click",(function(){if(!$(this).hasClass("header__booking-minus--disabled")){let e=$(this).parent(),a=e.find(".header__booking-number"),n=e.find(".header__booking-minus"),o=$("header__search-options-text"),i=a.val();0!=i?a.val(--i):(o.html("Số khách"),n.addClass("header__booking-minus--disabled"))}})),$(".header__booking-delete").on("click",(function(){$(".header__booking-number").val(0)}))})),$(".nav__mobile-btn--show").click((function(){$(".nav__mobile").addClass("show-nav__mobile"),$(".nav_overlay").addClass("show-overlay")})),$(".nav__mobile-close").click((function(){$(".nav__mobile").removeClass("show-nav__mobile"),$(".nav_overlay").removeClass("show-overlay")})),$(".nav_overlay").click((function(){$(".nav__mobile").removeClass("show-nav__mobile"),$(".nav_overlay").removeClass("show-overlay")})),$(".nav__mobile-language").click((function(){$(".mobile__language").toggleClass("show-mobile__language")})),$(window).scroll((function(){$(this).scrollTop()>=300?$(".bottom-on-top__btn").fadeIn():$(".bottom-on-top__btn").fadeOut()})),$(".bottom-on-top__btn").click((function(){$("html, body").animate({scrollTop:0},1500)}));