{

    type Array = string[]

    type ReverceFun = (arr: Array) => Array
    
    const reverceFun: ReverceFun = (arr) => {
        return arr.reverse()
    }


    const arr: Array = ["Rimon", "Hossain", "Rafsan"]
    console.log(reverceFun(arr));

}