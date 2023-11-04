
function firstNonRepeatedChar(str) {

	// Write your code here  aabbcd
	let regx=/^[a-z]+$/;
	let obj={};
	if(str.length<1000 && str.match(regx)){
		 for(let i=0;i<str.length;i++){
	   if(obj[str[i]]!==undefined){
		   obj[str[i]]+=1;
	   }
		   else{
			   obj[str[i]]=1;
		   }
	   }
	   for(let i=0;i<str.length;i++){
		   if(obj[str[i]]==1){
			   return str[i];
		   }
	   }
	   
	}
	return null;
   }
const input = prompt("Enter a string");
window.alert(firstNonRepeatedChar(input));

