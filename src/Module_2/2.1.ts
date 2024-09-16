{
    // Type assertion
    const name = "Rimon" as string;

    const kgToGram = (value: number | string) :number | string | undefined => {
        if (typeof value === "string") {
            const gram = parseFloat(value) * 1000;
            return `${value} Kg = ${gram} gram`;
        }
        return value * 1000
    }


    const result = kgToGram("5") as string
    const result2 = kgToGram(5) as number
}

