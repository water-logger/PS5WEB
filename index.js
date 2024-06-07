function changeIframe(url) {
    if (url == "https://google.com" | url == "google.com") {
        document.getElementById('window').src = "https://www.google.com/search?igu=1";
    } else {
        document.getElementById('window').src = url;
    }
}

function changeURL(text) {
    document.getElementById("url").value = text
}