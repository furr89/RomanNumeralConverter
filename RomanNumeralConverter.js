const numerals = new Map([
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
]);

function convertToRoman(num) {

    // Check for inputs above 9999 or below 1 exclusive
    if (num > 9999 || num <= 0) {

        console.log("Number out of range");
        return null;
    }

    let romanNumber = "";
    let currentNumeral = "";

    if (numerals.has(num)) {

        console.log(numerals.get(num))
        return numerals.get(num);
    }

    while (num > 0) {

        // Calculates the first number
        let numOfDigits = Math.floor(Math.log(num)/Math.log(10));
        let firstNum = Math.floor(num / Math.pow(10, numOfDigits));

        // Calculates the base number of the numeral
        let len = Math.ceil(Math.log10(num + 1)) - 1;
        let base = Math.pow(10, len);

        // Builds the current numeral
        let x = 0;
        let target = firstNum * base;
        while (x <= target) {
    
            currentNumeral += numerals.get(base);
    
            if (numerals.has(x)) {
                currentNumeral = numerals.get(x);
            }
    
            x += base;
        } 

        // Lowers 'num' and add to the result
        num -= (firstNum * base);
        romanNumber += currentNumeral;

    }

    console.log(romanNumber);
    return romanNumber;

}
   

// Test Cases
convertToRoman(0); // Should return null.
convertToRoman(2); // Should return II.
convertToRoman(3); // Should return III.
convertToRoman(4); // Should return IV.
convertToRoman(5); // Should return V.
convertToRoman(8); // Should return VIII.
convertToRoman(9); // Should return IX.
convertToRoman(12); // Should return XII.
convertToRoman(16); // Should return XVI.
convertToRoman(29); // Should return XXIX.
convertToRoman(36); // Should return XXXVI
convertToRoman(44); // Should return XLIV.
convertToRoman(45); // Should return XLV.
convertToRoman(68); // Should return LXVIII
convertToRoman(83); // Should return LXXXIII
convertToRoman(97); // Should return XCVII
convertToRoman(99); // Should return XCIX
convertToRoman(400); // Should return CD
convertToRoman(500); // Should return D
convertToRoman(501); // Should return DI
convertToRoman(649); // Should return DCXLIX
convertToRoman(798); // Should return DCCXCVIII
convertToRoman(891); // Should return DCCCXCI
convertToRoman(1000); // Should return M
convertToRoman(1004); // Should return MIV
convertToRoman(1006); // Should return MVI
convertToRoman(1023); // Should return MXXIII
convertToRoman(2014); // Should return MMXIV
convertToRoman(3999); // Should return MMMCMXCIX
convertToRoman(10000); // Should return null