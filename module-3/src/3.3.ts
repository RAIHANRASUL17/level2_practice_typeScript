{
    // 3-3: Type guard using typeof & in
    // Example-1
// typeof guard
type Alphaneumeric = number | string
 const add = (param1: Alphaneumeric, param2: Alphaneumeric): Alphaneumeric =>{
if(typeof param1 === "number" && typeof param2 === "number"){
    return param1+param2
}else{
    return param1.toString() + param2.toString()
}
 };
 const result1 = add(2, 2)
 console.log(result1)


// example2: in guard
type NormalUser = {
    name: string
}
type AdminUser = {
    name: string;
    role: string
}

const getUser = (user : NormalUser | AdminUser) => {
if("role" in user){
    console.log(`name: ${user.name} admin ${user.role}`)
}else{
    console.log(`${user.name}`)
}
};


const normalUser : NormalUser = {
    name: "Mr. Normal bahi"
}
const adminUser : AdminUser = {
    name: "Mr. admin Bhai",
    role: 'admin'
}

// call
getUser(normalUser)






    // 
}