const sliderArray = Array.from(
  document.querySelectorAll(".slider-container img")
);

const slidesCount = sliderArray.length;

console.log(slidesCount);

let currentSlide = 1;
const slideNumberElement = document.getElementById("slide-number");

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

//Create UL element
const paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");
//create list li
//1
for (var i = 1; i <= slidesCount; i++) {
  const paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-id", i);
  paginationItem.appendChild(document.createTextNode(i));

  paginationElement.appendChild(paginationItem);
}

//add the UL to the page
document.getElementById("indicators").appendChild(paginationElement);

//define the ul on a variable
const pagniationCreatedUL = document.getElementById("pagination-ul");

//create the bullets li (1 2 3 4 5)
const paginationNumbers = Array.from(
  document.querySelectorAll("#pagination-ul li")
);
console.log(paginationNumbers);

for (i = 0; i < paginationNumbers.length; i++) {
  paginationNumbers[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-id"));
    checkSlide();
  };
}

//triger checker function

//next slide
const nextSlide = () => {
  if (nextBtn.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    checkSlide();
  }
};
nextBtn.addEventListener("click", nextSlide);

//previous slide
const prevSlide = () => {
  if (prevBtn.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    checkSlide();
  }
};
prevBtn.addEventListener("click", prevSlide);

// remove All active classes
const removeActiveClass = () => {
  //remove class from array images
  sliderArray.forEach((item) => {
    item.classList.remove("active");
  });

  //remove class from li bullets(1 2 3 4 5 )
  paginationNumbers.forEach((item) => {
    item.classList.remove("active");
  });
};

//check the slide function
const checkSlide = () => {
  slideNumberElement.textContent =
    "slide " + currentSlide + " of " + slidesCount;

  removeActiveClass();

  //set active class on current slide
  sliderArray[currentSlide - 1].classList.add("active");

  //set active class to the
  pagniationCreatedUL.children[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }

  if (currentSlide === slidesCount) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }
};

//check the slide function
checkSlide();
