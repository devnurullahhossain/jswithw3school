//create map
const fruits = new Map([
  ["Apple", 500],
  ["Banana", 300],
  ["Oranges", 200],
]);
// create a Map
const flower = new Map();
// Set Map Values
flower.set("Rose", 400);
flower.set("Water Lily", 300);
flower.get("Rose");
console.log(flower);
console.log(flower.get("Rose"));
console.log(String(Date()));

function deleteItem() {
  alert("Delete this button");
}

sleep = (name, time) => {
  console.log(name + " " + "is sleeping from " + " " + time);
};
sleep("Rahim", "10 Am");

nowGo = (name, time, place) => {
  console.log(name + " " + "is going " + " " + place + " " + "from" + " " + time);
};
nowGo("Mr: x", "11 AM", "London");
