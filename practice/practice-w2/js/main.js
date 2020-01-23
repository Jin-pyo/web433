
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

    /*
    $("#data-table tbody tr td").html(`
        <span>New div!</span>
    `)

    */

   $("#data-form").on("submit",function(e){
    e.preventDefault();

    
    

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
    
})
   


/*

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
   
    $("#data-table tbody tr td").append(`
        <span>${formData.firstName}</span>
    `)

    console.log(formData);
})
*/