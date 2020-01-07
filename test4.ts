let obj ={};
let list = [];
function listoobj(list){
for(const [key, value] of list)
{
	obj[key]=value;
}
alert(JSON.stringify(obj));
}
