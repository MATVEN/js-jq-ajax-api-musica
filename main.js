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
            poster: data.response[i].cover,
            author: data.response[i].author,
            year: data.response[i].year,
            genre: data.response[i].genre
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
