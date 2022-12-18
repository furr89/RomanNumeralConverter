# RomanNumeralConverter
Implementation of a roman numeral converter in JS

Made use of a map where numbers would correspond to its roman numeral. It runs a loop and iterates based on the number of numbers in the input where the max number size is 4 (9999). It finds a number based on the length of it so out of 9999, it would have a base number of 1000 and its roman numeral is "M". Then there is another while loop that runs based on the size of that base number, so if the base number is 9000, it would run 9 times then append it to the final answer. The time complexity for this approach is O(l*n) where l is the length of the number and n is the size and the space complexity is O(n) because it uses another string to save the output.
