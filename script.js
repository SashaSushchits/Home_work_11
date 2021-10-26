class Contacts {
  constructor(data) {
    this.dataList = [];
  }
  add(name, email, address, phone) {
    const id = this.dataList.length;
    const contact = new User({ id, name, email, address, phone });
    this.dataList.push(contact);
  }
  edit(obj) {
    const { id } = obj;
    this.dataList[id].edit(obj);
  }
  remove(id) {
    delete this.dataList[id];
  }
  get() {
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

class ContactsApp extends Contacts {
  constructor() {
    super()
  }

  onAdd() {
    const oldContact = document.getElementById('listContact');
    if (oldContact) {
      oldContact.remove();
    }
    const oldThisaApp = document.querySelector('.contacts');
    if (oldThisaApp) {
      oldThisaApp.remove();
    }
    this.app = document.createElement('div');
    this.app.classList.add('contacts');
    document.body.appendChild(this.app);
    const listContact = document.createElement('ul');
    this.app.appendChild(listContact);
    listContact.id = 'listContact';
    this.dataList.map((dataL) => {
      const li = document.createElement('li');
      // li.classList.add('listLi');
      const nameList = document.createElement('h3');
      nameList.innerText = dataL.data.name;
      const emailAddressPhone = document.createElement('p');
      emailAddressPhone.innerHTML = 'Email: ' + dataL.data.email + '; Address: ' + dataL.data.address + '; Phone: ' + dataL.data.phone;
      li.appendChild(nameList);
      li.appendChild(emailAddressPhone);
      listContact.appendChild(li);
      const createBtns = this.createContactsBtns(dataL.data.id);
      li.appendChild(createBtns);
      // this.onAdd();
    });
  }

  init() {
    const form = document.createElement('form');
    const inputName = document.createElement('input');
    inputName.placeholder = 'Введите ваше имя';
    const inputEmail = document.createElement('input');
    inputEmail.placeholder = 'Введите ваш Email';
    const inputaAddress = document.createElement('input');
    inputaAddress.placeholder = 'Введите ваш адрес';
    const inputaPhone = document.createElement('input');
    inputaPhone.placeholder = 'Введите ваш телефон';
    const addBtn = document.createElement('button');
    addBtn.innerText = 'Создать контакт';
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(inputaAddress);
    form.appendChild(inputaPhone);
    form.appendChild(addBtn);

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = event.currentTarget[0].value;
      event.currentTarget[0].value = '';
      const email = event.currentTarget[1].value;
      event.currentTarget[1].value = '';
      const address = event.currentTarget[2].value;
      event.currentTarget[2].value = '';
      const phone = event.currentTarget[3].value;
      event.currentTarget[3].value = '';
      this.add(name, email, address, phone);
      this.onAdd();
    })
    document.body.appendChild(form);
  }

  createContactsBtns(id) {
    const closeModal = () => {
      const modalWindow = document.querySelector('.modal-wrapper');
      modalWindow.remove();
    };

    const openModal = () => {
      document.body.insertAdjacentHTML('beforeend', `
      <div class='modal-wrapper'>
        <div class='modal-box'>
          <span class="close">x</span>
          <h1>Редактировать контакт</h1>
        </div>
      </div>
      `)
      const contentBox = document.querySelector('.modal-box');


      const nameInput = document.createElement('input');
      nameInput.placeholder = this.dataList[id].data.name;
      const emailInput = document.createElement('input');
      emailInput.placeholder = this.dataList[id].data.email;
      const addressInput = document.createElement('input');
      addressInput.placeholder = this.dataList[id].data.address;
      const phoneInput = document.createElement('input');
      phoneInput.placeholder = this.dataList[id].data.phone;
      const save = document.createElement('button');
      save.innerText = 'Сохранить';

      save.addEventListener('click', () => {
        this.edit({ id, name: nameInput.value, email: emailInput.value, address: addressInput.value, phone: phoneInput.value });
        closeModal();
        this.onAdd();
      })

      contentBox.appendChild(nameInput);
      contentBox.appendChild(emailInput);
      contentBox.appendChild(addressInput);
      contentBox.appendChild(phoneInput);
      contentBox.appendChild(save);
      const close = document.querySelector('.close');
      close.addEventListener('click', closeModal);
    };


    const contactsBtn = document.createElement('div');
    const buttonEdit = document.createElement('button');
    buttonEdit.innerHTML = 'Редактировать';
    buttonEdit.classList.add('buttonEdit');
    contactsBtn.appendChild(buttonEdit);
    buttonEdit.addEventListener('click', openModal);

    const buttonRemove = document.createElement('button');
    buttonRemove.innerHTML = 'Удалить';
    buttonRemove.classList.add('buttonRemove');
    contactsBtn.appendChild(buttonRemove);
    buttonRemove.addEventListener('click', (event) => {
      this.remove(id);
      this.onAdd();
    });
    return contactsBtn;
  };

}



const newContacts2 = new ContactsApp();
newContacts2.init();

// newContacts2.edit(1, {name: 'Alex', email: 'alex@mail.ru', address: 'Smirnova', phone:'5098765542'});
// newContacts2.createContacts();
console.log(newContacts2);






// const newUser = new User({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567'});
// const newUser2 = new User({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567', job: 'Office'});
// const newUser3 = new User({email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567', job: 'Office'});
// newUser.edit({email: 'ABCFFFF@mail.ru', name: 'Bob'});
// console.log(newUser.get());

// const newContacts = new Contacts();
// const newContacts3 = new Contacts();

// newContacts.add();
// newContacts.add();
// newContacts.add();
// newContacts.edit({id: 1, address: 'Smirnova', phone:'567765567', job: 'Office'});
// // newContacts.edit({address: 'Smirnova', phone:'567765567'});

// newContacts3.add({name: 'sasha', email: 'ABC@mail.ru', address: 'Smirnova', phone:'567765567'});

// newContacts.addUser(newUser);
// newContacts.addUser(newUser2);
// newContacts.addUser(newUser3);
// console.log(newContacts3.get());
// console.log(newContacts.get());

// // newContacts.remove(3);
// console.log(newContacts.get());

// console.log(newUser);
// console.log(newUser2);
// console.log(newContacts);

// const newContacts2 = new ContactsApp();
// newContacts2.add();
// // newContacts2.edit(0, {name: 'Alex', email: 'alex@mail.ru', address: 'Smirnova', phone:'5098765542'});
// // newContacts2.edit(1, {name: 'Alex', email: 'alex@mail.ru', address: 'Smirnova', phone:'5098765542'});
// // newContacts2.createContacts();
// console.log(newContacts2);