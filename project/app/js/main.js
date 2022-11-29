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



    // section 01 ////////////////////////////////// main /////////////////////////////////////////////
        if(scrollTop >= 400){

            $('.maintypo1').addClass('on');
            $('.mainmoc').addClass('on');
        }        
        if(scrollTop >= 1200){

            $('.mainds7').addClass('on');
        }
        if(scrollTop >= 1300){

            $('.mainds3').addClass('on');
        }
        if(scrollTop >= 1500){

            $('.mainds5').addClass('on');
        }
        if(scrollTop >= 1600){

            $('.mainds1').addClass('on');
        }
        if(scrollTop >= 1700){

            $('.mainds2').addClass('on');
            $('.mainds6').addClass('on');
        }
        if(scrollTop >= 1800){

            $('.mainds4').addClass('on');
        }


// section 02 ////////////////////////////////// main /////////////////////////////////////////////
    if(scrollTop >= 2780){

        $('.overviewtypo').addClass('on');
    }


// section 03 ////////////////////////////////// design process /////////////////////////////////////////////
    if(scrollTop >= 3700){
        $('.dpds1').addClass('on');
        $('.dpds2').addClass('on');
    }
    if(scrollTop >= 4300){
        $('.dptypo').addClass('on');
    }


// section 04 ////////////////////////////////// research /////////////////////////////////////////////
    if(scrollTop >= 5100){
        $('.researchds1').addClass('on');
        $('.researchds2').addClass('on');
    }


// section 05 ////////////////////////////////// interview /////////////////////////////////////////////
    if(scrollTop >= 6700){
        $('.interviewtypo2').addClass('on');
        $('.interviewds').addClass('on');
    }


// section 06 ////////////////////////////////// positioning /////////////////////////////////////////////
    if(scrollTop >= 7600){
        $('.positionds1').addClass('on');
        $('.positionds2').addClass('on');
    }
    if(scrollTop >= 8000){
        $('.positionds3').addClass('on');
    }


// section 07 ////////////////////////////////// information architecture /////////////////////////////////////////////
    if(scrollTop >= 8900){
        $('.iads1').addClass('on');
    }
    if(scrollTop >= 9000){
        $('.iads2').addClass('on');
    }



// section 08 ////////////////////////////////// sign up /////////////////////////////////////////////
    if(scrollTop >= 10000){
        $('.signupds1').addClass('on');
    }
    if(scrollTop >= 10800){
        $('.signupds2').addClass('on');
    }
    if(scrollTop >= 11150){
        $('.signuptypo2').addClass('on');
    }
    if(scrollTop >= 10000){
        $('.signupvdo').addClass('on');
    }



// section 09 ////////////////////////////////// home /////////////////////////////////////////////
    if(scrollTop >= 11850){
        $('.hometypo').addClass('on');
    }
    if(scrollTop >= 12750){
        $('.homeds1').addClass('on');
    }
    if(scrollTop >= 13750){
        $('.homeds2').addClass('on');
    }
    if(scrollTop >= 15050){
        $('.homeds3').addClass('on');
    }
    if(scrollTop >= 12800){
        $('.homeds4').addClass('on');
    }



// section 10 ////////////////////////////////// wireframe /////////////////////////////////////////////
    if(scrollTop >= 16300){
        $('.wireframeds').addClass('on');
    }
    if(scrollTop >= 16678){
        $('.wireframetypo').addClass('on');
    }




// section 11 ////////////////////////////////// livestory /////////////////////////////////////////////
    if(scrollTop >= 17360){
        $('.livestorytap').addClass('on');
    }
    if(scrollTop >= 17870){
        $('.livestorytypo').addClass('on');
    }
    if(scrollTop >= 18464){
        $('.livestoryds2').addClass('on');
        $('.livestoryds3').addClass('on');
    }
    if(scrollTop >= 19464){
        $('.livestorypic1').addClass('on');
    }
    if(scrollTop >= 19964){
        $('.livestorypic2').addClass('on');
    }




// section 12 ////////////////////////////////// mood /////////////////////////////////////////////
    if(scrollTop >= 21100){
        $('.moodtypo').addClass('on');
    }
    if(scrollTop >= 21000){
        $('.moodds1').addClass('on');
    }




// section 13 ////////////////////////////////// weather /////////////////////////////////////////////
    if(scrollTop >= 22427){
        $('.weatherds1').addClass('on');
    }
    if(scrollTop >= 23027){
        $('.weathertypo').addClass('on');
        $('.weatherpic').addClass('on');
    }
    if(scrollTop >= 23727){
        $('.weathermoc').addClass('on');
    }
    if(scrollTop >= 23900){
        $('.weatherds2').addClass('on');
    }
    if(scrollTop >= 24300){
        $('.weatherds3').addClass('on');
    }
    if(scrollTop >= 24492){
        $('.weatherds4').addClass('on');
    }




// section 15 ////////////////////////////////// booking /////////////////////////////////////////////
    if(scrollTop >= 26579){
        $('.bookingtypo').addClass('on');
    }
    if(scrollTop >= 26880){
        $('.bookingmoc2').addClass('on');
        $('.bookingmoc3').addClass('on');
    }

// section 16 ////////////////////////////////// footer /////////////////////////////////////////////
    if(scrollTop >= 28000){
        $('.footermoc').addClass('on');
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

        $('.').addClass('on');

 



    })();



})
