$(document).ready(()=>{
    'use strict'
    var locSplit = window.location.href.split('/'),
        navBarActive;
    locSplit.forEach(element => {
        if(element.match(/.html/g)){
            navBarActive = element.split('.')[0];
        }
    });
    var $map,
        $services,
        $diesel;
    $(window).on('load',()=>{
        if(navBarActive == 'contact'){
            $map = $('.mapLog').offset().top;
            if(window.location.hash == '#map'){
                $("html, body").animate({ scrollTop: $map }, 600);
            }
        }
        if(navBarActive == 'index'){
            $services = $('#servicesSec').offset().top;
            $diesel = $('#euroSec').offset().top;
            if(window.location.hash == '#services'){
                $("html, body").animate({ scrollTop: $services-100 }, 600);
            }
            if(window.location.hash == '#diesel'){
                $("html, body").animate({ scrollTop: $diesel-100 }, 600);
            }
        }
    })
    $(()=>{
        var aElem = document.querySelectorAll('a');
        aElem.forEach((elm, mls)  => {
            if($(elm).attr('href') == navBarActive + '.html#map'){
                $(elm).on('click', ()=>{
                    $("html, body").animate({ scrollTop: $map }, 600);
                })
            }
            if($(elm).attr('href') == '#services'){
                $(elm).on('click', ()=>{
                    $("html, body").animate({ scrollTop: $services-100 }, 600);
                })
            }
            if($(elm).attr('href') == '#diesel'){
                $(elm).on('click', ()=>{
                    $("html, body").animate({ scrollTop: $diesel-100 }, 600);
                })
            }
            if($(elm).attr('href') == navBarActive + '.html')
            $(elm).attr('href', 'javascript:void(0)')
        });
    })
    $(()=>{
        window.setInterval(()=>{
            $('.callAnimation').css({
                animationPlayState:'paused'
            })
            window.setTimeout(()=>{
                $('.callAnimation').css({
                    animationPlayState:'running'
                })
            }, 1000)
        }, 2000)
    })
    $('.clickButton').on('click', ()=>{
        $('body').addClass('scrollNone')
        $('.navBarLogist').addClass('fixedNavBarLogist')
    })
    $('.clickClose').on('click', ()=>{

            $('.navBarLogist').removeClass('fixedNavBarLogist')
        $('body').removeClass('scrollNone')
    })

    var width_wind_max_ph = window.matchMedia( "(max-width: 767px)" );
    $(window).resize(()=>{
        width_wind_max_ph = window.matchMedia( "(max-width: 767px)" );
    })
    
    $('.commonUlNav > li').hover(
        function () {
            if(width_wind_max_ph.matches){
                $('ul.subDiesel', this).stop().slideDown(500);
            }
        },
        function () {
            if(width_wind_max_ph.matches){
                $('ul.subDiesel', this).stop().slideUp(500);
            }
        }
    );
    var doarSmallImg = ()=>{
        var parComm = $('.home_slide .swiper-wrapper').children(),
            nextImg,
            prevImg;
        parComm.each((elm, mls)=>{
            if($(mls).hasClass('swiper-slide-next')){
                nextImg = $(mls).find('img').attr('src');
                $('.home_slide .swiper-button-next').find('span').css({
                    backgroundImage:'url('+ nextImg +')'
                })
            }
            if($(mls).hasClass('swiper-slide-prev')){
                prevImg = $(mls).find('img').attr('src');
                $('.home_slide .swiper-button-prev').find('span').css({
                    backgroundImage:'url('+ prevImg +')'
                })
            }
            
            
        })
    }
    doarSmallImg()
    $('.buuts_swiper > div').on('click', ()=>{
        doarSmallImg()
    })

    if(width_wind_max_ph.matches){
        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= 1200) {
                console.log(true)
                $('.jumpToTop').css({
                    opacity:1
                })
            }
            else{
                $('.jumpToTop').css({
                    opacity:0
                })
            }
        })
    }
    $('.jumpToTop').on('click', function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
    })
    
    if ($("nav").is('*')) {
        var elem = $('nav');
        var offset = elem.offset();
        var leftValue = offset.left;
        var topValue =  offset.top + elem.height();
        //var width = elem.width();
        $(window).scroll(function (event) {
            var y = $(this).scrollTop();
            if (y >= topValue) {
                if (!$('nav').hasClass('navFixed')){
                    $('.commonUlNav').addClass('container')
                    $('nav').addClass('navFixed');
                    $('.navFixed').css({
                        top: '-60px'
                    });
                    // $(".scroll_logo").show();
                    $('.navFixed').animate({
                        top: '0'
                        // width:widthHeader
                    }, 500, function() {
                    });
                }
            } else {
                $('nav').css({
                    top: '25px'
                })
                $('.commonUlNav').removeClass('container')
                $('nav').removeClass('navFixed');
            }
        });
    }

})