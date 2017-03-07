$(function() {
	var topBtn = $('#topBtn'); 
	//最初はボタンを隠す
	topBtn.hide();
	//スクロールが300に達したらボタンを表示させる
	$(window).scroll(function () {
		if ($(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
});


/**
 * jQuery.rollover
 *
 * @version    1.0.4
 * @author     Hiroshi Hoaki <info@rewish.jp>
 * @copyright  2010-2013 Hiroshi Hoaki
 * @license    The MIT License
 * @link       http://rewish.jp/blog/releases/jquery_rollover
 *
 * Usage:
 * jQuery(document).ready(function($) {
 *   // <img>
 *   $('#nav a img').rollover();
 *
 *   // <input type="img">
 *   $('form input:img').rollover();
 *
 *   // set suffix
 *   $('#nav a img').rollover('_over');
 * });
	*
	* bodyのIDと画像のclassが同一の場合現在地表示をするよう改修
	*
 */
$.fn.rollover = function(suffix) {
		suffix = suffix || '_on';
		var check = new RegExp(suffix + '\\.\\w+$');
		var id = $('body').attr('id');
		return this.each(function() {
		var img = $(this);
		var src = img.attr('src');
		var imgClass = img.attr('class');
		if (check.test(src)) return;
		var _on = src.replace(/\.\w+$/, suffix + '$&');
		if (id != imgClass ){
			$('<img>').attr('src', _on);
			img.hover(
				function() { img.attr('src', _on); },
				function() { img.attr('src', src); }
			);
		} else {
			img.attr('src', _on);
		}
	});
};

$(function(){
	$("#contents a img , #footerIn .pagetop a img").rollover();
});
 


/*--------------------------------------------------------------------------*
 * smooth scroll
 *--------------------------------------------------------------------------*/
$(function(){
	$('a[href^=#]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
});


/*--------------------------------------------------------------------------*
 * html include
 *--------------------------------------------------------------------------*/
$(function(){
	$("#nav").load("include/nav.html");
});
