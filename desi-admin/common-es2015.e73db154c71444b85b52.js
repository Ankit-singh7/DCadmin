(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"X+I5":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var a=i("fXoL");let r=(()=>{class t{transform(t,e,i){return i?t.filter(t=>e.split(",").some(e=>t.hasOwnProperty(e)&&new RegExp(i,"gi").test(t[e]))):t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Nb({name:"filter",type:t,pure:!0}),t})()},pVIR:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("AytR"),r=i("fXoL"),n=i("tk/3");let s=(()=>{class t{constructor(t){this.http=t,this.getIngredientCategoryList=()=>this.http.get(`${a.a.apiURL}/ingredientCat/view/all`),this.createIngredientCategory=t=>this.http.post(`${a.a.apiURL}/ingredientCat/create`,t),this.deleteIngredientCategory=t=>this.http.get(`${a.a.apiURL}/ingredientCat/${t}/delete`),this.updateIngredientCategory=(t,e)=>this.http.put(`${a.a.apiURL}/ingredientCat/${t}/update`,e),this.getSingleIngredientCategory=t=>this.http.get(`${a.a.apiURL}/ingredientCat/${t}/getById`),this.getUnitList=()=>this.http.get(`${a.a.apiURL}/unit/view/all`),this.createUnit=t=>this.http.post(`${a.a.apiURL}/unit/create`,t),this.deleteUnit=t=>this.http.get(`${a.a.apiURL}/unit/${t}/delete`),this.updateUnit=(t,e)=>this.http.put(`${a.a.apiURL}/unit/${t}/update`,e),this.getSingleUnit=t=>this.http.get(`${a.a.apiURL}/unit/${t}/getById`),this.getIngredientList=()=>this.http.get(`${a.a.apiURL}/ingredient/view/all`),this.createIngredient=t=>this.http.post(`${a.a.apiURL}/ingredient/create`,t),this.deleteIngredient=t=>this.http.get(`${a.a.apiURL}/ingredient/${t}/delete`),this.updateIngredient=(t,e)=>this.http.put(`${a.a.apiURL}/ingredient/${t}/update`,e),this.getSingleIngredient=t=>this.http.get(`${a.a.apiURL}/ingredient/${t}/getById`),this.getFoodCategoryList=()=>this.http.get(`${a.a.apiURL}/category/view/all`),this.createFoodCategory=t=>this.http.post(`${a.a.apiURL}/category/create`,t),this.deleteFoodCategory=t=>this.http.get(`${a.a.apiURL}/category/${t}/delete`),this.updateFoodCategory=(t,e)=>this.http.post(`${a.a.apiURL}/category/${t}/update`,e),this.getSingleFoodCategory=t=>this.http.get(`${a.a.apiURL}/category/${t}/getById`),this.getFoodListByCategory=t=>this.http.get(`${a.a.apiURL}/category/${t}/getSubCatList`),this.getFoodList=()=>this.http.get(`${a.a.apiURL}/subcategory/view/all`),this.createFood=t=>this.http.post(`${a.a.apiURL}/subcategory/create`,t),this.deleteFood=t=>this.http.get(`${a.a.apiURL}/subcategory/${t}/delete`),this.updateFood=(t,e)=>this.http.post(`${a.a.apiURL}/subcategory/${t}/update`,e),this.getSingleFoodDetail=t=>this.http.get(`${a.a.apiURL}/subcategory/${t}/getById`),this.getFoodIngredientList=t=>this.http.get(`${a.a.apiURL}/food-ingredient/view/${t}/all`),this.createFoodIngredient=t=>this.http.post(`${a.a.apiURL}/food-ingredient/create`,t),this.deleteFoodIngredient=t=>this.http.get(`${a.a.apiURL}/food-ingredient/${t}/delete`),this.updateFoodIngredient=(t,e)=>this.http.put(`${a.a.apiURL}/food-ingredient/${t}/update`,e),this.getSingleFoodIngredient=t=>this.http.get(`${a.a.apiURL}/food-ingredient/${t}/getById`),this.getAllReport=()=>this.http.get(`${a.a.apiURL}/report/view/all`),this.getReportByDate=(t,e)=>(console.log(t,e),this.http.get(`${a.a.apiURL}/report/${t}/${e}`))}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(n.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},rwBg:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("AytR"),r=i("fXoL"),n=i("tk/3");let s=(()=>{class t{constructor(t){this.http=t}login(t){return this.http.post(`${a.a.apiURL}/admin/login`,t)}changePassword(t){return this.http.post(`${a.a.apiURL}/admin/resetPassword`,t)}getAllUsers(){return this.http.get(`${a.a.apiURL}/users/view/all`)}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(n.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},sumL:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var a=i("AytR"),r=i("fXoL"),n=i("tk/3");let s=(()=>{class t{constructor(t){this.http=t}getBillingList(){return this.http.get(`${a.a.apiURL}/bill/view/all`)}deleteBill(t){return this.http.get(`${a.a.apiURL}/bill/${t}/delete`)}editBill(t,e){return this.http.put(`${a.a.apiURL}/bill/${t}/update`,e)}getBillDetail(t){return this.http.get(`${a.a.apiURL}/bill/${t}/getById`)}getTotalSale(){return this.http.get(`${a.a.apiURL}/bill/total`)}}return t.\u0275fac=function(e){return new(e||t)(r.Yb(n.a))},t.\u0275prov=r.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);