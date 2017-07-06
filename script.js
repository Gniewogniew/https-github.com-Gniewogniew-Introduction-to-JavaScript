document.getElementById("menu").addEventListener("change", MyFunction);

var element = document.getElementById('content');

function MyFunction(event) {
    var style = event.target.id;
    var value = event.target.value;
    element.style[style] = value;
}
