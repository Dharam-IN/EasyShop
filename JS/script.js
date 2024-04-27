// SEARCH INPUT
var SearchBTN = document.getElementById("NavbarSearchBtn");

SearchBTN.addEventListener("click", ()=>{
    document.getElementById("NavbarSearchDivID").classList.add("NavSearchDiv")
});


// MOBILE MENU
document.getElementById("menuButton").addEventListener("click", () => {
    document.getElementById("sidebar").classList.toggle("MenuSidebar")
});

document.getElementById("closeMenuButton").addEventListener("click", ()=> {
    document.getElementById("sidebar").classList.toggle("MenuSidebar")
})


// DATA
let productsArray = [
    {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549,
      "discountPercentage": 12.96,
      "rating": 4.69,
      "stock": 94,
      "brand": "brand",
      "category": "smartphones",
      // "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
      "thumbnail": "./Images/iPhone9.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
      ]
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899,
      "discountPercentage": 17.94,
      "rating": 4.44,
      "stock": 34,
      "brand": "Apple",
      "category": "smartphones",
      "thumbnail": "./Images/iPhoneX.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/2/1.jpg",
        "https://cdn.dummyjson.com/product-images/2/2.jpg",
        "https://cdn.dummyjson.com/product-images/2/3.jpg",
        "https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
      ]
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249,
      "discountPercentage": 15.46,
      "rating": 4.09,
      "stock": 36,
      "brand": "Samsung",
      "category": "smartphones",
      "thumbnail": "./Images/SamsungUniverse9.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/3/1.jpg"
      ]
    },
    {
      "id": 4,
      "title": "OPPOF19",
      "description": "OPPO F19 is officially announced on April 2021.",
      "price": 280,
      "discountPercentage": 17.91,
      "rating": 4.3,
      "stock": 123,
      "brand": "OPPO",
      "category": "smartphones",
      "thumbnail": "./Images/OPPOF19.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/4/1.jpg",
        "https://cdn.dummyjson.com/product-images/4/2.jpg",
        "https://cdn.dummyjson.com/product-images/4/3.jpg",
        "https://cdn.dummyjson.com/product-images/4/4.jpg",
        "https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
      ]
    },
    {
      "id": 5,
      "title": "Huawei P30",
      "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      "price": 499,
      "discountPercentage": 10.58,
      "rating": 4.09,
      "stock": 32,
      "brand": "Huawei",
      "category": "smartphones",
      "thumbnail": "./Images/HuaweiP30.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/5/1.jpg",
        "https://cdn.dummyjson.com/product-images/5/2.jpg",
        "https://cdn.dummyjson.com/product-images/5/3.jpg"
      ]
    },
    {
      "id": 6,
      "title": "MacBook Pro",
      "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
      "price": 1749,
      "discountPercentage": 11.02,
      "rating": 4.57,
      "stock": 83,
      "brand": "Apple",
      "category": "laptops",
      "thumbnail": "./Images/MacBookPro.png",
      "images": [
        "https://cdn.dummyjson.com/product-images/6/1.png",
        "https://cdn.dummyjson.com/product-images/6/2.jpg",
        "https://cdn.dummyjson.com/product-images/6/3.png",
        "https://cdn.dummyjson.com/product-images/6/4.jpg"
      ]
    },
    {
      "id": 7,
      "title": "Samsung Galaxy Book",
      "description": "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
      "price": 1499,
      "discountPercentage": 4.15,
      "rating": 4.25,
      "stock": 50,
      "brand": "Samsung",
      "category": "laptops",
      "thumbnail": "./Images/SamsungGalaxyBook.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/7/1.jpg",
        "https://cdn.dummyjson.com/product-images/7/2.jpg",
        "https://cdn.dummyjson.com/product-images/7/3.jpg",
        "https://cdn.dummyjson.com/product-images/7/thumbnail.jpg"
      ]
    },
    {
      "id": 8,
      "title": "Microsoft Surface Laptop 4",
      "description": "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
      "price": 1499,
      "discountPercentage": 10.23,
      "rating": 4.43,
      "stock": 68,
      "brand": "Microsoft Surface",
      "category": "laptops",
      "thumbnail": "./Images/MicrosoftSurfaceLaptop4.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/8/1.jpg",
        "https://cdn.dummyjson.com/product-images/8/2.jpg",
        "https://cdn.dummyjson.com/product-images/8/3.jpg",
        "https://cdn.dummyjson.com/product-images/8/4.jpg",
        "https://cdn.dummyjson.com/product-images/8/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBook X1",
      "description": "Infinix INBook X1 Laptop With Windows 10, 10-Hour Battery Life Launched in India",
      "price": 699,
      "discountPercentage": 15.16,
      "rating": 3.94,
      "stock": 120,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "./Images/InfinixINBookX1.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/9/1.jpg",
        "https://cdn.dummyjson.com/product-images/9/2.jpg",
        "https://cdn.dummyjson.com/product-images/9/3.jpg",
        "https://cdn.dummyjson.com/product-images/9/4.jpg",
        "https://cdn.dummyjson.com/product-images/9/thumbnail.jpg"
      ]
    },
    {
      "id": 10,
      "title": "Dell XPS",
      "description": "New Dell XPS 15 and XPS 17 laptops are on sale and shipping",
      "price": 1599,
      "discountPercentage": 12.5,
      "rating": 4.56,
      "stock": 30,
      "brand": "Dell",
      "category": "laptops",
      "thumbnail": "./Images/DellXPS.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/10/1.jpg",
        "https://cdn.dummyjson.com/product-images/10/2.jpg",
        "https://cdn.dummyjson.com/product-images/10/3.jpg",
        "https://cdn.dummyjson.com/product-images/10/4.jpg",
        "https://cdn.dummyjson.com/product-images/10/thumbnail.jpg"
      ]
    },
    {
      "id": 11,
      "title": "Google Pixel 6",
      "description": "Google Pixel 6 with Tensor SoC Could Launch in September 2021",
      "price": 799,
      "discountPercentage": 9.62,
      "rating": 4.68,
      "stock": 60,
      "brand": "Google",
      "category": "smartphones",
      "thumbnail": "./Images/GooglePixel6.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/11/1.jpg",
        "https://cdn.dummyjson.com/product-images/11/2.jpg",
        "https://cdn.dummyjson.com/product-images/11/3.jpg",
        "https://cdn.dummyjson.com/product-images/11/thumbnail.jpg"
      ]
    },
    {
      "id": 12,
      "title": "OnePlus 9 Pro",
      "description": "OnePlus 9 Pro launched with Snapdragon 888 SoC, 120Hz display",
      "price": 969,
      "discountPercentage": 8.24,
      "rating": 4.55,
      "stock": 42,
      "brand": "OnePlus",
      "category": "smartphones",
      "thumbnail": "./Images/OnePlus9Pro.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/12/1.jpg",
        "https://cdn.dummyjson.com/product-images/12/2.jpg",
        "https://cdn.dummyjson.com/product-images/12/3.jpg",
        "https://cdn.dummyjson.com/product-images/12/4.jpg",
        "https://cdn.dummyjson.com/product-images/12/thumbnail.jpg"
      ]
    },
    {
      "id": 13,
      "title": "Lenovo ThinkPad",
      "description": "New Lenovo ThinkPad laptops have arrived with Intel Tiger Lake processors",
      "price": 1299,
      "discountPercentage": 14.29,
      "rating": 4.47,
      "stock": 26,
      "brand": "Lenovo",
      "category": "laptops",
      "thumbnail": "./Images/LenovoThinkPad.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/13/1.jpg",
        "https://cdn.dummyjson.com/product-images/13/2.jpg",
        "https://cdn.dummyjson.com/product-images/13/3.jpg",
        "https://cdn.dummyjson.com/product-images/13/thumbnail.jpg"
      ]
    },
    {
      "id": 14,
      "title": "Xiaomi Redmi Note 11",
      "description": "Xiaomi Redmi Note 11 Pro+ 5G vs. Xiaomi Redmi Note 11 Pro 5G",
      "price": 499,
      "discountPercentage": 12.02,
      "rating": 4.28,
      "stock": 90,
      "brand": "Xiaomi",
      "category": "smartphones",
      "thumbnail": "./Images/XiaomiRedmiNote11.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/14/1.jpg",
        "https://cdn.dummyjson.com/product-images/14/2.jpg",
        "https://cdn.dummyjson.com/product-images/14/3.jpg",
        "https://cdn.dummyjson.com/product-images/14/4.jpg",
        "https://cdn.dummyjson.com/product-images/14/thumbnail.jpg"
      ]
    },
    {
      "id": 15,
      "title": "ASUS ROG Zephyrus G15",
      "description": "ASUS ROG Zephyrus G15 with AMD Ryzen 9 5900HS, RTX 3080 launched in India",
      "price": 1899,
      "discountPercentage": 9.48,
      "rating": 4.65,
      "stock": 20,
      "brand": "ASUS",
      "category": "laptops",
      "thumbnail": "./Images/ASUSROGZephyrusG15.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/15/1.jpg",
        "https://cdn.dummyjson.com/product-images/15/2.jpg",
        "https://cdn.dummyjson.com/product-images/15/3.jpg",
        "https://cdn.dummyjson.com/product-images/15/thumbnail.jpg"
      ]
    },
    {
      "id": 16,
      "title": "Realme GT 2 Pro",
      "description": "Realme GT 2 Pro appears on Geekbench with Snapdragon 8 Gen 1 SoC, 12GB RAM",
      "price": 699,
      "discountPercentage": 8.73,
      "rating": 4.35,
      "stock": 55,
      "brand": "Realme",
      "category": "smartphones",
      "thumbnail": "./Images/RealmeGT2Pro.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/16/1.jpg",
        "https://cdn.dummyjson.com/product-images/16/2.jpg",
        "https://cdn.dummyjson.com/product-images/16/3.jpg",
        "https://cdn.dummyjson.com/product-images/16/4.jpg",
        "https://cdn.dummyjson.com/product-images/16/thumbnail.jpg"
      ]
    },
    {
      "id": 17,
      "title": "Sony Xperia 1 IV",
      "description": "Sony Xperia 1 IV Appears in Early Renders, Could Retain 4K 120Hz OLED Display",
      "price": 1199,
      "discountPercentage": 10.01,
      "rating": 4.48,
      "stock": 28,
      "brand": "Sony",
      "category": "smartphones",
      "thumbnail": "./Images/SonyXperia1IV.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/17/1.jpg",
        "https://cdn.dummyjson.com/product-images/17/2.jpg",
        "https://cdn.dummyjson.com/product-images/17/3.jpg",
        "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
      ]
    },
    {
      "id": 18,
      "title": "HP Spectre x360",
      "description": "HP Spectre x360 with 12th Gen Intel Alder Lake chip launched in India",
      "price": 1699,
      "discountPercentage": 13.54,
      "rating": 4.57,
      "stock": 17,
      "brand": "HP",
      "category": "laptops",
      "thumbnail": "./Images/HPSpectrex360.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/18/1.jpg",
        "https://cdn.dummyjson.com/product-images/18/2.jpg",
        "https://cdn.dummyjson.com/product-images/18/3.jpg",
        "https://cdn.dummyjson.com/product-images/18/thumbnail.jpg"
      ]
    },
    {
      "id": 19,
      "title": "Nokia X50",
      "description": "Nokia X50 with 108MP penta cameras, SD 8 Gen 1 SoC Tipped to Launch in 2021",
      "price": 899,
      "discountPercentage": 9.23,
      "rating": 4.19,
      "stock": 40,
      "brand": "Nokia",
      "category": "smartphones",
      "thumbnail": "./Images/NokiaX50.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/19/1.jpg",
        "https://cdn.dummyjson.com/product-images/19/2.jpg",
        "https://cdn.dummyjson.com/product-images/19/3.jpg",
        "https://cdn.dummyjson.com/product-images/19/thumbnail.jpg"
      ]
    },
    {
      "id": 20,
      "title": "Motorola Moto G200",
      "description": "Motorola Moto G200 With 108-Megapixel Camera, Snapdragon 888 SoC, 144Hz Display Launched",
      "price": 699,
      "discountPercentage": 11.73,
      "rating": 4.36,
      "stock": 50,
      "brand": "Motorola",
      "category": "smartphones",
      "thumbnail": "./Images/MotorolaMotoG200.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/20/1.jpg",
        "https://cdn.dummyjson.com/product-images/20/2.jpg",
        "https://cdn.dummyjson.com/product-images/20/3.jpg",
        "https://cdn.dummyjson.com/product-images/20/thumbnail.jpg"
      ]
    },
    {
      "id": 21,
      "title": "Acer Predator Helios 500",
      "description": "Acer Predator Helios 500 gaming laptop launched with AMD Ryzen 9 5900HX processor",
      "price": 2299,
      "discountPercentage": 7.83,
      "rating": 4.69,
      "stock": 15,
      "brand": "Acer",
      "category": "laptops",
      "thumbnail": "./Images/AcerPredatorHelios500.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/21/1.jpg",
        "https://cdn.dummyjson.com/product-images/21/2.jpg",
        "https://cdn.dummyjson.com/product-images/21/3.jpg",
        "https://cdn.dummyjson.com/product-images/21/4.jpg",
        "https://cdn.dummyjson.com/product-images/21/thumbnail.jpg"
      ]
    },
    {
      "id": 22,
      "title": "TCL 30 5G",
      "description": "TCL 30 5G, TCL 30 Plus With MediaTek SoCs, 50-Megapixel Cameras Launched",
      "price": 349,
      "discountPercentage": 12.32,
      "rating": 4.15,
      "stock": 70,
      "brand": "TCL",
      "category": "smartphones",
      "thumbnail": "./Images/TCL305G.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/22/1.jpg",
        "https://cdn.dummyjson.com/product-images/22/2.jpg",
        "https://cdn.dummyjson.com/product-images/22/3.jpg",
        "https://cdn.dummyjson.com/product-images/22/thumbnail.jpg"
      ]
    },
    {
      "id": 23,
      "title": "Vivo X90 Pro",
      "description": "Vivo X90 Pro With Snapdragon 8 Gen 1 SoC, Up to 12GB RAM Tipped to Launch in April",
      "price": 799,
      "discountPercentage": 10.01,
      "rating": 4.29,
      "stock": 38,
      "brand": "Vivo",
      "category": "smartphones",
      "thumbnail": "./Images/VivoX90Pro.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/23/1.jpg",
        "https://cdn.dummyjson.com/product-images/23/2.jpg",
        "https://cdn.dummyjson.com/product-images/23/3.jpg",
        "https://cdn.dummyjson.com/product-images/23/thumbnail.jpg"
      ]
    },
    {
      "id": 24,
      "title": "LG Gram",
      "description": "New LG Gram 16 laptop launched in India with 12th Gen Intel CPUs",
      "price": 1499,
      "discountPercentage": 13.21,
      "rating": 4.46,
      "stock": 25,
      "brand": "LG",
      "category": "laptops",
      "thumbnail": "./Images/LGGram.jpeg",
      "images": [
        "https://cdn.dummyjson.com/product-images/24/1.jpg",
        "https://cdn.dummyjson.com/product-images/24/2.jpg",
        "https://cdn.dummyjson.com/product-images/24/3.jpg",
        "https://cdn.dummyjson.com/product-images/24/thumbnail.jpg"
      ]
    },
    {
      "id": 25,
      "title": "ZTE Axon 40 Pro",
      "description": "ZTE Axon 40 Pro 5G With 64-Megapixel Triple Cameras, Snapdragon 8 Gen 1 SoC Launched",
      "price": 899,
      "discountPercentage": 11.12,
      "rating": 4.07,
      "stock": 45,
      "brand": "ZTE",
      "category": "smartphones",
      "thumbnail": "./Images/ZTEAxon40Pro.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/25/1.jpg",
        "https://cdn.dummyjson.com/product-images/25/2.jpg",
        "https://cdn.dummyjson.com/product-images/25/3.jpg",
        "https://cdn.dummyjson.com/product-images/25/thumbnail.jpg"
      ]
    },
    {
      "id": 26,
      "title": "BlackBerry Passport",
      "description": "BlackBerry Passport was launched in June 2014. The phone comes with a 4.50-inch display.",
      "price": 399,
      "discountPercentage": 16.54,
      "rating": 4.13,
      "stock": 30,
      "brand": "BlackBerry",
      "category": "smartphones",
      "thumbnail": "./Images/BlackBerryPassport.webp",
      "images": [
        "https://cdn.dummyjson.com/product-images/26/1.jpg",
        "https://cdn.dummyjson.com/product-images/26/2.jpg",
        "https://cdn.dummyjson.com/product-images/26/3.jpg",
        "https://cdn.dummyjson.com/product-images/26/thumbnail.jpg"
      ]
    },
    {
      "id": 27,
      "title": "Nubia Red Magic 7",
      "description": "Nubia Red Magic 7 series with Snapdragon 8 Gen 1 SoC, 165Hz AMOLED display launched",
      "price": 699,
      "discountPercentage": 9.87,
      "rating": 4.25,
      "stock": 32,
      "brand": "Nubia",
      "category": "smartphones",
      "thumbnail": "./Images/NubiaRedMagic7.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/27/1.jpg",
        "https://cdn.dummyjson.com/product-images/27/2.jpg",
        "https://cdn.dummyjson.com/product-images/27/3.jpg",
        "https://cdn.dummyjson.com/product-images/27/4.jpg",
        "https://cdn.dummyjson.com/product-images/27/thumbnail.jpg"
      ]
    },
    {
      "id": 28,
      "title": "Meizu 19",
      "description": "Meizu 19 renders and key specifications tipped; MediaTek Dimensity 9000, 200MP camera tipped",
      "price": 799,
      "discountPercentage": 10.51,
      "rating": 4.18,
      "stock": 38,
      "brand": "Meizu",
      "category": "smartphones",
      "thumbnail": "./Images/Meizu19.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/28/1.jpg",
        "https://cdn.dummyjson.com/product-images/28/2.jpg",
        "https://cdn.dummyjson.com/product-images/28/3.jpg",
        "https://cdn.dummyjson.com/product-images/28/thumbnail.jpg"
      ]
    },
    {
      "id": 29,
      "title": "Oppo Find X5",
      "description": "Oppo Find X5 Pro with Snapdragon 8 Gen 1 SoC, 5G support launched",
      "price": 999,
      "discountPercentage": 10.01,
      "rating": 4.38,
      "stock": 27,
      "brand": "Oppo",
      "category": "smartphones",
      "thumbnail": "./Images/OppoFindX5.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/29/1.jpg",
        "https://cdn.dummyjson.com/product-images/29/2.jpg",
        "https://cdn.dummyjson.com/product-images/29/3.jpg",
        "https://cdn.dummyjson.com/product-images/29/thumbnail.jpg"
      ]
    },
    {
      "id": 30,
      "title": "Black Shark 5 Pro",
      "description": "Black Shark 5 Pro gaming phone with Snapdragon 8 Gen 1, 144Hz AMOLED display launched",
      "price": 899,
      "discountPercentage": 9.23,
      "rating": 4.45,
      "stock": 23,
      "brand": "Black Shark",
      "category": "smartphones",
      "thumbnail": "./Images/BlackShark5Pro.jpg",
      "images": [
        "https://cdn.dummyjson.com/product-images/30/1.jpg",
        "https://cdn.dummyjson.com/product-images/30/2.jpg",
        "https://cdn.dummyjson.com/product-images/30/3.jpg",
        "https://cdn.dummyjson.com/product-images/30/thumbnail.jpg"
      ]
    }
]

