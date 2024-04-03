import{S as u,i as d}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function h(r){return fetch(`https://pixabay.com/api/?key=43130962-c664da34f6898978b873c66fd&q${r}&image_type=photo&orientation=horizontal&safesearch=true`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}const f=document.querySelector("ul.gallery");function p(r){const o=r.map(e=>`<li class="gallery-item">
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
      </li>`).join("");f.insertAdjacentHTML("beforeend",o);const s={captionsData:"alt"};let i=new u(".gallery a",s);i.on("show.simplelightbox",function(){}),i.refresh()}const c=document.querySelector("ul.gallery");let n="";const a=document.getElementById("search-input");a.addEventListener("input",r=>{n=a.value.trim(),c.innerHTML=""});const g=document.getElementById("search-button");g.addEventListener("click",()=>{n&&(c.innerHTML='<div class="loader"></div>',h(n).then(r=>p(r.hits)).catch(r=>{console.log(r),d.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}))});
//# sourceMappingURL=commonHelpers.js.map
