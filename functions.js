function banners()
{$("#slideshow").append('<img src="./includes/img/banner/number-one-ranked-seo-company.jpg" alt="Submit Express - Number One Ranked Search Egnine Optimization Firm" width="980" height="200" />');$("#slideshow").append('<img src="./includes/img/banner/one-of-the-fastest-growing-companies.jpg" alt="Submit Express - One of the Fastest Growing Companies" width="980" height="200" />');$("#slideshow").append('<img src="./includes/img/banner/seo-services.jpg" alt="Submit Express - Search Engine Optimization Services" width="980" height="200" />');$("#slideshow").slideshow({pauseSeconds:6,width:980,height:200,caption:false,loop:false});}
function freeSubmission()
{var warning='';if(!isUrl('input_url'))
{warning='- Please provide a valid URL\n';}
if(!isEmail('input_email'))
{warning+='- Please provide a valid Email\n';}
if($('#input_email').val()=='')
{warning+='- Please provide a valid Name\n';}
if(!isNumber('input_phone'))
{warning+='- Please provide a valid Phone Number. Phone number must contain minimum 10 digits. For example 818.567.3030 or 818-567-3030. Other permitted chracters are: / . - ( )\n';}
if($('#input_country').val()=='None')
{warning+='- Please select a Country\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
phone_num=$('#input_phone').val().replace(/[\-\)\.\/]/g,'-');phone_num=phone_num.replace(/\(/g,'');phone_num=phone_num.replace(/\s/g,'');$('#input_phone').val(phone_num);$.ajax({url:'includes/php/ajax/freeSubmission.php',type:'GET',dataType:'html',async:true,data:$('#free_submission').serialize(),beforeSend:function()
{$('#process').html('<strong>Please be patient...</strong><img src="includes/img/ajax/process.gif" />');$('#notification').slideUp();$('#success').slideUp();$('#submit').attr('disabled','disabled');},error:function()
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<p>Something went wrong! Please try again.</p>');$('#notification').slideDown();$('#submit').attr('disabled','');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<div class="text" id="redhighlite">'+data.substring(6)+'</div>');$('#notification').slideDown();}
else
{$('#process').html('<img src="includes/img/ajax/success.gif" />');$('#success').html(data);$('#success').slideDown();$('#input_url').val('http://');$('#input_email').val('');$('#input_name').val('');$('#input_phone').val('');$('#input_country').val('None');_gaq.push(['_trackPageview','/free-submission-successful']);}
$('#submit').attr('disabled','');captcha();}});}
function newsletter(form_id)
{var warning='';if(!isEmail('email'))
{warning+='- Please provide a valid Email';}
if(warning!='')
{alert(warning);return false;}
$('#page_url').val(window.location.href);$.ajax({url:'includes/php/ajax/newsletter.php',type:'GET',dataType:'html',async:true,data:$('#'+form_id).serialize(),beforeSend:function()
{$('.submit').attr('disabled','disabled');$('#'+form_id+'_process').html('<strong>Please wait...</strong><img src="includes/img/ajax/process.gif" />');$('#'+form_id+'_process').slideDown();},error:function()
{$('.submit').attr('disabled','');$('#'+form_id+'_process').html('<strong>Failed! Please try again...</strong><img src="includes/img/ajax/failed.gif" />');},success:function(data)
{if(data.indexOf('error')==0)
{$('#'+form_id+'_process').html(data.substring(6));}
else
{$('#'+form_id+'_process').html(data);$('#email').val('');_gaq.push(['_trackPageview','/newsletter-successful']);}
$('.submit').attr('disabled','');}});}
function requestQuote()
{var warning='';if($('#req_name').val()=='')
{warning+='- Please provide a valid Name\n';}
if(!isEmail('req_email'))
{warning+='- Please provide a valid Email\n';}
if(!isUrl('req_url'))
{warning+='- Please provide a valid URL\n';}
if(!isNumber('req_phone'))
{warning+='- Please provide a valid Phone Number. Phone number must contain minimum 10 digits. For example 818.567.3030 or 818-567-3030. Other permitted chracters are: / . - ( )\n';}
if(!$("input:[name*='req_services']").is(':checked'))
{warning+='- Please select at least one service type\n';}
if($('#req_keywords').val()=='')
{warning+='- Please provide some keywords (at least one)\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
phone_num=$('#req_phone').val().replace(/[\-\)\.\/]/g,'-');phone_num=phone_num.replace(/\(/g,'');phone_num=phone_num.replace(/\s/g,'');$('#req_phone').val(phone_num);$('#req_page_url').val(window.location.href);$.ajax({url:'includes/php/ajax/requestQuote.php',type:'GET',dataType:'html',async:true,data:$('#request_quote').serialize(),beforeSend:function()
{$('.submit').attr('disabled','disabled');$('#req_process').html('<strong>Please wait...</strong><img src="includes/img/ajax/process.gif" />');$('#req_process').slideDown();},error:function()
{$('.submit').attr('disabled','');$('#req_process').html('<strong>Failed! Please try again...</strong><img src="includes/img/ajax/failed.gif" />');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#req_process').html(data.substring(6));}
else
{$('#req_process').html('<strong>'+data+' </strong><img src="includes/img/ajax/success.gif" />');alert(data);_gaq.push(['_trackPageview','/request-main-successful']);}
$('#request_quote')[0].reset();captcha();$('.submit').attr('disabled','');}});}
function requestQuoteSidebar()
{var warning='';if($('#req_name').val()=='')
{warning+='- Please provide a valid Name\n';}
if(!isEmail('req_email'))
{warning+='- Please provide a valid Email\n';}
if(!isUrl('req_url'))
{warning+='- Please provide a valid URL\n';}
if(!isNumber('req_phone'))
{warning+='- Please provide a valid Phone Number. Phone number must contain minimum 10 digits. For example 818.567.3030 or 818-567-3030. Other permitted chracters are: / . - ( )\n';}
if(warning!='')
{alert(warning);return false;}
phone_num=$('#req_phone').val().replace(/[\-\)\.\/]/g,'-');phone_num=phone_num.replace(/\(/g,'');phone_num=phone_num.replace(/\s/g,'');$('#req_phone').val(phone_num);$('#req_page_url').val(window.location.href);$.ajax({url:'includes/php/ajax/requestQuoteSidebar.php',type:'GET',dataType:'html',async:true,data:$('#req_sidebar').serialize(),beforeSend:function()
{$('.submit').attr('disabled','disabled');$('#req_process').html('<strong>Please wait...</strong><img src="includes/img/ajax/process.gif" />');$('#req_process').slideDown();},error:function()
{$('.submit').attr('disabled','');$('#req_process').html('<strong>Failed! Please try again...</strong><img src="includes/img/ajax/failed.gif" />');},success:function(data)
{if(data.indexOf('error')==0)
{$('#req_process').html(data.substring(6));}
else
{_gaq.push(['_trackPageview','/request-sidebar-successful']);$('#req_sidebar').submit();}
$('.submit').attr('disabled','');}});}
function linkPopularity()
{var warning='';if(!isUrl('input_url'))
{warning='- Please provide a valid URL\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
$.ajax({url:'includes/php/ajax/linkPopularity.php',type:'GET',dataType:'html',async:true,data:$('#link_popularity_form').serialize(),beforeSend:function()
{$('#process').html('<strong>Please be patient...</strong><img src="includes/img/ajax/process.gif" />');$('#notification').slideUp();$('#link_pop_result').slideUp();$('#submit').attr('disabled','disabled');},error:function()
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<p>Something went wrong! Please try again.</p>');$('#notification').slideDown();$('#submit').attr('disabled','');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<div class="text" id="redhighlite">'+data.substring(6)+'</div>');$('#notification').slideDown();}
else
{$('#process').html('<img src="includes/img/ajax/success.gif" />');$('#link_pop_result').html(data);$('#link_pop_result').slideDown();$('#link_popularity_form')[0].reset();_gaq.push(['_trackPageview','/link-popularity-check-successful']);}
$('#submit').attr('disabled','');captcha();}});}
function pageSnooper()
{var warning='';if(!isUrl('input_url'))
{warning='- Please provide a valid URL\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
$.ajax({url:'includes/php/ajax/pageSnooper.php',type:'GET',dataType:'html',async:true,data:$('#page_snooper_form').serialize(),beforeSend:function()
{$('#process').html('<strong>Please be patient...</strong><img src="includes/img/ajax/process.gif" />');$('#notification').slideUp();$('#page_snooper_result').slideUp();$('#submit').attr('disabled','disabled');},error:function()
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<p>Something went wrong! Please try again.</p>');$('#notification').slideDown();$('#submit').attr('disabled','');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<div class="text" id="redhighlite">'+data.substring(6)+'</div>');$('#notification').slideDown();}
else
{$('#process').html('<img src="includes/img/ajax/success.gif" />');$('#page_snooper_result').html(data);$('#page_snooper_result').slideDown();$('#page_snooper_form')[0].reset();_gaq.push(['_trackPageview','/page-snooper-successful']);
}
$('#submit').attr('disabled','');captcha();}});}
function ksp()
{var warning='';if($('#keywords').val()=='')
{warning='- Please provide a keyword\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
$.ajax({url:'includes/php/ajax/ksp.php',type:'GET',dataType:'html',async:true,data:$('#ksp_form').serialize(),beforeSend:function()
{$('#process').html('<strong>Please be patient...</strong><img src="includes/img/ajax/process.gif" />');$('#notification').slideUp();$('#ksp_result').slideUp();$('#submit').attr('disabled','disabled');},error:function()
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<p>Something went wrong! Please try again.</p>');$('#notification').slideDown();$('#submit').attr('disabled','');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<div class="text" id="redhighlite">'+data.substring(6)+'</div>');$('#notification').slideDown();}
else
{$('#process').html('<img src="includes/img/ajax/success.gif" />');$('#ksp_result').html(data);$('#ksp_result').slideDown();$('#ksp_form')[0].reset();zibra('ksp_table');}
$('#submit').attr('disabled','');captcha();}});}
function analyzeLinks()
{var warning='';if(!isUrl('analyze_url'))
{warning='- Please provide a valid URL\n';}
if($('#captcha').val()=='')
{warning+='- Please provide a valid Security Code';}
if(warning!='')
{alert(warning);return false;}
$.ajax({url:'includes/php/ajax/LinksAnalyzer.php',type:'GET',dataType:'html',async:true,data:$('#link_analyzer_form').serialize(),beforeSend:function()
{$('#process').html('<strong>Please be patient...</strong><img src="includes/img/ajax/process.gif" />');$('#notification').slideUp();$('#link_analyzer_result').slideUp();$('#submit').attr('disabled','disabled');},error:function()
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<p>Something went wrong! Please try again.</p>');$('#notification').slideDown();$('#submit').attr('disabled','');captcha();},success:function(data)
{if(data.indexOf('error')==0)
{$('#process').html('<img src="includes/img/ajax/failed.gif" />');$('#notification').html('<div class="text" id="redhighlite">'+data.substring(6)+'</div>');$('#notification').slideDown();}
else
{$('#process').html('<img src="includes/img/ajax/success.gif" />');$('#link_analyzer_result').html(data);$('#link_analyzer_result').slideDown();$('#link_analyzer_form')[0].reset();_gaq.push(['_trackPageview', '/link-counter-successful']);if($('#inlinks').length)zibra('inlinks');if($('#outlinks').length)zibra('outlinks');}
$('#submit').attr('disabled','');captcha();}});}
function captcha()
{$('#captcha').val('');$('#img-captcha').attr('src','includes/php/classes/captcha.php?width=80&height=35&characters=5&ran='+Math.random());}
function zibra(id)
{$('table#'+id+' tbody tr:not([th]):odd').addClass('odd');$('table#'+id+' tbody tr:not([th]):even').addClass('even');}
function moreInfo(id,toggle)
{if($('#'+toggle).html()=='+')
{$('#'+toggle+'_img').attr('src','includes/img/ajax/minus.gif');$('#'+toggle).html('-');$('#'+id).slideDown();}
else if($('#'+toggle).html()=='-')
{$('#'+toggle+'_img').attr('src','includes/img/ajax/plus.gif');$('#'+toggle).html('+');$('#'+id).slideUp();}}
function isEmail(input_id)
{var regex=/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/;var email=$('#'+input_id).val();return regex.test(email);}
function isUrl(input_id){var regex=/^((http|https|ftp):\/\/)?(([A-Z0-9][A-Z0-9_-]*)(\.[A-Z0-9][A-Z0-9_-]*)+)(:(\d+))?\/?/i;var url=$('#'+input_id).val();return regex.test(url);}
function isNumber(input_id){var regex=/^\d+[\d\-\(\)\.\/\s]*\d+$/;var number=$('#'+input_id).val().replace(/[\-\(\)\.\/\s]/g,'');return(number.length<10)?false:regex.test(number);}
function setIP(ip)
{$('#client_ip').val(ip);}
var timeout=500;var closetimer=0;var ddmenuitem=0;function jsddm_open()
{jsddm_canceltimer();jsddm_close();ddmenuitem=$(this).find('ul').eq(0).css('visibility','visible');}
function jsddm_close()
{if(ddmenuitem)ddmenuitem.css('visibility','hidden');}
function jsddm_timer()
{closetimer=window.setTimeout(jsddm_close,timeout);}
function jsddm_canceltimer()
{if(closetimer)
{window.clearTimeout(closetimer);closetimer=null;}}
$(document).ready(function()
{$('#jsddm > li').bind('mouseover',jsddm_open);$('#jsddm > li').bind('mouseout',jsddm_timer);});document.onclick=jsddm_close;function changeScrollerArrow(cp,sw,nos){var arrowLoc='includes/img/';var arrowLeft=document.getElementById('scroller-arrow-left');var arrowRight=document.getElementById('scroller-arrow-right');if(cp==0){arrowLeft.src=arrowLoc+'left-off.gif';arrowRight.src=arrowLoc+'right.gif';}else if(cp==(nos-2)*sw){arrowLeft.src=arrowLoc+'left.gif';arrowRight.src=arrowLoc+'right-off.gif';}else{arrowLeft.src=arrowLoc+'left.gif';arrowRight.src=arrowLoc+'right.gif';}}
function moveItem(direction){var increment=5;var slideWidth=255;var numberOfSlides=4;var slideStyle=document.getElementById('slide-holder').style;var currentPosition=Number(slideStyle.left.replace('px',''));direction=='right'?increment=increment*-1:increment=increment;direction=='right'?slideWidth=slideWidth*-1:slideWidth=slideWidth+increment;var stopSlidePosition=currentPosition%slideWidth;if(direction=='right'&&currentPosition>slideWidth*(numberOfSlides-2)||direction=='left'&&currentPosition!=0){slideStyle.left=currentPosition+increment+'px';animate=setTimeout('moveItem(\''+direction+'\')',15);if(stopSlidePosition==0&&currentPosition!=0){changeScrollerArrow(currentPosition,slideWidth,numberOfSlides);clearTimeout(animate);var theDirection=direction;}}else{changeScrollerArrow(currentPosition,slideWidth,numberOfSlides);}}
(function($){$.fn.slideshow=function(options){var defaults={pauseSeconds:2,fadeSpeed:0.5,width:468,height:120,caption:true,cssClass:'slideshowlite',loop:true};var options=$.extend(defaults,options);var target=this;var items=$(target).children("a");var instance;if(!$(this).hasClass(options.cssClass))$(this).addClass(options.cssClass);$(this).css({width:options.width+"px",height:options.height+"px"});$(this).children("img").wrap(document.createElement("a"));var i=1;$(this).children("a").each(function(){$(this).attr("rel",i++);});$(this).append("<ul></ul>");$(this).append("<ol></ol>");var pagination=$(this).children("ul");var caption=$(this).children("ol");var i=1;var j=0;$(this).children("a").each(function(){pagination.append("<li><a href=\"javascript:void(0);\">"+i+++"</a></li>");caption.append("<li>"+$("#"+$(target).attr("id")+" img:nth("+j+++")").attr("alt")+"</li>");});pagination.fadeTo(0,0.8);caption.fadeTo(0,0.6);caption.hide();var firstItem=$(target).children("a:first");var lastItem=$(target).children("a:last");var currentItem=firstItem;var paginationHighlight=function(sequence){pagination.children("li").children("a").removeClass("current");pagination.children("li").children("a:nth("+sequence+")").addClass("current");}
var showCaption=function(sequence){caption.show();caption.children("li").hide();caption.children("li:nth("+sequence+")").fadeIn();}
var makeSlideshow=function(){pagination.children("li").children("a").click(function(){if(!$(this).hasClass("current"))
{currentItem=$(target).children("a:nth("+($(this).text()-1)+")");currentItem.show();startSlideshow();}});paginationHighlight(currentItem.attr("rel")-1);if(options.caption==true)
{showCaption(currentItem.attr("rel")-1);}
currentItem.fadeIn(options.fadeSpeed*1000,function(){$(target).children("a").hide();$(this).show().css("z-index",1);});if(!options.loop)
{if(currentItem.children("img").attr("src")==lastItem.children("img").attr("src"))
{clearInterval(instance);}}
if(currentItem.children("img").attr("src")==lastItem.children("img").attr("src"))
{currentItem=firstItem;currentItem.css("z-index",2);}
else
{currentItem=currentItem.next();}};var startSlideshow=function(){clearInterval(instance);makeSlideshow();instance=setInterval(makeSlideshow,options.pauseSeconds*1000);};startSlideshow();};})(jQuery);