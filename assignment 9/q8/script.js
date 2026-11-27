$(function(){
let n=5;
$("#addPost").click(()=>$("#postList").append('<article class="post"><h3>New Post '+(++n)+'</h3><p>Added dynamically.</p></article>'));
$("#prependFeatured").click(()=>$("#postList").prepend('<article class="post featured"><h3>Featured Post</h3><p>Featured content.</p></article>'));
$("#removeLast").click(()=>$("#postList .post").last().remove());
$("#addTag").click(()=>$("#postList .post").first().find("h3").after('<span class="tag"> jQuery </span>').end().find("p").before('<p>Tagged post</p>'));
$("#highlightKeyword").click(function(){$("#postList .post").each(function(){$(this).css("border",$(this).text().toLowerCase().includes("javascript")?"2px solid orange":"");});});
});