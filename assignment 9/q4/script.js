$(function(){
$("#hideBanner").click(()=>$("#banner1").hide());
$("#showBanners").click(()=>$(".banner").show());
$("#slideToggle").click(()=>$(".banner").slideToggle());
$("#fadeOut").click(()=>$(".banner").fadeOut(700));
$("#fadeIn").click(()=>$(".banner").fadeIn(700));
let i=0,b=$(".banner");setInterval(()=>{b.eq(i).fadeOut(400,()=>{i=(i+1)%b.length;b.eq(i).fadeIn(400);});},5000);
});