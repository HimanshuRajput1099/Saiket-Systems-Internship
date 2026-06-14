let contacts =
JSON.parse(localStorage.getItem("contacts")) || [];

displayContacts();

function addContact(){

    const name =
    document.getElementById("name").value;

    const phone =
    document.getElementById("phone").value;

    const email =
    document.getElementById("email").value;

    if(name === "" || phone === "" || email === ""){
        alert("Please fill all fields");
        return;
    }

    contacts.push({
        name,
        phone,
        email
    });

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    displayContacts();
}

function displayContacts(filtered = contacts){

    const contactList =
    document.getElementById("contactList");

    contactList.innerHTML = "";

    filtered.forEach((contact,index)=>{

        contactList.innerHTML += `
        <div class="contact">
            <h3>${contact.name}</h3>
            <p>Phone: ${contact.phone}</p>
            <p>Email: ${contact.email}</p>
            <button onclick="deleteContact(${index})">
                Delete
            </button>
        </div>
        `;
    });
}

function deleteContact(index){

    contacts.splice(index,1);

    localStorage.setItem(
        "contacts",
        JSON.stringify(contacts)
    );

    displayContacts();
}

function searchContact(){

    let search =
    document.getElementById("search")
    .value
    .toLowerCase();

    let filtered =
    contacts.filter(contact =>
        contact.name.toLowerCase().includes(search)
    );

    displayContacts(filtered);
}