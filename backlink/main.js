$(function(){var html=$('html, body'),results=$('results'),domainPing=$('#domain-ping');$("#url").focus(function(){$("#url").attr("value","http://");});$('#search').on('submit',function(){$('#results').empty();$('.errors').empty();$('#processed').html("0");$('#total').html("0");$('#successful').html("0");$('#failed').html("0");$('#progressbar').find('.bar').width(0);$('#domain-ping').empty();var url=$('#url').val().toLowerCase();url=url.replace('https://','').replace('http://','').replace('www.','').replace(/[<]/g,'&lt;').replace(/[>]/g,'&gt;');newUrl=url.substr(0,1).toUpperCase()+ url.substr(1);$('#loading').css('visibility','visible').hide().fadeIn();if(url===''){$("#url").css({"border":"1px solid red"});$('#loading').fadeOut();$('#results').fadeOut();$('#loader').fadeOut();$('#stats').fadeOut();$('#norefresh').fadeOut();$("button[type=submit]").removeAttr("disabled");return;}
if($('input:radio[name=type]:checked').val()=="free"){$.get('process.php?init=true',{'domain':url},function(siteNum){if(siteNum.available<1){error=$('<div class="alert alert-error">No backlinks are currently available, please notify us and try again later.</div>').hide();error.appendTo('.errors').show("slide",{direction:"right"},1000);$('#results').fadeOut();$('#loading').fadeOut();$('#loader').fadeOut();$('#stats').fadeOut();$('#norefresh').fadeOut();$("button[type=submit]").removeAttr("disabled");return;}
if(siteNum.iswebsite=='error'){error=$('<div class="alert alert-error">'+ newUrl+" is not a valid website URL!"+'</div>').hide();error.appendTo('.errors').show("slide",{direction:"right"},1000);$("#url").css({"border":"1px solid red"});$('#loading').fadeOut();$('#results').fadeOut();$('#loader').fadeOut();$('#stats').fadeOut();$('#norefresh').fadeOut();$("button[type=submit]").removeAttr("disabled");return;}
html.delay(1100).animate({scrollTop:$('#result').offset().top- 50},800,'easeInOutExpo');$("#url").css({"border":"1px solid #CCC"});domainPing.text("Working on "+ newUrl);$("button[type=submit]").attr("disabled","disabled");$("#url").attr("disabled",true);$('#loader').fadeIn();$('#results').fadeIn();$('#stats').fadeIn();$('#norefresh').fadeIn();$("#total").text(siteNum.available);handles=[];count=0;for(i=1;i<=siteNum.available;i++){handle=$.get('process.php',{'domain':url,'hit_on':i},function(data){className='alert alert-';if(data.status_msg==='success'){className+='success';btnclassName='success';$("#successful").text(parseInt($("#successful").text(),10)+ 1);count=count+ 1;}else if(data.status_msg==='error'){$("#failed").text(parseInt($("#failed").text(),10)+ 1);className+='error';btnclassName='danger';}
len=data.site.length;urlname=data.site;if(len>90){urlname=data.site.substr(0,90)+'...';}
template=$('<div class="'+ className+'" data-dropdown="dropdown" style="padding-bottom:15px;"><a style="color:inherit;font-weight:bold" href="'+ data.site+'" target="_blank">'+ urlname+'</a> : '+ data.description+'<div class="pull-right"><a href="#" onclick="$.get(\'report.php\',{ option: \'dead\', id: \''+ data.site+'\' }, function(data) { alert(data); });$(this).fadeOut();return false;"><button class="btn btn-'+ btnclassName+'">Dead link</button></a>&nbsp; &nbsp;<a href="#" onclick="$.get(\'report.php\',{ option: \'poor\', id: \''+ data.site+'\' }, function(data) { alert(data); });$(this).fadeOut();return false;"><button class="btn  btn-'+ btnclassName+'">Poor quality</button></a></div>').hide();template.appendTo('#results').show({direction:"top",easing:'easeOutBounce'},2000);$("#processed").text(parseInt($("#failed").text(),10)+ parseInt($("#successful").text(),10));processedlinks=parseInt($("#processed").text(),10);$('#progressbar').find('.bar').width(((processedlinks/siteNum.available)*100)+"%");},"json");handles.push(handle);}
$.when.apply($,handles).then(function(){$("#animator, #domain-ping, #norefresh").hide();$('#loading, .progress').fadeOut();template=$('<div class="alert alert-success"><i class="icon-ok"></i>&nbsp; Finished submitting your website! Your results are below:</div>').hide();template.prependTo('#stats').show({direction:"top",easing:'easeOutBounce'},2000);$("button[type=submit]").removeAttr("disabled");window.onbeforeunload=true;});},"json");}else{$.get('processpremium.php?init=true',{'domain':url},function(siteNum){if(siteNum.available<1){error=$('<div class="alert alert-error">No backlinks are currently available, please notify us and try again later.</div>').hide();error.appendTo('.errors').show("slide",{direction:"right"},1000);$('#loading').fadeOut();$('#results').fadeOut();$('#loader').fadeOut();$('#stats').fadeOut();$('#norefresh').fadeOut();$("button[type=submit]").removeAttr("disabled");return;}
if(siteNum.iswebsite=='error'){error=$('<div class="alert alert-error">'+ newUrl+" is not a valid website URL!"+'</div>').hide();error.appendTo('.errors').show("slide",{direction:"right"},1000);$("#url").css({"border":"1px solid red"});$('#results').fadeOut();$('#loading').fadeOut();$('#loader').fadeOut();$('#stats').fadeOut();$('#norefresh').fadeOut();$("button[type=submit]").removeAttr("disabled");return;}
html.delay(1100).animate({scrollTop:$('#result').offset().top- 50},800,'easeInOutExpo');$("#url").css({"border":"1px solid #CCC"});domainPing.text("Working on "+ newUrl);$("button[type=submit]").attr("disabled","disabled");$("#url").attr("disabled",true);$('#results').fadeIn();$('#loader').fadeIn();$('#stats').fadeIn();$('#norefresh').fadeIn();$("#total").text(siteNum.available);handles=[];count=0;for(i=1;i<=siteNum.available;i++){handle=$.get('processpremium.php',{'domain':url,'hit_on':i},function(data){className='alert alert-';if(data.status_msg==='success'){className+='success';btnclassName='success';$("#successful").text(parseInt($("#successful").text(),10)+ 1);count=count+ 1;}else if(data.status_msg==='error'){$("#failed").text(parseInt($("#failed").text(),10)+ 1);className+='error';btnclassName='danger';}
len=data.site.length;urlname=data.site;if(len>90){urlname=data.site.substr(0,90)+'...';}
template=$('<div class="'+ className+'" data-dropdown="dropdown" style="padding-bottom:15px"><a style="color:inherit;font-weight:bold" href="'+ data.site+'" target="_blank">'+ urlname+'</a> : '+ data.description+'<div class="pull-right"><a href="#" onclick="$.get(\'report.php\',{ option: \'dead\', id: \''+ data.site+'\' }, function(data) { alert(data); });$(this).fadeOut();return false;"><button class="btn btn-'+ btnclassName+'">Dead link</button></a>&nbsp; &nbsp;<a href="#" onclick="$.get(\'report.php\',{ option: \'poor\', id: \''+ data.site+'\' }, function(data) { alert(data); });$(this).fadeOut();return false;"><button class="btn  btn-'+ btnclassName+'">Poor quality</button></a></div>').hide();template.appendTo('#results').show({direction:"top",easing:'easeOutBounce'},2000);$("#processed").text(parseInt($("#failed").text(),10)+ parseInt($("#successful").text(),10));processedlinks=parseInt($("#processed").text(),10);$('#progressbar').find('.bar').width(((processedlinks/siteNum.available)*100)+"%");},"json");handles.push(handle);}
$.when.apply($,handles).then(function(){$("#animator, #domain-ping, #norefresh").hide();$('#loading, .progress').fadeOut();$('.alert-share').fadeIn();template=$('<div class="alert alert-success"><i class="icon-ok"></i>&nbsp; Finished submitting your website! Your results are below:</div>').hide();template.prependTo('#stats').show({direction:"top",easing:'easeOutBounce'},2000);window.onbeforeunload=true;});},"json");}});$('#keywords').on('submit',function(){html.delay(1100).animate({scrollTop:$('#keywords').offset().top},800,'easeInOutExpo');$('#results').empty();domainPing.text("All done! Here are the results:");$('#loader').fadeIn();$.get('processkeywords.php?init=true',{'text':$('#text').val()},function(data){template=$('<div class="success"><b>Keywords: </b>'+ data.keywords+'<br/><b>Description: </b>'+ data.description+'</div><br>').hide();template.appendTo('#results').show({direction:"top",easing:'easeOutBounce'},2000);},"json");});$('.backtotop').click(function(){html.animate({scrollTop:0},'slow');});});