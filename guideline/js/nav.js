$(function(){
    // 
    var duration = 300;

    // aside ----------------------------------------
	
	var $nav = $('nav');
	var $navButton = $nav.find('button');
	
	$navButton.on('click',function(){
		$nav.toggleClass('open');
		if($nav.hasClass('open')){
			$nav.stop(true).animate({
				left:'0px'
			},duration,'easeOutBack');
			$navButton.find('img')
				.attr('src','img/btn_close.png');
		}else{
			$nav.stop(true).animate({
				left:'-350px'
			},duration,'easeInBack');
			$navButton.find('img')
				.attr('src','img/btn_open.png');
		}
	});
	
	function smoothScroll(){
		 // スクロールのオフセット値
  		var offsetY = -30;
  		// スクロールにかかる時間
  		var time = 400;
 		 // ページ内リンクのみを取得
 		 $('a[href^=#]').click(function() {
 		 	// 移動先となる要素を取得
 		 	var target = $(this.hash);
 		 	if (!target.length) return ;
 		 	// 移動先となる値
 		 	var targetY = target.offset().top+offsetY;
 		 	// スクロールアニメーション
 		 	$('html,body').animate({scrollTop: targetY}, time, 'swing');
 		 	// ハッシュ書き換えとく
 		 	//window.history.pushState(null, null, this.hash);
			window.history.replaceState(null, '', location.pathname + location.search);
 		 	// デフォルトの処理はキャンセル
 		 	return false;
 		 });
	}
	
	smoothScroll();
	
	//$asideButton.on('click',function(){
//		if($aside.hasClass('open')){
//			$aside.removeClass('open');
//			$asideButton.find('img')
//				.attr('src','img/btn_close.png');
//		}else{
//			$aside.addClass('open');
//			$asideButton.find('img')
//				.attr('src','img/btn_open.png');
//		}
//	});
	
	
	

});