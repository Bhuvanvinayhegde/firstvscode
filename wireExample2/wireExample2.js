import { LightningElement ,api,wire} from 'lwc';
import getAccount from '@salesforce/apex/SearchAccount.getAccountDetails'
export default class WireExample2 extends LightningElement {
    @api recordId;

    @wire(getAccount,{accId : '$recordId'})
    Accountlist;

   
}