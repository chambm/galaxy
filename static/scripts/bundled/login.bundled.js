webpackJsonp([4],{0:function(t,e,i){(function(t){var e=i(1),n=e,a=i(13),s=i(5),o=i(35);window.app=function(e,i){if(console.debug("building app:",e,i),!e.show_welcome_with_login)return void(window.location.href=Galaxy.root+"user/login?use_panels=True");var r=new o.PageLayoutView(t.extend(e,{el:"body",center:new a.CenterPanel({el:"#center"}),right:new a.RightPanel({title:s("Login required"),el:"#right"})}));n(function(){var t=Galaxy.root+"user/login?redirect="+encodeURI(Galaxy.root);r.render(),r.center.$("#galaxy_main").prop("src",e.welcome_url),r.right.$(".unified-panel-body").css("overflow","hidden").html('<iframe src="'+t+'" frameborder="0" style="width: 100%; height: 100%;"/>')})}}).call(e,i(3))},4:function(t,e,i){var n,a;(function(i,s,o){n=[],a=function(){function t(t){return'<iframe src="'+t+'" frameborder="0" style="width: 100%; height: 100%;"/>'}function e(t,i){for(var n in t){var a=t[n];a&&"object"==typeof a&&(i(a),e(a,i))}}function n(t){return/^[\],:{}\s]*$/.test(t.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))}function a(t){return i("<div/>").text(t).html()}function r(t){if(t instanceof Array||(t=[t]),0===t.length)return!1;for(var e in t)if(["__null__","__undefined__",null,void 0].indexOf(t[e])>-1)return!1;return!0}function l(t){var t=t.toString();if(t){t=t.replace(/,/g,", ");var e=t.lastIndexOf(", ");return-1!=e&&(t=t.substr(0,e)+" or "+t.substr(e+1)),t}return""}function d(t){top.__utils__get__=top.__utils__get__||{},t.cache&&top.__utils__get__[t.url]?(t.success&&t.success(top.__utils__get__[t.url]),console.debug("utils.js::get() - Fetching from cache ["+t.url+"].")):h({url:t.url,data:t.data,success:function(e){top.__utils__get__[t.url]=e,t.success&&t.success(e)},error:function(e){t.error&&t.error(e)}})}function h(t){var e={contentType:"application/json",type:t.type||"GET",data:t.data||{},url:t.url};"GET"==e.type||"DELETE"==e.type?(-1==e.url.indexOf("?")?e.url+="?":e.url+="&",e.url=e.url+i.param(e.data,!0),e.data=null):(e.dataType="json",e.url=e.url,e.data=JSON.stringify(e.data)),i.ajax(e).done(function(e){if("string"==typeof e)try{e=e.replace("Infinity,",'"Infinity",'),e=s.parseJSON(e)}catch(i){console.debug(i)}t.success&&t.success(e)}).fail(function(e){var i=null;try{i=s.parseJSON(e.responseText)}catch(n){i=e.responseText}t.error&&t.error(i,e)})}function c(t,e){var n=i('<div class="'+t+'"></div>');n.appendTo(":eq(0)");var a=n.css(e);return n.remove(),a}function u(t){i('link[href^="'+t+'"]').length||i('<link href="'+Galaxy.root+t+'" rel="stylesheet">').appendTo("head")}function f(t,e){return t?o.defaults(t,e):e}function p(t,e){for(var i=1,n=0;e>n;n++)i*=10;return Math.round(t*i)/i}function _(t,e,i){i=void 0!==i?i:1;var n="";if(t>=y)t/=y,n="TB";else if(t>=w)t/=w,n="GB";else if(t>=b)t/=b,n="MB";else if(t>=g)t/=g,n="KB";else{if(!(t>0))return e?"0 b":"<strong>-</strong>";n="b"}var a="b"==n?t:p(t,i);return e?a+" "+n:"<strong>"+a+"</strong> "+n}function m(){return top.__utils__uid__=top.__utils__uid__||0,"uid-"+top.__utils__uid__++}function v(){var t=new Date,e=(t.getHours()<10?"0":"")+t.getHours(),i=(t.getMinutes()<10?"0":"")+t.getMinutes();return datetime=t.getDate()+"/"+(t.getMonth()+1)+"/"+t.getFullYear()+", "+e+":"+i}var g=1024,b=g*g,w=b*g,y=w*g;return{cssLoadFile:u,cssGetAttribute:c,get:d,merge:f,iframe:t,bytesToString:_,uid:m,time:v,request:h,sanitize:a,textify:l,validate:r,deepeach:e,isJSON:n}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(1),i(1),i(3))},10:function(t,e,i){var n,a;(function(i,s,o){n=[],a=function(){var t=i.View.extend({elMain:"body",optionsDefault:{title:"ui-modal",body:"",backdrop:!0,height:null,width:null,closing_events:!1,closing_callback:null,title_separator:!0},buttonList:{},initialize:function(t){t&&this._create(t)},show:function(t){this.initialize(t),this.options.height?(this.$body.css("height",this.options.height),this.$body.css("overflow","hidden")):this.$body.css("max-height",s(window).height()/2),this.options.width&&this.$dialog.css("width",this.options.width),this.visible?this.$el.show():this.$el.fadeIn("fast"),this.visible=!0},hide:function(){this.visible=!1,this.$el.fadeOut("fast"),this.options.closing_callback&&this.options.closing_callback()},enableButton:function(t){var e=this.buttonList[t];this.$buttons.find("#"+e).prop("disabled",!1)},disableButton:function(t){var e=this.buttonList[t];this.$buttons.find("#"+e).prop("disabled",!0)},showButton:function(t){var e=this.buttonList[t];this.$buttons.find("#"+e).show()},hideButton:function(t){var e=this.buttonList[t];this.$buttons.find("#"+e).hide()},getButton:function(t){var e=this.buttonList[t];return this.$buttons.find("#"+e)},scrollTop:function(){return this.$body.scrollTop()},_create:function(t){var e=this;if(this.options=o.defaults(t,this.optionsDefault),"progress"==this.options.body&&(this.options.body=s('<div class="progress progress-striped active"><div class="progress-bar progress-bar-info" style="width:100%"></div></div>')),this.$el&&(this.$el.remove(),s(document).off("keyup.ui-modal")),this.setElement(this._template(this.options.title)),this.$dialog=this.$el.find(".modal-dialog"),this.$body=this.$el.find(".modal-body"),this.$footer=this.$el.find(".modal-footer"),this.$buttons=this.$el.find(".buttons"),this.$backdrop=this.$el.find(".modal-backdrop"),this.$body.html(this.options.body),this.options.backdrop||this.$backdrop.removeClass("in"),this.options.buttons){this.buttonList={};var i=0;s.each(this.options.buttons,function(t,n){var a="button-"+i++;e.$buttons.append(s('<button id="'+a+'"></button>').text(t).click(n)).append(" "),e.buttonList[t]=a})}else this.$footer.hide();s(this.elMain).append(s(this.el)),this.options.closing_events&&(s(document).on("keyup.ui-modal",function(t){27==t.keyCode&&e.hide()}),this.$el.find(".modal-backdrop").on("click",function(){e.hide()})),this.options.title_separator||this.$(".modal-header").css({border:"none","padding-bottom":"0px"})},_template:function(t){return'<div class="ui-modal modal"><div class="modal-backdrop fade in" style="z-index: -1;"></div><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" style="display: none;">&times;</button><h4 class="title">'+t+'</h4></div><div class="modal-body" style="position: static;"></div><div class="modal-footer"><div class="buttons" style="float: right;"></div></div></div</div></div>'}});return{View:t}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(1),i(3))},20:function(t,e,i){var n,a;(function(i,s,o){n=[],a=function(){var t=i.View.extend({options:{frame:{cols:6,rows:3},rows:1e3,cell:130,margin:5,scroll:5,top_min:40,frame_max:9,visible:!0,onchange:null},cols:0,top:0,top_max:0,frame_z:0,frame_counter:0,frame_counter_id:0,frame_list:[],frame_shadow:null,visible:null,initialize:function(t){var e=this;t&&(this.options=s.defaults(t,this.options)),this.visible=this.options.visible,this.top=this.top_max=this.options.top_min,this.setElement(this._template()),o(this.el).append(this._templateBackground()),o(this.el).append(this._templateMenu()),o(this.el_main).append(o(this.el));var i="#frame-shadow";o(this.el).append(this._templateShadow(i.substring(1))),this.frame_shadow={id:i,screen_location:{},grid_location:{},grid_rank:null,grid_lock:!1},this._frameResize(this.frame_shadow,{width:0,height:0}),this.frame_list[i]=this.frame_shadow,this._panelRefresh(),this.visible?this.show():this.hide();var e=this;o(window).resize(function(){e.visible&&e._panelRefresh()})},add:function(t){var e={title:"",content:null,target:"",type:null};if(t=t?s.defaults(t,e):e,t.content){if(this.frame_counter>=this.options.frame_max)return void alert("You have reached the maximum number of allowed frames ("+this.options.frame_max+").");var i="#frame-"+this.frame_counter_id++;if(0!==o(i).length)return void alert("This frame already exists. This page might contain multiple frame managers.");this.top=this.options.top_min;var n=null;if("url"===t.type)n=o(this._templateFrameUrl(i.substring(1),t.title,t.content));else if("other"===t.type){n=o(this._templateFrame(i.substring(1),t.title));var a=n.find(".f-content");s.isFunction(t.content)?t.content(a):a.append(t.content)}o(this.el).append(n);var r={id:i,screen_location:{},grid_location:{},grid_rank:null,grid_lock:!1};t.width=this._toPixelCoord("width",this.options.frame.cols),t.height=this._toPixelCoord("height",this.options.frame.rows),this.frame_z=parseInt(o(r.id).css("z-index")),this.frame_list[i]=r,this.frame_counter++,this._frameResize(r,{width:t.width,height:t.height}),this._frameInsert(r,{top:0,left:0},!0),this.visible||this.show()}},show:function(){this.visible=!0,this.$el.find(".frame").fadeIn("fast"),this.$el.find(this.frame_shadow.id).hide(),this.$el.find(".frame-background").show(),this._panelRefresh(),this._menuRefresh()},hide:function(){null===this.event.type&&(this.visible=!1,this.$el.find(".frame").fadeOut("fast"),this.$el.find(".frame-background").hide(),this.$el.find(".frame-menu").hide(),this._menuRefresh())},length:function(){return this.frame_counter},setOnChange:function(t){this.options.onchange=t},event:{type:null,target:null,xy:null},events:{mousemove:"_eventFrameMouseMove",mouseup:"_eventFrameMouseUp",mouseleave:"_eventFrameMouseUp",mousewheel:"_eventPanelScroll",DOMMouseScroll:"_eventPanelScroll","mousedown .frame":"_eventFrameMouseDown","mousedown .frame-background":"_eventHide","mousedown .frame-scroll-up":"_eventPanelScroll_up","mousedown .frame-scroll-down":"_eventPanelScroll_down","mousedown .f-close":"_eventFrameClose","mousedown .f-pin":"_eventFrameLock"},_eventFrameMouseDown:function(t){if(null===this.event.type&&((o(t.target).hasClass("f-header")||o(t.target).hasClass("f-title"))&&(this.event.type="drag"),o(t.target).hasClass("f-resize")&&(this.event.type="resize"),null!==this.event.type)){if(t.preventDefault(),this.event.target=this._frameIdentify(t.target),this.event.target.grid_lock)return void(this.event.type=null);this.event.xy={x:t.originalEvent.pageX,y:t.originalEvent.pageY},this._frameDragStart(this.event.target)}},_eventFrameMouseMove:function(t){if("drag"==this.event.type||"resize"==this.event.type){var e={x:t.originalEvent.pageX,y:t.originalEvent.pageY},i={x:e.x-this.event.xy.x,y:e.y-this.event.xy.y};this.event.xy=e;var n=this._frameScreen(this.event.target);if("resize"==this.event.type){n.width+=i.x,n.height+=i.y;var a=this.options.cell-this.options.margin-1;n.width=Math.max(n.width,a),n.height=Math.max(n.height,a),this._frameResize(this.event.target,n),n.width=this._toGridCoord("width",n.width)+1,n.height=this._toGridCoord("height",n.height)+1,n.width=this._toPixelCoord("width",n.width),n.height=this._toPixelCoord("height",n.height),this._frameResize(this.frame_shadow,n),this._frameInsert(this.frame_shadow,{top:this._toGridCoord("top",n.top),left:this._toGridCoord("left",n.left)})}if("drag"==this.event.type){n.left+=i.x,n.top+=i.y,this._frameOffset(this.event.target,n);var s={top:this._toGridCoord("top",n.top),left:this._toGridCoord("left",n.left)};0!==s.left&&s.left++,this._frameInsert(this.frame_shadow,s)}}},_eventFrameMouseUp:function(t){("drag"==this.event.type||"resize"==this.event.type)&&(this._frameDragStop(this.event.target),this.event.type=null)},_eventFrameClose:function(t){if(null===this.event.type){t.preventDefault();var e=this._frameIdentify(t.target),i=this;o(e.id).fadeOut("fast",function(){o(e.id).remove(),delete i.frame_list[e.id],i.frame_counter--,i._panelRefresh(!0),i._panelAnimationComplete(),i.visible&&0==i.frame_counter&&i.hide()})}},_eventFrameLock:function(t){if(null===this.event.type){t.preventDefault();var e=this._frameIdentify(t.target);e.grid_lock?(e.grid_lock=!1,o(e.id).find(".f-pin").removeClass("toggle"),o(e.id).find(".f-header").removeClass("f-not-allowed"),o(e.id).find(".f-title").removeClass("f-not-allowed"),o(e.id).find(".f-resize").show(),o(e.id).find(".f-close").show()):(e.grid_lock=!0,o(e.id).find(".f-pin").addClass("toggle"),o(e.id).find(".f-header").addClass("f-not-allowed"),o(e.id).find(".f-title").addClass("f-not-allowed"),o(e.id).find(".f-resize").hide(),o(e.id).find(".f-close").hide())}},_eventHide:function(t){null===this.event.type&&this.hide()},_eventPanelScroll:function(t){if(null===this.event.type&&this.visible){var e=o(t.srcElement).parents(".frame");if(0!==e.length)return void t.stopPropagation();t.preventDefault();var i=t.originalEvent.detail?t.originalEvent.detail:t.originalEvent.wheelDelta/-3;this._panelScroll(i)}},_eventPanelScroll_up:function(t){null===this.event.type&&(t.preventDefault(),this._panelScroll(-this.options.scroll))},_eventPanelScroll_down:function(t){null===this.event.type&&(t.preventDefault(),this._panelScroll(this.options.scroll))},_frameIdentify:function(t){return this.frame_list["#"+o(t).closest(".frame").attr("id")]},_frameDragStart:function(t){this._frameFocus(t,!0);var e=this._frameScreen(t);this._frameResize(this.frame_shadow,e),this._frameGrid(this.frame_shadow,t.grid_location),t.grid_location=null,o(this.frame_shadow.id).show(),o(".f-cover").show()},_frameDragStop:function(t){this._frameFocus(t,!1);var e=this._frameScreen(this.frame_shadow);this._frameResize(t,e),this._frameGrid(t,this.frame_shadow.grid_location,!0),this.frame_shadow.grid_location=null,o(this.frame_shadow.id).hide(),o(".f-cover").hide(),this._panelAnimationComplete()},_toGridCoord:function(t,e){var i="width"==t||"height"==t?1:-1;return"top"==t&&(e-=this.top),parseInt((e+i*this.options.margin)/this.options.cell,10)},_toPixelCoord:function(t,e){var i="width"==t||"height"==t?1:-1,n=e*this.options.cell-i*this.options.margin;return"top"==t&&(n+=this.top),n},_toGrid:function(t){return{top:this._toGridCoord("top",t.top),left:this._toGridCoord("left",t.left),width:this._toGridCoord("width",t.width),height:this._toGridCoord("height",t.height)}},_toPixel:function(t){return{top:this._toPixelCoord("top",t.top),left:this._toPixelCoord("left",t.left),width:this._toPixelCoord("width",t.width),height:this._toPixelCoord("height",t.height)}},_isCollision:function(t){function e(t,e){return!(t.left>e.left+e.width-1||t.left+t.width-1<e.left||t.top>e.top+e.height-1||t.top+t.height-1<e.top)}for(var i in this.frame_list){var n=this.frame_list[i];if(null!==n.grid_location&&e(t,n.grid_location))return!0}return!1},_locationRank:function(t){return t.top*this.cols+t.left},_menuRefresh:function(){this.visible&&(this.top==this.options.top_min?o(".frame-scroll-up").hide():o(".frame-scroll-up").show(),this.top==this.top_max?o(".frame-scroll-down").hide():o(".frame-scroll-down").show()),this.options.onchange&&this.options.onchange()},_panelAnimationComplete:function(){var t=this;o(".frame").promise().done(function(){t._panelScroll(0,!0)})},_panelRefresh:function(t){this.cols=parseInt(o(window).width()/this.options.cell,10)+1,this._frameInsert(null,null,t)},_panelScroll:function(t,e){var i=this.top-this.options.scroll*t;if(i=Math.max(i,this.top_max),i=Math.min(i,this.options.top_min),this.top!=i){for(var n in this.frame_list){var a=this.frame_list[n];if(null!==a.grid_location){var s={top:a.screen_location.top-(this.top-i),left:a.screen_location.left};this._frameOffset(a,s,e)}}this.top=i}this._menuRefresh()},_frameInsert:function(t,e,i){var n=[];t&&(t.grid_location=null,n.push([t,this._locationRank(e)]));var a=null;for(a in this.frame_list){var s=this.frame_list[a];null===s.grid_location||s.grid_lock||(s.grid_location=null,n.push([s,s.grid_rank]))}for(n.sort(function(t,e){var i=t[1],n=e[1];return n>i?-1:i>n?1:0}),a=0;a<n.length;a++)this._framePlace(n[a][0],i);this.top_max=0;for(var a in this.frame_list){var t=this.frame_list[a];null!==t.grid_location&&(this.top_max=Math.max(this.top_max,t.grid_location.top+t.grid_location.height))}this.top_max=o(window).height()-this.top_max*this.options.cell-2*this.options.margin,this.top_max=Math.min(this.top_max,this.options.top_min),this._menuRefresh()},_framePlace:function(t,e){t.grid_location=null;for(var i=this._toGrid(this._frameScreen(t)),n=!1,a=0;a<this.options.rows;a++){for(var s=0;s<Math.max(1,this.cols-i.width);s++)if(i.top=a,i.left=s,!this._isCollision(i)){n=!0;break}if(n)break}n?this._frameGrid(t,i,e):console.log("Grid dimensions exceeded.")},_frameFocus:function(t,e){var i=this.frame_z+(e?1:0);o(t.id).css("z-index",i)},_frameOffset:function(t,e,i){if(t.screen_location.left=e.left,t.screen_location.top=e.top,i){this._frameFocus(t,!0);var n=this;o(t.id).animate({top:e.top,left:e.left},"fast",function(){n._frameFocus(t,!1)})}else o(t.id).css({top:e.top,left:e.left})},_frameResize:function(t,e){o(t.id).css({width:e.width,height:e.height}),t.screen_location.width=e.width,t.screen_location.height=e.height},_frameGrid:function(t,e,i){t.grid_location=e,this._frameOffset(t,this._toPixel(e),i),t.grid_rank=this._locationRank(e)},_frameScreen:function(t){var e=t.screen_location;return{top:e.top,left:e.left,width:e.width,height:e.height}},_template:function(){return'<div class="galaxy-frame"></div>'},_templateFrame:function(t,e){return e||(e=""),'<div id="'+t+'" class="frame corner"><div class="f-header corner"><span class="f-title">'+e+'</span><span class="f-icon f-close fa fa-trash-o"></span><span class="f-icon f-pin fa fa-thumb-tack"></span></div><div class="f-content"><div class="f-cover"></div></div><span class="f-resize f-icon corner fa fa-expand"></span></div>'},_templateFrameUrl:function(t,e,i){i+=-1==i.indexOf("?")?"?":"&",i+="widget=True";var n=o(this._templateFrame(t,e));return n.find(".f-content").append('<iframe scrolling="auto" class="f-iframe" src="'+i+'"></iframe>'),n},_templateShadow:function(t){return'<div id="'+t+'" class="frame-shadow corner"></div>'},_templateBackground:function(){return'<div class="frame-background"></div>'},_templateMenu:function(){return'<div class="frame-scroll-up frame-menu fa fa-chevron-up fa-2x"></div><div class="frame-scroll-down frame-menu fa fa-chevron-down fa-2x"></div>'}});return{View:t}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(3),i(1))},33:function(t,e,i){var n,a;(function(s,o){n=[i(4),i(34),i(36),i(66)],a=function(t,e,i,n){var a=s.View.extend({el_masthead:"#everything",options:null,$background:null,list:[],initialize:function(t){this.options=t,o("body").off(),this.setElement(o(this._template(t))),o("#masthead").replaceWith(this.$el),this.$background=o(this.el).find("#masthead-background");var a=this;o(window).on("beforeunload",function(){var t="";for(var e in a.list)if(a.list[e].options.onunload){var i=a.list[e].options.onunload();i&&(t+=i+" ")}return""!==t?t:void 0}),this.menu=Galaxy.menu=new e.GalaxyMenu({masthead:this,config:this.options}),this.frame=Galaxy.frame=new i.GalaxyFrame({masthead:this}),Galaxy.quotaMeter=new n.UserQuotaMeter({model:Galaxy.user,el:this.$(".quota-meter-container")}).render()},events:{click:"_click",mousedown:function(t){t.preventDefault()}},append:function(t){return this._add(t,!0)},prepend:function(t){return this._add(t,!1)},highlight:function(t){var e=o(this.el).find("#"+t+"> li");e&&e.addClass("active")},_add:function(t,e){var i=o(this.el).find("#"+t.location);if(i){var n=o(t.el);n.addClass("masthead-item"),e?i.append(n):i.prepend(n),this.list.push(t)}return null},_click:function(t){var e=o(this.el).find(".popup");e&&e.hide();var i=o(t.target).closest(".masthead-item").find(".popup");o(t.target).hasClass("head")?(i.show(),this.$background.show()):this.$background.hide()},_template:function(t){var e=t.brand?"/ "+t.brand:"";return'<div><div id="masthead" class="navbar navbar-fixed-top navbar-inverse"><div style="position: relative; right: -50%; float: left;"><div id="navbar" style="display: block; position: relative; right: 50%;"></div></div><div class="navbar-brand"><a href="'+t.logo_url+'"><img style="margin-left: 0.35em;" border="0" src="'+Galaxy.root+'static/images/galaxyIcon_noText.png"><span id="brand"> Galaxy '+e+'</span></a></div><div class="quota-meter-container"></div><div id="iconbar" class="iconbar"></div></div><div id="masthead-background" style="display: none; position: absolute; top: 33px; width: 100%; height: 100%; z-index: 1010"></div></div>'}});return{GalaxyMasthead:a}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(1))},34:function(t,e,i){var n,a;(function(i,s,o){n=[],a=function(){var t=i.Model.extend({initialize:function(t){this.options=t.config,this.masthead=t.masthead,this.create()},create:function(){var t=new e({id:"analysis",title:"Analyze Data",content:"",title_attribute:"Analysis home view"});this.masthead.append(t);var i={id:"workflow",title:"Workflow",content:"workflow",title_attribute:"Chain tools into workflows"};Galaxy.user.id||(i.disabled=!0);var n=new e(i);this.masthead.append(n);var a=new e({id:"shared",title:"Shared Data",content:"library/index",title_attribute:"Access published resources"});if(a.add({title:"Data Libraries deprecated",content:"library/index"}),a.add({title:"Data Libraries",content:"library/list",divider:!0}),a.add({title:"Published Histories",content:"history/list_published"}),a.add({title:"Published Workflows",content:"workflow/list_published"}),a.add({title:"Published Visualizations",content:"visualization/list_published"}),a.add({title:"Published Pages",content:"page/list_published"}),this.masthead.append(a),this.options.user_requests){var s=new e({id:"lab",title:"Lab"});s.add({title:"Sequencing Requests",content:"requests/index"}),s.add({title:"Find Samples",content:"requests/find_samples_index"}),s.add({title:"Help",content:this.options.lims_doc_url}),this.masthead.append(s)}var o={id:"visualization",title:"Visualization",content:"visualization/list",title_attribute:"Visualize datasets"};Galaxy.user.id||(o.disabled=!0);var r=new e(o);if(Galaxy.user.id&&(r.add({title:"New Track Browser",content:"visualization/trackster",target:"_frame"}),r.add({title:"Saved Visualizations",content:"visualization/list",target:"_frame"})),this.masthead.append(r),Galaxy.user.get("is_admin")){var l=new e({id:"admin",title:"Admin",content:"admin",extra_class:"admin-only",title_attribute:"Administer this Galaxy"});this.masthead.append(l)}var d=new e({id:"help",title:"Help",title_attribute:"Support, contact, and community hubs"});if(this.options.biostar_url&&(d.add({title:"Galaxy Biostar",content:this.options.biostar_url_redirect,target:"_blank"}),d.add({title:"Ask a question",content:"biostar/biostar_question_redirect",target:"_blank"})),d.add({title:"Support",content:this.options.support_url,target:"_blank"}),d.add({title:"Search",content:this.options.search_url,target:"_blank"}),d.add({title:"Mailing Lists",content:this.options.mailing_lists,target:"_blank"}),d.add({title:"Videos",content:this.options.screencasts_url,target:"_blank"}),d.add({title:"Wiki",content:this.options.wiki_url,target:"_blank"}),d.add({title:"How to Cite Galaxy",content:this.options.citation_url,target:"_blank"}),this.options.terms_url&&d.add({title:"Terms and Conditions",content:this.options.terms_url,target:"_blank"}),this.masthead.append(d),Galaxy.user.id){var h=new e({id:"user",title:"User",extra_class:"loggedin-only",title_attribute:"Account preferences and saved data"});h.add({title:"Logged in as "+Galaxy.user.get("email")}),h.add({title:"Preferences",content:"user?cntrller=user",target:"galaxy_main"}),h.add({title:"Custom Builds",content:"user/dbkeys",target:"galaxy_main"}),h.add({title:"Logout",content:"user/logout",target:"_top",divider:!0}),h.add({title:"Saved Histories",content:"history/list",target:"galaxy_main"}),h.add({title:"Saved Datasets",content:"dataset/list",target:"galaxy_main"}),h.add({title:"Saved Pages",content:"page/list",target:"_top"}),h.add({title:"API Keys",content:"user/api_keys?cntrller=user",target:"galaxy_main"}),this.options.use_remote_user&&h.add({title:"Public Name",content:"user/edit_username?cntrller=user",target:"galaxy_main"}),this.masthead.append(h)}else{var h=new e({id:"user",title:"User",extra_class:"loggedout-only",title_attribute:"Account registration or login"});h.add({title:"Login",content:"user/login",target:"galaxy_main"}),this.options.allow_user_creation&&h.add({title:"Register",content:"user/create",target:"galaxy_main"}),this.masthead.append(h)}this.options.active_view&&this.masthead.highlight(this.options.active_view)}}),e=i.View.extend({options:{id:"",title:"",target:"_parent",content:"",type:"url",scratchbook:!1,onunload:null,visible:!0,disabled:!1,title_attribute:""},location:"navbar",$menu:null,events:{"click .head":"_head"},initialize:function(t){t&&(this.options=s.defaults(t,this.options)),void 0!==this.options.content&&-1===this.options.content.indexOf("//")&&(this.options.content=Galaxy.root+this.options.content),this.setElement(o(this._template(this.options))),this.options.disabled&&(o(this.el).find(".root").addClass("disabled"),this._attachPopover()),this.options.visible||this.hide()},show:function(){o(this.el).css({visibility:"visible"})},hide:function(){o(this.el).css({visibility:"hidden"})},add:function(t){var e={title:"Title",content:"",type:"url",target:"_parent",scratchbook:!1,divider:!1};t&&(e=s.defaults(t,e)),e.content&&-1===e.content.indexOf("//")&&(e.content=Galaxy.root+e.content),this.$menu||(o(this.el).find(".root").append(this._templateMenu()),o(this.el).find(".symbol").addClass("caret"),this.$menu=o(this.el).find(".popup"));var i=o(this._templateMenuItem(e));this.$menu.append(i);var n=this;i.on("click",function(e){return e.preventDefault(),"_blank"===n.options.target?!0:void Galaxy.frame.add(t)}),e.divider&&this.$menu.append(o(this._templateDivider()))},_head:function(t){t.preventDefault(),this.options.disabled||this.$menu||Galaxy.frame.add(this.options)},_attachPopover:function(){var t=o(this.el).find(".head");t.popover({html:!0,content:'Please <a href="'+Galaxy.root+'user/login?use_panels=True">log in</a> or <a href="'+Galaxy.root+'user/create?use_panels=True">register</a> to use this feature.',placement:"bottom"}).on("shown.bs.popover",function(){setTimeout(function(){t.popover("hide")},5e3)})},_templateMenuItem:function(t){return'<li><a href="'+t.content+'" target="'+t.target+'">'+t.title+"</a></li>"},_templateMenu:function(){return'<ul class="popup dropdown-menu"></ul>'},_templateDivider:function(){return'<li class="divider"></li>'},_template:function(t){var e='<ul id="'+t.id+'" class="nav navbar-nav" border="0" cellspacing="0"><li class="root dropdown" style=""><a class="head dropdown-toggle" data-toggle="dropdown" target="'+t.target+'" href="'+t.content+'" title="'+t.title_attribute+'">'+t.title+'<b class="symbol"></b></a></li></ul>';return e}});return{GalaxyMenu:t,GalaxyMastheadTab:e}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(3),i(1))},35:function(t,e,i){var n,a;(function(s,o,r){n=[i(33),i(13),i(10),i(6)],a=function(t,e,i,n){var a=s.View.extend(n.LoggableMixin).extend({_logNamespace:"layout",el:"body",className:"full-content",_panelIds:["left","center","right"],defaultOptions:{message_box_visible:!1,message_box_content:"",message_box_class:"info",show_inactivity_warning:!1,inactivity_box_content:""},initialize:function(t){this.log(this+".initialize:",t),o.extend(this,o.pick(t,this._panelIds)),this.options=o.defaults(o.omit(t,this._panelIds),this.defaultOptions),Galaxy.modal=this.modal=new i.View},$everything:function(){return this.$("#everything")},render:function(){return this.log(this+".render:"),this.$el.attr("scroll","no"),this.$el.html(this.template(this.options)),Galaxy.masthead=this.masthead=new t.GalaxyMasthead(o.extend(this.options.config,{el:this.$("#masthead").get(0)})),this.options.message_box_visible&&this.messageBox(this.options.message_box_content,this.options.message_box_class),this.options.show_inactivity_warning&&this.inactivityWarning(this.options.inactivity_box_content),this.renderPanels(),this},messageBox:function(t,e){return t=t||"",e=e||"info",this.$el.addClass("has-message-box"),this.$("#messagebox").attr("class","panel-"+e+"-message").html(t).toggle(!!t),this},inactivityWarning:function(t){var e='<a href="'+Galaxy.root+'user/resend_verification">Resend verification.</a>';return this.$el.addClass("has-inactivity-box"),this.$("#inactivebox").html(t).append(" "+e).toggle(!!t),this},renderPanels:function(){var t=this;return r(".select2-hidden-accessible").remove(),this._panelIds.forEach(function(e){if(o.has(t,e)){var i=t[e];i.setElement("#"+e),i.render()}}),this.left||this.center.$el.css("left",0),this.right||this.center.$el.css("right",0),this},template:function(t){return['<div id="everything" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">','<div id="background"/>','<div id="masthead" class="navbar navbar-fixed-top navbar-inverse"></div>','<div id="messagebox" style="display: none;"></div>','<div id="inactivebox" class="panel-warning-message" style="display: none;"></div>',this.left?'<div id="left"/>':"",this.center?'<div id="center" class="inbound"/>':"",this.right?'<div id="right"/>':"","</div>",'<div id="dd-helper" style="display: none;"></div>',"<noscript>",'<div class="overlay overlay-background noscript-overlay">',"<div>",'<h3 class="title">Javascript Required for Galaxy</h3>',"<div>","The Galaxy analysis interface requires a browser with Javascript enabled.<br>","Please enable Javascript and refresh this page","</div>","</div>","</div>","</noscript>"].join("")},hideSidePanels:function(){this.left&&this.left.hide(),this.right&&this.right.hide()},toString:function(){return"PageLayoutView"}});return{PageLayoutView:a}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(3),i(1))},36:function(t,e,i){var n,a;(function(s,o,r){n=[i(20)],a=function(t){var e=s.View.extend({el_main:"body",active:!1,button_active:null,button_load:null,initialize:function(e){e=e||{};var i=this;this.frames=new t.View({visible:!1}),this.button_active=new n({icon:"fa-th",tooltip:"Enable/Disable Scratchbook",onclick:function(){i._activate()},onunload:function(){return i.frames.length()>0?"You opened "+i.frames.length()+" frame(s) which will be lost.":void 0}}),this.button_load=new n({icon:"fa-eye",tooltip:"Show/Hide Scratchbook",onclick:function(t){i.frames.visible?i.frames.hide():i.frames.show()},with_number:!0}),e.masthead&&(e.masthead.append(this.button_active),e.masthead.append(this.button_load)),this.setElement(this.frames.$el),o(this.el_main).append(this.$el),this.frames.setOnChange(function(){i._refresh()}),this._refresh()},add_dataset:function(t){var e=this;i.e(1,function(i){(function(n,a){var s=[i(14)];(function(i){var s=new i.Dataset({id:t});n.when(s.fetch()).then(function(){var t={title:s.get("name")},n=a.find(["tabular","interval"],function(t){return-1!==s.get("data_type").indexOf(t)});if(n){var o=new i.TabularDataset(s.toJSON());a.extend(t,{type:"other",content:function(t){i.createTabularDatasetChunkedView({model:o,parent_elt:t,embedded:!0,height:"100%"})}})}else a.extend(t,{type:"url",content:Galaxy.root+"datasets/"+s.id+"/display/?preview=True"});e.add(t)})}).apply(null,s)}).call(this,i(1),i(3))})},add_trackster_viz:function(t){var e=this;i.e(0,function(i){(function(n,a){var s=[i(32),i(114)];(function(i,s){var o=new i.Visualization({id:t});n.when(o.fetch()).then(function(){var t=new s.TracksterUI(Galaxy.root),i={title:o.get("name"),type:"other",content:function(e){var i={container:e,name:o.get("title"),id:o.id,dbkey:o.get("dbkey"),stand_alone:!1},n=o.get("latest_revision"),s=n.config.view.drawables;a.each(s,function(t){t.dataset={hda_ldda:t.hda_ldda,id:t.dataset_id}}),view=t.create_visualization(i,n.config.viewport,n.config.view.drawables,n.config.bookmarks,!1)}};e.add(i)})}).apply(null,s)}).call(this,i(1),i(3))})},add:function(t){if("_blank"==t.target)return void window.open(t.content);if("_top"==t.target||"_parent"==t.target||"_self"==t.target)return void(window.location=t.content);if(this.active)this.frames.add(t);else{var e=o(window.parent.document).find("#galaxy_main");if("galaxy_main"==t.target||"center"==t.target)if(0===e.length){var i=t.content;i+=-1==i.indexOf("?")?"?":"&",i+="use_panels=True",window.location=i}else e.attr("src",t.content);else window.location=t.content}},_activate:function(){
this.active?(this.active=!1,this.button_active.untoggle(),this.frames.hide()):(this.active=!0,this.button_active.toggle())},_refresh:function(){this.button_load.number(this.frames.length()),0===this.frames.length()?this.button_load.hide():this.button_load.show(),this.frames.visible?this.button_load.toggle():this.button_load.untoggle()}}),n=s.View.extend({options:{id:"",icon:"fa-cog",tooltip:"",with_number:!1,onclick:function(){alert("clicked")},onunload:null,visible:!0},location:"iconbar",initialize:function(t){t&&(this.options=r.defaults(t,this.options)),this.setElement(o(this._template(this.options)));var e=this;o(this.el).find(".icon").tooltip({title:this.options.tooltip,placement:"bottom"}).on("mouseup",e.options.onclick),this.options.visible||this.hide()},show:function(){o(this.el).css({visibility:"visible"})},hide:function(){o(this.el).css({visibility:"hidden"})},icon:function(t){o(this.el).find(".icon").removeClass(this.options.icon).addClass(t),this.options.icon=t},toggle:function(){o(this.el).addClass("toggle")},untoggle:function(){o(this.el).removeClass("toggle")},number:function(t){o(this.el).find(".number").text(t)},_template:function(t){var e='<div id="'+t.id+'" class="symbol"><div class="icon fa fa-2x '+t.icon+'"></div>';return t.with_number&&(e+='<div class="number"></div>'),e+="</div>"}});return{GalaxyFrame:e,GalaxyMastheadIcon:n}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(1),i(3))},66:function(t,e,i){var n,a;(function(s,o,r){n=[i(6),i(5)],a=function(t,e){var i="user",n=s.View.extend(t.LoggableMixin).extend({_logNamespace:i,options:{warnAtPercent:85,errorAtPercent:100},initialize:function(t){this.log(this+".initialize:",t),o.extend(this.options,t),this.model.bind("change:quota_percent change:total_disk_usage",this.render,this)},update:function(t){return this.log(this+" updating user data...",t),this.model.loadFromApi(this.model.get("id"),t),this},isOverQuota:function(){return null!==this.model.get("quota_percent")&&this.model.get("quota_percent")>=this.options.errorAtPercent},_render_quota:function(){var t=this.model.toJSON(),e=t.quota_percent,i=r(this._templateQuotaMeter(t)),n=i.find(".progress-bar");return this.isOverQuota()?(n.attr("class","progress-bar progress-bar-danger"),i.find(".quota-meter-text").css("color","white"),this.trigger("quota:over",t)):e>=this.options.warnAtPercent?(n.attr("class","progress-bar progress-bar-warning"),this.trigger("quota:under quota:under:approaching",t)):(n.attr("class","progress-bar progress-bar-success"),this.trigger("quota:under quota:under:ok",t)),i},_render_usage:function(){var t=r(this._templateUsage(this.model.toJSON()));return this.log(this+".rendering usage:",t),t},render:function(){var t=null;return this.log(this+".model.quota_percent:",this.model.get("quota_percent")),t=null===this.model.get("quota_percent")||void 0===this.model.get("quota_percent")?this._render_usage():this._render_quota(),this.$el.html(t),this.$el.find(".quota-meter-text").tooltip(),this},_templateQuotaMeter:function(t){return['<div id="quota-meter" class="quota-meter progress">','<div class="progress-bar" style="width: ',t.quota_percent,'%"></div>','<div class="quota-meter-text" style="top: 6px"',t.nice_total_disk_usage?' title="Using '+t.nice_total_disk_usage+'">':">",e("Using")," ",t.quota_percent,"%","</div>","</div>"].join("")},_templateUsage:function(t){return['<div id="quota-meter" class="quota-meter" style="background-color: transparent">','<div class="quota-meter-text" style="top: 6px; color: white">',t.nice_total_disk_usage?e("Using ")+t.nice_total_disk_usage:"","</div>","</div>"].join("")},toString:function(){return"UserQuotaMeter("+this.model+")"}});return{UserQuotaMeter:n}}.apply(e,n),!(void 0!==a&&(t.exports=a))}).call(e,i(2),i(3),i(1))}});
//# sourceMappingURL=login.bundled.js.map