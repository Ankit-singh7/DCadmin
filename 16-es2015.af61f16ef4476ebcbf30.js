(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kSOM:function(e,t,c){"use strict";c.r(t);var i=c("ofXK"),o=c("tyNb"),a=c("PSD3"),n=c.n(a),r=c("fXoL"),d=c("pVIR"),l=c("AXIP"),s=c("3Pt+"),g=c("oOf3");const b=["closeEditModal2"],u=["closeAddModal"];function h(e,t){if(1&e){const e=r.dc();r.cc(0,"tr"),r.cc(1,"td"),r.cc(2,"B"),r.Mc(3),r.pc(4,"titlecase"),r.bc(),r.bc(),r.cc(5,"td"),r.cc(6,"button",36),r.kc("click",(function(){r.Fc(e);const c=t.$implicit;return r.oc(2).getCategoryDetail(c.ingredient_category_id)})),r.Xb(7,"i",37),r.bc(),r.cc(8,"button",38),r.kc("click",(function(){r.Fc(e);const c=t.index,i=t.$implicit;return r.oc(2).deleteCategory(c,i.ingredient_category_id)})),r.Xb(9,"i",39),r.bc(),r.bc(),r.bc()}if(2&e){const e=t.$implicit;r.Jb(3),r.Nc(r.qc(4,1,e.name))}}const f=function(e,t,c){return{itemsPerPage:e,currentPage:t,totalItems:c}};function m(e,t){if(1&e&&(r.cc(0,"tbody"),r.Kc(1,h,10,3,"tr",35),r.pc(2,"paginate"),r.bc()),2&e){const e=r.oc();r.Jb(1),r.vc("ngForOf",r.rc(2,1,e.ingredientCatList,r.Ac(4,f,e.selectedPerPage,e.currentpage,e.total)))}}function p(e,t){if(1&e&&(r.cc(0,"tbody"),r.cc(1,"tr"),r.cc(2,"td",40),r.Mc(3),r.bc(),r.bc(),r.bc()),2&e){const e=r.oc();r.Jb(3),r.Nc(e.response)}}function v(e,t){if(1&e){const e=r.dc();r.cc(0,"form",41,42),r.cc(2,"div",26),r.cc(3,"div",27),r.cc(4,"h5"),r.Mc(5,"Edit Category Detail"),r.bc(),r.bc(),r.cc(6,"div",11),r.cc(7,"div",28),r.cc(8,"input",43),r.kc("ngModelChange",(function(t){return r.Fc(e),r.oc().detail.name=t})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(9,"div",26),r.cc(10,"div",30),r.cc(11,"button",31),r.kc("click",(function(){r.Fc(e);const t=r.oc();return t.editCategory(t.detail.ingredient_category_id)})),r.Mc(12,"EDIT"),r.bc(),r.bc(),r.bc(),r.bc()}if(2&e){const e=r.Dc(1),t=r.oc();r.Jb(8),r.vc("ngModel",t.detail.name),r.Jb(3),r.vc("disabled",!e.valid)}}const C=[{path:"",component:(()=>{class e{constructor(e,t,c){this.router=e,this.foodService=t,this.ui=c,this.ingredientCatList=[],this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.selectedPerPage=10,this.currentpage=1,this.getAllIngredientCat=e=>{this.ui.loader.show(),e&&(this.currentpage=e),this.foodService.getIngredientCategoryList(this.selectedPerPage,this.currentpage).subscribe(e=>{e.data&&(this.ingredientCatList=e.data.result,this.total=e.data.total),this.ui.loader.hide()},e=>this.ui.loader.hide())},this.onLimitSelect=e=>{this.selectedPerPage=e,this.getAllIngredientCat()},this.getCategoryDetail=e=>{this.foodService.getSingleIngredientCategory(e).subscribe(e=>{e.data&&(this.detail=e.data)})},this.deleteCategory=(e,t)=>{n.a.fire({title:"Do you want to delete this Category?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(c=>{c.isConfirmed&&(this.ui.loader.show(),this.foodService.deleteIngredientCategory(t).subscribe(t=>{n.a.fire({icon:"success",title:"Category Deleted Successfully",showConfirmButton:!1,timer:1500}),this.ingredientCatList.splice(e,1),this.ui.loader.hide()},e=>this.ui.loader.hide()))})},this.addCategory=()=>{this.ui.loader.show();const e={name:this.catName};this.ingredientCatList.push(e),this.foodService.createIngredientCategory(e).subscribe(e=>{this.closeAddModal.nativeElement.click(),this.catName="",n.a.fire({icon:"success",title:"Category Created Successfully",showConfirmButton:!1,timer:1500}),this.getAllIngredientCat(),this.ui.loader.hide()},e=>this.ui.loader.hide())},this.editCategory=e=>{this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,delete this.detail.ingredient_category_id,this.foodService.updateIngredientCategory(e,this.detail).subscribe(e=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getAllIngredientCat()},e=>{this.ui.loader.hide()})},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getAllIngredientCat()}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.ingredientCatList.sort((t,c)=>this.sortOrder?c[e].localeCompare(t[e]):t[e].localeCompare(c[e]))}}return e.\u0275fac=function(t){return new(t||e)(r.Wb(o.e),r.Wb(d.a),r.Wb(l.a))},e.\u0275cmp=r.Qb({type:e,selectors:[["app-ingredient-cat"]],viewQuery:function(e,t){var c;1&e&&(r.Rc(b,!0),r.Rc(u,!0)),2&e&&(r.Cc(c=r.lc())&&(t.closeEditModal=c.first),r.Cc(c=r.lc())&&(t.closeAddModal=c.first))},decls:56,vars:10,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-4"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-6","col-sm-12","col-md-2"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform3","role","form"],["subForm3","ngForm"],[1,"row"],[1,"col-12"],[1,"form-group","position-relative"],["type","text","placeholder","Category Name","name","Cname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal2",""],["id","subform4","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform4","role","form"],["subForm4","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"]],template:function(e,t){if(1&e&&(r.cc(0,"div",0),r.cc(1,"div",1),r.cc(2,"div",2),r.cc(3,"div",3),r.cc(4,"button",4),r.cc(5,"b"),r.Mc(6,"+ Add Ingredient Category"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(7,"div",5),r.cc(8,"div",3),r.Mc(9," SELECT PER PAGE "),r.cc(10,"select",6),r.kc("ngModelChange",(function(e){return t.selectedPerPage=e}))("change",(function(e){return t.onLimitSelect(e.target.value)})),r.cc(11,"option",7),r.Mc(12,"10"),r.bc(),r.cc(13,"option",8),r.Mc(14,"25"),r.bc(),r.cc(15,"option",9),r.Mc(16,"50"),r.bc(),r.cc(17,"option",10),r.Mc(18,"100"),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(19,"div",11),r.cc(20,"div",12),r.cc(21,"table",13),r.cc(22,"thead"),r.cc(23,"tr"),r.cc(24,"th",14),r.Mc(25,"Category Name"),r.cc(26,"a",15),r.kc("click",(function(){return t.changeOrder("name")})),r.Xb(27,"i",16),r.bc(),r.bc(),r.cc(28,"th",14),r.Mc(29,"Action"),r.bc(),r.bc(),r.bc(),r.Kc(30,m,3,8,"tbody",17),r.Kc(31,p,4,1,"ng-template",null,18,r.Lc),r.bc(),r.cc(33,"pagination-controls",19),r.kc("pageChange",(function(e){return t.getAllIngredientCat(e)})),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(34,"div",20,21),r.cc(36,"div",22),r.cc(37,"div",23),r.cc(38,"form",24,25),r.cc(40,"div",26),r.cc(41,"div",27),r.cc(42,"h5"),r.Mc(43,"Add a Category"),r.bc(),r.bc(),r.cc(44,"div",11),r.cc(45,"div",28),r.cc(46,"input",29),r.kc("ngModelChange",(function(e){return t.catName=e})),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(47,"div",26),r.cc(48,"div",30),r.cc(49,"button",31),r.kc("click",(function(){return t.addCategory()})),r.Mc(50,"SUBMIT"),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.bc(),r.cc(51,"div",32,33),r.cc(53,"div",22),r.cc(54,"div",23),r.Kc(55,v,13,2,"form",34),r.bc(),r.bc(),r.bc()),2&e){const e=r.Dc(32),c=r.Dc(39);r.Jb(10),r.vc("ngModel",t.selectedPerPage),r.Jb(17),r.Nb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),r.Jb(3),r.vc("ngIf",null==t.ingredientCatList?null:t.ingredientCatList.length)("ngIfElse",e),r.Jb(16),r.vc("ngModel",t.catName),r.Jb(3),r.vc("disabled",!c.valid),r.Jb(6),r.vc("ngIf",t.detail)}},directives:[s.p,s.g,s.j,s.k,s.r,i.l,g.c,s.s,s.h,s.i,s.b,s.o,i.k],pipes:[g.b,i.r],styles:[""]}),e})()}];let y=(()=>{class e{}return e.\u0275mod=r.Ub({type:e}),e.\u0275inj=r.Tb({factory:function(t){return new(t||e)},imports:[[o.i.forChild(C)],o.i]}),e})();var M=c("wloI");c.d(t,"IngredientCatModule",(function(){return I}));let I=(()=>{class e{}return e.\u0275mod=r.Ub({type:e}),e.\u0275inj=r.Tb({factory:function(t){return new(t||e)},imports:[[i.b,s.c,y,M.a,g.a]]}),e})()}}]);