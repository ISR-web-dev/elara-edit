const featuredData = [
    {
        name: 'Brown Leather Jacket',
        path: 'images/product-image-1.webp',
        price: '$799 <s style="font-size: 15px;">$999</s>'
    },
    {
        name: 'Brown Jeans Jacket',
        path: 'images/product-image-2.png',
        price: '$399 <s style="font-size: 15px;">$599</s>'
    },
    {
        name: 'Open T-shirt',
        path: 'images/product-image-3.jpeg',
        price: '$99 <s style="font-size: 15px;">$399</s>'
    },
    {
        name: 'Fitting T-shirts',
        path: 'images/product-image-4.webp',
        price: '$99 <s style="font-size: 15px;">$399</s>'
    },
    {
        name: '3 piece suits',
        path: 'images/product-image-5.jpg',
        price: '$1199 <s style="font-size: 15px;">$1499</s>'
    }
]

for(let i=0; i<5; i++) {
    document.querySelector('.products-container').innerHTML += `<div class="product">
    <img src="${featuredData[i].path}" alt="">
    <h6>${featuredData[i].name}</h6>
    <p style="font-size: 18px;">${featuredData[i].price}</p>
</div>`
}





document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.burger-menu').classList.toggle('active');
    document.querySelector('.bar1').classList.toggle('active');
    document.querySelector('.bar2').classList.toggle('active');
    document.querySelector('.bar3').classList.toggle('active');
});

function activate(cla) {
    document.querySelector('.all').classList.remove('active');
    document.querySelector('.men').classList.remove('active');
    document.querySelector('.women').classList.remove('active');
    document.querySelector('.accessories').classList.remove('active');
    document.querySelector('.na').classList.remove('active');

    document.querySelector(`.${cla}`).classList.add('active');
}
function activateFaq(cla) {
    document.querySelector(`.${cla}`).classList.toggle('active');
}