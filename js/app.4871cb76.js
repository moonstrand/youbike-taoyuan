(function(e){function t(t){for(var s,i,l=t[0],n=t[1],b=t[2],g=0,h=[];g<l.length;g++)i=l[g],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&h.push(c[i][0]),c[i]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);o&&o(t);while(h.length)h.shift()();return r.push.apply(r,b||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var n=a[l];0!==c[n]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},c={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var o=n;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},3443:function(e,t,a){"use strict";a("41ec")},"41ec":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("7a23"),c=a("bc3a"),r=a("130e");a("cd74"),a("0deb");function i(e,t){const a=Object(s["x"])("RouterView");return Object(s["s"])(),Object(s["d"])(a)}a("3443");var l=a("6b0d"),n=a.n(l);const b={},o=n()(b,[["render",i]]);var g=o,h=a("6605");const p={class:"bg"},u={class:"container py-4"},d=Object(s["g"])("h1",{class:"text-center text-light fw-bold"},"台中微笑單車站點資訊",-1),j={class:"row justify-content-center py-4"},O={class:"col-xl-3 col-md-4 col-6"},f={class:"input-group mb-3 ps-sm-0 ps-2"},m={key:0,class:"input-group-text bg-secondary border-0",id:"basic-addon2",disabled:""},y=Object(s["g"])("i",{class:"bi bi-search text-light"},null,-1),v=[y],x=Object(s["g"])("i",{class:"bi bi-x-lg"},null,-1),P=[x],w={class:"col-xl-4 col-md-5 col-6 d-flex justify-content-end align-items-start pe-sm-0"},k=["disabled"],S=Object(s["g"])("option",{selected:""},"全部",-1),D=["value"],z={class:"d-flex flex-md-row justify-content-between flex-column"},A={class:"h4 fw-bold mb-xl-0 mb-2"},T={key:0,class:"site-status text-success fw-bold mb-xl-0 mb-2"},C={key:1,class:"site-status text-tight fw-bold mb-xl-0 mb-2"},_={key:2,class:"site-status text-danger fw-bold mb-xl-0 mb-2"},M={class:"mb-0"},N={class:"row pt-3"},V={class:"col"},E={class:"col"},B={key:0},J={key:1},U={key:2,class:"text-danger"},Y={key:3,class:"text-success"},$={class:"progress"},G=["aria-valuenow","aria-valuemax"],H={key:0,class:"err-msg col-xl-7 col-md-9 d-flex flex-column justify-content-center align-items-center mt-4"},R=Object(s["g"])("i",{class:"bi bi-emoji-dizzy-fill"},null,-1),q={class:"h2 pt-4"},F={key:1,class:"err-msg col-xl-7 col-md-9 d-flex flex-column justify-content-center align-items-center mt-4"},I=Object(s["g"])("i",{class:"bi bi-emoji-dizzy-fill"},null,-1),K=Object(s["g"])("p",{class:"h2 pt-4"},"連線錯誤。",-1),L=[I,K],Q=Object(s["h"])('<footer class="bg-dark text-light py-3 text-center"><p class="mb-1">Copyright © 2022 moonstrand</p><p class="mb-1">個人練習作品，非商業用途。</p><a class="footer-link" href="https://github.com/moonstrand"><i class="bi bi-github pe-1"></i>GitHub </a></footer>',1);function W(e,t,a,c,r,i){const l=Object(s["x"])("Pagination");return Object(s["s"])(),Object(s["f"])("div",p,[Object(s["g"])("div",u,[d,Object(s["g"])("div",j,[Object(s["g"])("div",O,[Object(s["g"])("div",f,[Object(s["E"])(Object(s["g"])("input",{type:"text",class:"form-control",placeholder:"站點關鍵字","aria-label":"站點關鍵字","aria-describedby":"basic-addon2","onUpdate:modelValue":t[0]||(t[0]=e=>r.search=e)},null,512),[[s["C"],r.search]]),r.hasSearch?Object(s["e"])("",!0):(Object(s["s"])(),Object(s["f"])("span",m,v)),r.hasSearch?(Object(s["s"])(),Object(s["f"])("button",{key:1,class:"btn btn-secondary",type:"button",id:"button-addon2",onClick:t[1]||(t[1]=(...e)=>i.clearSearch&&i.clearSearch(...e))},P)):Object(s["e"])("",!0)])]),Object(s["g"])("div",w,[Object(s["E"])(Object(s["g"])("select",{class:Object(s["n"])(["form-select w-50",{"bg-disabled":this.hasSearch}]),"aria-label":"Default select example","onUpdate:modelValue":t[2]||(t[2]=e=>r.filterArea=e),disabled:r.hasSearch,onChange:t[3]||(t[3]=(...e)=>i.getData&&i.getData(...e))},[S,(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["w"])(r.area,e=>(Object(s["s"])(),Object(s["f"])("option",{key:e,value:e},Object(s["z"])(e),9,D))),128))],42,k),[[s["B"],r.filterArea]])]),(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["w"])(r.pageData,e=>(Object(s["s"])(),Object(s["f"])("div",{class:"site-info col-xl-7 col-md-9 mb-4",key:e.sna},[Object(s["g"])("div",z,[Object(s["g"])("p",A,Object(s["z"])(e.sna),1),e.sbi/e.tot*100>=40?(Object(s["s"])(),Object(s["f"])("p",T," 供車狀況：充足 ")):e.sbi/e.tot*100<40&&e.sbi/e.tot*100>15?(Object(s["s"])(),Object(s["f"])("p",C," 供車狀況：緊繃 ")):e.sbi/e.tot*100<=15?(Object(s["s"])(),Object(s["f"])("p",_," 供車狀況：不足 ")):Object(s["e"])("",!0)]),Object(s["g"])("p",M,Object(s["z"])(e.ar),1),Object(s["g"])("div",N,[Object(s["g"])("div",V,[Object(s["g"])("p",null,"總車格："+Object(s["z"])(e.tot),1),Object(s["g"])("p",null,"目前可用車數量："+Object(s["z"])(e.sbi),1)]),Object(s["g"])("div",E,[e.bemp>=0?(Object(s["s"])(),Object(s["f"])("p",B,"目前空位數量："+Object(s["z"])(e.bemp),1)):(Object(s["s"])(),Object(s["f"])("p",J,"目前空位數量：0")),1!=e.act?(Object(s["s"])(),Object(s["f"])("p",U,"站點狀態：無法使用")):(Object(s["s"])(),Object(s["f"])("p",Y,"站點狀態：啟用中"))])]),Object(s["g"])("div",$,[Object(s["g"])("div",{class:Object(s["n"])(["progress-bar bg-success",{"bg-warning":e.sbi/e.tot*100<40,"bg-danger":e.sbi/e.tot*100<15}]),role:"progressbar",style:Object(s["o"])({width:e.sbi/e.tot*100+"%"}),"aria-valuenow":e.sbi,"aria-valuemin":"0","aria-valuemax":e.tot},null,14,G)])]))),128)),0!==r.pageData.length||r.errStatus?Object(s["e"])("",!0):(Object(s["s"])(),Object(s["f"])("div",H,[R,Object(s["g"])("p",q,'找不到"'+Object(s["z"])(r.search)+'"相關站點，請重新搜尋。',1)])),r.errStatus?(Object(s["s"])(),Object(s["f"])("div",F,L)):Object(s["e"])("",!0)]),0!==r.pageData.length?(Object(s["s"])(),Object(s["d"])(l,{key:0,page:r.pages,onSwitchPage:i.setPage},null,8,["page","onSwitchPage"])):Object(s["e"])("",!0)]),Q])}a("14d9");const X={"aria-label":"Page navigation example"},Z={class:"pagination d-flex justify-content-center"},ee={class:"page-item"},te=Object(s["g"])("span",{"aria-hidden":"true"},"«",-1),ae=[te],se={key:1,class:"page-link disabled",href:"#","aria-label":"Previous"},ce=Object(s["g"])("span",{"aria-hidden":"true"},"«",-1),re=[ce],ie=["onClick"],le={class:"page-link",href:"#"},ne={class:"page-item"},be=Object(s["g"])("span",{"aria-hidden":"true"},"»",-1),oe=[be],ge={key:1,class:"page-link disabled",href:"#","aria-label":"Next"},he=Object(s["g"])("span",{"aria-hidden":"true"},"»",-1),pe=[he];function ue(e,t,a,c,r,i){return Object(s["s"])(),Object(s["f"])("nav",X,[Object(s["g"])("ul",Z,[Object(s["g"])("li",ee,[a.page.hasPrevious?(Object(s["s"])(),Object(s["f"])("a",{key:0,class:"page-link",href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=e=>i.switchPage(Number(a.page.currentPage)-1))},ae)):(Object(s["s"])(),Object(s["f"])("a",se,re))]),(Object(s["s"])(!0),Object(s["f"])(s["a"],null,Object(s["w"])(i.pages,e=>(Object(s["s"])(),Object(s["f"])("li",{class:Object(s["n"])(["page-item",{active:e==a.page.currentPage}]),key:e,onClick:t=>i.switchPage(e)},[Object(s["g"])("a",le,Object(s["z"])(e),1)],10,ie))),128)),Object(s["g"])("li",ne,[a.page.hasNext?(Object(s["s"])(),Object(s["f"])("a",{key:0,class:"page-link",href:"#","aria-label":"Next",onClick:t[1]||(t[1]=e=>i.switchPage(Number(a.page.currentPage)+1))},oe)):(Object(s["s"])(),Object(s["f"])("a",ge,pe))])])])}var de={props:["page"],methods:{switchPage(e){this.$emit("switch-page",e)}},computed:{startPage(){return 1===this.page.currentPage?1:this.page.currentPage===this.page.pageTotal?this.page.pageTotal-5<=0?1:this.page.pageTotal-5:Math.max(this.page.currentPage-4,1)},endPage(){const e=this.startPage+this.page.maxPage;return e<this.page.pageTotal?e:e>=this.page.pageTotal?this.page.pageTotal:e},pages(){const e=[];for(let t=this.startPage;t<=this.endPage;t+=1)e.push(t);return e}}};const je=n()(de,[["render",ue]]);var Oe=je,fe={data(){return{site:[],area:[],pageData:[],pages:{},filterArea:"全部",search:"",hasSearch:!1,errStatus:!1}},components:{Pagination:Oe},methods:{getData(){const e="https://datacenter.taichung.gov.tw/swagger/OpenData/86dfad5c-540c-4479-bb7d-d7439d34eeb1";this.$http.get(e).then(e=>{console.log(e.data),this.site=Object.values(e.data.retVal),this.site=this.site.map(e=>({...e,sna:e.sna.replace("YouBike2.0_","")}));const t=this.site.map(e=>e.sarea);this.area=t.filter((e,t,a)=>a.indexOf(e)===t),this.setPage(1)}).catch(e=>{e&&(console.log(e),this.errStatus=!0)})},setPage(e){const t=this.filterSite.length,a=20,s=5,c=Math.ceil(t/a);let r=e;r>c&&(r=c);const i=r*a-a+1,l=r*a,n=[];this.filterSite.forEach((e,t)=>{const a=t+1;a>=i&&a<=l&&n.push(e)}),this.pages={pageTotal:c,currentPage:r,maxPage:s,hasPrevious:r>1,hasNext:r<c},this.renderData(n)},clearSearch(){this.hasSearch=!1,this.search="",this.getData()},renderData(e){this.pageData=e}},computed:{filterSite(){let e;return"全部"===this.filterArea?(e=this.site.filter(e=>e),""!==this.search.trim()&&(e=this.site.filter(e=>e.sna.match(this.search)))):"全部"!==this.filterArea&&(e=this.site.filter(e=>e.sarea===this.filterArea),""!==this.search.trim()&&(e=this.site.filter(e=>e.sna.match(this.search)))),e}},watch:{search(e){""!==e.trim()?(this.hasSearch=!0,this.filterArea="全部",this.setPage(1)):""===e.trim()&&(this.hasSearch=!1,this.filterArea="全部",this.setPage(1))},filterArea(e){"全部"!==e&&this.setPage(1)}},created(){this.getData()}};const me=n()(fe,[["render",W]]);var ye=me;const ve=[{path:"/",name:"YoubikeStatus",component:ye}],xe=Object(h["a"])({history:Object(h["b"])(),routes:ve});var Pe=xe;const we=Object(s["c"])(g);we.use(r["a"],c["a"]),we.use(Pe),we.mount("#app")}});
//# sourceMappingURL=app.4871cb76.js.map