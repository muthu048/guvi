[
    {
         "productName" : "T-Shirt",
         "basePrice" : 500,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Size",
                   "values" : ["xl","xxl"]
              },
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "size" : "xl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "size" : "xl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 70
              },
              {
                   "size" : "xxl",
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 80
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 90
              },
              {
                   "size" : "xxl",
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 100
              }
         ]
    },
    {
         "productName" : "Saree",
         "basePrice" : 5000,
         "image" : "http://placehold.it/200x200",
         "description" : "Des",
         "varients" : [
              {
                   "type" : "Meterial",
                   "values" : ["cotton","silk"]
              },
              {
                   "type" : "Color",
                   "values" : ["yellow","red"]
              }
         ],
         "varientDetails" : [
              {
                   "meterial" : "cotton",
                   "color" : "red",
                   "addOnprice" : 30
              },
              {
                   "meterial" : "cotton",
                   "color" : "yellow",
                   "addOnprice" : 40
              },
              {
                   "meterial" : "silk",
                   "color" : "red",
                   "addOnprice" : 50
              },
              {
                   "meterial" : "silk",
                   "color" : "yellow",
                   "addOnprice" : 60
              }
         ]
    }
]
var randword=[];
var total_count=0;
var hang_count=0;
var present=[];
var wincounter=0;
function generate_div() {
var body1 = document.getElementsByTagName("body")[0];
var div6 = document.createElement("div");
div6.id='divmain';
div6.style.margin='10px';
body1.appendChild(div6);

var div1 = document.createElement("div");
div1.id='divsubmain';
div1.style.margin='10px';
div1.style.display="inline-block";
div6.appendChild(div1);
for(i=0;i<3;i++){
var div2 = document.createElement("div");
div2.id='divsub'+i;
div2.style.margin='10px';
div2.style.display="inline-block";
div2.style.border="2px solid";
div1.appendChild(div2);

var div3 = document.createElement("div");
div3.id='imagediv'+i;
div3.innerHTML='<img src=dum250.png>';
div3.style.margin='5px';
div3.style.border="1px solid";
div2.appendChild(div3);
var div4 = document.createElement("div");
div4.id='textparadiv'+i;
div4.style.margin='5px';
div4.style.border="1px solid";
div4.innerHTML='  <h2>&nbsp;'+jsdata[0][Object.keys(jsdata[0])[0]][i]+'</h2> <br><p>&nbsp;&nbsp;&nbsp;Cost=RS'+jsdata[0][Object.keys(jsdata[0])[1]][i]+' </p> <br><p>&nbsp;&nbsp;&nbsp;The best garments with varied styles</p> <br> &nbsp;&nbsp;&nbsp;<select><option>L</option><option>XL</option><option>XXL</option></select> <select><option>cotton</option><option>silk</option><option>Polyester</option></select> <select><option>Black</option><option>Red</option><option>Blue</option></select> <br> <br>'
var btn=document.createElement("button");
btn.innerHTML='Add';
div4.appendChild(btn);
div2.appendChild(div4);


}
var div5 = document.createElement("div");
div5.id='divmaincart';
div5.style.margin='10px';
div5.innerHTML='<h3>Cart Total = 0 </h3>'
div5.style.display="inline-block";
div6.appendChild(div5);
}

jsdata=[{"shirts":["shirts1","shirts2","shirts3"],"base_price":[500,600,550],"size":['L','XL','XXL'],"material":[{'cotton':0},{'silk':150},{'Polyester':50}],"color":[{'Black':0},{'Red':100},{'Blue':50}]}];
function displayimg(n){
var img=["dum250.png","img2.jpg","img3.jpg","img4.jpg","img5.jpg","img6.jpg"]
var Image1=new Image(600,400);
Image1.src=img[n];
document.getElementById('divmain').innerHTML="";
document.getElementById('divmain').appendChild(Image1);
}
generate_div();