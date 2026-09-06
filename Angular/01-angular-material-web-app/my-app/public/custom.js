// custom.js
class HelloWorldElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    // called when element added to the document
    connectedCallback() {
        this.shadowRoot.innerHTML = `<div>Hello, World!</div>`;
    }
}

// this allows any HTML file to include <hello-world> if the JS is loaded
customElements.define('hello-world', HelloWorldElement);
