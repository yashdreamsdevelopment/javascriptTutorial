// const car_manufacturer = "Audi";
// const car_model = "07";
// const price = 50000;

// function allWheeldrive() {
//   document.write("This car comes with Quattrao all-wheel drive");
// }

// allWheeldrive();

// const car = {
//   car_manufacturer: "Audi",
//   car_model: "Q8",
//   price: 50000,
//   allWheelDrive: function () {
//     return document.write("This car comes with four wheel drive");
//   },
// };

// document.write("<h2>" + car.car_manufacturer + "</h2>");
// car.allWheelDrive();

function cars(car_manufacturer, car_model, price) {
  this.car_manufacturer = car_manufacturer;
  this.car_model = car_model;
  this.price = price;

  this.allWheelDrive = function () {
    document.write("This car comes with four wheel drive");
  };
}

const car1 = new cars("Audi", "Q7", 50000);
// car1.allWheelDrive();

const car2 = new cars("BMW", "X7", 40000);
// document.write(car2.car_manufacturer);

// adding a property later on to the object
cars.car_color = "Black";
document.write(cars.car_color);

// adding a method later on to the object
cars.newFun = function () {
  return "Function successfully added";
};
document.write("<h1>" + cars.newFun() + "</h1>");

// deleting a method/property later on from the object
delete cars.car_model;
document.write("<h2>" + cars.car_model + "</h2>");

cars.price = "70000";
document.write("<h3>" + cars.price + "</h3>");
document.write("<h3>" + typeof cars.price + "</h3>");
