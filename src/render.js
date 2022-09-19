import { LitElement, html } from 'lit-element';

export class Render extends LitElement {



    render() {
        //La funcion render me permite vizualizar mis elementos de 
        // mi componente para luego importalos al html en forma de una etiqueta 
        return html `
        <p>Hello from my template.</p>
        `;
    }

}
customElements.define('my-render', Render);