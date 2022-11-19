/*******************************************
    Load Promo Bar
********************************************/
jQuery(document).ready(function($){
   //  $("#ppopup").attr("onclick","fivehourrole(this);");
   if($.cookie("enablechk") == 'valid' || $.cookie("enablechk") == 'expired' ){$(".customNd").attr('style','display:none'); }else{ $(".customNd").removeAttr('style');  }
    $(".datewiseenable .notice-dismiss").attr("onclick","dremoveThis(this);");
    $(".cookieRemoved .notice-dismiss").on("click",timingCookie);

    // Cache Plugin Notification
    if(!$.cookie("noticebarcookie")){ $(".datewiseenable").removeAttr("style"); }
    else{ $(".datewiseenable").css('display','none');}
    if(!$.cookie("promobarcookie")){ $(".promo-bar").show(); }

    // Beat Store Loading Window
    $("#beatstore_loader").delay(100).fadeOut(50);
});

/*******************************************
    Hide Promo Bar
********************************************/
function removeThis(field) {
    $(field).parent().hide(); jQuery.cookie("promobarcookie", "closed" , {expires: 1, path: '/'});
}

function cookieJ(){
    var date = new Date();     date.setTime(date.getTime() + (30 * 1000));
    jQuery.removeCookie('cookieadmin', { path: '/' });
    jQuery.cookie("expireCheck", "success" , { expires: date, path: '/' });
}

function  fivehourrole(field) {
    var date = new Date();
    date.setTime(date.getTime() + (18000 * 1000));
    jQuery.cookie("fivehour", "closed" , { expires: date, path: '/' });
}

function dremoveThis(field){
    $(field).hide();
    $(field).css('display','none');var date = new Date();
    date.setTime(date.getTime() + (120 * 1000));
    jQuery.cookie("noticebarcookie", "closed" , { expires: 14, path: '/'});
}

function timingCookie(){ jQuery.cookie("cookiebasehide", "closed" , { expires: 30, path: '/'});}

