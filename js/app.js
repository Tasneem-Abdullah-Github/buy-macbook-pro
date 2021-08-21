function setPrice(id, price) {
    document.getElementById(id).innerText = price;
}
document.getElementById('usual-memory-btn').addEventListener('click', function () {
    setPrice('extra-memory', '00');
    updateTotal();
});
document.getElementById('16gb-memory-btn').addEventListener('click', function () {
    setPrice('extra-memory', '180');
    updateTotal();
});
document.getElementById('usual-storage-btn').addEventListener('click', function () {
    setPrice('extra-storage', '00');
    updateTotal();
});
document.getElementById('512gb-storage-btn').addEventListener('click', function () {
    setPrice('extra-storage', '100');
    updateTotal();
});
document.getElementById('1tb-storage-btn').addEventListener('click', function () {
    setPrice('extra-storage', '180');
    updateTotal();
});
document.getElementById('free-shiping-btn').addEventListener('click', function () {
    setPrice('shiping-charge', '00');
    updateTotal();
});
document.getElementById('charge-shiping-btn').addEventListener('click', function () {
    setPrice('shiping-charge', '20');
    updateTotal();
});

function updateTotal() {
    const mainCost = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('extra-memory').innerText;
    const storageCost = document.getElementById('extra-storage').innerText;
    const shipingCost = document.getElementById('shiping-charge').innerText;
    const total = parseInt(mainCost) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(shipingCost);
    document.getElementById('total-price').innerText = total;
    document.getElementById('grand-total').innerText = document.getElementById('total-price').innerText;
    document.getElementById('promo-code-apply-btn').removeAttribute('disabled');
};

document.getElementById('promo-code-apply-btn').addEventListener('click', function () {
    let userPromoCode = document.getElementById('promo-code-field').value;
    if (userPromoCode.toLowerCase() == 'stevekaku') {
        document.getElementById('total-price').innerText = parseInt(document.getElementById('total-price').innerText) - parseInt(document.getElementById('total-price').innerText) / 5;
        document.getElementById('grand-total').innerText = document.getElementById('total-price').innerText;
        document.getElementById('promo-code-apply-btn').setAttribute('disabled', true);
        document.getElementById('promo-code-field').value = '';
        document.getElementById('error').classList.add('d-none');
    }
    else {
        document.getElementById('error').classList.remove('d-none');
    }
});