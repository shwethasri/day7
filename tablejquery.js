/* creating dynamic table using jquery */
var employee =[
    {
      id : 12,
      name : "sri",
      salary : 10000,
      dept : "maintainance"
    },
    {
      id : 123,
      name : "shravs",
      salary : 50000,
      dept : "developing"
    },
    {
      id : 91,
      name : "ten",
      salary : 20000,
      dept : "testing"
    },
    {
      id : 45,
      name : "joy",
      salary : 35000,
      dept : "manager"
    },
    {
      id : 52,
      name : "han",
      salary : 30000,
      dept : "sales"
    },
    {
      id : 22,
      name : "shij",
      salary : 20000,
      dept : "security"
    },
    {
      id : 36,
      name : "raj",
      salary : 15000,
      dept : "maintainance"
    },
    {
      id : 65,
      name : "rik",
      salary : 50000,
      dept : "trainer"
    },
    {
      id : 43,
      name : "shiv",
      salary : 34000,
      dept : "translator"
    },
    {
      id : 25,
      name : "srik",
      salary : 15000,
      dept : "trainee"
    },
    {
      id : 76,
      name : "paddy",
      salary : 43000,
      dept : "sr. developer"
    },
    {
      id : 55,
      name : "hari",
      salary : 20000,
      dept : "testing"
    },
    {
      id : 45,
      name : "lina",
      salary : 50000,
      dept : "ethical hacker"
    },
    {
      id : 64,
      name : "ras",
      salary : 20000,
      dept : "maintainance"
    }
];
function createTable()
{
    var tableDiv = $('#tableDiv');
    var table = $('<table class="rows"></table>');
    $(table).attr('id',"dynamictable");
    var rowCount = employee.length;
    var column = Object.keys(employee[0]);
    var colCount = column.length;
    var t = $('<tr class="rows"></tr>');
    for ( k = 0; k < colCount; k++)
    {
      var th = $('<th class="rows">'+ column[k]+'<button class="ascdesc" onclick="sortac('+ k +')">&#9652</button><button class="ascdesc" onclick="sortdc('+ k +')">&#9662</button>' +'</th>');
      t.append(th);
    }
    table.append(t);
    for( i = 0; i < rowCount; i++ )
    {
      var tr = $('<tr class="rows"></tr>');
      for ( j = 0; j < colCount; j++ )
      {
        var td = $('<td class="rows">'+employee[i][column[j]]+'</td>');
        tr.append(td);
      }
      table.append(tr);
    }
    tableDiv.append(table);
}
function sortac(column)
{
  var rowCount = employee.length;
  var col = Object.keys(employee[0]);
  var colCount = column.length;
  var temp = "", a, b;
  for ( var i = 0; i < rowCount; i++ )
  {
    for (var j = i; j < rowCount-1; j++)
    {
      m = j+1;
      a = employee[j][col[column]];
      b = employee[m][col[column]];
      if( a < b )
      {
          temp = employee[j] ;
          employee[j] = employee[m];
          employee[m] = temp;
      }
    }
  }
  sortedTable(employee);
}
function sortdc(column)
{
  var rowCount = employee.length;
  var col = Object.keys(employee[0]);
  var colCount = column.length;
  var temp = "", a, b;
  for ( var i = 0; i < rowCount; i++ )
  {
    for (var j = i; j < rowCount-1; j++)
    {
      m = j+1;
      a = employee[j][col[column]];
      b = employee[m][col[column]];
      if( a > b )
      {
          temp = employee[j] ;
          employee[j] = employee[m];
          employee[m] = temp;
      }
    }
  }
  sortedTable(employee);
}
function sortedTable(arr)
{
  var rowCount = arr.length;
  var col = Object.keys(arr[0]);
  var colCount = col.length;
  for( i = 0; i < rowCount; i++ )
  {
    for(var j = 0; j < colCount; j++)
    {
      $('#dynamictable tr:eq('+ (i+1) +') td:eq(' + j+')').html(arr[i][col[j]]);
    }
  }
}
