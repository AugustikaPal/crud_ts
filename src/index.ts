import { userList } from "./user";


interface User{
    id:number,
    name:string,
    email:string,
    role:string
}

const createUser=(name:string , email:string , role:string):void=>
{
    if(userList.some((user:User)=>user.email == email)){
        console.log(`user with this email already exists`);
        return ;
    }

    let newID = userList.length+1;
    const newUser:User = {
        id:newID,name,email,role
    }
    userList.push(newUser);

   
}
console.log(` create  operation: `)
createUser("Yash","xyz@momos.com","viewer");
console.log(`Printing current userlist:`,userList);
console.log(`Size of userlist : `,userList.length);
    //read operation

    const findUser =(id:number):void=>{
        const index:number = userList.findIndex((user:User)=>user.id===id)
       ;
       if(index!==-1)
        {
            console.log(`user found at ${index}`);
        } 
        else{
            console.log(`User does not exists`);
        }
    }

console.log(`read Operation`)
    findUser(13);


    //update iser
    const updateUser=(id:number , new_name:string , new_email:string , new_role:string):void=>{

        const index :number = userList.findIndex((user:User)=>user.id===id);

        if(index!==-1)
        {
           //console.log(userList[index]);
            userList[index].name = new_name || userList[index].name;
            userList[index].email = new_email || userList[index].email;
            userList[index].role = new_role || userList[index].role;
            console.log(`user updated successully`);
        }
        else{
            console.log(`user not found`);
        }

    }


    console.log(`update operation : `);
    updateUser(10,"Yash Pal","abc@yahoo.com","cricketer");
    console.log(userList);


    //delete 

    const deleteUser =(id:number):void=>{
          const index:number = userList.findIndex((user:User)=>user.id===id);
          if(index!==-1)
          {
            userList.splice(index,1);
            console.log(`User deleted successfullyy`);
          }
          else
          {
            console.log(`user does not exist`);
          }
        
        

    }
    
    console.log(`delete operation : `);
    deleteUser(17);
    console.log(userList);
    console.log(`Size of userlist : `,userList.length);