jQuery(document).ready(function($){
    /*******************************************
        Audio Player
        Debug Fix - https://wordpress.org/support/topic/jquery-ui-tabs-and-wp_enqueue_script
        Playlist - https://github.com/duozersk/mep-feature-playlist
    ********************************************/
    $('#mediawrapper audio').mediaelementplayer({
        playlist: true,
        audioHeight: 30,
        startVolume: 0.8, // Start Volume
        loop: 'true' ,
        playlistposition: 'bottom',
        features: ['playlistfeature', 'prevtrack', 'playpause', 'nexttrack', 'current', 'progress', 'duration', 'volume'],
        keyActions: [] });
    $("#mediawrapper ul li").hover(
        function(){
            $(this).stop().attr('title', '');
        } // ,
       /* function() { $(this).stop().attr(); } */
    );

    /*******************************************
        Homepage Banner & Product Page
    ********************************************/
    $('#Fader').easyFader({ slideDur: 6000, fadeDur: 800 });

    /*******************************************
        Photo & Video Gallery
    ********************************************/
    $("area[rel^='prettyPhoto']").prettyPhoto();  $(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal', slideshow:6000 });

    /*******************************************
        Faq Toggle
    ********************************************/
    $(".toggle_container").hide(); $("h4.trigger").click(function() { $(this).toggleClass("active").next().slideToggle("normal"); return false; });

    /*******************************************
        Video Resize
    ********************************************/
    $("#main").fitVids();
    $(".front_holder").fitVids();

    /*******************************************
        Scroll Up
    ********************************************/
    $.scrollUp( {
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: 'Top', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        scrollImg: true,            // Set true to use image
        });

    /*******************************************
        Remodel Window
    ********************************************/
    $(document).on('opening',      '.remodal', function ()  { console.log('opening'); });
    $(document).on('opened',       '.remodal', function ()  { console.log('opened'); });
    $(document).on('closing',      '.remodal', function (e) { console.log('closing' + (e.reason ? ', reason: ' + e.reason : '')); });
    $(document).on('closed',       '.remodal', function (e) { console.log('closed' + (e.reason ? ', reason: ' + e.reason : '')); });
    $(document).on('confirmation', '.remodal', function ()  { console.log('confirmation'); });
    $(document).on('cancellation', '.remodal', function ()  { console.log('cancellation'); });

    /*******************************************
        Scroll to Anchor
        docs.layerswp.com/doc/how-to-add-smooth-scrolling-for-anchor-links/
    ********************************************/
    $(document).on('click', '.frontpage_video_banner_div a[href^="#"], .topnav a[href^="#"], #front-page-banner a[href^="#"]', function () {
        event.preventDefault();
        var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
       /*  change this number to create the additional off set*/
        var customoffset = 85;
        $('html, body').animate({scrollTop:target_offset - customoffset}, 500);
    });

    /*******************************************
        Wow
    ********************************************/
    new WOW().init();

}); // End of Document Ready

/*******************************************
    Mobile Menu
********************************************/
function myFunction() {
    document.getElementsByClassName("topnav")[0].classList.toggle("responsive");
}

/*******************************************
    Scrollup v2.0.0
    Author: Mark Goodyear - http://markgoodyear.com -  Twitter: @markgdyr
    Git: https://github.com/markgoodyear/scrollup
    Copyright 2013 Mark Goodyear. Licensed under the MIT license http://www.opensource.org/licenses/mit-license.php
********************************************/
!function(a,b,c){a.fn.scrollUp=function(b){a.data(c.body,"scrollUp")||(a.data(c.body,"scrollUp",!0),a.fn.scrollUp.init(b))},a.fn.scrollUp.init=function(d){var e=a.fn.scrollUp.settings=a.extend({},a.fn.scrollUp.defaults,d),f=a("<a/>",{id:e.scrollName,href:"#top",title:e.scrollText}).appendTo("body");e.scrollImg||f.html(e.scrollText),f.css({display:"none",position:"fixed",zIndex:e.zIndex}),e.activeOverlay&&a("<div/>",{id:e.scrollName+"-active"}).css({position:"absolute",top:e.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+e.activeOverlay,zIndex:e.zIndex}).appendTo("body"),scrollEvent=a(b).scroll(function(){switch(scrollDis="top"===e.scrollFrom?e.scrollDistance:a(c).height()-a(b).height()-e.scrollDistance,e.animation){case"fade":a(a(b).scrollTop()>scrollDis?f.fadeIn(e.animationInSpeed):f.fadeOut(e.animationOutSpeed));break;case"slide":a(a(b).scrollTop()>scrollDis?f.slideDown(e.animationInSpeed):f.slideUp(e.animationOutSpeed));break;default:a(a(b).scrollTop()>scrollDis?f.show(0):f.hide(0))}}),f.click(function(b){b.preventDefault(),a("html, body").animate({scrollTop:0},e.topSpeed,e.easingType)})},a.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationInSpeed:200,animationOutSpeed:200,scrollText:"Scroll to top",scrollImg:!1,activeOverlay:!1,zIndex:2147483647},a.fn.scrollUp.destroy=function(d){a.removeData(c.body,"scrollUp"),a("#"+a.fn.scrollUp.settings.scrollName).remove(),a("#"+a.fn.scrollUp.settings.scrollName+"-active").remove(),a.fn.jquery.split(".")[1]>=7?a(b).off("scroll",d):a(b).unbind("scroll",d)},a.scrollUp=a.fn.scrollUp}(jQuery,window,document);

