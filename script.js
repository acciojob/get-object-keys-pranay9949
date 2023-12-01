//your JS code here. If required.
let obj={
	name:"Pranay"
}
Object.prototype.getKeys=()=>{
	let arr=Object.getOwnPropertyNames(obj);
	return arr;
}
console.log(obj.getKeys())
