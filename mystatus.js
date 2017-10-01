var receiveStatus  = getXmlHttpRequestObject();
var reloadStatusTime  = 60000;
var statusTimer;
var inActive  = 0;

_getOnlineStatus();
// Startup the Status Online.
function _getOnlineStatus() {
  getStatusText();
}

// Gets the current status from the server
function getStatusText() {
  clearInterval(statusTimer);
  inActive++;
  var jTime = new Date();
  var param = 'uid=' + jTime.getTime();
  if (receiveStatus.readyState == 4 || receiveStatus.readyState == 0) {
    receiveStatus.onreadystatechange = handleReceiveStatus;
    receiveStatus.open('GET', '/cgi-bin/guide/status.pl?' + param, true);
    receiveStatus.send(null);
  }
}

// Function for handling the return of status text
function handleReceiveStatus() {
  if (receiveStatus.readyState == 4) {
    var objStatus = document.getElementById('onLineStatus');
    objStatus.innerHTML = receiveStatus.responseText;
    statusTimer = setTimeout('getStatusText();',reloadStatusTime);
	if (inActive > 15) {
      clearInterval(statusTimer);
	}
  }
}

// AJAX Browser Support Code
function getXmlHttpRequestObject(){
  try {
    // Chrome, Firefox, IE7+, Opera, Safari
    return new XMLHttpRequest(); 
  } catch (e) { 
    // IE6
    try { 
      // The latest stable version. It has the best security, performance, 
      // reliability, and W3C conformance. Ships with Vista, and available 
      // with other OS's via downloads and updates. 
      return new ActiveXObject('MSXML2.XMLHTTP.6.0');
    } catch (e) { 
      try { 
        // The fallback.
        return new ActiveXObject('MSXML2.XMLHTTP.3.0');
      } catch (e) { 
        alert('This browser is not AJAX enabled.'); 
        return null;
      } 
    }
  }
  
}