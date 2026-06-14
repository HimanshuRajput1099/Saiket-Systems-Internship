function calculateEMI() {

    let P = parseFloat(document.getElementById("principal").value);
    let annualRate = parseFloat(document.getElementById("rate").value);
    let N = parseFloat(document.getElementById("tenure").value);

    let R = annualRate / 12 / 100;

    let EMI =
        (P * R * Math.pow(1 + R, N)) /
        (Math.pow(1 + R, N) - 1);

    document.getElementById("result").innerText =
        "Monthly EMI: ₹" + EMI.toFixed(2);
}