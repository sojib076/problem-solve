
// 1.Task: Array Filtering and Mapping
const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Carol", age: 22, gender: "female" },
    { name: "David", age: 35, gender: "male" },
    { name: "Eve", age: 28, gender: "female" }
  ];

  

  const filtergender = people.filter(person => person.gender === 'male');

    const mapNames = filtergender.map(person => person.name);

  
// 2.Task: Object Manipulation

const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Little Prince", author: "Antoine de Saint-Exupéry", year: 1943 },
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 }
  ];

  function getBookTitles(bookArray) {
    return bookArray.map(book => book.title);
  }

  
  const bookTitles = getBookTitles(books);


function square(num) {
    return num * num;
  }
  
  
  function double(num) {
    return num * 2;
  }
  
  
  function addFive(num) {
    return num + 5;
  }
  

  function composedFunction(num) {
    return addFive(double(square(num)));
  }
  
  
  const result = composedFunction(3);
 
  


// 4.Task: Sorting Objects
const cars = [
    { make: "Toyota", model: "Corolla", year: 2020 },
    { make: "Honda", model: "Civic", year: 2018 },
    { make: "Ford", model: "Mustang", year: 2015 },
    { make: "Chevrolet", model: "Camaro", year: 2019 },
    { make: "Tesla", model: "Model 3", year: 2021 }
  ];
  
  function sortCarsByYear(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
  }
  
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);


// 5.Task: Find and Modify

const findAndmodify = (array,name,age) => {
    const person = array.find(person => person.name === name);
    if (person) {
      person.age = age;
        return array;
    }else{
        return "Person not found";
    }

  
  }


    const updatedPeople = findAndmodify(people, "Alice", 260);
    console.log(updatedPeople);
