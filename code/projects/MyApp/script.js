	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);

	// configure our routes
	scotchApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'pages/about.html',
				controller  : 'aboutController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {

		function CreateDragableElement()
		{
			var draggable_element = document.createElement("div");
			draggable_element.setAttribute("id", "draggable-element");
			draggable_element.setAttribute("class", "ui-widget-content");
			draggable_element.setAttribute("style", "position: absolute; color: White; top: 35%; left: 450px;");
			document.getElementById("contact_content").appendChild(draggable_element);
			//console.log(draggable_element);
			return draggable_element;
		}

		function LoadNewImage(){
			var draggable_element = CreateDragableElement();
			var image = document.createElement("img");
			image.setAttribute("height", "200");
			image.setAttribute("width", "200");
			draggable_element.appendChild(image);
			var downloadingImage = new Image();
			downloadingImage.onload = function(){
			    image.src = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTGQjKIqWQqXhGwLgQ6IIwkyFhJKGJfwinEEJYr-B3-_-lFdCrGeLz1q60';
			}

		}
		var selected = null, // Object of the element to be moved
		    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
		    x_elem = 0, y_elem = 0, // Stores top, left values (edge) of the element
		    x_original_pos=0;

		// Will be called when user starts dragging an element
		function _drag_init(elem) {
		    // Store the object of the element which needs to be moved
		    selected = elem;
		    //console.log("selected element "+ selected);
		    x_original_pos = selected.offsetLeft;
		    x_elem = x_pos - selected.offsetLeft;
		}

		// Will be called when user dragging an element
		function _move_elem(e) {
		    x_pos = document.all ? window.event.clientX : e.pageX;

		    if (selected !== null) {
		        x_new_pos = (x_pos - x_elem);
		        selected.style.left = (x_pos - x_elem) + 'px';
		    }
		}
		function _move_elem_to_original_pos() {
		    document.getElementById("draggable-element").style.left = '450px';
		}

		function LoadNewImageWithController(){
			LoadNewImage();
			// Bind the functions...
			document.getElementById('draggable-element').onmousedown = function () {
			    _drag_init(this);
			    return false;
			};
			document.onmousemove = _move_elem;
			document.onmouseup = _destroy;
		}

		// Destroy the object when we are done
		function _destroy() {
		    if (selected !== null) {
					if(Math.abs(x_original_pos - x_new_pos) > 100){
						msg = (x_original_pos > x_new_pos) ? "disliked the image: " : "liked the image ";
						msg = msg + selected.getElementsByTagName('img')[0].getAttribute('src')
						console.log(msg);
						//console.log("selected.style.left: "+selected.style.left);
						selected = null;
						var elem = document.getElementById("draggable-element");
						elem.parentNode.removeChild(elem);
						LoadNewImageWithController();
					}
					else{
						selected = null;
						_move_elem_to_original_pos();
					}
			}
		}

		LoadNewImageWithController();



	});
