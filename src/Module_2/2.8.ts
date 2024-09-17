{
    // Promise

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
    showdata();
}