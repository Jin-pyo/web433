/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: __Jinpyo Ju____ Student ID: __134444181___ Date: _2020.1.31__
*
*
********************************************************************************/ 

let saleData=[];
let page=1;
let perPage=10;
let clickedSale;
let total=0;
const saleTableTemplate=_.template(`
   <% _.forEach(saleData,function(e){ %>
        <tr data-id=<%- e._id %>>
            <td> <%- e.customer.email  %> </td>
            <td> <%- e.storeLocation %> </td>
            <td> <%- e.items.length %> </td>
            <td> <%- moment.utc(e.saleDate).local().format('LLLL') %> </td>
        </tr>
  <%  }); %>
`);

const saleModelBodyTemplate=_.template(`
<div class="modal-dialog" role="document">
<div class="modal-content">
  <div class="modal-header">
    <h4> Sale: <%- clickedSale._id %> </h4>
    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <h4 class="modal-title" _id="111"> </h4>
  </div>
  <div class="modal-body" id="modalBody">

    <h4> Customer </h4>
    <strong> eamil: </strong> <%- clickedSale.customer.email  %> 
    <br>
    <strong> age: </strong> <%- clickedSale.customer.age %>
    <br>
    <strong> satisfaction: </strong> <%- clickedSale.customer.satisfaction %> /5
    <br><br>
    <h4> Items: $ <%- total %> </h4>
    <table class ="table">
                    <thead>
                        <tr>
                            <th> Product Name </th>
                            <th> Quantity </th>
                            <th> Price </th>
                        </tr>
                    </thead>
                    <tbody> 
                        <% _.forEach(clickedSale.items, function(e){ %>
                            <tr>
                                <td> <%- e.name %>  </td>
                                <td> <%- e.quantity %> </td>
                                <td> $<%- e.price %> </td>
                            <tr>
                        <% }); %>
                    </tbody>
                </table>

                </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
              
            </div>
          </div><!-- /.modal-content -->
        </div><!-- /.modal-dialog -->

`);

$(function(){
    
    console.log(`This is ${page}`);
   
    loadSaleData();

    $("tbody").on("click","tr",function(e){
        let clickedid =$(this).attr("data-id");
        console.log(clickedid);
        clickedSale=_.find(saleData,function(e){
            if(clickedid==e._id)
                return e;
        });

        _.forEach(clickedSale.items,function(e){
            console.log(`${e.price} and ${e.quantity}`)
            total+=parseFloat(e.price)*parseFloat(e.quantity);
            console.log(`Total : ${total}`);
        });

        $("#sale-modal").html(saleModelBodyTemplate(clickedSale));
        $("#sale-modal").modal({
            keyboard:false,
            backdrop:"static"
        })

        total=0;
    })

    $("#previous-page").on("click",function(){
        page--;
        saleData.splice(0,10)
        loadSaleData();
    });

    $("#next-page").on("click",function(){
        page++;
        saleData.splice(0,10)
        loadSaleData();
    })

    

});


function loadSaleData(){
    $("#current-page").text(page)
    console.log(`This is ${page}`);

    $.getJSON(`https://limitless-lowlands-92948.herokuapp.com/api/sales/?page=${page}&perPage=${perPage}`, function(e)
    {        
        $.each(e, function(key, value)
        {
            saleData.push(value);
            console.log(value);
            //console.log(" ");
            //console.log(saleData);
        });                        
        $("tbody").html(saleTableTemplate(saleData))            
    })          
            
}