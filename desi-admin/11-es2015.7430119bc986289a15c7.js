(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{vsVj:function(t,e,o){"use strict";o.r(e);var i=o("ofXK"),a=o("3Pt+"),d=o("tyNb"),r=o("PSD3"),c=o.n(r),n=o("fXoL"),l=o("pVIR"),s=o("AXIP");const b=["closeEditModal2"],u=["closeAddModal"];function g(t,e){if(1&t){const t=n.Vb();n.Ub(0,"tr"),n.Ub(1,"td"),n.Ub(2,"B"),n.Ec(3),n.hc(4,"titlecase"),n.Tb(),n.Tb(),n.Ub(5,"td"),n.Ub(6,"button",29),n.cc("click",(function(){n.xc(t);const o=e.$implicit;return n.gc(2).getCategoryDetail(o.category_id)})),n.Pb(7,"i",30),n.Tb(),n.Ub(8,"button",31),n.cc("click",(function(){n.xc(t);const o=e.index,i=e.$implicit;return n.gc(2).deleteCategory(o,i.category_id)})),n.Pb(9,"i",32),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=e.$implicit;n.Bb(3),n.Fc(n.ic(4,1,t.name))}}function f(t,e){if(1&t&&(n.Ub(0,"tbody"),n.Cc(1,g,10,3,"tr",28),n.Tb()),2&t){const t=n.gc();n.Bb(1),n.nc("ngForOf",t.foodCatList)}}function h(t,e){if(1&t&&(n.Ub(0,"tbody"),n.Ub(1,"tr"),n.Ub(2,"td",33),n.Ec(3),n.Tb(),n.Tb(),n.Tb()),2&t){const t=n.gc();n.Bb(3),n.Fc(t.response)}}function m(t,e){if(1&t){const t=n.Vb();n.Ub(0,"form",34,35),n.Ub(2,"div",19),n.Ub(3,"div",20),n.Ub(4,"h5"),n.Ec(5,"Edit Category Detail"),n.Tb(),n.Tb(),n.Ub(6,"div",5),n.Ub(7,"div",21),n.Ub(8,"input",36),n.cc("ngModelChange",(function(e){return n.xc(t),n.gc().detail.name=e})),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(9,"div",19),n.Ub(10,"div",23),n.Ub(11,"button",24),n.cc("click",(function(){n.xc(t);const e=n.gc();return e.editCategory(e.detail.category_id)})),n.Ec(12,"EDIT"),n.Tb(),n.Tb(),n.Tb(),n.Tb()}if(2&t){const t=n.vc(1),e=n.gc();n.Bb(8),n.nc("ngModel",e.detail.name),n.Bb(3),n.nc("disabled",!t.valid)}}const C=[{path:"",component:(()=>{class t{constructor(t,e,o){this.router=t,this.foodService=e,this.ui=o,this.foodCatList=[],this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.getAllFoodCat=()=>{this.ui.loader.show(),this.foodService.getFoodCategoryList().subscribe(t=>{t.data&&(this.foodCatList=t.data),this.ui.loader.hide()},t=>this.ui.loader.hide())},this.getCategoryDetail=t=>{this.foodService.getSingleFoodCategory(t).subscribe(t=>{t.data&&(this.detail=t.data)})},this.deleteCategory=(t,e)=>{c.a.fire({title:"Do you want to delete this Category?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(o=>{o.isConfirmed&&(this.ui.loader.show(),this.foodService.deleteFoodCategory(e).subscribe(e=>{c.a.fire({icon:"success",title:"Category Deleted Successfully",showConfirmButton:!1,timer:1500}),this.foodCatList.splice(t,1),this.ui.loader.hide()},t=>this.ui.loader.hide()))})},this.addCategory=()=>{this.ui.loader.show();const t={name:this.foodCatName};this.foodCatList.push(t),this.foodService.createFoodCategory(t).subscribe(t=>{this.closeAddModal.nativeElement.click(),this.foodCatName="",c.a.fire({icon:"success",title:"Category Created Successfully",showConfirmButton:!1,timer:1500}),this.getAllFoodCat(),this.ui.loader.hide()},t=>this.ui.loader.hide())},this.editCategory=t=>{this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,delete this.detail.category_id,this.foodService.updateFoodCategory(t,this.detail).subscribe(t=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getAllFoodCat()},t=>{this.ui.loader.hide()})},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllFoodCat()}changeOrder(t){this.sortOrder=!this.sortOrder,this.field=t,this.foodCatList.sort((e,o)=>this.sortOrder?o[t].localeCompare(e[t]):e[t].localeCompare(o[t]))}}return t.\u0275fac=function(e){return new(e||t)(n.Ob(d.e),n.Ob(l.a),n.Ob(s.a))},t.\u0275cmp=n.Ib({type:t,selectors:[["app-food-category"]],viewQuery:function(t,e){var o;1&t&&(n.Jc(b,!0),n.Jc(u,!0)),2&t&&(n.uc(o=n.dc())&&(e.closeEditModal=o.first),n.uc(o=n.dc())&&(e.closeAddModal=o.first))},decls:43,vars:9,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-4"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform3","role","form"],["subForm3","ngForm"],[1,"row"],[1,"col-12"],[1,"form-group","position-relative"],["type","text","placeholder","Category Name","name","Cname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal2",""],["id","subform4","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform4","role","form"],["subForm4","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"]],template:function(t,e){if(1&t&&(n.Ub(0,"div",0),n.Ub(1,"div",1),n.Ub(2,"div",2),n.Ub(3,"div",3),n.Ub(4,"button",4),n.Ub(5,"b"),n.Ec(6,"+ Add Ingredient Category"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(7,"div",5),n.Ub(8,"div",6),n.Ub(9,"table",7),n.Ub(10,"thead"),n.Ub(11,"tr"),n.Ub(12,"th",8),n.Ec(13,"Category Name"),n.Ub(14,"a",9),n.cc("click",(function(){return e.changeOrder("name")})),n.Pb(15,"i",10),n.Tb(),n.Tb(),n.Ub(16,"th",8),n.Ec(17,"Action"),n.Tb(),n.Tb(),n.Tb(),n.Cc(18,f,2,1,"tbody",11),n.Cc(19,h,4,1,"ng-template",null,12,n.Dc),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(21,"div",13,14),n.Ub(23,"div",15),n.Ub(24,"div",16),n.Ub(25,"form",17,18),n.Ub(27,"div",19),n.Ub(28,"div",20),n.Ub(29,"h5"),n.Ec(30,"Add a Category"),n.Tb(),n.Tb(),n.Ub(31,"div",5),n.Ub(32,"div",21),n.Ub(33,"input",22),n.cc("ngModelChange",(function(t){return e.foodCatName=t})),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(34,"div",19),n.Ub(35,"div",23),n.Ub(36,"button",24),n.cc("click",(function(){return e.addCategory()})),n.Ec(37,"SUBMIT"),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Tb(),n.Ub(38,"div",25,26),n.Ub(40,"div",15),n.Ub(41,"div",16),n.Cc(42,m,13,2,"form",27),n.Tb(),n.Tb(),n.Tb()),2&t){const t=n.vc(20),o=n.vc(26);n.Bb(15),n.Fb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),n.Bb(3),n.nc("ngIf",null==e.foodCatList?null:e.foodCatList.length)("ngIfElse",t),n.Bb(15),n.nc("ngModel",e.foodCatName),n.Bb(3),n.nc("disabled",!o.valid),n.Bb(6),n.nc("ngIf",e.detail)}},directives:[i.k,a.s,a.h,a.i,a.b,a.o,a.g,a.j,i.j],pipes:[i.q],styles:[""]}),t})()}];let T=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[d.i.forChild(C)],d.i]}),t})();var p=o("wloI");o.d(e,"FoodCategoryModule",(function(){return U}));let U=(()=>{class t{}return t.\u0275mod=n.Mb({type:t}),t.\u0275inj=n.Lb({factory:function(e){return new(e||t)},imports:[[i.b,a.c,T,p.a]]}),t})()}}]);