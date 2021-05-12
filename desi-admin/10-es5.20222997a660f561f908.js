function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{r2I4:function(e,t,i){"use strict";i.r(t);var n,o=i("ofXK"),a=i("3Pt+"),l=i("tyNb"),c=i("PSD3"),r=i.n(c),d=i("fXoL"),b=i("AytR"),s=i("tk/3"),u=((n=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getEmployeeList",value:function(){return this.http.get("".concat(b.a.apiURL,"/users/view/all"))}},{key:"addEmployee",value:function(e){return this.http.post("".concat(b.a.apiURL,"/users/signup"),e)}},{key:"deleteEmployee",value:function(e){return this.http.get("".concat(b.a.apiURL,"/users/").concat(e,"/delete"))}},{key:"getEmployeeDetail",value:function(e){return this.http.get("".concat(b.a.apiURL,"/users/").concat(e,"/details"))}},{key:"editEmployeeDetail",value:function(e,t){return this.http.put("".concat(b.a.apiURL,"/users/").concat(e,"/edit"),t)}}]),e}()).\u0275fac=function(e){return new(e||n)(d.Yb(s.a))},n.\u0275prov=d.Kb({token:n,factory:n.\u0275fac,providedIn:"root"}),n),m=i("AXIP"),p=["closeEditModal"];function f(e,t){if(1&e){var i=d.Vb();d.Ub(0,"tr"),d.Ub(1,"td"),d.Ub(2,"B"),d.Ec(3),d.hc(4,"titlecase"),d.hc(5,"titlecase"),d.Tb(),d.Tb(),d.Ub(6,"td"),d.Ec(7),d.Tb(),d.Ub(8,"td"),d.Ec(9),d.Tb(),d.Ub(10,"td"),d.Ec(11),d.Tb(),d.Ub(12,"td"),d.Ec(13),d.hc(14,"titlecase"),d.Tb(),d.Ub(15,"td"),d.Ub(16,"button",40),d.cc("click",(function(){d.xc(i);var e=t.$implicit;return d.gc(2).getEmployeeDetail(e.userId)})),d.Pb(17,"i",41),d.Tb(),d.Ub(18,"button",42),d.cc("click",(function(){d.xc(i);var e=t.index,n=t.$implicit;return d.gc(2).deleteEmployee(e,n.userId)})),d.Pb(19,"i",43),d.Tb(),d.Tb(),d.Tb()}if(2&e){var n=t.$implicit;d.Bb(3),d.Hc("",d.ic(4,6,n.firstName)," ",d.ic(5,8,n.lastName),""),d.Bb(4),d.Fc(n.mobileNumber),d.Bb(2),d.Fc(n.email),d.Bb(2),d.Fc(n.password),d.Bb(2),d.Fc(d.ic(14,10,n.status))}}function h(e,t){if(1&e&&(d.Ub(0,"tbody"),d.Cc(1,f,20,12,"tr",39),d.Tb()),2&e){var i=d.gc();d.Bb(1),d.nc("ngForOf",i.employeeList)}}function g(e,t){if(1&e&&(d.Ub(0,"tbody"),d.Ub(1,"tr"),d.Ub(2,"td",44),d.Ec(3),d.Tb(),d.Tb(),d.Tb()),2&e){var i=d.gc();d.Bb(3),d.Fc(i.response)}}function v(e,t){if(1&e){var i=d.Vb();d.Ub(0,"form",45,46),d.Ub(2,"div",18),d.Ub(3,"div",19),d.Ub(4,"h5"),d.Ec(5,"Edit Employee Detail"),d.Tb(),d.Tb(),d.Ub(6,"div",20),d.Ub(7,"div",21),d.Ub(8,"input",47),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.firstName=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(9,"div",23),d.Ub(10,"div",21),d.Ub(11,"input",48),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.lastName=e})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(12,"div",18),d.Ub(13,"div",20),d.Ub(14,"div",21),d.Ub(15,"input",25),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.email=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(16,"div",23),d.Ub(17,"div",21),d.Ub(18,"input",49),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.mobileNumber=e})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(19,"div",18),d.Ub(20,"div",20),d.Ub(21,"div",21),d.Ub(22,"input",50),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.password=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(23,"div",23),d.Ub(24,"div",21),d.Ub(25,"div",28),d.Ub(26,"div",29),d.Ub(27,"label",30),d.Ec(28,"Status"),d.Tb(),d.Tb(),d.Ub(29,"select",51),d.cc("ngModelChange",(function(e){return d.xc(i),d.gc().detail.status=e}))("change",(function(e){return d.xc(i),d.gc().editStatus(e.target.value)})),d.Ub(30,"option",52),d.Ec(31,"Active"),d.Tb(),d.Ub(32,"option",53),d.Ec(33,"Inactive"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(34,"div",18),d.Ub(35,"div",34),d.Ub(36,"button",35),d.cc("click",(function(){d.xc(i);var e=d.gc();return e.editEmployee(e.detail.userId)})),d.Ec(37,"EDIT"),d.Tb(),d.Tb(),d.Tb(),d.Tb()}if(2&e){var n=d.vc(1),o=d.gc();d.Bb(8),d.nc("ngModel",o.detail.firstName),d.Bb(3),d.nc("ngModel",o.detail.lastName),d.Bb(4),d.nc("ngModel",o.detail.email),d.Bb(3),d.nc("ngModel",o.detail.mobileNumber),d.Bb(4),d.nc("ngModel",o.detail.password),d.Bb(7),d.nc("ngModel",o.detail.status),d.Bb(1),d.nc("selected","Active"===o.detail.status),d.Bb(2),d.nc("selected","Inactive"===o.detail.status),d.Bb(4),d.nc("disabled",!n.valid)}}var U,T,y=[{path:"",component:(U=function(){function e(t,i,n){var o=this;_classCallCheck(this,e),this.router=t,this.employeeService=i,this.ui=n,this.name=[],this.response="No Data Found",this.sortOrder=!1,this.fullName=localStorage.getItem("name"),this.employeeList=[],this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),o.router.navigate(["/login"])}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getEmployeesList()}},{key:"addStatus",value:function(e){this.status=e,console.log(this.status)}},{key:"editStatus",value:function(e){this.detail.status=e,console.log(this.status)}},{key:"getEmployeesList",value:function(){var e=this;this.ui.loader.show(),this.employeeService.getEmployeeList().subscribe((function(t){t.data&&(e.employeeList=t.data),e.ui.loader.hide()}),(function(t){return e.ui.loader.hide()}))}},{key:"addEmployee",value:function(){var e=this;this.ui.loader.show();var t={firstName:this.firstName,lastName:this.lastName,mobileNumber:this.phone,email:this.email,password:this.password,status:this.status};this.employeeList.push(t),this.employeeService.addEmployee(t).subscribe((function(t){e.firstName="",e.lastName="",e.phone="",e.email="",e.password="",e.status="",r.a.fire({icon:"success",title:"User Created Successfully",showConfirmButton:!1,timer:1500}),e.ui.loader.hide()}),(function(t){return e.ui.loader.hide()}))}},{key:"changeOrder",value:function(e){var t=this;this.sortOrder=!this.sortOrder,this.field=e,this.employeeList.sort((function(i,n){return t.sortOrder?n[e].localeCompare(i[e]):i[e].localeCompare(n[e])}))}},{key:"deleteEmployee",value:function(e,t){var i=this;r.a.fire({title:"Do you want to delete this User?",showCancelButton:!0,confirmButtonText:"YES",cancelButtonText:"CANCEL"}).then((function(n){n.isConfirmed&&(i.ui.loader.show(),i.employeeService.deleteEmployee(t).subscribe((function(t){r.a.fire({icon:"success",title:"User Deleted Successfully",showConfirmButton:!1,timer:1500}),i.employeeList.splice(e,1),i.ui.loader.hide()}),(function(e){return i.ui.loader.hide()})))}))}},{key:"getEmployeeDetail",value:function(e){var t=this;this.employeeService.getEmployeeDetail(e).subscribe((function(e){e.data&&(t.detail=e.data)}))}},{key:"editEmployee",value:function(e){var t=this;this.ui.loader.show(),delete this.detail.validationToken,delete this.detail.createdOn,this.employeeService.editEmployeeDetail(e,this.detail).subscribe((function(e){t.closeEditModal.nativeElement.click(),t.detail={},t.ui.loader.hide(),t.getEmployeesList()}),(function(e){t.ui.loader.hide()}))}}]),e}(),U.\u0275fac=function(e){return new(e||U)(d.Ob(l.e),d.Ob(u),d.Ob(m.a))},U.\u0275cmp=d.Ib({type:U,selectors:[["app-employee"]],viewQuery:function(e,t){var i;1&e&&d.Jc(p,!0),2&e&&d.uc(i=d.dc())&&(t.closeEditModal=i.first)},decls:75,vars:14,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-3"],[1,"form-group"],["data-toggle","modal","data-target","#addWaiter",1,"shortcut-btn","d-block","w-100"],[1,"col-sm-12"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],[4,"ngIf","ngIfElse"],["elseBlock",""],["id","addWaiter","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],[1,"modal-dialog","modal-lg"],[1,"modal-content",2,"padding","2%"],["id","subform","role","form"],["subForm","ngForm"],[1,"row"],[1,"col-12"],[1,"offset-md-1","col-sm-12","col-md-5"],[1,"form-group","position-relative"],["type","text","placeholder","First Name","name","fname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"col-sm-12","col-md-5"],["type","text","placeholder","Last Name","name","lname","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Email","name","em","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","pass","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Mobile Number","name","mob","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["for","inputGroupSelect01",1,"input-group-text"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active"],["value","Inactive"],[1,"col-12",2,"text-align","center"],["type","button",1,"btn","btn-success",3,"disabled","click"],["id","addWaiter2","tabindex","-1","role","dialog","aria-labelledby","myLargeModalLabel","aria-hidden","true",1,"modal","fade","bd-example-modal-lg"],["closeEditModal",""],["id","subform2","role","form",4,"ngIf"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#addWaiter2",1,"btn","btn-success","btn-sm",3,"click"],[1,"fa","fa-pencil"],["type","button",1,"btn","btn-danger","btn-sm",2,"margin-left","4px",3,"click"],[1,"fa","fa-trash-o"],["colspan","100%",1,"text-center"],["id","subform2","role","form"],["subForm2","ngForm"],["type","text","placeholder","First Name","name","fname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Last Name","name","lname1","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Phone","name","phe","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["type","text","placeholder","Password","name","esssm","autocomplete","new-password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],["placeholder","Choose Status","id","inputGroupSelect01","name","stat2",1,"custom-select",3,"ngModel","ngModelChange","change"],["value","Active",3,"selected"],["value","Inactive",3,"selected"]],template:function(e,t){if(1&e&&(d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"div",2),d.Ub(3,"div",3),d.Ub(4,"button",4),d.Ub(5,"b"),d.Ec(6,"+ Add Waiter/Employee"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(7,"div",5),d.Ub(8,"div",6),d.Ub(9,"table",7),d.Ub(10,"thead"),d.Ub(11,"tr"),d.Ub(12,"th",8),d.Ec(13,"Name"),d.Ub(14,"a",9),d.cc("click",(function(){return t.changeOrder("firstName")})),d.Pb(15,"i",10),d.Tb(),d.Tb(),d.Ub(16,"th",8),d.Ec(17,"Phone"),d.Tb(),d.Ub(18,"th",8),d.Ec(19,"User Name"),d.Tb(),d.Ub(20,"th",8),d.Ec(21,"Password"),d.Tb(),d.Ub(22,"th",8),d.Ec(23,"Status"),d.Tb(),d.Ub(24,"th",8),d.Ec(25,"Action"),d.Tb(),d.Tb(),d.Tb(),d.Cc(26,h,2,1,"tbody",11),d.Cc(27,g,4,1,"ng-template",null,12,d.Dc),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(29,"div",13),d.Ub(30,"div",14),d.Ub(31,"div",15),d.Ub(32,"form",16,17),d.Ub(34,"div",18),d.Ub(35,"div",19),d.Ub(36,"h5"),d.Ec(37,"Add an Employee"),d.Tb(),d.Tb(),d.Ub(38,"div",20),d.Ub(39,"div",21),d.Ub(40,"input",22),d.cc("ngModelChange",(function(e){return t.firstName=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(41,"div",23),d.Ub(42,"div",21),d.Ub(43,"input",24),d.cc("ngModelChange",(function(e){return t.lastName=e})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(44,"div",18),d.Ub(45,"div",20),d.Ub(46,"div",21),d.Ub(47,"input",25),d.cc("ngModelChange",(function(e){return t.email=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(48,"div",23),d.Ub(49,"div",21),d.Ub(50,"input",26),d.cc("ngModelChange",(function(e){return t.password=e})),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(51,"div",18),d.Ub(52,"div",20),d.Ub(53,"div",21),d.Ub(54,"input",27),d.cc("ngModelChange",(function(e){return t.phone=e})),d.Tb(),d.Tb(),d.Tb(),d.Ub(55,"div",23),d.Ub(56,"div",21),d.Ub(57,"div",28),d.Ub(58,"div",29),d.Ub(59,"label",30),d.Ec(60,"Status"),d.Tb(),d.Tb(),d.Ub(61,"select",31),d.cc("ngModelChange",(function(e){return t.status=e}))("change",(function(e){return t.addStatus(e.target.value)})),d.Ub(62,"option",32),d.Ec(63,"Active"),d.Tb(),d.Ub(64,"option",33),d.Ec(65,"Inactive"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(66,"div",18),d.Ub(67,"div",34),d.Ub(68,"button",35),d.cc("click",(function(){return t.addEmployee()})),d.Ec(69,"SUBMIT"),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Tb(),d.Ub(70,"div",36,37),d.Ub(72,"div",14),d.Ub(73,"div",15),d.Cc(74,v,38,9,"form",38),d.Tb(),d.Tb(),d.Tb()),2&e){var i=d.vc(28),n=d.vc(33);d.Bb(15),d.Fb("fa-caret-down",!t.sortOrder)("fa-caret-up",t.sortOrder),d.Bb(11),d.nc("ngIf",null==t.employeeList?null:t.employeeList.length)("ngIfElse",i),d.Bb(14),d.nc("ngModel",t.firstName),d.Bb(3),d.nc("ngModel",t.lastName),d.Bb(4),d.nc("ngModel",t.email),d.Bb(3),d.nc("ngModel",t.password),d.Bb(4),d.nc("ngModel",t.phone),d.Bb(7),d.nc("ngModel",t.status),d.Bb(7),d.nc("disabled",!n.valid),d.Bb(6),d.nc("ngIf",t.detail)}},directives:[o.k,a.s,a.h,a.i,a.b,a.o,a.g,a.j,a.p,a.k,a.r,o.j],pipes:[o.q],styles:[""]}),U)}],E=((T=function e(){_classCallCheck(this,e)}).\u0275mod=d.Mb({type:T}),T.\u0275inj=d.Lb({factory:function(e){return new(e||T)},imports:[[l.i.forChild(y)],l.i]}),T),M=i("wloI"),C=i("ZOsW");i.d(t,"EmployeeModule",(function(){return k}));var w,k=((w=function e(){_classCallCheck(this,e)}).\u0275mod=d.Mb({type:w}),w.\u0275inj=d.Lb({factory:function(e){return new(e||w)},providers:[u],imports:[[o.b,E,a.c,C.a,M.a]]}),w)}}]);