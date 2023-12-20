"use strict";
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    const result1 = add(2, 2);
    console.log(result1);
    const getUser = (user) => {
        if ("role" in user) {
            console.log(`name: ${user.name} admin ${user.role}`);
        }
        else {
            console.log(`${user.name}`);
        }
    };
    const normalUser = {
        name: "Mr. Normal bahi"
    };
    const adminUser = {
        name: "Mr. admin Bhai",
        role: 'admin'
    };
    // call
    getUser(normalUser);
    // 
}
