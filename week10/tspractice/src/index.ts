//Advance Typescript API

interface User{
    id:number,
    name: string,
    age: number,
    email: string,
    password: string
}

//suppose the db user schema looks like this and we want onlu to pass name age email to change or update fuction so instead of creating a new interface we can pick maintaining the original source of truth

type UpdateUser=Pick<User, "age" |"name" | "password" >  // pick is a genric with params as parameters of the genrics interfsce or class

// but when user want only to pass only password and not other params so then we should make all params optional to do that we have Partial Api

type UpdateOptionalUser=Partial<UpdateUser> /// again we have single source of truth 
//type UpdateOptionalUser=Partial<UpdateUser, 'email'| 'age' |' password'> is not valid syntax

function update(user:UpdateOptionalUser){
    console.log("updated user")
}



// assume if we have an const obj ={name: "afija"} we can do obj.name="jkdjkdfjkda"  and even though the obj is const but here the obj is constant not the properties 
// to enforce this ts has readOnly

interface config{
    readonly uunid:string
    readonly quuid:string
}

const devconfig: config={
    uunid:"fkjadsfklj",
    quuid:"jafkldjakl"
}

// devconfig.quuid="kjasdfklaj"
//throws error Cannot assign to 'quuid' because it is a read-only property.ts(2540)

// to have objects of unknown keys 
// used to avoid the changing config files

interface Users{
    [key: string]:User
}

const dbusers:Users={  /// here we cannot define in normal way like before so to make it we can have a above syntax 
    "jdfoj0954802":{
        id:8098,
        name:"jdafklja",
        age:66,
        email:"akdjf;lak",
        password:"aiourioq"

    },
    "fjkl":{
        id:8098,
        name:"jdafklja",
        age:66,
        email:"akdjf;lak",
        password:"aiourioq"

    }
}

//but typescript has a new api to make our work easy which is a Record

type UsersR=Record<string,User>
// this and this is same but above one is cleaner and uses ts api
// interface Users{
//     [key: string]:User
// }

// instead of using objects we can use map like in programming languages and but we can use map in js and ts

const UsersM=new Map<string,User>()

UsersM.get("key")


