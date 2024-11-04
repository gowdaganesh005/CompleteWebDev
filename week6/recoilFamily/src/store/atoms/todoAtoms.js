import { Todos } from "../../Todos"
import { atomFamily } from "recoil"

console.log(Todos)
export const todosAtomFamily=atomFamily({
    key:"todosAtomFamily",
    default: id=>{
        return Todos.find(x=>(x.id===id))
    }
})