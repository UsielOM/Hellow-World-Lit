import { LitElement, html, css } from 'lit-element';

export class HellowWorld extends LitElement {

    static get properties() {
        return {
            name: {}
        };
    }

    static get styles() {
        return css `
   .mycolor{
    color: blue;
   }
    `;
    }
    constructor() {
        super();
        this.name = 'World';
    }

    render() {
        return html `
        <p class="mycolor">Hellow, ${this.name}!</p>
        `;
    }
}
customElements.define('hellow-world', HellowWorld);