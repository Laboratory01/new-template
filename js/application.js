/**
 * J!Blank Template for Joomla by Joomla-book.ru
 * @category   JBlank
 * @author     smet.denis <admin@joomla-book.ru>
 * @copyright  Copyright (c) 2009-2012, Joomla-book.ru
 * @license    GNU GPL
 * @link       http://joomla-book.ru/projects/jblank JBlank project page
 */

if (typeof jQuery != 'undefined') {
    jQuery.noConflict(); // no conflicts with mootools an other JS libs

    jQuery(function ($) {
        // add class for CSS "event" document.ready
        $('html').addClass('jready').removeClass('no-js');

        // jquery linkExternal
        if (typeof $.fn.linkExternal != 'undefined') {
            $('.content a:not(.content a img)').linkExternal();
        }

        // jquery placeholder
        if (typeof $.fn.placeholder != 'undefined') {
            $('input[placeholder], textarea[placeholder]').placeholder();
        }

        // add zebra to table
        $('.content tr:not(thead tr, tfoot tr):odd, li:odd').addClass('odd');
    });
}


jQuery(document).ready(function($) {
    $('select').each(function() {
        var $this = $(this),
            elm = $this.find('option:selected').text(),
            el = '<div id="sel" style="position: absolute;">';
        $this.parent('.value').prepend(el + elm);
    });
    $('select').change(function() {
        var el  = "";
            str = $(this).find('option:selected').text();
        $(this).parent('.value').find('div #sel').html('');
        $(this).parent().find('div').val(str);
    });
var htabs = function(e) {
        var $target = $(e.currentTarget);
        $target.parents("ul").find(".prev-tab").removeClass("prev-tab");
        $target.parents().closest("li").prev().addClass("prev-tab");
    }

    // $('ul.menu li:first').addClass('active');
    // htabs($('.active'));
    $('.active').prev().addClass("prev-tab");
    $('.nav-tabs').on('click', 'a', htabs);
    /*=================================
    =            Item page            =
    =================================*/


    var tpl = '<ul class="nav nav-tabs" id="item_htabs">' + '<li><a href="#description" data-toggle="tab">Описание</a></li>' + '<li><a href="#gallery" data-toggle="tab">Галерея</a></li>' + '<li><a href="#video" data-toggle="tab">Видео</a></li>' + '</ul>';
    var target = $('.cck-line-bottom .seb_css3');
        if (target.find('.cck_description').text() != '') {
           
            target.find('.cck_description').attr('id','description');
        } else {
             console.log(target.find('.cck_description').text());
            target.prepend('<div class="cck_description" id="description"><h4>К сожалению, описание отсутствует.</h3>')
        }

        if (target.find('.cck_company_video').text() != '') {
            target.find('.cck_company_video').attr('id','video');
        } else {
            target.prepend('<div class="cck_company_video" id="video"><h4>К сожалению, видео отсутствует.</h3>')
        }

        if (target.find('.cck_cat_gallery').text() != '') {
            target.find('.cck_cat_gallery').attr('id','gallery');
        } else {
            target.prepend('<div class="cck_cat_gallery" id="gallery"><h4>К сожалению, фотографии отсутствуют.</h3>')
        }
        target.children().wrapAll('<div class="tab-content" />');
        
        target.each(function() {
            $(this).find('.cck_contents').addClass('tab-pane');
        });

        $('.cck-line-bottom .seb_css3').prepend(tpl);
        $('#item_htabs a:first').tab('show');
        $('#htabs_comment a:first').tab('show');
        

        /*==========  Add to prev li another class (background)  ==========*/
        
        $('.nav-tabs').on('click', 'a', function() {
            $(this).parents("ul").find(".prev-tab").removeClass("prev-tab");
            $(this).parents().closest("li").prev().addClass("prev-tab");
            // console.log($(this).parents().closest("li").prev());
        });

       // $('ul.nav li:first').addClass('active');
  
});