// Social Share Pop Up - Now Using Right Now
// <a href=" " onclick="return social_popup('http://www.facebook.com/share.php?u=<?php the_permalink(); ?>')" rel="nofollow" >Link</a>
function social_popup (url) { newwindow=window.open(url,'name','height=600,width=750'); if (window.focus) {newwindow.focus()} return false; }
// Unobtrusive Javascript Popup - Work with the class="popup"
// http://mar.anomy.net/entry/2004/02/09/12.17.47/
// Examples http://mar.anomy.net/files/2004/02/popupdemo/
var popupLinkConfig = new Array;
popupLinkConfig["popup"]    = new Array ( "", "width=700,height=600,scrollbar=yes,menubar=yes");
// popupLinkConfig["classname"] = new Array ( "targetname", "width=550,height=350,scrollbars=yes,resizable=yes,status=yes,toolbar=yes,location=yes,menubar=yes");
//popupLinkConfig["glossary"] = new Array ( "help", "width=550,height=350,resizable=yes");
window.onload = initPage;
function initPage() { initPopupLinks(); }
function initPopupLinks() {
      if (!document.getElementsByTagName) return true;
      var pageLinks = document.getElementsByTagName("a");
      for (var i = 0; i < pageLinks.length; i++)
      {
        if (((pageLinks[i].className != null) &&
             (pageLinks[i].className != "")) ||
            ((pageLinks[i].parentNode.className != null) &&
             (pageLinks[i].parentNode.className != "")))
        {
          var linkClass = " " + pageLinks[i].className + " ";
          if ((linkClass == "  ") && (pageLinks[i].parentNode.className != ""))
          {
            linkClass = " " + pageLinks[i].parentNode.className + " ";
          }
          for (var theKey in popupLinkConfig)
          {
            if (linkClass.indexOf(" " + theKey + " ") > -1)
            {
              if ((pageLinks[i].target == "") || (pageLinks[i].target == null))
              {
                pageLinks[i].target = (popupLinkConfig[theKey][0] != "") ? popupLinkConfig[theKey][0] : theKey;
              }
              pageLinks[i].settings = popupLinkConfig[theKey][1];
              pageLinks[i].onclick = popUp;
            }
          }
        }
      }
      return true;
}
function popUp() {
    newWin = window.open(this.href, this.target, this.settings); newWin.focus(); return false;
}

/*--------------------------------------------------*/
/*  Hide Status Link
/*  //jsfiddle.net/vipul09so/Lcryjga5/
/*  stackoverflow.com/questions/9851372/how-can-url-be-hidden-in-hyperlink-when-mouse-hover
/*--------------------------------------------------*/
$(document).ready(function () {
      setTimeout(function () {
            $('a[href]#no-link').each(function () {
                var href = this.href;
                $(this).removeAttr('href').css('cursor', 'pointer').click(function () {
                    if (href.toLowerCase().indexOf("#") >= 0) {
                    } else {
                        window.open(href, '_blank');
                    }
                });
            });
      }, 500);
});


/*******************************************
    Player Ajax Sorting Code
********************************************/

// Genre
var kl = jQuery.noConflict();

