(this["webpackJsonpclicky-game"]=this["webpackJsonpclicky-game"]||[]).push([[0],[,,,,,,function(e){e.exports=JSON.parse('[{"id":1,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/butters-stotch.png","clicked":false},{"id":2,"image":"https://escapetheroom.com/south-park/wp-content/uploads/sites/24/2019/05/cartman.png","clicked":false},{"id":3,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/clyde-donovan.png","clicked":false},{"id":4,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/craig-tucker.png","clicked":false},{"id":5,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/gary-harrison.png","clicked":false},{"id":6,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/jimmy-valmer.png","clicked":false},{"id":7,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/kenny-mccormick.png","clicked":false},{"id":8,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/kyle-broflovski.png","clicked":false},{"id":9,"image":"https://southparkstudios.mtvnimages.com/shared/characters/alter-egos/other-4th-graders-nathan-casual-outfit.png","clicked":false},{"id":10,"image":"https://southparkstudios.mtvnimages.com/shared/characters/adults/education-pc-principal.png","clicked":false},{"id":11,"image":"https://southparkstudios.mtvnimages.com/shared/characters/adults/sharon-marsh.png","clicked":false},{"id":12,"image":"https://southparkstudios.mtvnimages.com/shared/characters/adults/sheila-broflovski.png","clicked":false},{"id":13,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/stan-marsh.png","clicked":false},{"id":14,"image":"https://southparkstudios.mtvnimages.com/shared/characters/non-human/towelie.png","clicked":false},{"id":15,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/tweek-tweak.png","clicked":false},{"id":16,"image":"https://southparkstudios.mtvnimages.com/shared/characters/kids/wendy-testaburger.png","clicked":false}]')},,,function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),s=t(3),n=t.n(s),i=(t(14),t(1)),o=t(4),l=t(5),m=t(8),h=t(7),d=function(e){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper row blue darken-4 center"},r.a.createElement("div",{className:"col s4"},r.a.createElement("a",{href:"/"},"South Park Clicky Game")),r.a.createElement("div",{className:"col s4"},r.a.createElement("span",null,"Click a character to begin!")),r.a.createElement("div",{className:"col s4"},r.a.createElement("span",null,"Score: ",e.score," | High Score: ",e.highScore)))))},u=(t(15),function(e){return r.a.createElement("div",{id:"header",className:"container"},r.a.createElement("div",{className:"col"},r.a.createElement("span",null,r.a.createElement("h4",{id:"rules"},"Click on an image to earn points, but don't click on any of them more than once!"))))}),g=(t(16),function(e){return r.a.createElement("section",{className:"container"},e.children)}),p=(t(17),function(e){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("div",{className:"footer-copyright"},r.a.createElement("div",{className:"container blue darken-4"},r.a.createElement("p",{className:"white-text"},"\xa9 2020 Copyright Jared Silver. For project code ",r.a.createElement("a",{className:"white-text",href:"https://github.com/jsilver88/clicky-game",target:"_blank",rel:"noopener noreferrer"},"Click here")))))}),k=(t(18),function(e){return r.a.createElement("div",{className:"charImages",onClick:function(){return e.handleClick(e.id)}},r.a.createElement("div",{className:"character-card card-image waves-effect waves-block waves-light"},r.a.createElement("img",{alt:"South Park",src:e.image,className:"characters activator clicked"})))}),f=t(6),v=(t(19),function(e){Object(m.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(o.a)(this,t);for(var c=arguments.length,r=new Array(c),s=0;s<c;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={characters:f,score:0,highScore:0},e.resetGame=function(a){var t=a.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{clicked:!1})}));return e.flipImages(t)},e.flipImages=function(e){for(var a=e.length-1;a>0;){var t=Math.floor(Math.random()*(a+1)),c=e[a];e[a]=e[t],e[t]=c,a--}return e},e.rightPick=function(a){var t=e.state,c=t.highScore,r=t.score+1,s=r>c?r:c;e.setState({characters:e.flipImages(a),score:r,highScore:s})},e.wrongPick=function(a){e.setState({data:e.resetGame(a),score:0})},e.handleClick=function(a){var t=!1,c=e.state.characters.map((function(e){var c=Object(i.a)({},e);return c.id===a&&(c.clicked||(c.clicked=!0,t=!0)),c}));t?e.rightPick(c):e.wrongPick(c)},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({characters:this.flipImages(this.state.characters)})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{score:this.state.score,highScore:this.state.highScore}),r.a.createElement(u,null),r.a.createElement(g,null,this.state.characters.map((function(a){return r.a.createElement(k,{key:a.id,id:a.id,handleClick:e.handleClick,image:a.image})}))),r.a.createElement(p,null))}}]),t}(c.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.40adb723.chunk.js.map