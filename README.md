# stream.sfu.ca-media-downloader

Easily download a video (lecture) for offline viewing, from `stream.sfu.ca/Media/Play/*`


## Bookmarklet
```javascript
javascript:const file=window.location.pathname.split("/")[3];fetch("https://stream.sfu.ca/Media/PlayerService/PlayerService.svc/json/GetPlayerOptions",{credentials:"include",headers:{"User-Agent":window.navigator.userAgent,Accept:"application/json, text/javascript, */*; q=0.01","Accept-Language":"en-US,en;q=0.5","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"},referrer:window.location.toString(),body:JSON.stringify({getPlayerOptionsRequest:{ResourceId:file,QueryString:"",UseScreenReader:false,UrlReferrer:""}}),method:"POST",mode:"cors"}).then(response=>response.json()).then(function(data){const url=data["d"]["Presentation"]["Streams"]["0"]["VideoUrls"]["0"]["Location"];if(url==null)throw{};window.open(url)}).catch(error=>{alert("Unable to get the video URL.")});
```

## Installation

1. Copy the `Bookmarklet`
2. In your browser create a bookmark to the current page
3. Edit the said bookmark's URL property/attribute, paste in the contents of the bookmarklet. 📌 (replacing the original URL) 
4. Go to the lecture, click the title to view at the webpage that has the URL `stream.sfu.ca/Media/Play/*`, rather than  `canvas.sfu.ca/courses/*/modules/items/*`. 
Note: if there is no title, the should be a button on the bottom right for a pop-up. Looks like a little box with a arrow pointing top-right
5. Click the `Bookmarklet`
    * Be sure to allow popups
6. On the new tab, right-click, save-as, ... 🤯 

Enjoy 😇


### Click here: 

<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/first_Image.jpg" width="1100" class="inline" >

### You go to the site and click the `Bookmarklet`
### then,right-click, save-as, ... 

<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/secound_image.jpg" width="1100" class="inline" >



___
<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/third_image.jpg" width="1100" class="inline">
