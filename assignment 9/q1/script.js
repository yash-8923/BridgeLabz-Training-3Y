$(function(){
let h=new Date().getHours(),g=h<12?"Good Morning!":h<17?"Good Afternoon!":"Good Evening!";
$("#greeting").text(g);
const quotes=["Keep learning!","Small steps lead to big results.","Believe and build!","Consistency wins.","Make today count."];
$("#changeGreeting").click(function(){ $("#greeting").text(quotes[Math.floor(Math.random()*quotes.length)]); alert("Greeting changed!");});
$("#toggleWelcome").click(function(){ $("#welcomeMessage").toggle();});
$("#greeting").click(function(){alert("Welcome to our website!");});
});