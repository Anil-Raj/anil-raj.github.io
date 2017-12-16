var svgns = "http://www.w3.org/2000/svg";
for (var i = 0; i < 100; i++) {
    var x = Math.random() * 500,
        y = Math.random() * 300;

    var rect = document.createElementNS(svgns, 'rect');
    rect.setAttributeNS(null, 'x', x);
    rect.setAttributeNS(null, 'y', y);
    rect.setAttributeNS(null, 'height', '50');
    rect.setAttributeNS(null, 'width', '50');
    rect.setAttributeNS(null, 'fill', '#'+Math.round(0xffffff * Math.random()).toString(16));
    var svg1 = document.getElementById("svgOne");
    console.log(svg1);
    console.log(rect);
    svg1.appendChild(rect);
}