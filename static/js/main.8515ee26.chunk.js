(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e){e.exports=JSON.parse("{}")},26:function(e,t,a){e.exports=a.p+"static/media/no-logo.dd9b315d.png"},29:function(e,t,a){e.exports=a(68)},34:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(6),c=a.n(r),s=(a(34),a(22)),o=a(23),m=a(28),i=a(27),u=a(2),d=a(5),p=function(){return l.a.createElement("nav",{className:"overflow-hidden"},l.a.createElement("div",{className:"mx-8 sm:mx-12 mt-4"},l.a.createElement("div",{className:"inline-block text-teal-600 text-4xl float-left"},l.a.createElement("a",{href:"/",className:"no-underline"},l.a.createElement("span",{className:"flex"},l.a.createElement(d.b,{className:"-mt-3"}),l.a.createElement("span",{className:"text-xl ml-px"},"emote")))),l.a.createElement("div",{className:"sm:flex justify-between"},l.a.createElement("div",{className:"hidden sm:block sm:ml-12 fixed z-50 top-0 left-0 right-0 bg-white w-full h-full sm:w-auto sm:h-auto sm:relative menu-container"},l.a.createElement("div",{className:"text-right mr-8 sm:hidden"},l.a.createElement("div",{className:"inline-block relative h-12"},l.a.createElement("div",{className:"inline-block cursor-pointer mr-3",onClick:function(){document.querySelector(".menu-container").classList.add("hidden")}},l.a.createElement("span",{className:"block h-5 mt-1 bg-gray-600 transform rotate-45 absolute",style:{width:"2px"}}),l.a.createElement("span",{className:"block h-5 mt-1 bg-gray-600 transform -rotate-45 absolute",style:{width:"2px"}})))),l.a.createElement("ul",{className:"p-0 m-0 list-none block text-lg text-gray-700 space-y-4 space-x-0 mx-8 sm:mx-0 sm:space-x-4 sm:space-y-0 sm:flex"},l.a.createElement("li",{className:"sm:border-b-2 border-teal-600"},l.a.createElement("a",{href:"#"},"Find jobs")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Company reviews")),l.a.createElement("li",null,l.a.createElement("a",{href:"#"},"Find salaries")))),l.a.createElement("div",{className:"float-right"},l.a.createElement("div",{className:"flex space-x-4 sm:space-x-0"},l.a.createElement("li",{className:"list-none font-bold text-gray-700 sm:text-teal-600"},l.a.createElement("a",{href:"#"},"Sign in")),l.a.createElement("div",{className:"inline-block cursor-pointer sm:hidden",onClick:function(){document.querySelector(".menu-container").classList.remove("hidden")}},l.a.createElement("span",{className:"w-7 mt-1 bg-gray-600 block",style:{height:"3px"}}),l.a.createElement("span",{className:"w-7 mt-1 bg-gray-600 block",style:{height:"3px"}}),l.a.createElement("span",{className:"w-7 mt-1 bg-gray-600 block",style:{height:"3px"}})))))))},b=(a(13),Object(u.b)((function(e){return{state:e}}),{get_api_url:function(e){return{type:"GET API URL",getApiUrl:e}}})((function(e){var t={},a=function(e){var t=e.target.parentElement;t.classList.add("shadow-md"),t.classList.add("border-teal-500")},n=function(e){var t=e.target.parentElement;t.classList.remove("shadow-md"),t.classList.remove("border-teal-500")};return l.a.createElement("div",{className:"mt-7"},l.a.createElement("div",{className:"mx-5 sm:mx-12 md:space-x-3 md:flex"},l.a.createElement("div",{className:"inline-block p-2 border border-gray-500 mt-2 form-one",style:{borderRadius:"7px"}},l.a.createElement(d.c,{className:"float-left text-gray-600 mt-1 mr-2"}),l.a.createElement("input",{type:"text",placeholder:"job title",className:"border-none focus:outline-none",name:"jobTitle",onFocus:a,onBlur:n,onInput:function(e){t[e.target.name]=e.target.value}})),l.a.createElement("div",{className:"inline-block p-2 border border-gray-500 mt-2 form-two",style:{borderRadius:"7px"}},l.a.createElement(d.a,{className:"float-left text-gray-600 mt-1 mr-2"}),l.a.createElement("input",{type:"text",placeholder:"City or Country",className:"border-none focus:outline-none",name:"company_name",onFocus:a,onBlur:n,onInput:function(e){t[e.target.name]=e.target.value}})),l.a.createElement("div",{className:"mt-2 form-three"},l.a.createElement("button",{className:"text-white bg-teal-500 font-bold py-2 px-6 focus:outline-none border-none hover:bg-teal-600 font-bold",style:{borderRadius:"7px"},onClick:function(){var a={};if(t)for(var n in t)"jobTitle"===n?a[n]="?search=".concat(t[n]):"company_name"===n&&(a[n]="?company_name=".concat(t[n])),e.get_api_url("https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs".concat(a[n]))}},"Search"))))}))),f=a(3),E=Object(u.b)((function(e){return{state:e}}),{apply_Filter:function(e){return{type:"APPLY FILTER",filterValues:e}}})((function(e){var t=Object(n.useState)(300),a=Object(f.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(""),o=Object(f.a)(s,2),m=o[0],i=o[1],u=Object(n.useState)(""),d=Object(f.a)(u,2),p=d[0],b=d[1],E=Object(n.useState)(""),g=Object(f.a)(E,2),v=g[0],y=g[1],h={},x={};return l.a.createElement("div",{className:"mt-5 w-full relative"},l.a.createElement("div",{className:"mx-5 sm:overflow-x-visible overflow-x-scroll h-12 sm:h-auto sm:mx-12 flex space-x-4 relative filter-container"},l.a.createElement("div",{className:"relative"},l.a.createElement("select",{className:"text-gray-700 bg-gray-300 rounded appearance-none py-1 px-5 border-none focus:outline-none select cursor-pointer",name:"jobType",onChange:function(e){y(e.target.value)}},l.a.createElement("option",{className:"hover:bg-gray-300",value:"software-dev"},"Software Development"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"customer-support"},"Customer Service"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"design"},"Design"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"marketing"},"Marketing"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"devops"},"DevOps / Sysadmin")),l.a.createElement("div",{className:"absolute top-2 right-1 text-gray-600 pointer-events-none"},l.a.createElement("svg",{className:"fill-current h-4 w-4 ml-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),l.a.createElement("div",{className:"relative"},l.a.createElement("select",{className:"text-gray-700 bg-gray-300 rounded appearance-none py-1 px-5 border-none focus:outline-none select cursor-pointer",name:"experienceLevel",onChange:function(e){b(e.target.value)}},l.a.createElement("option",{className:"hover:bg-gray-300",value:""},"Experience Level"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"Mid Level"},"Mid Level"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"Entry Level"},"Entry Level"),l.a.createElement("option",{className:"hover:bg-gray-300",value:"Senior Level"},"Senior Level")),l.a.createElement("div",{className:"absolute top-2 right-1 text-gray-600 pointer-events-none"},l.a.createElement("svg",{className:"fill-current h-4 w-4 ml-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),l.a.createElement("div",{className:"relative"},l.a.createElement("button",{className:"border-none focus:outline-none text-gray-700 bg-gray-300 py-1 px-5 w-40 flex justify-between items-center rounded",onClick:function(){return document.querySelector(".salary-setter-container").classList.toggle("hidden")}},"Job Salary",l.a.createElement("svg",{className:"fill-current h-4 w-4 ml-1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},l.a.createElement("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})))),l.a.createElement("div",null,l.a.createElement("button",{className:"mr-2 border-none focus:outline-none bg-teal-500 hover:bg-teal-600 text-white py-1 px-5 rounded font-bold",onClick:function(){if(h.jobType=v,h.experienceLevel=p,h.Salary=m,h)for(var t in h)""!==h[t]&&(x[t]=h[t],e.apply_Filter(x))}},"Apply"))),l.a.createElement("div",{className:"absolute top-12 left-12 sm:left-64 bg-gray-100 shadow-md w-9/12 sm:w-64 p-4 hidden salary-setter-container"},l.a.createElement("p",{className:"font-bold text-gray-700 p-2"},"Set Job Salary per year"),l.a.createElement("div",{className:"relative w-full"},l.a.createElement("input",{type:"range",name:"salary",defaultValue:"300",min:"5",max:"300",className:"w-full h-1 bg-gray-400 border-none focus:outline-none appearance-none salary-range",onChange:function(e){return function(e){c(e.target.value),i(e.target.value)}(e)}}),l.a.createElement("span",{className:"text-gray-700"},Number("".concat(r,"000")).toLocaleString(),"k+"),l.a.createElement("span",{className:"absolute left-0 h-1 bg-teal-600",style:{top:"13px",width:"".concat(r/3,"%")}}),l.a.createElement("p",{className:"float-right text-gray-700"},"300k+")),l.a.createElement("hr",{className:"mt-1"}),l.a.createElement("button",{className:"border-none focus:outline-none mt-2 text-teal-600 font-bold",onClick:function(){return document.querySelector(".salary-setter-container").classList.add("hidden")}},"Cancel")))})),g=function(){return l.a.createElement("div",null,l.a.createElement(b,null),l.a.createElement(E,null))},v=a(25),y=a.n(v),h=a(26),x=a.n(h),N=function(){return l.a.createElement("div",{className:"text-center"},l.a.createElement("div",{className:"w-12 h-12 rounded-full loading mt-4 inline-block"}))},w=Object(u.b)((function(e){return{state:e}}),{pass_data:function(e){return{type:"SEND DATA",JobsData:e}},make_request:function(){return{type:"MAKE REQUEST"}},faild_request:function(e){return{type:"FAILD REQUEST",err:e}}})((function(e){var t=Object(n.useState)([]),a=Object(f.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(e.state.getApiUrl),o=Object(f.a)(s,2),m=o[0],i=o[1];Object(n.useEffect)((function(){i(e.state.getApiUrl),e.make_request(),y.a.get(m).then((function(t){c(t.data.jobs),e.pass_data(t.data)})).catch((function(t){e.faild_request(t.message)}))}),[m]);var u=r.map((function(e,t){return l.a.createElement("div",{className:"mt-4 hover:shadow-md job-container",key:t,onClick:function(){return function(e){var t=document.querySelectorAll(".job-container");document.querySelectorAll(".job-container").forEach((function(e){e.classList.remove("job-container-js"),e.classList.remove("shadow-md")})),t[e].classList.add("shadow-md"),t[e].classList.add("job-container-js")}(t)}},l.a.createElement("div",{className:"p-3"},l.a.createElement("div",{className:"block sm:flex space-x-0 sm:space-x-2"},l.a.createElement("div",{className:"w-20"},l.a.createElement("div",{className:"w-16 h-16 md:w-20 md:h-20 border border-gray-300 rounded-full job-logo"},l.a.createElement("img",{src:e.company_logo_url?e.company_logo_url:x.a,className:"w-16 h-16 md:w-20 md:h-20 rounded-full"}))),l.a.createElement("div",{className:"mt-1 ml-3 sm:ml-0 sm:mt-0"},l.a.createElement("span",{className:"text-teal-600 font-bold capitalize"},e.company_name),l.a.createElement("p",{className:"text-lg font-bold capitalize"},e.title),l.a.createElement("div",{className:"space-x-2 text-gray-600"},l.a.createElement("span",{className:"capitalize"},e.job_type),l.a.createElement("span",{className:"capitalize"},e.candidate_required_location)))),l.a.createElement("div",{className:"mt-3 border-t-2 border-gray-300"},l.a.createElement("button",{className:"border border-teal-600 font-bold text-gray-600 hover:bg-teal-600 hover:text-white py-1 px-5 rounded mt-2 ml-2"},"View details"),e.salary?l.a.createElement("li",{className:"list-none text-gray-600 mt-2 ml-2 py-1 px-1 capitalize"},"salary ",l.a.createElement("span",{className:"text-black rounded bg-gray-200 py-1 px-3"},"$",e.salary)):"",l.a.createElement("div",{className:"flex flex-wrap"},e.tags.map((function(e,t){return l.a.createElement("span",{className:"capitalize text-teal-700 bg-teal-100 py-1 px-2 mt-2 ml-2 rounded",key:t,style:{background:"#31979511"}},e)}))))))}));return l.a.createElement(l.a.Fragment,null,r?u:"")})),j=function(){return l.a.createElement("div",null)},k=Object(u.b)((function(e){return{state:e}}),null)((function(e){var t=Object(n.useState)(e.state.makeReq),a=Object(f.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(e.state.faildReq.details),o=Object(f.a)(s,2),m=o[0],i=o[1];return Object(n.useEffect)((function(){c(e.state.makeReq),i(e.state.faildReq.details)})),l.a.createElement("main",{className:"mt-8 mx-5 sm:mx-12"},l.a.createElement("p",{className:"font-bold text-gray-700 text-lg"},"All jobs"),l.a.createElement("div",{className:"block md:flex"},l.a.createElement("div",{className:"jobs-container"},l.a.createElement(w,null)),l.a.createElement(j,null)),r?l.a.createElement(N,null):"",l.a.createElement("p",{className:"text-center text-xl",style:{color:"#ff0000"}},m))})),O=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(p,null),l.a.createElement(g,null),l.a.createElement(k,null))}}]),a}(n.Component),L=a(7),S=(a(58),a(59),a(60),a(61),a(62),a(63),a(64),a(65),a(66),a(67),a(8)),A=a(4),_={getApiUrl:"https://cors-anywhere.herokuapp.com/https://remotive.io/api/remote-jobs?category=all others",makeReq:!0,faildReq:{details:""},passData:[]},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,a=null,n=null;return"MAKE REQUEST"===t.type?Object(A.a)(Object(A.a)({},e),{},{makeReq:!0}):"FAILD REQUEST"===t.type?Object(A.a)(Object(A.a)({},e),{},{faildReq:{details:t.err},makeReq:!1}):"GET API URL"===t.type?Object(A.a)(Object(A.a)({},e),{},{getApiUrl:t.getApiUrl,passData:[]}):"SEND DATA"===t.type?Object(A.a)(Object(A.a)({},e),{},Object(S.a)({passData:t.JobsData,makeReq:!1},"passData",[])):"APPLY FILTER"===t.type?(n=t.filterValues,e.filterValues=n,e):"APPLY SEARCH"===t.type?(a=t.searchValues,e.searchValues=a,e):e},q=Object(L.b)(R);c.a.render(l.a.createElement(u.a,{store:q},l.a.createElement(O,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.8515ee26.chunk.js.map