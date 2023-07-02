
  const ul = document.querySelector('ul');
  
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ?
Const obj = {
  name,
  email,
  phonenumber
}
axios.post("https://crudcrud.com/api/dcddf69ffaca44f78941aed68e4c589a/appointmentData")
.then((respone) =>  {
  console.log(respone)
})
.catch((err) => {
console.log(err);
})
JSON.parse(localStorage.getItem('items')) : [];
 

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  localStorage.setItem('name',name)
  localStorage.setItem('email',email)
  localStorage.setItem('phonenumber',phonenumber)
  addTask(input.value);
  input.value = '';
}
itemsArray.forEach(addTask);
function addTask(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}