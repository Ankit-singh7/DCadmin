function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var c=0;c<t.length;c++){var n=t[c];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,c){return t&&_defineProperties(e.prototype,t),c&&_defineProperties(e,c),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{gvMv:function(e,t,c){"use strict";c.r(t);var n=c("ofXK"),r=c("tyNb"),o=c("wd/R"),a=c("PSD3"),i=c.n(a),s=c("fXoL"),l=c("pVIR"),d=c("AXIP"),u=c("3Pt+"),f=c("oOf3"),g=["closeEditModal"];function h(e,t){if(1&e&&(s.ac(0),s.cc(1,"td"),s.cc(2,"B"),s.Lc(3),s.pc(4,"titlecase"),s.bc(),s.bc(),s.cc(5,"td"),s.Lc(6),s.bc(),s.Zb()),2&e){var c=s.oc().$implicit;s.Jb(3),s.Mc(s.qc(4,2,c.food_name)),s.Jb(3),s.Mc(c.quantity)}}function p(e,t){if(1&e&&(s.cc(0,"tr"),s.Jc(1,h,7,4,"ng-container",26),s.bc()),2&e){var c=t.$implicit;s.Jb(1),s.uc("ngIf",c.quantity>0)}}var b=function(e,t,c){return{itemsPerPage:e,currentPage:t,totalItems:c}};function v(e,t){if(1&e&&(s.cc(0,"tbody",24),s.Jc(1,p,2,1,"tr",25),s.pc(2,"paginate"),s.bc()),2&e){var c=s.oc();s.Jb(1),s.uc("ngForOf",s.rc(2,1,c.reportList,s.zc(4,b,c.selectedPerPage,c.currentpage,c.totalPage)))}}function m(e,t){if(1&e&&(s.cc(0,"tbody"),s.cc(1,"tr"),s.cc(2,"td",27),s.Lc(3),s.bc(),s.bc(),s.bc()),2&e){var c=s.oc();s.Jb(3),s.Mc(c.response)}}var y,D,L=[{path:"",component:(y=function(){function e(t,c,n){var r=this;_classCallCheck(this,e),this.router=t,this.foodService=c,this.ui=n,this.name=[],this.sortOrder=!1,this.sortFields={quantity:!0,food_name:!0},this.reportList=[],this.response="No Data to Show",this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=function(e){r.selectedPerPage=e,r.getAllReport()},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),r.router.navigate(["/login"])}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getAllReport()}},{key:"getAllReport",value:function(e){var t=this;e&&(this.currentpage=e);var c={startDate:o(this.selectedStartDate).format("DD-MM-YYYY"),endDate:o(this.selectedEndDate).format("DD-MM-YYYY")},n="";for(var r in c)c[r]&&(n="".concat(n).concat(r,"=").concat(c[r],"&"));this.ui.loader.show(),this.foodService.getAllSalesReport(this.selectedPerPage,this.currentpage,n).subscribe((function(e){t.reportList=[],e.data&&function(){var c=JSON.parse(JSON.stringify(e.data.result)),n=c.map((function(e){return e.ingredient_id}));console.log(n);for(var r=function(e){var n=c.filter((function(t){return t.food_id===c[e].food_id}));if(console.log(n),n.length>1){for(var r=JSON.parse(JSON.stringify(n[0])),o=0,a=0;a<n.length;a++)o+=n[a].quantity;r.quantity=o,t.reportList.some((function(e){return e.food_id===r.food_id}))||t.reportList.push(Object.assign({},r))}else t.reportList.push(n[0])},o=0;o<c.length;o++)r(o);t.totalPage=t.reportList.length,console.log(t.reportList)}(),t.ui.loader.hide()}),(function(e){t.ui.loader.hide()}))}},{key:"onDateSelect",value:function(){this.selectedStartDate?this.selectedEndDate?this.getAllReport():i.a.fire({icon:"warning",title:"Please Select End Date",showConfirmButton:!1,timer:1500}):i.a.fire({icon:"warning",title:"Please Select Start Date",showConfirmButton:!1,timer:1500})}},{key:"changeOrder",value:function(e){var t=this;this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.reportList.sort((function(c,n){return"quantity"===e||"quantity"===e?t.sortOrder?n[e]-c[e]:c[e]-n[e]:t.sortOrder?n[e].localeCompare(c[e]):c[e].localeCompare(n[e])}))}},{key:"changedDate",value:function(e,t){"start"===e?this.selectedStartDate=t:"end"===e&&(this.selectedEndDate=t),console.log(this.selectedStartDate),console.log(this.selectedEndDate)}}]),e}(),y.\u0275fac=function(e){return new(e||y)(s.Wb(r.e),s.Wb(l.a),s.Wb(d.a))},y.\u0275cmp=s.Qb({type:y,selectors:[["app-sales-report"]],viewQuery:function(e,t){var c;1&e&&s.Qc(g,!0),2&e&&s.Bc(c=s.lc())&&(t.closeEditModal=c.first)},decls:44,vars:13,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3","cus-srch"],[1,"form-group"],["type","date","id","birthday1","placeholder","From Date","name","selectedSDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["type","date","id","birthday2","placeholder","To Date","name","selectedEDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"col-sm-3"],[1,"form-group","mt-3"],[1,"shortcut-btn","w-100",3,"click"],[1,"offset-md-1","col-sm-2","cus-srch"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],[2,"width","100%"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","100%",1,"text-center"]],template:function(e,t){if(1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.Lc(4," FROM DATE "),s.cc(5,"input",4),s.kc("ngModelChange",(function(e){return t.selectedStartDate=e}))("change",(function(e){return t.changedDate("start",e.target.value)})),s.bc(),s.bc(),s.bc(),s.cc(6,"div",2),s.cc(7,"div",3),s.Lc(8," TO DATE "),s.cc(9,"input",5),s.kc("ngModelChange",(function(e){return t.selectedEndDate=e}))("change",(function(e){return t.changedDate("end",e.target.value)})),s.bc(),s.bc(),s.bc(),s.cc(10,"div",6),s.cc(11,"div",7),s.cc(12,"button",8),s.kc("click",(function(){return t.onDateSelect()})),s.cc(13,"b"),s.Lc(14,"SEARCH"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(15,"div",9),s.cc(16,"div",3),s.Lc(17," SELECT PER PAGE "),s.cc(18,"select",10),s.kc("ngModelChange",(function(e){return t.selectedPerPage=e}))("change",(function(e){return t.onLimitSelect(e.target.value)})),s.cc(19,"option",11),s.Lc(20,"10"),s.bc(),s.cc(21,"option",12),s.Lc(22,"25"),s.bc(),s.cc(23,"option",13),s.Lc(24,"50"),s.bc(),s.cc(25,"option",14),s.Lc(26,"100"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(27,"div",15),s.cc(28,"div",16),s.cc(29,"table",17),s.cc(30,"thead"),s.cc(31,"tr"),s.cc(32,"th",18),s.Lc(33,"Product Name"),s.cc(34,"a",19),s.kc("click",(function(){return t.changeOrder("food_name")})),s.Xb(35,"i",20),s.bc(),s.bc(),s.cc(36,"th",18),s.Lc(37,"Quantity Sold"),s.cc(38,"a",19),s.kc("click",(function(){return t.changeOrder("quantity")})),s.Xb(39,"i",20),s.bc(),s.bc(),s.bc(),s.bc(),s.Jc(40,v,3,8,"tbody",21),s.Jc(41,m,4,1,"ng-template",null,22,s.Kc),s.bc(),s.cc(43,"pagination-controls",23),s.kc("pageChange",(function(e){return t.getAllReport(e)})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc()),2&e){var c=s.Cc(42);s.Jb(5),s.uc("ngModel",t.selectedStartDate),s.Jb(4),s.uc("ngModel",t.selectedEndDate),s.Jb(9),s.uc("ngModel",t.selectedPerPage),s.Jb(17),s.Nb("fa-caret-down",t.sortFields.food_name)("fa-caret-up",!t.sortFields.food_name),s.Jb(4),s.Nb("fa-caret-down",t.sortFields.quantity)("fa-caret-up",!t.sortFields.quantity),s.Jb(1),s.uc("ngIf",null==t.reportList?null:t.reportList.length)("ngIfElse",c)}},directives:[u.b,u.h,u.k,u.q,u.l,u.s,n.l,f.c,n.k],pipes:[f.b,n.r],styles:[""]}),y)}],P=((D=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ub({type:D}),D.\u0275inj=s.Tb({factory:function(e){return new(e||D)},imports:[[r.i.forChild(L)],r.i]}),D);c.d(t,"SalesReportModule",(function(){return k}));var S,k=((S=function e(){_classCallCheck(this,e)}).\u0275mod=s.Ub({type:S}),S.\u0275inj=s.Tb({factory:function(e){return new(e||S)},imports:[[n.b,u.d,P,f.a]]}),S)}}]);