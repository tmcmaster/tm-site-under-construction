import {html, css, LitElement} from 'lit-element';

customElements.define('tm-site-under-construction', class extends LitElement {
    // noinspection JSUnusedGlobalSymbols
    static get properties() {
        return {
            heading: {type: String},
            image: {type: String}
        }
    }

    constructor() {
        super();
        this.heading = 'Site Under Construction';
        this.image = "images/legohead-transparent.png";
    }

    static get styles() {
        // language=CSS
        return css`
            :host {
                display: flex;
                box-sizing: border-box;
                flex-direction: row;
                justify-content: center;
                position: absolute;
                left: 0;
                top: 0;
                background: #F5F5F5;
                padding: 2vmin;
                width: 100vw;
                height: 100vh;
            }
            div.outer {
                display: flex;
                flex-direction: column;
                justify-content: center;
                box-sizing: border-box;
                height: 100%;
            }
            div.inner {
                display: inline-block;
                box-sizing: border-box;
            }
            img {
                width: 50vmin;
            }
            h2 {
                margin-top: 0;
                font-size: 5vmin;
                color: gray;
            }
        `;
    }

    // noinspection JSUnusedGlobalSymbols
    render() {
        return html`
            <div class="outer">
                <div class="inner">
                    <h2>${this.heading}</h2>
                    <img src="${this.image}"/>
                </div>
            </div>
        `;
    }
});

