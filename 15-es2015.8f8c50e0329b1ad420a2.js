(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/uUt":function(c,e,t){"use strict";t.d(e,"a",(function(){return i}));var o=t("7o/Q");function i(c,e){return t=>t.lift(new n(c,e))}class n{constructor(c,e){this.compare=c,this.keySelector=e}call(c,e){return e.subscribe(new d(c,this.compare,this.keySelector))}}class d extends o.a{constructor(c,e,t){super(c),this.keySelector=t,this.hasKey=!1,"function"==typeof e&&(this.compare=e)}compare(c,e){return c===e}_next(c){let e;try{const{keySelector:t}=this;e=t?t(c):c}catch(o){return this.destination.error(o)}let t=!1;if(this.hasKey)try{const{compare:c}=this;t=c(this.key,e)}catch(o){return this.destination.error(o)}else this.hasKey=!0;t||(this.key=e,this.destination.next(c))}}},RBrK:function(c,e,t){"use strict";t.r(e);var o=t("ofXK"),i=t("tyNb"),n=t("XNiG"),d=t("Kj3r"),a=t("/uUt"),r=t("eIep"),s=t("PSD3"),l=t.n(s),b=t("fXoL"),u=t("pVIR"),g=t("AXIP"),h=t("3Pt+"),p=t("oOf3");const f=["closeEditModal"],m=["closeAddModal"],v=function(){return["/user/food-ing"]},M=function(c){return{id:c}};function y(c,e){if(1&c){const c=b.dc();b.cc(0,"tr"),b.cc(1,"td"),b.cc(2,"B"),b.Mc(3),b.pc(4,"titlecase"),b.bc(),b.bc(),b.cc(5,"td"),b.Mc(6),b.bc(),b.cc(7,"td"),b.Mc(8),b.bc(),b.cc(9,"td"),b.Mc(10),b.bc(),b.cc(11,"td"),b.Mc(12),b.bc(),b.cc(13,"td"),b.Mc(14),b.bc(),b.cc(15,"td"),b.cc(16,"button",53),b.kc("click",(function(){b.Fc(c);const t=e.$implicit;return b.oc(2).getFoodDetail(t.sub_category_id)})),b.Xb(17,"i",54),b.bc(),b.cc(18,"button",55),b.kc("click",(function(){b.Fc(c);const t=e.index,o=e.$implicit;return b.oc(2).deleteFood(t,o.sub_category_id)})),b.Xb(19,"i",56),b.bc(),b.bc(),b.cc(20,"td"),b.cc(21,"button",57),b.Xb(22,"i",58),b.bc(),b.bc(),b.bc()}if(2&c){const c=e.$implicit;b.Jb(3),b.Nc(b.qc(4,8,c.name)),b.Jb(3),b.Nc(c.type),b.Jb(2),b.Oc("",c.price,".00"),b.Jb(2),b.Nc(c.category_name),b.Jb(2),b.Nc(c.status),b.Jb(2),b.Nc(c.mostly_used),b.Jb(7),b.vc("routerLink",b.xc(10,v))("queryParams",b.yc(11,M,c.sub_category_id))}}const C=function(c,e,t){return{itemsPerPage:c,currentPage:e,totalItems:t}};function F(c,e){if(1&c&&(b.cc(0,"tbody"),b.Kc(1,y,23,13,"tr",36),b.pc(2,"paginate"),b.bc()),2&c){const c=b.oc();b.Jb(1),b.vc("ngForOf",b.rc(2,1,c.foodList,b.Ac(4,C,c.selectedPerPage,c.currentpage,c.total)))}}function k(c,e){if(1&c&&(b.cc(0,"tbody"),b.cc(1,"tr"),b.cc(2,"td",59),b.Mc(3),b.bc(),b.bc(),b.bc()),2&c){const c=b.oc();b.Jb(3),b.Nc(c.response)}}function S(c,e){if(1&c&&(b.ac(0),b.cc(1,"option",60),b.Mc(2),b.bc(),b.Zb()),2&c){const c=e.$implicit;b.Jb(1),b.vc("value",c.category_id),b.Jb(1),b.Nc(c.name)}}function J(c,e){if(1&c&&(b.ac(0),b.cc(1,"option",66),b.Mc(2),b.bc(),b.Zb()),2&c){const c=e.$implicit,t=b.oc(2);b.Jb(1),b.vc("value",c.category_id)("selected",c.category_id===t.detail.category_id),b.Jb(1),b.Nc(c.name)}}function L(c,e){if(1&c){const c=b.dc();b.cc(0,"form",61,62),b.cc(2,"div",28),b.cc(3,"div",29),b.cc(4,"h5"),b.Mc(5,"Edit Food Detail"),b.bc(),b.bc(),b.cc(6,"div",30),b.cc(7,"div",31),b.cc(8,"div",32),b.cc(9,"div",33),b.cc(10,"label",34),b.Mc(11,"Select Category"),b.bc(),b.bc(),b.cc(12,"select",63),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.category_id=e})),b.Kc(13,J,3,3,"ng-container",36),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(14,"div",37),b.cc(15,"div",31),b.cc(16,"input",64),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.name=e})),b.bc(),b.bc(),b.bc(),b.cc(17,"div",30),b.cc(18,"div",31),b.cc(19,"input",65),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.price=e})),b.bc(),b.bc(),b.bc(),b.cc(20,"div",37),b.cc(21,"div",31),b.cc(22,"div",32),b.cc(23,"div",33),b.cc(24,"label",34),b.Mc(25,"Select Type"),b.bc(),b.bc(),b.cc(26,"select",35),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.type=e})),b.cc(27,"option",40),b.Mc(28,"Veg"),b.bc(),b.cc(29,"option",41),b.Mc(30,"NonVeg"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(31,"div",30),b.cc(32,"div",31),b.cc(33,"div",32),b.cc(34,"div",33),b.cc(35,"label",34),b.Mc(36,"Select Status"),b.bc(),b.bc(),b.cc(37,"select",42),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.status=e})),b.cc(38,"option",43),b.Mc(39,"Active"),b.bc(),b.cc(40,"option",44),b.Mc(41,"Inactive"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(42,"div",37),b.cc(43,"div",31),b.cc(44,"div",32),b.cc(45,"div",33),b.cc(46,"label",34),b.Mc(47,"Mostly Used"),b.bc(),b.bc(),b.cc(48,"select",42),b.kc("ngModelChange",(function(e){return b.Fc(c),b.oc().detail.mostly_used=e})),b.cc(49,"option",46),b.Mc(50,"Yes"),b.bc(),b.cc(51,"option",47),b.Mc(52,"No"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(53,"div",28),b.cc(54,"div",48),b.cc(55,"button",49),b.kc("click",(function(){b.Fc(c);const e=b.oc();return e.editFood(e.detail.sub_category_id)})),b.Mc(56,"SUBMIT"),b.bc(),b.bc(),b.bc(),b.bc()}if(2&c){const c=b.Dc(1),e=b.oc();b.Jb(12),b.vc("ngModel",e.detail.category_id),b.Jb(1),b.vc("ngForOf",e.foodCategoryList),b.Jb(3),b.vc("ngModel",e.detail.name),b.Jb(3),b.vc("ngModel",e.detail.price),b.Jb(7),b.vc("ngModel",e.detail.type),b.Jb(11),b.vc("ngModel",e.detail.status),b.Jb(11),b.vc("ngModel",e.detail.mostly_used),b.Jb(7),b.vc("disabled",!c.valid)}}const P=[{path:"",component:(()=>{class c{constructor(c,e,t){this.router=c,this.foodService=e,this.ui=t,this.searchTerms=new n.a,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.foodList=[],this.foodCategoryList=[],this.selectedPerPage=10,this.currentpage=1,this.getFoodCatList=()=>{this.foodService.getFoodCategoryList(500,1).subscribe(c=>{c.data&&(this.foodCategoryList=c.data.result)},c=>{console.log(c)})},this.getFoodList=c=>{this.ui.loader.show(),c&&(this.currentpage=c),this.foodService.getFoodList(this.selectedPerPage,this.currentpage).subscribe(c=>{c.data&&(this.foodList=c.data.result,this.total=c.data.total),this.ui.loader.hide()},c=>{this.ui.loader.hide(),console.log(c)})},this.onLimitSelect=c=>{this.selectedPerPage=c,this.getFoodList()},this.getFoodDetail=c=>{this.foodService.getSingleFoodDetail(c).subscribe(c=>{c.data&&(this.detail=c.data,console.log(this.detail))})},this.deleteFood=(c,e)=>{l.a.fire({title:"Do you want to delete this Food item?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(t=>{t.isConfirmed&&(this.ui.loader.show(),this.foodService.deleteFood(e).subscribe(e=>{l.a.fire({icon:"success",title:"Food item Deleted Successfully",showConfirmButton:!1,timer:1500}),this.foodList.splice(c,1),this.ui.loader.hide()},c=>this.ui.loader.hide()))})},this.addFood=()=>{this.ui.loader.show();const c={category_id:this.selectedCategory,name:this.foodName,price:Number(this.price),type:this.type,status:this.status,mostly_used:this.used};this.foodService.createFood(c).subscribe(c=>{this.closeAddModal.nativeElement.click(),this.ingredientName="",this.price="",this.type="",this.status="",l.a.fire({icon:"success",title:"Food item Created Successfully",showConfirmButton:!1,timer:1500}),this.getFoodList(),this.ui.loader.hide()},c=>this.ui.loader.hide())},this.editFood=c=>{this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,delete this.detail.sub_category_id,this.foodService.updateFood(c,this.detail).subscribe(c=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getFoodList()},c=>{this.ui.loader.hide()})},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])},this.searchTerms.pipe(Object(d.a)(500),Object(a.a)(),Object(r.a)(c=>this.foodService.getFoodListByName(c))).subscribe(c=>{console.log(c),this.foodList=JSON.parse(JSON.stringify(c.data))})}ngOnInit(){this.getFoodCatList(),this.getFoodList()}search(c){this.searchTerms.next(c)}changeOrder(c){this.sortOrder=!this.sortOrder,this.field=c,this.foodList.sort((e,t)=>this.sortOrder?t[c].localeCompare(e[c]):e[c].localeCompare(t[c]))}getSelectedCategory(c){console.log(c)}getSelectedUnit(c){console.log(c)}editStatus(c){this.detail.status=c,console.log(this.status)}}return c.\u0275fac=function(e){return new(e||c)(b.Wb(i.e),b.Wb(u.a),b.Wb(g.a))},c.\u0275cmp=b.Qb({type:c,selectors:[["app-food-list"]],viewQuery:function(c,e){var t;1&c&&(b.Rc(f,!0),b.Rc(m,!0)),2&c&&(b.Cc(t=b.lc())&&(e.closeEditModal=t.first),b.Cc(t=b.lc())&&(e.closeAddModal=t.first))},decls:116,vars:16,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-4","col-sm-12","col-md-2","cus-srch"],["type","text","id","birthday","placeholder","Search By Food","name","bname",1,"form-control","pl-0",3,"input"],[1,"offset-md-1","col-sm-12","col-md-2"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeAddModal",""],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"col-sm-11","col-md-5"],[1,"form-group","position-relative"],[1,"input-group"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Type","id","inputGroupSelect01","name","vn","required","",1,"custom-select",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"offset-md-1","col-sm-11","col-md-5"],["type","text","placeholder","Food Name","name","fName","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","number","placeholder","Food Price","name","fPrice","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["value","Veg"],["value","NonVeg"],["placeholder","Choose Status","id","inputGroupSelect01","name","vs","required","",1,"custom-select",3,"ngModel","ngModelChange"],["value","Active"],["value","Inactive"],["placeholder","Choose Status","id","inputGroupSelect01","name","vsd","required","",1,"custom-select",3,"ngModel","ngModelChange"],["value","Yes"],["value","No"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["type","button",1,"btn","btn-success","btn-sm",3,"routerLink","queryParams"],[1,"fa","fa-eye"],["colspan","100%",1,"text-center"],[3,"value"],["id","subform2","role","form"],["subForm2","ngForm"],["placeholder","Choose Type","id","inputGroupSelect01","name","vne","required","",1,"custom-select",3,"ngModel","ngModelChange"],["type","text","placeholder","Food Name","name","fName2","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","number","placeholder","Food Price","name","fPrice2","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[3,"value","selected"]],template:function(c,e){if(1&c&&(b.cc(0,"div",0),b.cc(1,"div",1),b.cc(2,"div",2),b.cc(3,"div",3),b.cc(4,"button",4),b.cc(5,"b"),b.Mc(6,"+ Add Food item"),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(7,"div",5),b.cc(8,"div",3),b.Mc(9," SEARCH BY FOOD "),b.cc(10,"input",6),b.kc("input",(function(c){return e.search(c.target.value)})),b.bc(),b.bc(),b.bc(),b.cc(11,"div",7),b.cc(12,"div",3),b.Mc(13," SELECT PER PAGE "),b.cc(14,"select",8),b.kc("ngModelChange",(function(c){return e.selectedPerPage=c}))("change",(function(c){return e.onLimitSelect(c.target.value)})),b.cc(15,"option",9),b.Mc(16,"10"),b.bc(),b.cc(17,"option",10),b.Mc(18,"25"),b.bc(),b.cc(19,"option",11),b.Mc(20,"50"),b.bc(),b.cc(21,"option",12),b.Mc(22,"100"),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(23,"div",13),b.cc(24,"div",14),b.cc(25,"table",15),b.cc(26,"thead"),b.cc(27,"tr"),b.cc(28,"th",16),b.Mc(29,"Name"),b.cc(30,"a",17),b.kc("click",(function(){return e.changeOrder("name")})),b.Xb(31,"i",18),b.bc(),b.bc(),b.cc(32,"th",16),b.Mc(33,"Type"),b.bc(),b.cc(34,"th",16),b.Mc(35,"Price"),b.bc(),b.cc(36,"th",16),b.Mc(37,"Category"),b.bc(),b.cc(38,"th",16),b.Mc(39,"Status"),b.bc(),b.cc(40,"th",16),b.Mc(41,"Mostly Used"),b.bc(),b.cc(42,"th",16),b.Mc(43,"Action"),b.bc(),b.cc(44,"th",16),b.Mc(45,"Ingredient"),b.bc(),b.bc(),b.bc(),b.Kc(46,F,3,8,"tbody",19),b.Kc(47,k,4,1,"ng-template",null,20,b.Lc),b.bc(),b.cc(49,"pagination-controls",21),b.kc("pageChange",(function(c){return e.getFoodList(c)})),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(50,"div",22,23),b.cc(52,"div",24),b.cc(53,"div",25),b.cc(54,"form",26,27),b.cc(56,"div",28),b.cc(57,"div",29),b.cc(58,"h5"),b.Mc(59,"Add Food"),b.bc(),b.bc(),b.cc(60,"div",30),b.cc(61,"div",31),b.cc(62,"div",32),b.cc(63,"div",33),b.cc(64,"label",34),b.Mc(65,"Select Category"),b.bc(),b.bc(),b.cc(66,"select",35),b.kc("ngModelChange",(function(c){return e.selectedCategory=c})),b.Kc(67,S,3,2,"ng-container",36),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(68,"div",37),b.cc(69,"div",31),b.cc(70,"input",38),b.kc("ngModelChange",(function(c){return e.foodName=c})),b.bc(),b.bc(),b.bc(),b.cc(71,"div",30),b.cc(72,"div",31),b.cc(73,"input",39),b.kc("ngModelChange",(function(c){return e.price=c})),b.bc(),b.bc(),b.bc(),b.cc(74,"div",37),b.cc(75,"div",31),b.cc(76,"div",32),b.cc(77,"div",33),b.cc(78,"label",34),b.Mc(79,"Select Type"),b.bc(),b.bc(),b.cc(80,"select",35),b.kc("ngModelChange",(function(c){return e.type=c})),b.cc(81,"option",40),b.Mc(82,"Veg"),b.bc(),b.cc(83,"option",41),b.Mc(84,"NonVeg"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(85,"div",30),b.cc(86,"div",31),b.cc(87,"div",32),b.cc(88,"div",33),b.cc(89,"label",34),b.Mc(90,"Select Status"),b.bc(),b.bc(),b.cc(91,"select",42),b.kc("ngModelChange",(function(c){return e.status=c})),b.cc(92,"option",43),b.Mc(93,"Active"),b.bc(),b.cc(94,"option",44),b.Mc(95,"Inactive"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(96,"div",37),b.cc(97,"div",31),b.cc(98,"div",32),b.cc(99,"div",33),b.cc(100,"label",34),b.Mc(101,"Mostly Used"),b.bc(),b.bc(),b.cc(102,"select",45),b.kc("ngModelChange",(function(c){return e.used=c})),b.cc(103,"option",46),b.Mc(104,"Yes"),b.bc(),b.cc(105,"option",47),b.Mc(106,"No"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(107,"div",28),b.cc(108,"div",48),b.cc(109,"button",49),b.kc("click",(function(){return e.addFood()})),b.Mc(110,"SUBMIT"),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.bc(),b.cc(111,"div",50,51),b.cc(113,"div",24),b.cc(114,"div",25),b.Kc(115,L,57,8,"form",52),b.bc(),b.bc(),b.bc()),2&c){const c=b.Dc(48),t=b.Dc(55);b.Jb(14),b.vc("ngModel",e.selectedPerPage),b.Jb(17),b.Nb("fa-caret-down",!e.sortOrder)("fa-caret-up",e.sortOrder),b.Jb(15),b.vc("ngIf",null==e.foodList?null:e.foodList.length)("ngIfElse",c),b.Jb(20),b.vc("ngModel",e.selectedCategory),b.Jb(1),b.vc("ngForOf",e.foodCategoryList),b.Jb(3),b.vc("ngModel",e.foodName),b.Jb(3),b.vc("ngModel",e.price),b.Jb(7),b.vc("ngModel",e.type),b.Jb(11),b.vc("ngModel",e.status),b.Jb(11),b.vc("ngModel",e.used),b.Jb(7),b.vc("disabled",!t.valid),b.Jb(6),b.vc("ngIf",e.detail)}},directives:[h.q,h.h,h.k,h.l,h.s,o.l,p.c,h.t,h.i,h.j,h.p,o.k,h.b,h.m,i.f],pipes:[p.b,o.r],styles:["[_ngcontent-%COMP%]::-webkit-datetime-edit{padding:1em}[_ngcontent-%COMP%]::-webkit-datetime-edit-text{padding:0 .3em}[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:green}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:14px;text-decoration:none}"]}),c})()}];let N=(()=>{class c{}return c.\u0275mod=b.Ub({type:c}),c.\u0275inj=b.Tb({factory:function(e){return new(e||c)},imports:[[i.i.forChild(P)],i.i]}),c})();var w=t("ZOsW");t.d(e,"FoodListModule",(function(){return O}));let O=(()=>{class c{}return c.\u0275mod=b.Ub({type:c}),c.\u0275inj=b.Tb({factory:function(e){return new(e||c)},imports:[[o.b,w.a,h.d,N,p.a]]}),c})()}}]);