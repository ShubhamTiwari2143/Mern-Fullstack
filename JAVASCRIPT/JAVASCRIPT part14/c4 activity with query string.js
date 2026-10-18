let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let collegesArr = await getColleges(country);
  show(collegesArr);
});
function show(collegesArr) {
  let list = document.querySelector("#list");
  list.innerText="";
  for (coll of collegesArr) {
    let li = document.createElement("li");
    li.innerText = coll.name;
    list.appendChild(li);
  }
}
async function getColleges(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (error) {
    console.log("error:", error);
    return [];
  }
}
