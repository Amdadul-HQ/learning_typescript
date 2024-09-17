"use strict";
{
    // function with generic
    const createArry = (value) => {
        return [value];
    };
    const createArrayWithGeneric = (value) => {
        return [value];
    };
    const userDetails = createArrayWithGeneric({
        name: "Rimon",
        address: "Dhaka",
        age: 22
    });
    const createArrayWithTuple = (value1, value2) => {
        return [value1, value2];
    };
    const result = createArrayWithTuple("Rimon", 22);
}
