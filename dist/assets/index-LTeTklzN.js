(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const f=document.querySelector(".erreur__msg"),b=document.querySelector(".validation__msg"),j=document.querySelector(".formulaire__contact");j.addEventListener("submit",e=>{e.preventDefault(),document.querySelector("#email").value.includes("@")?(b.classList.remove("hidden"),f.classList.add("hidden"),(void 0).submit):(f.classList.remove("hidden"),b.classList.add("hidden"))});const w=window.location.href,S="products.html";w.includes(S)&&L();function L(){class e{constructor(i,l,a,c){this.imgMobile=i,this.imgDesktop=l,this.title=a,this.modal=c}toHtml(){const i=document.createElement("li");i.className="flex flex-col items-center gap-4 media relative",i.setAttribute("data-search",this.title);const l=document.createElement("figure");i.appendChild(l);const a=document.createElement("picture");l.appendChild(a);const c=document.createElement("source");a.appendChild(c),a.className="relative",c.media="(min-width: 1024px)",c.srcset=this.imgDesktop;const d=document.createElement("img");a.appendChild(d),d.src=this.imgMobile,d.alt="cover",d.className="h-60 w-dvw object-cover rounded-xl cursor-pointer grayscale transition hover:filter-none hover:border-indigo-50 hover:border-4 hover:scale-95";const m=document.createElement("div");m.className="hidden absolute top-0 left-0 bg-indigo-800/90 h-full w-full flex flex-col items-center justify-center text-center rounded-lg cursor-pointer",i.appendChild(m);const u=document.createElement("div");m.appendChild(u);const g=document.createElement("h3");u.appendChild(g),g.textContent=this.modal[0],g.className="text-indigo-50 text-3xl tracking-wider font-extralight pb-1";const p=document.createElement("h4");u.appendChild(p),p.textContent=this.modal[1],p.className="text-indigo-50 text-xl tracking-wider font-thin pb-6";const h=document.createElement("h5");return u.appendChild(h),h.textContent=this.modal[2],h.className="text-indigo-50 text-sm tracking-widest font-bold",i.addEventListener("click",()=>{m.classList.toggle("hidden")}),i}}const o=[new e("./assets/img/mobile/dune_mobile.jpg","./assets/img/desktop/dune.jpg","Dune",["Dune","120 min","20,99$"]),new e("./assets/img/mobile/inside-out_mobile.jpg","./assets/img/desktop/inside-out.jpg","Inside Out",["Inside Out","120 min","20.99$"]),new e("./assets/img/mobile/civilwar_mobile.jpg","./assets/img/desktop/civilwar.jpg","Civil War",["Civil War","120 min","20.99$"]),new e("./assets/img/mobile/junction_mobile.jpg","./assets/img/desktop/junction.jpg","Junction",["Junction","120 min","20.99$"]),new e("./assets/img/mobile/if_mobile.jpg","./assets/img/desktop/if.jpg","If",["If","120 min","20.99$"]),new e("./assets/img/mobile/fallguy_mobile.jpg","./assets/img/desktop/fallguy.jpg","Fall Guy",["Fall Guy","120 min","20.99$"])],r=document.querySelector("#films__container");o.forEach(s=>{r.appendChild(s.toHtml())});const n=[new e("./assets/img/desktop/theboys.jpg","./assets/img/mobile/theboys_mobile.jpg","The Boys",["The Boys","4 Saisons","24.99$ / Saison"]),new e("./assets/img/desktop/theoffice.jpg","./assets/img/mobile/theoffice_mobile.jpg","The Office",["The Office","4 Saisons","24.99$ / Saison"]),new e("./assets/img/desktop/thelastkingdom.jpg","./assets/img/mobile/thelastkingdom_mobile.jpg","The Last Kingdom",["The Last Kingdom","4 Saisons","24.99$ / Saison"]),new e("./assets/img/desktop/familyguy.jpg","./assets/img/mobile/familyguy_mobile.jpg","Family Guy",["Family Guy","4 Saisons","24.99$ / Saison"]),new e("./assets/img/desktop/peakyblinders.jpg","./assets/img/mobile/peakyblinders_mobile.jpg","Peaky Blinder",["Peaky Blinders","4 Saisons","24.99$ / Saison"]),new e("./assets/img/desktop/avatar.jpg","./assets/img/mobile/avatar_mobile.jpg","Avatar, The Last Airbender",["Avatar","2 Saisons","24.99$ / Saison"])],t=document.querySelector("#series__container");n.forEach(s=>{t.appendChild(s.toHtml())})}const _=document.querySelectorAll("nav");_.forEach(e=>{e.addEventListener("click",()=>{y()})});const C=document.querySelector(".btn__nav");C.addEventListener("click",()=>{y()});const E=document.querySelector(".openCart");E.addEventListener("click",()=>{v()});const k=document.querySelectorAll(".cart");k.forEach(e=>{e.addEventListener("click",()=>{v()})});function y(){document.querySelector("nav").classList.toggle("hidden")}function v(){document.querySelector(".cart").classList.toggle("hidden")}const x=window.location.href,q="products.html";x.includes(q)&&$();function $(){const e=document.querySelector(".search__input"),o=document.querySelectorAll(".media");e.addEventListener("input",()=>{const r=e.value.toLowerCase();o.forEach(n=>{n.getAttribute("data-search").toLowerCase().includes(r)?n.classList.remove("hidden"):n.classList.add("hidden")})})}