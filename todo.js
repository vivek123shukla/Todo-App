
let list=[
    {
        item:'vivek',
        duedate:'9/8/2002'
    },
    {
        item:'sushil',
        duedate:'9/7/2012'
    }
];
display();
function addTodo(){
    let todo_input=document.querySelector('#todo_input');
    let todo_date=document.querySelector('#date_item');
    let todo_item=todo_input.value;
    let date=todo_date.value;
    list.push({item:todo_item,duedate:date});
    console.log(list);
   //list.push(date_item_value);
    todo_input.value='';
    todo_date.value='';
    display();
}
function display(){
    let todo_msg=document.querySelector('#todo_msg');
    todo_msg.innerText='';
    let newhtml='';
    for(let i=0;i<list.length;i++){
        let todoitem=list[i].item;
        let dateitem=list[i].duedate;
        newhtml+=`
        <span>${todoitem}</span>
        <span>${dateitem}</span>
           <button onclick="list.splice(${i},1);
           display()">Delete</button> 
           `;
    
    todo_msg.innerHTML=newhtml;
    }
}