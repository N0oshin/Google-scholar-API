function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (n == 5) { // Check if Year column
          x = rows[i].cells[n].textContent.trim();
          y = rows[i + 1].cells[n].textContent.trim();
          if (!isNaN(x) && !isNaN(y)) {
            x = Number(x);
            y = Number(y);
          }
          console.log(x);
          console.log(y);
        } else { // For other columns
          x = x.textContent.toLowerCase();
          y = y.textContent.toLowerCase();
        }
        if (dir == "asc") {
          if (x > y) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x < y) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }
