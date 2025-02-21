let betAmount = 0;
let legs = [];

function updateBet() {
    let betInput = document.getElementById('benInput');
    betInput = parseFloat(betInput.value) || 0;
    updatePayout();
}

function addLeg() {
    let legInput = document.getElementById('legInput');
    let legOdds = parseFloat(legInput.value);
    if (isNaN(legOdds)) {
        alert("Please enter a valid number for te leg!");
        return;
    }
    legs.push(legOdds);
    legInput.value = '';
    updatePayout();
}

function updatePayout() {
    let totalPayout = betAmount;
    legs.forEach(odd => {
        if (odd < 0) {
            payout *= (100 / (100 - odd));
        } else {
            payout *= (1 + odd / 100);
        }
    });
    document.getElementById('totalPayout').innerText = payout.toFixed(2);
}