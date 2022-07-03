$(document).ready(function () {
	let header = $('.header');
	let nav = $('.nav');
	let navH = nav.height();

	nav.mouseenter(function () {
		header.css('height', navH);
	});
	nav.mouseleave(function () {
		header.css('height', 70);
	});


});

window.onload = function () {
	let platform_desc_list_main_top = $('.platform-desc-list-main-top')
	let platform_btn_top = $('.platform-btn-top')

	let platform_top_img = $('.platform-top-img')
	let platform_btn_middle = $('.platform-btn-middle')
	let platform_middle_img_open = $('.platform-middle-img-open')
	let platform_desc_list_main_middle = $('.platform-desc-list-main-middle')

	let platform_btn_bottom = $('.platform-btn-bottom')
	let platform_desc_list_main_bottom = $('.platform-desc-list-main-bottom')

	// 탑 버튼 클릭
	platform_btn_top.click(function () {
		platform_desc_list_main_top.toggleClass('platform-desc-list-main-top-open')

	})

	// 미들버튼 클릭
	platform_btn_middle.click(function () {
		platform_desc_list_main_middle.toggleClass('platform-desc-list-main-middle-open')
		platform_top_img.toggleClass('platform-middle-img-open')
	});

	// 하단버튼 클릭
	platform_btn_bottom.click(function () {
		platform_desc_list_main_bottom.toggleClass('platform-desc-list-main-bottom-open')
		platform_top_img.toggleClass('platform-bottom-img-open')
	});

};