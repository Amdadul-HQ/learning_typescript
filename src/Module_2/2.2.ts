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
}