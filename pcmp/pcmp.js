import { LightningElement } from 'lwc';

export default class Pcmp extends LightningElement {
    constructor(){
        super();
        console.log('Parent Constructor is called');
    }

    connectedCallback(){
        console.log('parent connected call back called')
    }
    renderedCallback(){
        console.log("parent rendered call back is called")
    }
}