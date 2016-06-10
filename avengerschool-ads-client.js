function ASCourse (course) {
	this.date = new Date(course.date);
	// TODO: Why ten...?
	this.date.setUTCHours(10);
	this.title = course.title;
	this.url = course.url;
	this.thumbnail = course.thumbnail;
	this.category = course.category;
}
ASCourse.prototype.isAvailable = function() {
	var MS_PER_HOUR = 1000 * 60 * 60, now = new Date();
	return this.date.valueOf() - now.valueOf() > 2 * MS_PER_HOUR;
}

var DEFAULT_TITLE = 'ㅍㅍㅅㅅ의 현업 전문가 실무 특강';
var courses = [];
courses.push(new ASCourse({
	title: '미디어로 자생하기: 아웃스탠딩이 살아남는 법',
	url: 'https://avengerschool.com/product/how-to-survive-as-media/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/shutterstock_364248185-300x200.jpg',
	category: '미디어',
	date: '2016-06-14T19:30'}));
courses.push(new ASCourse({
	title: '타겟 고객의 동선을 분석하는 키워드 리서치와 채널-콘텐츠 전략',
	url: 'https://avengerschool.com/product/keyword-research/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EB%B0%95%EC%84%B8%EC%9A%A9-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: 'SEO',
	date: '2016-06-15T19:30'}));
courses.push(new ASCourse({
	title: '클릭을 유도하는 이메일 마케팅 전략: 우리가 무시해온 ROI 끝판왕',
	url: 'https://avengerschool.com/product/roi-based-email-marketing-strategy/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%A1%B0%EC%84%B1%EB%8F%84-%ED%94%BC%EC%B2%98-2-300x200.jpg',
	category: '콘텐츠',
	date: '2016-06-16T19:30'}));
courses.push(new ASCourse({
	title: '‘동네변호사 조들호’ 작가에게서 배우는 웹툰 기획 전략',
	url: 'https://avengerschool.com/product/webtoon-planning-strategy/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/ggdfsdaf-300x200.png',
	category: '문화기획',
	date: '2016-06-18T14:00'}));
courses.push(new ASCourse({
	title: '병원을 위한 혁신 마케팅 그리고 창조적인 브랜드 만들기',
	url: 'https://avengerschool.com/product/creative-hospital-branding/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EA%B9%80%EC%88%98%EC%A0%95-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '병원',
	date: '2016-06-19T14:00'}));
courses.push(new ASCourse({
	title: '스타트업 홍보 여신이 말하는 “작은 회사를 살리는 홍보”',
	url: 'https://avengerschool.com/product/startup-marketing/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%9D%B4%EB%AF%B8%EB%82%98-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '미디어',
	date: '2016-06-21T19:30'}));
courses.push(new ASCourse({
	title: 'SEO 제대로 활용하기: SEO의 역할과 가치, 그리고 올바른 활용',
	url: 'https://avengerschool.com/product/seo-management/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%9D%B4%ED%99%98%EC%84%A0-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: 'SEO',
	date: '2016-06-22T19:30'}));
courses.push(new ASCourse({
	title: '대학내일이 말하는 “공유되는 모바일 콘텐츠 만드는 법”',
	url: 'https://avengerschool.com/product/how-to-create-mobile-contents/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%9D%B4%EC%A0%95%EC%84%AD-%ED%94%BC%EC%B2%98-3-300x200.jpg',
	category: '콘텐츠',
	date: '2016-06-23T19:30'}));
courses.push(new ASCourse({
	title: '파스텔뮤직에서 배우는 ‘공연, 음반 기획과 운영’',
	url: 'https://avengerschool.com/product/records-management/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/info_slider_pastel-1-300x200.png',
	category: '문화기획',
	date: '2016-06-25T14:00'}));
courses.push(new ASCourse({
	title: '병원 매출을 바꾸려면, 직원을 인재로 만들어라: 핵심 가치의 공유와 직무 환경 조성',
	url: 'https://avengerschool.com/product/hr-management-for-hospitals/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EB%B0%95%EC%A7%80%EC%97%B0-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '병원',
	date: '2016-06-26T14:00'}));
courses.push(new ASCourse({
	title: '마케팅과 브랜딩을 위한 뉴미디어와 MCN 활용법',
	url: 'https://avengerschool.com/product/new-media-and-mcn-for-marketing/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%9D%B4%EC%9D%80%EC%98%81-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '미디어',
	date: '2016-06-28T19:30'}));
