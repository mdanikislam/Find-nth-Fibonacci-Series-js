document.getElementById('output').addEventListener('click', function () {
    const input = document.getElementById('input-field');
    document.getElementById('display-fibonacci').innerHTML = '';
    const number = parseInt(input.value);
    input.value = '';

    var num1 = 0, num2 = 1;
    var next_term = 0;
    for (i = 1; i < number; i++) {
        if (i <= 1)
            next_term = i;
        else {
            next_term = num1 + num2;
            num1 = num2;
            num2 = next_term;
        }
        // print the sum of the series  
        document.getElementById('display-fibonacci').innerHTML += "Adding " + num1 + " and " + next_term + " = " + (num1 + num2) + "<br>";


    }
});