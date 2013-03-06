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

    $('.nav-tabs').on('click', 'a', function() {
        $(this).parents("ul").find(".prev-tab").removeClass("prev-tab");
        $(this).parents().closest("li").prev().addClass("prev-tab");
    });
    /*=================================
    =            Item page            =
    =================================*/


    var tpl = '<ul class="nav nav-tabs" id="item_htabs">' + '<li><a href="#description" data-toggle="tab">Описание</a></li>' + '<li><a href="#gallery" data-toggle="tab">Галерея</a></li>' + '<li><a href="#video" data-toggle="tab">Видео</a></li>' + '</ul>';
    var target = $('.cck-line-bottom .seb_css3');
        target.children().wrapAll('<div class="tab-content" />');
        target.find('.cck_description').attr('id','description');
        target.find('.cck_company_video').attr('id','video');
        target.find('.cck_cat_gallery').attr('id','gallery');
        target.each(function() {
            $(this).find('.cck_contents').addClass('tab-pane');
        });
    $('.cck-line-bottom .seb_css3').prepend(tpl);
        $('#item_htabs a:first').tab('show');
});


