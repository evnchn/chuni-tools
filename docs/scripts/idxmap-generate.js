(()=>{"use strict";const e="https://chunithm-net-eng.com";var t,r,n;(r=t||(t={})).basic="BAS",r.advanced="ADV",r.expert="EXP",r.master="MAS",r.ultima="ULT",Object.values(t),function(e){e["P & A"]="0",e.niconico="2",e["東方Project"]="3",e.ORIGINAL="5",e.VARIETY="6",e["イロドリ"]="7",e["ゲキマイ"]="9"}(n||(n={})),Object.keys(n);(async function(r=t.master){const n=new FormData;n.append("genre","99"),n.append("token",function(e){const t=document.cookie.split(";").map((e=>decodeURIComponent(e.trim()))).map((e=>e.split("="))).find((e=>"_t"===e[0]));return t?t[1]:""}());const o={[t.ultima]:"sendUltima",[t.master]:"sendMaster",[t.expert]:"sendExpert",[t.advanced]:"sendAdvanced",[t.basic]:"sendBasic"}[r],c=await async function(t,r){const n=await fetch(e+t,{headers:{"Cache-Control":"no-cache"},method:r?"POST":"GET",body:r});if(503===n.status||405===n.status)throw new Error("Service temporarily unavailable");if(-1!=n.url.indexOf("/error"))throw new Error("Request failed: rejected by server");return(new DOMParser).parseFromString(await n.text(),"text/html")}("/mobile/record/musicGenre/"+o,n);return Array.from(c.querySelectorAll(".box01.w420")[1].querySelectorAll("form")).map((e=>{const t=e.querySelector(".play_musicdata_icon"),n=e.querySelector(".text_b")?.innerHTML;return{title:e.querySelector(".music_title")?.innerHTML,score:n?(o=n,Number([...o].filter((e=>","!==e)).join(""))):-1,difficulty:r,clear:t?.querySelector('img[src*="alljustice"]')?"AJ":t?.querySelector('img[src*="fullcombo"]')?"FC":"",idx:e.querySelector('input[name="idx"]').value};var o})).filter((e=>e.title&&e.score))})(t.master).then((e=>{const t={};for(const r of e)t[r.idx]=r.title;console.log(JSON.stringify(t))}))})();