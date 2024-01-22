

var settings = document.getElementsByClassName("left_nav_bar_settings");
var you = document.getElementsByClassName("left_nav_bar_you");
var home = document.getElementById("home");
var shorts = document.getElementById("shorts");
var subscribe = document.getElementById("subscribe");

////Addeventlistener hover to variable/object you

var count = 0;

function menu() {
    count += 1;

    if (count % 2 == 0) {
        settings.style.display = 'none';
        you.innerHtml = "<div><h3>You<br>Icon</h3></div>";
        ///you.style.hover = "<div><h3>Icon</h3><span>History</span><br><span>Watched Videos</span><br><span>Liked Videos</span></div>"

        home.style.display = 'none';
        shorts.style.display = 'none';
        subscribe.style.display = 'none';

    }else {
        home.style.display = 'inline';
        shorts.style.display = 'inline';
        subscribe.style.display = 'inline';
        settings.style.display = 'default';

        you.innerHtml = "<h3>You</h3><div><i>Icon </i><span>History</span></div><div><i>Icon </i><span>Watched later</span></div><div><i>Icon </i><span>Liked Videos</span></div>";
    }
}

/*

Projects Evaluation

-- Uploading new videos
-- Searching for relavent video
-- adding videos to watched later, liked, history, classify video as shorts
-- Opps how to do subscriptions 

Aftermath of uploading video
- nodejs
- database mongodb 
- check for safe video
- resize the video
- python methods to upload videos using youtube-library

*/