courses.push(new ASCourse({
	title: '1분만에 와닿는 문서작성의 핵심역량: VISUAL WRITING',
	url: 'https://avengerschool.com/product/visual-writing/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EA%B9%80%EC%9A%A9%EC%84%9D-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '비즈니스',
	date: '2016-06-29T19:30'}));
courses.push(new ASCourse({
	title: '좋아요 52만 ‘고탱의 비디오’ 운영자의 온라인 비디오 기획-제작법',
	url: 'https://avengerschool.com/product/online-video-production/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EA%B3%A0%ED%83%9C%EC%9B%90-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '콘텐츠',
	date: '2016-06-30T19:30'}));
courses.push(new ASCourse({
	title: '물총축제, 맥주축제 제작자가 말하는 축제 기획의 모든 것',
	url: 'https://avengerschool.com/product/festival-planning/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%ED%95%9C%EA%B8%B8%EC%9A%B0-%ED%94%BC%EC%B2%98-2-300x200.jpg',
	category: '문화기획',
	date: '2016-07-02T14:00'}));
courses.push(new ASCourse({
	title: '사라지면 고객이 아쉬워 할 ‘존재감 있는 병원’이 되는 법',
	url: 'https://avengerschool.com/product/on-hospital-marketing/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%B5%9C%EB%AA%85%ED%9D%AC-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '병원',
	date: '2016-07-03T14:00'}));
courses.push(new ASCourse({
	title: '분산미디어 환경과 대응 전략: 미디어와 기업의 나아갈 길',
	url: 'https://avengerschool.com/product/future-for-media-and-companies/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/shutterstock_403444858-300x200.jpg',
	category: '미디어',
	date: '2016-07-05T19:30'}));
courses.push(new ASCourse({
	title: '보고서의 신이 말하는 ‘보고서 작성 대원칙’',
	url: 'https://avengerschool.com/product/the-broad-principle-for-reports/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EB%B0%95%EA%B2%BD%EC%88%98-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '비즈니스',
	date: '2016-07-06T19:30'}));
courses.push(new ASCourse({
	title: '‘해먹남녀’ 대표의 데이터를 활용한 콘텐츠 마케팅과 비즈니스 전략',
	url: 'https://avengerschool.com/product/contents-marketing-with-data/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%A0%95%EC%A7%80%EC%9B%85-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '콘텐츠',
	date: '2016-07-07T19:30'}));
courses.push(new ASCourse({
	title: '연극 ‘그 자식 사랑했네’, 뮤지컬 ‘빨래’ 제작자가 말하는 공연-뮤지컬 기획의 모든 것',
	url: 'https://avengerschool.com/product/musical-concert-planning/',
	thumbnail: 'https://avengerschool-media.s3.amazonaws.com/uploads/2016/06/%EC%9D%B4%EC%A7%80%ED%98%B8-%ED%94%BC%EC%B2%98-300x200.jpg',
	category: '문화기획',
	date: '2016-07-09T14:00'}));


