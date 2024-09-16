{
    // interface

    type User = {
        name: string,
        address: string,
        age: number
    }
    const user : User = {
        name: "Rimon",
        address: "Dhaka",
        age: 22
    }

    type UserwithRole = User & {
        role: "admin" | "user"
    }

    const userWithRole: UserwithRole = {
        name: "Rimon",
        address: "Dhaka",
        age: 22,
        role: "admin"
    }

    interface UserInterface {
        name: string,
        address: string,
        age: number
    }
    
    const userDetails: UserInterface = {
        name: "Rimon",  
        address: "Dhaka",
        age: 22
    }

    interface UserWithRoleInterface extends UserInterface { 
        role: "admin" | "user"
    }
    
    const UserWithRoleInterface: UserWithRoleInterface = {
        name: "Amdadul",
        address: "Dhaka",
        age: 22,
        role: "user"
    }

    type Roll1 = number[]

    const roll: Roll1 = [1, 2, 3, 4, 5]
    
    interface Roll2 {
        [index:number] :number
    }

    const roll2: Roll2 = [1, 2, 3, 4, 5, 5]
    
    type Add = (number1: number, number2: number) => number

    const add: Add = (num1, num2) => num1 + num2;
    add(1, 2)
    
    interface Add2 {
        (number1: number, number2: number) : number
    }

    const add2: Add2 = (num1, num2) => num1 + num2
    add2(2,3)
    
}