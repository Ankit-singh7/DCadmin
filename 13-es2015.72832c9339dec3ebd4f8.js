(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{W68I:function(e,t,i){"use strict";i.r(t);var n=i("ofXK"),d=i("tyNb"),o=i("PSD3"),c=i.n(o),r=i("fXoL"),b=i("pVIR"),s=i("AXIP"),l=i("3Pt+");const a=["closeEditModal"],g=["closeAddModal"];function u(e,t){if(1&e){const e=r.Vb();r.Ub(0,"tr"),r.Ub(1,"td"),r.Ub(2,"B"),r.Ec(3),r.hc(4,"titlecase"),r.Tb(),r.Tb(),r.Ub(5,"td"),r.Ec(6),r.Tb(),r.Ub(7,"td"),r.Ec(8),r.Tb(),r.Ub(9,"td"),r.Ec(10),r.Tb(),r.Ub(11,"td"),r.Ub(12,"button",34),r.cc("click",(function(){r.xc(e);const i=t.$implicit;return r.gc(2).getIngredientDetail(i.food_ingredient_id)})),r.Pb(13,"i",35),r.Tb(),r.Ub(14,"button",36),r.cc("click",(function(){r.xc(e);const i=t.index,n=t.$implicit;return r.gc(2).deleteIngredient(i,n.food_ingredient_id)})),r.Pb(15,"i",37),r.Tb(),r.Tb(),r.Tb()}if(2&e){const e=t.$implicit;r.Bb(3),r.Fc(r.ic(4,4,e.ingredient)),r.Bb(3),r.Fc(e.category),r.Bb(2),r.Fc(e.unit),r.Bb(2),r.Fc(e.quantity)}}function h(e,t){if(1&e&&(r.Ub(0,"tbody"),r.Cc(1,u,16,6,"tr",27),r.Tb()),2&e){const e=r.gc();r.Bb(1),r.nc("ngForOf",e.foodIngredientList)}}function f(e,t){if(1&e&&(r.Ub(0,"tbody"),r.Ub(1,"tr"),r.Ub(2,"td",38),r.Ec(3),r.Tb(),r.Tb(),r.Tb()),2&e){const e=r.gc();r.Bb(3),r.Fc(e.response)}}function U(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",39),r.Ec(2),r.Tb(),r.Rb()),2&e){const e=t.$implicit;r.Bb(1),r.nc("ngValue",e),r.Bb(1),r.Fc(e.name)}}function T(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",46),r.Ec(2),r.Tb(),r.Rb()),2&e){const e=t.$implicit,i=r.gc(2);r.Bb(1),r.nc("value",e.ingredient_category_id)("selected",e.ingredient_category_id===i.detail.category_id),r.Bb(1),r.Fc(e.name)}}function m(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",46),r.Ec(2),r.Tb(),r.Rb()),2&e){const e=t.$implicit,i=r.gc(2);r.Bb(1),r.nc("value",e.ingredient_id)("selected",e.ingredient_id===i.detail.ingredient_id),r.Bb(1),r.Fc(e.name)}}function p(e,t){if(1&e&&(r.Sb(0),r.Ub(1,"option",46),r.Ec(2),r.Tb(),r.Rb()),2&e){const e=t.$implicit,i=r.gc(2);r.Bb(1),r.nc("value",e.unit_id)("selected",e.unit_id===i.detail.unit_id),r.Bb(1),r.Fc(e.name)}}function v(e,t){if(1&e){const e=r.Vb();r.Ub(0,"form",40,41),r.Ub(2,"div",19),r.Ub(3,"div",20),r.Ub(4,"h5"),r.Ec(5,"Edit Ingredient Detail"),r.Tb(),r.Tb(),r.Ub(6,"div",21),r.Ub(7,"div",22),r.Ub(8,"div",23),r.Ub(9,"div",24),r.Ub(10,"label",25),r.Ec(11,"Select Category"),r.Tb(),r.Tb(),r.Ub(12,"select",42),r.cc("ngModelChange",(function(t){return r.xc(e),r.gc().detail.category_id=t})),r.Cc(13,T,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(14,"div",21),r.Ub(15,"div",22),r.Ub(16,"div",23),r.Ub(17,"div",24),r.Ub(18,"label",25),r.Ec(19,"Select Ingredient"),r.Tb(),r.Tb(),r.Ub(20,"select",43),r.cc("ngModelChange",(function(t){return r.xc(e),r.gc().detail.ingredient_id=t})),r.Cc(21,m,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(22,"div",21),r.Ub(23,"div",22),r.Ub(24,"div",23),r.Ub(25,"div",24),r.Ub(26,"label",25),r.Ec(27,"Select Unit"),r.Tb(),r.Tb(),r.Ub(28,"select",44),r.cc("ngModelChange",(function(t){return r.xc(e),r.gc().detail.unit_id=t})),r.Cc(29,p,3,3,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(30,"div",21),r.Ub(31,"div",22),r.Ub(32,"input",45),r.cc("ngModelChange",(function(t){return r.xc(e),r.gc().detail.quantity=t})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(33,"div",19),r.Ub(34,"div",29),r.Ub(35,"button",30),r.cc("click",(function(){r.xc(e);const t=r.gc();return t.editIngredient(t.detail.food_ingredient_id)})),r.Ec(36,"EDIT"),r.Tb(),r.Tb(),r.Tb(),r.Tb()}if(2&e){const e=r.vc(1),t=r.gc();r.Bb(12),r.nc("ngModel",t.detail.category_id),r.Bb(1),r.nc("ngForOf",t.categoryList),r.Bb(7),r.nc("ngModel",t.detail.ingredient_id),r.Bb(1),r.nc("ngForOf",t.ingredientList),r.Bb(7),r.nc("ngModel",t.detail.unit_id),r.Bb(1),r.nc("ngForOf",t.unitList),r.Bb(3),r.nc("ngModel",t.detail.quantity),r.Bb(3),r.nc("disabled",!e.valid)}}const I=[{path:"",component:(()=>{class e{constructor(e,t,i,n){this.router=e,this.foodService=t,this.route=i,this.ui=n,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.ingredientList=[],this.mainIngrdientList=[],this.unitList=[],this.categoryList=[],this.foodIngredientList=[],this.getAllUnit=()=>{this.foodService.getUnitList().subscribe(e=>{e.data&&(this.unitList=e.data)},e=>{console.log(e)})},this.getAllCategory=()=>{this.foodService.getIngredientCategoryList().subscribe(e=>{e.data&&(this.categoryList=e.data)},e=>{console.log(e)})},this.getIngredientList=()=>{this.foodService.getIngredientList().subscribe(e=>{e.data&&(this.ingredientList=e.data,this.mainIngrdientList=e.data)},e=>{console.log(e)})},this.getFoodIngredientList=e=>{this.foodService.getFoodIngredientList(e).subscribe(e=>{e.data&&(this.foodIngredientList=e.data)},e=>{console.log(e)})},this.getIngredientDetail=e=>{this.foodService.getSingleFoodIngredient(e).subscribe(e=>{e.data&&(this.detail=e.data,console.log(this.detail))})},this.deleteIngredient=(e,t)=>{c.a.fire({title:"Do you want to delete this Ingredient?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(i=>{i.isConfirmed&&(this.ui.loader.show(),this.foodService.deleteFoodIngredient(t).subscribe(t=>{c.a.fire({icon:"success",title:"Ingredient Deleted Successfully",showConfirmButton:!1,timer:1500}),this.foodIngredientList.splice(e,1),this.ui.loader.hide()},e=>this.ui.loader.hide()))})},this.addIngredient=()=>{this.ui.loader.show(),this.foodService.createFoodIngredient({sub_category_id:this.subId,category_id:this.selectedIngredient.category_id,unit_id:this.selectedIngredient.unit_id,ingredient_id:this.selectedIngredient.ingredient_id,quantity:this.quantity}).subscribe(e=>{this.closeAddModal.nativeElement.click(),this.quantity="",this.selectedUnit="",this.selectedCategory="",this.selectedIngredient="",c.a.fire({icon:"success",title:"Ingredient Created Successfully",showConfirmButton:!1,timer:1500}),this.getFoodIngredientList(this.subId),this.ui.loader.hide()},e=>this.ui.loader.hide())},this.editIngredient=e=>{this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.foodService.updateFoodIngredient(e,this.detail).subscribe(e=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getFoodIngredientList(this.subId)},e=>{this.ui.loader.hide()})},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])},this.route.queryParams.subscribe(e=>{this.subId=e.id,this.getFoodIngredientList(this.subId)}),console.log(this.subId)}ngOnInit(){this.getIngredientList(),this.getAllCategory(),this.getAllUnit()}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.ingredientList.sort((t,i)=>this.sortOrder?i[e].localeCompare(t[e]):t[e].localeCompare(i[e]))}getSelectedIngredient(e){console.log(e)}getSelectedUnit(e){console.log(e)}editStatus(e){this.detail.status=e,console.log(this.status)}}return e.\u0275fac=function(t){return new(t||e)(r.Ob(d.e),r.Ob(b.a),r.Ob(d.a),r.Ob(s.a))},e.\u0275cmp=r.Ib({type:e,selectors:[["app-food-ingredient"]],viewQuery:function(e,t){var i;1&e&&(r.Jc(a,!0),r.Jc(g,!0)),2&e&&(r.uc(i=r.dc())&&(t.closeEditModal=i.first),r.uc(i=r.dc())&&(t.closeAddModal=i.first))},decls:57,vars:11,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"col-sm-11"],[1,"form-group","position-relative"],[1,"input-group"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","ig","required","",1,"custom-select",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],["type","text","placeholder","Quantity","name","quantName","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],[3,"ngValue"],["id","subform2","role","form"],["subForm2","ngForm"],["placeholder","Choose Status","id","inputGroupSelect01","name","ectt",1,"custom-select",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","ecrt",1,"custom-select",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","eu",1,"custom-select",3,"ngModel","ngModelChange"],["type","text","placeholder","Quantity","name","en","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[3,"value","selected"]],template:function(e,t){if(1&e&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"div",2),r.Ub(3,"div",3),r.Ub(4,"button",4),r.Ub(5,"b"),r.Ec(6,"+ Add Ingredient"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(7,"div",5),r.Ub(8,"div",6),r.Ub(9,"table",7),r.Ub(10,"thead"),r.Ub(11,"tr"),r.Ub(12,"th",8),r.Ec(13,"Ingredients Name"),r.Ub(14,"a",9),r.cc("click",(function(){return t.changeOrder("ingredient")})),r.Pb(15,"i",10),r.Tb(),r.Tb(),r.Ub(16,"th",8),r.Ec(17,"Category"),r.Tb(),r.Ub(18,"th",8),r.Ec(19,"Unit"),r.Tb(),r.Ub(20,"th",8),r.Ec(21,"Quantity"),r.Tb(),r.Ub(22,"th",8),r.Ec(23,"Action"),r.Tb(),r.Tb(),r.Tb(),r.Cc(24,h,2,1,"tbody",11),r.Cc(25,f,4,1,"ng-template",null,12,r.Dc),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(27,"div",13,14),r.Ub(29,"div",15),r.Ub(30,"div",16),r.Ub(31,"form",17,18),r.Ub(33,"div",19),r.Ub(34,"div",20),r.Ub(35,"h5"),r.Ec(36,"Add an Ingredient"),r.Tb(),r.Tb(),r.Ub(37,"div",21),r.Ub(38,"div",22),r.Ub(39,"div",23),r.Ub(40,"div",24),r.Ub(41,"label",25),r.Ec(42,"Select Ingredient"),r.Tb(),r.Tb(),r.Ub(43,"select",26),r.cc("ngModelChange",(function(e){return t.selectedIngredient=e}))("ngModelChange",(function(e){return t.getSelectedIngredient(e)})),r.Cc(44,U,3,2,"ng-container",27),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(45,"div",21),r.Ub(46,"div",22),r.Ub(47,"input",28),r.cc("ngModelChange",(function(e){return t.quantity=e})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(48,"div",19),r.Ub(49,"div",29),r.Ub(50,"button",30),r.cc("click",(function(){return t.addIngredient()})),r.Ec(51,"SUBMIT"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(52,"div",31,32),r.Ub(54,"div",15),r.Ub(55,"div",16),r.Cc(56,v,37,8,"form",33),r.Tb(),r.Tb(),r.Tb()),2&e){const e=r.vc(26),i=r.vc(32);r.Bb(15),r.Fb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),r.Bb(9),r.nc("ngIf",null==t.foodIngredientList?null:t.foodIngredientList.length)("ngIfElse",e),r.Bb(19),r.nc("ngModel",t.selectedIngredient),r.Bb(1),r.nc("ngForOf",t.ingredientList),r.Bb(3),r.nc("ngModel",t.quantity),r.Bb(3),r.nc("disabled",!i.valid),r.Bb(6),r.nc("ngIf",t.detail)}},directives:[n.k,l.s,l.h,l.i,l.p,l.o,l.g,l.j,n.j,l.b,l.k,l.r],pipes:[n.q],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[d.i.forChild(I)],d.i]}),e})();var C=i("wloI");i.d(t,"FoodIngredientModule",(function(){return M}));let M=(()=>{class e{}return e.\u0275mod=r.Mb({type:e}),e.\u0275inj=r.Lb({factory:function(t){return new(t||e)},imports:[[n.b,l.c,C.a,y]]}),e})()}}]);