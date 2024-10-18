// JavaScript Document
var oAjax=null;
var oAction=0;
function createAjax(URL, val) {
    bzAJNoCache = new Date();
    URL += '&bzAJNoCache=' + bzAJNoCache.getTime();	
	preloadAjax(val);
	if (window.XMLHttpRequest) 
	{
		oAjax = new XMLHttpRequest();
		oAjax.onreadystatechange = process;
		oAjax.open("GET", URL, true);
		oAjax.send(null);			
	} else if (window.ActiveXObject) 
	{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		if (oAjax) 
		{
			oAjax.onreadystatechange = process;
			oAjax.open("GET", URL, true);
			oAjax.send();			
		}
	}
}
function  createAjaxURL(URL,val){	
	bzAJNoCache=new Date();
	URL+='-'+bzAJNoCache.getTime()+'.aspx';
	preloadAjax(val);
	if (window.XMLHttpRequest) 
	{
		oAjax = new XMLHttpRequest();
		oAjax.onreadystatechange = process;
		oAjax.open("GET", URL, true);
		oAjax.send(null);			
	} else if (window.ActiveXObject) 
	{
		oAjax = new ActiveXObject("Microsoft.XMLHTTP");
		if (oAjax) 
		{
			oAjax.onreadystatechange = process;
			oAjax.open("GET", URL, true);
			oAjax.send();			
		}
	}
}
function sdeplay(stext)
{
    
}
function preloadAjax(val)
{	
	oAction=val;
	str = '<img src="/js/loading.gif" align="center" valign="middle" border="0"/>&nbsp;Loading...';
	switch (oAction)
	{
	    case 1: break;
	    case 3: break;
	    case 13: break;
	    default:
	        {
	            $("#loading").show();
	          
	        } break;
	    
	}
}
function process()
{
   
	if (oAjax.readyState == 4) 
	{
	   
	    if (oAjax.status == 200 || oAjax.status == 500)
	    {
	       
			switch (oAction)
			{
			    case 1: {			    
			        $('#cboHuyen').empty();
			        $('#cboHuyen').append(oAjax.responseText);
			    } break;
			    case 3: var res = oAjax.responseText.split(",");
			        if (res[0] = "1") {
			            swal("", res[1], "success");
			            document.getElementById('txtEmailNewsletter').value = '';
			        }
			        else {
			            swal("", res[1], "warning");
			        } break;
			    case 13: {

			        if (oAjax.responseText == "1")
			            swal("", "Cập nhật thành công", "success");
			        else
			            swal("", "Cập nhật thất bại", "warning");

			    } break;
			    default:
			        {			           
			            $("#divOther").delay(100000).html(oAjax.responseText);
			            $("#loading").hide();
			        }
			       break;
			}
		}
	}
}