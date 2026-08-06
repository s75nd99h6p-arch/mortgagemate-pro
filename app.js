function calculateMortgage() {

    const price = Number(document.getElementById("price").value);
    const down = Number(document.getElementById("down").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    const taxes = Number(document.getElementById("taxes").value);
    const insurance = Number(document.getElementById("insurance").value);
    const pmi = Number(document.getElementById("pmi").value);
    const hoa = Number(document.getElementById("hoa").value);


    const loanAmount = price - down;

    const monthlyRate = rate / 100 / 12;
    const payments = years * 12;


    let principalInterest = 0;


    if (monthlyRate === 0) {

        principalInterest = loanAmount / payments;

    } else {

        principalInterest =
        loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, payments)) /
        (Math.pow(1 + monthlyRate, payments) - 1);

    }


    const totalPayment =
        principalInterest +
        taxes +
        insurance +
        pmi +
        hoa;


    document.getElementById("payment").innerHTML =
        "$" + totalPayment.toFixed(2);



    document.getElementById("breakdown").innerHTML =

    `
    Principal & Interest: $${principalInterest.toFixed(2)}
    <br>
    Taxes: $${taxes.toFixed(2)}
    <br>
    Insurance: $${insurance.toFixed(2)}
    <br>
    PMI: $${pmi.toFixed(2)}
    <br>
    HOA: $${hoa.toFixed(2)}
    `;

}



function calculateRental() {

    const rent =
    Number(document.getElementById("rent").value);

    const expenses =
    Number(document.getElementById("expenses").value);


    const cashFlow =
    rent - expenses;


    document.getElementById("cashflow").innerHTML =
    "$" + cashFlow.toFixed(2);

}



// Enable offline app features

if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker.register(
            "service-worker.js"
        );

    });

}
