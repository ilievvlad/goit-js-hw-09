!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");e.disabled=!0;var a=null;t.addEventListener("click",(function(){a=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(a),e.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.f9567a25.js.map
