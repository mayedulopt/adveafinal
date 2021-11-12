import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators,FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../api.service';
import { customerinfo } from '../customerinfo';
import { lineitems } from '../newDynamic';
import { ResponseMsg } from '../responsemsg';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  CustomerForm: FormGroup;
  responsemsg : ResponseMsg= <ResponseMsg> { Success: false, Message: "Please fill the required field and Items should not be empty!" };
  submitted = false;
  isFail = false;
  isCdata = false;
  isOdata = false;
  isTdata = false;
  isfdata = false;
  submittedL = false;
  serverfail = false;
  dynamicArray : lineitems []=[];
  customerinfo:any;
  adveuser:string;
  ordertotal:number=0;
  grandtotal:number;
  totalmoms:number;
  orderlinetotal:number;
  authorizedorder:any;
  initializationdata:any;
  interfacedata:any;
  clientData:any;
  orderid:any;
  transactionid:any;
  newDynamic:lineitems=<lineitems>{};
  riskstatement:any;
  response:any;
  transactionerror:any;
  constructor(private apiservice: ApiService,
    private toastr: ToastrService,
    private cookieservice :CookieService,
   private router : Router,
   private formBuilder:FormBuilder ) { 
    this.adveuser = this.cookieservice.get('User') === null ? "hi" : this.cookieservice.get('User');
    
   
    this.authorizedorder = {
        AuthorizationType: "InvoicePayment",
        PaymentMethodId: 311,
        PaymentMethodProductId: "DirectInvoice",
        PaymentChannelId: 1
    };
    this.orderlinetotal = 0;
    this.totalmoms = 0;
    this.grandtotal = 0;
    this.interfacedata = {
        interfaceId: 5,
        layoutName: "Paynova_Responsive_2",
        customerLanguageCode: "SWE",
        urlRedirectSuccess: "https://paynova.optisoftab.se",
        urlRedirectCancel: "https://paynova.optisoftab.se",
        urlRedirectPending: "https://paynova.optisoftab.se"
    };
    this.initializationdata = {
        totalAmount: this.ordertotal,
        paymentChannelId: 1,
        paymentMethods: [{ id: 1 }],
        interfaceOptions: this.interfacedata
    };
    this.CustomerForm = this.formBuilder.group({
        UserName: new FormControl('', [Validators.required, Validators.minLength(12)]),
        OrderDescription: new FormControl('', [Validators.required]),
        Phone: new FormControl('', [Validators.required, Validators.minLength(13)]),
        Email: new FormControl('', [Validators.email, Validators.required])
    });
   }
   modelChanged(newObj:any, index:number) {
     
    if (index == 0)
    this.orderlinetotal = 0;
    this.orderlinetotal = Number(this.orderlinetotal) + Number(newObj.target.value);
    this.totalmoms = Number(this.orderlinetotal * 0.25);
    this.grandtotal = Number(this.orderlinetotal + this.totalmoms);
}
get desc() {
    return this.CustomerForm.get('OrderDescription');
}


get phone() {
    return this.CustomerForm.get('Phone');
}
get userNameL() {
    return this.CustomerForm.get('UserName');
}
get email() {
    return this.CustomerForm.get('Email');
}
addRow(index:number) {
    this.newDynamic = { articleNumber: "", name: "", qty: 1, unitAmountExcludingTax: 0, taxPercent: 25 };
    this.dynamicArray.push(this.newDynamic);
    this.toastr.success('New row added successfully', 'New Row');
    console.log(this.dynamicArray);
    return true;
}
deleteRow(index:number) {
    if (this.dynamicArray.length == 1) {
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');
        return false;
    }
    else {
        this.orderlinetotal = Number(this.orderlinetotal) - Number(this.dynamicArray[index].unitAmountExcludingTax);
        this.totalmoms = Number(this.orderlinetotal * 0.25);
        this.grandtotal = Number(this.orderlinetotal + this.totalmoms);
        this.dynamicArray.splice(index, 1);
        this.toastr.warning('Row deleted successfully', 'Delete row');
        return true;
    }
}
  ngOnInit(): void {
    if (this.adveuser != "") {
      this.newDynamic = { articleNumber: "", name: "", qty: 1, unitAmountExcludingTax: 0, taxPercent: 25 };
      this.dynamicArray.push(this.newDynamic);
  }
  else
      this.router.navigate(['/login']);
   }
  onSubmit() {
    // Process checkout data here
    if (this.CustomerForm.valid) {
        this.submitted = true;
        this.apiservice.getcustomerdata(this.CustomerForm.get('UserName')?.value).subscribe(result => {
            
            this.isCdata = result.status.isSuccess;
            this.customerinfo = result;
            this.customerinfo.name = result.addresses[0].name;
            this.customerinfo.Address = result.addresses[0].address;
            this.customerinfo.emailAddress = this.CustomerForm.get('Email')?.value;
            this.customerinfo.mobileTelephone = this.CustomerForm.get('Phone')?.value;
            this.clientData = this.CustomerForm.value;
            this.clientData.Customer = this.customerinfo;
            this.clientData.Address = this.customerinfo.Address;
            this.clientData.OrderLines = this.dynamicArray;
            
            this.apiservice.generatepaynovadata(this.clientData).subscribe(results => {
                this.ordertotal = results.totalAmount;
                
                this.apiservice.paynovacreateorder(results).subscribe(res => {
                    if (res.status.isSuccess) {
                        this.toastr.success(res.orderId, 'New order has been created successfully!');
                        this.isOdata = res.status.isSuccess;
                        this.orderid = res.orderId;
                        this.authorizedorder.TotalAmount = this.ordertotal;
                        console.log(this.authorizedorder);
                        this.apiservice.authorizeorder(res.orderId, this.authorizedorder).subscribe(auth => {
                            if (auth.status.isSuccess) {
                                this.isTdata = true;
                                this.transactionid = auth.transactionId;
                                this.riskstatement = auth.riskAssessment.result;
                                this.toastr.success(auth.status.statusMessage, 'Authorized Message');
                            }
                            else {
                                this.isTdata = false;
                                this.transactionerror = auth.status.statusMessage;
                                this.toastr.error(auth.status.statusMessage, 'Authorization Failed!');
                            }
                        });
                        this.isFail = false;
                    }
                    else {
                        this.toastr.error(res.status.statusMessage, 'Order Creation Failed!');
                        this.responsemsg.Message = "Please make sure order line data is not empty!";
                        this.isFail = true;
                    }
                });
            });
        });
    }
    else {
        this.isFail = true;
    }
}
onFinal() {
    if (this.isTdata) {
        this.apiservice.finalizeorder(this.orderid, this.transactionid, this.ordertotal).subscribe(final => {
            this.response = final.status.statusMessage;
            this.isfdata = true;
            if (final.status.isSuccess) {
                this.toastr.success(this.response, 'Finalize Successfull!');
            }
            else {
                this.toastr.error(this.response, 'Finalize Failed!');
            }
        });
    }
}
}
