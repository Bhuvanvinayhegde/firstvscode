import { LightningElement,api,wire } from 'lwc';
import getAccount from '@salesforce/apex/SearchAccount.getAccountDetails';
import { MyMethod } from './mycommonfun';

export default class Searchaccount extends LightningElement {
   


    accountName;
    accountPhone;
    billingStreet;
    billingState;
    billingCity;
    billingZipcode;

    
   

    handleOnChangeaccountName (event){
        this.accountName = event.target.value;
        //alert('Account name = '+this.accountName)
    }
    handleOnChangeaccountPhone (event){
        this.accountPhone = event.target.value;
       // alert(this.accountPhone)
    }
    handleOnChangebillingState (event){
        this.billingStreet = event.target.value;
       // alert(this.billingStreet)
    }
    handleOnChangebillingCity (event){
        this.billingState = event.target.value;
      //  alert(this.billingState)
    }
    handleOnChangebillingStreet (event){
        this.billingCity = event.target.value;
       // alert(this.billingCity)
    }
    handleOnChangebillingZipcode (event){
        this.billingZipcode = event.target.value;
       // alert(this.billingZipcode)
    }

    intiateSearch(event){
        MyMethod();
        
        alert('Account Name = '+this.accountName);
        
        getAccount({
            actname:this.accountName
        }).then(result =>{
            this.dispatchEvent(new CustomEvent('getaccountdetails',{detail:result}));
        }).catch(error =>{
            console.log(error);
        })
    }
    
}