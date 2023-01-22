console.log("main.js init");

const callFunction = async () => {
  const url = "/.netlify/functions/function";
  try {
    const response = await fetch(url);
    const data = await response.text();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};

callFunction();
