const pp=document.getElementById("submit");
const sub=function(){
const ss=document.createElement("h2");
ss.innerText="Message is sent succesfully";
document.body.append(ss);
// window.open("#home");
ss.style.padding="50px 100px";
ss.style.backgroundColor="red";
ss.style.border="1px solid black";
ss.style.textAlign="centre";
ss.style.marginBottom="50px";
}

pp.onclick=sub;