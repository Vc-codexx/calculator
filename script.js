// Get the input field element
let output = document.getElementById('input');

// Function to append values to the input field
function btnn(element) {
    let value = element.value
    // output.value += value

    if (value === 'x') {
        output.value += '*'
        //  value += value
        // value += output.value
    }
    else {
        output.value += value
    }

}

function calculate() {
    try {
        output.value = eval(output.value)
    } catch (error) {
        output.value = 'Syntax Error'
        function mia() {
            output.value = ''
        }

        setTimeout(mia, 1000);
    }
}
function clearInput() {
    output.value = ""
}
