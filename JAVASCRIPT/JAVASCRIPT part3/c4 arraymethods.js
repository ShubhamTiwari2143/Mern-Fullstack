//push() method:-add to end
let cars=["bmw","audi","xuv"];
cars.push("thar");
console.log(cars);

//unshift() method:-add to start
cars.unshift("scorpio");
console.log(cars);

//pop() method:-delete from end and returns it
cars.pop();
console.log(cars);

//Shift() method:- delete from start and returns it
cars.shift();
console.log(cars);

//indexOf() method:-returns index of something
 let primary=['red','yellow','blue'];
 console.log(primary.indexOf('yellow'));//1
 console.log(primary.indexOf('green'));//-1

 //includes:-searches for a value if value is found then return true otherwise false
 console.log(primary.includes('red'));//true
 console.log(primary.includes('green'));//false

 //concat() method:-merge 2 arrays
 let secondary=['orange','green','violet'];
 console.log(primary.concat(secondary));

 //reverse() method:-reverse an array
 console.log(secondary.reverse());

 //slice() method:-return copies a portion of an array isme orignal array same rhta hai phle ki trah 
 let colors=['red','yellow','blue','orange','pink','white'];
 console.log(colors.slice());
 console.log(colors.slice(2));
 console.log(colors.slice(2,3));
 console.log(colors.slice(-2));


 //splice() method:-removes/replaces/add elements in place ye original array ko change krta hai
 //syntax- splice(start,deleteCount,item0...itemN)
 colors.splice(4);//ye 4th index se last tak ka element remove krega
 console.log(colors);
 colors.splice(1,2);//ye 1st index se 2 element remove krega
 console.log(colors);
 colors.splice(0,0,'grey','skyblue');//add two value from oth index
 console.log(colors);
 colors.splice(1,1,'brown');//replace 1st index value
 console.log(colors);

 //sort() method:- sorts an array in asc or desc ye kewal string aur character par kaam krta hai
 console.log(colors.sort());

  let num=[23,100,45,12,67];
  console.log(num.sort());//sort method numbers pr kaam nhi krta 
