function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{sUg5:function(t,e,r){"use strict";r.r(e);var n=r("ofXK"),i=r("tyNb"),o=r("wd/R"),c=r("PSD3"),a=r.n(c),s=r("fXoL"),d=r("pVIR"),l=r("AXIP"),b=r("3Pt+"),u=["closeEditModal"];function f(t,e){if(1&t&&(s.Ub(0,"tr"),s.Ub(1,"td"),s.Ub(2,"B"),s.Ec(3),s.hc(4,"titlecase"),s.Tb(),s.Tb(),s.Ub(5,"td"),s.Ec(6),s.hc(7,"titlecase"),s.Tb(),s.Ub(8,"td"),s.Ec(9),s.Tb(),s.Ub(10,"td"),s.Ec(11),s.Tb(),s.Tb()),2&t){var r=e.$implicit;s.Bb(3),s.Fc(s.ic(4,6,r.ingredient)),s.Bb(3),s.Fc(s.ic(7,8,r.category)),s.Bb(3),s.Hc("",r.quantity_by_stock,"(",r.unit,")"),s.Bb(2),s.Hc("",r.quantity_by_order,"(",r.unit,")")}}function h(t,e){if(1&t&&(s.Ub(0,"tbody",17),s.Cc(1,f,12,10,"tr",18),s.Tb()),2&t){var r=s.gc();s.Bb(1),s.nc("ngForOf",r.reportList)}}function g(t,e){if(1&t&&(s.Ub(0,"tbody"),s.Ub(1,"tr"),s.Ub(2,"td",19),s.Ec(3),s.Tb(),s.Tb(),s.Tb()),2&t){var r=s.gc();s.Bb(3),s.Fc(r.response)}}var p,y,v=[{path:"",component:(p=function(){function t(e,r,n){var i=this;_classCallCheck(this,t),this.router=e,this.foodService=r,this.ui=n,this.name=[],this.sortOrder=!1,this.sortFields={ingredient:!0,category:!0,quantity_by_stock:!0,quantity_by_order:!0},this.reportList=[],this.response="No Data to Show",this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),i.router.navigate(["/login"])}}return _createClass(t,[{key:"ngOnInit",value:function(){this.getAllReport()}},{key:"getAllReport",value:function(){var t=this;this.ui.loader.show(),this.foodService.getAllReport().subscribe((function(e){e.data&&(t.reportList=e.data),t.ui.loader.hide()}),(function(e){t.ui.loader.hide()}))}},{key:"onDateSelect",value:function(){var t=this;void 0===this.selectedStartDate?a.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500}):void 0===this.selectedEndDate?a.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):(this.ui.loader.show(),this.foodService.getReportByDate("".concat(o(this.selectedStartDate).format("YYYY-DD-MM"),"T00:00:00.000Z"),"".concat(o(this.selectedEndDate).format("YYYY-DD-MM"),"T00:00:00.000Z")).subscribe((function(e){t.reportList=[],e.data&&(t.reportList=[],t.reportList=e.data),t.ui.loader.hide()}),(function(e){t.ui.loader.hide()})))}},{key:"changeOrder",value:function(t){var e=this;this.sortOrder=!this.sortOrder,this.field=t,this.sortFields[t]=this.sortOrder,this.reportList.sort((function(r,n){return"quantity_by_order"===t||"quantity_by_stock"===t?e.sortOrder?n[t]-r[t]:r[t]-n[t]:e.sortOrder?n[t].localeCompare(r[t]):r[t].localeCompare(n[t])}))}},{key:"changedDate",value:function(t,e){"start"===t?this.selectedStartDate=e:"end"===t&&(this.selectedEndDate=e),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}]),t}(),p.\u0275fac=function(t){return new(t||p)(s.Ob(i.e),s.Ob(d.a),s.Ob(l.a))},p.\u0275cmp=s.Ib({type:p,selectors:[["app-ingredient-report"]],viewQuery:function(t,e){var r;1&t&&s.Jc(u,!0),2&t&&s.uc(r=s.dc())&&(e.closeEditModal=r.first)},decls:39,vars:20,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3","cus-srch"],[1,"form-group"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[2,"width","100%"],[4,"ngFor","ngForOf"],["colspan","100%",1,"text-center"]],template:function(t,e){if(1&t&&(s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Ub(3,"div",3),s.Ec(4," FROM DATE "),s.Ub(5,"input",4),s.cc("ngModelChange",(function(t){return e.selectedStartDate=t}))("change",(function(t){return e.changedDate("start",t.target.value)})),s.Tb(),s.Tb(),s.Tb(),s.Ub(6,"div",2),s.Ub(7,"div",3),s.Ec(8," TO DATE "),s.Ub(9,"input",5),s.cc("ngModelChange",(function(t){return e.selectedEndDate=t}))("change",(function(t){return e.changedDate("end",t.target.value)})),s.Tb(),s.Tb(),s.Tb(),s.Ub(10,"div",6),s.Ub(11,"div",7),s.Ub(12,"button",8),s.cc("click",(function(){return e.onDateSelect()})),s.Ub(13,"b"),s.Ec(14,"SEARCH"),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Ub(15,"div",9),s.Ub(16,"div",10),s.Ub(17,"table",11),s.Ub(18,"thead"),s.Ub(19,"tr"),s.Ub(20,"th",12),s.Ec(21,"Ingredient Name"),s.Ub(22,"a",13),s.cc("click",(function(){return e.changeOrder("ingredient")})),s.Pb(23,"i",14),s.Tb(),s.Tb(),s.Ub(24,"th",12),s.Ec(25,"Category"),s.Ub(26,"a",13),s.cc("click",(function(){return e.changeOrder("category")})),s.Pb(27,"i",14),s.Tb(),s.Tb(),s.Ub(28,"th",12),s.Ec(29,"Stock out (By Stock Manager)"),s.Ub(30,"a",13),s.cc("click",(function(){return e.changeOrder("quantity_by_stock")})),s.Pb(31,"i",14),s.Tb(),s.Tb(),s.Ub(32,"th",12),s.Ec(33,"Stock out (By Order)"),s.Ub(34,"a",13),s.cc("click",(function(){return e.changeOrder("quantity_by_order")})),s.Pb(35,"i",14),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Cc(36,h,2,1,"tbody",15),s.Cc(37,g,4,1,"ng-template",null,16,s.Dc),s.Tb(),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t){var r=s.vc(38);s.Bb(5),s.nc("ngModel",e.selectedStartDate),s.Bb(4),s.nc("ngModel",e.selectedEndDate),s.Bb(14),s.Fb("fa-caret-down",e.sortFields.ingredient)("fa-caret-up",!e.sortFields.ingredient),s.Bb(4),s.Fb("fa-caret-down",e.sortFields.category)("fa-caret-up",!e.sortFields.category),s.Bb(4),s.Fb("fa-caret-down",e.sortFields.quantity_by_stock)("fa-caret-up",!e.sortFields.quantity_by_stock),s.Bb(4),s.Fb("fa-caret-down",e.sortFields.quantity_by_order)("fa-caret-up",!e.sortFields.quantity_by_order),s.Bb(1),s.nc("ngIf",null==e.reportList?null:e.reportList.length)("ngIfElse",r)}},directives:[b.b,b.g,b.j,n.k,n.j],pipes:[n.q],styles:[""]}),p)}],T=((y=function t(){_classCallCheck(this,t)}).\u0275mod=s.Mb({type:y}),y.\u0275inj=s.Lb({factory:function(t){return new(t||y)},imports:[[i.i.forChild(v)],i.i]}),y);r.d(e,"IngredientReportModule",(function(){return _}));var U,_=((U=function t(){_classCallCheck(this,t)}).\u0275mod=s.Mb({type:U}),U.\u0275inj=s.Lb({factory:function(t){return new(t||U)},imports:[[n.b,T,b.c]]}),U)}}]);