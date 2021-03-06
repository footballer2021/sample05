"use strict";

alert("デモサイトです");

$(function(){

	function loadImages(){

		var srcList = []; //画像の参照先を格納する配列
		var loadIndex = 0; //読み込み画像インデックス
        
		//画像を表示する
		function open(){
			$('.container, .main, .footer').css({
                'display': 'block',
				'opacity': 0
			}).animate({'opacity': 1}, 1200);
		};

		//すべての画像の読み込み完了
		function complete(){
			$('#loading').fadeOut(1200, function(){
				$('#loading').remove();
				open();
			});
		};

		//画像の読み込み完了
		function loaded(){
			if( loadIndex != (srcList.length-1) ){
				loadIndex++;
				imgLoad();
                
			}else{
				complete();
			};
		};

		//画像の読み込み
		function imgLoad(){
			var img = new Image();
			$(img).on('load', loaded).attr('src', srcList[loadIndex]);
		};

		//初期設定
		function init(){
            srcList[0] = "img/hamburger.JPG";
			$('<p>', {
				'id': 'loading',
				'html': '<img src="img/loading.gif">'
			}).appendTo('body');
			imgLoad();
		};

		init();

	};

	loadImages();
    
});




