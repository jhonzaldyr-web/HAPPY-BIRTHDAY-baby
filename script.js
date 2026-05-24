/* FLOATING HEARTS */
for(let i=0;i<20;i++){
  let heart=document.createElement("div");
  heart.className="heart";
  heart.style.left=Math.random()*100+"vw";
  heart.style.animationDuration=(Math.random()*3+3)+"s";
  document.body.appendChild(heart);
}

/* ENVELOPE */
document.getElementById("envelope").addEventListener("click",()=>{
  document.getElementById("envelope").classList.toggle("open");
});

/* POPUP */
function showPopup(text){
  const popup=document.getElementById("popup");
  const overlay=document.getElementById("overlay");

  document.getElementById("popupText").innerText=text;
  popup.classList.add("active");
  overlay.classList.add("active");
}

/* BUTTON TOGGLE */
let open=false;

function togglePopup(){

  const popup=document.getElementById("popup");
  const overlay=document.getElementById("overlay");

  if(open){
    popup.classList.remove("active");
    overlay.classList.remove("active");
    open=false;
  } else {
    document.getElementById("popupText").innerText =
`💜 Happy Birthday Baby 💜

Thank you for coming into my life.
Thank you for making me smile.
Thank you for being my peace.
I love you always 💜`;

    popup.classList.add("active");
    overlay.classList.add("active");
    open=true;
  }
}

/* CLOSE */
document.getElementById("overlay").addEventListener("click",()=>{
  document.getElementById("popup").classList.remove("active");
  document.getElementById("overlay").classList.remove("active");
  open=false;
});

/* DROPDOWN */
function toggle(el){
  el.classList.toggle("active");
}