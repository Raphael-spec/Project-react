(this.webpackJsonpapp1=this.webpackJsonpapp1||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},63:function(e,t,s){"use strict";s.r(t);var a=s(0),i=s(1),l=s.n(i),r=s(18),c=s.n(r),n=(s(34),s(35),s(36),s(37),s(5)),o=s(2),d=s(3),m=s(19),j=s(10),b=s(11),h=s(13),u=s(12),x=s(15),p=s(9),O=(s(22),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,i=t.type,l=t.checked,r=t.value,c="checkbox"===i?l:r;a.setState(Object(x.a)({},s,c))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state);var t="";a.state.image&&(t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0]);var s={titre:a.state.titre,realisateur:a.state.realisateur,nationalite:a.state.nationalite,genre:a.state.genre,prix:a.state.prix,synopsis:a.state.synopsis,acteurs:a.state.acteurs,image:t,disponible:a.state.disponible};a.props.getFilms(s),a.setState(a.initiateState),Object(p.b)("film ajout\xe9 avec succ\xe8s!",{className:"bg-success text-white fw-bold"})},a.initiateState={id:-1,titre:"",realisateur:"",nationalite:"",genre:"",synopsis:"",acteurs:"",prix:0,image:"",disponible:!1},a.state=a.initiateState,a}return Object(b.a)(s,[{key:"render",value:function(){console.log(this.props);var e=this.state,t=e.titre,s=e.realisateur,i=e.nationalite,l=e.genre,r=e.prix,c=e.disponible,o=e.synopsis,m=e.acteurs;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row mb-5",children:Object(a.jsxs)("div",{className:"col-8 offset-2",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-header text-center bg-success h1 ",children:[" Ajouter un film ",Object(a.jsx)(d.d,{})]}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleSubmit,children:[Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"titre",className:"form-label",children:"Titre"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"titre",name:"titre",value:t,onChange:this.handleChange,placeholder:"Entrer votre titre"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"realisateur",className:"form-label",children:"R\xe9alisateur"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"realisateur",name:"realisateur",value:s,onChange:this.handleChange,placeholder:"Entrer votre r\xe9alisateur"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"nationalite",className:"form-label",children:"Nationalit\xe9"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"nationalite",name:"nationalite",value:i,onChange:this.handleChange,placeholder:"Entrer la nationnalit\xe9 du film"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"genre",className:"form-label",children:"Genre"}),Object(a.jsx)("input",{type:"text",required:!0,className:"form-control",id:"genre",name:"genre",value:l,onChange:this.handleChange,placeholder:"Entrer le genre du film"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"synopsis",className:"form-label",children:"Synopsis"}),Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange,value:o,className:"form-control",id:"synopsis",name:"synopsis",placeholder:"Synopsis de votre film",required:!0})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"acteurs",className:"form-label",children:"Acteurs"}),Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange,value:m,className:"form-control",id:"acteurs",name:"acteurs",placeholder:"Entrez les acteurs principaux",required:!0})]}),Object(a.jsxs)("div",{className:"col-md-6 offset-3",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(a.jsx)("input",{type:"number",required:!0,className:"form-control",id:"prix",name:"prix",value:r,onChange:this.handleChange,placeholder:"Entrer votre prix"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"image"}),Object(a.jsx)("input",{type:"file",required:!0,className:"form-control",id:"image",name:"image",onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",name:"disponible",checked:c,onChange:this.handleChange}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"Disponible",children:"Disponible"})]})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("button",{className:"btn btn-success col-4 offset-4 h4",type:"submit",children:"Soumettre!"})})]})})]}),Object(a.jsxs)(n.b,{to:"/admin123/reload",children:[Object(a.jsx)(d.c,{size:"25"}),"Retour Office"]})]})}),Object(a.jsx)(p.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),s}(i.Component)),g=s(16),f=function(e){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("table",{className:"table table-striped table-hover text-center",children:[Object(a.jsx)("thead",{className:"table-primary",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Id"}),Object(a.jsx)("th",{children:"Titre"}),Object(a.jsx)("th",{children:"R\xe9alisateur"}),Object(a.jsx)("th",{children:"Nationalit\xe9"}),Object(a.jsx)("th",{children:"Genre"}),Object(a.jsx)("th",{children:"Image"}),Object(a.jsx)("th",{children:"Synopsis"}),Object(a.jsx)("th",{children:"Acteurs"}),Object(a.jsx)("th",{children:"Prix"}),Object(a.jsx)("th",{children:"Disponible"}),Object(a.jsx)("th",{colSpan:"2",children:"Actions"})]})}),Object(a.jsx)("tbody",{children:e.lines.map((function(t,s){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.id}),Object(a.jsx)("td",{children:t.titre}),Object(a.jsx)("td",{children:t.realisateur}),Object(a.jsx)("td",{children:t.nationalite}),Object(a.jsx)("td",{children:t.genre}),Object(a.jsx)("td",{children:Object(a.jsx)("img",{src:"images/".concat(t.image),alt:"",width:"80"})}),Object(a.jsx)("td",{children:Object(a.jsx)(g.Scrollbars,{style:{width:300,height:100},children:t.synopsis})}),Object(a.jsx)("td",{children:Object(a.jsx)(g.Scrollbars,{style:{width:100,height:100},children:t.acteurs})}),Object(a.jsxs)("td",{children:[t.prix,"\u20ac"]}),Object(a.jsx)("td",{children:t.disponible?Object(a.jsx)(d.e,{className:"text-info",size:"24"}):Object(a.jsx)(d.g,{className:"text-secondary",size:"24"})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){e.handleRecorrect(s)},className:"btn btn-warning",children:Object(a.jsx)(d.f,{})})}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{onClick:function(){window.confirm("Etes vous s\xfbr de supprimer ce film ?")?(e.handleDelete(s),Object(p.b)("Film supprim\xe9 avec succ\xe8s",{className:"bg-info text-white fw-bold"})):console.log("Vous n'avez pas supprim\xe9 ce film ")},className:"btn btn-danger",children:Object(a.jsx)(d.h,{})})})]},s)}))})]}),Object(a.jsx)(p.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})},v=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){a.setState(a.props.filmShared),console.log(a.props.filmShared)},a.componentDidUpdate=function(){a.props.filmShared.id!==a.state.id&&a.setState(a.props.filmShared),console.log(a.props.filmShared)},a.handleChange=function(e){var t=e.target,s=t.name,i=t.type,l=t.checked,r=t.value,c="checkbox"===i?l:r;a.setState(Object(x.a)({},s,c))},a.handleModifSubmit=function(e){e.preventDefault();var t=a.state.image.match(/[a-zA-Z0-9-_]+\.(jpg|png)/)[0],s={id:a.state.id,titre:a.state.titre,realisateur:a.state.realisateur,nationalite:a.state.nationalite,genre:a.state.genre,synopsis:a.state.synopsis,acteurs:a.state.acteurs,prix:a.state.prix,image:t,disponible:a.state.disponible};a.props.modifUp(s),Object(p.b)("Film modifi\xe9 avec succ\xe8s!",{className:"bg-warning text-white fw-bold"})},a.initiateState={id:-1,titre:"",realisateur:"",nationalite:"",genre:"",synopsis:"",acteurs:"",prix:0,image:"",disponible:!1},a.state=a.initiateState,a}return Object(b.a)(s,[{key:"render",value:function(){var e=this.state,t=e.id,s=e.titre,i=e.realisateur,l=e.nationalite,r=e.genre,c=e.prix,o=e.synopsis,m=e.acteurs,j=e.disponible;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"row",children:Object(a.jsxs)("div",{className:"col-8 offset-2",children:[Object(a.jsxs)("div",{className:"card",children:[Object(a.jsxs)("div",{className:"card-header text-center bg-warning h1 ",children:[" Modifier un film ",Object(a.jsx)(d.d,{})]}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{className:"row g-3 needs-validation",onSubmit:this.handleModifSubmit,children:[Object(a.jsxs)("div",{className:"col-md-3",children:[Object(a.jsx)("label",{htmlFor:"id",className:"form-label",children:"ID"}),Object(a.jsx)("input",{type:"text",readOnly:!0,className:"form-control",id:"id",name:"id",value:t,onChange:this.handleChange,placeholder:"Entrer votre ID"})]}),Object(a.jsxs)("div",{className:"col-md-7 ",children:[Object(a.jsx)("label",{htmlFor:"titre",className:"form-label",children:"Titre"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"titre",name:"titre",value:s,onChange:this.handleChange,placeholder:"Entrer votre titre"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"realisateur",className:"form-label",children:"R\xe9aliateur"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"realisateur",name:"realisateur",value:i,onChange:this.handleChange,placeholder:"Entrer votre r\xe9alisateur"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"nationalite",className:"form-label",children:"Nationalit\xe9"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"nationalite",name:"nationalite",value:l,onChange:this.handleChange,placeholder:"Entrer la nationnalit\xe9 du film"})]}),Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("label",{htmlFor:"genre",className:"form-label",children:"Genre"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"genre",name:"genre",value:r,onChange:this.handleChange,placeholder:"Entrer le genre du film"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"synopsis",className:"form-label",children:"Synopsis"}),Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange,value:o,className:"form-control",id:"synopsis",name:"synopsis",placeholder:"Synopsis de votre film",required:!0})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"acteurs",className:"form-label",children:"Acteurs"}),Object(a.jsx)("textarea",{type:"text",onChange:this.handleChange,value:m,className:"form-control",id:"acteurs",name:"acteurs",placeholder:"Entrez les acteurs principaux",required:!0})]}),Object(a.jsxs)("div",{className:"col-md-6 ",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"Prix"}),Object(a.jsx)("input",{type:"number",className:"form-control",id:"prix",name:"prix",value:c,onChange:this.handleChange,placeholder:"Entrer votre prix"})]}),Object(a.jsxs)("div",{className:"col-md-12",children:[Object(a.jsx)("label",{htmlFor:"prix",className:"form-label",children:"image"}),Object(a.jsx)("input",{type:"file",className:"form-control",id:"image",name:"image",onChange:this.handleChange})]}),Object(a.jsx)("div",{className:"col-md-6",children:Object(a.jsxs)("div",{className:"form-check",children:[Object(a.jsx)("input",{className:"form-check-input",type:"checkbox",id:"disponible",name:"disponible",checked:j,onChange:this.handleChange}),Object(a.jsx)("label",{className:"form-check-label",htmlFor:"Disponible",children:"Disponible"})]})}),Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("button",{className:"btn btn-warning col-4 offset-4  h4 ",type:"submit",children:"Modifier!"})})]})})]}),Object(a.jsxs)(n.b,{to:"/admin123/reload",children:[Object(a.jsx)(d.c,{size:"25"}),"Retour Office"]})]})}),Object(a.jsx)(p.a,{position:"top-right",autoClose:2e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})}}]),s}(i.Component),N=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var a;return Object(j.a)(this,s),(a=t.call(this,e)).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("filmsKey"));if(e&&0!==e.length){var t=JSON.parse(localStorage.getItem("filmsKey"));a.setState({films:t})}else{localStorage.setItem("filmsKey",JSON.stringify(a.state.films));var s=JSON.parse(localStorage.getItem("filmsKey"));a.setState({films:s})}},a.handleRemove=function(e){console.log(e);var t=Object(m.a)(a.state.films).filter((function(t,s){return s!==e}));console.log(t),a.setState({films:t},(function(){localStorage.setItem("filmsKey",JSON.stringify(a.state.films))}))},a.handleShow=function(e){a.setState({modiForm:!0})},a.handleFilm=function(e){e.id=a.state.films[a.state.films.length-1].id+1;var t=[].concat(Object(m.a)(a.state.films),[e]);a.setState({films:t},(function(){localStorage.setItem("filmsKey",JSON.stringify(a.state.films))})),console.log(e)},a.handleDvd=function(e){var t=a.state.films[e];a.setState({modifMovie:t,indexMod:e}),console.log(e)},a.handleModif=function(e){var t=Object(m.a)(a.state.films);t[a.state.indexMod]=e,a.setState({films:t},(function(){localStorage.setItem("filmsKey",JSON.stringify(a.state.films))})),console.log(e)},a.state={films:[{id:1,titre:"Jurassic Park",realisateur:"Steven SPIELBERG",nationalite:"USA",genre:"Action",image:"futur.jpg",synopsis:"Ne pas r\xe9veiller le chat qui dort... C'est ce que le milliardaire John Hammond aurait d\xfb se rappeler avant de se lancer dans le \"clonage\" de dinosaures. C'est \xe0 partir d'une goutte de sang absorb\xe9e par un moustique fossilis\xe9 que John Hammond et son \xe9quipe ont r\xe9ussi \xe0 faire rena\xeetre une dizaine d'esp\xe8ces de dinosaures.",acteurs:"Avec Sam Neill, Laura Dern, Jeff Goldblum",prix:5e3,disponible:!0},{id:2,titre:"De l'ombre \xe0 la lumi\xe8re",realisateur:"Ron HOWARD",nationalite:"USA",genre:"Drame/Sport",image:"vandamme.jpg",synopsis:"Autrefois boxeur prometteur, Jim Braddock s'est vu contraint d'abandonner la comp\xe9tition apr\xe8s une s\xe9rie de d\xe9faites. Alors que l'Am\xe9rique sombre dans la Grande D\xe9pression, Jim accepte n'importe quel petit boulot pour faire vivre sa femme Mae et leurs enfants. Il n'abandonne pourtant pas l'espoir de remonter un jour sur le ring.",acteurs:"Avec Russell Crowe, Ren\xe9e Zellweger, Paul Giamatti",prix:500,disponible:!1},{id:3,titre:"Pulp Fiction",realisateur:"Quentin TARANTINO",nationalite:"USA",genre:"Action",image:"lordofthering.jpg",acteurs:"Avec John Travolta, Samuel L. Jackson, Uma Thurman",synopsis:"L'odyss\xe9e sanglante et burlesque de petits malfrats dans la jungle de Hollywood \xe0 travers trois histoires qui s'entrem\xealent.",prix:5e3,disponible:!1},{id:4,titre:"Goonies",realisateur:"Richard DONNER",nationalite:"USA",genre:"Famille",image:"starwars.jpg",acteurs:"Avec Sean Astin, Josh Brolin, Corey Feldman",synopsis:"Astoria est une modeste et paisible cit\xe9 portuaire de la C\xf4te Ouest. Trop paisible au gr\xe9 de ses jeunes habitants... \"Il ne se passe jamais rien ici\", soupira un jour l'un d'eux, m\xe9lancolique.",prix:9e3,disponible:!0}],indexMod:-1,modiForm:!1,modifMovie:{id:-1,titre:"",realisateur:"",nationalite:"",genre:"",prix:0,acteurs:"",synopsis:"",image:"",disponible:!1}},a}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h1",{className:" text-white text-center mt-5",children:"Back-Office"}),!this.state.modiForm&&-1===this.state.indexMod&&Object(a.jsx)("button",{onClick:this.handleShow,className:"btn btn-primary text-white offset-10  mb-2 ",children:"Ajouter"}),Object(a.jsx)("div",{className:"container",children:!this.state.modiForm&&this.state.indexMod>-1?Object(a.jsx)(v,{filmShared:this.state.modifMovie,modifUp:this.handleModif}):this.state.modiForm?Object(a.jsx)(O,{getFilms:this.handleFilm}):Object(a.jsx)(f,{lines:this.state.films,handleDelete:this.handleRemove,handleRecorrect:this.handleDvd})})]})}}]),s}(i.Component),y=function(){var e=JSON.parse(localStorage.getItem("filmsKey"));return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"bg-ligth p-5",children:Object(a.jsxs)("div",{className:"container text-center ",children:[Object(a.jsx)("h1",{className:"display-3",children:"Coffret Collector Edition Illimit\xe9 "}),Object(a.jsx)("p",{className:"display-6",children:"Pour une exp\xe9rience unique"})]})}),Object(a.jsx)("div",{className:"container offset-2 ",children:Object(a.jsx)("div",{className:"row row-cols-1 row-cols-md-2 g-4 mt-3 col-10",children:e.map((function(e,t){return Object(a.jsx)("div",{className:"",children:Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:"images/".concat(e.image),className:"card-img-top",alt:"..."}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"card-title text-center",children:Object(a.jsxs)("u",{children:["Coffret Collector Blu-ray N\xb0 00",e.id]})}),Object(a.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Titre:"})," ",Object(a.jsx)("strong",{children:e.titre})]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"R\xe9alisateur:"}),"  ",e.realisateur]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Nationalit\xe9:"}),"  ",e.nationalite]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Genre:"}),"  ",e.genre," "]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Acteurs:"}),Object(a.jsxs)(g.Scrollbars,{style:{width:400,height:50},children:["  ",e.acteurs]})," "]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Synopsis:"}),Object(a.jsxs)(g.Scrollbars,{style:{width:400,height:50},children:[" ",e.synopsis," "]})," "]}),Object(a.jsxs)("li",{className:"list-group-item",children:[Object(a.jsx)("i",{children:"Prix:"}),"  ",e.prix," \u20ac"]})]}),e.disponible?Object(a.jsxs)("button",{className:"btn btn-success mt-1","data-bs-toggle":"modal","data-bs-target":"#film".concat(t),children:[Object(a.jsx)(d.a,{})," Commander"]}):Object(a.jsxs)("button",{className:"btn btn-secondary mt-1",disabled:"true",children:[Object(a.jsx)(d.a,{})," Indisponible!"]}),Object(a.jsx)("div",{className:"modal fade",id:"film".concat(t),tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(a.jsx)("div",{className:"modal-dialog",children:Object(a.jsxs)("div",{className:"modal-content",children:[Object(a.jsxs)("div",{className:"modal-header bg-warning",children:[Object(a.jsx)("h5",{className:"modal-title bg-warning",id:"exampleModalLabel",children:e.titre}),Object(a.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(a.jsx)("div",{className:"modal-body",children:Object(a.jsx)("div",{className:"card mb-3",children:Object(a.jsxs)("div",{className:"row g-0",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("img",{src:"images/".concat(e.image),width:"150",alt:"..."})}),Object(a.jsx)("div",{className:"col-md-8",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsxs)("h5",{className:"card-title",children:["Paiement du coffret  ",e.id]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsxs)("label",{htmlFor:"nom",className:"form-label",children:["Nom de la carte ",Object(a.jsx)(d.b,{})]}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"nom",placeholder:"Entrez votre nom"})]}),Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsx)("label",{htmlFor:"adresse",className:"form-label",children:"Numero de carte"}),Object(a.jsx)("input",{type:"text",className:"form-control mb-1",id:"nc",placeholder:"Votre numero de carte"})]}),Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsx)("label",{htmlFor:"adresse",className:"form-label",children:"Date de validit\xe9"}),Object(a.jsx)("input",{type:"date",className:"form-control mb-1",id:"dv",placeholder:"Date de validit\xe9"})]}),Object(a.jsxs)("div",{className:"mb-1",children:[Object(a.jsx)("label",{htmlFor:"adresse",className:"form-label",children:"Cryptogramme"}),Object(a.jsx)("input",{type:"text",className:"form-control mb-1",id:"cr",placeholder:"votre cryptogramme"})]}),Object(a.jsx)("button",{type:"submit",className:"btn btn-success","data-bs-dismiss":"modal",children:"Valider!"})]})]})})]})})})]})})})]})]})})}))})})]})},S=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"bg-ligth p-5",children:Object(a.jsx)("div",{className:"container text-center ",children:Object(a.jsx)("h1",{className:"display-2 mt-5",children:"Contactez-nous "})})}),Object(a.jsxs)("div",{className:"container ",children:[Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("form",{className:" col-6 offset-3",children:[Object(a.jsxs)("div",{className:"mb-3 ",children:[Object(a.jsx)("label",{htmlfor:"nom",className:"form-label",children:"Nom"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"exampleInputEmail1",placeholder:"Entrez votre Nom"})]}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{htmlfor:"prenom",className:"form-label",children:"Prenom"}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"exampleInputPassword1",placeholder:"Entrez votre Prenom"})]}),Object(a.jsxs)("div",{className:"mb-3",children:[Object(a.jsx)("label",{htmlfor:"email",className:"form-label",children:"Email"}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"exampleInputPassword1",placeholder:"Entrez votre E-mail"})]}),Object(a.jsx)("label",{htmlfor:"floatingTextarea2",children:"Votre Message"}),Object(a.jsx)("div",{class:"form-floating mb-5",children:Object(a.jsx)("textarea",{class:"form-control",placeholder:"Message",id:"floatingTextarea2"})}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary col-12",children:"Submit"})]})}),Object(a.jsx)("div",{className:"col",children:Object(a.jsxs)("form",{className:" col-6 offset-3",children:[Object(a.jsx)("div",{className:"mb-3 mt-5 ",children:Object(a.jsx)("p",{className:"display-5",children:"Blue Cheese inc\xa9"})}),Object(a.jsx)("div",{className:"mb-5 mt-5 ",children:Object(a.jsx)("p",{className:" display-6",children:"16 street du Paradis Manhattan"})}),Object(a.jsx)("div",{className:"mb-5",children:Object(a.jsx)("p",{className:"display-6",children:"bluecheese@gmail.com"})})]})})]}),Object(a.jsx)("div",{class:" mt-5 offset-0 col-12 ",children:Object(a.jsx)("div",{id:"map-container-google-1",class:"z-depth-1-half map-container mb-5",children:Object(a.jsx)("iframe",{src:"https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed",frameBorder:"0",allowfullscreen:!0,style:{width:"100%",height:"450px"}})})})]})]})},C=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"container bg-dark mt-5 mb-5",children:[Object(a.jsx)("h1",{className:"display-1 text-center text-white",children:"Erreur 404"}),Object(a.jsx)("img",{src:"images/cinema.png",alt:"...",width:"250px",className:"offset-5 mt-5 mb-5"}),Object(a.jsx)("p",{className:"text-white display-2 text-center mt-5 mb-5",children:"Page Introuvable"})]}),Object(a.jsxs)(n.b,{to:"/",children:[Object(a.jsx)(d.c,{size:"30"})," Retour Accueil"]})]})})},w=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"container  mt-5 mb-5",children:Object(a.jsx)("div",{className:" col-6 offset-3 ",children:Object(a.jsx)("h1",{className:"display-4 text-center",children:"Presentation"})})}),Object(a.jsx)("div",{className:"container ",children:Object(a.jsx)("div",{className:"row offset-2 ",children:Object(a.jsx)("div",{className:"col-10",children:Object(a.jsxs)("p",{id:"textPres",children:["Blue cheese, Est une soci\xe9t\xe9 qui vend des coffrets collector in\xe9dits unique au monde. Des coffrets ultra collector. Il en existe que 5 au monde par film et Blue cheese  qui essayen dd'en recuperer un maximum en bataillant avec des fans ou des particuliers extremement friqu\xe9. C'est collector ce determine pas uniquement par ces blu-ray. Chez nous, chez Blue cheese en achetant chez nous vous achetez un abonnement. ",Object(a.jsx)("br",{}),"L'abonnement vous assure un renouvellment de votre coffret, la partie support uniquement sur lequel si un nouveau support apparait de haute qualit\xe9. On vous garantit un renvoit dans cett qualit\xe9 de support. Mais chez blue cheese, c'est aussi des produits uniques de tournages, les scenarios, des photos inedites, des pass droits dans les coulisses. Si un un second volet ce r\xe9alise ou une saga. Des passes droits avec les stars du film. Chez nous c'est une experience unique que vous vivrez \xe0 travers les films que vous adorez. une chance de pouvour rencontre vos stars pr\xe9f\xe9r\xe9s, vos r\xe9alisateurs, pouvoir discuter de votre passion, de votre experience ressentie.",Object(a.jsx)("br",{}),"Le prix peut \xeatre exorbitant. Mais on vous garantie une experience a vie, que vous vous en souviendrez pour toujours.",Object(a.jsx)("br",{}),"Blue cheese Films affiche une volont\xe9 de d\xe9poter les id\xe9es re\xe7ues en fabriquant des films bille en t\xeate et d\u2019autres qui murmurent \xe0 l\u2019oreille, des films qui titillent les zygomatiques et d\u2019autres qui ouvrent sur le monde et ses failles. En bref, la compagnie fait le pari de produire du petit-lait \xe0 usage cathodique. Une gageure parfois. Un d\xe9sir tenace toujours.",Object(a.jsx)("br",{}),"Nouveaux visages, nouvelles \xe9nergies au sein de l\u2019\xe9quipe avec l\u2019arrive\u0301e de Jules David, administrateur et associe\u0301, tout droit venu des hauts plateaux aveyronnais et de\u0301ja\u0300 bien installe\u0301 au sein de Blue cheese. Lara Orsoni, productrice, fra\xeechement d\xe9barqu\xe9e du Canada nous a rejoint pour nous apporter sa forte exp\xe9rience internationale. Nous retrouvons \xe9galement aux manettes Marie Legras, productrice en herbe \xab qui en a sous le pied \xbb, ainsi que Julien Chouvet notre fine fleur \xe0 l\u2019\xe9criture et au d\xe9veloppement. Tous viennent insuffler un nouvel e\u0301lan, avec leurs ide\u0301es, leurs envies\u2026 Sans compter notre \xab Audiard maison \xbb Martine Pilon Renie\u0301, l\u2019\xe2me soeur de Blue cheese et v\xe9ritable rouage central au c\u0153ur de la m\xe9canique en place depuis la cr\xe9ation de la soci\xe9t\xe9.",Object(a.jsx)("br",{}),"Avec une telle e\u0301quipe et toujours sous l\u2019\u0153il avis\xe9 de \xab La Badinter \xbb, chacun \xe0 sa mani\xe8re avec le regard toujours ouvert sur le monde et attentifs \xe0 sa complexit\xe9, c\u2019est la promesse de jours multicolores, de projets exaltants\u2026 Sans rien la\u0302cher, de continuer a\u0300 se de\u0301mener pour de\u0301fendre les histoires a\u0300 raconter, le point de vue des auteurs qui les racontent et permettre aux re\u0301alisateurs des mises en sce\u0300ne audacieuses..!",Object(a.jsx)("br",{}),"Blue cheese Films est forte d\u2019un catalogue de 66 films (documentaires unitaires, s\xe9ries et collections confondues), de rencontres, de projets, de succ\xe8s critiques, d\u2019audiences et de r\xe9compenses."]})})})})]})},F=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var i;return Object(j.a)(this,s),(i=t.call(this,e)).handleChange=function(e){var t=e.target,s=t.name,l=t.value,r="",c="";"login"===s?""===l&&(r=Object(a.jsx)("strong",{children:"Le champs login est requis"})):"pass"===s&&""===l&&(c=Object(a.jsx)("strong",{children:"Le champs mot de passe est requis"})),i.setState({loginError:r,passError:c}),i.setState(Object(x.a)({},s,l))},i.handleSubmit=function(e){e.preventDefault();var t=i.state,s=t.login,l=t.pass;if(""!==s&&""!==l)if("Raphael"===s&&"123"===l){var r=(new Date).toLocaleDateString();sessionStorage.setItem("masterKey",r),i.props.history.push("/admin123"),window.location.reload()}else{var c=Object(a.jsx)("div",{className:"alert alert-warning text-center fw-bolder",children:"Le login et/ou le mot de passe ne correspondent pas"});i.setState({errorMessage:c})}else{var n=Object(a.jsx)("div",{className:"alert alert-danger text-center fw-bolder",children:"Veuillez saisir les deux champs maintenant!!!"});i.setState({errorMessage:n})}},i.state={login:"",pass:"",loginError:"",passError:"",errorMessage:""},i}return Object(b.a)(s,[{key:"render",value:function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"container mt-5 offset-12  col-12",style:{height:"550px"},children:Object(a.jsxs)("div",{className:"card col-4 offset-4 ",children:[this.state.errorMessage,Object(a.jsx)("div",{className:"card-header text-center h4",children:"Formulaire de connexion"}),Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("form",{onSubmit:this.handleSubmit,style:{height:"350px",marginTop:"50px"},children:[Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)("label",{htmlFor:"login",className:"form-label",children:"Login"}),Object(a.jsx)("input",{type:"text",onChange:this.handleChange,className:"form-control",id:"login",name:"login",placeholder:"Entrez votre identifiant..."})]}),this.state.loginError,Object(a.jsxs)("div",{className:"mb-5",children:[Object(a.jsx)("label",{htmlFor:"pass",className:"form-label",children:"Mot de passe"}),Object(a.jsx)("input",{type:"password",onChange:this.handleChange,className:"form-control",id:"pass",name:"pass",placeholder:"Entrez votre mot de passe..."})]}),this.state.passError,Object(a.jsx)("button",{type:"submit",className:"btn btn-primary col-12",children:"Soumettre"})]})})]})})})}}]),s}(i.Component),q=function(e){return sessionStorage.getItem("masterKey")&&(sessionStorage.removeItem("masterKey"),e.history.push("/login"),window.location.reload()),Object(a.jsx)(a.Fragment,{})},k=function(){return(new Date).toLocaleDateString()===sessionStorage.getItem("masterKey")},E=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(n.a,{basename:"/Project-react",children:[Object(a.jsx)("nav",{children:Object(a.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-info",children:Object(a.jsxs)("div",{className:"container-fluid",children:[Object(a.jsx)(n.c,{className:"navbar-brand display-2",activeClassName:"active",to:"/",exact:!0,children:Object(a.jsx)("img",{src:"images/cheese.png"})}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(a.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.c,{className:"nav-link ",activeClassName:"active","aria-current":"page",to:"/",exact:!0,children:"Accueil"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.c,{className:"nav-link",activeClassName:"active",to:"/presentation",children:"Pr\xe9sentation"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(n.c,{className:"nav-link",activeClassName:"active",to:"/contact",children:"Contact"})})]}),Object(a.jsx)("span",{className:"navbar-text",children:k()?Object(a.jsxs)(n.c,{className:"nav-link",activeClassName:"active",to:"/logout",children:[Object(a.jsx)(d.j,{})," D\xe9connexion"]}):Object(a.jsxs)(n.c,{className:"nav-link",activeClassName:"active",to:"/login",children:[Object(a.jsx)(d.i,{})," Connexion"]})})]})]})})}),Object(a.jsxs)(o.d,{children:[Object(a.jsx)(o.b,{path:"/",component:y,exact:!0}),Object(a.jsx)(o.b,{path:"/presentation",component:w}),Object(a.jsx)(o.b,{path:"/contact",component:S}),Object(a.jsx)(o.b,{path:"/login",component:F}),Object(a.jsx)(o.b,{path:"/logout",component:q}),Object(a.jsx)(o.a,{from:"/admin123/reload",to:"/admin123"}),Object(a.jsx)(o.b,{path:"/admin123",render:function(){return k()?Object(a.jsx)(N,{}):Object(a.jsx)(o.a,{to:"/login"})}}),Object(a.jsx)(o.b,{path:"*",component:C})]})]})})},D=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("footer",{id:"foot",children:Object(a.jsx)("div",{className:"text-white text-center mt-5",children:Object(a.jsx)("p",{id:"copy",className:"m-3 texte-center",children:"Tous droits r\xe9serv\xe9s Copyright \xa9 2021"})})})})};var M=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(E,{}),Object(a.jsx)(D,{})]})};c.a.render(Object(a.jsx)(l.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.cfe85d0b.chunk.js.map