kl(function(){
    var lmn;

     kl("#generId li").click(function(e){

            e.preventDefault();
            var genrTxt = kl.trim(kl(this).find('a').text().toLowerCase());
         // Shows clear button
         kl("#filterLielm").removeClass("hide");
     var wWid = kl(window).width();
        kl(".mejs-playlist li").removeClass("hide");
        kl(".mejs-playlist li").removeAttr("style");
            kl(".mejs-playlist li").each(function(){

          var liAttr = kl(this).attr('data-genr').toLowerCase();
            var dk = liAttr.replace(", "," ");

                if(dk.indexOf(genrTxt) == -1){

                kl(this).addClass("hide");
                }
            });

         /* ---- Mobile Action Code --- */
         if(wWid <= 1024){
            kl("#beat_sort_bar a.firstULLIelement").click(function(){
                if(kl('#beat_sort_bar ul.secondULelement.hide').length){
                   kl('#beat_sort_bar ul.secondULelement').removeClass('hide');
                }
            });
            if(!kl('#beat_sort_bar ul.secondULelement.hide').length){
            kl('#beat_sort_bar ul.secondULelement').addClass('hide');
            }

        }
        });

        var taggenre =  kl("audio").attr("tag-genre");

        if(taggenre){
            var taggenreTxt = taggenre.trim(kl(this).find('a').text().toLowerCase());

        kl(".mejs-playlist li").removeClass("hide");
        kl(".mejs-playlist li").removeAttr("style");
            kl(".mejs-playlist li").each(function(){

          var liAttr = kl(this).attr('data-genr').toLowerCase();
            var dk = liAttr.replace(", "," ");

                if(dk.indexOf(taggenreTxt) == -1){

                kl(this).addClass("hide");
                }
            });
        }

// Category
var kh = jQuery.noConflict();
 kh("#catId li").click(function(e){
      e.preventDefault();
      var genrTxt = kh.trim(kl(this).find('a').text().toLowerCase());
      kh("#filterLielm").removeClass("hide");
      var wWid = kl(window).width();
      kh(".mejs-playlist li").removeClass("hide");
      kh(".mejs-playlist li").removeAttr("style");
      kh(".mejs-playlist li").each(function(){
          var liAttr = kh(this).attr('data-cat').toLowerCase();
          if(liAttr.indexOf(genrTxt) == -1){
            kh(this).addClass("hide");
          }
      });
      /* ---- Mobile Action Code --- */
      if(wWid <= 1024){
            kl("#beat_sort_bar a.firstULLIelement").click(function(){
                if(kl('#beat_sort_bar ul.secondULelement.hide').length){
                    kl('#beat_sort_bar ul.secondULelement').removeClass('hide');

                }

            });
            if(!kl('#beat_sort_bar ul.secondULelement.hide').length){
            kl('#beat_sort_bar ul.secondULelement').addClass('hide');
            }

        }
    });

    var termcat =  kh("audio").attr("tag-cat");

        if(termcat){
            var termcatTxt = termcat.trim(kl(this).find('a').text().toLowerCase());

        kh(".mejs-playlist li").removeClass("hide");
        kh(".mejs-playlist li").removeAttr("style");
            kh(".mejs-playlist li").each(function(){

          var liAttr = kl(this).attr('data-cat').toLowerCase();
            var dk = liAttr.replace(", "," ");

                if(dk.indexOf(termcatTxt) == -1){

                kl(this).addClass("hide");
                }
            });
        }

// Tags
var kd = jQuery.noConflict();
 kd("#tagId li").click(function(e){
      e.preventDefault();

      var genrTxt = kd.trim(kl(this).find('a').text().toLowerCase());
     kd("#filterLielm").removeClass("hide");
     var wWid = kl(window).width();
      kd(".mejs-playlist li").removeClass("hide");
      kd(".mejs-playlist li").removeAttr("style");
      kd(".mejs-playlist li").each(function(){
      var liAttr = kd(this).attr('data-tag').toLowerCase();
      if(liAttr.indexOf(genrTxt) == -1){
        kd(this).addClass("hide");
      }

      });
      /* ---- Mobile Action Code --- */
      if(wWid <= 1024){
            kl("#beat_sort_bar a.firstULLIelement").click(function(){
                if(kl('#beat_sort_bar ul.secondULelement.hide').length){
                    kl('#beat_sort_bar ul.secondULelement').removeClass('hide');
                }
            });
            if(!kl('#beat_sort_bar ul.secondULelement.hide').length){
            kl('#beat_sort_bar ul.secondULelement').addClass('hide');
            }

        }
    });

    var termtag =  kd("audio").attr("tag-tag");

        if(termtag){
            var termtagTxt = termtag.trim(kd(this).find('a').text().toLowerCase());
            kd(".mejs-playlist li").removeClass("hide");
            kd(".mejs-playlist li").removeAttr("style");
                kd(".mejs-playlist li").each(function(){

              var liAttr = kd(this).attr('data-tag').toLowerCase();
                var dk = liAttr.replace(", "," ");

                    if(dk.indexOf(termtagTxt) == -1){

                    kd(this).addClass("hide");
                    }
                });
        }

// Price
 var kdd = jQuery.noConflict();
 kdd("#priceId li").click(function(e){
      e.preventDefault();

      var genrTxt = kdd.trim(kl(this).find('a').text().toLowerCase());
      kdd("#filterLielm").removeClass("hide");
      var wWid = kl(window).width();
      kdd(".mejs-playlist li").removeClass("hide");
      kdd(".mejs-playlist li").removeAttr("style");
      kdd(".mejs-playlist li").each(function(){

      var liAttr = kdd(this).attr('dataprice');
      if(liAttr != ''){
      liAttr = kdd(this).attr('dataprice').toLowerCase();


          if(liAttr.indexOf(genrTxt) == -1){
              kdd(this).addClass("hide");
          }
      }
      });
      /* ---- Mobile Action Code --- */
      if(wWid <= 1024){
            kl("#beat_sort_bar a.firstULLIelement").click(function(){
                if(kl('#beat_sort_bar ul.secondULelement.hide').length){
                    kl('#beat_sort_bar ul.secondULelement').removeClass('hide');
                }
            });
            if(!kl('#beat_sort_bar ul.secondULelement.hide').length){
                kl('#beat_sort_bar ul.secondULelement').addClass('hide');
            }

        }
    });

    var termprice =  kdd("audio").attr("tag-price");

        if(termprice){
            var termpriceTxt = termprice.trim(kdd(this).find('a').text().toLowerCase());

        kdd(".mejs-playlist li").removeClass("hide");
        kdd(".mejs-playlist li").removeAttr("style");
            kdd(".mejs-playlist li").each(function(){

          var liAttr = kdd(this).attr('dataprice').toLowerCase();
            var dk = liAttr.replace(", "," ");

                if(dk.indexOf(termpriceTxt) == -1){

                kdd(this).addClass("hide");
                }
            });
        }

// Search
var sh = jQuery.noConflict();
sh('#playersearch').submit( function(e){
    e.preventDefault();
   var shtxt = sh(this).find(".beat-sort-search-input").val().toLowerCase();

    // Clear button
    sh("#filterLielm").removeClass("hide");
         sh(".mejs-playlist li").removeClass("hide");
         sh(".mejs-playlist li").removeAttr("style");


 sh(".mejs-playlist li").each(function(){

var chkpost = sh(this).text()+sh(this).attr('data-tag')+sh(this).attr('data-cat')+sh(this).attr('dataprice')+sh(this).attr('data-genr');
chkpost = chkpost.toLowerCase();
chkpost= chkpost.replace(", "," ");
//alert(chkpost);
  if(chkpost.indexOf(shtxt) == -1){

        sh(this).addClass("hide");
      }
  });

  });
 // Category page, taxonomy page, tag page sorting code
 var generList = sh("#jio").attr('datagen');
 var tagList = sh("#jio").attr('datatag');
 var catList = sh("#jio").attr('datacat');
 var priceList = sh("#jio").attr('dataprice');

if(generList){ sh(".mejs-playlist li").each(function(){
var genlist = generList.toLowerCase();
 var liAttr = sh(this).attr('data-genr').toLowerCase();
      var dk = liAttr.replace(", "," ");

        if(dk.indexOf(genlist) == -1){

         sh(this).addClass("hide");
       }

});}

//if(tagList != ''){
if(tagList){
    sh(".mejs-playlist li").each(function(){

        var taList = tagList.toLowerCase();

        var liAttr = sh(this).attr('data-tag').toLowerCase();

        if(taList){

            if(liAttr.indexOf(taList) == -1){
                sh(this).addClass("hide");
            }
        }

    });
}
if(catList){

    sh(".mejs-playlist li").each(function(){

        var catuList = catList.toLowerCase();

        var liAttr = sh(this).attr('data-cat').toLowerCase();

        if(liAttr.indexOf(catuList) == -1){
            sh(this).addClass("hide");
        }

    });
}
if(priceList){
    sh(".mejs-playlist li").each(function(){
    var pricuList = priceList.toLowerCase();
    var liAttr = sh(this).attr('dataprice').toLowerCase();

            //alert(liAttr+pricuList);
            if(liAttr.indexOf(pricuList) == -1){

             sh(this).addClass("hide");
           }
    });
}

});

