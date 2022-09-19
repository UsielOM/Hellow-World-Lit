import { LitElement, html, css } from 'lit-element';

export class HellowWorld extends LitElement {

    static get properties() {
        return {
            name: {}
        };
    }

    static get styles() {
        return css `
   *{ color: blue;}
    `;
    }
    constructor() {
        super();
        this.name = 'World';
    }

    render() {
        return html `
        <p>Hellow, ${this.name}!</p>
        `;
    }
}
customElements.define('hellow-world', HellowWorld);