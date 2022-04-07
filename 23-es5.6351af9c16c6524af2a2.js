function _classCallCheck(c,e){if(!(c instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(c,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(c,o.key,o)}}function _createClass(c,e,t){return e&&_defineProperties(c.prototype,e),t&&_defineProperties(c,t),c}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"59uU":function(c,e,t){"use strict";t.r(e);var o=t("ofXK"),i=t("3Pt+"),n=t("tyNb"),a=t("PSD3"),d=t.n(a),r=t("fXoL"),l=t("f4UJ"),s=t("AXIP"),b=t("X+I5"),u=["closeEditModal"],f=["closeAddModal"],p=["branchName"];function h(c,e){if(1&c){var t=r.dc();r.cc(0,"tr"),r.cc(1,"td"),r.cc(2,"B"),r.Mc(3),r.pc(4,"titlecase"),r.bc(),r.bc(),r.cc(5,"td"),r.Mc(6),r.bc(),r.cc(7,"td"),r.Mc(8),r.bc(),r.cc(9,"td"),r.cc(10,"button",41),r.kc("click",(function(){r.Fc(t);var c=e.$implicit;return r.oc(2).getfoodDetail(c.food_id)})),r.Xb(11,"i",42),r.bc(),r.cc(12,"button",43),r.kc("click",(function(){r.Fc(t);var c=e.index,o=e.$implicit;return r.oc(2).deleteFood(c,o.food_id)})),r.Xb(13,"i",44),r.bc(),r.bc(),r.bc()}if(2&c){var o=e.$implicit;r.Jb(3),r.Nc(r.qc(4,3,o.food_name)),r.Jb(3),r.Nc(o.price),r.Jb(2),r.Nc(o.food_type)}}function v(c,e){if(1&c&&(r.cc(0,"tbody"),r.Kc(1,h,14,5,"tr",40),r.pc(2,"filter"),r.bc()),2&c){var t=r.oc();r.Jb(1),r.vc("ngForOf",r.sc(2,1,t.foodList,"food_name",t.bname))}}function g(c,e){if(1&c&&(r.cc(0,"tbody"),r.cc(1,"tr"),r.cc(2,"td",45),r.Mc(3),r.bc(),r.bc(),r.bc()),2&c){var t=r.oc();r.Jb(3),r.Nc(t.response)}}function m(c,e){if(1&c){var t=r.dc();r.ac(0),r.cc(1,"form",19,20),r.cc(3,"div",21),r.cc(4,"div",22),r.cc(5,"h5"),r.Mc(6,"Edit a Food"),r.bc(),r.bc(),r.cc(7,"div",23),r.cc(8,"div",24),r.cc(9,"input",25),r.kc("ngModelChange",(function(c){return r.Fc(t),r.oc().detail.food_name=c})),r.bc(),r.bc(),r.bc(),r.cc(10,"div",23),r.cc(11,"div",24),r.cc(12,"div",26),r.cc(13,"div",27),r.cc(14,"label",28),r.Mc(15,"Food Type"),r.bc(),r.bc(),r.cc(16,"select",29),r.kc("ngModelChange",(function(c){return r.Fc(t),r.oc().detail.food_type=c}))("change",(function(c){return r.Fc(t),r.oc().changeFoodType(c.target.value)})),r.cc(17,"option",30),r.Mc(18,"Breakfast"),r.bc(),r.cc(19,"option",31),r.Mc(20,"Lunch"),r.bc(),r.cc(21,"option",32),r.Mc(22,"Dinner"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(23,"div",21),r.cc(24,"div",33),r.cc(25,"div",24),r.cc(26,"input",34),r.kc("ngModelChange",(function(c){return r.Fc(t),r.oc().detail.price=c})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(27,"div",21),r.cc(28,"div",35),r.cc(29,"button",36),r.kc("click",(function(){r.Fc(t);var c=r.oc();return c.editFood(c.detail.food_id)})),r.Mc(30,"SUBMIT"),r.bc(),r.bc(),r.bc(),r.bc(),r.Zb()}if(2&c){var o=r.Dc(2),i=r.oc();r.Jb(9),r.vc("ngModel",i.detail.food_name),r.Jb(7),r.vc("ngModel",i.detail.food_type),r.Jb(10),r.vc("ngModel",i.detail.price),r.Jb(3),r.vc("disabled",!o.valid)}}var M,y,k=[{path:"",component:(M=function(){function c(e,t,o){var i=this;_classCallCheck(this,c),this.router=e,this.branchService=t,this.ui=o,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.foodList=[],this.data={food_name:"",price:"",food_type:""},this.hours=[],this.minutes=[],this.bname="",this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),i.router.navigate(["/login"])}}return _createClass(c,[{key:"ngOnInit",value:function(){this.getFoodList()}},{key:"titleCase",value:function(c){for(var e=c.toLowerCase().split(" "),t=0;t<e.length;t++)e[t]=e[t][0].toUpperCase()+e[t].slice(1);return e}},{key:"getFoodList",value:function(){var c=this;this.branchService.getFoodList().subscribe((function(e){c.foodList=e.data?e.data:[]}))}},{key:"addFood",value:function(){var c=this;this.ui.loader.show(),this.branchService.addFood(this.data).subscribe((function(e){c.data.food_name="",c.data.price="",c.data.food_type="",d.a.fire({icon:"success",title:"Food Added Successfully",showConfirmButton:!1,timer:1500}),c.getFoodList(),c.closeAddModal.nativeElement.click(),c.ui.loader.hide()}),(function(e){return c.ui.loader.hide()}))}},{key:"changeOrder",value:function(c){var e=this;this.sortOrder=!this.sortOrder,this.field=c,this.foodList.sort((function(t,o){return e.sortOrder?o[c].localeCompare(t[c]):t[c].localeCompare(o[c])}))}},{key:"deleteFood",value:function(c,e){var t=this;d.a.fire({title:"Do you want to delete this Popular Food?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(o){o.isConfirmed&&(t.ui.loader.show(),t.branchService.deleteFood(e).subscribe((function(e){d.a.fire({icon:"success",title:"Food Deleted Successfully",showConfirmButton:!1,timer:1500}),t.foodList.splice(c,1),t.ui.loader.hide()}),(function(c){return t.ui.loader.hide()})))}))}},{key:"getfoodDetail",value:function(c){var e=this;this.branchService.getFoodDetail(c).subscribe((function(c){c.data&&(e.detail=c.data)}))}},{key:"editFood",value:function(c){var e=this;this.ui.loader.show(),this.branchService.editFood(c,this.detail).subscribe((function(c){e.closeEditModal.nativeElement.click(),e.detail={},e.ui.loader.hide(),e.getFoodList()}),(function(c){e.ui.loader.hide()}))}},{key:"changeFoodType",value:function(c){this.data.food_type=c}}]),c}(),M.\u0275fac=function(c){return new(c||M)(r.Wb(n.e),r.Wb(l.a),r.Wb(s.a))},M.\u0275cmp=r.Qb({type:M,selectors:[["app-popular-food"]],viewQuery:function(c,e){var t;1&c&&(r.Rc(u,!0),r.Rc(f,!0),r.Rc(p,!0)),2&c&&(r.Cc(t=r.lc())&&(e.closeEditModal=t.first),r.Cc(t=r.lc())&&(e.closeAddModal=t.first),r.Cc(t=r.lc())&&(e.branchName=t.first))},decls:68,vars:12,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-7","col-sm-12","col-md-2","cus-srch"],["type","text","id","birthday","placeholder","Search By Food","name","bname",1,"form-control","pl-0",3,"ngModel","ngModelChange"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"offset-md-1","col-sm-12","col-md-11"],[1,"form-group","position-relative"],["type","text","placeholder","Food Name","name","bn","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","","id","inputGroupSelect01","name","slot2338989",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Breakfast"],["value","Lunch"],["value","Dinner"],[1,"offset-md-1","col-sm-12","col-md-10"],["type","text","placeholder","Price","name","gst","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],[4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"]],template:function(c,e){if(1&c&&(r.cc(0,"div",0),r.cc(1,"div",1),r.cc(2,"div",2),r.cc(3,"div",3),r.cc(4,"button",4),r.cc(5,"b"),r.Mc(6,"+ Add Popular Food"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(7,"div",5),r.cc(8,"div",3),r.Mc(9," SEARCH BY FOOD "),r.cc(10,"input",6),r.kc("ngModelChange",(function(c){return e.bname=c})),r.bc(),r.bc(),r.bc(),r.cc(11,"div",7),r.cc(12,"div",8),r.cc(13,"table",9),r.cc(14,"thead"),r.cc(15,"tr"),r.cc(16,"th",10),r.Mc(17,"Food Name"),r.cc(18,"a",11),r.kc("click",(function(){return e.changeOrder("food_name")})),r.Xb(19,"i",12),r.bc(),r.bc(),r.cc(20,"th",10),r.Mc(21,"Price"),r.bc(),r.cc(22,"th",10),r.Mc(23,"Food Type"),r.bc(),r.cc(24,"th",10),r.Mc(25,"Action"),r.bc(),r.bc(),r.bc(),r.Kc(26,v,3,5,"tbody",13),r.Kc(27,g,4,1,"ng-template",null,14,r.Lc),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(29,"div",15,16),r.cc(31,"div",17),r.cc(32,"div",18),r.cc(33,"form",19,20),r.cc(35,"div",21),r.cc(36,"div",22),r.cc(37,"h5"),r.Mc(38,"Add a Food"),r.bc(),r.bc(),r.cc(39,"div",23),r.cc(40,"div",24),r.cc(41,"input",25),r.kc("ngModelChange",(function(c){return e.data.food_name=c})),r.bc(),r.bc(),r.bc(),r.cc(42,"div",23),r.cc(43,"div",24),r.cc(44,"div",26),r.cc(45,"div",27),r.cc(46,"label",28),r.Mc(47,"Food Type"),r.bc(),r.bc(),r.cc(48,"select",29),r.kc("ngModelChange",(function(c){return e.data.food_type=c}))("change",(function(c){return e.changeFoodType(c.target.value)})),r.cc(49,"option",30),r.Mc(50,"Breakfast"),r.bc(),r.cc(51,"option",31),r.Mc(52,"Lunch"),r.bc(),r.cc(53,"option",32),r.Mc(54,"Dinner"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(55,"div",21),r.cc(56,"div",33),r.cc(57,"div",24),r.cc(58,"input",34),r.kc("ngModelChange",(function(c){return e.data.price=c})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(59,"div",21),r.cc(60,"div",35),r.cc(61,"button",36),r.kc("click",(function(){return e.addFood()})),r.Mc(62,"SUBMIT"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(63,"div",37,38),r.cc(65,"div",17),r.cc(66,"div",18),r.Kc(67,m,31,4,"ng-container",39),r.bc(),r.bc(),r.bc()),2&c){var t=r.Dc(28),o=r.Dc(34);r.Jb(10),r.vc("ngModel",e.bname),r.Jb(9),r.Nb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),r.Jb(7),r.vc("ngIf",null==e.foodList?null:e.foodList.length)("ngIfElse",t),r.Jb(15),r.vc("ngModel",e.data.food_name),r.Jb(7),r.vc("ngModel",e.data.food_type),r.Jb(10),r.vc("ngModel",e.data.price),r.Jb(3),r.vc("disabled",!o.valid),r.Jb(6),r.vc("ngIf",e.detail)}},directives:[i.b,i.h,i.k,o.l,i.t,i.i,i.j,i.p,i.q,i.l,i.s,o.k],pipes:[b.a,o.r],styles:["div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:14px;text-decoration:none}"]}),M)}],F=((y=function c(){_classCallCheck(this,c)}).\u0275mod=r.Ub({type:y}),y.\u0275inj=r.Tb({factory:function(c){return new(c||y)},imports:[[n.i.forChild(k)],n.i]}),y),C=t("wloI");t.d(e,"PopularFoodModule",(function(){return w}));var _,w=((_=function c(){_classCallCheck(this,c)}).\u0275mod=r.Ub({type:_}),_.\u0275inj=r.Tb({factory:function(c){return new(c||_)},imports:[[o.b,F,i.d,i.o,C.a]]}),_)}}]);