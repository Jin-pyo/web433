$(function(){
    console.log("DOM is ready!");

    $("#table-one tbody").on("click","tr",function(){
        console.log("table row clicked");
    });

    

});