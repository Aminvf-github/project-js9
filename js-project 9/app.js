const productOflist = document.getElementById("product-list")
let productlist =[]
let basketList=[]
getProducts = async () =>{
    const req =await fetch("https://fakestoreapi.com/products")
    const data = await req.json()
    productlist = data
    printProducts(data)
}
printProducts = (data) =>{
    data.forEach(product => {
        const card = createCard(product)
        productOflist.appendChild(card)      
    });
}
createCard = (product) =>{
    const {id,title,price,description,category,image,rating} = product;
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="main-div">
    <h3>${title}</h3>
    <div class="bgdiv">
    <img src="${image}" alt="${title}"/ class="images">
    </div>
    <p>price:${price} $</p>
    <p>rate:${rating.rate}</p>
    <p>count:${rating.count}</p>
    <button onclick="addToBasket(${id})" class="btn">add to Basket</button>
    </div>
    `;
    return card;
}
addToBasket=(id)=>{
    const alreadeyHas_item = basketList.some((_item)=>{
        return _item.id===id
    })
    if (!alreadeyHas_item) {
        const product = productlist.find((_item)=>{
           return _item.id===id
        })        
        basketList.push(product);
        upadetBasketCount();
    }
}
upadetBasketCount=()=>{
    const basketCount = document.getElementById("basket-count")
    basketCount.innerText = basketList.length
}