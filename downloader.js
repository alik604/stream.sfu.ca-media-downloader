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
		const url = data["d"]["Presentation"]["Streams"]["0"]["VideoUrls"]["0"]["Location"];
		if (url == null) throw {};
		window.open(url);
	})
	.catch(error => {
		alert("Unable to get the video URL.");
	});
