let imagesArray = document.querySelectorAll(".slider img");
let number = document.querySelector(".number");

let next = document.querySelector(".next");
let pre = document.querySelector(".pre");

let curunt = document.querySelector(".curunt");
let ul = document.createElement("ul");
ul.className = "list";
if (localStorage.getItem("curuntImage")) {
  curuntImage = localStorage.getItem("curuntImage");
} else {
  curuntImage = 3;
}
// localStorage.removeItem("curuntImage")

//Add Element To List
for (let i = 1; i <= imagesArray.length; i++) {
  let li = document.createElement("li");
  li.setAttribute("id", i);
  li.appendChild(document.createTextNode(i));
  ul.appendChild(li);
}

curunt.appendChild(ul);

if (curuntImage > 1 && curuntImage < 8) {
  pre.classList.remove("disabled");
  next.classList.remove("disabled");
} else if (curuntImage == 1){
  pre.classList.add("disabled");
} else if (curuntImage == 8){
  next.classList.add("disabled");
}

checker();

next.onclick = function () {
  if (curuntImage == imagesArray.length) {
    next.classList.add("disabled");
    return false;
  } else {
    next.classList.remove("disabled");
    curuntImage++;
    curuntLocal = curuntImage;
    localStorage.setItem("curuntImage", curuntLocal);
    checker();
  }
};

pre.onclick = function () {
  if (curuntImage == 1) {
    pre.classList.add("disabled");
    return false;
  } else {
    pre.classList.remove("disabled");
    curuntImage--;
    curuntLocal = curuntImage;
    localStorage.setItem("curuntImage", curuntLocal);
    checker();
  }
};

ul.onclick = function (e) {
  curuntImage = parseInt(e.target.getAttribute("id"));
  curuntLocal = curuntImage;
  localStorage.setItem("curuntImage", curuntLocal);
  checker();
};

//
//checker function
function checker() {
  //remove active from all images
  removeActiveFromImages();
  imagesArray[curuntImage - 1].classList.add("active");

  number.textContent = 'Slide #' + curuntImage + ' of ' + imagesArray.length;
  removeActiveFromUl();
  ul.children[curuntImage - 1].classList.add("active");
}

function removeActiveFromImages() {
  imagesArray.forEach(function (img) {
    img.classList.remove("active");
  });
}

function removeActiveFromUl() {
  for (let i = 0; i < ul.children.length; i++) {
    ul.children[i].classList.remove("active");
  }
}