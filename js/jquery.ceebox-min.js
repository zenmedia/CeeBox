//ceebox
/*
 * CeeBox 2.0.6 jQuery Plugin (minimized version)
 * Requires jQuery 1.3.2 and swfobject.jquery.js plugin to work
 * Code hosted on GitHub (http://github.com/catcubed/ceebox) Please visit there for version history information
 * By Colin Fahrion (http://www.catcubed.com)
 * Inspiration for ceebox comes from Thickbox (http://jquery.com/demo/thickbox/) and Videobox (http://videobox-lb.sourceforge.net/)
 * However, along the upgrade path ceebox has morphed a long way from those roots.
 * Copyright (c) 2009 Colin Fahrion
 * Licensed under the MIT License: http://www.opensource.org/licenses/mit-license.php
*/

(function(c){function u(b,a){B();c(b).each(function(d){c.ceebox(this,d,a)})}function B(){n=new (function(){var b="";c.each(c.fn.ceebox.videos,function(a,d){if(d.siteRgx!=null&&typeof d.siteRgx=="object"){a=String(d.siteRgx);b=b+a.slice(1,a.length-2)+"|"}});this.vidRegex=new RegExp(b+".swf$","i")})}function v(b,a){b=b.match(a);a=[];var d=b.length;if(d>1){a[0]=b[0];a[1]=b[1];a[2]=d==2?b[0]:b[2];a[3]=d==4?b[3]:b[1]}else a=[b,b,b,b];return a}function C(b,a,d){document.onkeydown=function(f){f=f||window.event;
f=f.keyCode||f.which;switch(f){case 27:c.fn.ceebox.closebox(d);document.onkeydown=null;break;case 188:case 37:b&&b.prevId!=null&&s(a,b.prevId,d);break;case 190:case 39:b&&b.nextId!=null&&s(a,b.nextId,d);break}}}function D(b,a,d){function f(i,g){var k,m=e-2E3+"px",q=e+"px";i=="prev"?(k=[{left:0},"left"]):(k=[{right:0},x="right"]);var o=function(p){return c.extend({zIndex:105,width:j+"px",height:h+"px",position:"absolute",top:l,backgroundPosition:k[1]+" "+p},k[0])};c("<a href='#'></a>").text(i).attr({id:"cee_"+
i}).css(o(m)).hover(function(){c(this).css(o(q))},function(){c(this).css(o(m))}).one("click",function(p){p.preventDefault();s(a,g,d.fadeOut)}).appendTo("#cee_box")}var j=parseInt(d.width/2),h=d.height-d.titleHeight-2*d.padding,l=d.padding,e=h/2;if(d.type=="video"||d.type=="html"){j=60;h=80;l=parseInt((d.height-d.titleHeight-2*d.padding-10)/2);e=24}if(d.type=="html")l=parseInt((d.height-d.titleHeight-10)/2);b.prevId!=null&&f("prev",b.prevId);b.nextId&&f("next",b.nextId);c("#cee_title").append("<div id='cee_count'>Item "+
(b.cbId+1)+" of "+b.cbLen+"</div>")}function s(b,a,d){c("#cee_prev,#cee_next").unbind().click(function(){return false});document.onkeydown=null;var f=c("#cee_box").children(),j=f.length;f.fadeOut(d,function(){c(this).remove();this==f[j-1]&&b.eq(a).trigger("click")})}function r(b,a){return b&&b<a||!a?b:a}function t(b){return typeof b=="function"}function E(b){var a=b.length;return a>1?b[a-1]:b}c.ceebox={version:"2.0.6"};c.fn.ceebox=function(b){b=c.extend({selector:c(this).selector},c.fn.ceebox.defaults,
b);var a=this;b.videoJSON?c.getJSON(b.videoJSON,function(d){c.extend(c.fn.ceebox.videos,d);u(a,b)}):u(a,b);c(".cee_close").die().live("click",function(){c.fn.ceebox.closebox();return false});return this};c.fn.ceebox.defaults={html:true,image:true,video:true,modal:false,titles:true,htmlGallery:true,imageGallery:true,videoGallery:true,videoWidth:false,videoHeight:false,videoRatio:"16:9",htmlWidth:false,htmlHeight:false,htmlRatio:false,imageWidth:false,imageHeight:false,animSpeed:"normal",easing:"swing",
fadeOut:400,fadeIn:400,overlayColor:"#000",overlayOpacity:0.8,boxColor:"",textColor:"",borderColor:"",borderWidth:"3px",padding:15,margin:150,onload:null,unload:null,videoJSON:null};c.fn.ceebox.ratios={"4:3":1.333,"3:2":1.5,"16:9":1.778,"1:1":1,square:1};c.fn.ceebox.relMatch={width:/(?:width:)([0-9]+)/i,height:/(?:height:)([0-9]+)/i,ratio:/(?:ratio:)([0-9\.:]+)/i,modal:/modal:true/i,nonmodal:/modal:false/i,videoSrc:/(?:videoSrc:)(http:[\/\-\._0-9a-zA-Z:]+)/i,videoId:/(?:videoId:)([\-\._0-9a-zA-Z:]+)/i};
c.fn.ceebox.loader="<div id='cee_load' style='z-index:105;top:50%;left:50%;position:fixed'></div>";c.fn.ceebox.videos={base:{param:{wmode:"transparent",allowFullScreen:"true",allowScriptAccess:"always"},flashvars:{autoplay:true}},facebook:{siteRgx:/facebook\.com\/video/i,idRgx:/(?:v=)([a-zA-Z0-9_]+)/i,src:"http://www.facebook.com/v/[id]"},youtube:{siteRgx:/youtube\.com\/watch/i,idRgx:/(?:v=)([a-zA-Z0-9_]+)/i,src:"http://www.youtube.com/v/[id]&hl=en&fs=1&autoplay=1"},metacafe:{siteRgx:/metacafe\.com\/watch/i,
idRgx:/(?:watch\/)([a-zA-Z0-9_]+)/i,src:"http://www.metacafe.com/fplayer/[id]/.swf"},google:{siteRgx:/google\.com\/videoplay/i,idRgx:/(?:id=)([a-zA-Z0-9_]+)/i,src:"http://www.google.com/googleplayer.swf?docId=[id]&hl=en&fs=true",flashvars:{playerMode:"normal",fs:true}},spike:{siteRgx:/spike\.com\/video|ifilm\.com\/video/i,idRgx:/(?:\/)([0-9]+)/i,src:"http://www.spike.com/efp",flashvars:{flvbaseclip:"[id]"}},vimeo:{siteRgx:/vimeo\.com\/[0-9]+/i,idRgx:/(?:\.com\/)([a-zA-Z0-9_]+)/i,src:"http://www.vimeo.com/moogaloop.swf?clip_id=[id]&server=vimeo.com&show_title=1&show_byline=1&show_portrait=0&color=&fullscreen=1"},
dailymotion:{siteRgx:/dailymotion\.com\/video/i,idRgx:/(?:video\/)([a-zA-Z0-9_]+)/i,src:"http://www.dailymotion.com/swf/[id]&related=0&autoplay=1"},cnn:{siteRgx:/cnn\.com\/video/i,idRgx:/(?:\?\/video\/)([a-zA-Z0-9_\/\.]+)/i,src:"http://i.cdn.turner.com/cnn/.element/apps/cvp/3.0/swf/cnn_416x234_embed.swf?context=embed&videoId=[id]",width:416,height:374}};c.ceebox=function(b,a,d){var f,j=[],h=0;c(b).is("a[href],area[href],input[href]")?(f=c(b)):(f=c(b).children().andSelf().find("a[href],area[href],input[href]"));
var l={image:function(i){return i.match(/\.jpg$|\.jpeg$|\.png$|\.gif$|\.bmp$/i)||false},video:function(i,g){return g&&g.match(/^video$/i)?true:i.match(n.vidRegex)||false},html:function(){return true}};f.each(function(i){var g=this,k=c.metadata?c.extend({},d,c(g).metadata()):d;c.each(l,function(m){if(l[m](c(g).attr("href"),c(g).attr("rel"))&&k[m]){if(d.htmlGallery==true&&m=="html"){j[h]=i;h++}else if(d.imageGallery==true&&m=="image"){j[h]=i;h++}else if(d.videoGallery==true&&m=="video"){j[h]=i;h++}c(g).unbind("click").bind("click",
function(q){q.preventDefault();q.stopPropagation();c.fn.ceebox.overlay(k);if(m=="image"){var o=new Image;o.onload=function(){var p=o.width,w=o.height;k.imageWidth=r(p,c.fn.ceebox.defaults.imageWidth);k.imageHeight=r(w,c.fn.ceebox.defaults.imageHeight);k.imageRatio=p/w;c.fn.ceebox.popup(g,c.extend(k,{type:m}))};o.src=c(g).attr("href")}else c.fn.ceebox.popup(g,c.extend(k,{type:m}))});return false}})});var e=j.length;c.each(j,function(i){var g=f[j[i]];if(e>1){var k={parentId:a,cbId:i,cbLen:e};if(i>0)k.prevId=
j[i-1];if(i<e-1)k.nextId=j[i+1];c.data(g,"ceeboxGallery",k)}})};c.fn.ceebox.overlay=function(b){b=c.extend({width:60,height:30,type:"html"},c.fn.ceebox.defaults,b);c("#cee_overlay").size()==0&&c("<div id='cee_overlay'></div>").css({opacity:b.overlayOpacity,position:"absolute",top:0,left:0,backgroundColor:b.overlayColor,width:"100%",height:c(document).height(),zIndex:100}).appendTo(c("body"));if(c("#cee_box").size()==0){var a=y(b);a={position:a.position,zIndex:102,top:"50%",left:"50%",height:b.height+
"px",width:b.width+"px",marginLeft:a.mleft+"px",marginTop:a.mtop+"px",opacity:0,borderWidth:b.borderWidth,borderColor:b.borderColor,backgroundColor:b.boxColor,color:b.textColor};c("<div id='cee_box'></div>").css(a).appendTo("body").animate({opacity:1},b.animSpeed,function(){c("#cee_overlay").addClass("cee_close")})}c("#cee_box").removeClass().addClass("cee_"+b.type);c("#cee_load").size()==0&&c(c.fn.ceebox.loader).appendTo("body");c("#cee_load").show("fast").animate({opacity:1},"fast")};c.fn.ceebox.popup=
function(b,a){var d=z(a.margin);a=c.extend({width:d.width,height:d.height,modal:false,type:"html",onload:null},c.fn.ceebox.defaults,a);var f,j;if(c(b).is("a,area,input")&&(a.type=="html"||a.type=="image"||a.type=="video")){if(f=c.data(b,"ceeboxGallery"))j=c(a.selector).eq(f.parentId).contents().andSelf().find("[href]");A[a.type].prototype=new F(b,a);d=new A[a.type];b=d.content;a.action=d.action;a.modal=d.modal;if(a.titles){a.titleHeight=c(d.titlebox).contents().contents().wrap("<div></div>").parent().attr("id",
"ceetitletest").css({position:"absolute",top:"-300px",width:d.width+"px"}).appendTo("body").height();c("#ceetitletest").remove();a.titleHeight=a.titleHeight>=10?a.titleHeight+20:30}else a.titleHeight=0;a.width=d.width+2*a.padding;a.height=d.height+a.titleHeight+2*a.padding}c.fn.ceebox.overlay(a);n.action=a.action;n.onload=a.onload;n.unload=a.unload;d=y(a);d={marginLeft:d.mleft,marginTop:d.mtop,width:a.width+"px",height:a.height+"px",borderWidth:a.borderWidth};if(a.borderColor){var h=/#[1-90a-f]+/gi;
h=v(a.borderColor,h);d=c.extend(d,{borderTopColor:h[0],borderRightColor:h[1],borderBottomColor:h[2],borderLeftColor:h[3]})}d=a.textColor?c.extend(d,{color:a.textColor}):d;d=a.boxColor?c.extend(d,{backgroundColor:a.boxColor}):d;c("#cee_box").animate(d,a.animSpeed,a.easing,function(){var l=c(this).append(b).children().hide(),e=l.length,i=true;l.fadeIn(a.fadeIn,function(){if(c(this).is("#cee_iframeContent"))i=false;i&&this==l[e-1]&&c.fn.ceebox.onload()});if(a.modal==true)c("#cee_overlay").removeClass("cee_close");
else{c("<a href='#' id='cee_closeBtn' class='cee_close' title='Close'>close</a>").prependTo("#cee_box");f&&D(f,j,a);C(f,j,a.fadeOut)}})};c.fn.ceebox.closebox=function(b){b=b||400;c("#cee_box").fadeOut(b);c("#cee_overlay").fadeOut(typeof b=="number"?b*2:"slow",function(){c("#cee_box,#cee_overlay,#cee_HideSelect,#cee_load").unbind().trigger("unload").remove();if(t(n.unload)){n.unload();n.unload=null}});document.onkeydown=null};c.fn.ceebox.onload=function(){c("#cee_load").hide(300).fadeOut(600,function(){c(this).remove()});
if(t(n.action)){n.action();n.action=null}if(t(n.onload)){n.onload();n.onload=null}};var n,F=function(b,a){function d(k){var m=k.length;return m>1?k[m-1]:k}var f=a.type,j={image:[a.imageWidth,a.imageHeight,a.imageRatio||a.imageWidth/a.imageHeight],video:[a.videoWidth,a.videoHeight,a.videoRatio],html:[a.htmlWidth,a.htmlHeight,a.htmlRatio]},h=j[f][0],l=j[f][1],e=j[f][2],i=c(b).attr("rel");if(i&&i!=""){var g={};c.each(c.fn.ceebox.relMatch,function(k,m){g[k]=m.exec(i)});if(g.modal)this.modal=true;if(g.nonmodal)this.modal=
false;if(g.width)h=Number(d(g.width));if(g.height)l=Number(d(g.height));if(g.ratio){e=d(g.ratio);e=Number(e)?Number(e):String(e)}if(g.videoSrc)this.videoSrc=String(d(g.videoSrc));if(g.videoId)this.videoId=String(d(g.videoId))}f=z(a.margin);h=r(h,f.width);l=r(l,f.height);if(e){if(!Number(e)){c.each(c.fn.ceebox.ratios,function(k,m){if(e==k){e=m;return false}});e=Number(e)||1}if(h/l>e)h=parseInt(l*e,10);if(h/l<e)l=parseInt(h/e,10)}this.modal=this.modal||a.modal;this.href=c(b).attr("href");this.title=
c(b).attr("title");this.titlebox=a.titles?"<div id='cee_title'><h2>"+this.title+"</h2></div>":"";this.width=h;this.height=l;this.rel=i},A={image:function(){this.content="<img id='cee_img' src='"+this.href+"' width='"+this.width+"' height='"+this.height+"' alt='"+this.title+"'/>"+this.titlebox},video:function(){var b=new (function(d,f,j){var h=this;c.each(c.fn.ceebox.videos,function(l,e){if(e.siteRgx!=null&&typeof e.siteRgx=="object"&&e.siteRgx.test(d)){if(e.idRgx){e.idRgx=new RegExp(e.idRgx);j=e.idRgx.exec(d);
j=String(E(j))}h.src=e.src?e.src.replace("[id]",j):f;if(e.flashvars){h.flashvars={};c.each(e.flashvars,function(i,g){if(typeof g=="string")h.flashvars[i]=g.replace("[id]",j)})}if(e.param){h.param={};c.each(e.param,function(i,g){if(typeof g=="string")h.param[i]=g.replace("[id]",j)})}}})})(this.href,this.videoSrc,this.videoId),a=c.fn.ceebox.videos.base;b.src=b.src||this.href;b.param=c.extend(a.param,b.param);b.flashvars=c.extend(a.flashvars,b.flashvars);b.width=this.width=b.width?b.width:this.width;
b.height=this.height=b.height?b.height:this.height;this.action=function(){c("#cee_vid").flash({swf:b.src,params:b.param,flashvars:b.flashvars,width:b.width,height:b.height})};this.content="<div id='cee_vid' style='width:"+this.width+"px;height:"+this.height+"px'></div>"+this.titlebox},html:function(){var b=this.href,a=this.rel;a=[b.match(/\w+\.com/i),b.match(/^http:+/),a?a.match(/^iframe/):false];if(document.domain==a[0]&&a[1]&&!a[2]||!a[1]&&!a[2]){var d=b;if(a=b.match(/#[a-z_A-Z1-9]+/)){d=b.split("#")[0];
d=String(d+" "+a)}this.action=function(){c("#cee_ajax").load(d)};this.content=this.titlebox+"<div id='cee_ajax' style='width:"+(this.width-30)+"px;height:"+(this.height-20)+"px'></div>"}else{c("#cee_iframe").remove();this.content=this.titlebox+"<iframe frameborder='0' hspace='0' src='"+b+"' id='cee_iframeContent' name='cee_iframeContent"+Math.round(Math.random()*1E3)+"' onload='$.fn.ceebox.onload()' style='width:"+this.width+"px;height:"+this.height+"px;' > </iframe>"}}},z=function(b){var a=document.documentElement;
b=b||100;this.width=(window.innerWidth||self.innerWidth||a&&a.clientWidth||document.body.clientWidth)-b;this.height=(window.innerHeight||self.innerHeight||a&&a.clientHeight||document.body.clientHeight)-b;return this},y=function(b){var a="fixed",d=0,f=/[0-9]+/g;f=v(b.borderWidth,f);if(!window.XMLHttpRequest){c("#cee_HideSelect")===null&&c("body").append("<iframe id='cb.HideSelect'></iframe>");a="absolute";d=parseInt(document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop,
10)}this.mleft=parseInt(-1*(b.width/2+Number(f[3])),10);this.mtop=parseInt(-1*(b.height/2+Number(f[0])),10)+d;this.position=a;return this}})(jQuery);