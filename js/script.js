window.onload = function () {
	// 안내창
  // 추가기능 : 스크롤바 없애기
  // $('html').css('overflow', 'hidden');

  // let modalWrap = $('.modal-wrap');
  // let modalClose = $('.modal-close');
  

  // modalClose.click(function(){
  //   modalWrap.stop().fadeOut(500)
  //   // 추가기능 : 스크롤바 살리기
  //   // $('html').css('overflow', 'auto');
  // });
  // let modalMain = $('.modal-main')
  // //내용 배경 클릭
  // modalMain.click(function(event){
  //   // 클릭 정보 전달 막기
  //   event.stopPropagation();
  // });
  // //전체 배경 클릭
  // modalWrap.click(function(){
  //   modalWrap.stop().fadeOut(500);
  //   // 추가기능 : 스크롤바 살리기
  //   // $('html').css('overflow', 'auto');
  // });
  


	// platform 영역
	// platform top
	let platform_desc_list_main_top = $('.platform-desc-list-main-top');
	let platform_btn_top = $('.platform-btn-top');
	let platform_top_img = $('.platform-top-img');

	// platform middle
	let platform_btn_middle = $('.platform-btn-middle');
	let platform_middle_img_open = $('.platform-middle-img-open');
	let platform_desc_list_main_middle = $('.platform-desc-list-main-middle');
	let platform_desc_list_middle = $('.platform-desc-list-middle');

	// platform bottom
	let platform_btn_bottom = $('.platform-btn-bottom');
	let platform_desc_list_main_bottom = $('.platform-desc-list-main-bottom');
	let platform_desc_list_bottom = $('.platform-desc-list-bottom');
	
	// platform button 메뉴 리스트 처럼 생각하고 구현해보기
	let platformBtn = $('.platform button');
	let temp = platformBtn.find('platform-contents');
	// console.log(platformBtn) 안에 버튼 영역 3개 잡힘
	$.each(platformBtn, function(index, item){
		// 플랫폼안에 버튼 다 찾기
		let platformContents = $('.platform-contents');
		let platformButton = $('.platform-button');
		let moreButton = $('.more-button')
		let titleColor = $('.title-color')
		// 플랫폼 버튼 안에 내용 찾기
		// console.log(temp) 원하는 거 나옴
		// console.log(index , item); 원하는 거 나옴
		platformBtn.eq(index).click(function(){
			// temp.hide()
			// temp.eq(index).show()
			console.log('몇번째 버튼', index)
			platformContents.hide()
			platformContents.eq(index).show()

			platformButton.css('background', 'hsla(0, 0%, 100%, .6)')
			platformButton.eq(index).css('background', '#fafbff')

			moreButton.css('transform', 'rotate(90deg)')
			moreButton.eq(index).css('transform', 'rotate(360deg)')
			
			titleColor.css('color', '#7b87a0')
			titleColor.eq(index).css('color', '#343f55')
		})
	})



	new Swiper('.sw-slide', {
		loop: true,
		slidesPerView: 2,
		slidesPerGroup: 2,
		spaceBetween : 15,
		loopFillGroupWithBlank : true,
		allowTouchMove:false,
		navigation: {
      prevEl: '.sw-control-prev',
      nextEl: '.sw-control-next'
    },
		breakpoints:{
			1500: {
        slidesPerView: 4,
				slidesPerGroup: 4,
			},
			1200: {
        slidesPerView: 3,
				slidesPerGroup: 3,
			},   
			1120: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			600: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
			375: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},

		}
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
	let mb_bt_img = $('.mb-gnb > li > img')


	$.each(mb_list, function(index){
		$(this).click(function(){
			mb_submenu.stop().slideUp();
			$(this).find('.mb-submenu').stop().slideToggle();

			$(this).find(mb_bt_img).toggleClass('mb-bt-img-open')
			// mb_submenu.eq(index).stop().slideToggle();
		});

	})




};


