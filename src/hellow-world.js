import { LitElement, html } from 'lit-element';

export class HellowWorld extends LitElement {

    static get properties() {
        return {
            name: {}
        };
    }

    static styles = css `
    :host {
        color: blue;
    }
    `;
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