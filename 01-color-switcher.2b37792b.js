const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.btnStart.addEventListener("click",(()=>{e.startChangeColor()})),t.btnStop.addEventListener("click",(()=>{e.stopChangeColor()}));const e={startChangeColor(){this.intercalId=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.btnStart.disabled=!0,t.btnStop.disabled=!1},stopChangeColor(){clearInterval(this.intercalId),t.btnStart.disabled=!1,t.btnStop.disabled=!0}};
//# sourceMappingURL=01-color-switcher.2b37792b.js.map
