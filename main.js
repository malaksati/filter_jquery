//  filter task
/*var links = document.querySelectorAll(".links a")
var gallery = document.querySelectorAll(".gallery img")


for(var i = 0; i < links.length;i++){
    links[i].addEventListener("click", function(){
        for(var j = 0; j < gallery.length;j++){
            gallery[j].style.display = "none"
        }
        var element = document.querySelectorAll("."+this.getAttribute("data"))
        for(var e = 0; e < element.length;e++){
            element[e].style.display = "block"
        }
    })
}*/

// filter jquery
$( 'a' ).on( 'click', function() {
        var $fil = $(this).attr('data');
        if ( $fil == 'all' ) {
            $( '.js-filterable' ).removeClass( 'is-hidden' );    
        } else {
            $( '.js-filterable' ).addClass( 'is-hidden' );
            $( '.js-filterable[data-fil=' + $fil + ']' ).removeClass( 'is-hidden' );
        }
  });