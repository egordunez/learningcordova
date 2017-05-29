
document.getElementById("createContact").addEventListener("click", createContact);
document.getElementById("findContact").addEventListener("click", findContacts);
document.getElementById("deleteContact").addEventListener("click", deleteContact);

function createContact() {

	//list of numbers
	var phoneNumbers = [];
	phoneNumbers[0] = new ContactField('work', '768-555-1234', false);
	phoneNumbers[1] = new ContactField('mobile', '999-555-5432', true); // preferred number
	phoneNumbers[2] = new ContactField('home', '203-555-7890', false);
	//creating contact to save
	var myContact = navigator.contacts.create();
   	myContact.displayName = "Test Contact";
   	myContact.phoneNumbers = phoneNumbers;
   	
   	//saving
   	myContact.save(contactSuccess, contactError);
    
   	function contactSuccess() {
      alert("Contact is saved!")
   }
	
   function contactError(message) {
      alert('Failed because: ' + message);
   }
	
}

function findContacts() {
   var options = new ContactFindOptions();
   options.filter = "";
   options.multiple = true;

   fields = ["displayName"];
   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);
    
   function contactfindSuccess(contacts) {
      for (var i = 0; i < contacts.length; i++) {
         alert("Display Name = " + contacts[i].displayName);
      }
   }
	
   function contactfindError(message) {
      alert('Failed because: ' + message);
   }
	
}

function deleteContact() {

   var options = new ContactFindOptions();
   options.filter = "Test User";
   options.multiple = false;
   fields = ["displayName"];

   navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

   function contactfindSuccess(contacts) {

      var contact = contacts[0];
      contact.remove(contactRemoveSuccess, contactRemoveError);

      function contactRemoveSuccess(contact) {
         alert("Contact Deleted");
      }

      function contactRemoveError(message) {
         alert('Failed because: ' + message);
      }
   }

   function contactfindError(message) {
      alert('Failed because: ' + message);
   }
	
}