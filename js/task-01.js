const amountСatagories = document.querySelectorAll("#categories .item");
console.log('Number of categories:', amountСatagories.length);

amountСatagories.forEach( element => {
    console.log('Category: ', element.querySelector("h2").textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);
}
);

