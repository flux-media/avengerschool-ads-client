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
	title: '재무제표만 똑바로 봐도 기업이 보인다: 회계 정보의 올바른 이해',
	url: 'https://avengerschool.com/product/understanding-accounting-data/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/04/title_%EC%9E%AC%EB%AC%B4%EC%A0%9C%ED%91%9C-300x200.jpg',
	category: '경제',
	date: '2016-05-24T19:30'}));
courses.push(new ASCourse({
	title: '총각네 야채가게에서 배우는 강남 고객 공략법',
	url: 'https://avengerschool.com/product/how-to-approach-to-gangnam-consumers/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/05/%EC%9E%84%EC%B2%9C%EC%9D%BC-300x200.jpg',
	category: '마케팅',
	date: '2016-05-25T19:30'}));
courses.push(new ASCourse({
	title: '내가 조선의 카드뉴스 만드는 녀자다: 콘텐츠 마케팅의 전략 수립하기',
	url: 'https://avengerschool.com/product/card-news-contents-marketing/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/04/title_%EC%B9%B4%EB%93%9C%EB%89%B4%EC%8A%A4-300x200.jpg',
	category: '비즈니스',
	date: '2016-05-26T19:30'}));
courses.push(new ASCourse({
	title: '예수가 한국 와서 고생이 많다: 대형교회가 말하지 않는 예수의 참된 가르침',
	url: 'https://avengerschool.com/product/oh-poor-jesus/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/05/%EA%B9%80%EC%A7%84%ED%98%B8-300x200.jpg',
	category: '헬조선',
	date: '2016-05-28T14:00'}));
courses.push(new ASCourse({
	title: '직장인의 글쓰기: 효과적인 소통을 위한 비즈니스 글쓰기 비법',
	url: 'https://avengerschool.com/product/writing-of-businessman/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/04/%EB%B0%B1%EC%8A%B9%EA%B6%8C5-300x200.jpg',
	category: '글쓰기',
	date: '2016-05-29T19:30'}));
courses.push(new ASCourse({
	title: '나 없이 채권투자 하지 마라: 금리와 채권투자의 올바른 이해',
	url: 'https://avengerschool.com/product/invest-bonds/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/04/title_%EC%B1%84%EA%B6%8C%ED%88%AC%EC%9E%90-300x200.jpg',
	category: '경제',
	date: '2016-05-31T19:30'}));
courses.push(new ASCourse({
	title: '팟빵에서 직접 듣는 팟캐스트 마케팅 성공공식',
	url: 'https://avengerschool.com/product/podbbang/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/05/%EA%B9%80%EB%8F%99%ED%9D%AC-300x200.jpg',
	category: '마케팅',
	date: '2016-06-01T19:30'}));
courses.push(new ASCourse({
	title: '기업의 레인메이커가 갖춰야 할 4대 역량: 내일부터 당장 차이를 만들어내기',
	url: 'https://avengerschool.com/product/4-abilities-for-rainmakers/',
	thumbnail: 'https://avengerschool.com/wp-content/uploads/2016/04/title_%EB%A0%88%EC%9D%B8%EB%A9%94%EC%9D%B4%EC%BB%A4-300x200.jpg',
	category: '비즈니스',
	date: '2016-06-02T19:30'}));


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