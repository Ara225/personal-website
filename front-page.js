async function showBlogPosts() {
    var result = await fetch("https://dev.to/api/articles?username=ara225")
    var resultJson = await result.json()
    var blogDiv = document.getElementById("blog")
    for (article in resultJson) {
        blogDiv.innerHTML += '<a class="w3-light-grey w3-button w3-padding-large w3-left-align" ' +
            'href="' + resultJson[article].url + '" target="_blank"' +
            ' style="min-height:8em;margin-bottom: 1em; width:100%; overflow-wrap: break-word;white-space: normal">' +
            '<h2>' + resultJson[article].title + "</h2>" +
            "<p>" + resultJson[article].description +
            "</p>" +
            "</a>"
    }
}
function viewMore(event) {
    var items = document.getElementsByClassName("hide-small")
    document.getElementById("ViewMore").style.display = "none"
    for (item in items) {
        if (items[item].style) {
            items[item].style.display = "table"
        }
    }
}
showBlogPosts()