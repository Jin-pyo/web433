$(function(){
    
    $("#data-table tbody tr.highlight").each(function(index){
        console.log(index);
        $(this).css({"background-color":"#eff6f7" });
    });

    $("#data-table tbody").on("click","tr",function(e){
        console.log($(this).attr("_id"));
    })


   $("#data-form").on("submit",function(e){
       e.preventDefault(); // doesn't refresh the page when you press button

       let formData={
            firstName: $("#data-form [name='fName']").val(),
            bio:$("#data-form [name='bio']").val()
       };

       console.log(formData);
   })





    $("#table-one tbody").on("click","tr",function(){
        console.log("table row clicked");
    });

    $("#table-one tbody").append(`<tr>
                                
    
                            </tr>`)

});

