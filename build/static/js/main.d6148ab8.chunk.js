(this.webpackJsonpfindfalcone=this.webpackJsonpfindfalcone||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(21),c=n.n(s),i=(n(27),n(4)),l=n(5),r=n(7),o=n(6),d=(n(28),n(9)),h=n.p+"static/media/logo.7dd060f3.png",j=n(8),b=n(0),u=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(b.jsx)(j.b,{to:"/",children:Object(b.jsxs)("button",{className:"navbar-brand",children:[Object(b.jsx)("img",{src:h,width:"30",height:"30",className:"d-inline-block align-top nav-logo",alt:"King Shan"}),"\xa0 ",Object(b.jsx)("strong",{children:d.title})]})}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsxs)("ul",{className:"navbar-nav",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("a",{className:"nav-link",href:d.geektrusthome,target:"_blank",rel:"noopener noreferrer",children:"Geek Trust Home"})})]})})]})}}]),n}(a.Component),m=(n(35),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"text-center fixed-bottom bg-dark footer",children:Object(b.jsxs)("p",{children:["\xa9 Coding problem - \xa0",Object(b.jsx)("a",{href:d.problemlink,className:"footerlinnk",target:"_blank",rel:"noopener noreferrer",children:"Find the Queen of Falicornia"}),"."]})})}}]),n}(a.Component)),p=n(13),f=(n(36),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"select-planet",children:[Object(b.jsxs)("h3",{className:"planetnumber",children:["Planet ",this.props.id]}),Object(b.jsxs)("select",{onChange:this.props.onChange,className:"custom-select mb-3",name:this.props.name,value:this.props.destinationProps.destination,children:[Object(b.jsx)("option",{selected:"true",children:this.props.destinationProps.destination}),this.props.planets.map((function(e){return Object(b.jsx)("option",{children:e.name},e.name)}))]}),Object(b.jsx)("br",{})]})}}]),n}(a.Component)),O=(n(37),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"vehicles text-left custom-radio",children:this.props.destinationProps.eligibleVehicles.map((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{disabled:0===e.props.vehicleCount.filter((function(e){return e.name===t.name}))[0].total_no,onChange:e.props.onChange,checked:0!==e.props.destinationProps.vehicle.length&&null,type:"radio",name:e.props.destinationProps.name,value:t.name}),Object(b.jsxs)("label",{className:"m-2",children:[t.name," ",Object(b.jsx)("span",{children:e.props.vehicleCount.filter((function(e){return e.name===t.name}))[0].total_no})]}),Object(b.jsx)("br",{})]},t.name)}))})}}]),n}(a.Component)),x=(n(38),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={loading:!0,planets:[],destinations:[{id:"One",name:"planetOne",destination:"Select 1st planet",vehicle:"",timeTaken:0,isSelected:!1,eligibleVehicles:[]},{id:"Two",name:"planetTwo",destination:"Select 2nd planet",vehicle:"",timeTaken:0,isSelected:!1,eligibleVehicles:[]},{id:"Three",name:"planetThree",destination:"Select 3rd planet",vehicle:"",timeTaken:0,isSelected:!1,eligibleVehicles:[]},{id:"Four",name:"planetFour",destination:"Select 4th planet",vehicle:"",timeTaken:0,isSelected:!1,eligibleVehicles:[]}],vehicles:[],disabled:!0,totalTime:0},e.originalVehicles=[],e.originalPlanetList=[],e.callPlanetsAPI=function(){fetch("https://findfalcone.herokuapp.com/planets").then((function(e){return e.json()})).then((function(t){e.setState({planets:t}),e.originalPlanetList.push(t)})).catch((function(t){setTimeout(e.callPlanetsAPI,5e3)}))},e.callVehiclesAPI=function(){fetch("https://findfalcone.herokuapp.com/vehicles").then((function(e){return e.json()})).then((function(t){e.setState({vehicles:t}),e.originalVehicles.push(t),e.setState({loading:!1})})).catch((function(t){setTimeout(e.callVehiclesAPI,5e3)}))},e.handleChange=function(t){var n=e.state.destinations.filter((function(e){return t.target.name===e.name}));if(!1===n[0].isSelected){var a=e.state.planets.filter((function(e){return e.name!==t.target.value}));e.setState({planets:a})}else{var s=n[0],c=e.originalPlanetList[0].filter((function(e){return e.name===s.destination})),i=Object(p.a)(e.state.planets);i.push(c[0]);var l=i.filter((function(e){return e.name!==t.target.value}));e.setState({planets:l})}var r=Object(p.a)(e.state.destinations);r.map((function(e){return e.name===t.target.name&&(e.isSelected=!0,e.destination=t.target.value,e.vehicle="",e.timeTaken=0),""})),e.setState({destinations:r});var o=e.state.planets.filter((function(e){return e.name===t.target.value}));e.handleVehicles(o,t)},e.handleVehicles=function(t,n){var a=e.state.vehicles.filter((function(e){return e.max_distance>=t[0].distance})),s=Object(p.a)(e.state.destinations);s.map((function(e){return e.name===n.target.name&&(e.eligibleVehicles=a),""})),e.setState({destinations:s})},e.handleReset=function(){e.setState({planets:[],destinations:[{id:"One",name:"planetOne",destination:"Select 1st Planet",vehicle:"",timeTaken:0,isSelected:!1},{id:"Two",name:"planetTwo",destination:"Select 2nd Planet",vehicle:"",timeTaken:0,isSelected:!1},{id:"Three",name:"planetThree",destination:"Select 3rd Planet",vehicle:"",timeTaken:0,isSelected:!1},{id:"Four",name:"planetFour",destination:"Select 4th Planet",vehicle:"",timeTaken:0,isSelected:!1}],vehicles:[],disabled:!0,totalTime:0}),e.callPlanetsAPI(),e.callVehiclesAPI()},e.handleVehicleChange=function(t){var n=Object(p.a)(e.state.destinations);n.map((function(n){return n.name===t.target.name&&(""===n.vehicle?e.handleVehicleCountWhenNotSelected(t):e.handleVehicleCountWhenSelected(t),n.vehicle=t.target.value),""})),e.setState({destinations:n}),e.changeButtonState(),e.handleTime(t)},e.handleVehicleCountWhenNotSelected=function(t){var n=Object(p.a)(e.state.vehicles);n.map((function(e){return t.target.value===e.name&&(e.total_no-=1),""})),e.setState({vehicles:n})},e.handleVehicleCountWhenSelected=function(t){var n=e.state.destinations.filter((function(e){return e.name===t.target.name}))[0].vehicle,a=Object(p.a)(e.state.vehicles);a.map((function(e){return t.target.value===e.name&&(e.total_no-=1),e.name===n&&(e.total_no+=1),""})),e.setState({vehicles:a})},e.changeButtonState=function(){var t=e.state.destinations.every((function(e){return e.vehicle.length>0}));e.setState({disabled:!t})},e.handleTime=function(t){var n=e.state.destinations.filter((function(e){return e.name===t.target.name}))[0].destination,a=e.originalPlanetList[0].filter((function(e){return n===e.name}))[0].distance/e.state.vehicles.filter((function(e){return e.name===t.target.value}))[0].speed,s=Object(p.a)(e.state.destinations);s.map((function(e){return e.name===t.target.name&&(e.timeTaken=a),""})),e.setState({destinations:s}),e.calculateTotalTime()},e.calculateTotalTime=function(){var t=Object(p.a)(e.state.destinations),n=0;t.map((function(e){return n+=e.timeTaken,""})),e.setState({totalTime:n})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.callPlanetsAPI(),this.callVehiclesAPI()}},{key:"render",value:function(){var e=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"myCont container h-100 d-flex flex-column",children:[Object(b.jsxs)("div",{className:"p-4",children:[Object(b.jsx)("h1",{className:"text-center ",children:"Select the planets and vehicles"}),Object(b.jsx)("h3",{className:"text-center p-2",children:Object(b.jsxs)("span",{class:"badge badge-secondary p-2",children:["Time taken: \xa0",this.state.totalTime," hrs"]})})]}),Object(b.jsxs)("div",{id:"main",children:[Object(b.jsxs)("div",{className:"row destination text-center",children:[this.state.destinations.map((function(t){return Object(b.jsxs)("div",{style:t.isSelected?null:{height:"min-content"},className:"col-sm-6 col-lg-3 ",children:[Object(b.jsxs)("div",{className:"card text-white bg-info mb-3 mycard",children:[Object(b.jsx)(f,{planets:e.state.planets,onChange:e.handleChange,destinationProps:t,name:t.name,id:t.id},t.id),t.isSelected?Object(b.jsx)(O,{vehicleCount:e.state.vehicles,onChange:e.handleVehicleChange,destinationProps:t}):null]}),Object(b.jsx)("br",{})]},t.id)})),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:"row justify-content-center",children:Object(b.jsxs)("div",{className:"findFalconeButtons",children:[Object(b.jsx)(j.b,{disabled:!0,to:{pathname:"/success",fromGame:!0,state:this.state.destinations,totalTime:this.state.totalTime},children:Object(b.jsx)("button",{disabled:this.state.disabled,className:"btn btn-lg btn-info","data-toggle":"tooltip",title:"Select all four planets to find queen falcone",children:"Find Falcone!"})}),Object(b.jsx)("button",{disabled:this.state.loading,onClick:this.handleReset,className:"btn btn-lg btn-dark btn-margin",children:this.state.loading?Object(b.jsx)("i",{className:"fa fa-refresh fa-spin"}):"Reset"})]})})]})]})})}}]),n}(a.Component)),g=(n(39),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).planetNames=[],e.vehicleNames=[],e.state={isConnected:!0,loading:!0,successMessage:"",planet:"",totalTime:""},e.getTokenAPI=function(){fetch("https://findfalcone.herokuapp.com/token",{method:"POST",headers:{Accept:"application/json"},body:{}}).then((function(e){return e.json()})).then((function(t){e.findFalconeAPI(t.token,e.planetNames,e.vehicleNames)})).catch((function(t){e.setState({isConnected:!1}),setTimeout(e.getTokenAPI,5e3)}))},e.findFalconeAPI=function(t,n,a){e.setState({successMessage:"Please wait while we calculate.."}),fetch("https://findfalcone.herokuapp.com/find",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({token:t,planet_names:n,vehicle_names:a})}).then((function(e){return e.json()})).then((function(t){e.setState({loading:!1,isConnected:!0}),"error"===t.status||void 0===t||!0!==e.props.location.fromGame?(e.setState({successMessage:"Please re-initialize the game!"}),e.props.history.push("/")):"false"===t.status?e.setState({successMessage:"Sorry! The Queen of Falicornia was not found!"}):e.setState({successMessage:"Congratulations! You found the Queen of Falicornia!",planet:t.planet_name})})).catch((function(t){setTimeout(e.findFalconeAPI,5e3)}))},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.state;void 0!==e&&(this.planetNames=e.map((function(e){return e.destination})),this.vehicleNames=e.map((function(e){return e.vehicle}))),this.setState({totalTime:this.props.location.totalTime}),this.getTokenAPI()}},{key:"render",value:function(){var e=this.state.planet;return Object(b.jsxs)("div",{className:"card text-center success-card",children:[Object(b.jsxs)("div",{children:[this.state.loading&&Object(b.jsx)("i",{className:"fa fa-refresh fa-spin"}),this.state.isConnected?null:Object(b.jsx)("span",{children:"\xa0Please wait while we try to connect..."})]}),Object(b.jsxs)("div",{class:"card-body text-center",children:[Object(b.jsx)("h1",{className:"card-title",children:this.state.successMessage}),Object(b.jsx)("br",{}),Object(b.jsxs)("h3",{class:"card-text",children:[(null!==e||void 0!==e)&&e.length>0?Object(b.jsxs)("span",{className:"font-weight-bold",children:["The queen was found on ",e]}):null,(null!==e||void 0!==e)&&e.length>0?Object(b.jsxs)("span",{className:"font-weight-bold",children:["in ",this.state.totalTime," hours."]}):null]}),Object(b.jsxs)("div",{className:"back-btn",children:[Object(b.jsx)(j.b,{to:{pathname:"/findFalcone",fromGame:!0},children:Object(b.jsx)("button",{className:"btn btn-lg btn-info bk-btn",children:"Play Again"})}),Object(b.jsx)(j.b,{to:{pathname:"/",fromGame:!0},children:Object(b.jsx)("button",{className:"btn btn-lg btn-secondary bk-btn",children:"Go to Home"})})]})]})]})}}]),n}(a.Component)),v=(n(40),function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).state={isHidden:!0},e}return Object(l.a)(n,[{key:"toggleHidden",value:function(){this.setState({isHidden:!this.state.isHidden})}},{key:"render",value:function(){return window.scrollTo(0,0),Object(b.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(b.jsxs)("div",{className:"welcm-pg",children:[Object(b.jsx)("h1",{children:d.welcome}),Object(b.jsx)("h3",{children:d.startthegame}),Object(b.jsx)(j.b,{to:{pathname:"/knowmore",fromGame:!0},children:Object(b.jsx)("button",{class:"btn btn-info btn-lg wlecm-btn",children:"Know about Lengaburu"})}),Object(b.jsx)(j.b,{to:{pathname:"/findFalcone",fromGame:!0},children:Object(b.jsx)("button",{class:"btn btn-info btn-lg wlecm-btn",children:"Let's start the search"})})]})})}}]),n}(a.Component)),N=n.p+"static/media/Donlon.2d672b5f.png",S=n.p+"static/media/Enchai.3d727dc2.png",k=n.p+"static/media/Jebing.39f48a34.png",P=n.p+"static/media/Sapir.205a321e.png",T=n.p+"static/media/Lerbin.03e44182.png",w=n.p+"static/media/Pingasor.2e68ff26.png",y=n.p+"static/media/SpacePod.d2588ec5.png",M=n.p+"static/media/SpaceRocket.f36d197b.png",C=n.p+"static/media/SpaceShuttle.79fac538.png",A=n.p+"static/media/SpaceShip.6784c415.png",F=function(e){Object(r.a)(n,e);var t=Object(o.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h3",{className:"text-center knowmore",children:[Object(b.jsx)("span",{children:Object(b.jsx)("img",{src:h,alt:"logo",className:"knowmore-logo"})}),"\xa0 King Shan of Lengaburu"]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h5",{children:[d.storyPara1," ",d.storyPara2]}),Object(b.jsx)("h5",{children:d.storyPara3}),Object(b.jsx)("p",{className:"problem-text text-center bg-dark text-light p-2",children:d.Problem})]}),Object(b.jsxs)("div",{className:"card border-info mb-3 text-center",children:[Object(b.jsx)("h2",{className:"card-header",children:"Potential hideout planets"}),Object(b.jsx)("div",{className:"card-body text-info",children:Object(b.jsxs)("div",{id:"planets",className:"row",children:[Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"rounded-circle",src:N,alt:"Donlon"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Donlon"}),Object(b.jsx)("br",{}),"100 MM"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"rounded-circle",src:S,alt:"Enchai"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Enchai"}),Object(b.jsx)("br",{}),"200 MM"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"rounded-circle",src:k,alt:"Jebing"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Jebing"}),Object(b.jsx)("br",{}),"300 MM"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"rounded-circle",src:P,alt:"Sapir"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Sapir"}),Object(b.jsx)("br",{}),"400 MM"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{id:"lerbin",className:"rounded-circle",src:T,alt:"Lerbin"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Lerbin"}),Object(b.jsx)("br",{}),"500 MM"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{className:"rounded-circle",src:w,alt:"Pingasor"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Pingasor"}),Object(b.jsx)("br",{}),"600 MM"]})]})})]})})]}),Object(b.jsxs)("div",{className:"card border-info mb-3 text-center",children:[Object(b.jsx)("h2",{className:"card-header",children:"Available space vehicles"}),Object(b.jsx)("div",{className:"card-body text-info",children:Object(b.jsxs)("div",{className:"row",id:"vehicles",children:[Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:y,alt:"Space Pod",className:"space-pod-img"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Space Pod"}),Object(b.jsx)("br",{})," 200 MM(2 MM/hour)",Object(b.jsx)("br",{})," Units Available - 2"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:M,alt:"Space Rocket",className:"space-pod-img"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Space Rocket"}),Object(b.jsx)("br",{})," 300 MM(4 MM/hour)",Object(b.jsx)("br",{})," Units Available - 1"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:C,alt:"Space Shuttle",className:"space-pod-img"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Space Shuttle"}),Object(b.jsx)("br",{})," 400 MM(5 MM/hour)",Object(b.jsx)("br",{})," Units Available - 1"]})]})}),Object(b.jsx)("div",{className:"col text-center",children:Object(b.jsxs)("figure",{children:[Object(b.jsx)("img",{src:A,alt:"Space Ship",className:"space-pod-img"}),Object(b.jsxs)("figcaption",{children:[Object(b.jsx)("strong",{children:"Space Ship"}),Object(b.jsx)("br",{})," 600 MM(10 MM/hour)",Object(b.jsx)("br",{})," Units Available - 2"]})]})})]})})]}),Object(b.jsx)("div",{className:"row justify-content-center bottom-space",children:Object(b.jsx)(j.b,{to:{pathname:"/findFalcone",fromGame:!0},children:Object(b.jsx)("button",{className:"btn btn-lg btn-info",children:"Let's start the search"})})})]})}}]),n}(a.Component),V=n(2);var I=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(u,{}),Object(b.jsx)(j.a,{children:Object(b.jsxs)(V.c,{children:[Object(b.jsx)(V.a,{path:"/",exact:!0,component:v}),Object(b.jsx)(V.a,{path:"/knowmore",exact:!0,component:F}),Object(b.jsx)(V.a,{path:"/findFalcone",exact:!0,component:x}),Object(b.jsx)(V.a,{path:"/success",exact:!0,component:g})]})}),Object(b.jsx)(m,{})]})};c.a.render(Object(b.jsx)(I,{}),document.getElementById("root"))},9:function(e,t){e.exports={title:"King Shan of Lengaburu",welcome:"Welcome to the Lengaburu!!!",startthegame:"Let's help King Shan to find the Queen of Falicornia.",problemlink:"https://www.geektrust.in/coding-problem/frontend/space",geektrusthome:"https://www.geektrust.in/",storyPara1:"King Shan rules the planet Lenguburu, situated in the Tara B galaxy.",storyPara2:"Since the recent war with planet Falicornia, King Shan has been searching for the exiled Queen of Falicornia.",storyPara3:"As per our trusted source, we have an information that the Queen of Falicornia is using one of the following listed planets as an hideout and we possess limited space vehicles.",Problem:"We need to use the limited resources of space vehicle to find the Queen of Falicornia on the below planets."}}},[[41,1,2]]]);
//# sourceMappingURL=main.d6148ab8.chunk.js.map