function GenerateHTML(product, Searchvalue){
  
  console.log(Searchvalue)
  const title = product.title.toLowerCase();

  let highlightTitle = title.replace(new RegExp(Searchvalue, 'gi'), match => `<span class="highlight">${match}</span>`)
  
  return `<div class="border border-gray-400 group">
              <div class="bg-red-500 h-[300px] overflow-hidden">
                  <img src="${product.thumbnail}" class="w-full h-full object-cover group-hover:scale-110 transition duration-300" alt="img">
              </div>
              <div class="p-4">
                  <h3 class="text-2xl font-bold">${highlightTitle}</h3>
                  <p class="text-[17px]">${product.description}</p>
                  <ul class="flex justify-between w-full flex-wrap gap-y-2">
                      <li class="w-[50%]">
                          <b>Price: </b>
                          <span>${product.price} $</span>
                      </li>
                      <li class="w-[50%]">
                          <b>Discount:</b>
                          <span>${product.discountPercentage} %</span>
                      </li>
                      <li class="w-[50%]">
                          <b>Rating:</b>
                          <span>${product.rating}</span>
                      </li>
                      <li class="w-[50%]">
                          <b>Brand:</b>
                          <span>${product.brand}</span>
                      </li>
                      <li class="w-[50%]">
                          <b>Category:</b>
                          <span>${product.category}</span>
                      </li>
                  </ul>
              </div>
          </div>`
}

