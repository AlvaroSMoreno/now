$(document).ready(function(){     
  $("#myTable").dynamicTable({
        //definimos las columnas iniciales    
        columns: [{
              text: "Pregunta",
              key: "Pregunta"
          },
          {
              text: "Tipo De Respuesta",
              key: "Type"
          },
          {
              text: "Respuesta",
              key: "Respuesta"
          }        
        ],
 
        //carga de datos
        data: [{
              Pregunta: 'PREGUNTA DEMO',
              Type: 'Numerico',
              Respuesta: 2
              

          }
        ],

        //definición de botones
        buttons: {
            addButton: '<input type="button" value="Agregar" class="btn btn-success" />',
            cancelButton: '<input type="button" value="Cancelar" class="btn btn-light" />',
            deleteButton: '<input type="button" value="Eliminar" class="btn btn-light" />',
            editButton: '<input type="button" value="Editar" class="btn btn-light" />',
            saveButton: '<input type="button" value="Guardar" class="btn btn-light" />',
        },
        showActionColumn: true,
        //condicionales
        getControl: function (columnKey) {
          if(columnKey == "Type"){
            return '<select class="form-control select"><option value="sel">Seleccionar</option><option value="textoOp">Texto</option><option value="numOp">Numerica</option><option value="checkOp">Opcion Multiple</option></select>'
          }
          if(columnKey == "Pregunta"){
            return '<input type="text" class="form-control" />';
          }
          return '<input type="number" style="display:none;" class="form-control tex" /><input type="text" style="display:none;" class="form-control num" />'
          
        }

    });

    $(".select").change(function(evt) {
      //console.log($(evt.target).val())
      if($(evt.target).val() == "textoOp"){
          $(".tex").eq(0).show();
          $(".num").eq(0).hide();
        }
      else if($(evt.target).val() == "numOp"){
          $(".tex").eq(0).hide();
          $(".num").eq(0).show();
        }
        else{
          $(".tex").hide();
          $(".num").hide();
        }


        
    });	    
});    