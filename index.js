
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

const loadModal=async(id) => {
   const url=`https://openapi.programming-hero.com/api/plants`
   const res=await fetch(url)
   const details=await res.json() 
    displayModal(details.plants.find(tree => tree.id == id))
} 



const displayModal=(plant) => {
   console.log(plant); 

  const detailsBox=document.getElementById("details-container")
  detailsBox.innerHTML=`
  
     <div class="modal-box">
    <img src="${plant.image}" alt="" class="w-full h-60">
    <h2 class="mt-2 font-bold">Category :${plant.category}</h2> 
    <p class=" font-bold mt-2">Price : ${plant.price}  </p> 
    <p class="font-bold mt-1">Description : ${plant.description}</p>
      <form method="dialog" class="flex justify-center">
        
        <button class="btn">Close</button>
      </form>
    </div>
  
  
  `
  

document.getElementById("my_modal_5").showModal()



}


const displayImg=(trees) => {
  
    const Img_container=document.getElementById("main-card")
    Img_container.innerHTML=""

    for (const tree of trees) {
        
        const imgDiv=document.createElement("div")
        imgDiv.innerHTML=`
         
         <div class="p-3 bg-white h-[450px]"> 
                    <img src="${tree.image}" alt="" class="rounded-md w-[300px] h-[200px]">
                    <h2 onclick="loadModal(${tree.id})" class="font-bold mt-1 text-[18px]">${tree.name}</h2> 
                    <p class="font-light mt-2 slice('0','100')">${tree.description}</p>
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

const allBtnDiv = document.createElement("div")
  allBtnDiv.innerHTML = `
    <button onclick="activeBtn(this) loadALL()" 
      class="text-sm hover:bg-green-500  rounded-md p-2 font-semi-bold  ">
      All Trees   </button> `
   
  


//   catagoris_container.append(allBtnDiv);

for (const categori of catagoris) {
    
 const btnDiv=document.createElement("div")

  btnDiv.innerHTML = `
  <button onclick=" activeBtn(this); loadImg('${categori.id}')" class="text-sm hover:bg-green-500 p-2 category-btn  ">
    ${categori.category_name}
  </button>
`





  catagoris_container.append(btnDiv)

}



} 


const activeBtn=(button) => {

  const buttons=document.querySelectorAll(".category-btn")  

  buttons.forEach(btn =>btn.classList.remove("bg-green-600","text-white"))

  button.classList.add("bg-green-600")

} 
 





//  add to cart section

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
    
    const addTOcart=confirm(`${name} has been added this cart`)

    if(addTOcart){

 
    cart.push({ name, price })
    total += price 
       }
    updateCart();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

