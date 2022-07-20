window.onload = function () {
	// 안내창
  // 추가기능 : 스크롤바 없애기
//   $('html').css('overflow', 'hidden');

  let modalWrap = $('.modal-wrap');
  let modalClose = $('.modal-close');
  

  modalClose.click(function(){
    modalWrap.stop().fadeOut(500)
    // 추가기능 : 스크롤바 살리기
    // $('html').css('overflow', 'auto');
  });
  let modalMain = $('.modal-main')
  //내용 배경 클릭
  modalMain.click(function(event){
    // 클릭 정보 전달 막기
    event.stopPropagation();
  });
  //전체 배경 클릭
  modalWrap.click(function(){
    modalWrap.stop().fadeOut(500)
    // 추가기능 : 스크롤바 살리기
    $('html').css('overflow', 'auto');
  });
  



	let platform_desc_list_main_top = $('.platform-desc-list-main-top')
	let platform_btn_top = $('.platform-btn-top')

	let platform_top_img = $('.platform-top-img')

	let platform_btn_middle = $('.platform-btn-middle')
	let platform_middle_img_open = $('.platform-middle-img-open')
	let platform_desc_list_main_middle = $('.platform-desc-list-main-middle')
	let platform_desc_list_middle = $('.platform-desc-list-middle');


	let platform_btn_bottom = $('.platform-btn-bottom')
	let platform_desc_list_main_bottom = $('.platform-desc-list-main-bottom')
	let platform_desc_list_bottom = $('.platform-desc-list-bottom')
	
	
	// 탑 버튼 클릭
	platform_btn_top.click(function () {
		platform_desc_list_main_top.toggleClass('platform-desc-list-main-top-open')
		platform_btn_top.toggleClass('platform-btn-rotate90');
	})

	// 미들버튼 클릭
	platform_btn_middle.click(function () {
		platform_desc_list_main_middle.toggleClass('platform-desc-list-main-middle-open')
		platform_top_img.toggleClass('platform-middle-img-open');
		platform_btn_middle.toggleClass('platform-btn-rotate180');
		platform_desc_list_middle.toggleClass('platform-desc-list-bg')
	});

	// 하단버튼 클릭
	platform_btn_bottom.click(function () {
		platform_desc_list_main_bottom.toggleClass('platform-desc-list-main-bottom-open')
		platform_top_img.toggleClass('platform-bottom-img-open')
		platform_btn_bottom.toggleClass('platform-btn-rotate180');
		platform_desc_list_bottom.toggleClass('platform-desc-list-bg')
	});


	new Swiper('.sw-slide', {
		slidesPerView: 4,
		slidesPerGroup: 4,
		spaceBetween : 15,
		loopFillGroupWithBlank : true,
		allowTouchMove:false,
		loop: true,
		navigation: {
      prevEl: '.sw-control-prev',
      nextEl: '.sw-control-next'
    },
	})




	// mb-bt 클릭시 mb-wrap 나오기
	let mb_bt =$('.mb-bt');
	let mb_wrap = $('.mb-wrap');
	let mb_bt_open = $('.mb-bt-open')
	mb_bt.click(function(){
		// mb_wrap.toggleClass('mb-wrap-open')		
		mb_bt.toggleClass('mb-bt-open').fadeIn(500);
		mb_wrap.toggleClass('mb-wrap-on');

	});
	

	$(window).resize(function () {
		let temp = $(window).width();
		if (temp > 1200) {
			mb_wrap.removeClass('mb-wrap-open');
			mb_bt.removeClass('mb-bt-open');
			// mb_wrap.hide();
		}
	});



	// 모바일 메뉴창
	let mb_list = $('.mb-gnb > li');
	let mb_submenu = $('.mb-submenu');

	$.each(mb_list, function(index){
		$(this).click(function(){
			mb_submenu.stop().slideUp();

			$(this).find('.mb-submenu').stop().slideToggle();
			// mb_submenu.eq(index).stop().slideToggle();
		});

	})




};


