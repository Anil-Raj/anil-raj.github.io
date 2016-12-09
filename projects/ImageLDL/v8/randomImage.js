angular.module('randomImage', []);

var randomImage = angular.module('randomImage');
randomImage.component('displayImage', {
    templateUrl: 'randomImage.html',
    controller: randomImageComponent
});

function randomImageComponent() {
}