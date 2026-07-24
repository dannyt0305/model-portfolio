window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".loader").classList.add("hide"),450));
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const lightbox=document.querySelector(".lightbox");
const lightboxImg=lightbox.querySelector("img");
document.querySelectorAll("figure img").forEach(img=>{
  img.addEventListener("click",()=>{
    lightboxImg.src=img.src;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden","false");
  });
});
function closeLightbox(){
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden","true");
}
lightbox.querySelector("button").addEventListener("click",closeLightbox);
lightbox.addEventListener("click",e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
