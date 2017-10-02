function GetElementsWithClassName(_1,_2){var _3=document.getElementsByTagName(_1);var _4=new Array();for(i=0;i<_3.length;i++){if(_3[i].className==_2){_4[_4.length]=_3[i];}}return _4;}

var allchecked = false;
function check_common(){
	var checkall = document.getElementById("checkall");
	var _5=GetElementsWithClassName("input","common");
	if (allchecked==false) {
		for(i=0;i<_5.length;i++){
			_5[i].checked="checked";
			}
		allchecked = true;
		checkall.firstChild.nodeValue="Uncheck all"
		}
	else {
		for(i=0;i<_5.length;i++){
			_5[i].checked=false;
			}
		allchecked = false;
		checkall.firstChild.nodeValue="Check all"
		}
	}