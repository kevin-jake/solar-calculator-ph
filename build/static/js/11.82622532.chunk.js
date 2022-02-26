(this["webpackJsonpoffgrid-solar-calculator-ph"]=this["webpackJsonpoffgrid-solar-calculator-ph"]||[]).push([[11],{110:function(e,t,a){"use strict";a.r(t);var r=a(38),n=a.n(r),l=a(39),c=a(5),o=a(0),i=a.n(o),d=a(43),s=a(40),b=a(49),m=a(11),u=a(41),p=a(50),g=a(51),x=function(e){var t=e.invlist,a=e.formInputs,r=e.onUpdate,n=Object(o.useState)(!1),l=Object(c.a)(n,2),d=l[0],s=l[1],b=Object(o.useState)(!1),x=Object(c.a)(b,2),y=x[0],f=x[1],h=Object(o.useContext)(m.a).role,w=function(){r()};return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",null,i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-500"},i.a.createElement("div",{className:"text-sm leading-5 text-blue-900"},t.inverterName)),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"},t.type),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"},t.inputVoltage+" V"),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5"},t.efficiency+" %"),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5"},t.wattage+" W"),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5"},"Php "+Object(u.b)(t.price.toFixed(2))),i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5"},i.a.createElement("a",{className:" px-4 py-2 mt-2 text-blue-600 visited:text-purple-600",target:"_blank",rel:"noopener noreferrer",href:t.link},t.link?"Link":"")),"Admin"===h&&i.a.createElement("td",{className:"px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5"},i.a.createElement("div",{className:"grid lg:grid-row xl:grid-cols-2 gap-4 sm:grid-row md:grid-row"},i.a.createElement("button",{className:"px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none md:row-span-auto",onClick:function(){s(!0)}},"Edit"),i.a.createElement("button",{className:"px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none md:row-span-auto",onClick:function(){f(!0)}},"Delete")))),"Admin"===h&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{show:d,onCancel:function(){s(!1)},formInputs:a,initialValue:t,onUpdate:w,title:"Inverter"}),i.a.createElement(p.a,{show:y,onCancel:function(){f(!1)},idToDelete:t.id,onUpdate:w,title:"Inverter"})))},y=a(17);t.default=function(){var e=Object(o.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(s.a)(),p=u.isLoading,g=(u.error,u.sendRequest),f=(u.clearError,Object(o.useState)(!1)),h=Object(c.a)(f,2),w=h[0],E=h[1],v=Object(o.useState)(!0),N=Object(c.a)(v,2),k=N[0],j=N[1],O=Object(o.useContext)(m.a).role;Object(o.useEffect)((function(){(function(){var e=Object(l.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g("https://solar-calculator-ph.herokuapp.com/api/inverter");case 3:t=e.sent,r(t.inverters),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[g,k]);var I,C=[{listkey:"id",type:"text",label:"ID"},{listkey:"inverterName",type:"text",label:"Name",validator:[Object(d.c)()]},{listkey:"type",type:"text",label:"Type"},{listkey:"inputVoltage",type:"number",label:"Input Voltage",unit:"V",validator:[Object(d.c)()]},{listkey:"efficiency",type:"number",label:"Efficiency",unit:"%",validator:[Object(d.c)()]},{listkey:"wattage",type:"number",label:"Wattage",unit:"W",validator:[Object(d.c)()]},{listkey:"price",type:"number",label:"Price",unit:"Php",validator:[Object(d.c)()]},{listkey:"link",type:"text",label:"Link"}],A=function(){E(!0)},F=function(){E(!1)},V=function(){j(!k)};return i.a.createElement(i.a.Fragment,null,p&&i.a.createElement(y.a,null),!p&&a&&(0===(I=a).length?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"bg-white overflow-hidden sm:rounded-lg pb-8"},i.a.createElement("div",{className:"border-t border-gray-200 text-center pt-8"},i.a.createElement("h1",{className:"text-6xl font-bold text-gray-400"},"Empty List"),i.a.createElement("h1",{className:"text-xl font-medium py-8"},"No Inverters found"),"Admin"===O&&i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:"px-5 py-2 mt-5 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto",onClick:A},"Add Item"),i.a.createElement(b.a,{show:w,onCancel:F,onUpdate:V,formInputs:C,title:"Inverter"}))))):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"my-2 mx-2 py-6 pb-8 overflow-x-auto border-2 border-blue-400 dark:border-blue-300 rounded-xl relative"},i.a.createElement("div",{className:"align-middle mb-5 inline-block min-w-full overflow-hidden bg-white  px-8 pt-3 rounded-bl-lg rounded-br-lg"},i.a.createElement("table",{className:"min-w-full"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Name"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Type"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Input Voltage"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Efficiency"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Wattage"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Price"),i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"},"Link"),"Admin"===O&&i.a.createElement("th",{className:"px-6 py-3 border-b-2 border-gray-300"}))),i.a.createElement("tbody",{className:"bg-white"},I.map((function(e){return i.a.createElement(x,{key:e.id,invlist:e,formInputs:C,onUpdate:V})}))))),"Admin"===O&&i.a.createElement("button",{className:"block px-5 py-2 mt-5 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto absolute bottom-2 right-6",onClick:A},"Add Item")),"Admin"===O&&i.a.createElement(b.a,{show:w,onCancel:F,onUpdate:V,formInputs:C,title:"Inverter"}))))}}}]);
//# sourceMappingURL=11.82622532.chunk.js.map