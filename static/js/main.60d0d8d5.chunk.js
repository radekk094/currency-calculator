(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=(a(29),a(5)),u=a(6),i=a(8),s=a(7),m=a(9),d=(a(30),a(11)),h=a(10),f=(a(31),Object(h.f)(function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,render:function(){return r.a.createElement("h1",null,"Sprawd\u017a aktualne kursy walut i przelicz kwot\u0119")}}),r.a.createElement(h.a,{path:"/archive",render:function(){return r.a.createElement("h1",null,"Sprawd\u017a archiwalne kursy walut i przelicz kwot\u0119")}}),r.a.createElement(h.a,{path:"/history",render:function(){return r.a.createElement("h1",null,"Wy\u015bwietl histori\u0119 zmian kursu wybranej waluty")}}),r.a.createElement(h.a,{render:function(){return r.a.createElement("h1",null,"Strona nie istnieje")}})))})),p=(a(36),[{name:"Waluty - aktualne",icon:"fas fa-coins",path:"/",exact:!0},{name:"Waluty - archiwum",icon:"far fa-calendar-alt",path:"/archive"},{name:"Waluty - historia",icon:"fas fa-chart-line",path:"/history"}]),E=function(){var e=p.map(function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(d.b,{to:e.path,exact:!!e.exact&&e.exact},r.a.createElement("i",{className:e.icon}),r.a.createElement("span",null,e.name)))});return r.a.createElement("nav",null,r.a.createElement("ul",null,e))},D=function(e){var t=e.sortedCurrencies,a=e.beforeSort,n=e.publicationDate,c=e.downloadDate,l=e.refreshButtonClick,o=e.tableCategory,u=t.map(function(e){return"PLN"===e.code?null:r.a.createElement("tr",{key:e.code},r.a.createElement("td",null,e.code),r.a.createElement("td",null,e.currency),r.a.createElement("td",null,e.mid.toFixed(4)))});return a?"Archiwalne"===o?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Wybierz dat\u0119 i kliknij przycisk."),r.a.createElement("h3",null,"Dost\u0119pne s\u0105 dane z ostatnich 5 lat.")):r.a.createElement("h2",null,"Wczytywanie danych..."):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,o," kursy walut"),r.a.createElement("h3",null,"Data opublikowania danych na stronie NBP: ",n),r.a.createElement("h3",null,"Data i godzina pobrania danych: ",c),"Aktualne"===o?r.a.createElement("button",{onClick:l},"Od\u015bwie\u017c dane"):null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Kod waluty"),r.a.createElement("td",null,"Nazwa waluty"),r.a.createElement("td",null,"Aktualne"===o?"Aktualny kurs":"Warto\u015b\u0107 kursu")),u)))},y=a(14),b=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={currency1:"EUR",currency2:"PLN",moneyAmount:"",result:""},a.handleChange=function(e){a.setState(Object(y.a)({result:""},e.target.name,e.target.value))},a.handleSubmit=function(e){if(e.preventDefault(),!a.state.moneyAmount)return alert("Wprowad\u017a kwot\u0119.");a.countCurrencies(a.state.currency1,a.state.currency2)},a.countCurrencies=function(e,t){var n,r;e===t?a.setState({result:a.state.moneyAmount}):(a.props.sortedCurrencies.forEach(function(a){a.code!==e?a.code!==t||(r=a.mid):n=a.mid}),a.setState({result:n/r*a.state.moneyAmount}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.sortedCurrencies.map(function(e){return r.a.createElement("option",{key:e.code},e.code)}),t=this.state,a=t.currency1,n=t.currency2,c=t.moneyAmount,l=t.result;return r.a.createElement("section",null,r.a.createElement("h2",null,"Kalkulator walut"),r.a.createElement("form",{onSubmit:this.handleSubmit},"Waluta, kt\xf3r\u0105 chcesz wp\u0142aci\u0107:\xa0",r.a.createElement("select",{name:"currency1",value:a,onChange:this.handleChange},e),r.a.createElement("br",null),"Waluta, kt\xf3r\u0105 chcesz otrzyma\u0107:\xa0",r.a.createElement("select",{name:"currency2",value:n,onChange:this.handleChange},e),r.a.createElement("br",null),"Kwota do przeliczenia:\xa0",r.a.createElement("input",{name:"moneyAmount",type:"number",min:"0",step:"0.01",value:c,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",null,"Oblicz")),r.a.createElement("h3",null,l?"".concat(parseFloat(c).toFixed(2)," ").concat(a," = ").concat(parseFloat(l).toFixed(2)," ").concat(n):r.a.createElement("br",null)))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:[],sortedCurrencies:[],beforeSort:!0,publicationDate:"",downloadDate:""},a.selectedCurrencies=["EUR","USD","GBP","CHF","CZK","AUD","CAD","DKK","NOK","SEK","BGN","JPY","TRY"],a.handleDataFetch=function(){fetch("https://api.nbp.pl/api/exchangerates/tables/a?format=json").then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){var t=e[0].rates,n=new Date(e[0].effectiveDate),r=new Date;a.setState({currencies:t,beforeSort:!0,publicationDate:n.toLocaleDateString(),downloadDate:r.toLocaleString()})}).catch(function(e){return console.log(e)})},a.sortCurrencies=function(){var e=[];e.push({currency:"polski z\u0142oty",code:"PLN",mid:1}),a.selectedCurrencies.forEach(function(t){a.state.currencies.forEach(function(a){a.code===t&&e.push(a)})}),a.setState({sortedCurrencies:e,beforeSort:!1})},a.handleRefreshClick=function(){a.handleDataFetch()},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleDataFetch()}},{key:"componentDidUpdate",value:function(){this.state.beforeSort&&this.sortCurrencies()}},{key:"render",value:function(){var e=this.state,t=e.sortedCurrencies,a=e.beforeSort,n=e.publicationDate,c=e.downloadDate;return r.a.createElement(r.a.Fragment,null,a?null:r.a.createElement(b,{sortedCurrencies:t,tableCategory:"Aktualne"}),r.a.createElement(D,{sortedCurrencies:t,beforeSort:a,publicationDate:n,downloadDate:c,refreshButtonClick:this.handleRefreshClick,tableCategory:"Aktualne"}))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:[],sortedCurrencies:[],beforeSort:!0,afterDownload:!1,selectedDate:"",publicationDate:"",downloadDate:""},a.selectedCurrencies=["EUR","USD","GBP","CHF","CZK","AUD","CAD","DKK","NOK","SEK","BGN","JPY","TRY"],a.handleDataFetch=function(){var e="https://api.nbp.pl/api/exchangerates/tables/a/".concat(a.state.selectedDate,"?format=json");fetch(e).then(function(e){if(e.ok)return e;throw alert("Brak danych dla wybranej daty. Wybierz inn\u0105 dat\u0119."),Error(e.status)}).then(function(e){return e.json()}).then(function(e){var t=e[0].rates,n=new Date(a.state.selectedDate),r=new Date;a.setState({currencies:t,publicationDate:n.toLocaleDateString(),downloadDate:r.toLocaleString(),afterDownload:!0})}).catch(function(e){return console.log(e)})},a.sortCurrencies=function(){var e=[];e.push({currency:"polski z\u0142oty",code:"PLN",mid:1}),a.selectedCurrencies.forEach(function(t){a.state.currencies.forEach(function(a){a.code===t&&e.push(a)})}),a.setState({sortedCurrencies:e,beforeSort:!1})},a.handleDataChange=function(e){a.setState({selectedDate:e.target.value,beforeSort:!0,afterDownload:!1})},a.handleSubmit=function(e){if(e.preventDefault(),!a.state.selectedDate)return alert("Wybierz dat\u0119.");a.handleDataFetch()},a.dateScope=function(){var e=new Date,t=new Date;return t.setDate(e.getDate()-1825),[a.setDateFormat(t),a.setDateFormat(e)]},a.setDateFormat=function(e){var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(n,"-").concat(a<=9?"0"+a:a,"-").concat(t<=9?"0"+t:t)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.state.afterDownload&&this.state.beforeSort&&this.sortCurrencies()}},{key:"render",value:function(){var e=this.state,t=e.sortedCurrencies,a=e.beforeSort,n=e.publicationDate,c=e.downloadDate,l=e.selectedDate;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},"Data:\xa0",r.a.createElement("input",{type:"date",min:this.dateScope()[0],max:this.dateScope()[1],value:l,onChange:this.handleDataChange}),r.a.createElement("button",null,"Wyszukaj dane")),a?null:r.a.createElement(b,{sortedCurrencies:t,tableCategory:"Archiwalne"}),r.a.createElement(D,{sortedCurrencies:t,beforeSort:a,publicationDate:n,downloadDate:c,tableCategory:"Archiwalne"}))}}]),t}(n.Component),g=function(e){var t=e.currencyCode,a=e.downloadDate,n=e.currencyHistory.map(function(e){return r.a.createElement("tr",{key:e.effectiveDate},r.a.createElement("td",null,e.effectiveDate),r.a.createElement("td",null,e.mid.toFixed(4)))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Historia zmian kursu waluty ",t),r.a.createElement("h3",null,"Data i godzina pobrania danych: ",a),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Data"),r.a.createElement("td",null,"Warto\u015b\u0107 kursu")),n)))},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={selectedCurrency:"EUR",selectedDateFrom:"",selectedDateTo:"",downloadDate:"",currencyHistory:[],afterDownload:!1},a.selectedCurrencies=["EUR","USD","GBP","CHF","CZK","AUD","CAD","DKK","NOK","SEK","BGN","JPY","TRY"],a.handleDataFetch=function(){var e="https://api.nbp.pl/api/exchangerates/rates/a/".concat(a.state.selectedCurrency,"/").concat(a.state.selectedDateFrom,"/").concat(a.state.selectedDateTo,"?format=json");fetch(e).then(function(e){if(e.ok)return e;throw Error(e.status)}).then(function(e){return e.json()}).then(function(e){var t=e.rates,n=new Date;a.setState({currencyHistory:t,downloadDate:n.toLocaleString(),afterDownload:!0})}).catch(function(e){return console.log(e)})},a.handleDataChange=function(e){var t;a.setState((t={},Object(y.a)(t,e.target.name,e.target.value),Object(y.a)(t,"afterDownload",!1),t))},a.handleSubmit=function(e){e.preventDefault();var t=new Date(a.state.selectedDateFrom);if((new Date(a.state.selectedDateTo).getTime()-t.getTime())/864e5+1>366)return alert("Jednorazowo mo\u017cesz wybra\u0107 zakres max 366 dni.");a.handleDataFetch()},a.dateScope=function(){var e=new Date,t=new Date;return t.setDate(e.getDate()-1825),[a.setDateFormat(t),a.setDateFormat(e)]},a.setDateFormat=function(e){var t=e.getDate(),a=e.getMonth()+1,n=e.getFullYear();return"".concat(n,"-").concat(a<=9?"0"+a:a,"-").concat(t<=9?"0"+t:t)},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.selectedCurrency,a=e.selectedDateFrom,n=e.selectedDateTo,c=e.downloadDate,l=e.currencyHistory,o=e.afterDownload,u=this.selectedCurrencies.map(function(e){return r.a.createElement("option",{key:e},e)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{onSubmit:this.handleSubmit},"Waluta:\xa0",r.a.createElement("select",{name:"selectedCurrency",value:t,onChange:this.handleDataChange},u),r.a.createElement("br",null),"Data od:\xa0",r.a.createElement("input",{name:"selectedDateFrom",type:"date",min:this.dateScope()[0],max:this.dateScope()[1],value:a,onChange:this.handleDataChange}),r.a.createElement("br",null),"Data do:\xa0",r.a.createElement("input",{name:"selectedDateTo",type:"date",min:this.dateScope()[0],max:this.dateScope()[1],value:n,onChange:this.handleDataChange}),r.a.createElement("button",null,"Wyszukaj dane")),o?r.a.createElement(g,{currencyCode:t,downloadDate:c,currencyHistory:l}):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Wybierz walut\u0119 i zakres dat, a nast\u0119pnie kliknij przycisk."),r.a.createElement("h3",null,"Dost\u0119pne s\u0105 dane z ostatnich 5 lat."),r.a.createElement("h3",null,"Uwaga! Jednorazowo mo\u017cesz wybra\u0107 zakres max 366 dni.")))}}]),t}(n.Component),v=function(){return r.a.createElement("h2",null,"B\u0142\u0105d wczytywania strony - sprawd\u017a poprawno\u015b\u0107 adresu.")},S=(a(37),function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{path:"/",exact:!0,component:w}),r.a.createElement(h.a,{path:"/archive",component:C}),r.a.createElement(h.a,{path:"/history",component:k}),r.a.createElement(h.a,{component:v}))}),j=(a(38),function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"\xa9 2019, created by ",r.a.createElement("span",null,"Rados\u0142aw Ko\u0142odziejczyk")))}),z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{basename:"/currency-calculator"},r.a.createElement("div",{className:"app"},r.a.createElement("nav",null,r.a.createElement(E,null)),r.a.createElement("header",null,r.a.createElement(f,null)),r.a.createElement("main",null,r.a.createElement(S,null)),r.a.createElement("footer",null,r.a.createElement(j,null))))}}]),t}(n.Component);l.a.render(r.a.createElement(z,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.60d0d8d5.chunk.js.map