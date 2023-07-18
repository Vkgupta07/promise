console.log("person1: shows ticket");
console.log("person2: shows ticket");

const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("ticket");
  }, 3000);
});

const getPopcorn = promiseWifeBringingTickets.then((ticket) => {
  console.log("wife: I have the ticket");
  console.log("husband: We should go in");
  console.log("wife: No, I am hungry");
  return new Promise((resolve, reject) => {
    resolve(`${ticket} popcorn`);
  });
});

const getButter = getPopcorn.then((popcorn) => {
  console.log("husband: I got some popcorn");
  console.log("husband: We should go in");
  console.log("wife: I need butter on my popcorn");
  return new Promise((resolve, reject) => {
    resolve(`${popcorn} butter`);
  });
});

const getColdDrinks = getButter.then((butter) => {
  console.log(butter);
  console.log("husband: Anything else, darling?");
  console.log("wife: Let's get some cold drinks");
  return new Promise((resolve, reject) => {
    resolve(`${butter} cold drinks`);
  });
});

getColdDrinks.then((drinks) => {
  console.log(drinks);
});

console.log("person4: shows ticket");
console.log("person5: shows ticket");
