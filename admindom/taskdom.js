var myform=document.createElement("form")
var br = document.createElement('br')
var product=document.createTextNode('product: ');
var input = document.createElement('input')
input.type='text'
myform.appendChild(product)
br=document.createElement('br')
myform.appendChild(br)
myform.appendChild(input)
br=document.createElement('br')
myform.appendChild(br)
var price=document.createTextNode('price: ');
var input = document.createElement('input')                                                                        
input.type='text'
myform.appendChild(price)
br=document.createElement('br')
myform.appendChild(br)
myform.appendChild(input)
br=document.createElement('br')
myform.appendChild(br)
var variant=document.createTextNode('variant: ');
var input = document.createElement('input')                                                                        
input.type='text'
input.id='variant'
myform.appendChild(variant)
br=document.createElement('br')
myform.appendChild(br)
myform.appendChild(input)
br=document.createElement('br')
myform.appendChild(br)
var button=document.createElement('button')
button.type="button"
button.innerHTML='submit'
button.id="variantoption"
button.setAttribute("onclick","options('"+input.id+"','"+button.id+"')")
myform.appendChild(button)
document.body.appendChild(myform)
function options(optionsid,buttonid){
    br=document.createElement('br')
    var defoption= (document.getElementById(optionsid).value).split(',')
    console.log(defoption)
    if(defoption!=" "){
        defoption.forEach(element => {
            if (element!=""){
                var ti= document.createTextNode(element)
                var input= document.createElement('input')
                input.id =element
                input.type="text"
                br =document.createElement('br')
                myform.appendChild(ti)
                myform.appendChild(br)
                myform.appendChild(input)
            }
            
        });
        var br = document.createElement('br')
        var button=document.createElement('button')
        button.type="button"
        button.innerHTML="possibilities"
        button.setAttribute('onclick',"generateoptions('"+deoption+"')")
        myform.appendChild(button)
        document.body.appendChild(myform)



    }

}
function generateoptions(defoption){
    var variants=[]
    defoption=defoption.split(',')
    defoption.forEach(element=>{
        variants=variants.concat((document.getElementById(element).value).split(','))
    })
    
}