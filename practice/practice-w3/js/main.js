let users = [
    { 'user': 'fred',    'active': true, 'age': 40, 'registered': '2019-03-25T05:35:03Z' },
    { 'user': 'pebbles', 'active': false, 'age': 1, 'registered': '2019-09-20T15:32:48Z' },
    { 'user': 'barney',  'active': true,  'age': 36, 'registered': '2019-08-04T02:35:18Z' },
    { 'user': 'wilma',  'active': true,  'age': 39, 'registered': '2019-04-29T00:05:05Z' }

];


const userTemplate=_.template(`
    <% _.forEach(users,function(user){ %>
        <tr _id="clicked">
            <td> <%- user.user %> </td>
            <td> <%- user.active %> </td>
            <td> <%- user.age %> </td>
            <td> <%- moment(user.registred).format('LLLL') %> </td>
        </tr>    
    <% }); %> 
`)

$("#data-table tbody").html(userTemplate(users));

$("tbody tr").on("click","td",function(){
    console.log("clicked");
})



/*
let template1=_.template('hello <%= user %>');
let templateResult=template1({'user':users[0].user});


let template3 = _.template(`<ul> 
                                <% _.forEach(users, function(user) { %>
                                    <li><%- user %></li>
                                <% }); %>
                            </ul>`);

let template3Result = template3({ 'users': users }); // => '<ul><li>fred</li><li>barney</li></ul>'
console.log(template3);
console.log(template3Result);

const 

/*
// Array
//chunk
let chunk1=_.chunk(['a','b','c','d'],2);
console.log(chunk1);

let chunk2=_.chunk(users,2);
console.log(chunk2);

//findIndex
let x=_.findIndex(users,function(a){
    return a.active==true;
})
console.log(x);

//take
let take1=_.take(users,2);
console.log(take1);

//Collection
//filter
let filter1=_.filter(users,function(user){
    return user.user=='wilma';
});
console.log(filter1);

//sort
let sort1=_.sortBy(users,[function(user){
    return user.user;
}])
console.log(sort1);

//forEachRight
_.forEachRight(users,function(user){
    console.log(user);
})
*/