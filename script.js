function calculatePercentage() {
    // Get the values from the input fields
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);

    // Find the maximum number
    var max = Math.max(num1, num2, num3);
    var sum = num1 + num2 + num3;

    // Calculate the percentage each number contributes to the maximum
    var percentage1 = ((num1 / sum) * max).toFixed(2);
    var percentage2 = ((num2 / sum) * max).toFixed(2);
    var percentage3 = ((num3 / sum) * max).toFixed(2);

    // Display the results
    document.getElementById('percentage1').textContent = `Percentage of first number: ${percentage1}`;
    document.getElementById('percentage2').textContent = `Percentage of second number: ${percentage2}`;
    document.getElementById('percentage3').textContent = `Percentage of third number: ${percentage3}`;
}