var kopmm = jQuery.noConflict();
kopmm(document).ready(function(){


    //alert(typeof bh);
    var bh = kopmm("audio#mejs").attr('autoplay');
    if (typeof bh !== 'undefined' && bh !== false) {
        var did = kopmm(".mejs-playlist ul li:first-child").attr('databid');
        kopmm(".mejs-playlist ul li:first-child").addClass("currentTrack");
        kopmm(".mejs-playlist ul li:first-child #bars").removeClass("vizhidden");
        updateCount(did);

   } else {

       //alert("d");
        kopmm(".mejs-playlist li:first-child").removeClass('current');
        kopmm(".mejs-play").addClass("Tempr");

         kopmm(".Tempr").click(function(){

           // alert(kopmm(".Tempr").length);
            if(kopmm(".Tempr").length){

                  // This line added to remove the "current" class from the first beat when paused
                  sh(".mejs-playlist li:first-child").removeClass('current');

                  kopmm(".mejs-playlist li:first-child #bars").removeClass("vizhidden");
                  kopmm(".mejs-playlist li:first-child").addClass("current");
                  kopmm(this).removeClass("Tempr");
            }
    //alert("2");
            });
   }


});

/* Update Count Code */
function updateCount(pid){
    var pj = jQuery.noConflict();
    if(pid) {

             var aj = websiteurl;
            pj.ajax( {
                    url: aj,
                    type: 'POST',
                    data: {
                         'action': 'playcount_ajax',
                         'postid':pid
                    },
                    beforeSend : function () { },
                    success:     function (data) { /* alert(data); */ },
                    error :      function (jqXHR, textStatus, errorThrown) {
                        // alert(pj.parseJSON(jqXHR.responseText) + ' :: ' + textStatus + ' :: ' + errorThrown);
                        //console.log(jqXHR);
                        console.log("Succ");
                    }
        });
    }
}

