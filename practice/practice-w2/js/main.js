


$(function(){
    
    $("#data-table tbody tr.highlight").each(function(index){
        console.log(index);
        $(this).css({"background-color":"#eff6f7","font-size":"15px"});
    });


    $("#data-table tbody").on("click","tr",function(){
       console.log($(this).attr("_id"));
    })

    $("#data-table tbody").append(`
        <tr _id="4">
            <td>Ten</td>
            <td>Eleven</td>
            <td>Twelve</td>
        </tr>
    `);

    $("#data-table tbody tr td").html(`
        <span>New div!</span>
    `)

    $("#data-table tbody tr").empty();
    
})
   
