(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"P+7w":function(e,o,t){"use strict";t.r(o);var r=t("ofXK"),i=t("3Pt+"),c=t("tyNb"),s=t("fXoL"),a=t("AXIP"),n=t("rwBg");function l(e,o){if(1&e&&(s.cc(0,"div",25),s.cc(1,"div",26),s.Lc(2),s.bc(),s.bc()),2&e){const e=s.oc();s.Jb(2),s.Nc(" ",e.message," ")}}const m=[{path:"",component:(()=>{class e{constructor(e,o,t,r){this.router=e,this.route=o,this.ui=t,this.userService=r,this.rememberMe="false",this.showPassword=!1,this.inputType="password",this.loginError=!1}ngOnInit(){this.remember()}login(){this.ui.loader.show(),this.userService.login({email:this.email,password:this.password}).subscribe(e=>{this.userService.setRole(e.data.role),this.loginError=!1,localStorage.setItem("token",e.data.authToken),localStorage.setItem("isLoggedIn","true"),localStorage.setItem("name",`${e.data.firstName} ${e.data.lastName}`),this.rememberMe?(localStorage.setItem("email",this.email),localStorage.setItem("password",this.password),localStorage.setItem("rememberMe",String(this.rememberMe))):(this.email="",this.password="",localStorage.removeItem("email"),localStorage.removeItem("password"),localStorage.setItem("rememberMe",String(this.rememberMe))),this.userService.getRole().subscribe(e=>{console.log(e),"admin"===e?(this.router.navigate(["/user/employee"]),window.location.reload()):"operator"===e&&(this.router.navigate(["/user/billing"]),window.location.reload())}),this.ui.loader.hide()},e=>{this.ui.loader.hide(),this.loginError=!0,this.message=e.error.message})}remember(){"true"===localStorage.getItem("rememberMe")?(this.cookieRem=Boolean(localStorage.getItem("rememberMe")),this.cookiePass=localStorage.getItem("password"),this.cookieMail=localStorage.getItem("email"),this.router.navigate(["/login"])&&(this.rememberMe=this.cookieRem,this.email=this.cookieMail,this.password=this.cookiePass)):"false"===localStorage.getItem("rememberMe")&&(this.cookieRem=!1,this.email="",this.password="")}}return e.\u0275fac=function(o){return new(o||e)(s.Wb(c.e),s.Wb(c.a),s.Wb(a.a),s.Wb(n.a))},e.\u0275cmp=s.Qb({type:e,selectors:[["app-login"]],decls:35,vars:5,consts:[[1,"container-fluid","position-relative",2,"height","100vh"],[1,"row"],[1,"login-box",2,"margin-top","7%"],[1,"col-xl-4","offset-xl-4","col-md-6","offset-md-3"],[1,"p-2"],[2,"text-align","center"],[1,"fas","fa-heart",2,"color","red"],[2,"color","red"],["id","loginForm","role","form"],["loginForm","ngForm"],["class","group animated fadeIn",4,"ngIf"],[1,"form-group","position-relative"],["type","text","placeholder","USERNAME","name","email","pattern","[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"user-icon"],["type","password","placeholder","PASSWORD","name","password","required","",1,"form-control","mb-4",3,"ngModel","ngModelChange"],[1,"pass-icon"],[1,"form-group"],[1,"col"],[1,"chk-holder"],["type","checkbox","id","ossm","name","rememberMe",1,"chkmrk",3,"ngModel","ngModelChange"],["for","ossm",1,"text-uppercase"],[1,"checkmark"],["type","submit",1,"btn","btn-success","log-btn","w-100",3,"disabled","click"],[1,"clearfix"],[1,"col-lg-10","offset-lg-1","mt-5"],[1,"group","animated","fadeIn"],[1,"alert","alert-danger","text-center"]],template:function(e,o){if(1&e&&(s.cc(0,"div",0),s.cc(1,"div",1),s.cc(2,"div",2),s.cc(3,"div",3),s.cc(4,"div",4),s.cc(5,"h2",5),s.cc(6,"B"),s.Xb(7,"i",6),s.Lc(8,"\xa0"),s.cc(9,"span",7),s.Lc(10,"DESI"),s.bc(),s.Lc(11," CHINESE"),s.bc(),s.bc(),s.cc(12,"form",8,9),s.Jc(14,l,3,1,"div",10),s.cc(15,"div",11),s.cc(16,"input",12),s.kc("ngModelChange",(function(e){return o.email=e})),s.bc(),s.Xb(17,"span",13),s.bc(),s.cc(18,"div",11),s.cc(19,"input",14),s.kc("ngModelChange",(function(e){return o.password=e})),s.bc(),s.Xb(20,"span",15),s.bc(),s.cc(21,"div",16),s.cc(22,"div",1),s.cc(23,"div",17),s.cc(24,"div",18),s.cc(25,"input",19),s.kc("ngModelChange",(function(e){return o.rememberMe=e})),s.bc(),s.cc(26,"label",20),s.Lc(27,"Remember Me"),s.bc(),s.Xb(28,"span",21),s.bc(),s.bc(),s.bc(),s.bc(),s.cc(29,"div",16),s.cc(30,"button",22),s.kc("click",(function(){return o.login()})),s.Lc(31,"Login"),s.bc(),s.bc(),s.bc(),s.bc(),s.bc(),s.Xb(32,"div",23),s.Xb(33,"div",24),s.bc(),s.bc(),s.Xb(34,"div",23),s.bc()),2&e){const e=s.Cc(13);s.Jb(14),s.uc("ngIf",o.loginError),s.Jb(2),s.uc("ngModel",o.email),s.Jb(3),s.uc("ngModel",o.password),s.Jb(6),s.uc("ngModel",o.rememberMe),s.Jb(5),s.uc("disabled",!e.valid)}},directives:[i.t,i.i,i.j,r.l,i.b,i.n,i.p,i.h,i.k,i.a],styles:[""]}),e})()}];let d=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(o){return new(o||e)},imports:[[c.i.forChild(m)],c.i]}),e})();t.d(o,"LoginModule",(function(){return b}));let b=(()=>{class e{}return e.\u0275mod=s.Ub({type:e}),e.\u0275inj=s.Tb({factory:function(o){return new(o||e)},providers:[n.a],imports:[[r.b,d,i.d]]}),e})()}}]);