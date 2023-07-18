console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async () => {
  const promiseWifeBringingTickets = new Promise((resolve, reject) => {
    setTimeout(() => resolve("ticket"), 3000);
  });

  const getPopcorn = new Promise((resolve, reject) => resolve("popcorn"));

  const addButter = new Promise((resolve, reject) => resolve("butter"));

  let ticket = await promiseWifeBringingTickets;
  console.log(`wife: I have the ${ticket}`);
  console.log("husband: We should go in");
  console.log("wife: No, I am hungry");

  let popcorn = await getPopcorn;
  console.log(`husband: I got some ${popcorn}`);
  console.log("husband: We should go in");
  console.log("wife: I need butter on my popcorn");

  let butter = await addButter;
  console.log(`husband: I got some ${butter} on popcorn`);
  console.log(`husband: Anything else, darling?`);
  console.log(`wife: Let's go, we are getting late`);
  console.log(`husband: Thank you for the reminder *grins*`);

  const getColdDrinks = new Promise((resolve, reject) => resolve("cold drinks"));

  let drinks = await getColdDrinks;
  console.log(`husband: I got some ${drinks}`);
  console.log(`husband: Now we have everything`);

  return ticket;
};

preMovie().then((m) => console.log(`Person3: show ${m}`));

console.log("person4: shows ticket");
console.log("person5: shows ticket");
