const sliderArray = Array.from(document.querySelectorAll(".slider-counter img"))

const slidesCount = sliderArray.length;

const currentSlide = 1;
const slideNumberElement = document.getElementById("slide-number")

const nextBtn = document.getElementById("next")
const prevBtn = document.getElementById("prev")

//Create UL element
const paginationElement = document.createElement("ul")
paginationElement.setAttribute("id");
//create list li
//1
for (const i = 1; i <= slidesCount; i++) {
    const paginationItem = document.createElement("li");
    paginationItem.setAttribute("data-id")

    paginationElement.appendChild(paginationItem)
}
//2
// slidesCount.map((item) => {
//     const paginationItem = document.createElement("li");
//     item.paginationItem.setAttribute("data-id")

//     paginationElement.appendChild(paginationItem)
// })

document.getElementById('indicators').appendChild(paginationElement)

