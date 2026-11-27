$(function(){
$(".faq-question").click(function(){$(this).next(".faq-answer").slideToggle();})
.hover(function(){$(this).css("color","blue");},function(){$(this).css("color","");})
.dblclick(function(){$(".faq-answer").slideUp();});
$(".faq-answer input").focus(function(){$(this).closest(".faq-item").find(".faq-question").css("background","#e8f4ff");})
.blur(function(){$(this).closest(".faq-item").find(".faq-question").css("background","");});
});