import{S as u,i as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function h(r){const o="43130962-c664da34f6898978b873c66fd",e=`https://pixabay.com/api/?${new URLSearchParams({key:o,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(t=>t.json())}const p=document.querySelector("ul.gallery");function f(r){const o=r.map(e=>`<li class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
          <img
            class="gallery-image"
            width="1280"
            height="152"
            src="${e.webformatURL}"
            data-source="${e.largeImageURL}"
            alt="${e.tags}"
          />
          <ul class="gallery-description">
          <li><h3>Likes</h3><p>${e.likes}</p>
          </li>
          <li><h3>Views</h3><p>${e.views}</p>
            </li>
            <li><h3>Comments</h3><p>${e.comments}</p>
              </li>
              <li><h3>Downloads</h3><p>${e.downloads}</p>
                </li>
          </ul>
        </a>
      </li>`).join("");p.insertAdjacentHTML("beforeend",o);const n={captionsData:"alt"};let s=new u(".gallery a",n);s.on("show.simplelightbox",function(){}),s.refresh()}const c=document.querySelector("ul.gallery");let i="";const a=document.getElementById("search-input");a.addEventListener("input",r=>{i=a.value.trim(),c.innerHTML=""});const m=document.getElementById("search-button");m.addEventListener("click",()=>{i&&(c.innerHTML='<div class="loader"></div>',h(i).then(r=>f(r.hits)).catch(r=>{console.log(r),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))});
//# sourceMappingURL=commonHelpers.js.map
