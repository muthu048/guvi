let table = document.createElement('table')
table.setAttribute('class', 'tableborder')
let tr = document.createElement('tr')
tr.setAttribute('class', 'tdformat')
let td1 = document.createElement('td')
td1.innerHTML = 'ID'
let td2 = document.createElement('td')
td2.innerHTML = 'Name'
let td3 = document.createElement('td')
td3.innerHTML = 'Email'
tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
table.appendChild(tr)
document.body.appendChild(table)


function updateData(pageNo){
d a
table.innerHTML=""
let myapi1=fetch("https://5cdd0a92b22718001417c19d.mockapi.io/api/users?page="+pageNo+"&limit=5");
 myapi1.then((data1)=>{
	return data1.json();
})
.then((data)=>{
data.forEach(element => {
    let tr = document.createElement("tr")
    let td1 = document.createElement('td')
    td1.innerHTML = element.id;
    let td2 = document.createElement('td')
    td2.innerHTML = element.username;
    let td3 = document.createElement('td')
    td3.innerHTML = element.email
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    table.appendChild(tr)
    document.body.appendChild(table)
});
});
}
paginationDiv = document.createElement('div')
paginationDiv.setAttribute('class', 'pagination')
for(let page=1;page<=20;page++){
    let anchor = document.createElement('button')
    anchor.setAttribute('id', page)
    anchor.setAttribute('onclick', 'updateData('+page+')')
    anchor.innerHTML = page
    paginationDiv.append(anchor)
}
document.body.appendChild(paginationDiv)