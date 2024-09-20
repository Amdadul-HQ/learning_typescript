{

    const numberArray: number[] = [1, 2, 3, 4, 5]
    
    const stringArray: string[] = numberArray.map(number => number.toString())
    
    console.log(stringArray);

    type arearNumber = {
        height: number,
        width: number
    }

    type areaString<T> = {
        [key in keyof T ]: T[key]
    }

    type Height = arearNumber["height"] // look up type


    const area: areaString<{ height: number, width: string }> = {
        height: 10,
        width: '10'
    }
    


}