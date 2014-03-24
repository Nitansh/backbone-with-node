function loadCss(url, id) {
    		var link = document.createElement("link");
    		link.type = "text/css";
    		link.rel = "stylesheet";
    		link.href = url;
    		link.id   = id;
    		document.getElementsByTagName("head")[0].appendChild(link);
		};