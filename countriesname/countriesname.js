var bar =document.createElement('div')
var display=document.createElement("div")
display.style.display="flex"
display.style.flexWrap="wrap"
display.style.justifyContent="space=around"
var search=document.createTextNode("search: ")
var input=document.createElement("input")
input.style.marginBottom="10px"
input.id="id1"
input.onkeyup=options
bar.appendChild(search)
bar.appendChild(input)
document.body.appendChild(bar)
document.body.appendChild(display)
//var button=document.createElement('button')
//button.type="button"
//button.innerHTML='submit'
//button.id="variantoption"
//button.setAttribute("onclick","options('"+input.id+"','"+button.id+"')")
//bar.appendChild(button)
function options(inputid){
var url=document.getElementById(input.id).value
console.log(url)
display.innerHTML=""
let myurl="https://restcountries.eu/rest/v2/name/"+url+"";  
let myapi=fetch(myurl);
 myapi.then((data)=>{
	return data.json();
})
.then((Reponse)=>{
    console.log(Reponse)
	Reponse.forEach((element)=>{
       var card= document.createElement("div")
       card.setAttribute("class","card")
       card.style.width="18rem"
       const cardBody = document.createElement('div');
	   cardBody.setAttribute('class','card-body');
       const countryName = document.createElement('h1');
	   countryName.setAttribute('class','card-title');
       countryName.textContent = element.name
       var flagpic=document.createElement("img")
       flagpic.setAttribute("class","card-img-top")
       flagpic.src= element.flag
       card.appendChild(flagpic)
       cardBody.appendChild(countryName)
       card.appendChild(cardBody)
       display.appendChild(card)
    });
})
}