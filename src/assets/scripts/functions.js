var functions = functions || {};

functions.showDiv = function(div){
	myElement = document.getElementById(div);
	
	myElement.className = 'dropdownshow';
}

functions.hideDiv = function(div){
	myElement = document.getElementById(div);
	
	myElement.className = 'dropdownhide';
}

functions.hoverMenu = function(menu){
	myElement = document.getElementById(menu);
	
	myElement.className = 'menuSelected';
}

functions.unHoverMenu = function(menu){
	myElement = document.getElementById(menu);
	
	myElement.className = 'menu';
}

functions.hoverLink = function(menu){
	myElement = document.getElementById(menu);
	
	myElement.className = 'linkSelected';
}

functions.unHoverLink = function(menu){
	myElement = document.getElementById(menu);
	
	myElement.className = 'link';
}

functions.sortTable = function(colID) {
	var table, rows, switching, i, x, y, shouldSwitch;

	table = document.getElementById("myTable");
	switching = true;
	while (switching) {
		switching = false;
		rows = table.getElementsByTagName("TR");
		for (i = 1; i < (rows.length - 1); i++) {
			shouldSwitch = false;
			x = rows[i].getElementsByTagName("TD")[colID];
			y = rows[i + 1].getElementsByTagName("TD")[colID];
			if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
				shouldSwitch= true;
				break;
			}
		}
		if (shouldSwitch) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
			switching = true;
		}
	}
}

functions.searchTable = function(colID, colElement) {
	var input, filter, table, tr, td, i;

	input = document.getElementById(colElement);
	filter = input.value.toUpperCase();
	table = document.getElementById("myTable");
	tr = table.getElementsByTagName("tr");

	for (i = 0; i < tr.length; i++) {
		td = tr[i].getElementsByTagName("td")[colID];
		if (td) {
			if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
				tr[i].style.display = "";
			} else {
				tr[i].style.display = "none";
			}
		} 
	}
}
