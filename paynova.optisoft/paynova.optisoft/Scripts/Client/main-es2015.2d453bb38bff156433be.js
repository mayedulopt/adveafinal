(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,i){e.exports=i("zUnb")},zUnb:function(e,t,i){"use strict";i.r(t);var r=i("fXoL"),s=i("jhN1"),n=i("tk/3"),a=i("3Pt+"),o=i("tyNb");const c={headers:new n.c({"Content-Type":"application/json",withCredentials:"true",Authorization:"Basic "+btoa("18599062:67dbe3d5a25f95367089ae52861d1c3e")})};let b=(()=>{class e{constructor(e){this.http=e,this.apilink="https://portal.advea.se/api/orders/",this.paynovaapilink="https://portal.advea.se/proxy/proxy.ashx?https://api.paynova.com/"}generatepaynovadata(e){return this.http.post(this.apilink+"genrateorderforpaynova",e)}Login(e){return this.http.post(this.apilink+"login",e)}getcustomerdata(e){return this.http.get(this.paynovaapilink+"addresses/SE/"+e,c)}paynovacreateorder(e){return this.http.post(this.paynovaapilink+"orders/create",e,c)}authorizeorder(e,t){return this.http.post(this.paynovaapilink+"orders/"+e+"/authorizePayment",t,c)}finalizeorder(e,t,i,r){return this.http.post(this.paynovaapilink+"orders/"+e+"/transactions/"+t+"/finalize/"+i,r,c)}}return e.\u0275fac=function(t){return new(t||e)(r.Tb(n.a))},e.\u0275prov=r.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var d=i("b6Qw"),l=i("5eHb"),u=i("ofXK");function m(e,t){if(1&e){const e=r.Qb();r.Pb(0,"tr"),r.Pb(1,"td",31),r.Xb("click",(function(){r.cc(e);const i=t.index;return r.Zb().deleteRow(i)})),r.Lb(2,"i",32),r.Ob(),r.Pb(3,"td"),r.Pb(4,"input",33),r.Xb("ngModelChange",(function(i){r.cc(e);const s=t.index;return r.Zb().dynamicArray[s].name=i})),r.Ob(),r.Ob(),r.Pb(5,"td"),r.Pb(6,"input",34),r.Xb("ngModelChange",(function(i){r.cc(e);const s=t.index;return r.Zb().dynamicArray[s].unitAmountExcludingTax=i}))("change",(function(i){r.cc(e);const s=t.index;return r.Zb().modelChanged(i.target.value,s)})),r.Ob(),r.Ob(),r.Pb(7,"td"),r.Pb(8,"input",35),r.Xb("ngModelChange",(function(i){r.cc(e);const s=t.index;return r.Zb().dynamicArray[s].taxPercent=i})),r.Ob(),r.Ob(),r.Ob()}if(2&e){const e=t.index,i=r.Zb();r.zb(4),r.ac("ngModel",i.dynamicArray[e].name),r.zb(2),r.ac("ngModel",i.dynamicArray[e].unitAmountExcludingTax),r.zb(2),r.ac("ngModel",i.dynamicArray[e].taxPercent)}}function h(e,t){if(1&e&&(r.Pb(0,"div",36),r.Pb(1,"div",37),r.ic(2," Personnummer is required "),r.Ob(),r.Pb(3,"div",37),r.ic(4," Min Length is 12 "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.userNameL.errors.required),r.zb(2),r.ac("hidden",!e.userNameL.errors.minlength)}}function p(e,t){if(1&e&&(r.Pb(0,"div",36),r.Pb(1,"div",37),r.ic(2," E-postadress is required "),r.Ob(),r.Pb(3,"div",37),r.ic(4," Invalid E-postadress "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.email.errors.required),r.zb(2),r.ac("hidden",!e.email.errors.email)}}function g(e,t){if(1&e&&(r.Pb(0,"div",36),r.Pb(1,"div",37),r.ic(2," Telefonnummer is required "),r.Ob(),r.Pb(3,"div",37),r.ic(4," Min Length is 13 "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.phone.errors.required),r.zb(2),r.ac("hidden",!e.phone.errors.minlength)}}function f(e,t){if(1&e&&(r.Pb(0,"div",36),r.Pb(1,"div",37),r.ic(2," Best\xe4llningsbeskrivning is required "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.userName.errors.required)}}function v(e,t){if(1&e){const e=r.Qb();r.Pb(0,"div",25),r.Pb(1,"button",38),r.Xb("click",(function(){return r.cc(e),r.Zb().onFinal()})),r.ic(2,"Finalize Order"),r.Ob(),r.Ob()}}function P(e,t){if(1&e&&(r.Pb(0,"div",39),r.Pb(1,"div"),r.ic(2),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(2),r.jc(" ",e.responsemsg.Message," ")}}function O(e,t){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"address"),r.Pb(2,"strong"),r.ic(3,"Customer:"),r.Ob(),r.ic(4),r.Lb(5,"br"),r.ic(6),r.Lb(7,"br"),r.ic(8),r.Lb(9,"br"),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(4),r.kc(" ",null==e.customerinfo||null==e.customerinfo.name?null:e.customerinfo.name.firstName," ",null==e.customerinfo||null==e.customerinfo.name?null:e.customerinfo.name.lastName,""),r.zb(2),r.kc(" ",null==e.customerinfo||null==e.customerinfo.Address?null:e.customerinfo.Address.street1," ",null==e.customerinfo||null==e.customerinfo.Address?null:e.customerinfo.Address.street2,""),r.zb(2),r.lc(" ",null==e.customerinfo||null==e.customerinfo.Address?null:e.customerinfo.Address.city,", ",null==e.customerinfo||null==e.customerinfo.Address?null:e.customerinfo.Address.countryCode," ",null==e.customerinfo||null==e.customerinfo.Address?null:e.customerinfo.Address.postalCode,"")}}function y(e,t){if(1&e&&(r.Pb(0,"div"),r.Pb(1,"address"),r.Pb(2,"strong"),r.ic(3,"Order Number:"),r.Ob(),r.ic(4),r.Lb(5,"br"),r.Pb(6,"strong"),r.ic(7,"Total Amount:"),r.Ob(),r.ic(8),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(4),r.jc(" ",e.orderid,""),r.zb(4),r.jc(" ",e.ordertotal," ")}}function L(e,t){if(1&e&&(r.Pb(0,"address"),r.Pb(1,"strong"),r.ic(2,"Trasaction Number:"),r.Ob(),r.ic(3),r.Lb(4,"br"),r.Pb(5,"strong"),r.ic(6,"Risk Statement:"),r.Ob(),r.ic(7),r.Ob()),2&e){const e=r.Zb(2);r.zb(3),r.jc(" ",e.transactionid,""),r.zb(4),r.jc(" ",e.riskstatement," ")}}function w(e,t){if(1&e&&(r.Pb(0,"address"),r.Pb(1,"strong"),r.ic(2,"Authorization Result"),r.Ob(),r.ic(3),r.Ob()),2&e){const e=r.Zb(2);r.zb(3),r.jc(" ",e.transactionerror," ")}}function z(e,t){if(1&e&&(r.Pb(0,"div"),r.hc(1,L,8,2,"address",30),r.hc(2,w,4,1,"address",30),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("ngIf",e.isTdata),r.zb(1),r.ac("ngIf",!e.isTdata)}}function N(e,t){if(1&e&&(r.Pb(0,"address"),r.Pb(1,"strong"),r.ic(2,"Final Status:"),r.Ob(),r.ic(3),r.Lb(4,"br"),r.Ob()),2&e){const e=r.Zb();r.zb(3),r.jc(" ",e.response,"")}}function A(e,t){if(1&e&&(r.Pb(0,"div",17),r.Pb(1,"div"),r.ic(2),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(2),r.jc(" ",e.responsemsg.Message," ")}}function C(e,t){if(1&e&&(r.Pb(0,"div",17),r.Pb(1,"div",18),r.ic(2," Anv\xe4ndarnamn is required "),r.Ob(),r.Pb(3,"div",18),r.ic(4," Min Length is 5 "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.userName.errors.required),r.zb(2),r.ac("hidden",!e.userName.errors.minlength)}}function I(e,t){if(1&e&&(r.Pb(0,"div",17),r.Pb(1,"div",18),r.ic(2," L\xf6senord is required "),r.Ob(),r.Ob()),2&e){const e=r.Zb();r.zb(1),r.ac("hidden",!e.password.errors.required)}}const k=[{path:"home",component:(()=>{class e{constructor(e,t,i,r,s){this.formBuilder=e,this.apiservice=t,this.cookieservice=i,this.router=r,this.toastr=s,this.responsemsg={Success:!1,Message:"Please fill the required field and Items should not be empty!"},this.submitted=!1,this.isFail=!1,this.isCdata=!1,this.isOdata=!1,this.isTdata=!1,this.isfdata=!1,this.submittedL=!1,this.serverfail=!1,this.dynamicArray=[],this.newDynamic={},this.adveuser=null===this.cookieservice.get("User")?"":this.cookieservice.get("User"),this.authorizedorder={AuthorizationType:"InvoicePayment",PaymentMethodId:311,PaymentMethodProductId:"DirectInvoice",PaymentChannelId:1},this.orderlinetotal=0,this.totalmoms=0,this.grandtotal=0,this.interfacedata={interfaceId:5,layoutName:"Paynova_Responsive_2",customerLanguageCode:"SWE",urlRedirectSuccess:"https://paynova.optisoftab.se",urlRedirectCancel:"https://paynova.optisoftab.se",urlRedirectPending:"https://paynova.optisoftab.se"},this.initializationdata={totalAmount:this.ordertotal,paymentChannelId:1,paymentMethods:[{id:1}],interfaceOptions:this.interfacedata},this.CustomerForm=this.formBuilder.group({UserName:new a.c("",[a.l.required,a.l.minLength(12)]),OrderDescription:new a.c("",[a.l.required]),Phone:new a.c("",[a.l.required,a.l.minLength(13)]),Email:new a.c("",[a.l.email,a.l.required])})}modelChanged(e,t){0==t&&(this.orderlinetotal=0),this.orderlinetotal=Number(this.orderlinetotal)+Number(e),this.totalmoms=Number(.25*this.orderlinetotal),this.grandtotal=Number(this.orderlinetotal+this.totalmoms)}get userName(){return this.CustomerForm.get("OrderDescription")}get phone(){return this.CustomerForm.get("Phone")}get userNameL(){return this.CustomerForm.get("UserName")}get email(){return this.CustomerForm.get("Email")}addRow(e){return this.newDynamic={articleNumber:"",name:"",qty:1,unitAmountExcludingTax:0,taxPercent:25},this.dynamicArray.push(this.newDynamic),this.toastr.success("New row added successfully","New Row"),console.log(this.dynamicArray),!0}deleteRow(e){return 1==this.dynamicArray.length?(this.toastr.error("Can't delete the row when there is only one row","Warning"),!1):(this.orderlinetotal=Number(this.orderlinetotal)-Number(this.dynamicArray[e].unitAmountExcludingTax),this.totalmoms=Number(.25*this.orderlinetotal),this.grandtotal=Number(this.orderlinetotal+this.totalmoms),this.dynamicArray.splice(e,1),this.toastr.warning("Row deleted successfully","Delete row"),!0)}ngOnInit(){""!=this.adveuser?(this.newDynamic={articleNumber:"",name:"",qty:1,unitAmountExcludingTax:0,taxPercent:25},this.dynamicArray.push(this.newDynamic)):this.router.navigate(["/login"])}onSubmit(){this.CustomerForm.valid?(this.submitted=!0,this.apiservice.getcustomerdata(this.CustomerForm.get("UserName").value).subscribe(e=>{this.isCdata=e.status.isSuccess,this.customerinfo=e,this.customerinfo.name=e.addresses[0].name,this.customerinfo.Address=e.addresses[0].address,this.customerinfo.emailAddress=this.CustomerForm.get("Email").value,this.customerinfo.mobileTelephone=this.CustomerForm.get("Phone").value,this.clientData=this.CustomerForm.value,this.clientData.Customer=this.customerinfo,this.clientData.Address=this.customerinfo.Address,this.clientData.OrderLines=this.dynamicArray,this.apiservice.generatepaynovadata(this.clientData).subscribe(e=>{this.ordertotal=e.totalAmount,console.log(e),this.apiservice.paynovacreateorder(e).subscribe(e=>{e.status.isSuccess?(this.toastr.success(e.orderId,"New order has been created successfully!"),this.isOdata=e.status.isSuccess,this.orderid=e.orderId,this.authorizedorder.TotalAmount=this.ordertotal,console.log(this.authorizedorder),this.apiservice.authorizeorder(e.orderId,this.authorizedorder).subscribe(e=>{e.status.isSuccess?(this.isTdata=!0,this.transactionid=e.transactionId,this.riskstatement=e.riskAssessment.result,this.toastr.success(e.status.statusMessage,"Authorized Message")):(this.isTdata=!1,this.transactionerror=e.status.statusMessage,this.toastr.error(e.status.statusMessage,"Authorization Failed!"))})):(this.toastr.success(e.status.statusMessage,"Order Creation Failed!"),this.responsemsg.Message="Please make sure order line data is not empty!")}),this.isFail=!1})})):this.isFail=!0}onFinal(){this.isTdata&&(this.finalizeorder={transactionId:this.transactionid},this.apiservice.finalizeorder(this.orderid,this.transactionid,this.ordertotal,this.finalizeorder).subscribe(e=>{this.response=e.status.statusMessage,this.isfdata=!0,e.status.isSuccess?this.toastr.success(this.response,"Finalize Successfull!"):this.toastr.error(this.response,"Finalize Failed!")}))}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(a.b),r.Kb(b),r.Kb(d.a),r.Kb(o.a),r.Kb(l.b))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-home"]],decls:101,vars:15,consts:[[1,"navbar","navbar-inverse","navbar-fixed-top"],[1,"container"],[1,"navbar-header"],["type","button","data-toggle","collapse","data-target",".navbar-collapse",1,"navbar-toggle"],[1,"icon-bar"],["target","_blank","href","https://www.advea.se/",1,"navbar-brand"],["src","/assets/images/ADVEA-VIT-LOGGA.png","width","10%"],[1,"container","body-content"],[1,"jumbotron"],[1,"lead"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped","table-bordered"],[4,"ngFor","ngForOf"],["colspan","3",3,"click"],[1,"fa","fa-plus"],[1,"col-md-8"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"form-group"],["type","text","id","userNameL","name","userNameL","placeholder","person number","formControlName","UserName","value","",1,"form-control"],["class","alert alert-warning",4,"ngIf"],["type","email","id","email","name","email","placeholder","Email Address","formControlName","Email","value","",1,"form-control","form-control-light"],["type","text","id","phone","name","phone","placeholder","+460730000000","formControlName","Phone","value","",1,"form-control","form-control-light"],["type","text","id","userName","name","userName","formControlName","OrderDescription","placeholder","Best\xe4llningsbeskrivning",1,"form-control","form-control-light"],[1,"login_submit"],["type","submit",1,"btn","btn-info","btn-lg"],["class","login_submit",4,"ngIf"],[1,"col-md-4"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[3,"click"],[1,"fa","fa-trash"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","number",1,"form-control",3,"ngModel","ngModelChange","change"],["type","number","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"alert","alert-warning"],[3,"hidden"],["type","submit",1,"btn","btn-primary","btn-lg",3,"click"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"button",3),r.Lb(4,"span",4),r.Lb(5,"span",4),r.Lb(6,"span",4),r.Ob(),r.Pb(7,"a",5),r.Lb(8,"img",6),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(9,"div",7),r.Pb(10,"div",8),r.Pb(11,"h1"),r.ic(12,"Payment Portal"),r.Ob(),r.Pb(13,"p",9),r.ic(14,"Smooth Credit payment by Invoice."),r.Ob(),r.Ob(),r.Pb(15,"div",10),r.Pb(16,"div",11),r.Pb(17,"h2"),r.ic(18,"Best\xe4llnings"),r.Ob(),r.Pb(19,"table",12),r.Pb(20,"thead"),r.Pb(21,"tr"),r.Pb(22,"th"),r.ic(23,"Handling"),r.Ob(),r.Pb(24,"th"),r.ic(25,"Namn"),r.Ob(),r.Pb(26,"th"),r.ic(27,"Enhetsv\xe4rde(Ex MoM)"),r.Ob(),r.Pb(28,"th"),r.ic(29,"MoM(%)"),r.Ob(),r.Ob(),r.Ob(),r.Pb(30,"tbody"),r.hc(31,m,9,3,"tr",13),r.Ob(),r.Pb(32,"tfoot"),r.Pb(33,"tr"),r.Pb(34,"td",14),r.Xb("click",(function(){return t.addRow(1)})),r.Lb(35,"i",15),r.Ob(),r.Pb(36,"td"),r.Pb(37,"strong"),r.ic(38,"Ex mom :"),r.Ob(),r.ic(39),r.Lb(40,"br"),r.Pb(41,"strong"),r.ic(42,"MoMs :"),r.Ob(),r.ic(43),r.Lb(44,"br"),r.Pb(45,"strong"),r.ic(46,"Total :"),r.Ob(),r.ic(47),r.Lb(48,"br"),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(49,"div",10),r.Pb(50,"div",16),r.Pb(51,"form",17),r.Xb("ngSubmit",(function(){return t.onSubmit()})),r.Pb(52,"div",10),r.Pb(53,"div",18),r.Pb(54,"div",19),r.Pb(55,"label"),r.ic(56,"Personnummer "),r.Pb(57,"span"),r.ic(58,"*"),r.Ob(),r.Ob(),r.Lb(59,"input",20),r.hc(60,h,5,2,"div",21),r.Ob(),r.Pb(61,"div",19),r.Pb(62,"label"),r.ic(63,"E-postadress "),r.Pb(64,"span"),r.ic(65,"*"),r.Ob(),r.Ob(),r.Lb(66,"input",22),r.hc(67,p,5,2,"div",21),r.Ob(),r.Ob(),r.Pb(68,"div",18),r.Pb(69,"div",19),r.Pb(70,"label"),r.ic(71,"Telefonnummer "),r.Pb(72,"span"),r.ic(73,"*"),r.Ob(),r.Ob(),r.Lb(74,"input",23),r.hc(75,g,5,2,"div",21),r.Ob(),r.Pb(76,"div",19),r.Pb(77,"label"),r.ic(78,"Best\xe4llningsbeskrivning "),r.Pb(79,"span"),r.ic(80,"*"),r.Ob(),r.Ob(),r.Lb(81,"input",24),r.hc(82,f,3,1,"div",21),r.Ob(),r.Ob(),r.Ob(),r.Pb(83,"div",25),r.Pb(84,"button",26),r.ic(85,"Place Order"),r.Ob(),r.Ob(),r.Ob(),r.Lb(86,"br"),r.hc(87,v,3,0,"div",27),r.Ob(),r.Pb(88,"div",28),r.Pb(89,"h2"),r.ic(90,"H\xe4mtad information"),r.Ob(),r.hc(91,P,3,1,"div",29),r.hc(92,O,10,7,"div",30),r.hc(93,y,9,2,"div",30),r.hc(94,z,3,2,"div",30),r.Pb(95,"div"),r.hc(96,N,5,1,"address",30),r.Ob(),r.Ob(),r.Ob(),r.Lb(97,"hr"),r.Pb(98,"footer"),r.Pb(99,"p"),r.ic(100,"\xa9 2021 - ADVEA AB"),r.Ob(),r.Ob(),r.Ob()),2&e&&(r.zb(31),r.ac("ngForOf",t.dynamicArray),r.zb(8),r.jc(" ",t.orderlinetotal," kr"),r.zb(4),r.jc(" ",t.totalmoms," kr"),r.zb(4),r.jc(" ",t.grandtotal," kr"),r.zb(4),r.ac("formGroup",t.CustomerForm),r.zb(9),r.ac("ngIf",!(null!=t.userNameL&&t.userNameL.valid)&&((null==t.userNameL?null:t.userNameL.dirty)||(null==t.userNameL?null:t.userNameL.touched))),r.zb(7),r.ac("ngIf",!(null!=t.email&&t.email.valid)&&((null==t.email?null:t.email.dirty)||(null==t.email?null:t.email.touched))),r.zb(8),r.ac("ngIf",!(null!=t.phone&&t.phone.valid)&&((null==t.phone?null:t.phone.dirty)||(null==t.phone?null:t.phone.touched))),r.zb(7),r.ac("ngIf",!(null!=t.userName&&t.userName.valid)&&((null==t.userName?null:t.userName.dirty)||(null==t.userName?null:t.userName.touched))),r.zb(5),r.ac("ngIf",null!=t.transactionid),r.zb(4),r.ac("ngIf",t.isFail),r.zb(1),r.ac("ngIf",t.isCdata),r.zb(1),r.ac("ngIf",t.isOdata),r.zb(1),r.ac("ngIf",null!=t.orderid),r.zb(2),r.ac("ngIf",t.isfdata))},directives:[u.h,a.m,a.h,a.e,a.a,a.g,a.d,u.i,a.i,a.j],styles:[""]}),e})()},{path:"login",component:(()=>{class e{constructor(e,t,i,r){this.formBuilder=e,this.apiservice=t,this.cookieservice=i,this.router=r,this.submitted=!1,this.isFail=!1,this.responsemsg={Success:!1,Message:"Please fill the required field!"},this.LoginForm=this.formBuilder.group({UserName:new a.c("",[a.l.required,a.l.minLength(5)]),Password:new a.c("",[a.l.required])})}get userName(){return this.LoginForm.get("UserName")}get password(){return this.LoginForm.get("Password")}ngOnInit(){}onLogin(){this.LoginForm.valid?(this.submitted=!0,this.clientData=this.LoginForm.value,this.apiservice.Login(this.clientData).subscribe(e=>{if(this.responsemsg=e,this.responsemsg.Success){const e=new Date;e.setDate(e.getDate()+7),this.cookieservice.set("Id",this.responsemsg.Id.toString(),e),this.cookieservice.set("User",this.responsemsg.Complementary,e),this.isFail=!1,this.router.navigate(["/home"])}else this.isFail=!0})):this.isFail=!0}}return e.\u0275fac=function(t){return new(t||e)(r.Kb(a.b),r.Kb(b),r.Kb(d.a),r.Kb(o.a))},e.\u0275cmp=r.Eb({type:e,selectors:[["app-login"]],decls:36,vars:4,consts:[[1,"navbar","navbar-inverse","navbar-fixed-top"],[1,"container"],[1,"navbar-header"],["type","button","data-toggle","collapse","data-target",".navbar-collapse",1,"navbar-toggle"],[1,"icon-bar"],["target","_blank","href","https://www.advea.se/",1,"navbar-brand"],["src","/assets/images/ADVEA-VIT-LOGGA.png","width","10%"],[1,"container","body-content"],[1,"jumbotron"],[1,"lead"],[1,"login-box"],["class","alert alert-danger",4,"ngIf"],["novalidate","",3,"formGroup","ngSubmit"],[1,"user-box"],["type","text","id","userName","name","userName","formControlName","UserName","value",""],["type","password","id","password","name","password","formControlName","Password","value","",1,"form-control"],["type","submit",3,"click"],[1,"alert","alert-danger"],[3,"hidden"]],template:function(e,t){1&e&&(r.Pb(0,"div",0),r.Pb(1,"div",1),r.Pb(2,"div",2),r.Pb(3,"button",3),r.Lb(4,"span",4),r.Lb(5,"span",4),r.Lb(6,"span",4),r.Ob(),r.Pb(7,"a",5),r.Lb(8,"img",6),r.Ob(),r.Ob(),r.Ob(),r.Ob(),r.Pb(9,"div",7),r.Pb(10,"div",8),r.Pb(11,"h1"),r.ic(12,"Payment Portal"),r.Ob(),r.Pb(13,"p",9),r.ic(14,"Smooth Credit payment by Invoice."),r.Ob(),r.Ob(),r.Pb(15,"div",10),r.Pb(16,"h2"),r.ic(17,"Login"),r.Ob(),r.hc(18,A,3,1,"div",11),r.Pb(19,"form",12),r.Xb("ngSubmit",(function(){return t.onLogin()})),r.Pb(20,"div",13),r.Lb(21,"input",14),r.Pb(22,"label"),r.ic(23,"Anv\xe4ndarnamn"),r.Ob(),r.hc(24,C,5,2,"div",11),r.Ob(),r.Pb(25,"div",13),r.Lb(26,"input",15),r.Pb(27,"label"),r.ic(28,"L\xf6senord"),r.Ob(),r.hc(29,I,3,1,"div",11),r.Ob(),r.Pb(30,"a",16),r.Xb("click",(function(){return t.onLogin()})),r.Lb(31,"span"),r.Lb(32,"span"),r.Lb(33,"span"),r.Lb(34,"span"),r.ic(35," Logga in "),r.Ob(),r.Ob(),r.Ob(),r.Ob()),2&e&&(r.zb(18),r.ac("ngIf",t.isFail),r.zb(1),r.ac("formGroup",t.LoginForm),r.zb(5),r.ac("ngIf",!(null!=t.userName&&t.userName.valid)&&((null==t.userName?null:t.userName.dirty)||(null==t.userName?null:t.userName.touched))),r.zb(5),r.ac("ngIf",!(null!=t.password&&t.password.valid)&&((null==t.password?null:t.password.dirty)||(null==t.password?null:t.password.touched))))},directives:[u.i,a.m,a.h,a.e,a.a,a.g,a.d],styles:[""]}),e})()},{path:"",redirectTo:"/home",pathMatch:"full"}];let F=(()=>{class e{}return e.\u0275mod=r.Ib({type:e}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},imports:[[o.b.forRoot(k)],o.b]}),e})(),M=(()=>{class e{constructor(){this.title="Client"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r.Eb({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&r.Lb(0,"router-outlet")},directives:[o.c],styles:[""]}),e})();var x=i("R1ws");let E=(()=>{class e{}return e.\u0275mod=r.Ib({type:e,bootstrap:[M]}),e.\u0275inj=r.Hb({factory:function(t){return new(t||e)},providers:[d.a],imports:[[s.a,a.f,n.b,a.k,l.a.forRoot(),F,x.a]]}),e})();Object(r.R)(),s.c().bootstrapModule(E).catch(e=>console.error(e))},zn8P:function(e,t){function i(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}i.keys=function(){return[]},i.resolve=i,e.exports=i,i.id="zn8P"}},[[0,0,5]]]);