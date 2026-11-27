$(function(){
function msg(t){$("#message").text(t).stop(true,true).fadeIn().delay(1500).fadeOut();}
$("#topics").on("click",".subscribe",function(){$(this).closest(".topic").data("subscribed",true);msg("Subscribed: notifications enabled.");});
$("#topics").on("click",".unsubscribe",function(){$(this).closest(".topic").data("subscribed",false);msg("Unsubscribed: notifications disabled.");});
$("#addTopic").click(function(){let n=$("#newTopic").val().trim();if(!n)return msg("Enter a topic.");$("#topics").append('<div class="topic"><span class="topic-name"></span> <button class="subscribe">Subscribe</button> <button class="unsubscribe">Unsubscribe</button> <button class="removeTopic">Remove</button></div>').children().last().find(".topic-name").text(n);$("#newTopic").val("");msg("Topic added.");});
$("#topics").on("click",".removeTopic",function(){$(this).off("click").closest(".topic").remove();msg("Topic removed.");});
});