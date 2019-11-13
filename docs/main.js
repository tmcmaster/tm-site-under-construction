import {html, render} from "./web_modules/lit-html.js";

render(html`
    <style>
        body {
          background-color: lightgray;
          padding: 0;
          margin: 0;
        } 
    </style>
    <tm-site-under-construction site="Site Name" message="Site Under Construction"></tm-site-under-construction>
`, document.querySelector('body'));