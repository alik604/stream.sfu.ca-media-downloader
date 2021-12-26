# stream.sfu.ca-media-downloader

Easily download a video (lecture) for offline viewing, from `stream.sfu.ca/Media/Play/*`


## Bookmarklet
```javascript
javascript:const file=window.location.pathname.split("/")[3];fetch("https://stream.sfu.ca/Media/PlayerService/PlayerService.svc/json/GetPlayerOptions",{credentials:"include",headers:{"User-Agent":window.navigator.userAgent,Accept:"application/json, text/javascript, */*; q=0.01","Accept-Language":"en-US,en;q=0.5","Content-Type":"application/json; charset=utf-8","X-Requested-With":"XMLHttpRequest"},referrer:window.location.toString(),body:JSON.stringify({getPlayerOptionsRequest:{ResourceId:file,QueryString:"",UseScreenReader:false,UrlReferrer:""}}),method:"POST",mode:"cors"}).then(response=>response.json()).then(function(data){const url=data["d"]["Presentation"]["Streams"]["0"]["VideoUrls"]["0"]["Location"];if(url==null)throw{};window.open(url)}).catch(error=>{alert("Unable to get the video URL.")});
```

## Installation

1. Copy the `Bookmarklet`
2. In your browser create a bookmark to the current page. Doen't matter what said page is. 
3. Edit the said bookmark's URL property/attribute, paste in the contents of the bookmarklet. 📌
   * Replacing the original URL. `CTRL + d`, `More..`, Pasting in the `Bookmarklet`   
4. Go to the lecture, click the title to view at the webpage that has the URL `stream.sfu.ca/Media/Play/*`, rather than  `canvas.sfu.ca/courses/*/modules/items/*`. 
Note: if there is no title, the should be a button on the bottom right for a pop-up. Looks like a little box with a arrow pointing top-right
5. Click the `Bookmarklet`
    * Be sure to allow popups
6. On the new tab, right-click, save-as, ... 🤯 
7. [optiona] run something akin to `for i in *.mp4; do ffmpeg -i "$i" -vcodec libx265 -crf 30 "$i_.mp4"; done` to use `ffmpeg` to compress for long term storage, after you have many files to compress. See the docs for `-crf 30`. see this [site](https://explainshell.com/explain?cmd=ffmpeg+-i+%22%24i%22+-vcodec+libx265+-crf+30+%22%24i_.mp4%22)
Enjoy 😇


### Click here: 
> Or the pop-out button on the bottom-right corner 

<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/first_Image.jpg" width="1100" class="inline" >

### You go to the site and click the `Bookmarklet`
### then,right-click, save-as, ... 

<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/secound_image.jpg" width="1100" class="inline" >



___
<img src="https://github.com/alik604/stream.sfu.ca-media-downloader/blob/master/images/third_image.jpg" width="1100" class="inline">
