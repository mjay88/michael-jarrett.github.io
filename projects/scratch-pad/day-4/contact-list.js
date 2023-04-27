// #!/usr/bin/env node

"use strict";

/**
 * 4: Contact List
 *
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast)
 *     that returns a contact object.
 *
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *
 *  b. Create a factory Function called makeContactList that returns an Object
 *     that manages contacts. The contact-list object should have the following methods:
 *
 *   => this function returns an object
 *
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and
 *         returns the contact object if found in the contacts-list, or,
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from
 *         the contact-list. look up splice method
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
 *         return a String formated with all the full-names of the separated
 *         with a line-break, like so:
 *
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  let contact = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast,
  };

  return contact;
}

function makeContactList() {
  /*
   * You need something here to hold contacts. See length api for a hint:
   */
  var contacts = [];

  return {
    // we implemented the length api for you //
    length: function () {
      return contacts.length;
    },
    //add contact, should take a contact and add it to the contacts array
    addContact: function (contact) {
      return contacts.push(contact);
    },
    //takes a full-name String, like 'Max Gaudin', and
    //returns the contact object if found in the contacts-list, or,
    //undefined if the fullName does not match any contacts in the list.
    findContact: function (fullName) {
      //iterate through contacts array
      for (let el of contacts) {
        //concat the first and last name of current element, assign to variable
        let contactFullname = el.nameFirst + " " + el.nameLast;
        //if this variable matches given arguement
        if (contactFullname === fullName) {
          //return current element
          return el;
        }
      }
      //otherwise return undefined
      return undefined;
    },
    //removeContact(contact): takes a contact object to be removed from
    //the contact-list. look up splice method
    removeContact : function (contact){
        //iterate through contacts
        for(let el of contacts){
        //if arguement name or id equals that of one of our elements
         if(contact.id === el.id){
        //use the splice method to remove it from the contact array
         contacts.splice(el, 1);
         }
        }
    },
//add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should
//return a String formated with all the full-names of the separated
//with a line-break, like so:
//i : contact list
//o : a string correctly formatted
//c : the last string should not be followed by a new line character
//e : how to get rid of last new line character?
        printAllContactNames : function(){
            //create sting to log at end
            let contactListToPrint = "";
            //iterate through contacts
            // for(let el of contacts){
            // //use string iterpolation to get first and last name
            // console.log(`${el.nameFirst} ${el.nameLast}
            // `)
            // }
            //iterate through contacts
            for(let el of contacts){
            //add all contact names to contactListToPrint w/ new line character
            contactListToPrint += el.nameFirst + " " + el.nameLast + "\n";
            }
            //log contactListToPrint removing the very last string index
            return contactListToPrint.slice(0, -1);

        }
  };
}

// YOUR CODE GOES ABOVE HERE //

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.makeContact = makeContact;
  module.exports.makeContactList = makeContactList;
}
