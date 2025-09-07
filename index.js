
const loadCatagories= () => {
   fetch("https://openapi.programming-hero.com/api/categories")  
   .then((res) =>res.json() )
   .then((data) =>displayCatagories(data.categories) )
} 

const loadImg=(id) => { 
  
    fetch(`https://openapi.programming-hero.com/api/category/${id}`) 
    .then((res) =>res.json() )
    .then((data)=>displayImg(data.plants)) 
} 



const displayImg=(trees) => {
  
    const Img_container=document.getElementById("main-card")
    Img_container.innerHTML=""

    for (const tree of trees) {
        
        const imgDiv=document.createElement("div")
        imgDiv.innerHTML=`
         
         <div class="p-3 bg-white h-[450px]"> 
                    <img src="${tree.image}" alt="" class="rounded-md w-[300px] h-[200px]">
                    <h2 class="font-bold mt-1 text-[18px]">${tree.name}</h2> 
                    <p class="font-light mt-2">${tree.description}</p>
                    <div class="flex justify-between mt-3">
                        <p  class="bg-green-300 rounded-xl p-2 text-md bg-cover ">${tree.category}</p>
                        <p class="p-2 mt-2">৳${tree.price}</p>
                    </div> 
                    <button  onclick="addToCart('${tree.name}', ${tree.price})" class="rounded-3xl text-white p-1font-bold w-12/12 mt-2 bg-green-700 p-2">Add to Cart</button>

                   </div> 
        
        ` 
        Img_container.append(imgDiv)
    }
}


const displayCatagories=(catagoris) => {
  
const catagoris_container=document.getElementById("catagories")
 
catagoris_container.innerHTML=" " 

const allBtnDiv = document.createElement("div");
  allBtnDiv.innerHTML = `
    <button onclick="loadALL(categori.id)" 
      class="text-sm hover:bg-green-500  rounded-md p-2 font-semi-bold">
      All Trees   </button> `
   
  


  catagoris_container.append(allBtnDiv);

for (const categori of catagoris) {
    
 const btnDiv=document.createElement("div")

  btnDiv.innerHTML = `
  <button onclick="loadImg('${categori.id}')" class="text-sm hover:bg-green-500 p-2 ">
    ${categori.category_name}
  </button>
`





  catagoris_container.append(btnDiv)

}



}


loadCatagories() 

 let cart = []
let total = 0 

function updateCart() {
    const cartContainer = document.getElementById("add-cart");
    cartContainer.innerHTML = "<h3 class='font-bold mb-2'>Add to Cart</h3>" 

    cart.forEach((item, index) => {
        const div = document.createElement("div")
        div.className = "flex justify-between items-center bg-white p-2 rounded mb-2"
        div.innerHTML = `
            <span>${item.name} - ৳ ${item.price}</span>
            <button class="text-red-500 font-bold" onclick="removeFromCart(${index})">❌</button>
        `;
        cartContainer.appendChild(div);
    });

    const totalDiv = document.createElement("div");
    totalDiv.className = "mt-2 font-bold ";
    totalDiv.textContent = `Total: ৳ ${total}`;
    cartContainer.appendChild(totalDiv);
}
function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

