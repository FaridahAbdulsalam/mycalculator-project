(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))g(t);new MutationObserver(t=>{for(const l of t)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&g(f)}).observe(document,{childList:!0,subtree:!0});function k(t){const l={};return t.integrity&&(l.integrity=t.integrity),t.referrerPolicy&&(l.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?l.credentials="include":t.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function g(t){if(t.ep)return;t.ep=!0;const l=k(t);fetch(t.href,l)}})();const m=document.querySelectorAll(".calc-buttons__btn"),p=document.querySelectorAll(".calc-buttons__operator"),b=document.querySelector(".calc-buttons__return"),h=document.querySelector(".calc-buttons__backspace"),L=document.querySelector(".calc-buttons__clear"),c=document.querySelector(".display__view-calculation"),u=document.querySelector(".display__view-result"),i=document.querySelector("#toggle-on"),a=document.querySelector("#toggle-off"),y=document.querySelector(".calculator__container");if(!c||!u||!y)throw new Error("Issue with viewing selector");if(!i||!a||!m||!p||!b||!h||!L)throw new Error("Issue with click selector");let r="",n="",o="",d=!1;const _=e=>{const s=e.target;d?(n+=s.innerHTML,c.innerHTML=r+o+n):c.innerHTML=r+=s.innerHTML},C=e=>{const s=e.target;d=!0,o=s.innerHTML,c.innerHTML+=s.innerHTML},E=()=>{n?(n="",c.textContent=r+o):o?(o="",c.textContent=r):r&&(r="",c.textContent="",d=!1)},S=()=>{let e;o==="+"?e=Number(r)+Number(n):o==="-"?e=Number(r)-Number(n):o==="/"?e=Number(r)/Number(n):o==="*"?e=Number(r)*Number(n):o==="%"?e=Number(r)%Number(n):e="Error",c.innerHTML=r+o+n,u.textContent=`= ${String(e)}`,r="",n="",o="",d=!1},q=()=>{r="",n="",o="",d=!1,c.textContent="",u.textContent=""},N=()=>{i&&(a.style.display="inline-block",i.style.display="none",y.style.backgroundImage="linear-gradient(grey, black)",c.style.color="white",u.style.color="white",document.body.style.backgroundColor="#585254")},v=()=>{a&&(a.style.display="none",i.style.display="inline-block",y.style.backgroundImage="",c.style.color="",u.style.color="",document.body.style.backgroundColor="")};m.forEach(e=>{e.addEventListener("click",_)});p.forEach(e=>{e.addEventListener("click",C)});b.addEventListener("click",S);h.addEventListener("click",E);L.addEventListener("click",q);i.addEventListener("click",N);a.addEventListener("click",v);
