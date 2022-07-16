$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Как это работает
	if ($('.how_works .swiper').length) {
		let howWorksSlider = new Swiper('.how_works .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			spaceBetween: 24,
			slidesPerView: 1,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
				waitForTransition: false
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				init: swiper => {
					setTimeout(() => setHeight($(swiper.$el).find('.item')))
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.item').height('auto')
						setHeight($(swiper.$el).find('.item'))
					})
				},
				slideChange: swiper => {
					setTimeout(() => {
						$('.how_works .btns .btn').removeClass('active')
						$('.how_works .btns .btn').eq(swiper.realIndex).addClass('active')

						document.querySelector('.how_works .btns .row').scrollLeft += $('.how_works .btns .btn.active').position().left
					})
				}
			}
		})

		$('.how_works .btns .btn').mouseenter(function (e) {
			howWorksSlider.autoplay.pause()
		})

		$('.how_works .btns .btn').click(function (e) {
			e.preventDefault()

			howWorksSlider.slideToLoop($(this).data('slide-index'), 500)
		})
	}


	// Шаблоны
	if ($('.templates .swiper').length) {
		new Swiper('.templates .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			centeredSlides: true,
			preloadImages: false,
			lazy: {
				enabled: true,
				// checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 22
				},
				768: {
					spaceBetween: 32
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.item .info'))
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.item .info').height('auto')
						setHeight($(swiper.$el).find('.item .info'))
					})
				}
			}
		})
	}

	$('.templates .toggle .label').click(function (e) {
		e.preventDefault()

		$('.templates .toggle .label').removeClass('active')
		$(this).addClass('active')

		if ($(this).hasClass('show_resume')) {
			$('.templates .letters').removeClass('show')
			$('.templates .resume').addClass('show')
		}

		if ($(this).hasClass('show_letters')) {
			$('.templates .resume').removeClass('show')
			$('.templates .letters').addClass('show')
		}
	})


	$('.toggle .icon').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.toggle')

		parent.find('.label').toggleClass('active')

		let activeLabel = parent.find('.label.active')

		if (activeLabel.hasClass('show_resume')) {
			$('.templates .letters').removeClass('show')
			$('.templates .resume').addClass('show')
		}

		if (activeLabel.hasClass('show_letters')) {
			$('.templates .resume').removeClass('show')
			$('.templates .letters').addClass('show')
		}
	})


	$('.templates .item .colors > *').mouseenter(function () {
		let parent = $(this).closest('.item')

		parent.find('.colors > *').removeClass('active')
		$(this).addClass('active')

		parent.find('.thumb img').removeClass('show')
		parent.find('.thumb img').eq($(this).index()).addClass('show')
	})


	// С нашими резюме устраиваются в лучшие компании
	if ($('.cases .swiper').length) {
		new Swiper('.cases .swiper', {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			slidesPerView: 'auto',
			centeredSlides: true,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				768: {
					spaceBetween: 40
				}
			},
			on: {
				init: swiper => {
					setTimeout(() => {
						setHeight($(swiper.$el).find('.item'))
					})
				},
				resize: swiper => {
					setTimeout(() => {
						$(swiper.$el).find('.item').height('auto')
						setHeight($(swiper.$el).find('.item'))
					})
				}
			}
		})
	}


	// СМИ о нас
	const mediaSliders = []

	$('.media .swiper').each(function (i) {
		$(this).addClass('media_s' + i)

		let options = {
			loop: true,
			speed: 500,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			breakpoints: {
				0: {
					spaceBetween: 32,
					slidesPerView: 'auto',
					centeredSlides: true
				},
				1280: {
					spaceBetween: 20,
					slidesPerView: 5,
					centeredSlides: false
				},
				1440: {
					spaceBetween: 24,
					slidesPerView: 6,
					centeredSlides: false
				},
				1800: {
					spaceBetween: 24,
					slidesPerView: 7,
					centeredSlides: false
				}
			}
		}

		mediaSliders.push(new Swiper('.media_s' + i, options))
	})


	// Присоединяйся!
	if ($('.join .slider1 .swiper').length) {
		new Swiper('.join .slider1 .swiper', {
			loop: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			preloadImages: false,
			centeredSlides: true,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			speed: 6000,
			autoplay: {
				delay: 1,
				reverseDirection: true
			},
			simulateTouch: false,
			allowTouchMove: true,
			noSwiping: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				1280: {
					spaceBetween: 24
				}
			}
		})
	}

	if ($('.join .slider2 .swiper').length) {
		new Swiper('.join .slider2 .swiper', {
			loop: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			centeredSlides: true,
			preloadImages: false,
			lazy: {
				enabled: true,
				checkInView: true,
				loadOnTransitionStart: true,
				loadPrevNext: true
			},
			speed: 6000,
			autoplay: {
				delay: 1
			},
			simulateTouch: false,
			allowTouchMove: true,
			noSwiping: true,
			watchSlidesProgress: true,
			slideActiveClass: 'active',
			slideVisibleClass: 'visible',
			breakpoints: {
				0: {
					spaceBetween: 16
				},
				1280: {
					spaceBetween: 24
				}
			}
		})
	}


	// Спойлер в тексте
	$('.text_block .spoler_btn').click(function (e) {
		e.preventDefault()

		let parent = $(this).closest('.text_block')

		!$(this).hasClass('active')
			? parent.find('.hide').css('display', 'inline')
			: parent.find('.hide').css('display', 'none')

		$(this).toggleClass('active')
	})


	// Калькулятор заработка
	$('.calc .toggle .label').click(function (e) {
		e.preventDefault()

		$('.calc .toggle .label').removeClass('active')
		$(this).addClass('active')
	})


	calcRange = $('.calc #range').ionRangeSlider({
		min: 0,
		max: 100,
		from: 23,
		step: 1,
		onChange: data => {
			$('.calc .range input.from').val(data.from)

			$('.calc #total_price').val((data.from * 100).toLocaleString())
		},
		onUpdate: data => {
			$('.calc .range input.from').val(data.from)

			$('.calc #total_price').val((data.from * 100).toLocaleString())
		}
	}).data("ionRangeSlider")

	$('.calc .range .input').keyup(function () {
		calcRange.update({
			from: parseFloat($('.filter .price_range input.from').val())
		})
	})


	// Поиск
	$('.search .input').keydown(function () {
		let _self = $(this),
			parent = $(this).closest('form')

		setTimeout(() => {
			_self.val().length > 1
				? parent.find('.tips').fadeIn(300)
				: parent.find('.tips').fadeOut(200)

			if (is_touch_device()) $('body').css('cursor', 'default')
		})
	})

	// Закрываем всплывашку при клике за её пределами
	$(document).click((e) => {
		if ($(e.target).closest('.search').length === 0) {
			$('.search .tips').fadeOut(200)

			if (is_touch_device()) $('body').css('cursor', 'default')
		}
	})


	// Отправка форм
	$('.partnership form, .feedback form').submit(function (e) {
		e.preventDefault()

		// $(this).find('.sent_success').addClass('show')
		$(this).find('.sent_error').addClass('show')
	})


	// Фиксация блока
	$('.will_be_sticky').each(function () {
		let contentFlex = $(this).closest('.content_flex')

		if (contentFlex.length && contentFlex.find('.content').outerHeight() > contentFlex.find('aside').outerHeight()) {
			contentFlex.addClass('stretch')

			contentFlex.find('.will_be_sticky').stick_in_parent({
				offset_top: 24,
				recalc_every: 100
			})
		}
	})


	// Моб. подвал
	$('footer .title').click(function (e) {
		e.preventDefault()

		if (window.outerWidth < 768) {
			$(this).toggleClass('active').next().slideToggle(300)
		}
	})


	// Моб. выбор категории в блоге
	$('.mob_choose_categories').click(function (e) {
		e.preventDefault()

		$(this).toggleClass('active').next().slideToggle(300)
	})


	// Телеграм канал
	$('.telegram_channel .close_btn').click(function (e) {
		e.preventDefault()

		$(this).closest('.telegram_channel').hide()
	})


	// Fancybox
	Fancybox.defaults.autoFocus = false
	Fancybox.defaults.dragToClose = false
	Fancybox.defaults.l10n = {
		CLOSE: "Закрыть",
		NEXT: "Следующий",
		PREV: "Предыдущий",
		MODAL: "Вы можете закрыть это модальное окно нажав клавишу ESC"
	}

	Fancybox.defaults.template = {
		closeButton: '<svg><use xlink:href="images/sprite.svg#ic_close"></use></svg>',
		spinner: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
		main: null
	}


	// Всплывающие окна
	$('body').on('click', '.modal_btn', function (e) {
		e.preventDefault()

		Fancybox.close()

		Fancybox.show([{
			src: $(this).data('modal'),
			type: 'inline'
		}])
	})


	// Увеличение картинки
	Fancybox.bind('.fancy_img', {
		Image: {
			zoom: false,
		},
		Thumbs: {
			autoStart: false,
		}
	})


	// Табы
	var locationHash = window.location.hash

	$('body').on('click', '.tabs button', function (e) {
		e.preventDefault()

		if (!$(this).hasClass('active')) {
			const $parent = $(this).closest('.tabs_container'),
				activeTab = $(this).data('content'),
				$activeTabContent = $(activeTab),
				level = $(this).data('level')

			$parent.find('.tabs:first button').removeClass('active')
			$parent.find('.tab_content.' + level).removeClass('active')

			$(this).addClass('active')
			$activeTabContent.addClass('active')
		}
	})

	if (locationHash && $('.tabs_container').length) {
		const $activeTab = $(`.tabs button[data-content="${locationHash}"]`),
			$activeTabContent = $(locationHash),
			$parent = $activeTab.closest('.tabs_container'),
			level = $activeTab.data('level')

		$parent.find('.tabs:first button').removeClass('active')
		$parent.find('.tab_content.' + level).removeClass('active')

		$activeTab.addClass('active')
		$activeTabContent.addClass('active')

		$('html, body').stop().animate({ scrollTop: $activeTabContent.offset().top }, 1000)
	}


	// Плавная прокрутка к якорю
	$('.scroll_btn').click(function (e) {
		e.preventDefault()

		let href = $(this).data('anchor'),
			addOffset = 24

		if ($(this).data('offset')) addOffset = $(this).data('offset')

		$('html, body').stop().animate({ scrollTop: $(href).offset().top - addOffset }, 1000)
	})


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('.mob_header .mob_menu_btn').toggleClass('active')
		$('body').toggleClass('menu_open')
		$('header').toggleClass('show')
	})


	// Аккордион
	$('body').on('click', '.accordion .accordion_item .head', function (e) {
		e.preventDefault()

		const $item = $(this).closest('.accordion_item'),
			$accordion = $(this).closest('.accordion')

		if ($item.hasClass('active')) {
			$item.removeClass('active').find('.data').slideUp(300)
		} else {
			$accordion.find('.accordion_item').removeClass('active')
			$accordion.find('.data').slideUp(300)

			$item.addClass('active').find('.data').slideDown(300)
		}
	})


	// Маска ввода
	$('input[type=tel]').inputmask('+7 (999) 999-99-99')

	// Кастомный select
	$('select').niceSelect()

	// Фокус при клике на название поля
	$('body').on('click', '.form .label', function () {
		$(this).closest('.line').find('.input, textarea').focus()
	})


	if (is_touch_device()) {
		// Подменю на тач скрине
		$('header .menu_item > a.sub_link').addClass('touch_link')

		$('header .menu_item > a.sub_link').click(function (e) {
			const $dropdown = $(this).next(),
				parent = $(this).closest('.menu_item')

			if ($dropdown.css('visibility') === 'hidden') {
				e.preventDefault()

				$('header .menu .sub_menu').removeClass('show')
				parent.find('.sub_menu').addClass('show')

				$('body').css('cursor', 'pointer')
			}
		})

		// Закрываем под. меню при клике за её пределами
		$(document).click((e) => {
			if ($(e.target).closest('.menu').length === 0) {
				$('header .menu .sub_menu').removeClass('show')

				$('body').css('cursor', 'default')
			}
		})


		// Закрытие моб. меню свайпом справо на лево
		let ts

		$('body').on('touchstart', (e) => { ts = e.originalEvent.touches[0].clientX })

		$('body').on('touchend', (e) => {
			let te = e.originalEvent.changedTouches[0].clientX

			if ($('body').hasClass('menu_open') && ts > te + 50) {
				// Свайп справо на лево
				$('.mob_header .mob_menu_btn').removeClass('active')
				$('body').removeClass('menu_open')
				$('header').removeClass('show')
			} else if (ts < te - 50) {
				// Свайп слева на право
			}
		})
	}
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true,
		headerHeight = $('header').outerHeight(),
		mobHeaderInit = true,
		mobHeaderHeight = $('.mob_header').outerHeight(),
		scrollTop = $(window).scrollTop()

	$('header').wrap('<div class="header_wrap"></div>')
	$('.header_wrap').height(headerHeight)

	$('.mob_header').wrap('<div class="mob_header_wrap"></div>')
	$('.mob_header_wrap').height(mobHeaderHeight)

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')

	mobHeaderInit && $(window).scrollTop() > 0
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')

	typeof mobHeaderInit !== 'undefined' && mobHeaderInit && $(window).scrollTop() > 0
		? $('.mob_header').addClass('fixed')
		: $('.mob_header').removeClass('fixed')

	typeof headerInit !== 'undefined' && scrollTop > $(window).scrollTop()
		? $('header').addClass('fixed_show')
		: $('header').removeClass('fixed_show')

	scrollTop = $(window).scrollTop()
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Фикс. шапка
		headerInit = false
		mobHeaderInit = false
		$('.header_wrap, .mob_header_wrap').height('auto')

		setTimeout(() => {
			headerInit = true
			headerHeight = $('header').outerHeight()
			mobHeaderInit = true
			mobHeaderHeight = $('.mob_header').outerHeight()

			$('.header_wrap').height(headerHeight)
			$('.mob_header_wrap').height(mobHeaderHeight)

			headerInit && $(window).scrollTop() > 0
				? $('header').addClass('fixed')
				: $('header').removeClass('fixed')

			mobHeaderInit && $(window).scrollTop() > 0
				? $('.mob_header').addClass('fixed')
				: $('.mob_header').removeClass('fixed')
		}, 100)


		// Перезапись ширины окна
		WW = $(window).width()
	}
})