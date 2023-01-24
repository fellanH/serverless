exports.handler = async (event, context) => {
  try {
    console.log(event.body);
    console.log("init-number-2");
    return {
      statusCode: 200,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
