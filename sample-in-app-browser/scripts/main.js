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
		openPDF = document.getElementById("openPDF");
        
		openLocal.addEventListener("click", that.openLocal);		
		openExternalInAppBrowser.addEventListener("click", that.openExternalInAppBrowser);
		openPDF.addEventListener("click", that.openPDF);
	},
    
	openLocal: function() {
		window.open("http://icenium.com", "_blank");
	},
 
	openExternalInAppBrowser:  function () {
		window.open("http://172.16.1.101/emcsfa", "_blank");
	},
    
	
	openPDF: function() {
		if (device.uuid == "e0101010d38bde8e6740011221af335301010333" || device.uuid == "e0908060g38bde8e6740011221af335301010333") {
			alert("Not Supported in Simulator.");
		}
		else {
			if (device.platform == 'Android') {
				window.open("whitepaper-mobile-developer-guidance.pdf", "_system");
			}
			else
				window.open("whitepaper-mobile-developer-guidance.pdf", "_blank");
		}
	}
}
