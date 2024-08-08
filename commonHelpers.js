import{a as h,i as m,S as g}from"./assets/vendor-0Fq3u7cb.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=l(t);fetch(t.href,o)}})();async function f(e){const r="https://pixabay.com/api/",l="45205747-764edaf41060424617edeea8e",n=new URLSearchParams({key:l,q:e.replace(/\s+/g,"+"),image_type:"photo",orientation:"horizontal",safesearch:!0,page:params.currentPage,per_page:params.per_page});try{return(await h.get(`${r}?${n}`)).data}catch(t){throw new Error(t.response.statusText)}}function d(e){m.error({title:"Error",message:e})}function y(e){return`
    <div class="gallery-item">
      <a href="${e.largeImageURL}" class="gallery-link">
        <img src="${e.webformatURL}" alt="${e.tags}" class="gallery-image" />
      </a>
      <div class="item-info-block">
        ${c("Likes",e.likes)}
        ${c("Views",e.views)}
        ${c("Comments",e.comments)}
        ${c("Downloads",e.downloads)}
      </div>
    </div>
  `}function c(e,r){return`
    <div class="block">
      <p class="title">${e}</p>
      <p class="amount">${r}</p>
    </div>
  `}function E(e){const r=document.querySelector(".gallery"),l=e.map(n=>y(n)).join("");r.insertAdjacentHTML("beforeend",l)}const L=new g(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:!0,close:!0,className:"custom-lightbox"}),s={searchFormEl:document.querySelector(".js-search"),searchInputEl:document.querySelector(".input-search"),loadMoreBtnEl:document.querySelector(".btn-load-more"),endTextEl:document.querySelector(".end-text"),galleryEl:document.querySelector(".gallery"),loaderEl:document.querySelector(".loader")},a={currentPage:1,per_page:15},v=()=>{const e=s.galleryEl.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})},u=async e=>{s.loaderEl.classList.remove("is-hidden");try{const r=await f(e,a);if(!r.hits.length&&a.currentPage===1){s.loadMoreBtnEl.classList.add("is-hidden"),s.loaderEl.classList.add("is-hidden"),d("Sorry, there are no images matching your search query. Please try again!");return}E(r.hits),s.loadMoreBtnEl.classList.remove("is-hidden"),L.refresh(),(r.hits.length<a.per_page||a.currentPage*a.per_page>=r.totalHits)&&(s.loadMoreBtnEl.classList.add("is-hidden"),s.endTextEl.classList.remove("is-hidden"),s.loadMoreBtnEl.removeEventListener("click",p)),s.loaderEl.classList.add("is-hidden")}catch{d("Unknown error. Please try again!")}};s.searchFormEl.addEventListener("submit",async e=>{e.preventDefault(),a.currentPage=1,s.galleryEl.innerHTML="";const r=s.searchInputEl.value.trim();r&&(await u(r),s.endTextEl.classList.add("is-hidden"),s.loadMoreBtnEl.addEventListener("click",p))});const p=async e=>{a.currentPage+=1;const r=s.searchInputEl.value.trim();u(r),v()};
//# sourceMappingURL=commonHelpers.js.map
