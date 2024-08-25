AFRAME.registerComponent('start-button',{
    init: function () {
        console.log("start button registrado");
        var cube = document.querySelector('a-scene').sceneEl.querySelector("#boxId");
        cube.addEventListener("mousedown", function (evt) {
            cube.setAttribute('material', 'color', 'red');
        });
        cube.addEventListener("mouseup", function (evt) {
            cube.setAttribute('material', 'color', 'green');//we want to change this from "blue" to "green" to avoid some bugs
        });
        cube.addEventListener("mouseenter", function (evt) {
            cube.setAttribute('material', 'color', 'green');
        });
        cube.addEventListener("mouseleave", function (evt) {
            cube.setAttribute('material', 'color', 'blue');
        });
    }
});