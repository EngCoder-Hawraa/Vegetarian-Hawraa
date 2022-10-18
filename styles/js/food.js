// ===================
let foods = {
    data:[{
      foodName: "طريقة تحضير فطائر اليقطين النباتية الشهية ",
      category: "Medical",
      price: "30",
      image: "images/pumpkin.jpg",
      readMore: "تفاصيل"
      },
      {
      foodName: "طريقة تحضير لبنة اللوز والرز النباتية ",
      category: "Medical",
      price: "30",
      image: "images/plate.png",
      readMore: "تفاصيل"
      },
      {
      foodName: "طريقة تحضير إيتش اكلة شهية من البرغل والبندورة ",
      category: "Medical",
      price: "30",
      image: "images/plate.png",
      readMore: "تفاصيل"
      },
      {
      foodName: "طريقة تحضير ئبلمة الكوسا باللبن النباتي ",
      category: "Medical",
      price: "30",
      image: "images/plate.png",
      readMore: "تفاصيل"
      }   
  ],
  };
  
  for (let i of foods.data){
    // Create Card
    let card = document.createElement("div");
    // Card sould have category and shouls stay hidden initiality
    card.classList.add("card",i.category,"hide");
    // image div 
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("card-pic");
    // imgContainer.classList.add("cards-content");
    // img tag
    let image = document.createElement("img");
    image.classList.add("images");
    // image.style.height = "150px";
    // image.style.width = "150px";
    // image.style.marginRight = "10px";
    // image.style.marginTop = "40px";
    // image.style.borderRadius= "50%";
    // image.style.marginLeft = "10px";
    // image.style.background = "#EBF7F6";
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //Container
    let container = document.createElement("div");
  //   // food name
    let name = document.createElement("div");
    name.style.fontSize = "14px";
    name.style.paddingTop = "20px";
    name.style.textAlign = "center";
    name.classList.add("foodName");
    name.innerText = i.foodName;
    container.appendChild(name)
  
  
    // button
    let container2 = document.createElement("div");
    container2.classList.add("container");
    let button = document.createElement("button");
    button.classList.add("title-btn");
    // button.style.height = "40px";
    // button.style.width = "150px";
    // button.style.border = "none";
    button.style.color = "#fff";
    // button.style.background = "#318907";
    // button.style.borderRadius = "10px";
    button.classList.add("ٌread-more");
    button.innerText = i.readMore;
    // const attr = document.createAttribute("href");
    // // Set the value of the href attribute:
    // attr.value = "https://www.w3schools.com";
    // button.onclick.setAttribute(attr);
    container.appendChild(button);
    container2.appendChild(button);
  
  
  
  
    card.appendChild(container)
    card.appendChild(container2)
    document.getElementById("cards").appendChild(card);
  }
  
  
  
  // parameter passed from button (Parameter same as category)
  function filterFood(value){
    // Button Class Code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        // check if value equals innerText 
        if(value.toUpperCase() == button.innerText.toUpperCase()){
            button.classList.add("active")
        }
        else{
            button.classList.remove("active")
        }
    });
  
  
    // select all cards
    let elements = document.querySelectorAll(".card");
    // loop through all cards
    elements.forEach((element) => {
        // Display all Cards on 'all' button click
        if (value == "all"){
            element.classList.remove("hide")
        }
        else{
            // check if element contains category class
            if(element.classList.contains(value)){
                // display element based on category 
                element.classList.remove("hide");
            }
            else{
                // hide other elements
                element.classList.add("hide");
            }
        };
    });
  };
  
  
  // intiality Diasplay all foods
  window.onload = () => {
    filterFood("all");
  };