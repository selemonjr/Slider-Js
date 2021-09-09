//setting up the images//
const images = [{
    id : 1,
    category : "lions",
    imgs : "../pictures/Lion-1.jpg"
},{
    id : 2,
    category : "lions",
    imgs : "../pictures/Lion-2.jpg"
},{
    id : 3,
    category : "lions",
    imgs : "../pictures/Lion-3.jpg"
},{
    id : 4,
    category : "lions",
    imgs : "../pictures/Lion-4.jpg"
}, {
    id : 5,
    category : "monkeys",
    imgs : "../pictures/Monkey-1.jpg"
}, {
    id : 6,
    category : "monkeys",
    imgs: "../pictures/Monkey-2.jpg"
},{
    id : 7,
    category : "monkeys",
    imgs : "../pictures/Monkey-3.jpg"
}, {
    id : 8,
    category : "monkeys",
    imgs : "../pictures/Monkey-4.jpg"
},{
    id : 9,
    category : "elephants",
    imgs : "../pictures/Elephant-1.jpg"
}, {
    id : 10,
    category : "elephants",
    imgs : "../pictures/Elephant-2.jpg"
}, {
    id : 11,
    category : "elephants",
    imgs : "../pictures/Elephant-3.jpg"
}, {
    id : 12,
    category : "elephants",
    imgs : "../pictures/Elephant-4.jpg"
}, {
    id : 13,
    category : "giraffes",
    imgs : "../pictures/Giraffe-1.jpg"
},{
    id : 14,
    category : "giraffes",
    imgs : "../pictures/Giraffe-2.jpg"
},{
    id : 15,
    category : "giraffes",
    imgs : "../pictures/Giraffe-3.jpg"
}, {
    id : 16,
    category : "giraffes",
    imgs: "../pictures/Giraffe-4.jpg"
}]
const ChangeLeft = document.querySelector(".left");
const ChangeRight = document.querySelector(".right")
const imgEl = document.querySelector(".image")
let count = 0;
//when the webpage window loads it will display our image and the buttons//
window.addEventListener("DOMContentLoaded",() => {
    show()
});
function show() {
    let items = images[count];
    imgEl.src = items.imgs;
};
show()
// left button//
ChangeLeft.addEventListener("click",()=> {
    count--;
    if(count < 0) {
        count = images.length - 1;
    }
    show()
});
//right button//
ChangeRight.addEventListener("click",()=> {
    count++;
    if(count > images.length - 1) {
        count = 0;
    }
    show()
});
