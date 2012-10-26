  var win = currentWindow;

 var label1 = Titanium.UI.createLabel ( {
     color : '#999' ,
     text : 'portrait' ,
     font : { fontSize : 20 , fontFamily : 'Helvetica Neue' } ,
     textAlign : 'center' ,
     width : 'auto'
 } ) ;

 win.backgroundColor = '#fff' ;
 win.add(label1) ;

 win.orientationModes=[ 
     Titanium.UI.PORTRAIT , 
     Titanium. UI . UPSIDE_PORTRAIT , 
     Titanium. UI . LANDSCAPE_LEFT , 
     Titanium. UI . LANDSCAPE_RIGHT , 
     Titanium. UI . FACE_UP , 
     Titanium. UI . FACE_DOWN
 ] ;

 function getOrientation ( o ) {
     switch ( o ) {
         case Titanium. UI . PORTRAIT : { return 'portrait' ; }
         case Titanium. UI . UPSIDE_PORTRAIT : { return 'portrait' ; }
         case Titanium. UI . LANDSCAPE_LEFT : { return 'landscape' ; }
         case Titanium. UI . LANDSCAPE_RIGHT : { return 'landscape' ; }
     }
 }

 Ti. Gesture . addEventListener ( 'orientationchange' , function ( e ) {
     var orientation = getOrientation ( e. orientation ) ;
     if ( orientation == 'portrait' ) {
         win. backgroundColor = '#fff' ;
         label1. text = 'portrait' ;
     } else {
         win. backgroundColor = '#000' ;
         label1. text = 'landscape' ;
     }

 } ) ; 