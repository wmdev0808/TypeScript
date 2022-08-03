const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

console.log(fetchedUserData?.job?.title);

const userInput = undefined;

const storedData = userInput ?? "DEFAULT";

console.log(storedData);
