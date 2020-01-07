let obj ={};
let list = [];
function sepobj(list){
obj[list[0]] = list[list.length - 1];
alert(JSON.stringify(obj));
}
