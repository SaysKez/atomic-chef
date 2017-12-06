$(document).ready(function() {
    /*
    $('.html').animate( { height: '180px' }, 1500);
    $('.css').animate( { height: '180px' }, 1500);
    $('.photoshop').animate( { height: '220px' }, 1500);
    $('.illustrator').animate( { height: '100px' }, 1500);
    $('.javascript').animate( { height: '90px' }, 1500);
        */
        
        $( '.subtext' ).hover(
            function() {
               $('.highlight').css("background","#CD424A");
               $('.highlight').css("color", "#FFF");
            }, function() {
               $('.highlight').css("background","#FFF");
               $('.highlight').css("color", "#212121");
            }
        );
        
    });