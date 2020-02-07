let users = [
    { 'user': 'fred',    'active': true, 'age': 40, 'registered': '2019-03-25T05:35:03Z' },
    { 'user': 'pebbles', 'active': false, 'age': 1, 'registered': '2019-09-20T15:32:48Z' },
    { 'user': 'barney',  'active': true,  'age': 36, 'registered': '2019-08-04T02:35:18Z' },
    { 'user': 'wilma',  'active': true,  'age': 39, 'registered': '2019-04-29T00:05:05Z' }

];

let chunk1=_.chunk(users,2);
console.log(chunk1);

let take1=_.take(users,2);
console.log(take1);

let findIndex1=_.findIndex(users,function(e){
    return e.user=='fred';
})
console.log(findIndex1);

let filter1=_.filter(users,function(e){
    return e.active==true;
})
console.log(filter1);

let sort1=_.sortBy(users,[
    function(e){
        return e.user
    }
])
console.log(sort1);

let each1=[];
_.forEachRight(users,function(e){
    each1.push(e.age); 
})
console.log(each1);

let dataTemplate=_.template(`
    <% _.forEach(users,function(e){ %>
        <tr>
            <td> <%- e.user %> </td>
            <td> <%- e.active %> </td>
            <td> <%- e.age %> </td>
            <td> <%- moment(e.registered).format('LLLL') %> </td>
        </tr>
   <% }); %>
`)


$(function(){


    $("thead").each(function(e){
        $(this).css({"background-color":"#ffedfe","font-size":"12px"})
    })

    $("thead").on("click","tr",function(e){
        console.log($(this).attr("data-id")+"clicked")
    })

    $("tbody").html(dataTemplate(users));

    $("td").on("click",function(){
        console.log("clicked");
    })

})