function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,c){if(e){if("string"==typeof e)return _arrayLikeToArray(e,c);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,c):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,c){(null==c||c>e.length)&&(c=e.length);for(var t=0,n=new Array(c);t<c;t++)n[t]=e[t];return n}function _classCallCheck(e,c){if(!(e instanceof c))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,c){for(var t=0;t<c.length;t++){var n=c[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,c,t){return c&&_defineProperties(e.prototype,c),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{Wf2E:function(e,c,t){"use strict";t.r(c);var n=t("ofXK"),i=t("3Pt+"),a=t("tyNb"),l=t("PSD3"),r=t.n(l),o=t("wd/R"),d=t("fXoL"),s=t("sumL"),b=t("rwBg"),u=t("wZvz"),p=t("f4UJ"),h=t("AXIP"),m=t("oOf3"),f=["closeEditModal"];function g(e,c){if(1&e&&(d.ac(0),d.cc(1,"option",54),d.Mc(2),d.bc(),d.Zb()),2&e){var t=c.$implicit;d.Jb(1),d.vc("value",t.id),d.Jb(1),d.Nc(t.name)}}function v(e,c){if(1&e&&(d.ac(0),d.cc(1,"option",54),d.Mc(2),d.bc(),d.Zb()),2&e){var t=c.$implicit;d.Jb(1),d.vc("value",t.id),d.Jb(1),d.Nc(t.name)}}function M(e,c){if(1&e&&(d.ac(0),d.cc(1,"option",54),d.Mc(2),d.bc(),d.Zb()),2&e){var t=c.$implicit;d.Jb(1),d.vc("value",t.fullName),d.Jb(1),d.Nc(t.fullName)}}function y(e,c){1&e&&(d.ac(0),d.cc(1,"th",27),d.Mc(2,"Action"),d.bc(),d.Zb())}function _(e,c){1&e&&(d.ac(0),d.cc(1,"th",27),d.Mc(2,"View"),d.bc(),d.Zb())}function D(e,c){1&e&&(d.ac(0),d.cc(1,"th",27),d.Mc(2,"View"),d.bc(),d.Zb())}function k(e,c){1&e&&(d.ac(0),d.cc(1,"th",27),d.Mc(2,"Action"),d.bc(),d.Zb())}function J(e,c){if(1&e){var t=d.dc();d.ac(0),d.cc(1,"td"),d.cc(2,"button",56),d.kc("click",(function(){d.Fc(t);var e=d.oc(2).$implicit;return d.oc(2).printBill(e)})),d.Xb(3,"i",57),d.bc(),d.bc(),d.Zb()}}function N(e,c){if(1&e){var t=d.dc();d.cc(0,"td"),d.cc(1,"button",58),d.kc("click",(function(){d.Fc(t);var e=d.oc(2).$implicit;return d.oc(2).printBill(e)})),d.Xb(2,"i",57),d.bc(),d.bc()}}function w(e,c){if(1&e&&(d.ac(0),d.Kc(1,J,4,0,"ng-container",30),d.Kc(2,N,3,0,"ng-template",null,55,d.Lc),d.Zb()),2&e){var t=d.Dc(3),n=d.oc().$implicit;d.Jb(1),d.vc("ngIf","No"===(null==n?null:n.printed))("ngIfElse",t)}}function C(e,c){if(1&e){var t=d.dc();d.ac(0),d.cc(1,"td"),d.cc(2,"button",59),d.kc("click",(function(){d.Fc(t);var e=d.oc().$implicit;return d.oc(2).getBillDetail(e.bill_id)})),d.Xb(3,"i",60),d.bc(),d.bc(),d.Zb()}}function O(e,c){if(1&e){var t=d.dc();d.ac(0),d.cc(1,"td"),d.cc(2,"button",59),d.kc("click",(function(){d.Fc(t);var e=d.oc().$implicit;return d.oc(2).getBillDetail(e.bill_id)})),d.Xb(3,"i",60),d.bc(),d.bc(),d.Zb()}}function B(e,c){if(1&e){var t=d.dc();d.ac(0),d.cc(1,"td"),d.cc(2,"button",58),d.kc("click",(function(){d.Fc(t);var e=d.oc(),c=e.index,n=e.$implicit;return d.oc(2).deleteBill(c,n.bill_id)})),d.Xb(3,"i",61),d.bc(),d.bc(),d.Zb()}}function A(e,c){if(1&e&&(d.cc(0,"tr"),d.Kc(1,w,4,2,"ng-container",26),d.Kc(2,C,4,0,"ng-container",26),d.cc(3,"td"),d.cc(4,"B"),d.Mc(5),d.bc(),d.bc(),d.cc(6,"td"),d.cc(7,"B"),d.Mc(8),d.bc(),d.bc(),d.cc(9,"td"),d.Mc(10),d.bc(),d.cc(11,"td"),d.Mc(12),d.bc(),d.cc(13,"td"),d.Mc(14),d.bc(),d.cc(15,"td"),d.Mc(16),d.bc(),d.cc(17,"td"),d.Mc(18),d.bc(),d.cc(19,"td"),d.Mc(20),d.bc(),d.cc(21,"td"),d.Mc(22),d.bc(),d.cc(23,"td"),d.Mc(24),d.pc(25,"date"),d.bc(),d.cc(26,"td"),d.Mc(27),d.pc(28,"date"),d.bc(),d.cc(29,"td"),d.Mc(30),d.pc(31,"date"),d.bc(),d.cc(32,"td"),d.Mc(33),d.pc(34,"date"),d.bc(),d.cc(35,"td"),d.Mc(36),d.pc(37,"date"),d.bc(),d.cc(38,"td"),d.Mc(39),d.bc(),d.Kc(40,O,4,0,"ng-container",26),d.Kc(41,B,4,0,"ng-container",26),d.bc()),2&e){var t=c.$implicit,n=d.oc(2);d.Jb(1),d.vc("ngIf","operator"===n.role),d.Jb(1),d.vc("ngIf","operator"===n.role),d.Jb(3),d.Nc(t.bill_id),d.Jb(3),d.Nc(t.token_id),d.Jb(2),d.Oc("\u20b9 ",t.total_price,""),d.Jb(2),d.Nc(t.payment_mode),d.Jb(2),d.Nc(t.delivery_mode),d.Jb(2),d.Nc(t.customer_name),d.Jb(2),d.Nc(t.customer_phone),d.Jb(2),d.Nc(t.customer_alternative_phone),d.Jb(2),d.Nc(t.customer_address),d.Jb(2),d.Nc(d.rc(25,19,t.createdOn,"MMM d, y")),d.Jb(3),d.Nc(d.rc(28,22,t.createdOn,"h:mm:ss a")),d.Jb(3),d.Nc(d.rc(31,25,t.incookAt,"h:mm:ss a")),d.Jb(3),d.Nc(d.rc(34,28,t.cookedAt,"h:mm:ss a")),d.Jb(3),d.Nc(d.rc(37,31,t.dispatchedAt,"h:mm:ss a")),d.Jb(3),d.Nc(t.user_name),d.Jb(1),d.vc("ngIf","admin"===n.role),d.Jb(1),d.vc("ngIf","admin"===n.role)}}var P=function(e,c,t){return{itemsPerPage:e,currentPage:c,totalItems:t}};function x(e,c){if(1&e&&(d.cc(0,"tbody"),d.Kc(1,A,42,34,"tr",7),d.pc(2,"paginate"),d.bc()),2&e){var t=d.oc();d.Jb(1),d.vc("ngForOf",d.rc(2,1,t.billList,d.Ac(4,P,t.selectedPerPage,t.currentpage,t.totalPage)))}}function S(e,c){if(1&e&&(d.cc(0,"tbody"),d.cc(1,"tr"),d.cc(2,"td",62),d.Mc(3),d.bc(),d.bc(),d.bc()),2&e){var t=d.oc();d.Jb(3),d.Nc(t.response)}}function L(e,c){if(1&e&&(d.ac(0),d.cc(1,"div",66),d.cc(2,"p"),d.cc(3,"span",67),d.cc(4,"span",68),d.Mc(5),d.bc(),d.Mc(6),d.pc(7,"titlecase"),d.bc(),d.bc(),d.bc(),d.Zb()),2&e){var t=c.$implicit;d.Jb(5),d.Nc(t.quantity),d.Jb(1),d.Oc(" X ",d.qc(7,2,t.food_name),"")}}function I(e,c){if(1&e&&(d.cc(0,"div",63),d.cc(1,"div",64),d.cc(2,"div",65),d.cc(3,"h5"),d.Mc(4,"Billing Detail"),d.bc(),d.bc(),d.cc(5,"div",66),d.cc(6,"p"),d.Mc(7,"Date: "),d.cc(8,"span",67),d.Mc(9),d.bc(),d.bc(),d.bc(),d.cc(10,"div",66),d.cc(11,"p"),d.Mc(12,"Name: "),d.cc(13,"span",67),d.Mc(14),d.bc(),d.bc(),d.bc(),d.cc(15,"div",66),d.cc(16,"p"),d.Mc(17,"Bill ID: "),d.cc(18,"span",67),d.Mc(19),d.bc(),d.bc(),d.bc(),d.cc(20,"div",66),d.cc(21,"p"),d.Mc(22,"Phone No: "),d.cc(23,"span",67),d.Mc(24),d.bc(),d.bc(),d.bc(),d.cc(25,"div",66),d.cc(26,"p"),d.Mc(27,"Whatsapp No: "),d.cc(28,"span",67),d.Mc(29),d.bc(),d.bc(),d.bc(),d.cc(30,"div",23),d.cc(31,"p"),d.Mc(32,"Address: "),d.cc(33,"span",67),d.Mc(34),d.bc(),d.bc(),d.bc(),d.cc(35,"div",66),d.cc(36,"p"),d.Mc(37,"Delivery Mode: "),d.cc(38,"span",67),d.Mc(39),d.bc(),d.bc(),d.bc(),d.cc(40,"div",66),d.cc(41,"p"),d.Mc(42,"Payment Mode: "),d.cc(43,"span",67),d.Mc(44),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(45,"div",64),d.cc(46,"div",23),d.cc(47,"h5",52),d.Mc(48,"Food Details"),d.bc(),d.bc(),d.Kc(49,L,8,4,"ng-container",7),d.bc(),d.bc()),2&e){var t=d.oc();d.Jb(9),d.Nc(t.detail.date),d.Jb(5),d.Nc(t.detail.customer_name?t.detail.customer_name:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.bill_id?t.detail.bill_id:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.customer_alternative_phone?t.detail.customer_alternative_phone:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.customer_phone?t.detail.customer_phone:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.customer_address?t.detail.customer_address:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.delivery_mode?t.detail.delivery_mode:"Not Mentioned"),d.Jb(5),d.Nc(t.detail.payment_mode?t.detail.payment_mode:"Not Mentioned"),d.Jb(5),d.vc("ngForOf",t.detail.products)}}function E(e,c){if(1&e&&(d.ac(0),d.cc(1,"tr"),d.cc(2,"td",69),d.Mc(3),d.bc(),d.cc(4,"td",70),d.Mc(5),d.bc(),d.cc(6,"td",71),d.Mc(7),d.bc(),d.cc(8,"td",72),d.Mc(9),d.bc(),d.bc(),d.Zb()),2&e){var t=c.$implicit;d.Jb(3),d.Nc(null==t?null:t.quantity),d.Jb(2),d.Nc(null==t?null:t.food_name),d.Jb(2),d.Oc("\u20b9 ",null==t?null:t.price,""),d.Jb(2),d.Oc("\u20b9 ",(null==t?null:t.price)*(null==t?null:t.quantity),"")}}var T,F,X=[{path:"",component:(T=function(){function e(c,t,n,i,a,l,r){var o=this;_classCallCheck(this,e),this.router=c,this.billService=t,this.userService=n,this.modeService=i,this.branchService=a,this.fb=l,this.ui=r,this.sortOrder=!1,this.selectAll=!1,this.LoadingText="abc",this.sortFields={total_price:!0,payment_mode:!0,delivery_mode:!0,customer_name:!0,user_name:!0,createdOn:!0},this.payment=[],this.delivery=[],this.billList=[],this.response="No Data to Show",this.searchedName="",this.selectedDate="",this.userNameList=[],this.selectedPerPage=10,this.currentpage=1,this.role="",this.getAllPaymentMode=function(){o.modeService.getPaymentModeList().subscribe((function(e){if(e.data){o.payment.push({id:"Net Banking",name:"Net Banking"});var c=e.data.map((function(e){return{id:e.payment_mode_name,name:e.payment_mode_name}}));o.payment=[].concat(_toConsumableArray(c),_toConsumableArray(o.payment)),o.payment.push({id:"",name:"All"})}}))},this.getAllDeliveryMode=function(){o.modeService.getDeliveryModeList().subscribe((function(e){e.data&&(o.delivery=e.data.map((function(e){return{id:e.delivery_mode_name,name:e.delivery_mode_name}})),o.delivery.push({id:"",name:"All"}))}))},this.onLimitSelect=function(e){o.selectedPerPage=e,o.getBillList()},this.userService.getRole().subscribe((function(e){o.role=e,console.log(e)}))}return _createClass(e,[{key:"ngOnInit",value:function(){this.getBillList(),this.getAllUsers(),this.getAllPaymentMode(),this.getAllDeliveryMode(),this.getBranchDetail()}},{key:"onCustomerChange",value:function(){console.log(this.searchedName),this.getBillList()}},{key:"printBill",value:function(e){this.printDetail=e,setTimeout((function(){var e,c;e=document.getElementById("print-section").innerHTML,(c=window.open("","_blank","top=0,left=0,height=100%,width=auto")).document.open(),c.document.write('\n        <html>\n          <head>\n  \n          <meta charset="UTF-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1.0">\n          <meta http-equiv="X-UA-Compatible" content="ie=edge">\n            <title>Print tab</title>\n            <style>\n            p{\n              font-size:12px;\n            }\n            \n            td,\n            th,\n            tr,\n            table {\n                font-size:14px;\n                border-top: 1px solid black;\n                border-collapse: collapse;\n            }\n            \n            td.description,\n            th.description {\n                width: 85px;\n                max-width: 85px;\n            }\n\n            td.total,\n            th.total {\n                width: 85px;\n                max-width: 85px;\n            }\n            \n            td.quantity,\n            th.quantity {\n                width: 45px;\n                max-width: 45px;\n                word-break: break-all;\n            }\n            \n            td.price,\n            th.price {\n                width: 45px;\n                max-width: 45px;\n                word-break: break-all;\n            }\n\n            td.t-price,\n            th.t-price {\n                width: 65px;\n                max-width: 65px;\n                word-break: break-all;\n            }\n            \n            .centered {\n                text-align: center;\n                align-content: center;\n            }\n            \n            .ticket {\n                width: 268px;\n                max-width: 268px;\n            }\n            \n            </style>\n          </head>\n      <body onload="window.print();window.close()">'.concat(e,"</body>\n        </html>")),c.document.close()}),100),e.printed="Yes",this.billService.editBill(e.bill_id,e).subscribe((function(e){}))}},{key:"addStatus",value:function(e){this.status=e,console.log(this.status)}},{key:"editStatus",value:function(e){this.detail.status=e,console.log(this.status)}},{key:"getAllUsers",value:function(){var e=this;this.userService.getAllUsers(500,1).subscribe((function(c){var t;e.userNameList.push({fullName:"ALL"});var n=c.data.result.map((function(e){return{fullName:"".concat(e.firstName," ").concat(e.lastName)}}));(t=e.userNameList).push.apply(t,_toConsumableArray(n)),console.log(e.userNameList)}))}},{key:"getBranchDetail",value:function(){var e=this;this.branchService.getBranchDetail("QtdSQrKuq").subscribe((function(c){c.data&&(e.branchDetail=c.data)}))}},{key:"getBillList",value:function(e){var c=this;e&&(this.currentpage=e);var t={startDate:o(this.selectedStartDate).format("DD-MM-YYYY"),endDate:o(this.selectedEndDate).format("DD-MM-YYYY"),payment_mode:this.selectedPaymentMode,delivery_mode:this.selectedDeliveryMode,createdOn:this.selectedDate,user_name:this.selectedUserName,customer_name:this.searchedName},n="";for(var i in t)t[i]&&(n="".concat(n).concat(i,"=").concat(t[i],"&"));console.log(n),this.ui.loader.show(),this.billService.getBillingList(this.selectedPerPage,this.currentpage,n).subscribe((function(e){c.billList=[],e.data?(c.billList=e.data.result.map((function(e){return Object.assign({date:o(e.createdOn).format("YYYY-MM-DD")},e)})),c.total=parseInt(e.data.total.split("-")[0]).toFixed(2),e.data.result.length>0&&(c.totalPage=e.data.total.split("-")[1],console.log(c.totalPage))):c.total=0,c.ui.loader.hide()}),(function(e){return c.ui.loader.hide()}))}},{key:"onOptionSelect",value:function(e,c){"payment"===e?this.selectedPaymentMode=c:"delivery"===e?this.selectedDeliveryMode=c:"user"===e?this.selectedUserName="ALL"===c?"":c:"date"===e&&(this.selectedDate=c),this.getBillList()}},{key:"onDateSelect",value:function(){this.selectedStartDate?this.selectedEndDate?this.getBillList():r.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):r.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}},{key:"changedDate",value:function(e,c){"start"===e?this.selectedStartDate=c:"end"===e&&(this.selectedEndDate=c),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}},{key:"changeOrder",value:function(e){var c=this;this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.billList.sort((function(t,n){return"total_price"===e?c.sortOrder?n[e]-t[e]:t[e]-n[e]:c.sortOrder?n[e].localeCompare(t[e]):t[e].localeCompare(n[e])}))}},{key:"deleteBill",value:function(e,c){var t=this;r.a.fire({title:"Do you want to delete this Bill?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(n){n.isConfirmed&&(t.ui.loader.show(),t.billService.deleteBill(c).subscribe((function(c){r.a.fire({icon:"success",title:"Bill Deleted Successfully",showConfirmButton:!1,timer:1500}),t.billList.splice(e,1),t.ui.loader.hide()}),(function(e){return t.ui.loader.hide()})))}))}},{key:"getBillDetail",value:function(e){var c=this;this.ui.loader.show(),this.billService.getBillDetail(e).subscribe((function(e){e.data&&(c.detail=e.data,c.ui.loader.hide())}),(function(e){return c.ui.loader.hide()}))}},{key:"editBill",value:function(e){var c=this;this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.billService.editBill(e,this.detail).subscribe((function(e){c.closeEditModal.nativeElement.click(),c.detail={},c.ui.loader.hide(),c.getBillList()}),(function(e){c.ui.loader.hide()}))}},{key:"payMode",value:function(e){this.selectedPaymentMode=e,"All"===this.selectedPaymentMode&&(this.selectedPaymentMode="")}},{key:"deliveryMode",value:function(e){this.selectedDeliveryMode=e,"All"===this.selectedDeliveryMode&&(this.selectedDeliveryMode="")}},{key:"onUserSelect",value:function(e){this.selectedUserName=e,"CLEAR SEARCH"===this.selectedUserName&&(this.selectedUserName="")}}]),e}(),T.\u0275fac=function(e){return new(e||T)(d.Wb(a.e),d.Wb(s.a),d.Wb(b.a),d.Wb(u.a),d.Wb(p.a),d.Wb(i.c),d.Wb(h.a))},T.\u0275cmp=d.Qb({type:T,selectors:[["app-billing"]],viewQuery:function(e,c){var t;1&e&&d.Rc(f,!0),2&e&&d.Cc(t=d.lc())&&(c.closeEditModal=t.first)},decls:204,vars:59,consts:[[1,"container-fluid","main-container"],[1,"row","dash-tab"],[1,"col-md-4","col-sm-12"],[1,"form-group"],[2,"color","#69d73d"],[1,"col-sm-2","cus-srch"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["name","dev","id","dev",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","text","id","birthday","placeholder","Search By Cus Name","name","searchName",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12","col-md-3"],["value","10"],["value","25"],["value","50"],["value","100"],["value","10000"],[1,"col-sm-12"],[1,"table-responsive","scrollmenu"],[1,"table","details_table"],[4,"ngIf"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","viewModal","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade"],["viewModal",""],[1,"modal-dialog"],["class","modal-content","style","padding:2%",4,"ngIf"],["id","print-section"],[1,"ticket"],[1,"centered","last-line"],[2,"font-size","16px","margin-left","6px"],[2,"margin-left","6px","margin-bottom","-7px","border-bottom","1px dotted black"],[2,"margin-left","6px"],[1,"quantity",2,"border","1px solid black"],[1,"description",2,"border","1px solid black"],[1,"price",2,"border","1px solid black"],[1,"t-price",2,"border","1px solid black"],[1,"quantity"],[1,"t-price"],[1,"total",2,"text-align","center"],[1,"t-price",2,"text-align","center"],[2,"margin-left","6px","margin-bottom","-7px"],[2,"text-align","center"],[1,"centered"],[3,"value"],["yesBlock",""],["type","button",1,"btn","btn-success","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-print"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],["type","button","data-toggle","modal","data-target","#viewModal",1,"btn","btn-success","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-eye"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],[1,"modal-content",2,"padding","2%"],[1,"row"],[1,"col-6"],[1,"col-sm-6"],[2,"font-weight","bold"],[2,"color","red"],[1,"quantity",2,"border","1px solid black","text-align","center"],[1,"description",2,"border","1px solid black","text-align","center"],[1,"price",2,"border","1px solid black","text-align","center"],[1,"t-price",2,"border","1px solid black","text-align","center"]],template:function(e,c){if(1&e&&(d.cc(0,"div",0),d.cc(1,"div",1),d.cc(2,"div",2),d.cc(3,"div",3),d.cc(4,"h4"),d.Mc(5,"TOTAL SALES : \u20b9 "),d.cc(6,"span",4),d.Mc(7),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(8,"div",5),d.cc(9,"div",3),d.Mc(10," PAYMENT OPTION "),d.cc(11,"select",6),d.kc("ngModelChange",(function(e){return c.selectedPaymentMode=e}))("change",(function(e){return c.onOptionSelect("payment",e.target.value)})),d.Kc(12,g,3,2,"ng-container",7),d.bc(),d.bc(),d.bc(),d.cc(13,"div",5),d.cc(14,"div",3),d.Mc(15," BILL TYPE "),d.cc(16,"select",8),d.kc("ngModelChange",(function(e){return c.selectedDeliveryMode=e}))("change",(function(e){return c.onOptionSelect("delivery",e.target.value)})),d.Kc(17,v,3,2,"ng-container",7),d.bc(),d.bc(),d.bc(),d.cc(18,"div",5),d.cc(19,"div",3),d.Mc(20," BILL BY "),d.cc(21,"select",9),d.kc("ngModelChange",(function(e){return c.selectedUserName=e}))("change",(function(e){return c.onOptionSelect("user",e.target.value)})),d.Kc(22,M,3,2,"ng-container",7),d.bc(),d.bc(),d.bc(),d.cc(23,"div",5),d.cc(24,"div",3),d.Mc(25," SEARCH BY NAME "),d.cc(26,"input",10),d.kc("ngModelChange",(function(e){return c.searchedName=e}))("ngModelChange",(function(){return c.onCustomerChange()})),d.bc(),d.bc(),d.bc(),d.cc(27,"div",11),d.cc(28,"div",3),d.Mc(29," FROM DATE "),d.cc(30,"input",12),d.kc("ngModelChange",(function(e){return c.selectedStartDate=e}))("change",(function(e){return c.changedDate("start",e.target.value)})),d.bc(),d.bc(),d.bc(),d.cc(31,"div",11),d.cc(32,"div",3),d.Mc(33," TO DATE "),d.cc(34,"input",13),d.kc("ngModelChange",(function(e){return c.selectedEndDate=e}))("change",(function(e){return c.changedDate("end",e.target.value)})),d.bc(),d.bc(),d.bc(),d.cc(35,"div",14),d.cc(36,"div",15),d.cc(37,"button",16),d.kc("click",(function(){return c.onDateSelect()})),d.cc(38,"b"),d.Mc(39,"SEARCH"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(40,"div",17),d.cc(41,"div",3),d.Mc(42," SELECT PER PAGE "),d.cc(43,"select",6),d.kc("ngModelChange",(function(e){return c.selectedPerPage=e}))("change",(function(e){return c.onLimitSelect(e.target.value)})),d.cc(44,"option",18),d.Mc(45,"10"),d.bc(),d.cc(46,"option",19),d.Mc(47,"25"),d.bc(),d.cc(48,"option",20),d.Mc(49,"50"),d.bc(),d.cc(50,"option",21),d.Mc(51,"100"),d.bc(),d.cc(52,"option",22),d.Mc(53,"Show All"),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(54,"div",23),d.cc(55,"div",24),d.cc(56,"table",25),d.cc(57,"thead"),d.cc(58,"tr"),d.Kc(59,y,3,0,"ng-container",26),d.Kc(60,_,3,0,"ng-container",26),d.cc(61,"th",27),d.Mc(62,"Bill ID"),d.bc(),d.cc(63,"th",27),d.Mc(64,"Token ID"),d.bc(),d.cc(65,"th",27),d.Mc(66,"Price "),d.cc(67,"a",28),d.kc("click",(function(){return c.changeOrder("total_price")})),d.Xb(68,"i",29),d.bc(),d.bc(),d.cc(69,"th",27),d.Mc(70,"Payment Option "),d.cc(71,"a",28),d.kc("click",(function(){return c.changeOrder("payment_mode")})),d.Xb(72,"i",29),d.bc(),d.bc(),d.cc(73,"th",27),d.Mc(74,"Bill Type "),d.cc(75,"a",28),d.kc("click",(function(){return c.changeOrder("delivery_mode")})),d.Xb(76,"i",29),d.bc(),d.bc(),d.cc(77,"th",27),d.Mc(78,"Customer "),d.cc(79,"a",28),d.kc("click",(function(){return c.changeOrder("customer_name")})),d.Xb(80,"i",29),d.bc(),d.bc(),d.cc(81,"th",27),d.Mc(82,"Phone"),d.bc(),d.cc(83,"th",27),d.Mc(84,"Alternative Phone"),d.bc(),d.cc(85,"th",27),d.Mc(86,"Address"),d.bc(),d.cc(87,"th",27),d.Mc(88,"Bill Date "),d.bc(),d.cc(89,"th",27),d.Mc(90,"Created At"),d.bc(),d.cc(91,"th",27),d.Mc(92,"In Cook Slot At"),d.bc(),d.cc(93,"th",27),d.Mc(94,"Cooked At "),d.bc(),d.cc(95,"th",27),d.Mc(96,"Delivered At "),d.bc(),d.cc(97,"th",27),d.Mc(98,"Bill By "),d.cc(99,"a",28),d.kc("click",(function(){return c.changeOrder("user_name")})),d.Xb(100,"i",29),d.bc(),d.bc(),d.Kc(101,D,3,0,"ng-container",26),d.Kc(102,k,3,0,"ng-container",26),d.bc(),d.bc(),d.Kc(103,x,3,8,"tbody",30),d.Kc(104,S,4,1,"ng-template",null,31,d.Lc),d.bc(),d.cc(106,"pagination-controls",32),d.kc("pageChange",(function(e){return c.getBillList(e)})),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(107,"div",33,34),d.cc(109,"div",35),d.Kc(110,I,50,9,"div",36),d.bc(),d.cc(111,"div",37),d.cc(112,"div",38),d.cc(113,"p",39),d.cc(114,"span",40),d.Mc(115,"LOVE \u2764\ufe0f DESI CHINESE"),d.bc(),d.Xb(116,"br"),d.Mc(117,"A.C. Multi Cuisine Restaurant "),d.Xb(118,"br"),d.Mc(119,"Free Home Delivery "),d.Xb(120,"br"),d.Mc(121),d.Xb(122,"br"),d.cc(123,"B"),d.Mc(124),d.bc(),d.Xb(125,"br"),d.Mc(126,"lovedesichinese@gmail.com "),d.Xb(127,"br"),d.cc(128,"B"),d.Mc(129,"Visit us at"),d.bc(),d.Mc(130,": www.lovedesichinese.com "),d.Xb(131,"br"),d.cc(132,"B"),d.Mc(133),d.bc(),d.bc(),d.cc(134,"p",41),d.cc(135,"B"),d.Mc(136),d.bc(),d.bc(),d.cc(137,"p",41),d.cc(138,"B"),d.Mc(139,"Date:"),d.bc(),d.Mc(140),d.pc(141,"date"),d.bc(),d.cc(142,"p",41),d.cc(143,"B"),d.Mc(144,"No:"),d.bc(),d.Mc(145),d.bc(),d.cc(146,"p",41),d.cc(147,"B"),d.Mc(148,"Name:"),d.bc(),d.Mc(149),d.bc(),d.cc(150,"p",41),d.cc(151,"B"),d.Mc(152,"Phone:"),d.bc(),d.Mc(153),d.bc(),d.cc(154,"p",41),d.cc(155,"B"),d.Mc(156,"Alternate Phone:"),d.bc(),d.Mc(157),d.bc(),d.cc(158,"p",41),d.cc(159,"B"),d.Mc(160,"Address:"),d.bc(),d.Mc(161),d.bc(),d.cc(162,"p",41),d.cc(163,"B"),d.Mc(164,"Delivery Mode:"),d.bc(),d.Mc(165),d.bc(),d.cc(166,"p",42),d.cc(167,"B"),d.Mc(168,"Payment Mode:"),d.bc(),d.Mc(169),d.bc(),d.cc(170,"table",42),d.cc(171,"thead"),d.cc(172,"tr"),d.cc(173,"th",43),d.Mc(174,"Q."),d.bc(),d.cc(175,"th",44),d.Mc(176,"Item"),d.bc(),d.cc(177,"th",45),d.Mc(178,"Price"),d.bc(),d.cc(179,"th",46),d.Mc(180,"T. Price"),d.bc(),d.bc(),d.bc(),d.cc(181,"tbody"),d.Kc(182,E,10,4,"ng-container",7),d.cc(183,"tr"),d.Xb(184,"td",47),d.Xb(185,"td",48),d.cc(186,"td",49),d.cc(187,"B"),d.Mc(188,"TOTAL"),d.bc(),d.bc(),d.cc(189,"td",50),d.cc(190,"B"),d.Mc(191),d.bc(),d.bc(),d.bc(),d.bc(),d.bc(),d.cc(192,"p",51),d.Mc(193),d.bc(),d.cc(194,"p",51),d.Mc(195),d.bc(),d.cc(196,"p",42),d.Mc(197),d.bc(),d.cc(198,"p",52),d.cc(199,"B"),d.Mc(200,"Corporate orders / Designer Birthday Cakes / Catering Services need to pre informed."),d.bc(),d.bc(),d.cc(201,"p",53),d.cc(202,"B"),d.Mc(203,"Thank You Visit Again."),d.bc(),d.bc(),d.bc(),d.bc(),d.bc()),2&e){var t=d.Dc(105);d.Jb(7),d.Nc(c.total),d.Jb(4),d.vc("ngModel",c.selectedPaymentMode),d.Jb(1),d.vc("ngForOf",c.payment),d.Jb(4),d.vc("ngModel",c.selectedDeliveryMode),d.Jb(1),d.vc("ngForOf",c.delivery),d.Jb(4),d.vc("ngModel",c.selectedUserName),d.Jb(1),d.vc("ngForOf",c.userNameList),d.Jb(4),d.vc("ngModel",c.searchedName),d.Jb(4),d.vc("ngModel",c.selectedStartDate),d.Jb(4),d.vc("ngModel",c.selectedEndDate),d.Jb(9),d.vc("ngModel",c.selectedPerPage),d.Jb(16),d.vc("ngIf","operator"===c.role),d.Jb(1),d.vc("ngIf","operator"===c.role),d.Jb(8),d.Nb("fa-caret-down",c.sortFields.total_price)("fa-caret-up",!c.sortFields.total_price),d.Jb(4),d.Nb("fa-caret-down",c.sortFields.payment_mode)("fa-caret-up",!c.sortFields.payment_mode),d.Jb(4),d.Nb("fa-caret-down",c.sortFields.delivery_mode)("fa-caret-up",!c.sortFields.delivery_mode),d.Jb(4),d.Nb("fa-caret-down",c.sortFields.customer_name)("fa-caret-up",!c.sortFields.customer_name),d.Jb(20),d.Nb("fa-caret-down",c.sortFields.user_name)("fa-caret-up",!c.sortFields.user_name),d.Jb(1),d.vc("ngIf","admin"===c.role),d.Jb(1),d.vc("ngIf","admin"===c.role),d.Jb(1),d.vc("ngIf",null==c.billList?null:c.billList.length)("ngIfElse",t),d.Jb(7),d.vc("ngIf",c.detail),d.Jb(11),d.Oc("",null==c.branchDetail?null:c.branchDetail.branch_address," "),d.Jb(3),d.Pc("All Days Open ",null==c.branchDetail?null:c.branchDetail.branch_start_timing," to ",null==c.branchDetail?null:c.branchDetail.branch_end_timing,""),d.Jb(9),d.Nc(null==c.branchDetail?null:c.branchDetail.branch_phone),d.Jb(3),d.Oc("Token no: ",null==c.printDetail?null:c.printDetail.token_id,""),d.Jb(4),d.Oc(" ",d.rc(141,56,null==c.printDetail?null:c.printDetail.createdOn,"medium"),""),d.Jb(5),d.Oc(" ",null==c.printDetail?null:c.printDetail.bill_id,""),d.Jb(4),d.Oc(" ",null!=c.printDetail&&c.printDetail.customer_name?null==c.printDetail?null:c.printDetail.customer_name:"",""),d.Jb(4),d.Oc(" ",null!=c.printDetail&&c.printDetail.customer_phone?null==c.printDetail?null:c.printDetail.customer_phone:"",""),d.Jb(4),d.Oc(" ",null!=c.printDetail&&c.printDetail.customer_alternative_phone?null==c.printDetail?null:c.printDetail.customer_alternative_phone:"",""),d.Jb(4),d.Oc(" ",null!=c.printDetail&&c.printDetail.customer_address?null==c.printDetail?null:c.printDetail.customer_address:"",""),d.Jb(4),d.Oc(" ",null==c.printDetail?null:c.printDetail.delivery_mode,""),d.Jb(4),d.Oc(" ",null==c.printDetail?null:c.printDetail.payment_mode,""),d.Jb(13),d.vc("ngForOf",null==c.printDetail?null:c.printDetail.products),d.Jb(9),d.Oc("\u20b9 ",null==c.printDetail?null:c.printDetail.total_price,""),d.Jb(2),d.Oc("# ",null==c.branchDetail?null:c.branchDetail.footer_1,""),d.Jb(2),d.Oc("# ",null==c.branchDetail?null:c.branchDetail.footer_2,""),d.Jb(2),d.Oc("# ",null==c.branchDetail?null:c.branchDetail.footer_3,"")}},directives:[i.q,i.h,i.k,n.k,i.b,i.l,i.s,n.l,m.c],pipes:[n.d,m.b,n.r],styles:["[_ngcontent-%COMP%]::-webkit-datetime-edit{padding:1em}[_ngcontent-%COMP%]::-webkit-datetime-edit-text{padding:0 .3em}[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:green}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:14px;text-decoration:none}@media print{.main-container[_ngcontent-%COMP%]{visibility:hidden}.print-container[_ngcontent-%COMP%]{visibility:visible}}"]}),T)}],K=((F=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ub({type:F}),F.\u0275inj=d.Tb({factory:function(e){return new(e||F)},imports:[[a.i.forChild(X)],a.i]}),F),Y=t("wloI"),U=t("YUSg"),Z=t("i2NW"),$=t("X+I5");t.d(c,"BillingModule",(function(){return W}));var q,W=((q=function e(){_classCallCheck(this,e)}).\u0275mod=d.Ub({type:q}),q.\u0275inj=d.Tb({factory:function(e){return new(e||q)},providers:[$.a],imports:[[n.b,i.d,i.o,K,U.a,U.b,Z.a,Y.a,m.a]]}),q)}}]);