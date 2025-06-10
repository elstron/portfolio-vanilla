import styles from './profile.css' with { type: 'css' };
import { globalResetStyles } from '../../resetCss.js';
const scriptElement = document.currentScript;
if (scriptElement) {
    console.log('Current script URL:', scriptElement.src);
}
class Profile extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = /*html*/`
            <div class="profile-container">
                <div class="profile-image">
                    <img src="https://picsum.photos/200/200" alt="Profile Image" class="profile-img" width="200" height="200">
                </div>
                <div class="profile-info">
                    <h2 class="profile-name">John Doe</h2>
                    <p class="profile-bio">Web Developer, Tech Enthusiast, and Coffee Lover.</p>
                </div>
            </div>
        `;
        this.shadowRoot.adoptedStyleSheets = [globalResetStyles];
        this.shadowRoot.adoptedStyleSheets.push(styles);
    }
}
customElements.define('profile-component', Profile);