(function ( $ ) {
	function AvengerschoolAdsClientException(message) {
		this.message = message;
	}

	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// Returns a random integer between min (included) and max (excluded)
	// Using Math.round() will give you a non-uniform distribution!
	function getRandomInt(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	}

	function getBanner(title, url, thumbnail, description) {
		var onClick = "ga('send', 'event', 'Banner', 'click', 'Avengerschool');",
			$bannerWrapper = $('<div/>', {
				class: 'avengerschool-banner-wrapper'
			});
		$bannerWrapper.append($('<div/>', { class: 'header', text: title }));
		$bannerWrapper.append(
			$('<a/>', {
				href: url,
				target: '_blank',
				html: $('<img>', { src: thumbnail }),
				onClick: onClick
			})
		);
		$bannerWrapper.append(
			$('<a/>', {
				href: url,
				target: '_blank',
				html: $('<div/>', { class: 'footer', text: description }),
				onClick: onClick
			})
		);
		return $bannerWrapper;
	}

	$.fn.appendAvengerschoolAds = function( options ) {
		// For loops.
		var i, length;

		var settings = $.extend({
			apiDataAction: 'get_ad_banner',
			apiMethod: 'GET',
			apiUrl: 'https://avengerschool.com/wp-admin/admin-ajax.php',
			categoriesWrapper: 'span.entry-categories',
		}, options);

		var $this = $(this),
			$categoriesWrapper = $this.find(settings.categoriesWrapper);
		if ($categoriesWrapper.length <= 0) {
			return;
		}

		// Find the proper paragraph with at least 120 characters, not having a <blockquote> parent.
		var $entryContentPs = $this.find('.entry-content').find('p'),
			indices = [];
		$entryContentPs.each(function(index) {
			var $this = $(this);
			if ($this.text().length > 120 && $this.parent()[0].tagName != 'BLOCKQUOTE') {
				indices.push(index);
			}
		});
		var pIndex = getRandomInt(0, indices.length - 1);

		// Match categories.
		var $categoriesAnchors = $categoriesWrapper.find('a'),
			categorySlug = '', categories = [],
			coursesAvailableInContent = [], coursesAvailableInFooter = [];
		$categoriesAnchors.each(function() {
			var category = $(this).text();
			switch (category) {
				case '책':
				case '학문':
				case '인문':
				case '역사':
				case '영화':
					categorySlug = '글쓰기';
					break;

				case '사회':
				case '시사':
					categorySlug = Math.random() < .5 ? '글쓰기': '헬조선';
					break;

				case '테크':
				case '마케팅':
				case '비즈니스':
				case '인터뷰':
					categorySlug = Math.random() < .5 ? '비즈니스': '마케팅';
					break;

				case '생활':
					categorySlug = '비즈니스';
					break;

				case '경제':
				case '투자':
				case '국제':
					categorySlug = '경제';
					break;

				case 'IT':
				case '테크':
					categorySlug = '마케팅';
					break;

				case '교육':
				case '정치':
					categorySlug = '헬조선';
					break;

				default:
					var array = ['writing', 'business', 'economy', 'marketing', 'hell-chosun'];
					categorySlug = array[Math.floor(Math.random() * array.length)];
			}
		});

		for (i = 0, length = courses.length; i < length; i++) {
			var course = courses[i];
			if (course.isAvailable()) {
				if (course.category == categorySlug) {
					coursesAvailableInContent.push(course);	
				} else {
					coursesAvailableInFooter.push(course);
				}
			}
		}

		// If available, insert a banner to content.
		if (coursesAvailableInContent.length > 0) {
			var index = Math.floor(Math.random() * coursesAvailableInContent.length),
				courseInContent = coursesAvailableInContent[index],
				$bannerInContent = getBanner(DEFAULT_TITLE, courseInContent.url, courseInContent.thumbnail, courseInContent.title);
			$entryContentPs.eq(indices[pIndex]).prepend($bannerInContent);

			// Exclude the banner from the available array for the future use.
			coursesAvailableInContent.splice(index, 1);
		}

		var courseInFooter, $bannerInFooter;
		// If available, insert a banner to footer.
		// 1) If there banners available for the above, choose the random one from them.
		// cf) It belongs to the related category.
		if (coursesAvailableInContent.length > 0) {
			courseInFooter = coursesAvailableInContent[Math.floor(Math.random() * coursesAvailableInContent.length)];
			$bannerInFooter = getBanner(DEFAULT_TITLE, courseInFooter.url, courseInFooter.thumbnail, courseInFooter.title);
		}
		// 2) If not, get any random available one.
		// cf) Its category isn't related to those of the post.
		else {
			if (coursesAvailableInFooter.length > 0) {
				courseInFooter = coursesAvailableInFooter[Math.floor(Math.random() * coursesAvailableInFooter.length)];
				$bannerInFooter = getBanner(DEFAULT_TITLE, courseInFooter.url, courseInFooter.thumbnail, courseInFooter.title);
			} else {
				// TODO: Add a default avengerschool banner.
				$bannerInFooter = null;
			}
		}
		console.log($bannerInFooter);
		$this.find('.avengerschool-banner-place').append($bannerInFooter);
		
		// TODO: Disabled for Avengerschool server performance.
		// Send categories to API to get banner info.
		// Get categories as an array string.
		// var $categoriesAnchors = $categoriesWrapper.find('a'),
		// 	categories = '[';
		// $categoriesAnchors.each(function() {
		// 	categories += $(this).text() + ',';
		// });
		// categories = categories.slice(0, -1) + ']';
		// $.ajax({
		// 	data: {
		// 		action: settings.apiDataAction,
		// 		categories: categories
		// 	},
		// 	dataType: 'json',
		// 	method: settings.apiMethod,
		// 	success: function(response) {
		// 		var data = response.data,
		// 			$bannerWrapper = getBanner(data.title, data.url,
		// 				data.thumbnail, data.description);
		// 		$entryContentPs.eq(indices[pIndex]).prepend($bannerWrapper);
		// 	},
		// 	url: settings.apiUrl
		// });
	};

	$(document).ready(function() {
		// Initialize.
		$('main').appendAvengerschoolAds();
		// After being scrolled.
		$(window).on('ppss_infinity_loaded', function(event, url, targetId) {
			$('#' + targetId).appendAvengerschoolAds();
		});
	});
}( jQuery ));