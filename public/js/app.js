$(function() {

    init();

    function init()
    {
        new WOW().init();
        handleButtonBacktop(1000);
        handleWindownScroll();
        formContact();
        handlePopupmodalVideo();
        handleOpenMobileRespon();
    }

    function handleWindownScroll()
    {
        $(window).scroll(function () {
            let heightScoll = $(window).scrollTop();
            headerScroll(heightScoll);
            backtopScroll(heightScoll);
        });
    }

    function headerScroll(heightScoll)
    {
        let heightTopHeader = $("header .header-top").outerHeight();
        let headerEl        = $("header");
        if(heightScoll >= 100) {
            headerEl.attr('style','top: '+( -1 * heightTopHeader )+'px');
            headerEl.addClass('fixed');
        } else {
            headerEl.attr('style','top: 0');
            headerEl.removeClass('fixed');
        }
    }

    function backtopScroll(heightScoll)
    {
        let backtopEl = $(".backtop-wp");
        if(heightScoll >= 500) {
            backtopEl.addClass('open');
        } else {
            backtopEl.removeClass('open');
        }
    }

    function handleButtonBacktop(duration)
    {
        let backtopEl = $(".backtop-wp");
        backtopEl.click(() => {
            $("html, body").animate({
                scrollTop : 0,
            }, duration)
        });
    }

    function formContact()
    {
        let btnShowListAmount = $(".select-form-head .value-current");
        let formSelectEl      = $(".nice-select-form");
        btnShowListAmount.click(() => {
            formSelectEl.toggleClass('open');
        });
    }

    function handlePopupmodalVideo()
    {
        let btnOpen      = $(".our-story .our-story-video .video-link");
        let btnClose     = $(".popup-modal-video .close-modal");
        let modalVideoEl = $(".popup-modal-video");
        btnOpen.click(() => { modalVideoEl.addClass('open'); event.preventDefault() });
        btnClose.click(() => { modalVideoEl.removeClass('open') });
    }

    function handleOpenMobileRespon()
    {
        let btnOpen  = $(".header-inner .button-menu-respon .btn-menu-wp");
        let btnClose = $(".mobile-wp-content .mobile-head .btn-close-menu-repon");
        let mobileRespon = $(".mobile-wp-content");
        btnOpen.click(() => { mobileRespon.addClass('open') });
        btnClose.click(() => { mobileRespon.removeClass('open') });
    }

    function ofsetTopElement(offsetClass) {
        return $(offsetClass).offset().top;
    }
    let offsetOption = [
        {
            nameEl: "Quà Tặng",
            el: $("ul.list-menu li:nth-child(1) a"),
            offsetClass: "section.featured-section"
        },
        {
            nameEl: "Quà Tặng",
            el: $("ul.list-menu-item-respon li:nth-child(3) a"),
            offsetClass: "section.featured-section"
        },
        {
            nameEl: "Giới Thiệu",
            el: $("ul.list-menu li:nth-child(2) a"),
            offsetClass: "section.our-story"
        },
        {
            nameEl: "Giới Thiệu",
            el: $("ul.list-menu-item-respon li:nth-child(4) a"),
            offsetClass: "section.our-story"
        },
        {
            nameEl: "Lợi Ích",
            el: $("ul.list-menu li:nth-child(3) a"),
            offsetClass: "section.many-benefit"
        },
        {
            nameEl: "Lợi Ích",
            el: $("ul.list-menu-item-respon li:nth-child(5) a"),
            offsetClass: "section.many-benefit"
        },
        {
            nameEl: "Tính Năng",
            el: $("ul.list-menu li:nth-child(4) a"),
            offsetClass: "section.service-page"
        },
        {
            nameEl: "Tính Năng",
            el: $("ul.list-menu-item-respon li:nth-child(6) a"),
            offsetClass: "section.service-page"
        },
        {
            nameEl: "Đánh Giá",
            el: $("ul.list-menu li:nth-child(5) a"),
            offsetClass: "section.user-say"
        },
        {
            nameEl: "Đánh Giá",
            el: $("ul.list-menu-item-respon li:nth-child(7) a"),
            offsetClass: "section.user-say"
        },
        {
            nameEl: "Sản Phẩm Khác",
            el: $("ul.list-menu li:nth-child(6) a"),
            offsetClass: "section.latest-news"
        },
        {
            nameEl: "Sản Phẩm Khác",
            el: $("ul.list-menu-item-respon li:nth-child(8) a"),
            offsetClass: "section.latest-news"
        },
        {
            nameEl: "Liên Hệ",
            el: $("ul.list-menu li:nth-child(7) a"),
            offsetClass: "section.address-contact"
        },
        {
            nameEl: "Liên Hệ",
            el: $("ul.list-menu-item-respon li:nth-child(9) a"),
            offsetClass: "section.address-contact"
        },
        {
            nameEl: "Đặt mua",
            el: $("header .btn-order"),
            offsetClass: "section.order"
        },
        {
            nameEl: "Đặt mua",
            el: $("ul.list-menu-item-respon li:nth-child(10) a"),
            offsetClass: "section.order"
        },
    ];
    offsetOption.forEach(item => item.el.click((e) => {
        e.preventDefault();
        handleScrollToOffset(item);
        let mobileRespon = $(".mobile-wp-content");
        mobileRespon.removeClass('open');
    }));

    function handleScrollToOffset(dataOffsetOftion) {
        let offsetClass = dataOffsetOftion.offsetClass;
        let positionOffsetEl = ofsetTopElement(offsetClass);
        $('html, body').animate({
            scrollTop: positionOffsetEl - 100
        }, 1000);
    }

});