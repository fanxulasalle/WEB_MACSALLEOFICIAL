document.addEventListener('DOMContentLoaded', (event) => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Enero es 0
    const year = currentDate.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById('current-date').textContent = formattedDate;
});

window.onload = function() {
    calculateTotal();
};

function calculateTotal() {
    let prices = document.querySelectorAll('.price');
    let total = 0;
    prices.forEach(function(price) {
        total += parseFloat(price.innerText.replace('€', ''));
    });

    document.getElementById('total-price').innerText = total.toFixed(2) + '€';
}
