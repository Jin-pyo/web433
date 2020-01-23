$(function(){

    
    $("#data-table tbody tr.highlight").each(function(index){
        console.log(index);
        $(this).css({"background-color":"#eff6f7","font-size":"15px"});
    });


    $("#data-table tbody").on("click","td",function(){
       console.log($(this).attr("_id"));
    })

    $("#data-table tbody").append(`
        <tr >
            <td _id="4">Ten</td>
            <td _id="4">Eleven</td>
            <td _id="4">Twelve</td>
        </tr>
    `);

    /*

    $("#data-table tbody tr td").html(`
        <span>New div!</span>
    `)

    */

  
    
    

    $("#data-form").on("submit",function(e){
        e.preventDefault();

        let formData={
            //text
            firstName: $("#data-form [name='fName']").val(),
            //textarea
            bio:$("#data-form [name='bio']").val(),
            //select
            food:$("#data-form [name='food']").val(),
            //checkbox
            enrolled:$("#data-form [name='enrolled']").prop("checked"),
            //radio
            vehicle:$("#data-form [name='vehicle']:checked").val()
        }
        console.log(formData);

        })


});    

