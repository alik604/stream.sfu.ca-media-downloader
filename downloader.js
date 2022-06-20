const file = window.location.pathname.split('/')[3];
fetch("https://stream.sfu.ca/Media/PlayerService/PlayerService.svc/json/GetPlayerOptions", {
	"credentials": "include",
	"headers": {
		"User-Agent": window.navigator.userAgent,
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Accept-Language": "en-US,en;q=0.5",
		"Content-Type": "application/json; charset=utf-8",
		"X-Requested-With": "XMLHttpRequest"
	},
	"referrer": window.location.toString(),
	"body": JSON.stringify({
		getPlayerOptionsRequest: {
			ResourceId: file,
			QueryString: "",
			UseScreenReader: false,
			UrlReferrer: ""
		}
	}),
	"method": "POST",
	"mode": "cors"
})
	.then(response => response.json())
	.then(function (data) {
		for (const stream of data['d']['Presentation']['Streams']) {
			for (const url of stream['VideoUrls']) {
				if (url['Location'] != null) {
					window.open(url['Location']);
					return;
				}
			}
		}

		alert("Unable to find video URL.");
	})
	.catch(error => {
		alert("Unable to find the video URL due to error.");
	});
