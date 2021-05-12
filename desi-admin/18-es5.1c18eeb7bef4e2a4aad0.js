function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"2WZm":function(e,t,n){"use strict";n.r(t);var r,a=n("ofXK"),s=n("3Pt+"),i=n("tyNb"),o=n("wd/R"),c=n("fXoL"),l=n("AytR"),u=n("tk/3"),b=((r=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getSessionList",value:function(){return this.http.get("".concat(l.a.apiURL,"/session/view/all"))}}]),e}()).\u0275fac=function(e){return new(e||r)(c.Yb(u.a))},r.\u0275prov=c.Kb({token:r,factory:r.\u0275fac,providedIn:"root"}),r),d=n("sumL"),f=n("rwBg"),h=n("AXIP"),p=n("X+I5"),g=["closeEditModal"];function m(e,t){if(1&e&&(c.Sb(0),c.Ub(1,"option",17),c.Ec(2),c.Tb(),c.Rb()),2&e){var n=t.$implicit;c.Bb(1),c.nc("value",n.fullName),c.Bb(1),c.Fc(n.fullName)}}function v(e,t){if(1&e&&(c.Ub(0,"tr"),c.Ub(1,"td"),c.Ub(2,"B"),c.Ec(3),c.hc(4,"date"),c.Tb(),c.Tb(),c.Ub(5,"td"),c.Ec(6),c.Tb(),c.Ub(7,"td"),c.Ec(8),c.Tb(),c.Ub(9,"td"),c.Ec(10),c.Tb(),c.Tb()),2&e){var n=t.$implicit;c.Bb(3),c.Fc(c.jc(4,4,n.createdOn,"MMM d, y, h:mm:ss a")),c.Bb(3),c.Fc(n.user_name),c.Bb(2),c.Gc("\u20b9 ",n.session_amount,""),c.Bb(2),c.Gc("\u20b9 ",n.withdrawn,"")}}function y(e,t){if(1&e&&(c.Ub(0,"tbody",18),c.Cc(1,v,11,7,"tr",7),c.hc(2,"filter"),c.hc(3,"filter"),c.Tb()),2&e){var n=c.gc();c.Bb(1),c.nc("ngForOf",c.kc(2,1,c.kc(3,5,n.sessionList,"user_name",n.selectedUserName),"date",n.selectedDate))}}function T(e,t){if(1&e&&(c.Ub(0,"tbody"),c.Ub(1,"tr"),c.Ub(2,"td",19),c.Ec(3),c.Tb(),c.Tb(),c.Tb()),2&e){var n=c.gc();c.Bb(3),c.Fc(n.response)}}var w,U,_=[{path:"",component:(w=function(){function e(t,n,r,a,s){var i=this;_classCallCheck(this,e),this.router=t,this.sessionService=n,this.billService=r,this.userService=a,this.ui=s,this.name=[],this.sortOrder=!1,this.sortFields={user_name:!0,session_amount:!0,withdrawn:!0},this.fullName=localStorage.getItem("name"),this.sessionList=[],this.response="No Data to Show",this.userNameList=[],this.getTotalSales=function(){i.billService.getTotalSale().subscribe((function(e){i.total=e.data?e.data[0].total:0}))},this.logout=function(){localStorage.setItem("isLoggedIn",String(!1)),i.router.navigate(["/login"])}}return _createClass(e,[{key:"ngOnInit",value:function(){this.getSessionList(),this.getAllUsers(),this.getTotalSales()}},{key:"addStatus",value:function(e){this.status=e,console.log(this.status)}},{key:"editStatus",value:function(e){this.detail.status=e,console.log(this.status)}},{key:"getAllUsers",value:function(){var e=this;this.userService.getAllUsers().subscribe((function(t){var n;e.userNameList.push({fullName:"CLEAR SEARCH"});var r=t.data.map((function(e){return{fullName:"".concat(e.firstName," ").concat(e.lastName)}}));(n=e.userNameList).push.apply(n,_toConsumableArray(r)),console.log(e.userNameList)}))}},{key:"getSessionList",value:function(){var e=this;this.ui.loader.show(),this.sessionService.getSessionList().subscribe((function(t){t.data&&(e.sessionList=t.data.map((function(e){return Object.assign({date:o(e.createdOn).format("YYYY-MM-DD")},e)}))),e.ui.loader.hide()}),(function(t){return e.ui.loader.hide()}))}},{key:"changeOrder",value:function(e){var t=this;this.sortOrder=!this.sortOrder,this.field=e,this.sortFields[e]=this.sortOrder,this.sessionList.sort((function(n,r){return"withdrawn"===e||"session_amount"===e?t.sortOrder?r[e]-n[e]:n[e]-r[e]:t.sortOrder?r[e].localeCompare(n[e]):n[e].localeCompare(r[e])}))}},{key:"onUserSelect",value:function(e){this.selectedUserName=e,"CLEAR SEARCH"===this.selectedUserName&&(this.selectedUserName="")}},{key:"changedDate",value:function(e){console.log(e)}}]),e}(),w.\u0275fac=function(e){return new(e||w)(c.Ob(i.e),c.Ob(b),c.Ob(d.a),c.Ob(f.a),c.Ob(h.a))},w.\u0275cmp=c.Ib({type:w,selectors:[["app-session"]],viewQuery:function(e,t){var n;1&e&&c.Jc(g,!0),2&e&&c.uc(n=c.dc())&&(t.closeEditModal=n.first)},decls:39,vars:18,consts:[[1,"container-fluid"],[1,"row","dash-tab"],[1,"col-sm-12"],[1,"form-group"],[2,"color","#69d73d"],[1,"col-sm-2","cus-srch"],["name","cars","id","cars",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[4,"ngFor","ngForOf"],[1,"col-sm-3","cus-srch"],["type","date","id","birthday","placeholder","select Date","name","selectedDate",1,"form-control","pl-0",3,"ngModel","ngModelChange","change"],[1,"table-responsive"],[1,"table","details_table"],["scope","col"],["href","javascript:void(0)",1,"caret-sort",3,"click"],[1,"fa"],["style","width:100%",4,"ngIf","ngIfElse"],["elseBlock",""],[3,"value"],[2,"width","100%"],["colspan","100%",1,"text-center"]],template:function(e,t){if(1&e&&(c.Ub(0,"div",0),c.Ub(1,"div",1),c.Ub(2,"div",2),c.Ub(3,"div",3),c.Ub(4,"h4"),c.Ec(5,"TOTAL SALES : \u20b9 "),c.Ub(6,"span",4),c.Ec(7),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Ub(8,"div",5),c.Ub(9,"div",3),c.Ec(10," SESSION CREATED BY "),c.Ub(11,"select",6),c.cc("ngModelChange",(function(e){return t.selectedUserName=e}))("change",(function(e){return t.onUserSelect(e.target.value)})),c.Cc(12,m,3,2,"ng-container",7),c.Tb(),c.Tb(),c.Tb(),c.Ub(13,"div",8),c.Ub(14,"div",3),c.Ec(15," SEARCH BY DATE "),c.Ub(16,"input",9),c.cc("ngModelChange",(function(e){return t.selectedDate=e}))("change",(function(e){return t.changedDate(e.target.value)})),c.Tb(),c.Tb(),c.Tb(),c.Ub(17,"div",2),c.Ub(18,"div",10),c.Ub(19,"table",11),c.Ub(20,"thead"),c.Ub(21,"tr"),c.Ub(22,"th",12),c.Ec(23,"Date"),c.Tb(),c.Ub(24,"th",12),c.Ec(25,"User Name "),c.Ub(26,"a",13),c.cc("click",(function(){return t.changeOrder("user_name")})),c.Pb(27,"i",14),c.Tb(),c.Tb(),c.Ub(28,"th",12),c.Ec(29,"Open Balance "),c.Ub(30,"a",13),c.cc("click",(function(){return t.changeOrder("session_amount")})),c.Pb(31,"i",14),c.Tb(),c.Tb(),c.Ub(32,"th",12),c.Ec(33,"Withraw "),c.Ub(34,"a",13),c.cc("click",(function(){return t.changeOrder("withdrawn")})),c.Pb(35,"i",14),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Cc(36,y,4,9,"tbody",15),c.Cc(37,T,4,1,"ng-template",null,16,c.Dc),c.Tb(),c.Tb(),c.Tb(),c.Tb(),c.Tb()),2&e){var n=c.vc(38);c.Bb(7),c.Gc("",t.total,".00"),c.Bb(4),c.nc("ngModel",t.selectedUserName),c.Bb(1),c.nc("ngForOf",t.userNameList),c.Bb(4),c.nc("ngModel",t.selectedDate),c.Bb(11),c.Fb("fa-caret-down",t.sortFields.user_name)("fa-caret-up",!t.sortFields.user_name),c.Bb(4),c.Fb("fa-caret-down",t.sortFields.session_amount)("fa-caret-up",!t.sortFields.session_amount),c.Bb(4),c.Fb("fa-caret-down",t.sortFields.withdrawn)("fa-caret-up",!t.sortFields.withdrawn),c.Bb(1),c.nc("ngIf",null==t.sessionList?null:t.sessionList.length)("ngIfElse",n)}},directives:[s.p,s.g,s.j,a.j,s.b,a.k,s.k,s.r],pipes:[p.a,a.d],styles:["[_ngcontent-%COMP%]::-webkit-datetime-edit{padding:1em}[_ngcontent-%COMP%]::-webkit-datetime-edit-text{padding:0 .3em}[_ngcontent-%COMP%]::-webkit-inner-spin-button{display:none}[_ngcontent-%COMP%]::-webkit-calendar-picker-indicator{color:green}div.scrollmenu[_ngcontent-%COMP%]{overflow:auto;white-space:nowrap}div.scrollmenu[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding:14px;text-decoration:none;width:100%!important}"]}),w)}],C=((U=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:U}),U.\u0275inj=c.Lb({factory:function(e){return new(e||U)},imports:[[i.i.forChild(_)],i.i]}),U),k=n("wloI");n.d(t,"SessionModule",(function(){return O}));var S,O=((S=function e(){_classCallCheck(this,e)}).\u0275mod=c.Mb({type:S}),S.\u0275inj=c.Lb({factory:function(e){return new(e||S)},providers:[p.a],imports:[[a.b,s.c,C,k.a]]}),S)}}]);