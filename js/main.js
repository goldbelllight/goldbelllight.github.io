window.addEventListener('DOMContentLoaded', function () {



    
    gsap.registerPlugin(ScrollTrigger);

    const stage = document.querySelector('#container');
    const container = Scrollbar.init(stage, {
        damping: 0.1,
        delegateTo: stage,
        continuousScrolling: true,
        alwaysShowTracks: false,
    });
    container.setPosition(0, 0);
    container.track.xAxis.element.remove();
    // Scrollbar.detachStyle();



    ScrollTrigger.scrollerProxy("body", {

        scrollTop(value) {

            if (arguments.length) {
                container.scrollTop = value;
            }

            return container.scrollTop;

        }
    });





    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        console.log(scrollTop);


        // $('.box1').css('transform', `translateY(${scrollTop * 0.7}px)`)

        $(function() {

            
            $("#TopButton").click(function() {
                $('html').animate({scrollTop : 0}, 600);
            });
         
    
        });

    // section 01 ////////////////////////////////// main /////////////////////////////////////////////

        if(scrollTop >= 825){

        $('.pfbg').addClass('on');
        }
//         if(scrollTop >= 2700){

//             $('.pfbg').removeClass('on');
//         }
//         if(scrollTop <= 385){

//             $('.pfbg').removeClass('on');
//             $('.pfrow').removeClass('on');
//             $('.pfcolumn').removeClass('on');
//             $('.pftitle').removeClass('on');
//             $('.pfcontent').removeClass('on');
//             }


    // section 01 //////////////////////////////// profile //////////////////////////////////////////

         if(scrollTop >= 1080){
            $('.pfrow').addClass('on');
            $('.pfcolumn').addClass('on');
            $('.pftitle').addClass('on');
            $('.pfcontent').addClass('on');
        }
        if(scrollTop >= 2700){
            $('.pfrow').removeClass('on');
            $('.pfcolumn').removeClass('on');
            $('.pftitle').removeClass('on');
            $('.pfcontent').removeClass('on');
        }

        if(scrollTop >= 2230){
            $('.menutab2').addClass('on');
        }
//         if(scrollTop <= 2100){
//             $('.menutab2').removeClass('on');
//         }




    
    });


    $('.startPoint').click(function () {

        container.scrollTo(0, 0, 600, {
            callback: () => console.log('done!'),
            easing: easing.easeInOutCirc,
        });


    });





    (function () {

        

        setTimeout(()=>{
            $('.main').addClass('on');
        },1000)

/*

        gsap.to(".box2", {
            x: 400,
            scrollTrigger: {
                trigger: ".box2",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: false,
                id: "scrub"
            }
        });

        gsap.to(".box3", {
            x: 400,
            rotation: 360,
            scrollTrigger: {
                trigger: ".box3",
                start: "top center",
                end: "top 100px",
                scrub: 1,
                markers: true,
                id: "scrub"
            }
        });*/


        $('.subtypo2').addClass('on');
        $('.subtypo').addClass('on');


        $('.l').addClass('on');
        $('.e').addClass('on');
        $('.s').addClass('on');
        $('.s2').addClass('on');
        $('.dot').addClass('on');
        $('.b').addClass('on');
        $('.u').addClass('on');
        $('.t').addClass('on');
        $('.b2').addClass('on');
        $('.e2').addClass('on');
        $('.t2').addClass('on');
        $('.t3').addClass('on');
        $('.e3').addClass('on');
        $('.r').addClass('on');
        $('.by').addClass('on');


        $('.myphoto').addClass('on');
        $('.myphoto2').addClass('on');
        $('.myphoto3').addClass('on');
        $('.myphoto4').addClass('on');
        $('.myphoto5').addClass('on');
        $('.myphoto6').addClass('on');

        $('.prev').addClass('on');
        $('.next').addClass('on');
 

        $('.subtitle').addClass('on');
        $('.subtitle2').addClass('on');
        $('.dieterrams').addClass('on');
        $('.light1').addClass('on');
        $('.light11').addClass('on');


 



    })();

    $(document).ready(function () {

     
         // 2. 버튼 클릭하면 원하는 위치로 이동
         $('.arrow1').click(function (event) {
             event.preventDefault();
             $('html, body').animate({ scrollTop: 0 }, 300);
         });
     
     });

})
