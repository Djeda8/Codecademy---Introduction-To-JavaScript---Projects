const menu = {
  //Property that contains the dishes available in each course
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],
  
    //Getter and setter methods for each properties.
    get appetizers() {
     return this._appetizers;
    },
    set appetizers(appetizersIn) {
     this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains
    },
    set mains(mainsIn) {
       this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertsIn) {
      this._desserts = dessertsIn;
    },
  },
  
  //Getter method for the _courses property.
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
},
  

  //Method to be used to add a new dish.
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    
    this._courses[courseName].push(dish);
  },
  
//Method to get a random dish from a course
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  
  //Method to generate a three-course meal for us.
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    
    return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
  },
};

//adding dishes
menu.addDishToCourse('appetizers', 'Cobb Salad', 5.00);
menu.addDishToCourse('appetizers', 'Garden Salad', 4.50);
menu.addDishToCourse('appetizers', 'Breadsticks', 3.00);

menu.addDishToCourse('mains', 'Steak', 12.00);
menu.addDishToCourse('mains', 'Tacos', 6.00);
menu.addDishToCourse('mains', 'Meatloaf', 11.50);

menu.addDishToCourse('desserts', 'Vanilla Ice Cream', 3.20);
menu.addDishToCourse('desserts', 'Peach Cobbler', 4.00);
menu.addDishToCourse('desserts', 'Slice of Cake', 5.50);

//generating a meal
let meal = menu.generateRandomMeal();

//printing result
console.log(meal);