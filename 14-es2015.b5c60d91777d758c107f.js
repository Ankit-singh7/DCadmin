(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{r2I4:function(e,c,t){"use strict";t.r(c);var i=t("ofXK"),o=t("3Pt+"),a=t("tyNb"),n=t("PSD3"),l=t.n(n),s=t("fXoL"),r=t("AytR"),d=t("tk/3");let b=(()=>{class e{constructor(e){this.http=e}getEmployeeList(e,c){return this.http.get(`${r.a.apiURL}/users/view/all?per_page=${e}&current_page=${c}`)}addEmployee(e){return this.http.post(`${r.a.apiURL}/users/signup`,e)}deleteEmployee(e){return this.http.get(`${r.a.apiURL}/users/${e}/delete`)}getEmployeeDetail(e){return this.http.get(`${r.a.apiURL}/users/${e}/details`)}editEmployeeDetail(e,c){return this.http.put(`${r.a.apiURL}/users/${e}/edit`,c)}}return e.\u0275fac=function(c){return new(c||e)(s.gc(d.a))},e.\u0275prov=s.Sb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var u=t("AXIP"),m=t("oOf3");const p=["closeEditModal"];function h(e,c){if(1&e){const e=s.dc();s.cc(0,"tr"),s.cc(1,"td"),s.cc(2,"B"),s.Mc(3),s.pc(4,"titlecase"),s.pc(5,"titlecase"),s.bc(),s.bc(),s.cc(6,"td"),s.Mc(7),s.bc(),s.cc(8,"td"),s.Mc(9),s.bc(),s.cc(10,"td"),s.Mc(11),s.bc(),s.cc(12,"td"),s.Mc(13),s.pc(14,"titlecase"),s.bc(),s.cc(15,"td"),s.cc(16,"button",47),s.kc("click",(function(){s.Fc(e);const t=c.$implicit;return s.oc(2).getEmployeeDetail(t.userId)})),s.Xb(17,"i",48),s.bc(),s.cc(18,"button",49),s.kc("click",(function(){s.Fc(e);const t=c.index,i=c.$implicit;return s.oc(2).deleteEmployee(t,i.userId)})),s.Xb(19,"i",50),s.bc(),s.bc(),s.bc()}if(2&e){const e=c.$implicit;s.Jb(3),s.Pc("",s.qc(4,6,e.firstName)," ",s.qc(5,8,e.lastName),""),s.Jb(4),s.Nc(e.mobileNumber),s.Jb(2),s.Nc(e.email),s.Jb(2),s.Nc(e.password),s.Jb(2),s.Nc(s.qc(14,10,e.status))}}const g=function(e,c,t){return{itemsPerPage:e,currentPage:c,totalItems:t}};function f(e,c){if(1&e&&(s.cc(0,"tbody"),s.Kc(1,h,20,12,"tr",46),s.pc(2,"paginate"),s.bc()),2&e){const e=s.oc();s.Jb(1),s.vc("ngForOf",s.rc(2,1,e.employeeList,s.Ac(4,g,e.selectedPerPage,e.currentpage,e.total)))}}function v(e,c){if(1&e&&(s.cc(0,"tbody"),s.cc(1,"tr"),s.cc(2,"td",51),s.Mc(3),s.bc(),s.bc(),s.bc()),2&e){const e=s.oc();s.Jb(3),s.Nc(e.response)}}function M(e,c){if(1&e){const e=s.dc();s.cc(0,"form",52,53),s.cc(2,"div",25),s.cc(3,"div",26),s.cc(4,"h5"),s.Mc(5,"Edit Employee Detail"),s.bc(),s.bc(),s.cc(6,"div",27),s.cc(7,"div",28),s.cc(8,"input",54),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.firstName=c})),s.bc(),s.bc(),s.bc(),s.cc(9,"div",30),s.cc(10,"div",28),s.cc(11,"input",55),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.lastName=c})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(12,"div",25),s.cc(13,"div",27),s.cc(14,"div",28),s.cc(15,"input",32),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.email=c})),s.bc(),s.bc(),s.bc(),s.cc(16,"div",30),s.cc(17,"div",28),s.cc(18,"input",56),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.mobileNumber=c})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(19,"div",25),s.cc(20,"div",27),s.cc(21,"div",28),s.cc(22,"input",57),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.password=c})),s.bc(),s.bc(),s.bc(),s.cc(23,"div",30),s.cc(24,"div",28),s.cc(25,"div",35),s.cc(26,"div",36),s.cc(27,"label",37),s.Mc(28,"Status"),s.bc(),s.bc(),s.cc(29,"select",58),s.kc("ngModelChange",(function(c){return s.Fc(e),s.oc().detail.status=c}))("change",(function(c){return s.Fc(e),s.oc().editStatus(c.target.value)})),s.cc(30,"option",59),s.Mc(31,"Active"),s.bc(),s.cc(32,"option",60),s.Mc(33,"Inactive"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(34,"div",25),s.cc(35,"div",41),s.cc(36,"button",42),s.kc("click",(function(){s.Fc(e);const c=s.oc();return c.editEmployee(c.detail.userId)})),s.Mc(37,"EDIT"),s.bc(),s.bc(),s.bc(),s.bc()}if(2&e){const e=s.Dc(1),c=s.oc();s.Jb(8),s.vc("ngModel",c.detail.firstName),s.Jb(3),s.vc("ngModel",c.detail.lastName),s.Jb(4),s.vc("ngModel",c.detail.email),s.Jb(3),s.vc("ngModel",c.detail.mobileNumber),s.Jb(4),s.vc("ngModel",c.detail.password),s.Jb(7),s.vc("ngModel",c.detail.status),s.Jb(1),s.vc("selected","Active"===c.detail.status),s.Jb(2),s.vc("selected","Inactive"===c.detail.status),s.Jb(4),s.vc("disabled",!e.valid)}}const y=[{path:"",component:(()=>{class e{constructor(e,c,t){this.router=e,this.employeeService=c,this.ui=t,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.employeeList=[],this.selectedPerPage=10,this.currentpage=1,this.onLimitSelect=e=>{this.selectedPerPage=e,this.getEmployeesList()},this.logout=()=>{localStorage.setItem("isLoggedIn",String(!1)),this.router.navigate(["/login"])}}ngOnInit(){this.getEmployeesList()}addStatus(e){this.status=e,console.log(this.status)}editStatus(e){this.detail.status=e,console.log(this.status)}getEmployeesList(e){this.ui.loader.show(),e&&(this.currentpage=e),this.employeeService.getEmployeeList(this.selectedPerPage,this.currentpage).subscribe(e=>{e.data&&(this.employeeList=e.data.result,this.total=e.data.total),this.ui.loader.hide()},e=>this.ui.loader.hide())}addEmployee(){this.ui.loader.show();const e={firstName:this.firstName,lastName:this.lastName,mobileNumber:this.phone,email:this.email,password:this.password,status:this.status};this.employeeList.push(e),this.employeeService.addEmployee(e).subscribe(e=>{this.firstName="",this.lastName="",this.phone="",this.email="",this.password="",this.status="",l.a.fire({icon:"success",title:"User Created Successfully",showConfirmButton:!1,timer:1500}),this.ui.loader.hide()},e=>this.ui.loader.hide())}changeOrder(e){this.sortOrder=!this.sortOrder,this.field=e,this.employeeList.sort((c,t)=>this.sortOrder?t[e].localeCompare(c[e]):c[e].localeCompare(t[e]))}deleteEmployee(e,c){l.a.fire({title:"Do you want to delete this User?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then(t=>{t.isConfirmed&&(this.ui.loader.show(),this.employeeService.deleteEmployee(c).subscribe(c=>{l.a.fire({icon:"success",title:"User Deleted Successfully",showConfirmButton:!1,timer:1500}),this.employeeList.splice(e,1),this.ui.loader.hide()},e=>this.ui.loader.hide()))})}getEmployeeDetail(e){this.employeeService.getEmployeeDetail(e).subscribe(e=>{e.data&&(this.detail=e.data)})}editEmployee(e){this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.employeeService.editEmployeeDetail(e,this.detail).subscribe(e=>{this.closeEditModal.nativeElement.click(),this.detail={},this.ui.loader.hide(),this.getEmployeesList()},e=>{this.ui.loader.hide()})}}return e.\u0275fac=function(c){return new(c||e)(s.Wb(a.e),s.Wb(b),s.Wb(u.a))},e.\u0275cmp=s.Qb({type:e,selectors:[["app-employee"]],viewQuery:function(e,c){var t;1&e&&s.Rc(p,!0),2&e&&s.Cc(t=s.lc())&&(c.closeEditModal=t.first)},decls:88,vars:15,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"offset-md-7","col-sm-12","col-md-2"],["name","pay","id","pay",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],["value","10"],["value","25"],["value","50"],["value","100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],[2,"text-align","center",3,"pageChange"],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"offset-md-1","col-sm-12","col-md-5"],[1,"form-group","position-relative"],["type","text","placeholder","First Name","name","fname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-sm-12","col-md-5"],["type","text","placeholder","Last Name","name","lname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Email","name","em","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","pass","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Mobile Number","name","mob","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active"],["value","Inactive"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform2","role","form"],["subForm2","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Last Name","name","lname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Phone","name","phe","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","esssm","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat2",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active",3,"selected"],["value","Inactive",3,"selected"]],template:function(e,c){if(1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.cc(4,"button",4),s.cc(5,"b"),s.Mc(6,"+ Add Waiter/Employee"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(7,"div",5),s.cc(8,"div",3),s.Mc(9," SELECT PER PAGE "),s.cc(10,"select",6),s.kc("ngModelChange",(function(e){return c.selectedPerPage=e}))("change",(function(e){return c.onLimitSelect(e.target.value)})),s.cc(11,"option",7),s.Mc(12,"10"),s.bc(),s.cc(13,"option",8),s.Mc(14,"25"),s.bc(),s.cc(15,"option",9),s.Mc(16,"50"),s.bc(),s.cc(17,"option",10),s.Mc(18,"100"),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(19,"div",11),s.cc(20,"div",12),s.cc(21,"table",13),s.cc(22,"thead"),s.cc(23,"tr"),s.cc(24,"th",14),s.Mc(25,"Name"),s.cc(26,"a",15),s.kc("click",(function(){return c.changeOrder("firstName")})),s.Xb(27,"i",16),s.bc(),s.bc(),s.cc(28,"th",14),s.Mc(29,"Phone"),s.bc(),s.cc(30,"th",14),s.Mc(31,"User Name"),s.bc(),s.cc(32,"th",14),s.Mc(33,"Password"),s.bc(),s.cc(34,"th",14),s.Mc(35,"Status"),s.bc(),s.cc(36,"th",14),s.Mc(37,"Action"),s.bc(),s.bc(),s.bc(),s.Kc(38,f,3,8,"tbody",17),s.Kc(39,v,4,1,"ng-template",null,18,s.Lc),s.bc(),s.cc(41,"pagination-controls",19),s.kc("pageChange",(function(e){return c.getEmployeesList(e)})),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(42,"div",20),s.cc(43,"div",21),s.cc(44,"div",22),s.cc(45,"form",23,24),s.cc(47,"div",25),s.cc(48,"div",26),s.cc(49,"h5"),s.Mc(50,"Add an Employee"),s.bc(),s.bc(),s.cc(51,"div",27),s.cc(52,"div",28),s.cc(53,"input",29),s.kc("ngModelChange",(function(e){return c.firstName=e})),s.bc(),s.bc(),s.bc(),s.cc(54,"div",30),s.cc(55,"div",28),s.cc(56,"input",31),s.kc("ngModelChange",(function(e){return c.lastName=e})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(57,"div",25),s.cc(58,"div",27),s.cc(59,"div",28),s.cc(60,"input",32),s.kc("ngModelChange",(function(e){return c.email=e})),s.bc(),s.bc(),s.bc(),s.cc(61,"div",30),s.cc(62,"div",28),s.cc(63,"input",33),s.kc("ngModelChange",(function(e){return c.password=e})),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(64,"div",25),s.cc(65,"div",27),s.cc(66,"div",28),s.cc(67,"input",34),s.kc("ngModelChange",(function(e){return c.phone=e})),s.bc(),s.bc(),s.bc(),s.cc(68,"div",30),s.cc(69,"div",28),s.cc(70,"div",35),s.cc(71,"div",36),s.cc(72,"label",37),s.Mc(73,"Status"),s.bc(),s.bc(),s.cc(74,"select",38),s.kc("ngModelChange",(function(e){return c.status=e}))("change",(function(e){return c.addStatus(e.target.value)})),s.cc(75,"option",39),s.Mc(76,"Active"),s.bc(),s.cc(77,"option",40),s.Mc(78,"Inactive"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(79,"div",25),s.cc(80,"div",41),s.cc(81,"button",42),s.kc("click",(function(){return c.addEmployee()})),s.Mc(82,"SUBMIT"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(83,"div",43,44),s.cc(85,"div",21),s.cc(86,"div",22),s.Kc(87,M,38,9,"form",45),s.bc(),s.bc(),s.bc()),2&e){const e=s.Dc(40),t=s.Dc(46);s.Jb(10),s.vc("ngModel",c.selectedPerPage),s.Jb(17),s.Nb("fa-caret-down",!c.sortOrder)("fa-caret-up",c.sortOrder),s.Jb(11),s.vc("ngIf",null==c.employeeList?null:c.employeeList.length)("ngIfElse",e),s.Jb(15),s.vc("ngModel",c.firstName),s.Jb(3),s.vc("ngModel",c.lastName),s.Jb(4),s.vc("ngModel",c.email),s.Jb(3),s.vc("ngModel",c.password),s.Jb(4),s.vc("ngModel",c.phone),s.Jb(7),s.vc("ngModel",c.status),s.Jb(7),s.vc("disabled",!t.valid),s.Jb(6),s.vc("ngIf",c.detail)}},directives:[o.q,o.h,o.k,o.l,o.s,i.l,m.c,o.t,o.i,o.j,o.b,o.p,i.k],pipes:[m.b,i.r],styles:[""]}),e})()}];let w=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(c){return new(c||e)},imports:[[a.i.forChild(y)],a.i]}),e})();var E=t("wloI"),C=t("ZOsW");t.d(c,"EmployeeModule",(function(){return k}));let k=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(c){return new(c||e)},providers:[b],imports:[[i.b,w,o.d,C.a,E.a,m.a]]}),e})()}}]);