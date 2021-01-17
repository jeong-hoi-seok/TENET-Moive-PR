
$(document).ready(function(){
    scrollevnet();
    // menubarcolor();
    menuclickscrollevent();
    mobileMenuevent();
    soundtrackTab();
    mobileSoundtrackTab();
}); 
$(window).scroll(function(){
    scrollhide();
    synopsisActive();
    trailerActive();
    characterActive();
    aboutActive();
    galleryActive();
    soundtrackActive();
});
function synopsisActive(){
    // var activescroll = $('#synopsis').offset().top;
    var syntop = $('#synopsis').offset().top;
    var synheight = $('#synopsis').height();
    if ($(window).scrollTop() < syntop - 100){
        $(' header nav ul li a').eq(0).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > syntop + synheight + 100) {
        $(' header nav ul li a').eq(0).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(0).addClass('activemenucolor');
    }  
}
function trailerActive(){
    var trytop = $('#trailer').offset().top;
    var tryheight = $('#trailer').height();
    if ($(window).scrollTop() < trytop - 100){
        $(' header nav ul li a').eq(1).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > trytop + tryheight + 100){
        $(' header nav ul li a').eq(1).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(1).addClass('activemenucolor');
    }
}
function characterActive(){
    var chatop = $('#character').offset().top;
    var chaheight = $('#character').height();
    if ($(window).scrollTop() < chatop - 100){
        $(' header nav ul li a').eq(2).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > chatop + chaheight){
        $(' header nav ul li a').eq(2).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(2).addClass('activemenucolor');
    }
}
function aboutActive(){
    var abotop = $('#about').offset().top;
    var aboheight = $('#about').height();
    if ($(window).scrollTop() < abotop - 100){
        $(' header nav ul li a').eq(3).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > abotop + aboheight + 100){
        $(' header nav ul li a').eq(3).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(3).addClass('activemenucolor');
    }
}
function galleryActive(){
    var galltop = $('#gallery').offset().top;
    var gallheight = $('#gallery').height();
    if ($(window).scrollTop() < galltop - 100){
        $(' header nav ul li a').eq(4).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > galltop + gallheight + 100){
        $(' header nav ul li a').eq(4).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(4).addClass('activemenucolor');
    }
}
function soundtrackActive(){
    var soundtop = $('#soundtrack').offset().top;
    var soundheight = $('#soundtrack').height();
    if ($(window).scrollTop() < soundtop - 100){
        $(' header nav ul li a').eq(5).removeClass('activemenucolor');
    } else if ($(window).scrollTop() > soundtop + soundheight + 100){
        $(' header nav ul li a').eq(5).removeClass('activemenucolor');
    } else {
        $(' header nav ul li a').eq(5).addClass('activemenucolor');
    }
}

function scrollevnet(){
    $('.top-button').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},600);
    });
}
function scrollhide(){
    if ($(document).scrollTop() > 500){
        $('.top-button').addClass('active-top-button');
    } else {
        $('.top-button').removeClass('active-top-button');
    }
}
// ? top scroll button
// function menubarcolor(){
//     $('header nav ul li a').click(function(){
//         $('.activecolor').removeClass('activecolor');
//         $(this).addClass('activecolor');
//     });
// }
function menuclickscrollevent(){
    $('header nav ul li a').click(function(e){
        e.preventDefault();
        console.log($(this).parents().index());
        var idx = $(this).parents().index();
        var thisTarget = $('.tagetMenu').eq(idx).attr("id");
        console.log(thisTarget);
        // $("#" + thisTarget).offset().top
        $('html,body').stop().animate({scrollTop:$("#" + thisTarget).offset().top - 98},600);
    });
}
function mobileMenuevent(){
    $('.menuham , .close').click(function(){
        $('header nav ul').toggleClass('activeMenu');
        $('.menubar .menuham').toggleClass('invisible');
        $('.menubar .close').toggleClass('visible');
    });
}
function soundtrackTab(){
    $('.tab .musicList ul li').click(function(){
        $('.tab .musicList ul li').removeClass('activeTab');
        $(this).addClass('activeTab');
        $(".tab .content div").hide()
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
}
function mobileSoundtrackTab(){
    // 스크롤 부분
    $('.tab .musicList button').click(function(){
        $('.tab .musicList').removeClass('activeList');
        $('.tab .musicList ul').toggleClass('activeList');
    });
}

