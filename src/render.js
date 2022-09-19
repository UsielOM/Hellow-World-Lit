import { LitElement, html } from 'lit-element';

export class Render extends LitElement {




    render() {
        return html `
        <p>Hello from my template.</p>
        `;
    }

}
customElements.define('render', Render);