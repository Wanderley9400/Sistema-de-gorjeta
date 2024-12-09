
const calculateTip = (billAmount, serviceQuality, callback) => {
    const tip = billAmount * serviceQuality;
    callback(tip);
};

const displayResult = (tip) => {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = `Gorjeta sugerida: R$ ${tip.toFixed(2)}`;


    const thankYouMessage = document.createElement("p");
    thankYouMessage.textContent = "Obrigado por visitar nosso restaurante, agradecemos por sua visita! 😊";
    thankYouMessage.style.marginTop = "10px";
    thankYouMessage.style.fontSize = "16px";
    thankYouMessage.style.color = "#28a745";
    
    if (resultDiv.nextElementSibling) {
        resultDiv.nextElementSibling.remove();
    }

    resultDiv.insertAdjacentElement("afterend", thankYouMessage);
};
document.getElementById("calculateTip").addEventListener("click", () => {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const serviceQuality = parseFloat(document.getElementById("serviceQuality").value);

    
    if (isNaN(billAmount) || billAmount <= 0) {
        alert("Por favor, insira um valor válido para a conta.");
        return;
    }

    
    calculateTip(billAmount, serviceQuality, displayResult);
});
