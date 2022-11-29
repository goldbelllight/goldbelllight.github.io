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



    // section 01 //////////////////////////////////  /////////////////////////////////////////////
    if(scrollTop >= 450){

        $('.titlebg').addClass('on');
    }
    if(scrollTop >= 900){

        $('.smog').addClass('on');
    }
    if(scrollTop >= 1400){

        $('.font').addClass('on');
    }



    if(scrollTop >= 2050){

        $('.title02').addClass('on');
    }
    if(scrollTop >= 2400){

        $('.mainmoc').addClass('on');
    }


    if(scrollTop >= 3840){

        $('.title03').addClass('on');
    }
    if(scrollTop >= 4200){

        $('.retouch1').addClass('on');
    }
    if(scrollTop >= 5000){

        $('.retouch2').addClass('on');
    }


    if(scrollTop >= 5700){

        $('.contbg').addClass('on');

    }
    if(scrollTop >= 5700){

        $('.contmoc1').addClass('on');

    }
    if(scrollTop >= 6196){

        $('.contds1').addClass('on');
        $('.contds2').addClass('on');
    }
    if(scrollTop >= 6800){

        $('.contmoc2').addClass('on');
    }
    if(scrollTop >= 6500){

        $('.conttitle').addClass('on');
    }



    if(scrollTop >= 9000){

        $('.mobilemoc1').addClass('on');
        $('.mobilemoc2').addClass('on');
        $('.mobilemoc3').addClass('on');
    }
    if(scrollTop >= 8800){

        $('.mobiletitle').addClass('on');
    }




    

    if(scrollTop >= 10700){

        $('.moc07').addClass('on');
        $('.moc072').addClass('on');
    }



    if(scrollTop >= 12700){

        $('.moc08').addClass('on');
    }







    
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

        $('.target').addClass('on');
        $('.pubg').addClass('on');


 



    })();



})
