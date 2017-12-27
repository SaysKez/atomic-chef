$(document).ready(function() {
    /*
    $('.html').animate( { height: '180px' }, 1500);
    $('.css').animate( { height: '180px' }, 1500);
    $('.photoshop').animate( { height: '220px' }, 1500);
    $('.illustrator').animate( { height: '100px' }, 1500);
    $('.javascript').animate( { height: '90px' }, 1500);
        */
        
        $( '.chemical-symbol' ).hover(
            function() {
               $('.symbol-def').css("background","#CD424A");
               $('.symbol-def').css("color", "#FFF");
            }, function() {
               $('.symbol-def').css("background","#FFF");
               $('.symbol-def').css("color", "#212121");
            }
        );

    $( '.element-name' ).hover(
        function() {
           $('.element-name-def').css("background","#CD424A");
           $('.element-name-def').css("color", "#FFF");
        }, function() {
           $('.element-name-def').css("background","#FFF");
           $('.element-name-def').css("color", "#212121");
        }
    );

    $( '.atomic-number' ).hover(
        function() {
           $('.atomic-number-def').css("background","#CD424A");
           $('.atomic-number-def').css("color", "#FFF");
        }, function() {
           $('.atomic-number-def').css("background","#FFF");
           $('.atomic-number-def').css("color", "#212121");
        }
    );

});

$( ".mobile-nav" ).click(function() {
    $( ".nav-content" ).toggle();
  });


    //LANDING PAGE ANIMATION
    var potLid = new TimelineMax({repeat:2, yoyo:true, paused:true});
    potLid.add('start', 0)
    potLid.fromTo('.pot-lid', 0.2, {rotation:3, transformOrigin: "50% 50%"}, {rotation:-3, transformOrigin: "50% 50%"}, 'start')
    .to('.pot-lid', 0.2, {rotation:0, y:5, transformOrigin: "50% 50%"})
    
    potLid.timeScale(2);

    var lidBlow = new TimelineMax({paused:true});
    lidBlow.add('start',0)
    .to('.pot-lid', 0.3, {y:-550, x:-100, rotation:-10, ease:"Expo.easeOut"}, 'start')  
    .to('.pot-lid', 0.2, {x:-300, y:-625, rotation:-13, ease:"Expo.easeOut"}, 'start+=0.1')
    .fromTo('.logo-cloud', 0.3, {display:"block", transformOrigin:"50% 100%", scaleY:0, ease:"Back.easeOut"}, {display:"block", transformOrigin:"50% 100%", scaleY:1, ease:"Back.easeOut"}, 'start+=0.05')
    .fromTo('.logo-banner', 0.3, {display:"block", transformOrigin:"50% 50%", scaleX:0, ease:"Back.easeOut"}, {display:"block", transformOrigin:"50% 50%", scaleX:1, ease:"Back.easeOut"}, 'start+=0.15')
    ;
    

    var atomicExp = new TimelineMax();
    atomicExp.add(potLid.play())
    .add(lidBlow.play())

    atomicExp.timeScale(1);    


    //LANDING PAGE HOVER
    var bannerHover = new TimelineMax({yoyo:true, paused:true});
    bannerHover.to('.logo-banner', 0.1, {rotation:3, transformOrigin: "50% 50%"}, 0)
    .to('.logo-banner', 0.1, {rotation:-3, transformOrigin: "50% 50%"})
    .to('.logo-banner', 0.1, {rotation:0, transformOrigin: "50% 50%"})
    
    bannerHover.timeScale(1.25);

    $(".logo-banner").hover(function(){
        bannerHover.play();
      },function(){
        bannerHover.reverse();
    })




    /*
    function getTimeline(){
        var potLid = new TimelineMax({repeat:2, yoyo:true});
        potLid.add('start', 0)
        potLid.fromTo('.pot-lid', 0.2, {rotation:3, transformOrigin: "50% 50%"}, {rotation:-3, transformOrigin: "50% 50%"}, 'start')
        .to('.pot-lid', 0.2, {rotation:0, y:5, transformOrigin: "50% 50%"})
        
        potLid.timeScale(1);

        return potLid;
    }

    function init(){
        atomicExp
           .add(getTimeline(), 'scene-intro');
     }
     init();
     */