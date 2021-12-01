var http = require("http");

//const user = { name: "Nika" };
const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday ",
  "Friday ",
  "Saturday",
  "Sunday "
];

//create a server object:
http
  .createServer(function (req, res) {
    const cuttentDayIndex = new Date().getDay();
    const currentDay = days[cuttentDayIndex - 1];

    var name = new URL("https://codesandbox.io/dashboard/home?name=Nika");
    res.write(`Hello ${name.searchParams.get("name")}, today is ${currentDay}`);

    res.end(); //end the response
  })
  .listen(8080); //the server object listens on port 8080
