function calculateMortgage() {

    const price = Number(document.getElementById("price").value);
    const down = Number(document.getElementById("down").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    const loanAmount = price - down;

    const monthlyRate = rate / 100 / 12;
    const numberPayments = years * 12;

    const payment =
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberPayments)) /
        (Math.pow(1 + monthlyRate, numberPayments) - 1);

    document.getElementById("payment").innerHTML =
        "$" + payment.toFixed(2);

}


function calculateRental() {

    const rent = Number(document.getElementById("rent").value);
    const expenses = Number(document.getElementById("expenses").value);

    const cashFlow = rent - expenses;

    document.getElementById("cashflow").innerHTML =
        "$" + cashFlow.toFixed(2);

}


// Enable app installation features
if ("serviceWorker" in navigator) {

    window.addEventListener("load", function() {

        navigator.serviceWorker.register("service-worker.js")
        .then(function() {
            console.log("MortgageMate Pro is ready");
        });

    });

}
