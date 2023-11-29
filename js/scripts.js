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
})
// $(function(){//相当于onload
//     // 轮播图的响应式(大屏幕用背景图，小屏幕用img)
//     // 根据屏幕宽度决定背景图形式还是图片
//     function resize () {
//         // 先获取屏幕宽度
//         var windowWidth = $(window).width();
//         // 判断当前屏幕大小
//         var isSmallScreen = windowWidth < 768;// 返回布尔值
//         // 找到需要操作的元素
//         $('#casCarousel .carousel-inner .item').each(function (i, item) {
//             var $item = $(item);
//             var imgSrc = isSmallScreen?$item.data("image-xs"):$item.data("image-lg")
//             // 大屏幕设置背景图片
//             $item.css({
//                 backgroundImage:'url(${imgSrc})'
//             })
//             // 小屏幕追加img标签
//             if (isSmallScreen) {
//                 $item.html('<img src=${imgSrc}>')
//             } else {
//                 $item.empty();
//             }
//         })
//     } 
//     // trigger（） 方法触发被选元素的指定事件类型。
//     // 当调整浏览器窗口大小时，发生resize 事件。
//     $ (window).on("resize", resize).trigger("resize");
//     // 手机端的触碰事件
//     var carousel = $(",carousel");
//     var start, endx, moves;
//     var startMove = 50;
//     carousel.on("touchstart", function (e) {
//         startX = e.originalEvent. touches [0].clientx;
//     })
//     carousel.on("touchmove", function (e) {
//         endX = e.originalEvent.touches [0].clientX;
//     })
//     carousel. on("touchend", function (e) {
//         moves = Math.abs(start - endx) - startMove;
//         if (moves) {
//             if (startX - endX > 0) {
//                 $(this) .carousel ("next");
//             } else if (startX - endX < 0) {
//                 $(this).carousel("prev");
//             }
//         }
//     })
//     // 鼠标拖动事件
//     var x1, x2, xmove
//     carousel[0].onmousedown = function(e1){
//         x1 = e1.clientx;
//         carouse[0].onmousemove = function(e2){
//         X2 = e2.CLientX;
//         }
//     }
//     carousel[0].onmouseup= function(){
//         xmove = Math. abs (x1 - x2) - startMove;
//         if (xmove) {
//             if (x1 - x2 > 0) {
//                 $ (this).carousel("next");
//             } else if (x1 - x2 < 0) {
//                 $ (this).carousel("prev");
//             }
//         }
//     }
// })
