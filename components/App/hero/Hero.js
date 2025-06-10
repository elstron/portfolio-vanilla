import styles from './Hero.css' with { type: 'css' };
import '../profile/profile.js';

class Hero extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = /*html*/`
            <div class="background-image">
                <img src="https://picsum.photos/700/178" alt="Hero Image" class="hero-image" width="600" height="300">
            </div>
            <profile-component></profile-component>
        `;
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }
}
customElements.define('hero-component', Hero);