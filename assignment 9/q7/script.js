$(function(){
function filter(){let q=$("#courseSearch").val().toLowerCase(),n=0;
$(".course").each(function(){let ok=$(this).text().toLowerCase().includes(q);$(this).toggle(ok).css("background",ok&&q?"#fff3cd":"");if(ok)n++;});
$("#matchCount").text("Matching courses: "+n);}
$("#courseSearch").keyup(filter);$("#clearSearch").click(function(){$("#courseSearch").val("");filter();$(".course").show().css("background","");});filter();
});