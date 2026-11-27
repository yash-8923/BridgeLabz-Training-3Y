$(function(){
$(".product").click(function(){$(".product").removeClass("highlight");$(this).addClass("highlight");});
$(".product").hover(function(){$(this).find(".details").slideDown();},function(){$(this).find(".details").slideUp();});
$(".favorite").click(function(e){e.stopPropagation();$(this).toggleClass("selected").text($(this).hasClass("selected")?"♥ Favorited":"♡ Favorite");});
$('[data-discount="true"]').css({border:"2px solid orange",background:"#fff4e5"});
$(".buyButton").click(function(){alert($(this).closest(".product").data("stock")==="out"?"Sorry, out of stock.":"Added to cart!");});
});