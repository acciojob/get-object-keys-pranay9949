//your JS code here. If required.
let obj={
	name:"Pranay",
	age:30,
	city:"New York"
}
Object.prototype.getKeys=()=>{
	let arr=Object.getOwnPropertyNames(obj);
	return arr;
}
console.log(obj.getKeys())
