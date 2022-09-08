function addfun() {
  var pid = document.getElementById("pid").value;
  var pname = document.getElementById("pname").value;
  var pprice = document.getElementById("pprice").value;
//   console.log(pid);
//   console.log(pname);
//   console.log(pprice);
  var src = "<div><table><tr><th id ='tdh'>Product Id</th><th id ='tdh'>Product Name</th> <th id ='tdh'>Product Price</th>";
  document.getElementById("res").innerHTML = src
  // for (let index = 0; index < 30; index++) {
  //   pid=document.getElementById("pid").value;
  //   pname = document.getElementById("pname").value;
  //   pprice = document.getElementById("pprice").value;
    
  
  src+="<tr><td id='tds'>"+pid+"</td id='tds'><td id='tds'>"+pname+"</td> <td id='tds'>"+pprice+"</td></tr>"
  document.getElementById("res").innerHTML = src
  
  // }
  src+="</div></table>"

}
