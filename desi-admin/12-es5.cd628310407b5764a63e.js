function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{W68I:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),o=i("tyNb"),d=i("PSD3"),c=i.n(d),r=i("fXoL"),a=i("pVIR"),l=i("AXIP"),b=i("3Pt+"),s=["closeEditModal"],u=["closeAddModal"];function g(e,t){if(1&e){var i=r.Vb();r.Ub(0,"tr"),r.Ub(1,"td"),r.Ub(2,"B"),r.Ec(3),r.hc(4,"titlecase"),r.Tb(),r.Tb(),r.Ub(5,"td"),r.Ec(6),r.Tb(),r.Ub(7,"td"),r.Ec(8),r.Tb(),r.Ub(9,"td"),r.Ec(10),r.Tb(),r.Ub(11,"td"),r.Ub(12,"button",36),r.cc("click",(function(){r.xc(i);var e=t.$implicit;return r.gc(2).getIngredientDetail(e.food_ingredient_id)})),r.Pb(13,"i",37),r.Tb(),r.Ub(14,"button",38),r.cc("click",(function(){r.xc(i);var e=t.index,n=t.$implicit;return r.gc(2).deleteIngredient(e,n.food_ingredient_id)})),r.Pb(15,"i",39),r.Tb(),r.Tb(),r.Tb()}if(2&e){var n=t.$implicit;r.Bb(3),r.Fc(r.ic(4,4,n.ingredient)),r.Bb(3),r.Fc(n.category),r.Bb(2),r.Fc(n.unit),r.Bb(2),r.Fc(n.quantity)}}function f(e,t){if(1&e&&(r.Ub(0,"tbody"),r.Cc(1,g,16,6,"tr",27),r.Tb()),2&e){var i=r.gc();r.Bb(1),r.nc("ngForOf",i.foodIngredientList)}}function h(e,t){if(1&e&&(r.Ub(0,"tbody"),r.Ub(1,"tr"),r.Ub(2,"td",40),r.Ec(3),r.Tb(),r.Tb(),r.Tb()),2&e){var i=r.gc();r.Bb(3),r.Fc(i.response)}}function v(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",41),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit;r.Bb(1),r.nc("value",i.ingredient_category_id),r.Bb(1),r.Fc(i.name)}}function U(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",41),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit;r.Bb(1),r.nc("value",i.ingredient_id),r.Bb(1),r.Fc(i.name)}}function T(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",42),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit;r.Bb(1),r.nc("ngValue",i.unit_id),r.Bb(1),r.Fc(i.name)}}function p(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",49),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit,n=r.gc(2);r.Bb(1),r.nc("value",i.ingredient_category_id)("selected",i.ingredient_category_id===n.detail.category_id),r.Bb(1),r.Fc(i.name)}}function m(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",49),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit,n=r.gc(2);r.Bb(1),r.nc("value",i.ingredient_id)("selected",i.ingredient_id===n.detail.ingredient_id),r.Bb(1),r.Fc(i.name)}}function y(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",49),r.Ec(2),r.Tb(),r.Rb()),2&e){var i=t.$implicit,n=r.gc(2);r.Bb(1),r.nc("value",i.unit_id)("selected",i.unit_id===n.detail.unit_id),r.Bb(1),r.Fc(i.name)}}function I(e,t){if(1&e){var i=r.Vb();r.Ub(0,"form",43,44),r.Ub(2,"div",19),r.Ub(3,"div",20),r.Ub(4,"h5"),r.Ec(5,"Edit Ingredient Detail"),r.Tb(),r.Tb(),r.Ub(6,"div",21),r.Ub(7,"div",22),r.Ub(8,"div",23),r.Ub(9,"div",24),r.Ub(10,"label",25),r.Ec(11,"Select Category"),r.Tb(),r.Tb(),r.Ub(12,"select",45),r.cc("ngModelChange",(function(e){return r.xc(i),r.gc().detail.category_id=e})),r.Cc(13,p,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(14,"div",21),r.Ub(15,"div",22),r.Ub(16,"div",23),r.Ub(17,"div",24),r.Ub(18,"label",25),r.Ec(19,"Select Ingredient"),r.Tb(),r.Tb(),r.Ub(20,"select",46),r.cc("ngModelChange",(function(e){return r.xc(i),r.gc().detail.ingredient_id=e})),r.Cc(21,m,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(22,"div",21),r.Ub(23,"div",22),r.Ub(24,"div",23),r.Ub(25,"div",24),r.Ub(26,"label",25),r.Ec(27,"Select Unit"),r.Tb(),r.Tb(),r.Ub(28,"select",47),r.cc("ngModelChange",(function(e){return r.xc(i),r.gc().detail.unit_id=e})),r.Cc(29,y,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(30,"div",21),r.Ub(31,"div",22),r.Ub(32,"input",48),r.cc("ngModelChange",(function(e){return r.xc(i),r.gc().detail.quantity=e})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(33,"div",19),r.Ub(34,"div",31),r.Ub(35,"button",32),r.cc("click",(function(){r.xc(i);var e=r.gc();return e.editIngredient(e.detail.food_ingredient_id)})),r.Ec(36,"EDIT"),r.Tb(),r.Tb(),r.Tb(),r.Tb()}if(2&e){var n=r.vc(1),o=r.gc();r.Bb(12),r.nc("ngModel",o.detail.category_id),r.Bb(1),r.nc("ngForOf",o.categoryList),r.Bb(7),r.nc("ngModel",o.detail.ingredient_id),r.Bb(1),r.nc("ngForOf",o.ingredientList),r.Bb(7),r.nc("ngModel",o.detail.unit_id),r.Bb(1),r.nc("ngForOf",o.unitList),r.Bb(3),r.nc("ngModel",o.detail.quantity),r.Bb(3),r.nc("disabled",!n.valid)}}var C,M,S=[{path:"",component:(C=function(){function e(t,i,n,o){var d=this;_classCallCheck(this,e),this.router=t,this.foodService=i,this.route=n,this.ui=o,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.ingredientList=[],this.mainIngrdientList=[],this.unitList=[],this.categoryList=[],this.foodIngredientList=[],this.getAllUnit=function(){d.foodService.getUnitList().subscribe((function(e){e.data&&(d.unitList=e.data)}),(function(e){console.log(e)}))},this.getAllCategory=function(){d.foodService.getIngredientCategoryList().subscribe((function(e){e.data&&(d.categoryList=e.data)}),(function(e){console.log(e)}))},this.getIngredientList=function(){d.foodService.getIngredientList().subscribe((function(e){e.data&&(d.ingredientList=e.data,d.mainIngrdientList=e.data)}),(function(e){console.log(e)}))},this.getFoodIngredientList=function(e){d.foodService.getFoodIngredientList(e).subscribe((function(e){e.data&&(d.foodIngredientList=e.data)}),(function(e){console.log(e)}))},this.getIngredientDetail=function(e){d.foodService.getSingleFoodIngredient(e).subscribe((function(e){e.data&&(d.detail=e.data,console.log(d.detail))}))},this.deleteIngredient=function(e,t){c.a.fire({title:"Do you want to delete this Ingredient?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(i){i.isConfirmed&&(d.ui.loader.show(),d.foodService.deleteFoodIngredient(t).subscribe((function(t){c.a.fire({icon:"success",title:"Ingredient Deleted Successfully",showConfirmButton:!1,timer:1500}),d.foodIngredientList.splice(e,1),d.ui.loader.hide()}),(function(e){return d.ui.loader.hide()})))}))},this.addIngredient=function(){d.ui.loader.show(),d.foodService.createFoodIngredient({sub_category_id:d.subId,category_id:d.selectedCategory,unit_id:d.selectedUnit,ingredient_id:d.selectedIngredient,quantity:d.quantity}).subscribe((function(e){d.closeAddModal.nativeElement.click(),d.quantity="",d.selectedUnit="",d.selectedCategory="",d.selectedIngredient="",c.a.fire({icon:"success",title:"Ingredient Created Successfully",showConfirmButton:!1,timer:1500}),d.getFoodIngredientList(d.subId),d.ui.loader.hide()}),(function(e){return d.ui.loader.hide()}))},this.editIngredient=function(e){d.ui.loader.show(),delete d.detail.validationToken,delete d.detail.createdOn,d.foodService.updateFoodIngredient(e,d.detail).subscribe((function(e){d.closeEditModal.nativeElement.click(),d.detail={},d.ui.loader.hide(),d.getFoodIngredientList(d.subId)}),(function(e){d.ui.loader.hide()}))},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),d.router.navigate(["/login"])},this.route.queryParams.subscribe((function(e){d.subId=e.id,d.getFoodIngredientList(d.subId)})),console.log(this.subId)}return _createClass(e,[{key:"ngOnInit",value:function(){this.getIngredientList(),this.getAllCategory(),this.getAllUnit()}},{key:"getselectedIngredient",value:function(){var e=this;this.selectedCategory&&(console.log(this.selectedCategory),this.ingredientList=this.mainIngrdientList,this.ingredientList=this.ingredientList.filter((function(t){return t.category_id===e.selectedCategory})))}},{key:"changeOrder",value:function(e){var t=this;this.sortOrder=!this.sortOrder,this.field=e,this.ingredientList.sort((function(i,n){return t.sortOrder?n[e].localeCompare(i[e]):i[e].localeCompare(n[e])}))}},{key:"getSelectedCategory",value:function(e){console.log(e)}},{key:"getSelectedUnit",value:function(e){console.log(e)}},{key:"editStatus",value:function(e){this.detail.status=e,console.log(this.status)}}]),e}(),C.\u0275fac=function(e){return new(e||C)(r.Ob(o.e),r.Ob(a.a),r.Ob(o.a),r.Ob(l.a))},C.\u0275cmp=r.Ib({type:C,selectors:[["app-food-ingredient"]],viewQuery:function(e,t){var i;1&e&&(r.Jc(s,!0),r.Jc(u,!0)),2&e&&(r.uc(i=r.dc())&&(t.closeEditModal=i.first),r.uc(i=r.dc())&&(t.closeAddModal=i.first))},decls:73,vars:15,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"col-sm-11"],[1,"form-group","position-relative"],[1,"input-group"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","ic","required","",1,"custom-select",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],["placeholder","Choose Status","id","inputGroupSelect01","name","ig","required","",1,"custom-select",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","un","required","",1,"custom-select",3,"ngModel","ngModelChange"],["type","text","placeholder","Quantity","name","quantName","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],[3,"value"],[3,"ngValue"],["id","subform2","role","form"],["subForm2","ngForm"],["placeholder","Choose Status","id","inputGroupSelect01","name","ectt",1,"custom-select",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","ec",1,"custom-select",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","eu",1,"custom-select",3,"ngModel","ngModelChange"],["type","text","placeholder","Quantity","name","en","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[3,"value","selected"]],template:function(e,t){if(1&e&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"div",2),r.Ub(3,"div",3),r.Ub(4,"button",4),r.Ub(5,"b"),r.Ec(6,"+ Add Ingredient"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(7,"div",5),r.Ub(8,"div",6),r.Ub(9,"table",7),r.Ub(10,"thead"),r.Ub(11,"tr"),r.Ub(12,"th",8),r.Ec(13,"Ingredients Name"),r.Ub(14,"a",9),r.cc("click",(function(){return t.changeOrder("ingredient")})),r.Pb(15,"i",10),r.Tb(),r.Tb(),r.Ub(16,"th",8),r.Ec(17,"Category"),r.Tb(),r.Ub(18,"th",8),r.Ec(19,"Unit"),r.Tb(),r.Ub(20,"th",8),r.Ec(21,"Quantity"),r.Tb(),r.Ub(22,"th",8),r.Ec(23,"Action"),r.Tb(),r.Tb(),r.Tb(),r.Cc(24,f,2,1,"tbody",11),r.Cc(25,h,4,1,"ng-template",null,12,r.Dc),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(27,"div",13,14),r.Ub(29,"div",15),r.Ub(30,"div",16),r.Ub(31,"form",17,18),r.Ub(33,"div",19),r.Ub(34,"div",20),r.Ub(35,"h5"),r.Ec(36,"Add an Ingredient"),r.Tb(),r.Tb(),r.Ub(37,"div",21),r.Ub(38,"div",22),r.Ub(39,"div",23),r.Ub(40,"div",24),r.Ub(41,"label",25),r.Ec(42,"Select Category"),r.Tb(),r.Tb(),r.Ub(43,"select",26),r.cc("ngModelChange",(function(e){return t.selectedCategory=e}))("change",(function(){return t.getselectedIngredient()})),r.Cc(44,v,3,2,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(45,"div",21),r.Ub(46,"div",22),r.Ub(47,"div",23),r.Ub(48,"div",24),r.Ub(49,"label",25),r.Ec(50,"Select Ingredient"),r.Tb(),r.Tb(),r.Ub(51,"select",28),r.cc("ngModelChange",(function(e){return t.selectedIngredient=e})),r.Cc(52,U,3,2,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(53,"div",21),r.Ub(54,"div",22),r.Ub(55,"div",23),r.Ub(56,"div",24),r.Ub(57,"label",25),r.Ec(58,"Select Unit"),r.Tb(),r.Tb(),r.Ub(59,"select",29),r.cc("ngModelChange",(function(e){return t.selectedUnit=e})),r.Cc(60,T,3,2,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(61,"div",21),r.Ub(62,"div",22),r.Ub(63,"input",30),r.cc("ngModelChange",(function(e){return t.quantity=e})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(64,"div",19),r.Ub(65,"div",31),r.Ub(66,"button",32),r.cc("click",(function(){return t.addIngredient()})),r.Ec(67,"SUBMIT"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(68,"div",33,34),r.Ub(70,"div",15),r.Ub(71,"div",16),r.Cc(72,I,37,8,"form",35),r.Tb(),r.Tb(),r.Tb()),2&e){var i=r.vc(26),n=r.vc(32);r.Bb(15),r.Fb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),r.Bb(9),r.nc("ngIf",null==t.foodIngredientList?null:t.foodIngredientList.length)("ngIfElse",i),r.Bb(19),r.nc("ngModel",t.selectedCategory),r.Bb(1),r.nc("ngForOf",t.categoryList),r.Bb(7),r.nc("ngModel",t.selectedIngredient),r.Bb(1),r.nc("ngForOf",t.ingredientList),r.Bb(7),r.nc("ngModel",t.selectedUnit),r.Bb(1),r.nc("ngForOf",t.unitList),r.Bb(3),r.nc("ngModel",t.quantity),r.Bb(3),r.nc("disabled",!n.valid),r.Bb(6),r.nc("ngIf",t.detail)}},directives:[n.k,b.s,b.h,b.i,b.p,b.o,b.g,b.j,n.j,b.b,b.k,b.r],pipes:[n.q],styles:[""]}),C)}],B=((M=function e(){_classCallCheck(this,e)}).\u0275mod=r.Mb({type:M}),M.\u0275inj=r.Lb({factory:function(e){return new(e||M)},imports:[[o.i.forChild(S)],o.i]}),M),L=i("wloI");i.d(t,"FoodIngredientModule",(function(){return E}));var _,E=((_=function e(){_classCallCheck(this,e)}).\u0275mod=r.Mb({type:_}),_.\u0275inj=r.Lb({factory:function(e){return new(e||_)},imports:[[n.b,b.c,L.a,B]]}),_)}}]);