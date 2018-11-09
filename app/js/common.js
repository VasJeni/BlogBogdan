$(function() {
    $(document).ready(function(){
        $('.nav-link').click(function(){
            $('.nav-link #nav-icon1').toggleClass('open');
            $('.dropdown-menu').toggleClass('show');
        });
    });

    window.onscroll = function(){
        if (window.pageYOffset >20){
            $(".header").addClass("bb-2px-s");
        }
        if(($(".header").hasClass("bb-2px-s")) &&(window.pageYOffset <= 20)){
            $(".header").removeClass("bb-2px-s");
        }
    };

    $(document).ready(function(){
        $(".lectures__images").owlCarousel({
            items: 1,
            loop : true,
            nav : true,
            dots : true,
            margin: 20
        });
        $(".sp__carousel").owlCarousel({
            items: 1,
            loop : true,
            nav : true,
            dots : true,
            margin : 20
        });
        $(".sp__carouse2").owlCarousel({
            items: 1,
            loop : true,
            nav : true,
            dots : true,
            margin : 20
        });
        $(".school__carousel").owlCarousel({
            items: 1,
            loop : true,
            nav : true,
            dots : true,
            margin : 20
        });
        $(".home__carousel").owlCarousel({
            items: 1,
            loop : true,
            nav : false,
            dots : true,
            margin : 0
        });
    });

    $(document).click(function(e) {
        if (!$(e.target).is('.dropdown-menu, .nav-link, #nav-icon1, #nav-icon1 span, .dropdown-item')) {
            $('#nav-icon1').removeClass('open');
            $('.dropdown-menu').removeClass('show');
        }
    });


});
