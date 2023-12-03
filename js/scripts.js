/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

$(function(){//相当于onload
    $(window).on("resize",function(){     // 监听屏幕事件
        var windowWidth=$(window).width();     //获取屏幕尺寸
        var isSmallScreen = windowWidth < 768;// 返回布尔值
        // 小屏幕追加img标签
        if (isSmallScreen) {
            // 找到需要操作的元素
            $('#casCarousel .carousel-inner .carousel-item').each(function (i, item) {
                var item = $(this);
                // 当前自定义项目中 存储的图片路径
                var imgSrc = isSmallScreen?item.data("image-xs"):item.data("image-lg")
                item.html('<a href="javascript:;" class="mobileImg"><img src="'+imgSrc+'" alt="..."></a>');
            })
        } else {
            // 找到需要操作的元素
            $('#casCarousel .carousel-inner .carousel-item').each(function (i, item) {
                var item = $(this);
                // 当前自定义项目中 存储的图片路径
                var imgSrc = isSmallScreen?item.data("image-xs"):item.data("image-lg")
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("background-image","url('"+imgSrc+"')"));
            })
        }
    }).trigger("resize");

    var userAgent = window.navigator.userAgent;
    // 检查是否是Chrome
    if (userAgent.includes("Chrome") && userAgent.includes("Safari") && !userAgent.includes("Edg")) {
        console.log("This is Chrome");
        // $('#casCarousel').css("padding-top","72px");
    } else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
        console.log("This is Safari");
        // $('#casCarousel').css("padding-top","45px");

    } else {
        console.log("This is another browser");
    }
})
