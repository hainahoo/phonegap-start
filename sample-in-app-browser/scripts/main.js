document.addEventListener("deviceready", onDeviceReady, false);

//Activate :active state
document.addEventListener("touchstart", function() {
}, false);

function onDeviceReady() {
	var app = new Application();
	app.run();
}

function Application() {
}

Application.prototype = {
    
	run: function() {
		var that = this,
		openLocal = document.getElementById("openLocal"),
		openExternalInAppBrowser = document.getElementById("openExternalInAppBrowser"),
		
	},
    
	openLocal: function() {
		window.open("http://172.16.1.128/sfs", "_self");
	},
 
	openExternalInAppBrowser:  function () {
		window.open("http://172.16.1.101/emcsfa", "_blank","location=no");
	},
}
