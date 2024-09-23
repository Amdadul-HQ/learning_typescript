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

    interface  NormalUser{
        name:string
    }
    interface AdminUser {
        name:string
        role:string
    }

    const normalUser: NormalUser = {name:"Rimon"}
    const getRole : NormalUser | AdminUser = (user: AdminUser | NormalUser) => {
        if ('role' in user) {
            console.log(`${user.name} is a ${user.role}`);
        }
        else {
            console.log(`${user.name} is a normal user`);
        }
    }

    const adminUser = {
        name: "Rimon",
        role: "admin"
    }
    getRole(adminUser)





    // const user = (param : NormalUser | AdminUser) : NormalUser | AdminUser => {
    //     if ('role' in param) {
    //         console.log(`${param.name} is a ${param.role}`);
    //     } else {
    //         console.log(`${param.name} is a normal user`);
    //     }
    // }

    // const result3 = user({name:"Rimon", role:"admin"})
    // user(result3)





}