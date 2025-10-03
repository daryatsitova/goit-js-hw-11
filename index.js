import{a as y,S as m,i}from"./assets/vendor-BNibzuFn.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="52595115-c90df6dee3e8dfc0035bbe5c3";function v(r){return y.get("https://pixabay.com/api/",{params:{key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const u=document.querySelector(".gallery"),d=document.querySelector(".loader"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(r){const a=r.map(({largeImageURL:s,webformatURL:o,tags:e,likes:t,views:l,comments:p,downloads:f})=>`<li class="gallery-item">
  <a class="gallery-link" href=${s}>
    <img
      class="gallery-image"
      src="${o}"
      alt="${e}"
    />
    <div class="gallery-info">
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Likes</span>
        <span class="gallery-stat-value">${t}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Views</span>
        <span class="gallery-stat-value">${l}</span>
      </div>
      <div class="gallery-stats"> 
        <span class="gallery-stat-label">Comments</span>
        <span class="gallery-stat-value">${p}</span>
      </div>
      <div class="gallery-stats">
        <span class="gallery-stat-label">Downloads</span>
        <span class="gallery-stat-value">${f}</span> 
      </div>
    </div>
  </a>
</li>`).join("");u.innerHTML=a,b.refresh()}function w(){u.innerHTML=""}function S(){d.classList.remove("hidden")}function n(){d.classList.add("hidden")}const g=document.querySelector(".form"),c=g.querySelector("input[name='search']");g.addEventListener("submit",async r=>{r.preventDefault();const a=c.value.trim();if(!a){i.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}w(),S();try{const s=await v(a);if(n(),s.hits.length===0){i.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4d4f"});return}L(s.hits),c.value=""}catch{n(),i.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight",backgroundColor:"#ff4d4f"})}});
//# sourceMappingURL=index.js.map
