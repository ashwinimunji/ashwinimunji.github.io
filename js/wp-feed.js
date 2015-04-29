/* global current_url */
/* global globalData */
window.current_url = "http://ashwinimunji.com/blog/the-laptop/?json=1";
$.getJSON(current_url, function(data) {
	window.globalData = data;
	console.log(globalData);
	document.getElementById("wp-feed").innerHTML=document.getElementById("wp-feed").innerHTML + '<h4><a href="'+data.post.url+'">'+data.post.title+'</a></h4>';
	document.getElementById("wp-feed").innerHTML=document.getElementById("wp-feed").innerHTML + '<p><a href="'+data.post.url+'"<span class="image right"><img src="'+data.post.thumbnail_images.medium.url+'"</span></a>'+data.post.excerpt+'<a href="'+data.post.url+'"> Read More &#8594;</p>';
	console.log(current_url);
});
console.log(current_url);
console.log(globalData);
while(globalData.next_url)
{
	current_url=globalData.next_url+'?json=1';
	$.getJSON();
}