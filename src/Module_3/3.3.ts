{
    // type guard
    type Jkonoman = string | number
    const add = (
        param1: Jkonoman,
        param2: Jkonoman
    ): Jkonoman => {
        if(typeof param1 === "string" || typeof param2 === "string") {
            return `${param1}${param2}`
        }
        else {
            return param1 + param2
        }
    }

    const result = add(3, 4)

    const result2 = add("Rimon", "Hossain")


    console.log(result);
    console.log(result2);

}