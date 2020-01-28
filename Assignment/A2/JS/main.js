let saleData=[];
let page=1;
let perPage=10;
let temp;
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
    <h4> Customer </h4>
    <strong> eamil </strong> <%- temp.customer.satisfaction  %> /5
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
                        <% _.forEach(item.items, function(e){ %>
                            <tr>
                                <td> <%- e.name %>  </td>
                                <td> <%- e.quantity %> </td>
                                <td> $<%- e.price %> </td>
                            <tr>
                        <% }); %>
                    </tbody>
                </table>
`);

$(function(){
    
    console.log(`This is ${page}`);
   
    loadSaleData();

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