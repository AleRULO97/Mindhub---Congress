var tableBody = document.createElement("tbody"); //CREO BODY DE LA TABLA
var tableHead = document.createElement("thead"); //CREO HEAD DE LA TABLA
var fullname;
var cell;
var row;

//Función para cuerpo de tabla
function cellCreation(string){
	cell = row.insertCell();
	cell.appendChild(document.createTextNode(string));
    row.appendChild(cell); //Inserto cell en row
    tableBody.appendChild(row); //Inserto row en tablebody
    tableBody = document.getElementById("senate-data").appendChild(tableBody); //Envio el tablebody al html mediante id
}

//Función para encabezado de tabla
function cellHeadCreation(string){
	cell = document.createElement("th");
	cell.appendChild(document.createTextNode(string));
	row.appendChild(cell);
	tableHead.appendChild(row);
	document.getElementById("senate-data").appendChild(tableHead);
}

 //Creación de row y th's para tableHead
 row = tableHead.insertRow(); 
 cellHeadCreation("Senator");
 cellHeadCreation("Party");
 cellHeadCreation("State");
 cellHeadCreation("Seniority");
 cellHeadCreation("Votes percentage");

//Creación de rows y td's para tableBody
data.results[0].members.forEach(function (i){ 
	row = tableBody.insertRow();  //Creo row para tableBody
	if (i.middle_name == null){
		fullname = (i.first_name +" "+ i.last_name);
	}
	else{
		fullname = (i.first_name +" "+ i.middle_name+" " + i.last_name);
	}

	cellCreation(fullname);
	cell.innerHTML = ('<a href="' + i.url + '">' + fullname + '</a>');
	cellCreation(i.party);
	cellCreation(i.state);
	cellCreation(i.seniority);
	cellCreation(i.votes_with_party_pct + " %");
});


