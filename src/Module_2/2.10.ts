{

    const numberArray: number[] = [1, 2, 3, 4, 5]
    
    const stringArray: string[] = numberArray.map(number => number.toString())
    
    console.log(stringArray);

    type arearNumber = {
        height: number,
        width: number
    }

    type areaString = {
        [key in keyof arearNumber]: string
    }




}