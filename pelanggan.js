// JavaScript for customer page
document.getElementById("billingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var hours = parseFloat(document.getElementById("hours").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var total = hours * rate;
    document.getElementById("result").innerText = "Total Billing: $" + total.toFixed(2);
});
