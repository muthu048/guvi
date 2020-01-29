//table1
var page1=document.createElement("div")
document.body.appendChild(page1)
var ul=document.createElement("table");
page1.appendChild(ul);
var head1=document.createElement("header")
head1.innerText="users"
ul.appendChild(head1)
ul.setAttribute("border", 1);
ul.style.margin="30px"
ul.style.display="inline-block"
var tr1=document.createElement("tr")
ul.appendChild(tr1);
var td1=document.createElement("td")
tr1.appendChild(td1)
var td2=document.createElement("td")
tr1.appendChild(td2)
var td3=document.createElement("td")
tr1.appendChild(td3)
var td4=document.createElement("td")
tr1.appendChild(td4)
let myurl1="https://5cdd0a92b22718001417c19d.mockapi.io/api/users";
let myapi1=fetch(myurl1);
let myurl2="https://5cdd0a92b22718001417c19d.mockapi.io/api/books";
let myapi2=fetch(myurl2);
let myurl3="https://5cdd0a92b22718001417c19d.mockapi.io/api/products";
let myapi3=fetch(myurl3);
let myurl4="https://5cdd0a92b22718001417c19d.mockapi.io/api/doctors";
let myapi4=fetch(myurl4);
Promise.all([myapi1,myapi2,myapi3,myapi4])
 myapi1.then((data1)=>{
	return data1.json();
})
.then((Reponse)=>{
	Reponse.forEach((element)=>{
	var div1=document.createElement("div");
	div1.innerHTML=element.username;
	td1.appendChild(div1);
  })
Reponse.forEach((element)=>{
var div2=document.createElement("div");
 div2.innerHTML=element.id;
td2.appendChild(div2);
 })
Reponse.forEach((element)=>{
var div3=document.createElement("div");
div3.innerHTML=element.realm;
td3.appendChild(div3);
 })
Reponse.forEach((element)=>{
var div4=document.createElement("div");
div4.innerHTML=element.password;
td4.appendChild(div4);
})
});
paginationDiv = document.createElement('div')
paginationDiv.setAttribute('class', 'pagination')
for(let page=1;page<=20;page++){
    let anchor = document.createElement('a')
    anchor.setAttribute('href','#')
    anchor.setAttribute('id', page)
    anchor.setAttribute('onclick', 'updateData('+page+')')
    anchor.innerHTML = page
    paginationDiv.append(anchor)
}
ul.appendChild(paginationDiv)
//table2
var ul1=document.createElement("table");
ul1.setAttribute("border",1)
ul1.style.margin="30px"
ul1.style.display="inline-block"
page1.appendChild(ul1);
var head2=document.createElement("header")
head2.innerText="books"
ul1.appendChild(head2)
var tr2=document.createElement("tr")
ul1.appendChild(tr2);
var td21=document.createElement("td")
tr2.appendChild(td21)
var td22=document.createElement("td")
tr2.appendChild(td22)
var td23=document.createElement("td")
tr2.appendChild(td23)
var td24=document.createElement("td")
tr2.appendChild(td24)

 myapi2.then((data2)=>{
	return data2.json();
})
.then((Reponse)=>{
	Reponse.forEach((element)=>{
	var div21=document.createElement("div");
    div21.innerHTML=element.name;
	td21.appendChild(div21);
  })
Reponse.forEach((element)=>{
var div22=document.createElement("div");
 div22.innerHTML=element.id;
td22.appendChild(div22);
 })
Reponse.forEach((element)=>{
var div23=document.createElement("div");
div23.innerHTML=element.cover;
td23.appendChild(div23);
 })
Reponse.forEach((element)=>{
var div24=document.createElement("div");
div24.innerHTML=element.price;
td24.appendChild(div24);
})
});
//table3
var page2=document.createElement("div")
document.body.appendChild(page2)
var ul2=document.createElement("table");
page2.appendChild(ul2);
var head3=document.createElement("header")
head3.innerText="products"
ul2.appendChild(head3)
ul2.setAttribute("border", 1);
ul2.style.margin="30px"
ul2.style.display="inline-block"
var tr3=document.createElement("tr")
ul2.appendChild(tr3);
var td31=document.createElement("td")
tr3.appendChild(td31)
var td32=document.createElement("td")
tr3.appendChild(td32)
var td33=document.createElement("td")
tr3.appendChild(td33)
var td34=document.createElement("td")
tr3.appendChild(td34)

 myapi3.then((data3)=>{
	return data3.json();
})
.then((Reponse)=>{
	Reponse.forEach((element)=>{
	var div31=document.createElement("div");
	div31.innerHTML=element.productname;
	td31.appendChild(div31);
  })
Reponse.forEach((element)=>{
var div32=document.createElement("div");
 div32.innerHTML=element.id;
td32.appendChild(div32);
 })
Reponse.forEach((element)=>{
var div33=document.createElement("div");
div33.innerHTML=element.price;
td33.appendChild(div33);
 })
Reponse.forEach((element)=>{
var div34=document.createElement("div");
div34.innerHTML=element.password;
td34.appendChild(div34);
})
});
paginationDiv = document.createElement('div')
paginationDiv.setAttribute('class', 'pagination')
for(let page=1;page<=20;page++){
    let anchor = document.createElement('a')
    anchor.setAttribute('href','#')
    anchor.setAttribute('id', page)
    anchor.setAttribute('onclick', 'updateData('+page+')')
    anchor.innerHTML = page
    paginationDiv.append(anchor)
}

//table4
var ul4=document.createElement("table");
ul4.setAttribute("border",1)
ul4.style.margin="30px"
ul4.style.display="inline-block"
page2.appendChild(ul4);
var head4=document.createElement("header")
head4.innerText="doctors"
ul4.appendChild(head4)
var tr4=document.createElement("tr")
ul4.appendChild(tr4);
var td41=document.createElement("td")
tr4.appendChild(td41)
var td42=document.createElement("td")
tr4.appendChild(td42)
var td43=document.createElement("td")
tr4.appendChild(td43)
var td44=document.createElement("td")
tr4.appendChild(td44)

 myapi4.then((data4)=>{
	return data4.json();
})
.then((Reponse)=>{
	Reponse.forEach((element)=>{
	var div41=document.createElement("div");
    div41.innerHTML=element.name;
	td41.appendChild(div41);
  })
Reponse.forEach((element)=>{
var div42=document.createElement("div");
 div42.innerHTML=element.id;
td42.appendChild(div42);
 })
Reponse.forEach((element)=>{
var div43=document.createElement("div");
div43.innerHTML=element.createAt;
td43.appendChild(div43);
 })
Reponse.forEach((element)=>{
var div44=document.createElement("div");
div44.innerHTML=element.price;
td44.appendChild(div44);
})
});








