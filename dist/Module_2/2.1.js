"use strict";
{
    // Type assertion
    const name = "Rimon";
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const gram = parseFloat(value) * 1000;
            return `${value} Kg = ${gram} gram`;
        }
        return value * 1000;
    };
    const result = kgToGram("5");
    const result2 = kgToGram(5);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
