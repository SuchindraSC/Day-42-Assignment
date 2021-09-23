// UC 1
class AddressBookJs {

    constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
    }
   
    // UC 2
    get firstName() { return this._firstName; }
    set firstName(firstName) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (nameRegex.test(firstName))
    this._firstName = firstName;
    else
    throw "Invalid first Name";
    }
   
    get lastName() { return this._lastName; }
    set lastName(lastName) {
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z\\s]{2,}$");
    if (nameRegex.test(lastName))
    this._lastName = lastName;
    else
    throw "Invalid last Name";
    }
   

    get address() { return this._address; }
    set address(address) {
    let addressRegex = RegExp("^[0-9 A-Z]{1}[A-Z a-z 0-9]{1,}$");
    if (addressRegex.test(address))
    this._address = address;
    else
    throw "Invalid address ";
    }
   

    get city() { return this._city; }
    set city(city) {
    let cityRegex = RegExp("^[A-Za-z]{4,}$");
    if (cityRegex.test(city))
    this._city = city;
    else
    throw "Invalid city ";
    }
   

    get state() { return this._state; }
    set state(state) {
    let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
    if (stateRegex.test(state))
    this._state = state;
    else
    throw "Invalid state";
    }
   

    get zip() { return this._zip; }
    set zip(zip) {
    let zipRegex = RegExp("^[1-9]{1}[0-9]{5}$");
    if (zipRegex.test(zip))
    this._zip = zip;
    else
    throw "Invalid zip ";
    }
   

    get phoneNumber() { return this._phoneNumber; }
    set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("^[1-9]{1}[0-9]{9}$");
    if (phoneRegex.test(phoneNumber))
    this._phoneNumber = phoneNumber;
    else
    throw "Invalid phone number";
    }
   
    get email() { return this._email; }
    set email(email) {
    let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
    if (emailRegex.test(email))
    this._email = email;
    else
    throw "Invalid email";
    }
   
    // method
    toString() {
    return "First Name: "+this.firstName+"\nLast Name: "+this._lastName+"\nAddress: "+this._address+"\nCity: "+this._city+"\nState: "+this._state+"\nZip: "+this._zip+"\nPhone Number: "+this._phoneNumber+"\nEmail Id: "+this._email
   // UC 3
    let contactDetailsArray = new Array();
   
    try {
        contactDetailsArray.push(new AddressBookJs("Suchindra", "Chitnis", "MIDC", "Bhandup", "Maharashtra", "400086", "9999999999", "asdfg.uio@gmail.com"));
        contactDetailsArray.push(new AddressBookJs("Adarsh", "Pandith", "Banashankari", "Bangalore", "Karnataka", "500060", "88888888888", "qwerty.ghj@gmail.com"));
        contactDetailsArray.push(new AddressBookJs("Sreerag", "Nair", "2nd Cross", "Thiruvananthapuram", "Kerala", "600070", "7777777777", "zxcvb.mkop@gmail.com"));
   }
   catch (e) {
        console.error(e);
   }
   
   function Display(contactsArray) {
    contactsArray.forEach((contact) => console.log(contact.toString() + "\n"));
   }
   Display(contactDetailsArray);
   
   
   // UC 4
   let index = contactDetailsArray.findIndex(contact => contact.firstName == "Raja");
   contactDetailsArray[index].lastName = "Shekar";
   console.log("Address book after update");
   Display(contactDetailsArray);
   
   
   // UC 5 
   contactDetailsArray.splice(index, 1);
   console.log("Address book after deletion");
   Display(contactDetailsArray);
   
   
   // UC 6
   let totalContacts = 0;
   function getCount(contactDetailsArray) {
    if (contactDetailsArray != null)
    totalContacts++;
    return totalContacts;
   }
   contactDetailsArray.reduce(getCount, 1);
   console.log("Number of contacts in AddressBook : " + totalContacts);
   
   
   // UC7 
   let personContact = new AddressBookJs("Porvi", "Shetty", "2nd cross", "Mandya", "Karnataka", "560078", "9876543210", "porvi@gmail.com");
   if (contactDetailsArray.some(e => e._firstName == "Porvi"))
    console.log("Contact already exists!");
   else {
     contactDetailsArray.push(personContact);
     console.log("Contact added successfully");
   }
    console.log("Array: ");
    Display(contactDetailsArray);
   
   // UC 8
   let findByCity = contactDetailsArray.filter((e) => e._city == 'Mandya');
   console.log("Contacts by City: ");
   Display(findByCity);
   
   let findByState = contactDetailsArray.filter((e) => e._state == 'Karnataka');
   console.log("Contacts by State: ");
   Display(findByState);
   
   
   // UC 9
   console.log("Contacts by City: ");
   Display(contactDetailsArray.filter(contact => contact._city == "Mandya")
    .map(contact => contact.firstName));
   
   console.log("Contacts by State: ");
   Display(contactDetailsArray.filter(contact => contact._state == "Karnataka")
    .map(contact => contact._firstName));
   
   
   // UC 10
   console.log("Count by City: ");
   console.log(contactDetailsArray.filter(contact => contact.city == "Mandya")
    .reduce((count, contact) => contact.firstName ? ++count : count, 0));
   
   console.log("Count by State: ");
   console.log(contactDetailsArray.filter(contact => contact.state == "Karnataka")
    .reduce((count, contact) => contact.firstName ? ++count : count, 0));
   
   // UC 11
   Display(contactDetailsArray.sort((a, b) => a.firstName.localeCompare(b.firstName)));
   
   
   // UC 12
   console.log("Contact after sorting by city");
   Display(contactDetailsArray.sort((a, b) => a.city.localeCompare(b.city)));
   
   console.log("Contact after sorting by state");
   Display(contactDetailsArray.sort((a, b) => a.state.localeCompare(b.state)));
   
   console.log("Contact after sorting by zip");
   Display(contactDetailsArray.sort((a, b) => a.zip.localeCompare(b.zip)));
    }
}