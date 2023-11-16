const person = {
  name: "Jack William",
  age: 17,
  job: "facebook",
  address: "kochu khet",
  phone: "0234875",
  friends: ["tom", "dick", "harry"],
  gfName: "Emma Watson",
};


const {phone} = person;

console.log(person.address);
console.log(person.friends);
console.log(phone);


const {gfName,address,friends} = person;
console.log(gfName);
console.log(address);
console.log(friends);
