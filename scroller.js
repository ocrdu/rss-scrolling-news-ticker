var scrollPosition;
var scrollBoxWidth;
var win;

function start(feed, windowID) {
  scrollPosition = 0;
  win = document.getElementById(windowID);
  scrollBoxWidth = win.style.width.substr(0, win.style.width.indexOf("px"));
  getNews(feed);
  setInterval(function() {getNews(feed);}, 60000);
  scrollNews();
}

function getNews(feed) {
  var newsFeedRequest = new XMLHttpRequest();
  newsFeedRequest.open("GET", "feedbouncer.php?feed=" + feed, true);
  newsFeedRequest.onreadystatechange = processNewsFeed;
  newsFeedRequest.send(null);

  function processNewsFeed() {
    var items;
    var title;
    var url;
    var stream = "";
    if (newsFeedRequest.readyState == 4 && newsFeedRequest.status == 200) {
      items = newsFeedRequest.responseXML.getElementsByTagName("item");
      for (var i=0; i<items.length; i++) {
        title = items[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        url = items[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
        stream += "<a style ='text-decoration: none; color: black; outline: none;' href='" + url + "' target='_blank'>" + title + "</a> " + " | ";
      }
      win.innerHTML = stream + stream; //Trick 1
    }
  }
}

function scrollNews() {
  var interval = setInterval("moveNews()", 20);
  win.onmouseover = function() {clearInterval(interval);};
  win.onmouseout = function() {interval = setInterval('moveNews();', 20);};
}

function moveNews() {
  win.scrollLeft += 1;
  if (scrollPosition == win.scrollLeft) {
    win.scrollLeft = (win.scrollLeft - scrollBoxWidth)/2 - 1; //Trick 2
  }
  scrollPosition = win.scrollLeft;
}