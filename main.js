/*  DESCRIZIONE:
        Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
        Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
        Chiamata: https://flynn.boolean.careers/exercises/api/array/music
        Layout: https://bitbucket.org/booleancareers/ex-dischi-musicali-layout
*/

$(document).ready(function() {

	//Code

    $.ajax({

      url: "https://flynn.boolean.careers/exercises/api/array/music",

      method: "GET",

      success: function (data) {

        for (var i = 0; i < data.response.length; i++) {

          var source = $("#hb-template").html();

          var sourceTransfert = Handlebars.compile(source);

          var objectsContent = {
            poster: data.response[i].poster,
            title: data.response[i].title,
            name: data.response[i].author,
            genre: data.response[i].genre,
            year: data.response[i].year
          }

          var stamp =  sourceTransfert(objectsContent);

          $(".cds-container").append(stamp);

        }
      },

      error : function (errori) {
        alert("E' avvenuto un errore. " + errore);
      }

    })

});
