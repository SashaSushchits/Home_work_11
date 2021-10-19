class Contacts {
  constructor(data) {
    this.dataList = [];
    this.id = 0;
  }
  addUser(user) {
    user.edit({id: this.id});
    this.id ++;
    this.dataList.push(user);

  }
  add(){
    const contact = new User({id: this.id});
    this.id ++;
    this.dataList.push(contact);
  }
  edit(id, obj){
    const user = this.dataList.find((searchUser) => searchUser.data.id === id); //find
    user.edit(obj);
  }
  remove(id){
    this.dataList.splice(id, 1);
    // delete this.dataList[id];
  }
  get(){
    return this.dataList;
  }
}

class User {
  constructor(data) {
    this.data = data;
  }
  
  edit(obj) {
    return Object.assign(this.data, obj);
  }

  get() {
    return this.data;
  }
}

class ContactsApp extends Contacts{
  constructor() {
    super()
    // this.app = 
  }
  createContacts(){
    // const searchClass = document.querySelector(this.id)

    const contactsList = document.createElement('div');
    contactsList.classList.add('contacts');
    document.body.appendChild(contactsList);

    const list = document.createElement('ul');
    contactsList.appendChild(list);
    
    const listLi = document.createElement('li');
    list.appendChild(listLi);

    const textList = document.createElement('p');
    // textList.innerHTML = ;
    listLi.appendChild(textList);

    const buttonAdd = document.createElement('button');
    buttonAdd.innerHTML = 'Добавить';
    buttonAdd.classList.add('buttonAdd');
    listLi.appendChild(buttonAdd);
    buttonAdd.addEventListener('click', (event) => {
      this.onAdd();
    });

    const buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = 'Редактировать';
    buttonEdit.classList.add('buttonEdit');
    listLi.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', (event) => {
      this.onEdit();
    });

    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'Удалить';
    buttonRemove.classList.add('buttonRemove');
    listLi.appendChild(buttonRemove);
    buttonRemove.addEventListener('click', (event) => {
      this.onRemove();
    });
  }
  
  onAdd(){
    const contact = new User({id: this.id});
    this.id ++;
    this.dataList.push(contact);
  } 
  onEdit(){

  }
  onRemove(){

  }
  get(){

  }
}



const newUser = new User({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567'});
const newUser2 = new User({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567', job: 'Office'});
const newUser3 = new User({email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567', job: 'Office'});
newUser.edit({email: 'ABCFFFF@mail.ru', name: 'Bob'});
console.log(newUser.get());

const newContacts = new Contacts();
const newContacts3 = new Contacts();

newContacts.add();
newContacts.add();
newContacts.add();
newContacts.edit(0, {address: 'Smirnova', phone:'567765567', job: 'Office'});
newContacts.edit(1, {address: 'Smirnova', phone:'567765567'});

newContacts3.add({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567'});

newContacts.addUser(newUser);
newContacts.addUser(newUser2);
newContacts.addUser(newUser3);
console.log(newContacts3.get());
console.log(newContacts.get());

// newContacts.remove(3);
console.log(newContacts.get());

console.log(newUser);
console.log(newUser2);
console.log(newContacts);

const newContacts2 = new ContactsApp();
newContacts2.add();
newContacts2.edit(0, {name: 'Alex', email: 'alex@mail.ru', address: 'Smirnova', phone:'5098765542'});
// newContacts2.edit(1, {name: 'Alex', email: 'alex@mail.ru', address: 'Smirnova', phone:'5098765542'});
newContacts2.createContacts();
console.log(newContacts2);