import{S as a,N as v,a as f,i as m}from"./assets/vendor-C0NHodMF.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p=document.querySelector(".header-menu-open-btn"),w=document.querySelector(".mob-menu-btn"),l=document.querySelector(".mobile-menu-overlay");p.addEventListener("click",()=>{l.classList.add("hidden")});w.addEventListener("click",()=>{l.classList.remove("hidden")});document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".accordion-btn").forEach(t=>{t.addEventListener("click",()=>{const o=t.nextElementSibling;o.classList.contains("show")?(o.classList.remove("show"),t.classList.remove("active")):(document.querySelectorAll(".descrip-text-list.show").forEach(n=>{n.classList.remove("show"),n.previousElementSibling.classList.remove("active")}),o.classList.add("show"),t.classList.add("active"))})})});new a(".projects-swiper",{grabCursor:!0,mousewheel:!0,speed:500,keyboard:{enabled:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".covers"),t=document.querySelectorAll(".marquee__line");function o(){t.forEach(i=>{i.style.animationPlayState="running"})}function n(){t.forEach(i=>{i.style.animationPlayState="paused"})}const e={root:null,rootMargin:"0px",threshold:.1},r=new IntersectionObserver((i,L)=>{i.forEach(d=>{d.isIntersecting?o():n()})},e);s&&r.observe(s)});const h=document.querySelector("#reviews"),c=document.querySelector(".reviews-list");new a(".reviews-swiper",{modules:[v],navigation:{nextEl:".reviews-controls-next",prevEl:".reviews-controls-prev"},spaceBetween:"16",breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}}});const u=new IntersectionObserver(s=>{s.forEach(t=>{t.isIntersecting&&(b(),u.unobserve(t.target))})});u.observe(h);async function y(){try{return(await f.get("https://portfolio-js.b.goit.study/api/reviews")).data}catch{return m.error({message:"Error fetching reviews"}),[]}}function g(s){if(s.length===0){c.innerHTML='<p class="reviews-notfound">Not found</p>';return}const t=s.map(({author:o,avatar_url:n,review:e})=>`
    <li class="reviews-list-item swiper-slide">
      <img class="reviews-avatar" src="${n}" alt="Review author" loading="lazy"/>
      <h3 class="reviews-author">${o}</h3>
      <p class="reviews-text">${e}</p>
    </li>`).join("");c.insertAdjacentHTML("beforeend",t)}async function b(){const s=await y();g(s)}
//# sourceMappingURL=commonHelpers.js.map
