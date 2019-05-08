var tableBody = document.createElement("tbody"); //CREO BODY DE LA TABLA
var tableHead = document.createElement("thead"); //CREO HEAD DE LA TABLA
var fullname;
var cell;
var row;
var members = data.results[0].members;

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
 cellHeadCreation("Name");
 cellHeadCreation("Party");
 cellHeadCreation("State");
 cellHeadCreation("Seniority");
 cellHeadCreation("Votes percentage");

//Creación de rows y td's para tableBody
function crearTabla(Array){
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
}

function filterMembers(members) {
  var checkBoxes = document.querySelectorAll('input[name=party-filter]:checked')
  // console.log(checkBoxes);
  checkedBoxes = Array.from(checkBoxes)
  // console.log(checkedBoxes);
  checkedBoxes = checkedBoxes.map(function(element) {
    return element.value;
  })
  // console.log(checkedBoxes);
  var filtrados = [];
  filtrados = members.filter(function(members) {
    if (checkedBoxes.includes(members.party)) {
      return members;
    }
  });
  console.log(filtrados);
  if (filterState() !== "todos") {
		filtrados = filtrados.filter(senador => filterState() == senador.state )
		return filtrados;
    console.log(filtrados);
	} else if (filterState() == "todos") {
		return filtrados;
    console.log(filtrados);
	}
}

function filterState() {
  var state = document.querySelector('#state-filter').value;
  console.log(state);
  return state;
}

function clearTable() {
  $(".rowBody").remove();
  crearTabla(filterMembers(members));
}
crearTabla(members);


