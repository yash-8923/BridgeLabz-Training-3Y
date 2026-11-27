// Two CDN-loaded versions are captured by noConflict(true).
const $first=jQuery.noConflict(true); // first jQuery version
const $second=jQuery.noConflict(true); // second version
$first(function(){let i=0,s=$first(".slide");function rotate(){s.hide().eq(i).fadeIn();i=(i+1)%s.length;}rotate();setInterval(rotate,3000);
$first(".widget").click(function(){$first(".widget").removeClass("active-widget");$first(this).addClass("active-widget");});});
$second(function(){$second("#showModal").click(()=>$("#notificationModal").fadeIn());$second("#closeModal").click(()=>$("#notificationModal").fadeOut());$second(".tooltip-item").hover(function(){$second(this).attr("title","Widget information");});});