/* Clear Button for Ajax Sorting */
function clearFilters(){
    var wef = jQuery.noConflict();
    var vvcWD = wef(window).width();
    wef(function(){
        wef(".mejs-playlist li").each(function(){
            wef(this).removeClass('hide');
        });
        wef("#filterLielm").addClass("hide");
        if(vvcWD <=1024){

           wef("#beat_sort_bar a.firstULLIelement").click(function(){
                if(wef('#beat_sort_bar ul.secondULelement.hide').length){
                    wef('#beat_sort_bar ul.secondULelement').removeClass('hide');
                }
            });
            if(!wef('#beat_sort_bar ul.secondULelement.hide').length){
                wef('#beat_sort_bar ul.secondULelement').addClass('hide');
            }
        }
    });
}

// Sticky Menu
$(window).scroll(function() {

     if ($(this).scrollTop() > 500){

         $('.navigation_holder').addClass("sticky animated fadeInDown");

     } else {

          $('.navigation_holder').removeClass("sticky animated fadeInDown");
    }
});


/*******************************************
    Ajax Modal
********************************************/
var mkl = jQuery.noConflict();
mkl(document).ready(function(){
    mkl(".ajax-modal-link").click(function(){
        var post_link = mkl(this).attr("data-href");
        mkl("#remodal-item-view-content").html("<div class='modal-load-icon'></div>");
        mkl("#remodal-item-view-content").load(post_link);
    });
});
