$(function(){
    
    $("#data-table tbody tr.highlight").each(function(index){
        console.log(index);
        $(this).css({"background-color":"#eff6f7" });
    });

    $("#data-table tbody").on("click","tr")

    $("#table-one tbody").on("click","tr",function(){
        console.log("table row clicked");
    });

    $("#table-one tbody").append(`<tr>
                                
    
                            </tr>`)

});

