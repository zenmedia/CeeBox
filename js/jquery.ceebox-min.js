//ceebox
/*
 * CeeBox 2.0.9 jQuery Plugin (minimized version)
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/ceebox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Inspiration for ceebox comes from Thickbox (http://jquery.com/demo/thickbox/) and Videobox (http://videobox-lb.sourceforge.net/)
 * However, along the upgrade path ceebox has morphed a long way from those roots.
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

(function(c){function y(b,a){D();c(b).each(function(d){c.ceebox(this,d,a)})}function D(){o=new (function(){var b="";c.each(c.fn.ceebox.videos,function(a,d){if(d.siteRgx!=null&&typeof d.siteRgx!="string"){a=String(d.siteRgx);b=b+a.slice(1,a.length-2)+"|"}});this.vidRegex=new RegExp(b+"\\.swf$","i")})}function z(b,a){b=b.match(a);a=[];var d=b.length;if(d>1){a[0]=b[0];a[1]=b[1];a[2]=d==2?b[0]:b[2];a[3]=d==4?b[3]:b[1]}else a=[b,b,b,b];return a}function E(b,a,d){document.onkeydown=function(f){f=f||window.event;
f=f.keyCode||f.which;switch(f){case 13:return false;case 27:c.fn.ceebox.closebox(d);document.onkeydown=null;break;case 188:case 37:b&&b.prevId!=null&&u(a,b.prevId,d);break;case 190:case 39:b&&b.nextId!=null&&u(a,b.nextId,d);break}}}function F(b,a,d){function f(g,l){var n,s=e,p=s-2E3;g=="prev"?(n=[{left:0},"left"]):(n=[{right:0},x="right"]);var r=function(q){return c.extend({zIndex:105,width:k+j,height:i+j,position:"absolute",top:m,backgroundPosition:n[1]+" "+q+j},n[0])};c("<a href='#'></a>").text(g).attr({id:"cee_"+
g}).css(r(p)).hover(function(){c(this).css(r(s))},function(){c(this).css(r(p))}).one("click",function(q){q.preventDefault();u(a,l,d.fadeOut)}).appendTo("#cee_box")}var k=parseInt(d.width/2),i=d.height-d.titleHeight-2*d.padding,m=d.padding,e=i/2,j="px";if(d.type=="video"||d.type=="html"){k=60;i=80;m=parseInt((d.height-d.titleHeight-10)/2);e=24}if(d.type=="video")m=parseInt((m*2-2*d.padding)/2);b.prevId!=null&&f("prev",b.prevId);b.nextId&&f("next",b.nextId);c("#cee_title").append("<div id='cee_count'>Item "+
(b.cbId+1)+" of "+b.cbLen+"</div>")}function u(b,a,d){c("#cee_prev,#cee_next").unbind().click(function(){return false});document.onkeydown=null;var f=c("#cee_box").children(),k=f.length;f.fadeOut(d,function(){c(this).remove();this==f[k-1]&&b.eq(a).trigger("click")})}function t(b,a){return b&&b<a||!a?b:a}function v(b){return typeof b=="function"}function G(b){var a=b.length;return a>1?b[a-1]:b}c.ceebox={version:"2.0.9"};c.fn.ceebox=function(b){b=c.extend({selector:c(this).selector},c.fn.ceebox.defaults,
b);var a=this;b.videoJSON?c.getJSON(b.videoJSON,function(d){c.extend(c.fn.ceebox.videos,d);y(a,b)}):y(a,b);c(".cee_close").die().live("click",function(){c.fn.ceebox.closebox();return false});return this};c.fn.ceebox.defaults={html:true,image:true,video:true,modal:false,titles:true,htmlGallery:true,imageGallery:true,videoGallery:true,videoWidth:false,videoHeight:false,videoRatio:"16:9",htmlWidth:false,htmlHeight:false,htmlRatio:false,imageWidth:false,imageHeight:false,animSpeed:"normal",easing:"swing",
fadeOut:400,fadeIn:400,overlayColor:"#000",overlayOpacity:0.8,boxColor:"",textColor:"",borderColor:"",borderWidth:"3px",padding:15,margin:150,onload:null,unload:null,videoJSON:null};c.fn.ceebox.ratios={"4:3":1.333,"3:2":1.5,"16:9":1.778,"1:1":1,square:1};c.fn.ceebox.relMatch={width:/(?:width:)([0-9]+)/i,height:/(?:height:)([0-9]+)/i,ratio:/(?:ratio:)([0-9\.:]+)/i,modal:/modal:true/i,nonmodal:/modal:false/i,videoSrc:/(?:videoSrc:)(http:[\/\-\._0-9a-zA-Z:]+)/i,videoId:/(?:videoId:)([\-\._0-9a-zA-Z:]+)/i};
c.fn.ceebox.loader="<div id='cee_load' style='z-index:105;top:50%;left:50%;position:fixed'></div>";c.fn.ceebox.videos={base:{param:{wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"},flashvars:{autoplay:true}},facebook:{siteRgx:/facebook\.com\/video/i,idRgx:/(?:v=)([a-zA-Z0-9_]+)/i,src:"http://www.facebook.com/v/[id]"},youtube:{siteRgx:/youtube\.com\/watch/i,idRgx:/(?:v=)([a-zA-Z0-9_\-]+)/i,src:"http://www.youtube.com/v/[id]&hl=en&fs=1&autoplay=1"},metacafe:{siteRgx:/metacafe\.com\/watch/i,
idRgx:/(?:watch\/)([a-zA-Z0-9_]+)/i,src:"http://www.metacafe.com/fplayer/[id]/.swf"},google:{siteRgx:/google\.com\/videoplay/i,idRgx:/(?:id=)([a-zA-Z0-9_\-]+)/i,src:"http://video.google.com/googleplayer.swf?docId=[id]&hl=en&fs=true",flashvars:{playerMode:"normal",fs:true}},spike:{siteRgx:/spike\.com\/video|ifilm\.com\/video/i,idRgx:/(?:\/)([0-9]+)/i,src:"http://www.spike.com/efp",flashvars:{flvbaseclip:"[id]"}},vimeo:{siteRgx:/vimeo\.com\/[0-9]+/i,idRgx:/(?:\.com\/)([a-zA-Z0-9_]+)/i,src:"http://www.vimeo.com/moogaloop.swf?clip_id=[id]&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1"},
dailymotion:{siteRgx:/dailymotion\.com\/video/i,idRgx:/(?:video\/)([a-zA-Z0-9_]+)/i,src:"http://www.dailymotion.com/swf/[id]&related=0&autoplay=1"},cnn:{siteRgx:/cnn\.com\/video/i,idRgx:/(?:\?\/video\/)([a-zA-Z0-9_\/\.]+)/i,src:"http://i.cdn.turner.com/cnn/.element/apps/cvp/3.0/swf/cnn_416x234_embed.swf?context=embed&videoId=[id]",width:416,height:374}};c.ceebox=function(b,a,d){var f,k=[],i=0;c(b).is("a[href],area[href],input[href]")?(f=c(b)):(f=c(b).find("a[href],area[href],input[href]"));var m=
{image:function(j){return j.match(/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/i)||false},video:function(j,g){return g&&g.match(/^video$/i)?true:j.match(o.vidRegex)||false},html:function(){return true}};f.each(function(j){var g=this,l=c.metadata?c.extend({},d,c(g).metadata()):d;c.each(m,function(n){if(m[n](c(g).attr("href"),c(g).attr("rel"))&&l[n]){if(d.htmlGallery==true&&n=="html"){k[i]=j;i++}else if(d.imageGallery==true&&n=="image"){k[i]=j;i++}else if(d.videoGallery==true&&n=="video"){k[i]=j;i++}c(g).unbind("click").bind("click",
function(s){s.preventDefault();s.stopPropagation();c.fn.ceebox.overlay(l);if(n=="image"){var p=new Image;p.onload=function(){var r=p.width,q=p.height;l.imageWidth=t(r,c.fn.ceebox.defaults.imageWidth);l.imageHeight=t(q,c.fn.ceebox.defaults.imageHeight);l.imageRatio=r/q;c.fn.ceebox.popup(g,c.extend(l,{type:n}))};p.src=c(g).attr("href")}else c.fn.ceebox.popup(g,c.extend(l,{type:n}))});return false}})});var e=k.length;c.each(k,function(j){var g=f[k[j]];if(e>1){var l={parentId:a,cbId:j,cbLen:e};if(j>0)l.prevId=
k[j-1];if(j<e-1)l.nextId=k[j+1];c.data(g,"ceeboxGallery",l)}})};c.fn.ceebox.overlay=function(b){b=c.extend({width:60,height:30,type:"html"},c.fn.ceebox.defaults,b);c("#cee_overlay").size()==0&&c("<div id='cee_overlay'></div>").css({opacity:b.overlayOpacity,position:"absolute",top:0,left:0,backgroundColor:b.overlayColor,width:"100%",height:c(document).height(),zIndex:100}).appendTo(c("body"));if(c("#cee_box").size()==0){var a=A(b);a={position:a.position,zIndex:102,top:"50%",left:"50%",height:b.height+
"px",width:b.width+"px",marginLeft:a.mleft+"px",marginTop:a.mtop+"px",opacity:0,borderWidth:b.borderWidth,borderColor:b.borderColor,backgroundColor:b.boxColor,color:b.textColor};c("<div id='cee_box'></div>").css(a).appendTo("body").animate({opacity:1},b.animSpeed,function(){c("#cee_overlay").addClass("cee_close")})}c("#cee_box").removeClass().addClass("cee_"+b.type);c("#cee_load").size()==0&&c(c.fn.ceebox.loader).appendTo("body");c("#cee_load").show("fast").animate({opacity:1},"fast")};c.fn.ceebox.popup=
function(b,a){var d=B(a.margin);a=c.extend({width:d.width,height:d.height,modal:false,type:"html",onload:null},c.fn.ceebox.defaults,a);var f,k;if(c(b).is("a,area,input")&&(a.type=="html"||a.type=="image"||a.type=="video")){if(f=c.data(b,"ceeboxGallery"))k=c(a.selector).eq(f.parentId).find("a[href],area[href],input[href]");C[a.type].prototype=new H(b,a);d=new C[a.type];b=d.content;a.action=d.action;a.modal=d.modal;if(a.titles){a.titleHeight=c(d.titlebox).contents().contents().wrap("<div></div>").parent().attr("id",
"ceetitletest").css({position:"absolute",top:"-300px",width:d.width+"px"}).appendTo("body").height();c("#ceetitletest").remove();a.titleHeight=a.titleHeight>=10?a.titleHeight+20:30}else a.titleHeight=0;a.width=d.width+2*a.padding;a.height=d.height+a.titleHeight+2*a.padding}c.fn.ceebox.overlay(a);o.action=a.action;o.onload=a.onload;o.unload=a.unload;d=A(a);d={marginLeft:d.mleft,marginTop:d.mtop,width:a.width+"px",height:a.height+"px",borderWidth:a.borderWidth};if(a.borderColor){var i=/#[1-90a-f]+/gi;
i=z(a.borderColor,i);d=c.extend(d,{borderTopColor:i[0],borderRightColor:i[1],borderBottomColor:i[2],borderLeftColor:i[3]})}d=a.textColor?c.extend(d,{color:a.textColor}):d;d=a.boxColor?c.extend(d,{backgroundColor:a.boxColor}):d;c("#cee_box").animate(d,a.animSpeed,a.easing,function(){var m=c(this).append(b).children().hide(),e=m.length,j=true;m.fadeIn(a.fadeIn,function(){if(c(this).is("#cee_iframeContent"))j=false;j&&this==m[e-1]&&c.fn.ceebox.onload()});if(a.modal==true)c("#cee_overlay").removeClass("cee_close");
else{c("<a href='#' id='cee_closeBtn' class='cee_close' title='Close'>close</a>").prependTo("#cee_box");f&&F(f,k,a);E(f,k,a.fadeOut)}})};c.fn.ceebox.closebox=function(b){b=b||400;c("#cee_box").fadeOut(b);c("#cee_overlay").fadeOut(typeof b=="number"?b*2:"slow",function(){c("#cee_box,#cee_overlay,#cee_HideSelect,#cee_load").unbind().trigger("unload").remove();if(v(o.unload)){o.unload();o.unload=null}});document.onkeydown=null};c.fn.ceebox.onload=function(){c("#cee_load").hide(300).fadeOut(600,function(){c(this).remove()});
if(v(o.action)){o.action();o.action=null}if(v(o.onload)){o.onload();o.onload=null}};var o,H=function(b,a){function d(l){var n=l.length;return n>1?l[n-1]:l}var f=a.type,k={image:[a.imageWidth,a.imageHeight,a.imageRatio||a.imageWidth/a.imageHeight],video:[a.videoWidth,a.videoHeight,a.videoRatio],html:[a.htmlWidth,a.htmlHeight,a.htmlRatio]},i=k[f][0],m=k[f][1],e=k[f][2],j=c(b).attr("rel");if(j&&j!=""){var g={};c.each(c.fn.ceebox.relMatch,function(l,n){g[l]=n.exec(j)});if(g.modal)a.modal=true;if(g.nonmodal)a.modal=
false;if(g.width)i=Number(d(g.width));if(g.height)m=Number(d(g.height));if(g.ratio){e=d(g.ratio);e=Number(e)?Number(e):String(e)}if(g.videoSrc)this.videoSrc=String(d(g.videoSrc));if(g.videoId)this.videoId=String(d(g.videoId))}f=B(a.margin);i=t(i,f.width);m=t(m,f.height);if(e){if(!Number(e)){c.each(c.fn.ceebox.ratios,function(l,n){if(e==l){e=n;return false}});e=Number(e)||1}if(i/m>e)i=parseInt(m*e,10);if(i/m<e)m=parseInt(i/e,10)}this.modal=a.modal;this.href=c(b).attr("href");this.title=c(b).attr("title")||
b.t||"";this.titlebox=a.titles?"<div id='cee_title'><h2>"+this.title+"</h2></div>":"";this.width=i;this.height=m;this.rel=j},C={image:function(){this.content="<img id='cee_img' src='"+this.href+"' width='"+this.width+"' height='"+this.height+"' alt='"+this.title+"'/>"+this.titlebox},video:function(){var b=new (function(d,f,k){var i=this;i.flashvars=i.param={};c.each(c.fn.ceebox.videos,function(m,e){if(e.siteRgx!=null&&typeof e.siteRgx!="string"&&e.siteRgx.test(d)){if(e.idRgx){e.idRgx=new RegExp(e.idRgx);
k=e.idRgx.exec(d);k=String(G(k))}i.src=e.src?e.src.replace("[id]",k):f;e.flashvars&&c.each(e.flashvars,function(j,g){if(typeof g=="string")i.flashvars[j]=g.replace("[id]",k)});e.param&&c.each(e.param,function(j,g){if(typeof g=="string")i.param[j]=g.replace("[id]",k)});i.width=e.width;i.height=e.height}})})(this.href,this.videoSrc,this.videoId),a=c.fn.ceebox.videos.base;b.src=b.src||this.href;b.param=c.extend(a.param,b.param);b.flashvars=c.extend(a.flashvars,b.flashvars);b.width=this.width=b.width?
b.width:this.width;b.height=this.height=b.height?b.height:this.height;this.action=function(){c("#cee_vid").flash({swf:b.src,params:b.param,flashvars:b.flashvars,width:b.width,height:b.height})};this.content="<div id='cee_vid' style='width:"+this.width+"px;height:"+this.height+"px'></div>"+this.titlebox},html:function(){var b=this.href,a=this.rel;a=[b.match(/[a-zA-Z0-9_\.]+\.[a-zA-Z]{2,4}/i),b.match(/^http:+/),a?a.match(/^iframe/):false];if(document.domain==a[0]&&a[1]&&!a[2]||!a[1]&&!a[2]){var d=b;
if(a=b.match(/#[a-zA-Z0-9_\-]+/)){d=b.split("#")[0];d=String(d+" "+a)}this.action=function(){c("#cee_ajax").load(d)};this.content=this.titlebox+"<div id='cee_ajax' style='width:"+(this.width-30)+"px;height:"+(this.height-20)+"px'></div>"}else{c("#cee_iframe").remove();this.content=this.titlebox+"<iframe frameborder='0' hspace='0' src='"+b+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1E3)+"' onload='$.fn.ceebox.onload()' style='width:"+this.width+"px;height:"+this.height+
"px;' > </iframe>"}}},B=function(b){var a=document.documentElement;b=b||100;this.width=(window.innerWidth||self.innerWidth||a&&a.clientWidth||document.body.clientWidth)-b;this.height=(window.innerHeight||self.innerHeight||a&&a.clientHeight||document.body.clientHeight)-b;return this},A=function(b){var a="fixed",d=0,f=/[0-9]+/g;f=z(b.borderWidth,f);if(!window.XMLHttpRequest){c("#cee_HideSelect")===null&&c("body").append("<iframe id='cee_HideSelect'></iframe>");a="absolute";d=parseInt(document.documentElement&&
document.documentElement.scrollTop||document.body.scrollTop,10)}this.mleft=parseInt(-1*(b.width/2+Number(f[3])),10);this.mtop=parseInt(-1*(b.height/2+Number(f[0])),10)+d;this.position=a;return this}})(jQuery);