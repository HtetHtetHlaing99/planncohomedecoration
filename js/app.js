$(document).ready(function(){

    //Start Back to Top
     $(".btn-backtotops").hide();
     $(window).scroll(function(){
         let getscrolltop = $(this).scrollTop();
         //console.log(getscrolltop);

         if(getscrolltop >= 370) {
             $(".btn-backtotops").fadeIn(1000);
         }else {
             $(".btn-backtotops").fadeOut(1000);
         }
     });
    // End Back to Top 
    // Start Header
        // Start nav
            // for bugger
            $(".navbuttons").click(function(){
                $(".navbuttons").toggleClass("crossxs");
            });

            // for nav scroll
            $(window).scroll(function(){
                let getscrolltop = $(this).scrollTop();
                console.log(getscrolltop);

                if(getscrolltop >= 200) {
                    $(".navbar").addClass("navmenus");
                }else {
                    $(".navbar").removeClass("navmenus");
                }
            })
        //    End nav

    // End Header

    // Start Properties 
    $(".propertylists").click(function(){
        // for active items 
        // $(this).addClass("activeitems");
        // $(this).siblings().removeClass("activeitems");

        $(this).addClass("activeitems").siblings().removeClass("activeitems");

        // for filter 
        let getattvalue = $(this).attr("data-filter");
        // console.log(getattrvalue); 

        if(getattvalue === "all") {
            $(".filters").show("puff",500);
        }else {
            $(".filters").hide();

            $(".filters").not("."+getattvalue).hide("puff",500);

            $(".filters").filter("."+getattvalue).show("puff",500);
        }

    });

    // for image overlay (or) lightbox2
    lightbox.option({
        showImageNumberLabel:false
    });

    // End Properties 


// Start Adv Section 
$(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    //console.log(getscrolltop);

    if(getscrolltop >= 900) {
        $(".advimages").addClass("fromleft");
        $(".advtexts").addClass("fromright");
    }
    else {
        $(".advimages").removeClass("fromleft");
        $(".advtexts").removeClass("fromright");
    }
});
// End Adv section

// start footer section
const getyear = $("#getyear");
const getfullyear = new Date().getUTCFullYear();
getyear.text(getfullyear);
// end footer section 
});