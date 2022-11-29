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
    if(scrollTop >= 760){

        $('.overview').addClass('on');
        $('.phone').addClass('on');
    }
    if(scrollTop >= 2500){

        $('.contmoc1').addClass('on');
    }
    if(scrollTop >= 3900){

        $('.contmoc2').addClass('on');
        $('.contmoc3').addClass('on');
    }



    if(scrollTop >= 5750){

        $('.grid').addClass('on');
        $('.system').addClass('on');
        $('.example').addClass('on');
    }
    if(scrollTop >= 6100){

        $('.gridds1').addClass('on');
        $('.gridds2').addClass('on');
        $('.gridds3').addClass('on');
    }


    if(scrollTop >= 7300){

        $('.cont2moc1').addClass('on');
    }
    if(scrollTop >= 7900){

        $('.cont2typo1').addClass('on');
        $('.cont2typo2').addClass('on');
        $('.cont2typo3').addClass('on');
    }
    if(scrollTop >= 9550){

        $('.cont2moc2').addClass('on');
    }


    if(scrollTop >= 12250){

        $('.co').addClass('on');
        $('.lo').addClass('on');
        $('.rs').addClass('on');
        $('.colords1').addClass('on');

        $('.colords2').addClass('on');
        $('.colords3').addClass('on');
        $('.colords4').addClass('on');

    }
    if(scrollTop >= 13300){

        $('.cont3moc1').addClass('on');
        $('.cont3pic').addClass('on');

    }
    if(scrollTop >= 14200){

        $('.cont3moc2').addClass('on');
        $('.contds2').addClass('on');
    }
    if(scrollTop >= 15640){

        $('.footerds').addClass('on');
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

        $('.face').addClass('on');
        $('.p').addClass('on');
        $('.ro').addClass('on');
        $('.motion').addClass('on');
        $('.de').addClass('on');
        $('.sign').addClass('on');


 



    })();



})
