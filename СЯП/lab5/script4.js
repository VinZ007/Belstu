
const table = document.querySelector('table');
highlightTableDiagonal(table);
function highlightTableDiagonal(table) {
		const rows = table.rows;
		for (let i = 0; i < rows.length; i++) {
			const cell = rows[i].cells[i];
			if (cell) {
				cell.style.backgroundColor = 'red';
			}
		}
	}

