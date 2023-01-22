console.log("main.js init");

const callFunction = async () => {
  try {
    const response = await fetch("/.netlify/functions/function");
    const data = await response.text();
    console.log(data);
    const h1 = document.querySelector("h1");
    h1.textContent = data;
  } catch (err) {
    console.error(err);
  }
};

callFunction();
