const kategoriler = ["All", "Korea", "Japan", "China","Turkish","Russian"];

const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
  {
    id: 10,
    title: "Kuru Fasulye",
    category: "Turkish",
    price: 9.99,
    img: "https://cdn.yemek.com/mncrop/600/315/uploads/2015/11/kuru-fasulye-yemekcom.jpg",
    desc: `Beans made with tomato paste, onion and spice`,
  },
  {
    id: 11,
    title: "Karnıyarık",
    category: "Turkish",
    price: 13.99,
    img: "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/karniyarik-yemekcom.jpg",
    desc: `Eggplant filled with mince.`,
  },
];

const btnlar = document.querySelector(".butonlar");
const ana = document.querySelector(".section-center");
const total = document.querySelector(".total");
var eklenecek = "";
var ekle = "";
var sayi = 1;
var yol = 0;
var gir ="";

function createButtons(buton) {
  let icerik = `<button id="${buton}" class="btn btn-outline-dark btn-item" onclick="listFoods('${buton}')">${buton}</button>`;
  eklenecek += icerik;
}

kategoriler.forEach(createButtons);
btnlar.innerHTML = eklenecek;

function menuYap(isim) {
  let menum = `
      ${rowmu()}
        <div class="col-12 col-md-6 ${ortayamı()}">
          <div class="card mb-3">
            <div class="row g-0 inher">
              <div class="col-md-4 inher">
                <img src="${isim.img}" class="img-fluid myimage inher" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${isim.title}</h5>
                  <p class="card-text">${isim.desc}</p>
                  <a href="#" class="btn btn-primary">${isim.price}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ${rowmus()}
    `;
  ekle += menum;
}

function rowmu(){
  sayi++;
  return sayi %2 ? "" : "<div class='row'>";
}

function rowmus(){
  return sayi %2 ? "</div>" : "";
}

function ortayamı(){
  if(!yol){
    return sayi == menu.length+1 && !(sayi%2) ? "offset-md-3" : ""
  }else{
    return sayi == gir.length+1 && !(sayi%2) ? "offset-md-3" : ""
  }
}

function listFoods(gelen) {
  kategoriler.forEach(gel => {
    document.getElementById(gel).classList.remove("btn-dark");
    document.getElementById(gel).classList.add("btn-outline-dark")
  });
  document.getElementById(gelen).classList.add("btn-dark");
  document.getElementById(gelen).classList.remove("btn-outline-dark");
  if (gelen == "All") {
    yol = 0;
    menu.forEach(menuYap);
    ana.innerHTML = ekle;
    total.innerHTML = `There are ${sayi-1} items in this category`;
    ekle = "";
    sayi = 1;
  }
  else{
    yol = 1;
    gir = menu.filter(fil => fil.category == gelen);
    gir.forEach(menuYap);
    ana.innerHTML = ekle;
    total.innerHTML = `There are ${sayi-1} items in this category`;
    ekle = "";
    sayi = 1;
  }
}

listFoods("All");