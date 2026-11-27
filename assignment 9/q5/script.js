$(function(){
$(".manager").click(function(){let id=$(this).data("manager");$(".employee").removeClass("report-highlight");$('.employee[data-reports-to="'+id+'"]').addClass("report-highlight");});
$(".employee-name").hover(function(){$(this).next(".contact").fadeIn();},function(){$(this).next(".contact").fadeOut();});
$(".department").click(function(){$(this).children(".employee").css("background","#e5f5e0");});
$("#randomEmployee").click(function(){let e=$(".employee"),x=e.eq(Math.floor(Math.random()*e.length));x.addClass("report-highlight").siblings(".employee").addClass("report-highlight");});
$("#toggleTeam").click(function(){$(this).parent().find(".team-list").slideToggle();});
});