import styles from "./aside.css" with { type: "css" };
import { menu } from "../../../data/menu.js";

const template = /*html*/`
    <header class="header">
        <span class="logo">Logo</span>
    </header>
    <nav>
        <ul>
            ${menu.map(item => /*html*/`
                <li>
                    <a href="#${item.path}">
                        <span class="name">${item.name}</span>
                    </a>
                </li>
            `).join('')}
        </ul>
    </nav>
`;

class AsideComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.adoptedStyleSheets.push(styles);
        this.shadowRoot.innerHTML = template;
    }
}

customElements.define('aside-component', AsideComponent);
