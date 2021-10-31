function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,r){e.exports=r("zUnb")},zUnb:function(e,t,r){"use strict";r.r(t);var i,n=r("fXoL"),a=r("jhN1"),s=r("tk/3"),o=r("3Pt+"),c=r("tyNb"),l={headers:new s.c({"Content-Type":"application/json",withCredentials:"true",Authorization:"Basic "+btoa("3660466:039774fe3ba03e97b92a336961d168ae")})},b=((i=function(){function e(t){_classCallCheck(this,e),this.http=t,this.apilink="https://portal.advea.se/api/orders/",this.paynovaapilink="https://portal.advea.se/proxy/proxy.ashx?https://testapi.paynova.com/"}return _createClass(e,[{key:"generatepaynovadata",value:function(e){return this.http.post(this.apilink+"genrateorderforpaynova",e)}},{key:"Login",value:function(e){return this.http.post(this.apilink+"login",e)}},{key:"getcustomerdata",value:function(e){return this.http.get(this.paynovaapilink+"addresses/SE/"+e,l)}},{key:"paynovacreateorder",value:function(e){return this.http.post(this.paynovaapilink+"orders/create",e,l)}},{key:"authorizeorder",value:function(e,t){return this.http.post(this.paynovaapilink+"orders/"+e+"/authorizePayment",t,l)}},{key:"finalizeorder",value:function(e,t,r){return this.http.post(this.paynovaapilink+"orders/"+e+"/transactions/"+t+"/finalize/"+r,l)}}]),e}()).\u0275fac=function(e){return new(e||i)(n.Tb(s.a))},i.\u0275prov=n.Gb({token:i,factory:i.\u0275fac,providedIn:"root"}),i),d=r("b6Qw"),u=r("5eHb"),m=r("ofXK");function h(e,t){if(1&e){var r=n.Qb();n.Pb(0,"tr"),n.Pb(1,"td",31),n.Xb("click",(function(){n.cc(r);var e=t.index;return n.Zb().deleteRow(e)})),n.Lb(2,"i",32),n.Ob(),n.Pb(3,"td"),n.Pb(4,"input",33),n.Xb("ngModelChange",(function(e){n.cc(r);var i=t.index;return n.Zb().dynamicArray[i].name=e})),n.Ob(),n.Ob(),n.Pb(5,"td"),n.Pb(6,"input",34),n.Xb("ngModelChange",(function(e){n.cc(r);var i=t.index;return n.Zb().dynamicArray[i].unitAmountExcludingTax=e}))("change",(function(e){n.cc(r);var i=t.index;return n.Zb().modelChanged(e.target.value,i)})),n.Ob(),n.Ob(),n.Pb(7,"td"),n.Pb(8,"input",35),n.Xb("ngModelChange",(function(e){n.cc(r);var i=t.index;return n.Zb().dynamicArray[i].taxPercent=e})),n.Ob(),n.Ob(),n.Ob()}if(2&e){var i=t.index,a=n.Zb();n.zb(4),n.ac("ngModel",a.dynamicArray[i].name),n.zb(2),n.ac("ngModel",a.dynamicArray[i].unitAmountExcludingTax),n.zb(2),n.ac("ngModel",a.dynamicArray[i].taxPercent)}}function f(e,t){if(1&e&&(n.Pb(0,"div",36),n.Pb(1,"div",37),n.ic(2," Personnummer is required "),n.Ob(),n.Pb(3,"div",37),n.ic(4," Min Length is 12 "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.userNameL.errors.required),n.zb(2),n.ac("hidden",!r.userNameL.errors.minlength)}}function p(e,t){if(1&e&&(n.Pb(0,"div",36),n.Pb(1,"div",37),n.ic(2," E-postadress is required "),n.Ob(),n.Pb(3,"div",37),n.ic(4," Invalid E-postadress "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.email.errors.required),n.zb(2),n.ac("hidden",!r.email.errors.email)}}function v(e,t){if(1&e&&(n.Pb(0,"div",36),n.Pb(1,"div",37),n.ic(2," Telefonnummer is required "),n.Ob(),n.Pb(3,"div",37),n.ic(4," Min Length is 13 "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.phone.errors.required),n.zb(2),n.ac("hidden",!r.phone.errors.minlength)}}function g(e,t){if(1&e&&(n.Pb(0,"div",36),n.Pb(1,"div",37),n.ic(2," Best\xe4llningsbeskrivning is required "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.userName.errors.required)}}function P(e,t){if(1&e){var r=n.Qb();n.Pb(0,"div",25),n.Pb(1,"button",38),n.Xb("click",(function(){return n.cc(r),n.Zb().onFinal()})),n.ic(2,"Finalize Order"),n.Ob(),n.Ob()}}function y(e,t){if(1&e&&(n.Pb(0,"div",39),n.Pb(1,"div"),n.ic(2),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(2),n.jc(" ",r.responsemsg.Message," ")}}function O(e,t){if(1&e&&(n.Pb(0,"div"),n.Pb(1,"address"),n.Pb(2,"strong"),n.ic(3,"Customer:"),n.Ob(),n.ic(4),n.Lb(5,"br"),n.ic(6),n.Lb(7,"br"),n.ic(8),n.Lb(9,"br"),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(4),n.kc(" ",null==r.customerinfo||null==r.customerinfo.name?null:r.customerinfo.name.firstName," ",null==r.customerinfo||null==r.customerinfo.name?null:r.customerinfo.name.lastName,""),n.zb(2),n.kc(" ",null==r.customerinfo||null==r.customerinfo.Address?null:r.customerinfo.Address.street1," ",null==r.customerinfo||null==r.customerinfo.Address?null:r.customerinfo.Address.street2,""),n.zb(2),n.lc(" ",null==r.customerinfo||null==r.customerinfo.Address?null:r.customerinfo.Address.city,", ",null==r.customerinfo||null==r.customerinfo.Address?null:r.customerinfo.Address.countryCode," ",null==r.customerinfo||null==r.customerinfo.Address?null:r.customerinfo.Address.postalCode,"")}}function w(e,t){if(1&e&&(n.Pb(0,"div"),n.Pb(1,"address"),n.Pb(2,"strong"),n.ic(3,"Order Number:"),n.Ob(),n.ic(4),n.Lb(5,"br"),n.Pb(6,"strong"),n.ic(7,"Total Amount:"),n.Ob(),n.ic(8),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(4),n.jc(" ",r.orderid,""),n.zb(4),n.jc(" ",r.ordertotal," ")}}function k(e,t){if(1&e&&(n.Pb(0,"address"),n.Pb(1,"strong"),n.ic(2,"Trasaction Number:"),n.Ob(),n.ic(3),n.Lb(4,"br"),n.Pb(5,"strong"),n.ic(6,"Risk Statement:"),n.Ob(),n.ic(7),n.Ob()),2&e){var r=n.Zb(2);n.zb(3),n.jc(" ",r.transactionid,""),n.zb(4),n.jc(" ",r.riskstatement," ")}}function L(e,t){if(1&e&&(n.Pb(0,"address"),n.Pb(1,"strong"),n.ic(2,"Authorization Result"),n.Ob(),n.ic(3),n.Ob()),2&e){var r=n.Zb(2);n.zb(3),n.jc(" ",r.transactionerror," ")}}function z(e,t){if(1&e&&(n.Pb(0,"div"),n.hc(1,k,8,2,"address",30),n.hc(2,L,4,1,"address",30),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("ngIf",r.isTdata),n.zb(1),n.ac("ngIf",!r.isTdata)}}function N(e,t){if(1&e&&(n.Pb(0,"address"),n.Pb(1,"strong"),n.ic(2,"Final Status:"),n.Ob(),n.ic(3),n.Lb(4,"br"),n.Ob()),2&e){var r=n.Zb();n.zb(3),n.jc(" ",r.response,"")}}function C(e,t){if(1&e&&(n.Pb(0,"div",17),n.Pb(1,"div"),n.ic(2),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(2),n.jc(" ",r.responsemsg.Message," ")}}function A(e,t){if(1&e&&(n.Pb(0,"div",17),n.Pb(1,"div",18),n.ic(2," Anv\xe4ndarnamn is required "),n.Ob(),n.Pb(3,"div",18),n.ic(4," Min Length is 5 "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.userName.errors.required),n.zb(2),n.ac("hidden",!r.userName.errors.minlength)}}function I(e,t){if(1&e&&(n.Pb(0,"div",17),n.Pb(1,"div",18),n.ic(2," L\xf6senord is required "),n.Ob(),n.Ob()),2&e){var r=n.Zb();n.zb(1),n.ac("hidden",!r.password.errors.required)}}var F,M,x,E,T,D=[{path:"home",component:(M=function(){function e(t,r,i,n,a){_classCallCheck(this,e),this.formBuilder=t,this.apiservice=r,this.cookieservice=i,this.router=n,this.toastr=a,this.responsemsg={Success:!1,Message:"Please fill the required field and Items should not be empty!"},this.submitted=!1,this.isFail=!1,this.isCdata=!1,this.isOdata=!1,this.isTdata=!1,this.isfdata=!1,this.submittedL=!1,this.serverfail=!1,this.dynamicArray=[],this.newDynamic={},this.adveuser=null===this.cookieservice.get("User")?"":this.cookieservice.get("User"),this.authorizedorder={AuthorizationType:"InvoicePayment",PaymentMethodId:311,PaymentMethodProductId:"DirectInvoice",PaymentChannelId:1},this.orderlinetotal=0,this.totalmoms=0,this.grandtotal=0,this.interfacedata={interfaceId:5,layoutName:"Paynova_Responsive_2",customerLanguageCode:"SWE",urlRedirectSuccess:"https://paynova.optisoftab.se",urlRedirectCancel:"https://paynova.optisoftab.se",urlRedirectPending:"https://paynova.optisoftab.se"},this.initializationdata={totalAmount:this.ordertotal,paymentChannelId:1,paymentMethods:[{id:1}],interfaceOptions:this.interfacedata},this.CustomerForm=this.formBuilder.group({UserName:new o.c("",[o.l.required,o.l.minLength(12)]),OrderDescription:new o.c("",[o.l.required]),Phone:new o.c("",[o.l.required,o.l.minLength(13)]),Email:new o.c("",[o.l.email,o.l.required])})}return _createClass(e,[{key:"modelChanged",value:function(e,t){0==t&&(this.orderlinetotal=0),this.orderlinetotal=Number(this.orderlinetotal)+Number(e),this.totalmoms=Number(.25*this.orderlinetotal),this.grandtotal=Number(this.orderlinetotal+this.totalmoms)}},{key:"userName",get:function(){return this.CustomerForm.get("OrderDescription")}},{key:"phone",get:function(){return this.CustomerForm.get("Phone")}},{key:"userNameL",get:function(){return this.CustomerForm.get("UserName")}},{key:"email",get:function(){return this.CustomerForm.get("Email")}},{key:"addRow",value:function(e){return this.newDynamic={articleNumber:"",name:"",qty:1,unitAmountExcludingTax:0,taxPercent:25},this.dynamicArray.push(this.newDynamic),this.toastr.success("New row added successfully","New Row"),console.log(this.dynamicArray),!0}},{key:"deleteRow",value:function(e){return 1==this.dynamicArray.length?(this.toastr.error("Can't delete the row when there is only one row","Warning"),!1):(this.orderlinetotal=Number(this.orderlinetotal)-Number(this.dynamicArray[e].unitAmountExcludingTax),this.totalmoms=Number(.25*this.orderlinetotal),this.grandtotal=Number(this.orderlinetotal+this.totalmoms),this.dynamicArray.splice(e,1),this.toastr.warning("Row deleted successfully","Delete row"),!0)}},{key:"ngOnInit",value:function(){""!=this.adveuser?(this.newDynamic={articleNumber:"",name:"",qty:1,unitAmountExcludingTax:0,taxPercent:25},this.dynamicArray.push(this.newDynamic)):this.router.navigate(["/login"])}},{key:"onSubmit",value:function(){var e=this;this.CustomerForm.valid?(this.submitted=!0,this.apiservice.getcustomerdata(this.CustomerForm.get("UserName").value).subscribe((function(t){e.isCdata=t.status.isSuccess,e.customerinfo=t,e.customerinfo.name=t.addresses[0].name,e.customerinfo.Address=t.addresses[0].address,e.customerinfo.emailAddress=e.CustomerForm.get("Email").value,e.customerinfo.mobileTelephone=e.CustomerForm.get("Phone").value,e.clientData=e.CustomerForm.value,e.clientData.Customer=e.customerinfo,e.clientData.Address=e.customerinfo.Address,e.clientData.OrderLines=e.dynamicArray,e.apiservice.generatepaynovadata(e.clientData).subscribe((function(t){e.ordertotal=t.totalAmount,console.log(t),e.apiservice.paynovacreateorder(t).subscribe((function(t){t.status.isSuccess?(e.toastr.success(t.orderId,"New order has been created successfully!"),e.isOdata=t.status.isSuccess,e.orderid=t.orderId,e.authorizedorder.TotalAmount=e.ordertotal,console.log(e.authorizedorder),e.apiservice.authorizeorder(t.orderId,e.authorizedorder).subscribe((function(t){t.status.isSuccess?(e.isTdata=!0,e.transactionid=t.transactionId,e.riskstatement=t.riskAssessment.result,e.toastr.success(t.status.statusMessage,"Authorized Message")):(e.isTdata=!1,e.transactionerror=t.status.statusMessage,e.toastr.error(t.status.statusMessage,"Authorization Failed!"))}))):(e.toastr.success(t.status.statusMessage,"Order Creation Failed!"),e.responsemsg.Message="Please make sure order line data is not empty!")})),e.isFail=!1}))}))):this.isFail=!0}},{key:"onFinal",value:function(){var e=this;this.isTdata&&this.apiservice.finalizeorder(this.orderid,this.transactionid,this.ordertotal).subscribe((function(t){e.response=t.status.statusMessage,e.isfdata=!0,t.status.isSuccess?e.toastr.success(e.response,"Finalize Successfull!"):e.toastr.error(e.response,"Finalize Failed!")}))}}]),e}(),M.\u0275fac=function(e){return new(e||M)(n.Kb(o.b),n.Kb(b),n.Kb(d.a),n.Kb(c.a),n.Kb(u.b))},M.\u0275cmp=n.Eb({type:M,selectors:[["app-home"]],decls:101,vars:15,consts:[[1,"navbar","navbar-inverse","navbar-fixed-top"],[1,"container"],[1,"navbar-header"],["type","button","data-toggle","collapse","data-target",".navbar-collapse",1,"navbar-toggle"],[1,"icon-bar"],["target","_blank","href","https://www.advea.se/",1,"navbar-brand"],["src","/assets/images/ADVEA-VIT-LOGGA.png","width","10%"],[1,"container","body-content"],[1,"jumbotron"],[1,"lead"],[1,"row"],[1,"col-md-12"],[1,"table","table-striped","table-bordered"],[4,"ngFor","ngForOf"],["colspan","3",3,"click"],[1,"fa","fa-plus"],[1,"col-md-8"],["novalidate","",3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"form-group"],["type","text","id","userNameL","name","userNameL","placeholder","person number","formControlName","UserName","value","",1,"form-control"],["class","alert alert-warning",4,"ngIf"],["type","email","id","email","name","email","placeholder","Email Address","formControlName","Email","value","",1,"form-control","form-control-light"],["type","text","id","phone","name","phone","placeholder","+460730000000","formControlName","Phone","value","",1,"form-control","form-control-light"],["type","text","id","userName","name","userName","formControlName","OrderDescription","placeholder","Best\xe4llningsbeskrivning",1,"form-control","form-control-light"],[1,"login_submit"],["type","submit",1,"btn","btn-info","btn-lg"],["class","login_submit",4,"ngIf"],[1,"col-md-4"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],[3,"click"],[1,"fa","fa-trash"],["type","text",1,"form-control",3,"ngModel","ngModelChange"],["type","number",1,"form-control",3,"ngModel","ngModelChange","change"],["type","number","readonly","",1,"form-control",3,"ngModel","ngModelChange"],[1,"alert","alert-warning"],[3,"hidden"],["type","submit",1,"btn","btn-primary","btn-lg",3,"click"],[1,"alert","alert-danger"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Pb(3,"button",3),n.Lb(4,"span",4),n.Lb(5,"span",4),n.Lb(6,"span",4),n.Ob(),n.Pb(7,"a",5),n.Lb(8,"img",6),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(9,"div",7),n.Pb(10,"div",8),n.Pb(11,"h1"),n.ic(12,"Payment Portal"),n.Ob(),n.Pb(13,"p",9),n.ic(14,"Smooth Credit payment by Invoice."),n.Ob(),n.Ob(),n.Pb(15,"div",10),n.Pb(16,"div",11),n.Pb(17,"h2"),n.ic(18,"Best\xe4llnings"),n.Ob(),n.Pb(19,"table",12),n.Pb(20,"thead"),n.Pb(21,"tr"),n.Pb(22,"th"),n.ic(23,"Handling"),n.Ob(),n.Pb(24,"th"),n.ic(25,"Namn"),n.Ob(),n.Pb(26,"th"),n.ic(27,"Enhetsv\xe4rde(Ex MoM)"),n.Ob(),n.Pb(28,"th"),n.ic(29,"MoM(%)"),n.Ob(),n.Ob(),n.Ob(),n.Pb(30,"tbody"),n.hc(31,h,9,3,"tr",13),n.Ob(),n.Pb(32,"tfoot"),n.Pb(33,"tr"),n.Pb(34,"td",14),n.Xb("click",(function(){return t.addRow(1)})),n.Lb(35,"i",15),n.Ob(),n.Pb(36,"td"),n.Pb(37,"strong"),n.ic(38,"Ex mom :"),n.Ob(),n.ic(39),n.Lb(40,"br"),n.Pb(41,"strong"),n.ic(42,"MoMs :"),n.Ob(),n.ic(43),n.Lb(44,"br"),n.Pb(45,"strong"),n.ic(46,"Total :"),n.Ob(),n.ic(47),n.Lb(48,"br"),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(49,"div",10),n.Pb(50,"div",16),n.Pb(51,"form",17),n.Xb("ngSubmit",(function(){return t.onSubmit()})),n.Pb(52,"div",10),n.Pb(53,"div",18),n.Pb(54,"div",19),n.Pb(55,"label"),n.ic(56,"Personnummer "),n.Pb(57,"span"),n.ic(58,"*"),n.Ob(),n.Ob(),n.Lb(59,"input",20),n.hc(60,f,5,2,"div",21),n.Ob(),n.Pb(61,"div",19),n.Pb(62,"label"),n.ic(63,"E-postadress "),n.Pb(64,"span"),n.ic(65,"*"),n.Ob(),n.Ob(),n.Lb(66,"input",22),n.hc(67,p,5,2,"div",21),n.Ob(),n.Ob(),n.Pb(68,"div",18),n.Pb(69,"div",19),n.Pb(70,"label"),n.ic(71,"Telefonnummer "),n.Pb(72,"span"),n.ic(73,"*"),n.Ob(),n.Ob(),n.Lb(74,"input",23),n.hc(75,v,5,2,"div",21),n.Ob(),n.Pb(76,"div",19),n.Pb(77,"label"),n.ic(78,"Best\xe4llningsbeskrivning "),n.Pb(79,"span"),n.ic(80,"*"),n.Ob(),n.Ob(),n.Lb(81,"input",24),n.hc(82,g,3,1,"div",21),n.Ob(),n.Ob(),n.Ob(),n.Pb(83,"div",25),n.Pb(84,"button",26),n.ic(85,"Place Order"),n.Ob(),n.Ob(),n.Ob(),n.Lb(86,"br"),n.hc(87,P,3,0,"div",27),n.Ob(),n.Pb(88,"div",28),n.Pb(89,"h2"),n.ic(90,"H\xe4mtad information"),n.Ob(),n.hc(91,y,3,1,"div",29),n.hc(92,O,10,7,"div",30),n.hc(93,w,9,2,"div",30),n.hc(94,z,3,2,"div",30),n.Pb(95,"div"),n.hc(96,N,5,1,"address",30),n.Ob(),n.Ob(),n.Ob(),n.Lb(97,"hr"),n.Pb(98,"footer"),n.Pb(99,"p"),n.ic(100,"\xa9 2021 - ADVEA AB"),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.zb(31),n.ac("ngForOf",t.dynamicArray),n.zb(8),n.jc(" ",t.orderlinetotal," kr"),n.zb(4),n.jc(" ",t.totalmoms," kr"),n.zb(4),n.jc(" ",t.grandtotal," kr"),n.zb(4),n.ac("formGroup",t.CustomerForm),n.zb(9),n.ac("ngIf",!(null!=t.userNameL&&t.userNameL.valid)&&((null==t.userNameL?null:t.userNameL.dirty)||(null==t.userNameL?null:t.userNameL.touched))),n.zb(7),n.ac("ngIf",!(null!=t.email&&t.email.valid)&&((null==t.email?null:t.email.dirty)||(null==t.email?null:t.email.touched))),n.zb(8),n.ac("ngIf",!(null!=t.phone&&t.phone.valid)&&((null==t.phone?null:t.phone.dirty)||(null==t.phone?null:t.phone.touched))),n.zb(7),n.ac("ngIf",!(null!=t.userName&&t.userName.valid)&&((null==t.userName?null:t.userName.dirty)||(null==t.userName?null:t.userName.touched))),n.zb(5),n.ac("ngIf",null!=t.transactionid),n.zb(4),n.ac("ngIf",t.isFail),n.zb(1),n.ac("ngIf",t.isCdata),n.zb(1),n.ac("ngIf",t.isOdata),n.zb(1),n.ac("ngIf",null!=t.orderid),n.zb(2),n.ac("ngIf",t.isfdata))},directives:[m.h,o.m,o.h,o.e,o.a,o.g,o.d,m.i,o.i,o.j],styles:[""]}),M)},{path:"login",component:(F=function(){function e(t,r,i,n){_classCallCheck(this,e),this.formBuilder=t,this.apiservice=r,this.cookieservice=i,this.router=n,this.submitted=!1,this.isFail=!1,this.responsemsg={Success:!1,Message:"Please fill the required field!"},this.LoginForm=this.formBuilder.group({UserName:new o.c("",[o.l.required,o.l.minLength(5)]),Password:new o.c("",[o.l.required])})}return _createClass(e,[{key:"userName",get:function(){return this.LoginForm.get("UserName")}},{key:"password",get:function(){return this.LoginForm.get("Password")}},{key:"ngOnInit",value:function(){}},{key:"onLogin",value:function(){var e=this;this.LoginForm.valid?(this.submitted=!0,this.clientData=this.LoginForm.value,this.apiservice.Login(this.clientData).subscribe((function(t){if(e.responsemsg=t,e.responsemsg.Success){var r=new Date;r.setDate(r.getDate()+7),e.cookieservice.set("Id",e.responsemsg.Id.toString(),r),e.cookieservice.set("User",e.responsemsg.Complementary,r),e.isFail=!1,e.router.navigate(["/home"])}else e.isFail=!0}))):this.isFail=!0}}]),e}(),F.\u0275fac=function(e){return new(e||F)(n.Kb(o.b),n.Kb(b),n.Kb(d.a),n.Kb(c.a))},F.\u0275cmp=n.Eb({type:F,selectors:[["app-login"]],decls:36,vars:4,consts:[[1,"navbar","navbar-inverse","navbar-fixed-top"],[1,"container"],[1,"navbar-header"],["type","button","data-toggle","collapse","data-target",".navbar-collapse",1,"navbar-toggle"],[1,"icon-bar"],["target","_blank","href","https://www.advea.se/",1,"navbar-brand"],["src","/assets/images/ADVEA-VIT-LOGGA.png","width","10%"],[1,"container","body-content"],[1,"jumbotron"],[1,"lead"],[1,"login-box"],["class","alert alert-danger",4,"ngIf"],["novalidate","",3,"formGroup","ngSubmit"],[1,"user-box"],["type","text","id","userName","name","userName","formControlName","UserName","value",""],["type","password","id","password","name","password","formControlName","Password","value","",1,"form-control"],["type","submit",3,"click"],[1,"alert","alert-danger"],[3,"hidden"]],template:function(e,t){1&e&&(n.Pb(0,"div",0),n.Pb(1,"div",1),n.Pb(2,"div",2),n.Pb(3,"button",3),n.Lb(4,"span",4),n.Lb(5,"span",4),n.Lb(6,"span",4),n.Ob(),n.Pb(7,"a",5),n.Lb(8,"img",6),n.Ob(),n.Ob(),n.Ob(),n.Ob(),n.Pb(9,"div",7),n.Pb(10,"div",8),n.Pb(11,"h1"),n.ic(12,"Payment Portal"),n.Ob(),n.Pb(13,"p",9),n.ic(14,"Smooth Credit payment by Invoice."),n.Ob(),n.Ob(),n.Pb(15,"div",10),n.Pb(16,"h2"),n.ic(17,"Login"),n.Ob(),n.hc(18,C,3,1,"div",11),n.Pb(19,"form",12),n.Xb("ngSubmit",(function(){return t.onLogin()})),n.Pb(20,"div",13),n.Lb(21,"input",14),n.Pb(22,"label"),n.ic(23,"Anv\xe4ndarnamn"),n.Ob(),n.hc(24,A,5,2,"div",11),n.Ob(),n.Pb(25,"div",13),n.Lb(26,"input",15),n.Pb(27,"label"),n.ic(28,"L\xf6senord"),n.Ob(),n.hc(29,I,3,1,"div",11),n.Ob(),n.Pb(30,"a",16),n.Xb("click",(function(){return t.onLogin()})),n.Lb(31,"span"),n.Lb(32,"span"),n.Lb(33,"span"),n.Lb(34,"span"),n.ic(35," Logga in "),n.Ob(),n.Ob(),n.Ob(),n.Ob()),2&e&&(n.zb(18),n.ac("ngIf",t.isFail),n.zb(1),n.ac("formGroup",t.LoginForm),n.zb(5),n.ac("ngIf",!(null!=t.userName&&t.userName.valid)&&((null==t.userName?null:t.userName.dirty)||(null==t.userName?null:t.userName.touched))),n.zb(5),n.ac("ngIf",!(null!=t.password&&t.password.valid)&&((null==t.password?null:t.password.dirty)||(null==t.password?null:t.password.touched))))},directives:[m.i,o.m,o.h,o.e,o.a,o.g,o.d],styles:[""]}),F)},{path:"",redirectTo:"/home",pathMatch:"full"}],S=((E=function e(){_classCallCheck(this,e)}).\u0275mod=n.Ib({type:E}),E.\u0275inj=n.Hb({factory:function(e){return new(e||E)},imports:[[c.b.forRoot(D)],c.b]}),E),q=((x=function e(){_classCallCheck(this,e),this.title="Client"}).\u0275fac=function(e){return new(e||x)},x.\u0275cmp=n.Eb({type:x,selectors:[["app-root"]],decls:1,vars:0,template:function(e,t){1&e&&n.Lb(0,"router-outlet")},directives:[c.c],styles:[""]}),x),_=r("R1ws"),Z=((T=function e(){_classCallCheck(this,e)}).\u0275mod=n.Ib({type:T,bootstrap:[q]}),T.\u0275inj=n.Hb({factory:function(e){return new(e||T)},providers:[d.a],imports:[[a.a,o.f,s.b,o.k,u.a.forRoot(),S,_.a]]}),T);Object(n.R)(),a.c().bootstrapModule(Z).catch((function(e){return console.error(e)}))},zn8P:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id="zn8P"}},[[0,0,5]]]);