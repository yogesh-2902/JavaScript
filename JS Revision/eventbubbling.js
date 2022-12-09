console.clear();

const grandParent = document.querySelector('.grand-parent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

[grandParent, parent, child].forEach((item) => {
        item.addEventListener("click", (event) => {
            // console.log(event.target);
            // 'this' refers to the element which has been has been called, we can also use event.currentTarget
            // console.log(this);
            console.log(event.currentTarget);
            event.stopPropagation();
        },
        {
            // once: true,
            // capture : true
        });
}) 


// Event Propgation : Movement of elements from one element to another is called propogation.That is the movement of event handlings is called event propogation