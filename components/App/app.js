import styles from './app.css' with { type: 'css' };
import "./hero/Hero.js";

const template = /*html*/`
    <hero-component></hero-component>
`;

class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = template;
    }
}

customElements.define('app-component', Root);
