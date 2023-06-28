function createTable() {
    //Write your code here
	var rowCount = prompt("Input number of rows");
	var columnsCount = prompt("Input number of columns");

	var table = document.getElementById("myTable");
	table.innerHTML = '';
	for(let i =0; i<rowCount; i++){
		var row = document.createElement('tr');
		for(let j =0; j<columnsCount; j++){
			var cell = document.createElement('td');
			cell.textContent = `Row-${i} Column-${j}`;
			row.appendChild(cell);
		}
		table.appendChild(row);
	}
  
}
