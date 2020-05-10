//This will be got from node JS using GET API


// let templist=[]
// console.log("This is the list reponse from node: ");
// let url="http://localhost:81/todoApp/api/todos";
// fetch(url).then(response => (
//   response.json()).then(data => (
//       {
//       data: data,
//       status: response.status
//   })
// ).then(res => {
//     templist=res.data
//     console.log(res.data)
// }));

// console.log(templist)
const todoList=[ 
    {id:0,
    item:"First todo item"},
    {id:1,
    item:"Second todo item"},
    {id:2,
    item:"Third todo item"}
];


export default todoList;