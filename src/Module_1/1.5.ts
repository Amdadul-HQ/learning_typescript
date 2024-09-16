const user: {
    company : "Monster Studio" //literal type
    firstName: string,
    lastName: string,
    age: number,
    address?: {
        city: string,
        country: string
    }
} = {
    company: "Monster Studio",
    firstName: "Rimon",
    lastName: "Hossain",
    age: 22,
}
console.log(user);
