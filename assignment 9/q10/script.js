$(function(){
const used=["alreadyused@example.com","student@example.com"];
function bad(x,m){x.css("border","2px solid red").next(".error").text(m);}
function clear(x){x.css("border","").next(".error").text("");}
$("#registrationForm").submit(function(e){e.preventDefault();let n=$("#name"),em=$("#email"),p=$("#password"),ok=true;
[n,em,p].forEach(clear);$("#successMessage").text("");
if(!n.val().trim()){bad(n,"Name is required.");ok=false;}
let email=em.val().trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){bad(em,"Enter valid email.");ok=false;}else if(used.includes(email.toLowerCase())){bad(em,"Email already registered.");ok=false;}
if(p.val().length<8){bad(p,"Minimum 8 characters.");ok=false;}
if(ok){$("#successMessage").text("Registration successful!");this.reset();}
});
});