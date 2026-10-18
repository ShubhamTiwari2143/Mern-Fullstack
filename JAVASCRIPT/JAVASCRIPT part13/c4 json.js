//JSON-javascript object notation
//accessing data from JSON

//1)JSON.parse(data)method-to parse a string data into a js object
//2)JSON.stringify(json)method- to parse a js object data into JSON

let jsonRes =
  '{"fact":"Approximately 1/3 of cat owners think their pets are able to read their minds.","length":78}';

let validRes = JSON.parse(jsonRes);
console.log(validRes.fact);

let student = {
  name: "shubham",
  marks: 95,
};
console.log(JSON.stringify(student));
