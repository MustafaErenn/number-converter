const SELECTIONS = [
    {
        from: 'binary',
        to: 'decimal',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let binaryNumber = inputNumber;
            let decimal = parseInt(binaryNumber, 2);
            resultArea.value = decimal.toString();
        }
    },

    {
        from: 'binary',
        to: 'hexa',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let binaryNumber = inputNumber;
            let decimal = parseInt(binaryNumber, 2);
            let hexa = decimal.toString(16);
            resultArea.value = hexa.toString();
        }
    },

    {
        from: 'decimal',
        to: 'binary',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let decimalNumber = parseInt(inputNumber);
            let binary = decimalNumber.toString(2);
            resultArea.value = binary.toString();       
        }
    },

    {
        from: 'decimal',
        to: 'hexa',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let decimalNumber = parseInt(inputNumber);
            let hexa = decimalNumber.toString(16).toUpperCase();
            resultArea.value = hexa.toString();
        }
    },


    {
        from: 'hexa',
        to: 'binary',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let decimal = parseInt(inputNumber,16);
            let binary = decimal.toString(2);
            resultArea.value = binary.toString();   
        }
    },

    {
        from: 'hexa',
        to: 'decimal',
        result: (inputNumber) => {
            let resultArea = document.getElementById('resultArea');
            let decimal = parseInt(inputNumber,16);
            resultArea.value = decimal.toString();
        }
    }

]
function convertFunc() {
    let fromSelection = document.getElementById('fromSelection');
    let toSelection = document.getElementById('toSelection');
    let inputNumberArea = document.getElementById('inputNumberArea');
    let resultArea = document.getElementById('resultArea');

    let fromSelectionValue = fromSelection.value;
    let toSelectionValue = toSelection.value;
    let inputNumber = inputNumberArea.value;

    if (fromSelectionValue !== 'default' && toSelectionValue !== 'default') {

        SELECTIONS.forEach(choice => {
            if (fromSelectionValue === choice.from && toSelectionValue === choice.to) {
                console.log('chohice result = ');
                choice.result(inputNumber);
            }
        });

    }
    else {
        alert("İşlem Yapılamaz");
    }
}



