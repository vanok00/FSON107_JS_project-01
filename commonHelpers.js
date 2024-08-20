import{A as w,S as p,a as m,i as f}from"./assets/vendor-DzSTdvLV.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const E=document.querySelector(".header-menu-open-btn"),q=document.querySelector(".mob-menu-btn"),b=document.querySelector(".mob-menu");E.addEventListener("click",()=>{b.classList.add("is-open")});q.addEventListener("click",()=>{b.classList.remove("is-open")});document.addEventListener("DOMContentLoaded",()=>{const n=document.querySelector(".menu-toggle"),s=document.querySelector(".menu-container"),t=document.createElement("div");t.className="menu",[{href:"#about",text:"About me"},{href:"#benefits",text:"Benefits"},{href:"#projects-section",text:"Projects"},{href:"#frequently-asked-questions",text:"FAQ"}].forEach(e=>{const o=document.createElement("a");o.href=e.href,o.textContent=e.text,t.appendChild(o)}),s.appendChild(t),n.addEventListener("click",e=>{if(e.preventDefault(),t.classList.contains("show"))t.style.height=0,setTimeout(()=>{t.classList.remove("show")},300);else{t.classList.add("show");const o=t.scrollHeight+"px";t.style.height=o}}),document.addEventListener("click",e=>{!t.contains(e.target)&&!n.contains(e.target)&&t.classList.contains("show")&&(t.style.height=0,setTimeout(()=>{t.classList.remove("show")},300))}),t.addEventListener("click",e=>{if(e.target.tagName===""){const o=e.target.getAttribute("href"),r=document.querySelector(o);if(r){const v=r.offsetTop;window.scrollTo({top:v,behavior:"smooth"}),t.style.height=0,setTimeout(()=>{t.classList.remove("show")},300)}}})});new w(".about-info-list",{elementClass:"info-item",triggerClass:"info-icon-wrapper",panelClass:"info-item-panel"});document.querySelector(".about-button-next");new p(".tec-swiper-container",{spaceBetween:0,loop:!0,breakpoints:{320:{slidesPerView:2},768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-button-next"},keyboard:{enabled:!0}});new p(".projects-swiper",{grabCursor:!0,mousewheel:!0,speed:500,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){new w(".accordion-container",{duration:1e3,showMultiple:!1,elementClass:"ac",triggerClass:"ac-trigger",panelClass:"ac-panel",activeClass:"is-active"})});document.addEventListener("DOMContentLoaded",function(){const n=document.querySelector(".covers"),s=document.querySelectorAll(".marquee__line");function t(){s.forEach(r=>{r.style.animationPlayState="running"})}function i(){s.forEach(r=>{r.style.animationPlayState="paused"})}const e={root:null,rootMargin:"0px",threshold:.1},o=new IntersectionObserver((r,v)=>{r.forEach(S=>{S.isIntersecting?t():i()})},e);n&&o.observe(n)});const k=document.querySelector("#reviews"),g=document.querySelector(".reviews-list");new p(".reviews-swiper",{navigation:{nextEl:".reviews-controls-next",prevEl:".reviews-controls-prev"},spaceBetween:"16",breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const y=new IntersectionObserver(n=>{n.forEach(s=>{s.isIntersecting&&(O(),y.unobserve(s.target))})});y.observe(k);async function x(){try{return(await m.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return f.error({message:"Error fetching reviews"}),[]}}function C(n){if(n.length===0){g.innerHTML='<p class="reviews-notfound">Not found</p>';return}const s=n.map(({author:t,avatar_url:i,review:e})=>`
    <li class="reviews-list-item swiper-slide">
      <img class="reviews-avatar" src="${i}" alt="Review author" loading="lazy"/>
      <h3 class="reviews-author">${t}</h3>
      <p class="reviews-text">${e}</p>
    </li>`).join("");g.insertAdjacentHTML("beforeend",s)}async function O(){const n=await x();C(n)}const L=document.querySelector(".feedback-form");document.querySelector(".feedback-button");const a=document.querySelector(".email-input"),c=document.querySelector(".text-input"),l={email:"",comment:""},u=document.querySelector(".backdrop"),h=document.querySelector(".modal"),P=document.querySelector(".close-button");L.addEventListener("input",A);function A(){l.email=a.value.trim(),l.comment=c.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(l))}const d=JSON.parse(localStorage.getItem("feedback-form-state"));d!==null&&(c.value=d.comment,a.value=d.email);L.addEventListener("submit",I);async function I(n){if(n.preventDefault(),a.value!==""&&c.value!==""){l.email=a.value.trim(),l.comment=c.value.trim(),m.defaults.baseURL="https://portfolio-js.b.goit.study/api";try{const s=()=>{h.classList.remove("is-open"),u.classList.remove("is-open")},t=await m.post("/requests",{email:a.value.trim(),comment:c.value.trim()});P.addEventListener("click",s),u.addEventListener("click",s),console.log(t),u.classList.add("is-open"),h.classList.add("is-open"),f.success({position:"topRight",message:"Succeed!"}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s()})}catch(s){console.log(s),f.error({position:"topRight",message:"Error.Please try again!"})}localStorage.removeItem("feedback-form-state"),a.value="",c.value=""}else alert("Fill please all fields")}
//# sourceMappingURL=commonHelpers.js.map