// Render Products
function RenderProducts(products, searchValue){
  const ProductsHTML = products.map((product) => GenerateHTML(product, searchValue)).join('');
  document.getElementById("ProductsRow").innerHTML = ProductsHTML;
}

// Search Products
function SearchProduct(){
  let inputEle = document.getElementById("SearchValue");

  inputEle.addEventListener("input", function(){
    let inputvalue = document.getElementById("SearchValue").value.toLowerCase().trim();
    let FilterdProducts = productsArray.filter(product => product.title.toLowerCase().includes(inputvalue));
    let highlight = inputvalue;
    if(FilterdProducts.length > 0){
      RenderProducts(FilterdProducts, inputvalue);
    }else{
      document.getElementById("ProductsRow").innerHTML = "<p>No matching products found.</p>";
    }

  })

}

function LoadFunctions(){
  RenderProducts(productsArray)
  SearchProduct()
}

document.addEventListener("DOMContentLoaded", function(){
  LoadFunctions()
})

// Selected Category
function FindCategory(){
  let category = document.getElementById("ProductCategory");
  category.addEventListener("change", function(){
    let selectedCategory = this.value.toLowerCase();
    console.log(selectedCategory)
    if(selectedCategory == "all"){
      RenderProducts(productsArray)
    }else{
      let selectedCategoryProducts = productsArray.filter(product => product.category.toLowerCase().includes(selectedCategory))
      if(selectedCategoryProducts.length > 1){
        RenderProducts(selectedCategoryProducts)
      }else{
        document.getElementById("ProductsRow").innerHTML = "<p>Currently this catrgory Empty</p>";
      }
    }
    
  })
}


// Selected Category Sidebar
function FindCategorySidebar(){
  let category = document.getElementById("ProductCategorySidebar");
  category.addEventListener("change", function(){
    let selectedCategory = this.value.toLowerCase();
    console.log(selectedCategory)
    if(selectedCategory == "all"){
      RenderProducts(productsArray)
    }else{
      let selectedCategoryProducts = productsArray.filter(product => product.category.toLowerCase().includes(selectedCategory))
      if(selectedCategoryProducts.length > 1){
        RenderProducts(selectedCategoryProducts)
      }else{
        document.getElementById("ProductsRow").innerHTML = "<p>Currently this catrgory Empty</p>";
      }
    }
    
  })
}

FindCategory()
FindCategorySidebar()