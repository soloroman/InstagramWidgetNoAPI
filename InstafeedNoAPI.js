function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function getInstaProfile(username, callback){
    httpGetAsync("https://www.instagram.com/"+username, function (response) {
        let result = response.split("window._sharedData = ");
        result = result[1].split(";</script>");
        json = JSON.parse(result[0]);
        callback(json);
    });
}
