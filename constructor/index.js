// SYNTAX:
// const objName = new Object()l

const react2 = new Object(); // just like const react2 = {}
react2.length = 5;
react2.width = 10;

react2.getArea = function () {
  return this.length * this.width;
};
react2.getPreimeter = function () {
  return this.length * this.width;
};

function react3(length, width) {
  this.length = length;
  this.width = width;
  this.getArea = function () {
    return length * width;
  };
  this.getPrimeter = function () {
    return 2 * (length + width);
  };
}

const rect1 = new react3(10, 6);

document.write(rect1.length);
document.write(rect1.width);
document.write("<h1>The Area of rectangle is: " + rect1.getArea() + "</h1>");
document.write(
  "<h1>The Perimeter of rectangle is: " + rect1.getPrimeter() + "</h1>"
);

const rect5 = new react3(50, 6);

document.write(rect5.length);
document.write(rect5.width);
document.write("<h1>The Area of rectangle is: " + rect5.getArea() + "</h1>");
document.write(
  "<h1>The Perimeter of rectangle is: " + rect5.getPrimeter() + "</h1>"
);
