{
    // Promise
    interface TODO {
        id: number,
        userId: number,
        title: string,
        completed: boolean
    }

    const getToDo = async () : Promise<TODO> => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/1"
        );
        const data = await response.json();
        console.log(data);
        return data
    }
    getToDo()

    const createPromise = () => {
        const data :string = "something"
        return new Promise((resolve, reject) => {
            if (data) {
                resolve(data)
            }
            else {
                reject("Something went wrong")
            }
        })
    }

    const showdata = async () => {
        const result = await createPromise();
        console.log(result)
    }
    // showdata();
}