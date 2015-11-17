/* creating dynamic table */
var student = [
    {
      no : 23,
      name : "john",
      course : "EEE"
    },
    {
      no : 1,
      name : "sam",
      course : "EEE"
    },
    {
      no : 26,
      name : "sid",
      course : "ECE"
    },
    {
      no : 2,
      name : "josh",
      course : "EEE"
    },
    {
      no : 3,
      name : "john",
      course : "CSE"
    },
    {
      no : 5,
      name : "johnson",
      course : "IT"
    },
    {
      no : 10,
      name : "joy",
      course : "EIE"
    },
    {
      no : 57,
      name : "sri",
      course : "Chem"
    },
    {
      no : 15,
      name : "shrs",
      course : "Civ"
    },
    {
      no : 24,
      name : "shil",
      course : "Mech"
    },
    {
      no : 4,
      name : "sh",
      course : "CAD"
    },
    {
      no : 32,
      name : "shiv",
      course : "Mech"
    },
    {
      no : 43,
      name : "jan",
      course : "ME"
    }
  ];
  function createTable()
  {
      var tableDiv = document.getElementById('tableDiv');
      var table = document.createElement('table');
      var rowCount = student.length;
      var column = Object.keys(student[0]);
      var colCount = column.length;
      table.id = "student-Informaton";
      table.border=1;
      for ( var i = 0; i < rowCount; i++ )
      {
        var tr = document.createElement('tr');
        for(var j = 0; j < colCount; j++ )
        {
            if ( i === 0 )
            {
              var th = document.createElement('th');
              th.innerHTML = column[j] +'<button class="ascdesc" onclick="sortac('+ j +')">&#9652</button><button class="ascdesc" onclick="sortdc('+ j +')">&#9662</button>';
              th.id = column[j] + "h";
              tr.appendChild(th);
            }
            else {
                var td = document.createElement('td');
                td.innerHTML = student[i][column[j]];
                tr.appendChild(td);
            }
        }
        table.appendChild(tr);
      }
      tableDiv.appendChild(table);
  }
  function sortac(column){
      var table = document.getElementById('student-Informaton');
      var rowCount = table.rows.length;
      var temp = "", a, b;
      for( var i = 1; i <= rowCount; i++ )
      {
          for ( var j = i; j < rowCount-1; j++ )
          {
              var k = j+1;
              if( column === 0 )
              {
                a = parseInt(table.rows[j].cells[column].innerHTML);
                b = parseInt(table.rows[k].cells[column].innerHTML);
              }
              else{
                a = table.rows[j].cells[column].innerHTML;
                b = table.rows[k].cells[column].innerHTML;
              }
              if( a < b )
              {
                temp = table.rows[j].innerHTML;
                table.rows[j].innerHTML = table.rows[k].innerHTML;
                table.rows[k].innerHTML = temp;
              }
          }
        }
  }
  /* sorting function for descending order */
  function sortdc(column){
      var table = document.getElementById('student-Informaton');
      var rowCount = table.rows.length;
      var temp = "", a, b;
      for( var i = 1; i <= rowCount; i++ )
      {
          for ( var j = i; j < rowCount-1; j++ )
          {
              var k = j+1;
              if( column === 0 )
              {
                a = parseInt(table.rows[j].cells[column].innerHTML);
                b = parseInt(table.rows[k].cells[column].innerHTML);
              }
              else{
                a = table.rows[j].cells[column].innerHTML;
                b = table.rows[k].cells[column].innerHTML;
              }
              if( a > b )
              {
                temp = table.rows[j].innerHTML;
                table.rows[j].innerHTML = table.rows[k].innerHTML;
                table.rows[k].innerHTML = temp;
              }
          }
        }
  }
