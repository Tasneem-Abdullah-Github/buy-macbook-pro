function priceFixer(priceId, cost) {
    const productCost = document.getElementById(priceId);
    productCost.innerText = cost;
}

document.getElementById('usual-memory-btn').addEventListener('click', function () {
    priceFixer('extra-memory', 00);
});

document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    priceFixer('extra-memory', 180);
});

document.getElementById('usual-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', 00);
});

document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', 100);
});

document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    priceFixer('extra-storage', 180);
});

document.getElementById('free-shiping').addEventListener('click', function () {
    priceFixer('shiping-charge', 00);
});

document.getElementById('charge-shiping').addEventListener('click', function () {
    priceFixer('shiping-charge', 20);
});