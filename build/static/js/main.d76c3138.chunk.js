(window.webpackJsonpwebsite=window.webpackJsonpwebsite||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-logo.9135eeb6.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-instagram.b617cae9.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-facebook.5b7f909c.svg"},,,,,,,function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-dortmund-footer-logo.c27cef66.svg"},,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-dortmund-dosb-mitglied.78813cd1.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-dortmund-ccvd-mitglied.61ce96e1.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-toggle-button.449f920a.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-close-button.e42ea154.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-home.7dc87b67.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-news.f54ab7ed.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-training.94ad85aa.svg"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-mobile-menu-contact.4ef588e6.svg"},function(e,t,n){e.exports=n.p+"static/media/homeVideo.12561b61.mp4"},function(e,t,n){e.exports=n.p+"static/media/united-cheer-sports-schriftzug.b9c2c4d7.svg"},,function(e,t,n){e.exports=n.p+"static/media/cheerleader.e0687142.png"},,function(e,t,n){e.exports=n.p+"static/media/PageNotFound.550fbbb5.svg"},,function(e,t,n){e.exports=n(83)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(31),l=n.n(i),s=(n(54),n(55),n(3)),c=n(4),o=n(6),m=n(5),u=n(7),d=(n(56),n(2)),h=n(11),p=(n(57),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={events:["Die Europameisterschaft startet am 01.05.2019","Die deutsche Meisterschaft startet am 11.08.2019","Die Weltmeisterschaft am 13.03.2019 in Colorado"],duration:25e3},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=document.querySelectorAll(".Eventslider p"),n=0,a=Math.floor(this.state.duration/this.state.events.length),r=function(){t[n%e.state.events.length].classList.add("active"),n++,e.checkForCollision()};r(),this.slideInterval=setInterval(r,a)}},{key:"componentWillUnmount",value:function(){clearInterval(this.slideInterval)}},{key:"checkForCollision",value:function(){document.querySelectorAll(".Eventslider p.active").forEach((function(e){e.getBoundingClientRect().x>=window.innerWidth&&(e.classList.remove("active"),e.classList.add("reset"),e.classList.remove("reset"))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"Eventslider"},this.state.events.map((function(t,n){return r.a.createElement("p",{style:{width:window.innerWidth/e.state.events.length,minWidth:"450px",left:-window.innerWidth/e.state.events.length-500},key:n},"- ",t," -")})))}}]),t}(r.a.Component)),g=n(14),E=n.n(g),f=(n(58),function(e){return r.a.createElement("div",{className:"NavigationContainer"},r.a.createElement("ul",{className:"MainNavigation"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/startseite"},r.a.createElement("span",{"data-hover":"Startseite"},"Startseite"))),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/news"},r.a.createElement("span",{"data-hover":"News"},"News"))),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/probetraining"},r.a.createElement("span",{"data-hover":"Probetraining"},"Probetraining")))),r.a.createElement("div",{className:"NavigationLogoContainer"},r.a.createElement("img",{alt:"United Cheer Sports e.V. Dortmund Logo, Cheeleading, Cheerdance, Sport in Dortmund",src:E.a})),r.a.createElement("ul",{className:"ContactNavigation"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/startseite#kontakt"},r.a.createElement("span",{"data-hover":"Kontakt"},"Kontakt")))))}),v=(n(64),function(e){return r.a.createElement("a",Object.assign({href:e.to,target:e.blank,rel:"noopener noreferrer"},e),e.children)}),b=n(23),w=n.n(b),N=n(15),S=n.n(N),C=n(16),k=n.n(C),D=n(34),y=n.n(D),M=n(35),x=n.n(M),I=function(e){var t=(new Date).getFullYear();return r.a.createElement("div",{className:"Footer"},r.a.createElement("img",{className:"FooterLogo",src:w.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"}),r.a.createElement("div",{className:"ContentContainer"},r.a.createElement("div",{className:"FullContainer FooterNavigation"},r.a.createElement(v,{to:"/startseite",target:"_self"},r.a.createElement("span",{"data-hover":"STARTSEITE"},"STARTSEITE")),r.a.createElement(v,{to:"/news",target:"_self"},r.a.createElement("span",{"data-hover":"NEWS"},"NEWS")),r.a.createElement(v,{to:"/probetraining",target:"_self"},r.a.createElement("span",{"data-hover":"PROBETRAINING"},"PROBETRAINING")),r.a.createElement(v,{to:"/impressum",target:"_self"},r.a.createElement("span",{"data-hover":"IMPRESSUM"},"IMPRESSUM")),r.a.createElement(v,{to:"/datenschutzerklaerung",target:"_self"},r.a.createElement("span",{"data-hover":"DATENSCHUTZERKL\xc4RUNG"},"DATENSCHUTZERKL\xc4RUNG"))),r.a.createElement("div",{className:"SportbundContainer"},r.a.createElement("img",{src:y.a,alt:"united-cheer-sports-dortmund-dosb-mitglied"}),r.a.createElement("img",{src:x.a,alt:"united-cheer-sports-dortmund-ccvd-mitglied"})),r.a.createElement("div",{className:"FooterSocialContainer"},r.a.createElement("a",{href:"https://www.instagram.com/unitedcheersports_cheerleader",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:S.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"})),r.a.createElement("a",{href:"https://www.facebook.com/UnitedCheerSports/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"}))),r.a.createElement("div",{className:"HalfContainer FooterCopyright"},r.a.createElement("p",null,"Copyright ",t," United Cheer Sports e.V. Dortmund")),r.a.createElement("div",{className:"HalfContainer FooterCopyright"},r.a.createElement("p",null,"Made with Love in Germany by Legarti"))))},F=function(e){return e.children},T=(n(65),n(36)),V=n.n(T),A=n(37),W=n.n(A),j=n(38),P=n.n(j),O=n(39),U=n.n(O),L=n(40),G=n.n(L),z=n(41),B=n.n(z),H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).toggleMenu=function(){var e=n.state.openMenu;document.body.classList.toggle("openMenuBody"),n.setState({openMenu:!e})},n.state={openMenu:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement("div",{className:this.state.openMenu?"openMenu MobileNavigationContainer":"MobileNavigationContainer"},r.a.createElement("img",{className:"Logo",src:E.a,alt:"united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"}),r.a.createElement("ul",{className:"MenuItemContainer"},r.a.createElement(v,{to:"startseite"},r.a.createElement("li",{className:"MenuItem"},r.a.createElement("img",{src:P.a,className:"MenuItemIcon",alt:"united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"}),r.a.createElement("span",{className:"MenuItemName"},"Startseite"))),r.a.createElement(v,{to:"news"},r.a.createElement("li",{className:"MenuItem"},r.a.createElement("img",{src:U.a,className:"MenuItemIcon",alt:"united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"}),r.a.createElement("span",{className:"MenuItemName"},"News"))),r.a.createElement(v,{to:"probetraining"},r.a.createElement("li",{className:"MenuItem"},r.a.createElement("img",{src:G.a,className:"MenuItemIcon",alt:"united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"}),r.a.createElement("span",{className:"MenuItemName"},"Probetraining"))),r.a.createElement(v,{to:"startseite#contact"},r.a.createElement("li",{className:"MenuItem"},r.a.createElement("img",{src:B.a,className:"MenuItemIcon",alt:"united-cheer-sports dortmund, cheerleader, cheerdancer,cheerleading,sport in dortmund"}),r.a.createElement("span",{className:"MenuItemName"},"Kontakt"))))),r.a.createElement("div",{className:this.state.openMenu?"openMenu MobileNavigationToggle":"MobileNavigationToggle",onClick:this.toggleMenu},r.a.createElement("img",{className:"ToggleButton",src:this.state.openMenu?W.a:V.a,alt:"united-cheer-sports-mobile-menu-toggle-button"}),r.a.createElement("div",{className:"SocialContainer"},r.a.createElement("a",{href:"https://www.instagram.com/unitedcheersports_cheerleader",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:S.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"})),r.a.createElement("a",{href:"https://www.facebook.com/UnitedCheerSports/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"})))),r.a.createElement("div",{className:this.state.openMenu?"openMenu MobileNavigationAccent":"MobileNavigationAccent"}))}}]),t}(r.a.Component),R=function(e){return e.children},_=(n(66),n(42)),Z=n.n(_),q=n(43),K=n.n(q),J=(n(67),function(e){var t="/"+e.to;return e.submit?r.a.createElement("button",{type:"submit",className:"PrimaryButton","data-text":e.text}," "):r.a.createElement("a",{href:t,className:"PrimaryButton",rel:"noopener noreferrer","data-text":e.text}," ")}),Y=function(e){return r.a.createElement("div",{className:"HeroContainer"},r.a.createElement("div",{className:"VideoBackground"},r.a.createElement("video",{loop:!0,muted:!0,autoPlay:!0},r.a.createElement("source",{src:Z.a,type:"video/mp4"}),"Dein Browser unterstuetzt keine Videos")),r.a.createElement("div",{className:"InnerHeroContainer"},r.a.createElement("img",{className:"HeroHeadline",src:K.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"}),r.a.createElement("p",{className:"HeroSubline"},"Cheerleading und Cheerdance sind selbstst\xe4ndige Wettkampfsportarten und vereinen Turnen, Akrobatik und Tanz sowie Anfeuerungsrufe."),r.a.createElement("p",{className:"allTogether"},"All Together"),r.a.createElement(J,{text:"werde teil von ucs",to:"probetraining"})),r.a.createElement("div",{className:"HeroSocialContainer"},r.a.createElement("a",{href:"https://www.instagram.com/unitedcheersports_cheerleader",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:S.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"})),r.a.createElement("a",{href:"https://www.facebook.com/UnitedCheerSports/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:k.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"}))))},Q=(n(68),n(69),function(e){return r.a.createElement(R,{isContentContainer:!0},r.a.createElement("h2",{className:"SectionHeadline"},e.headline),r.a.createElement("p",{className:"SectionSubline"},e.children))}),X=(n(70),function(e){return r.a.createElement("div",{className:"NewsPreviewContainer"},r.a.createElement("div",{className:"NewsPreviewThumbnailContainer"},r.a.createElement("img",{src:e.imgurl,className:"NewsPreviewThumbnail",alt:"United Cheer Sports e.V. Dortmund, Cheerleader, Cheerdancer, Aktuelle Nachrichten"})),r.a.createElement("h3",{className:"NewsPreviewHeadline"},e.headline),r.a.createElement("p",{className:"NewsPreviewText"},e.children),r.a.createElement("p",{className:"NewsPreviewReadMore"},"Mehr lesen"))}),$=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={latestNews:[]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"HomeNewsContainer ContentContainer"},r.a.createElement(Q,{headline:"Neues von UCS"},"Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund."),r.a.createElement("div",{className:"HomeNewsInnerContainer"},r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft")),r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft")),r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft"))),r.a.createElement("div",{className:"HomeNewsPrimaryButtonContainer"},r.a.createElement(J,{text:"Zur News\xfcbersicht",to:"news"})))}}]),t}(r.a.Component),ee=(n(71),function(e){return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:e.fill,width:e.size,height:e.size},e),r.a.createElement("path",{class:"cls-1",d:"M18.9,0H1.1A1.1,1.1,0,0,0,0,1.1V18.9A1.1,1.1,0,0,0,1.1,20h9.58V12.26H8.07v-3h2.61V7a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7h-1.6c-1.25,0-1.49.6-1.49,1.47V9.24h3l-.39,3H13.8V20h5.1A1.1,1.1,0,0,0,20,18.9V1.1A1.1,1.1,0,0,0,18.9,0"}))}),te=function(e){return r.a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:e.fill,width:e.size,height:e.size},e),r.a.createElement("path",{class:"cls-1",d:"M10,0C7.28,0,6.94,0,5.88.06A7.59,7.59,0,0,0,3.45.52,4.85,4.85,0,0,0,1.68,1.68,4.85,4.85,0,0,0,.52,3.45,7.59,7.59,0,0,0,.06,5.88C0,6.94,0,7.28,0,10s0,3.06.06,4.12a7.59,7.59,0,0,0,.46,2.43,4.85,4.85,0,0,0,1.16,1.77,4.85,4.85,0,0,0,1.77,1.16,7.59,7.59,0,0,0,2.43.46C6.94,20,7.28,20,10,20s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12a7.59,7.59,0,0,0-.46-2.43,4.85,4.85,0,0,0-1.16-1.77A4.85,4.85,0,0,0,16.55.52,7.59,7.59,0,0,0,14.12.06C13.06,0,12.72,0,10,0Zm0,1.8c2.67,0,3,0,4,.06a5.54,5.54,0,0,1,1.86.35A3,3,0,0,1,17.05,3,3.06,3.06,0,0,1,17.8,4.1,5.61,5.61,0,0,1,18.14,6c.05,1,.06,1.37.06,4s0,3-.06,4a5.81,5.81,0,0,1-.35,1.86A3.19,3.19,0,0,1,17,17.05a3.14,3.14,0,0,1-1.15.75,5.69,5.69,0,0,1-1.87.34c-1.06.05-1.37.06-4,.06s-3,0-4.05-.06a5.89,5.89,0,0,1-1.87-.35A3.19,3.19,0,0,1,2.91,17a3.14,3.14,0,0,1-.75-1.15A5.89,5.89,0,0,1,1.81,14c0-1-.05-1.37-.05-4s0-3,.05-4a5.81,5.81,0,0,1,.35-1.86,3.1,3.1,0,0,1,.75-1.16,3,3,0,0,1,1.15-.74,5.52,5.52,0,0,1,1.85-.35C7,1.79,7.29,1.78,10,1.78Zm0,3.07A5.14,5.14,0,1,0,15.14,10,5.14,5.14,0,0,0,10,4.87Zm0,8.46A3.33,3.33,0,1,1,13.33,10,3.33,3.33,0,0,1,10,13.33Zm6.54-8.67a1.2,1.2,0,1,1-1.2-1.2A1.2,1.2,0,0,1,16.54,4.66Z"}))},ne=n(44),ae=n.n(ne),re=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={clientID:"09ec5dc4ee2b42abbacf29be681023bc",access_token:"1666601157.1677ed0.05bf59f4afb345878c017163814bb33f",userID:"1666601157",showFeed:!1},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;new ae.a({get:"user",clientId:this.state.clientID,userId:this.state.userID,accessToken:this.state.access_token,sortBy:"most-recent",limit:6,resolution:"low_resolution",links:!0,success:function(){e.setState({showFeed:!0})},template:'<a href="{{link}}" class="instafeedPost"><img class="instafeedImage" src="{{image}}" /><div class="InnerInstaFeedPost"><span class="InstaFeedLikes">{{likes}}</span><span class="InstaFeedComments">{{comments}}</span></div></a>'}).run()}},{key:"render",value:function(){var e;return this.state.showFeed&&(e=r.a.createElement("div",{id:"instafeed"})),r.a.createElement("div",{className:"InstagramFeedContainer"},r.a.createElement("img",{className:"Logo",src:E.a,alt:"United Cheer Sports e.V. Dortmund Schriftzug, Cheeleading, Cheerdance, Sport in Dortmund"}),r.a.createElement("div",{className:"ContentContainer"},e,r.a.createElement("div",{className:"InstagramFeedLinks"},r.a.createElement(v,{className:"SocialLink",to:"https://www.facebook.com/UnitedCheerSports/",target:"_blank"},r.a.createElement(ee,{fill:"#000000",size:"30px",className:"SocialLinkIcon"}),r.a.createElement("span",null,"UnitedCheerSports")),r.a.createElement(v,{className:"SocialLink",to:"https://www.instagram.com/unitedcheersports_cheerleader/",target:"_blank"},r.a.createElement("span",null,"unitedcheersports_cheerleader"),r.a.createElement(te,{fill:"#000000",size:"30px",className:"SocialLinkIcon"})))))}}]),t}(r.a.Component),ie=(n(72),n(73),n(45)),le=n.n(ie),se=function(e){var t=["MemberContainer",e.carouselPosition].join(" ");return r.a.createElement("div",{className:t},r.a.createElement("img",{src:le.a,alt:"",className:"MemberImage"}),r.a.createElement("h3",{className:"MemberName"},e.name),r.a.createElement("p",{className:"MemberInformation"},e.category),r.a.createElement("p",{className:"MemberInformation"}," ",e.age," Jahre"))},ce=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(Q,{headline:"W\xe4hle dein TEAM"},"Von den Silver Smarties bis zu den Steelers, Cheerdancer und Cheerleader. Jeder findet sein richtiges Team. Wir wuerden uns riesig freuen dich beim Probetraining begruessen zu duerfen. Schau vorbei und w\xe4hle dein Team."),r.a.createElement("div",{className:"TeamContainer"},r.a.createElement(se,{carouselPosition:"Back Left",name:"Silver Smarties",category:"Cheerleader",age:"5 - 12"}),r.a.createElement(se,{carouselPosition:"Middle Left",name:"Supreme",category:"Cheerleader",age:"12 - 16"}),r.a.createElement(se,{carouselPosition:"Front Left",name:"Steelers",category:"Cheerleader",age:"16 - \u221e"}),r.a.createElement(se,{carouselPosition:"Front Right",name:"Silver Spirit",category:"Cheerdancer",age:"16 - \u221e"}),r.a.createElement(se,{carouselPosition:"Middle Right",name:"Silverlicious",category:"Cheerdancer",age:"12 - 16"}),r.a.createElement(se,{carouselPosition:"Back Right",name:"Dancing Smarties",category:"Cheerdancer",age:"5 - 12"})),r.a.createElement(J,{text:"Probetraining",to:"probetraining"}))}}]),t}(r.a.Component),oe=(n(74),function(e){return r.a.createElement("div",{className:"Trainingstag"},r.a.createElement("h4",null,e.name),e.information.map((function(e,t){return r.a.createElement(F,{key:t},r.a.createElement("p",{className:"team"},e.team," - ",e.time),r.a.createElement("p",{className:"location"},e.location))})))}),me=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={trainingsplan:{monday:[{team:"Silver Smarties",time:"17:00 - 19:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Silverlicious",time:"17:30 - 19:30",location:"Diesterweg Grundschule Dortmund"},{team:"Steelers",time:"19:00 - 21:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."}],tuesday:[{team:"Dancing Smarties",time:"17:00 - 19:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Silver Spirit Dancer",time:"19:30 - 21:30",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."}],wednesday:[{team:"Supreme",time:"17:00 - 19:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Silverlicious",time:"17:30 - 19:30",location:"Helmholtz Gymnasium Dortmund"}],thursday:[{team:"Dancing Smarties",time:"17:00 - 19:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Silver Spirit Dancer",time:"19:30 - 21:30",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."}],friday:[{team:"Silver Smarties",time:"17:00 - 19:00",location:"Goethestr. 20, Dortmund"},{team:"Supreme",time:"17:00 - 19:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."}],saturday:[{team:"Kein Training"}],sunday:[{team:"Silver Smarties",time:"10:00 - 12:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Supreme",time:"12:00 - 14:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Steelers",time:"14:00 - 17:00",location:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr."},{team:"Silver Spirit Dancer",time:"10:00 - 13:00",location:"Eierkamp, Mira Lobe Schule (wenn die Jugend da ist, 13:00 - 16:00)"}]}},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(R,null,r.a.createElement(Q,{headline:"Training"},"Wir wuerden uns riesig freuen dich beim Probetraining begruessen zu sehen. Schau einfach in unserem Trainingsplan wann es fuer dich am besten passt und melde dich zum Probetraining an und sei schon bald ein teil von United Cheer Sports Dortmund."),r.a.createElement("div",{className:"TrainingsplanContainer ContentContainer"},r.a.createElement("img",{className:"Logo",src:w.a,alt:"united-cheer-sports-dortmund-trainingsplan"}),r.a.createElement("div",{className:"TrainingstageContainer"},r.a.createElement(oe,{name:"Montag",information:this.state.trainingsplan.monday}),r.a.createElement(oe,{name:"Dienstag",information:this.state.trainingsplan.tuesday}),r.a.createElement(oe,{name:"Mittwoch",information:this.state.trainingsplan.wednesday}),r.a.createElement(oe,{name:"Donnerstag",information:this.state.trainingsplan.thursday}),r.a.createElement(oe,{name:"Freitag",information:this.state.trainingsplan.friday}),r.a.createElement(oe,{name:"Samstag",information:this.state.trainingsplan.saturday}),r.a.createElement(oe,{name:"Sonntag",information:this.state.trainingsplan.sunday}))),r.a.createElement("div",{className:"TrainingsplanButtonGroup ContentContainer"},r.a.createElement(J,{to:"",text:"Download"}),r.a.createElement(J,{to:"probetraining",text:"Probetraining"})))}}]),t}(r.a.Component),ue=(n(75),function(e){return r.a.createElement(R,{id:"kontakt"},r.a.createElement(Q,{headline:"Noch Fragen?"},"Bei offenen Fragen zum Probetraining, Kosten, Mitgliedschaften oder aenlichen kannst du uns jederzeit ueber unser Kontaktformular erreichen. Wir werden dir so schnell wie moeglich deine Frage beantworten."),r.a.createElement("form",{method:"POST",className:"ContactForm ContentContainer",autoComplete:"off"},r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"vorname"},"Vorname*"),r.a.createElement("input",{type:"text",name:"vorname",id:"vorname",required:!0})),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"nachname"},"Nachname*"),r.a.createElement("input",{type:"text",name:"nachname",id:"nachname",required:!0})),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"email"},"E-Mail-Adresse*"),r.a.createElement("input",{type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"telefonnummer"},"Telefonnummer"),r.a.createElement("input",{type:"phone",name:"telefonnummer",id:"telefonnummer"})),r.a.createElement("div",{className:"FormGroup FormGroupText"},r.a.createElement("label",{htmlFor:"nachricht"},"Deine Nachricht an uns*"),r.a.createElement("textarea",{name:"nachricht",id:"nachricht",required:!0})),r.a.createElement(J,{submit:!0,text:"Absenden"})))}),de=function(e){return r.a.createElement(R,null,r.a.createElement(Y,null),r.a.createElement($,null),r.a.createElement(re,null),r.a.createElement(ce,null),r.a.createElement(me,null),r.a.createElement(ue,null))},he=n(17),pe=n.n(he),ge=(n(76),n(77),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={map:null,locations:[{LngLat:[7.479247,51.507849],address:"Sporthalle Gertrud B\xe4umer Realschule Erwinstr. Ecke Schaeffelstr., Dortmund"},{LngLat:[7.468413,51.522468],address:"Diesterweg Grundschule Dortmund"},{LngLat:[7.459639,51.526682],address:"Helmholtz Gymnasium Dortmund"},{LngLat:[7.4560178,51.5289028],address:"Goethestr. 20, Dortmund"},{LngLat:[7.4357137,51.4796415],address:"Eierkamp, Mira Lobe Schule, Dortmund"}]},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"createMap",value:function(){pe.a.accessToken="pk.eyJ1IjoiZGV2LWxlZ2FydGkiLCJhIjoiY2p0cmp6NndhMG9nZjN5azBhMXA5ZG4zNCJ9.ZSY-cBZVHrVhslvkbO3Xnw";var e=new pe.a.Map({container:"MapContainer",style:"mapbox://styles/mapbox/streets-v11",center:[7.479247,51.507849],zoom:11});return this.setState({map:e}),this.state.locations.forEach((function(t,n){var a=document.createElement("div");a.id="marker"+n,a.classList.add("marker");var r=new pe.a.Popup({offset:25}).setText(t.address);new pe.a.Marker(a).setLngLat(t.LngLat).setPopup(r).addTo(e)})),e}},{key:"createMarker",value:function(){}},{key:"componentDidMount",value:function(){this.createMap().addControl(new pe.a.NavigationControl)}},{key:"render",value:function(){return r.a.createElement("div",{id:"MapContainer"})}}]),t}(r.a.Component)),Ee=(n(78),n(46)),fe=n.n(Ee),ve=function(e){var t=new Date;t.setMonth(t.getMonth()-60);var n=fe()(t,"dd.mm.yyyy");return r.a.createElement(R,{isContentContainer:!0},r.a.createElement("p",{className:"importantMessage"},"Wir moechten Sie/Dich bitten den Antrag auszufuellen und Unterschrieben beim Probetraining mitzubringen. Der Antrag wird nach dem Ausfuellen als PDF erstellt und kann heruntergeladen oder ausgedruckt werden."),r.a.createElement("p",null,"Hiermit beantrage ich f\xfcr mich / mein Kind die Teilnahme am kostenlosen Probetraining des United Cheer Sports e.V. Die Dauer des Probetrainings entspricht 4 Trainingseinheiten. Zum ersten aktiven Probetraining ist dieser Antrag unterschrieben (bei minderj\xe4hrigen durch einen Erziehungsberechtigten) beim Trainer anzugeben."),r.a.createElement("form",{method:"POST"},r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"childsFirstname"},"Vorname des Kindes"),r.a.createElement("input",{type:"text",name:"childsFirstname",id:"childsFirstname",required:!0})),r.a.createElement("div",{className:"FormGroup"},r.a.createElement("label",{htmlFor:"childsLastname"},"Name des Kindes"),r.a.createElement("input",{type:"text",name:"childsLastname",id:"childsLastname",required:!0})),r.a.createElement("div",{className:"FormGroup Quarter"},r.a.createElement("label",{htmlFor:"birthday"},"Geboren am"),r.a.createElement("input",{type:"date",name:"birthday",id:"birthday",max:n,required:!0})),r.a.createElement("div",{className:"FormGroup Quarter"},r.a.createElement("label",{htmlFor:"gender"},"Geschlecht"),r.a.createElement("div",{className:"selectWrapper"},r.a.createElement("select",{name:"gender",id:"gender",required:!0},r.a.createElement("option",{value:"female"},"Weiblich"),r.a.createElement("option",{value:"male"},"M\xe4nnlich")))),r.a.createElement("div",{className:"FormGroup Half"},r.a.createElement("label",{htmlFor:"team"},"W\xe4hle dein team"),r.a.createElement("div",{className:"selectWrapper"},r.a.createElement("select",{name:"team",id:"team",required:!0},r.a.createElement("option",{value:"cheerleading"},"Cheerleading"),r.a.createElement("option",{value:"cheerdancing"},"Cheerdancing")))),r.a.createElement("div",{className:"FormGroup Half"},r.a.createElement("label",{htmlFor:"email"},"E-Mail Adresse"),r.a.createElement("input",{type:"email",name:"email",id:"email",required:!0})),r.a.createElement("div",{className:"FormGroup Half"},r.a.createElement("label",{htmlFor:"telefonnummer"},"Telefonnummer (optional)"),r.a.createElement("input",{type:"phone",name:"telefonnummer",id:"telefonnummer",required:!0})),r.a.createElement("div",{className:"FormGroup Full"},r.a.createElement("label",{htmlFor:"appointment"},"Wann k\xf6nnen wir uns auf dich freuen?"),r.a.createElement("input",{type:"text",name:"appointment",id:"appointment",required:!0})),r.a.createElement("div",{className:"FormGroup FormGroupText"},r.a.createElement("label",{htmlFor:"message"},"Haben Sie noch Fragen"),r.a.createElement("textarea",{name:"message",id:"message"})),r.a.createElement(J,{submit:!0,text:"Herunterladen"})))},be=function(e){return r.a.createElement(R,null,r.a.createElement(Q,{headline:"zum probetraining anmelden"},"Wir w\xfcrden uns riesig freuen Dich beim Probetraining begr\xfc\xdfen zu d\xfcrfen. Schau einfach in userem Trainingsplan wann es f\xfcr dich am betsen passt und melde dich zum Probetraining an. Sei schon bald ein teil von United Cheer Sports Dortmund."),r.a.createElement(ve,null),r.a.createElement(Q,{headline:"Hier sind wir"},"Hier kannst du uns finden. Auf dem Trainingsplan weiter unten siehst du die jeweiligen Teams und ihre Trainingsorte. Du kannst nat\xfcrlich auch jederzeit Fragen, welche Mannschaft, wo das naechste Training hat."),r.a.createElement(ge,null),r.a.createElement(me,null))},we=function(e){return r.a.createElement(R,{isContentContainer:!0},r.a.createElement(Q,{headline:"Neues von UCS"},"Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund."),r.a.createElement("div",{className:"HomeNewsInnerContainer"},r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"News eins",imgurl:"http://via.placeholder.com/300x300"},"lorem ipsum dolor atem disem apem lorem datisam matissila obem haguda"))))},Ne=(n(79),function(){var e="http://via.placeholder.com/1920x1080";return r.a.createElement(F,null,r.a.createElement("div",{className:"ArticleHeader",style:{backgroundImage:"url(".concat(e,")")}},r.a.createElement(Q,{headline:"Die neue Webseite kommt"},"hier entsteht der neue webauftritt von ucs")),r.a.createElement(R,{isContentContainer:!0},r.a.createElement("p",{className:"AuthorName"},"Auhtor: Elisabeth Lopez"),r.a.createElement("p",{className:"Created"},"05. Mai 2019")),r.a.createElement(Q,{headline:"Die neue Webseite kommt"}),r.a.createElement(R,{isContentContainer:!0},r.a.createElement("p",{className:"ArticleText"},"Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund.Wir nehmen regelmaessig an Wettkaempfen, Vorstellungen, extern sowie Intern teil. Ausserdem teilen wir gerne Trainingseinheiten, Wettkaempfe, Veranstalltungen und viele weitere spannende Dinge rund um und ueber den United Cheer Sports Verein in Dortmund."),r.a.createElement("div",{className:"ImpressionContainer"},r.a.createElement("img",{src:e,alt:"Alternative Text"}),r.a.createElement("img",{src:e,alt:"Alternative Text"}),r.a.createElement("img",{src:e,alt:"Alternative Text"})),r.a.createElement(Q,{headline:"Weitere News von UCS"}),r.a.createElement("div",{className:"ArticleNewsInnerContainer"},r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft")),r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft")),r.a.createElement(d.b,{to:"/article/1",className:"NewsPreviewContainer"},r.a.createElement(X,{headline:"Silver Spirit Dancer",imgurl:"http://via.placeholder.com/300x300"},"Unsere Dancer waren sehr erfolgreich bei der deutschen Meisterschaft")))))}),Se=n(47),Ce=n.n(Se),ke=function(){return r.a.createElement("div",{className:"NotFoundContainer"},r.a.createElement("img",{alt:"United Cheer Sports e.V. Dortmund - Page Not Found",src:Ce.a}),r.a.createElement("p",null,"Seite nicht gefunden"),r.a.createElement(J,{to:"",text:"Schnell zur\xfcck"}))},De=n(48),ye=function(){var e=Object(De.useRouter)(),t=e.pathname,n=e.search;return Object(a.useEffect)((function(){try{window.scroll({top:0,left:0,behavior:"smooth"})}catch(e){window.scrollTo(0,0)}}),[t,n]),null},Me=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(f,null),r.a.createElement(H,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,component:de,path:"/"}),r.a.createElement(h.a,{exact:!0,component:de,path:"/startseite"}),r.a.createElement(h.a,{exact:!0,component:we,path:"/news"}),r.a.createElement(h.a,{exact:!0,component:be,path:"/probetraining"}),r.a.createElement(h.a,{exact:!0,path:"/article/:articleId",component:Ne}),r.a.createElement(h.a,{component:ke})),r.a.createElement(I,null),r.a.createElement(ye,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[49,1,2]]]);
//# sourceMappingURL=main.d76c3138.chunk.js.map