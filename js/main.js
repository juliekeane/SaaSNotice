// JavaScript Document.

//Note: change values for the following variables accordingly
var nextUpdate = "2020/02/07 20:00";
var endUpdate = "2020/02/07 21:00";
var advanceDays = 30;

function getCookie(c_name){
	if (document.cookie.length>0)  {
	  var c_start=document.cookie.indexOf(c_name + "=");
	  if (c_start!=-1) 	{
		c_start=c_start + c_name.length + 1 ;
		c_end=document.cookie.indexOf(";",c_start) ;
		if (c_end==-1) c_end=document.cookie.length ;
		return unescape(document.cookie.substring(c_start,c_end)) ;
		}
	  }
	return "";
}

function setCookie(c_name,value,expiredays){
	var exdate=new Date();
	exdate.setDate(exdate.getDate()+expiredays);
	document.cookie=c_name+ "=" +escape(value)+ ((expiredays==null) ? "" : ";expires="+exdate.toUTCString()) ;
}

function checkCookie(c_name){
	var lastVisted=getCookie(c_name);
	var today = escape((new Date()).toLocaleDateString());
	if (lastVisted == today) {
			return 0 ;
	}
	setCookie(c_name,today,advanceDays);
	return 1;
}

//Show the update nofice daily during the period
function showNotice () {
	var nCurrentDate = Date.parse(new Date());
	var nNextUpdate = Date.parse(new Date(nextUpdate));
	var nExpires = nCurrentDate + advanceDays*1000*60*60*24;
	if (document.URL.search('#') == '-1'){ // ADDED THIS CONDITION FOR AUTOMATED TASKS
	  if (nExpires > nNextUpdate && nCurrentDate < nNextUpdate)  {
		if (checkCookie("SaaSNotice") == 1) {
			var fromDate = escape((new Date(nextUpdate)).toLocaleString());
			var toDate = escape((new Date(endUpdate)).toLocaleString());
			var argDates = fromDate + "||" + toDate;
			window.showModalDialog("../../SaaSNotice/index.html",argDates,"dialogWidth=900px;dialogHeight=800px");
		}
	  }
	}
}
