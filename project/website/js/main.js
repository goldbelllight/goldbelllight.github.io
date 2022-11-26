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





        if(scrollTop >= 1330){

            $('.overview').addClass('on');
        }


        if(scrollTop >= 1950){

            $('.mockup').addClass('on');
        }


        if(scrollTop >= 4027){

            $('.grid').addClass('on');
        }


        if(scrollTop >= 3272){

            $('.ex1').addClass('on');
        }
        if(scrollTop >= 3290){

            $('.ex2').addClass('on');
        }

        if(scrollTop >= 4630){

            $('.ex3').addClass('on');
        }

        if(scrollTop >= 5250){

            $('.hometypo').addClass('on');
        }
        if(scrollTop >= 5500){

            $('.moc1').addClass('on');
        }
        if(scrollTop >= 6800){

            $('.moc2').addClass('on');
        }

        if(scrollTop >= 6800){

            $('.moc3').addClass('on');
        }
        if(scrollTop >= 7300){

            $('.moc4').addClass('on');
        }
        if(scrollTop >= 7300){

            $('.moc5').addClass('on');
        }

        if(scrollTop >= 8850){

            $('.lighting').addClass('on');
        }
        
        if(scrollTop >= 9700){

            $('.typo5').addClass('on');
        }
        if(scrollTop >= 9700){

            $('.typo52').addClass('on');
        }
        if(scrollTop >= 11900){

            $('.typo53').addClass('on');
        }
        if(scrollTop >= 10700){

            $('.about').addClass('on');
        }
        if(scrollTop >= 11800){

            $('.aboutmoc2').addClass('on');
        }
        if(scrollTop >= 12600){

            $('.aboutmoc3bg').addClass('on');
        }

        if(scrollTop >= 15056){

            $('.fonttypo1').addClass('on');
        }

        if(scrollTop >= 15056){

            $('.fonttypo2').addClass('on');
        }

        if(scrollTop >= 15056){

            $('.fonttypo3').addClass('on');
        }

        if(scrollTop >= 16257){

            $('.productds1').addClass('on');
        }
        if(scrollTop >= 15708){

            $('.productds2').addClass('on');
        }
        if(scrollTop >= 16270){

            $('.producttypo').addClass('on');
        }
        if(scrollTop >= 16624){

            $('.productmoc1').addClass('on');
        }
        if(scrollTop >= 18700){

            $('.productmoc2').addClass('on');
        }
        if(scrollTop >= 17600){

            $('.productds3').addClass('on');
        }
        if(scrollTop >= 18400){

            $('.productds4').addClass('on');
        }
        if(scrollTop >= 16500){

            $('.productlight1').addClass('on');
        }
        if(scrollTop >= 16500){

            $('.productlight2').addClass('on');
        }


        if(scrollTop >= 22500){

            $('.presstypo').addClass('on');
        }
        if(scrollTop >= 22400){

            $('.pressmoc1').addClass('on');
        }
        if(scrollTop >= 22000){

            $('.pressmoc2').addClass('on');
        }
        if(scrollTop >= 23150){

            $('.pressmoc3').addClass('on');
        }

        if(scrollTop >= 25700){

            $('.mypagetypo').addClass('on');
        }
        if(scrollTop >= 25950){

            $('.mypagetypo2').addClass('on');
        }
        if(scrollTop >= 24569){

            $('.mypagemoc2').addClass('on');
        }
        if(scrollTop >= 25600){

            $('.mypagemoc1').addClass('on');
        }

        if(scrollTop >= 26342){

            $('.mb').addClass('on');
        }
        if(scrollTop >= 26400){

            $('.md').addClass('on');
        }
        if(scrollTop >= 28400){

            $('.md2').addClass('on');
        }
        if(scrollTop < 28600){

            $('.md2').removeClass('on');
        }

        if(scrollTop >= 16100){

            $('.productlight1').addClass('on');
        }
        if(scrollTop >= 16100){

            $('.productlight2').addClass('on');
        }
        if(scrollTop >= 5500){

            $('.turnon').addClass('on');
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

        $('.title').addClass('on');

 



    })();



})
