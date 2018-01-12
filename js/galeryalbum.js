        jQuery(document).ready(function ($) {
            var options = {
                $AutoPlay: true,

                $PauseOnHover: true,                               //[Optional] Whether to pause when mouse over if a slideshow is auto playing, default value is false

                $ArrowKeyNavigation: true,   			            //Allows arrow key to navigate or not
                $SlideWidth: 1100,                                   //[Optional] Width of every slide in pixels, the default is width of 'slides' container
                $SlideHeight: 550,                                  //[Optional] Height of every slide in pixels, the default is width of 'slides' container
                $SlideSpacing: 80, 					                //Space between each slide in pixels
                $DisplayPieces: 2,                                  //Number of pieces to display (the slideshow would be disabled if the value is set to greater than 1), the default value is 1
                $ParkingPosition: 300,                                //The offset position to park slide (this options applys only when slideshow disabled).

                $ArrowNavigatorOptions: {                       //[Optional] Options to specify and enable arrow navigator or not
                    $Class: $JssorArrowNavigator$,              //[Requried] Class to create arrow navigator instance
                    $ChanceToShow: 2,                               //[Required] 0 Never, 1 Mouse Over, 2 Always
                    $AutoCenter: 2,                                 //[Optional] Auto center arrows in parent container, 0 No, 1 Horizontal, 2 Vertical, 3 Both, default value is 0
                    $Steps: 1                                       //[Optional] Steps to go for each navigation request, default value is 1
                }
            };
			<!--Galeria 1-->
            var jssor_slider1 = new $JssorSlider$("slider1_container", options);

            function ScaleSlider() {
                var parentWidth = jssor_slider1.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider1.$SetScaleWidth(Math.min(parentWidth, 1200));
                else
                    window.setTimeout(ScaleSlider, 30);
            }
            ScaleSlider();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }
			
			<!--Galeria 2-->
			var jssor_slider2 = new $JssorSlider$("slider2_container", options);

            function ScaleSlider2() {
                var parentWidth = jssor_slider2.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider2.$SetScaleWidth(Math.min(parentWidth, 1200));
                else
                    window.setTimeout(ScaleSlider2, 30);
            }
            ScaleSlider2();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider2);
            }
			
			<!--Galeria 3-->
			var jssor_slider3 = new $JssorSlider$("slider3_container", options);

            function ScaleSlider3() {
                var parentWidth = jssor_slider3.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider3.$SetScaleWidth(Math.min(parentWidth, 1200));
                else
                    window.setTimeout(ScaleSlider3, 30);
            }
            ScaleSlider3();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider2);
            }
			
			
			<!--Galeria 4-->
			var jssor_slider4 = new $JssorSlider$("slider4_container", options);

            function ScaleSlider4() {
                var parentWidth = jssor_slider4.$Elmt.parentNode.clientWidth;
                if (parentWidth)
                    jssor_slider4.$SetScaleWidth(Math.min(parentWidth, 1200));
                else
                    window.setTimeout(ScaleSlider4, 30);
            }
            ScaleSlider4();

            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider2);
            }
			
        });