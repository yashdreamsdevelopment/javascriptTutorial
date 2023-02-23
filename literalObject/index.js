const rect1 = {
  length: 5,
  breadth: 10,

  getArea: function () {
    return this.length * this.breadth;
  },
  getPerimeter: function () {
    return 2 * (this.length + this.breadth);
  },
};

document.write("<h2> The length of Rectangle is: " + rect1.length + "</h2>");
document.write("<h2> The breadth of Rectangle is: " + rect1.breadth + "</h2>");
document.write("<h2> The Area of Rectangle is: " + rect1.getArea() + "</h2>");
document.write(
  "<h2> The Perimeter of Rectangle is: " + rect1.getPerimeter() + "</h2>"
);
