function editar(){
    var gustos = document.getElementById("gustos").value;
    
    var count = 0;
    var edit = "editar";
  
    document.getElementById('tabla').innerHTML += `<td>${gustos}</td><td>0</td><td><a class ="a1" onclick="transformarEditable(this)">Editar</a></td>`;
  }
  
  function transformarEditable(fila)
    {
        var editando = false;
        
        if(editando === false)
        {   
            var nodetr = fila.parentNode.parentNode;
            var nodestr = nodetr.getElementsByTagName('td');
            var form = document.getElementById('formulario1');
            var Gusto = nodestr[0].firstChild.nodeValue;
            var porcentaje = nodestr[1].firstChild.nodeValue;
            var codigohtml = '<td><input type="text" id="input1"  name="gustos" style="width:2cm;" value="'+Gusto+'"></td>'+
         '<td><input type="text" name="porcentaje" id="input2" style="width:2cm;" value="'+porcentaje+'"></td>'+'<span style ="width:1cm;">En edicion </span></td>'
        }
        nodetr.innerHTML=codigohtml;
        
        
        form.innerHTML='<div class="div1">Pulse Aceptar para guardar los cambios o Cancelar para anularlos</div>'+
        '<button type="submit" class="btn btn-secondary" id="aceptar" onclick="guardar()">Aceptar</button>'+ '<span></span>'+
        '<button type="reset" class="btn btn-danger" id="cancelar" onclick="location.reload()">Cancelar</button>'
  
    editando=true;
  }
    
  function guardar()
  {
    localStorage.setItem('gustos', document.getElementById('input1').value);
    localStorage.setItem('porcentaje', document.getElementById('input2').value);
    localStorage.setItem('nombre', document.getElementById('nombre').value);
    localStorage.setItem('email', document.getElementById('correo').value);
    localStorage.setItem('telefono', document.getElementById('telefono').value);
  }
  
  
  