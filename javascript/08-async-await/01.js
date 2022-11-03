function fakeBackend() {
  const messages = [
    "I fix bugs in production.",
    "Bugs are just features that were unthought of previously.",
    "I decided life was too easy, so I started coding an app.",
  ];
  return new Promise((resolve) => {
    setTimeout(() => {
      const msgIndex = Math.floor(Math.random() * messages.length);
      resolve(messages[msgIndex]);
    }, 5000);
  });
}

// fakeBackend is a function that returns a promise
// instead of using .then() and .catch() to interact with it
// we are going to use async/await and wrap it in a try/catch block.

const main = () => {
  console.warn(
    "You'll need to change this function declaration to allow you to use await"
  );
  const msg = fakeBackend();
  console.log(`Message of the day: ${msg}`);
};

main();
