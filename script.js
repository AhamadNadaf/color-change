document.addEventListener("DOMContentLoaded", function() {
    const colorInput = document.getElementById("color-input");
    const changeColorButton = document.getElementById("change-color-button");
    const colorOutput = document.getElementById("color-output");
    const colorHistory = document.getElementById("color-history");
    const selectedColors = [];
    let count = 0

    changeColorButton.addEventListener("click", function() {
        const selectedColor = colorInput.value;
        document.body.style.backgroundColor = selectedColor;
        let colorsss = `${++count} ${selectedColor}`

        selectedColors.push(colorsss);
        
        colorOutput.textContent = `Present Selected Color: ${selectedColor}`;
        colorHistory.innerHTML = "Selected Colors:<br>" +selectedColors.join("<br>");

        fetch("colorChange.php", {
            method: "POST",
            body: JSON.stringify({ color: selectedColor }),
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then(response => response.text())
        .then(data => console.log(data));
    });
});




