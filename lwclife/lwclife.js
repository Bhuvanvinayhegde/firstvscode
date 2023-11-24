import { LightningElement } from 'lwc';

export default class Lwclife extends LightningElement {
    constructor()
    {
        super();
        alert('constructor is called');
    }
    connectedCallback()
    {   
        alert('connectedCallback is Called');
    }
    renderedCallback()
    {
        alert('renderedCallback is Called')
    }
    disconnectedCallback()
    {
        alert('diconnectedCallback is called');
    }
    errorCallback()
    {
       alert('errorCallback is called');
    }
}
