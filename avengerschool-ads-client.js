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

	$.fn.appendAvengerschoolAds = function( options ) {
		var settings = $.extend({
			apiDataAction: 'get_ad_banner',
			apiMethod: 'GET',
			apiUrl: 'https://avengerschool.com/wp-admin/admin-ajax.php',
			categoriesWrapper: 'span.entry-categories',
		}, options);

		var $this = $(this),
			$categoriesWrapper = $this.find(settings.categoriesWrapper);

		// Get categories as an array string.
		var $categoriesAnchors = $categoriesWrapper.find('a'),
			categories = '[';
		$categoriesAnchors.each(function() {
			categories += $(this).text() + ',';
		});
		categories = categories.slice(0, -1) + ']';

		// Send categories this API server.
		$.ajax({
			data: {
				action: settings.apiDataAction,
				categories: categories
			},
			dataType: 'json',
			method: settings.apiMethod,
			success: function(response) {
				var $bannerWrapper = $('<div/>', {
					class: 'avengerschool-banner-wrapper'
				});
				$bannerWrapper.append(
					$('<div/>', {
						class: 'header',
						text: response.data.title
					})
				);
				$bannerWrapper.append(
					$('<a/>', {
						href: response.data.url,
						target: '_blank',
						html: $('<img>', {
							src: response.data.thumbnail
						})
					})
				);
				$bannerWrapper.append(
					$('<a/>', {
						href: response.data.url,
						target: '_blank',
						html: $('<div/>', {
							class: 'footer',
							text: response.data.description
						})
					})
				);

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

				$entryContentPs.eq(indices[pIndex]).prepend($bannerWrapper);
			},
			url: settings.apiUrl
		});
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