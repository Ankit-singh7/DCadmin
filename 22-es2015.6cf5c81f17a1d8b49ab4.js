(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{gvMv:function(t,e,c){"use strict";c.r(e);var o=c("ofXK"),i=c("tyNb"),r=c("wd/R"),n=c("PSD3"),s=c.n(n),a=c("fXoL"),l=c("pVIR"),d=c("AXIP"),h=c("3Pt+");const u=["closeEditModal"];function f(t,e){if(1&t&&(a.ac(0),a.cc(1,"td"),a.cc(2,"B"),a.Lc(3),a.pc(4,"titlecase"),a.bc(),a.bc(),a.cc(5,"td"),a.Lc(6),a.bc(),a.Zb()),2&t){const t=a.oc().$implicit;a.Jb(3),a.Mc(a.qc(4,2,t.food_name)),a.Jb(3),a.Mc(t.quantity)}}function b(t,e){if(1&t&&(a.cc(0,"tr"),a.Jc(1,f,7,4,"ng-container",19),a.bc()),2&t){const t=e.$implicit;a.Jb(1),a.uc("ngIf",t.quantity>0)}}function g(t,e){if(1&t&&(a.cc(0,"tbody",17),a.Jc(1,b,2,1,"tr",18),a.bc()),2&t){const t=a.oc();a.Jb(1),a.uc("ngForOf",t.reportList)}}function p(t,e){if(1&t&&(a.cc(0,"tbody"),a.cc(1,"tr"),a.cc(2,"td",20),a.Lc(3),a.bc(),a.bc(),a.bc()),2&t){const t=a.oc();a.Jb(3),a.Mc(t.response)}}const m=[{path:"",component:(()=>{class t{constructor(t,e,c){this.router=t,this.foodService=e,this.ui=c,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,food_name:!0},this.reportList=[],this.response="No Data to Show",this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=t=>{this.selectedPerPage=t,this.getAllReport()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllReport()}getAllReport(){let t={startDate:r(this.selectedStartDate).format("DD-MM-YYYY"),endDate:r(this.selectedEndDate).format("DD-MM-YYYY")},e="";for(let c in t)t[c]&&(e=`${e}${c}=${t[c]}&`);this.ui.loader.show(),this.foodService.getAllSalesReport(e).subscribe(t=>{if(this.reportList=[],t.data){let e=JSON.parse(JSON.stringify(t.data)),c=e.map(t=>t.ingredient_id);console.log(c);for(let t=0;t<e.length;t++){let c=e.filter(c=>c.food_id===e[t].food_id);if(console.log(c),c.length>1){let t=JSON.parse(JSON.stringify(c[0])),e=0;for(let o=0;o<c.length;o++)e+=c[o].quantity;t.quantity=e,this.reportList.some(e=>e.food_id===t.food_id)||this.reportList.push(Object.assign({},t))}else this.reportList.push(c[0])}console.log(this.reportList)}this.ui.loader.hide()},t=>{this.ui.loader.hide()})}onDateSelect(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():s.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):s.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}changeOrder(t){this.sortOrder=!this.sortOrder,this.field=t,this.sortFields[t]=this.sortOrder,this.reportList.sort((e,c)=>"quantity"===t||"quantity"===t?this.sortOrder?c[t]-e[t]:e[t]-c[t]:this.sortOrder?c[t].localeCompare(e[t]):e[t].localeCompare(c[t]))}changedDate(t,e){"start"===t?this.selectedStartDate=e:"end"===t&&(this.selectedEndDate=e),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}return t.\u0275fac=function(e){return new(e||t)(a.Wb(i.e),a.Wb(l.a),a.Wb(d.a))},t.\u0275cmp=a.Qb({type:t,selectors:[["app-sales-report"]],viewQuery:function(t,e){var c;1&t&&a.Qc(u,!0),2&t&&a.Bc(c=a.lc())&&(e.closeEditModal=c.first)},decls:31,vars:12,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3","cus-srch"],[1,"form-group"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[2,"width","100%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","100%",1,"text-center"]],template:function(t,e){if(1&t&&(a.cc(0,"div",0),a.cc(1,"div",1),a.cc(2,"div",2),a.cc(3,"div",3),a.Lc(4," FROM DATE "),a.cc(5,"input",4),a.kc("ngModelChange",(function(t){return e.selectedStartDate=t}))("change",(function(t){return e.changedDate("start",t.target.value)})),a.bc(),a.bc(),a.bc(),a.cc(6,"div",2),a.cc(7,"div",3),a.Lc(8," TO DATE "),a.cc(9,"input",5),a.kc("ngModelChange",(function(t){return e.selectedEndDate=t}))("change",(function(t){return e.changedDate("end",t.target.value)})),a.bc(),a.bc(),a.bc(),a.cc(10,"div",6),a.cc(11,"div",7),a.cc(12,"button",8),a.kc("click",(function(){return e.onDateSelect()})),a.cc(13,"b"),a.Lc(14,"SEARCH"),a.bc(),a.bc(),a.bc(),a.bc(),a.cc(15,"div",9),a.cc(16,"div",10),a.cc(17,"table",11),a.cc(18,"thead"),a.cc(19,"tr"),a.cc(20,"th",12),a.Lc(21,"Product Name"),a.cc(22,"a",13),a.kc("click",(function(){return e.changeOrder("food_name")})),a.Xb(23,"i",14),a.bc(),a.bc(),a.cc(24,"th",12),a.Lc(25,"Quantity Sold"),a.cc(26,"a",13),a.kc("click",(function(){return e.changeOrder("quantity")})),a.Xb(27,"i",14),a.bc(),a.bc(),a.bc(),a.bc(),a.Jc(28,g,2,1,"tbody",15),a.Jc(29,p,4,1,"ng-template",null,16,a.Kc),a.bc(),a.bc(),a.bc(),a.bc(),a.bc()),2&t){const t=a.Cc(30);a.Jb(5),a.uc("ngModel",e.selectedStartDate),a.Jb(4),a.uc("ngModel",e.selectedEndDate),a.Jb(14),a.Nb("fa-caret-down",e.sortFields.food_name)("fa-caret-up",!e.sortFields.food_name),a.Jb(4),a.Nb("fa-caret-down",e.sortFields.quantity)("fa-caret-up",!e.sortFields.quantity),a.Jb(1),a.uc("ngIf",null==e.reportList?null:e.reportList.length)("ngIfElse",t)}},directives:[h.b,h.h,h.k,o.l,o.k],pipes:[o.r],styles:[""]}),t})()}];let D=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(e){return new(e||t)},imports:[[i.i.forChild(m)],i.i]}),t})();var y=c("oOf3");c.d(e,"SalesReportModule",(function(){return S}));let S=(()=>{class t{}return t.\u0275mod=a.Ub({type:t}),t.\u0275inj=a.Tb({factory:function(e){return new(e||t)},imports:[[o.b,h.d,D,y.a]]}),t})()}}]);