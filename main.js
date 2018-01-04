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
    .to('.pot-lid', 0.4, {x:-300, y:-850, rotation:-13, ease:"Expo.easeOut"}, 'start+=0.1')
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


    //FOOTER HOVER
    var footerHover = new TimelineMax({paused:true});
    footerHover.to('.footer-hat', 0.1, {scale:0.9, transformOrigin:"50% 100%"}, 0)
    .to('.footer-hat', 0.1, {scale:1, transformOrigin:"50% 100%"});
    
    footerHover.timeScale(1.25);

    $(".footer-logo").hover(function(){
        footerHover.play();
      },function(){
        footerHover.reverse();
    })




    //BREAKDOWN
    /* Reference:
    https://stackoverflow.com/questions/45192723/how-to-cycle-through-divs
    https://jsfiddle.net/6karx4v0/1/ */


    $(document).ready(function(){

            $(".cycle-wrapper").first().show();
            $(".cook").click(function cycle() {
              var start=0, step=1;
              var currentItems = $(".cycle-wrapper:visible").hide();
              var currentLast = (this.id==="prev" ? currentItems.first() : currentItems.last());
              var nextItems = (this.id==="prev" ? currentLast.prevAll() : currentLast.nextAll());

              if (nextItems.length === 0) { //if the last set of divs has been reached, loop around
                var itemsLength = $(".cycle-wrapper").length;
                if (this.id==="prev") {start=itemsLength-step; step=itemsLength;} //determine wich way to loop around
                nextItems = $(".cycle-wrapper").slice(start,step); //loop around
              } else {nextItems=nextItems.slice(start,step);} //if the next divs are a full set, select the next set
              nextItems.show(); //show the next set
            }).click(); //initialize divs at pageload
    });
    
/*

$(".cycle-wrapper").first().show();

            setInterval(cycle,1000);

var i = 0, howManyTimes = 4;
function cycle() {
    $(".cook").click(function() {
        var start=0, step=1;
        var currentItems = $(".cycle-wrapper:visible").hide();
        var currentLast = (this.id==="prev" ? currentItems.first() : currentItems.last());
        var nextItems = (this.id==="prev" ? currentLast.prevAll() : currentLast.nextAll());
        
        if (nextItems.length === 0) { //if the last set of divs has been reached, loop around
          var itemsLength = $(".cycle-wrapper").length;
          if (this.id==="prev") {start=itemsLength-step; step=itemsLength;} //determine wich way to loop around
          nextItems = $(".cycle-wrapper").slice(start,step); //loop around
        } else {nextItems=nextItems.slice(start,step);} //if the next divs are a full set, select the next set
        nextItems.show(); //show the next set
      }).click(); //initialize divs at pageload
    i++;
    if( i < howManyTimes ){
        setTimeout( cycle, 1000 );
    }
}
cycle();

$(".icon-1").animate({opacity: '0'});
*/



/*

var cooking = new TimelineMax({paused:true});
cooking.to('.breakdown-icon', 1, {ease:"Back.easeIn", opacity:0},0.2);

$('#next').on('click', function(event) {
    cooking.play();
});
*/
              

