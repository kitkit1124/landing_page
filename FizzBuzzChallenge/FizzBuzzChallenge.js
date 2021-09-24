var numbers = [7, -2, -3, 4, -5, 7, -8, 12, -12, 43, 6]

function generate(numbers)
{
    var positiveArr = [];
    var negativeArr = [];
    var converted = [];
    var difference = 0;

    numbers.forEach(function(val) {
        if (val < 0) {
            negativeArr.push(val);
        } else {
            positiveArr.push(val)
        }
    });

    negativeArr.forEach(function(val) {
        return  converted.push(convert_positive(val));
    });

    maxValue = Math.max(...converted);
    minValue = Math.min(...converted);
    difference = maxValue - minValue;

    console.log("Array of numbers: " + numbers);
    console.log("Converted value: " + converted);
    console.log("Max value: " + maxValue);
    console.log("Min value: " + minValue);
    console.log("Difference of Max and Min value: " + difference);

    return difference;
}

function convert_positive(a)
{
    // Check the number is negative
    if (a < 0) {
        // Multiply number with -1
        // to make it positive
        a = a * -1;
    }
    // Return the positive number
    return a;
}