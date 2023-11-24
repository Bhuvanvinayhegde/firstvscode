import { LightningElement,api,wire } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
//import NameField from '@salesforce/schema/Account.Name';
//import PhoneField from '@salesforce/schema/Account.Phone';
const Fields  = ['Account.Name','Account.Phone']

export default class WireExampleProperty extends LightningElement {
    @api recordId;
    

    @wire(getRecord,{recordId:'$recordId',fields:Fields}) 
    AccountRecord;

    get name(){
        // return this.AccountRecord.data ? getFieldValue(this.AccountRecord.data,NameField) : '';
        return this.AccountRecord.data.field.Name.value;
    }
    get phone(){
        //return this.AccountRecord.data ? getFieldValue(this.AccountRecord.data,PhoneField) : '';
        return this.AccountRecord.data.field.Name.value;
    }    
}