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
        if(scrollTop >= 800){

            $('.mainds3').addClass('on');
        }
        if(scrollTop >= 800){

            $('.mainds5').addClass('on');
        }




    // section 03 //////////////////////////////// overview //////////////////////////////////////////
        if(scrollTop >= 3434){

            $('.overviewtypo1').addClass('on');
        }
        if(scrollTop >= 3434){

            $('.overviewtypo2').addClass('on');
        }
        if(scrollTop >= 4600){

            $('.overviewmoc1').addClass('on');
        }
        if(scrollTop >= 5200){

            $('.overviewmoc2').addClass('on');
        }
        if(scrollTop >= 6300){

            $('.overviewtypo3').addClass('on');
        }


    // section04 /////////////////////////////////// content 1 //////////////////////////////////////
        if(scrollTop >= 7700){

            $('.cont1moc1').addClass('on');
        }
        if(scrollTop >= 9086){

            $('.cont1moc2').addClass('on');
        }
        if(scrollTop >= 8316){

            $('.cont1typo1').addClass('on');
        }
        if(scrollTop >= 9086){

            $('.cont1typo2').addClass('on');
        }
        if(scrollTop >= 11338){

            $('.cont1typo3').addClass('on');
        }
        if(scrollTop >= 12090){

            $('.cont1ds3').addClass('on');
            $('.cont1moc4').addClass('on');
        }


    // section04 /////////////////////////////////// grid //////////////////////////////////////
        if(scrollTop >= 13600){

            $('.gridds1').addClass('on');
            $('.gridds2').addClass('on');
        }


    ///////////////////////////////////// content 2 //////////////////////////////////////
        if(scrollTop >= 15400){

            $('.cont2moc1').addClass('on');
        }
        if(scrollTop >= 16100){

            $('.cont2typo1').addClass('on');
        }
        if(scrollTop >= 16500){

            $('.cont2moc2').addClass('on');
        }
        if(scrollTop >= 17700){

            $('.cont2moc3').addClass('on');
        }
        if(scrollTop >= 19400){

            $('.cont2shadow').addClass('on');
        }
        if(scrollTop >= 19400){

            $('.cont2shadow2').addClass('on');
        }
        if(scrollTop >= 19400){

            $('.cont2moc4').addClass('on');
        }
        if(scrollTop >= 19710){

            $('.cont2moc5').addClass('on');
        }


        ///////////////////////////////////// typography //////////////////////////////////////
        if(scrollTop >= 21300){

            $('.typods2').addClass('on');
        }



    ///////////////////////////////////////////content3//////////////////////////////////////////
        if(scrollTop >= 23200){

            $('.cont3moc2').addClass('on');
        }
        if(scrollTop >= 23300){

            $('.cont3typo1').addClass('on');
        }
        if(scrollTop >= 24500){

            $('.cont3moc1').addClass('on');
        }
        if(scrollTop >= 25200){

            $('.cont3ds1').addClass('on');
        }
        if(scrollTop >= 25776){

            $('.cont3moc4').addClass('on');
        }
        if(scrollTop >= 25776){

            $('.cont3typo2').addClass('on');
        }
        if(scrollTop >= 26770){

            $('.cont3moc3').addClass('on');
        }
        if(scrollTop >= 26770){

            $('.cont3typo3').addClass('on');
        }
        if(scrollTop >= 25200){

            $('.cont3ds1').addClass('on');
        }



///////////////////////////////////////////  sitemap  //////////////////////////////////////////
        if(scrollTop >= 23200){

            $('.cont3moc2').addClass('on');
        }



////////////////////////////////////////section10////content4/////////////////////////////////////////////

    if(scrollTop >= 30100){

        $('.cont4ds1').addClass('on');
        $('.cont4ds2').addClass('on');
        $('.cont4ds3').addClass('on');
        $('.cont4ds4').addClass('on');
        $('.cont4ds5').addClass('on');
        $('.cont4ds6').addClass('on');
        $('.cont4ds7').addClass('on');
        $('.cont4ds8').addClass('on');
        $('.cont4ds9').addClass('on');
    }
    if(scrollTop >= 31045){

        $('.cont4typo1').addClass('on');
    }
    if(scrollTop >= 31414){

        $('.cont4moc1').addClass('on');
        $('.cont4moc2').addClass('on');
        $('.cont4moc3').addClass('on');
        $('.cont4moc4').addClass('on');
    }

////////////////////////////////////////section13////footer/////////////////////////////////////////////
    if(scrollTop >= 36348){

        $('.footer1').addClass('on');
    }
    if(scrollTop >= 36843){

        $('.footer2').addClass('on');
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
