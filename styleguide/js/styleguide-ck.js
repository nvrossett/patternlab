(function(e){function i(e){$("#sg-viewport").width(e);f(e)}function a(){var e=$sgViewport.width(),t=e/u;s.text(e);o.text(t.toFixed(2))}function f(e){var t=e/u;s.text(Math.floor(e));o.text(t.toFixed(2))}function l(){i(h(240,t))}function c(){discoMode=!1;clearInterval(discoID);discoID=!1}function h(e,t){return Math.random()*(t-e)+e}function p(e,t){var n=$("#"+e);if(n.length){n.attr("src",t);return!1}return!0}var t=document.body.clientWidth,n=document.body.clientHeight,r=window.getComputedStyle(document.body,":after").getPropertyValue("content");$sgViewport=$("#sg-viewport"),$viewToggle=$("#sg-t-toggle"),$sizeToggle=$("#sg-size-toggle"),$tClean=$("#sg-t-clean"),$tAnnotations=$("#sg-t-annotations"),$tCode=$("#sg-t-code"),$tSidebar=$("#sg-t-sidebar"),$tFull=$("#sg-t-full"),$tSize=$("#sg-size"),$vp=Object,$sgPattern=Object,discoID=!1,discoMode=!1;$(e).resize(function(){t=document.body.clientWidth;n=document.body.clientHeight;r=window.getComputedStyle(document.body,":after").getPropertyValue("content");a()});$(".sg-nav-toggle").on("click",function(e){e.preventDefault();$(".sg-nav-container").toggleClass("active")});$viewToggle.on("click",function(e){e.preventDefault();$(this).parents("ul").toggleClass("active")});$sizeToggle.on("click",function(e){e.preventDefault();$(this).parents("ul").toggleClass("active")});$("#sg-size-s").on("click",function(e){e.preventDefault();c();i(h(320,500))});$("#sg-size-m").on("click",function(e){e.preventDefault();c();i(h(500,800))});$("#sg-size-l").on("click",function(e){e.preventDefault();c();i(h(800,1200))});$("#sg-size-xl").on("click",function(e){e.preventDefault();c();i(h(1200,1920))});$("#sg-size-random").on("click",function(e){e.preventDefault();c();i(h(240,t))});$("#sg-size-disco").on("click",function(e){e.preventDefault();if(discoMode)c();else{discoMode=!0;discoID=setInterval(l,800)}});$("#sg-size-enter").submit(function(){var e=$("#sg-size-num").val();i(e);return!1});$sgViewport.load(function(){function r(){n.each(function(e){$this=$(this),$thisHTML=$this.html().replace(/[<>]/g,function(e){return{"<":"&lt;",">":"&gt;"}[e]}),$thisCode=$("<code></code>").html($thisHTML);$('<pre class="sg-code" />').html($thisCode).appendTo($this)});t.find(".sg-code").show()}var e=$sgViewport.attr("src"),t=$sgViewport.contents(),n=t.find(".sg-pattern");$(".sg-nav a").not(".sg-acc-handle").on("click",function(e){var t=$(this).attr("href")});$tClean.on("click",function(e){e.preventDefault();$(this).toggleClass("active");$sgViewport.contents().hide();t.find("body").toggleClass("sg-clean");t.find("#intro, .sg-head, #about-sg").toggle();t.find("[role=main]").toggleClass("clean")});$tCode.on("click",function(e){var n=t.find(".sg-code");e.preventDefault();$(this).toggleClass("active");t.find(".sg-code").length==0?r():n.toggle()});t.find(".sg-head a").on("click",function(e){e.preventDefault();var t=$(this).attr("href");window.location=t})});var s=$(".sg-size-px"),o=$(".sg-size-em"),u=parseInt($("body").css("font-size"));a();$(".sg-acc-handle").on("click",function(e){var t=$(this),n=t.next(".sg-acc-panel");e.preventDefault();t.toggleClass("active");n.toggleClass("active")});$(".sg-control-trigger").on("click",function(e){var t=$(this),n=t.parents(".sg-control-container");e.preventDefault();n.toggleClass("active")})})(this);