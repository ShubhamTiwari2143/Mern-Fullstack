//this keyword refers to an object that is executing the current piece of code
const student = {
  name: "Shubham",
  age: 21,
  java: 78,
  python: 87,
  ruby: 90,
  getAvg() {
    let avg = (this.java + this.python + this.ruby) / 3;
    console.log(`${this.name} got avg marks=${avg}`);
  },
};
student.getAvg();
