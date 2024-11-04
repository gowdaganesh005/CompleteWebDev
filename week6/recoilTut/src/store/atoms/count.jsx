import {atom ,selector} from "recoil"

export const CountAtom=atom({   // Atom is the smallest unit of state that recoil provides 
    key:"CountAtom",
    default:0
})

export const IsEvenSelector=selector({
    key:"IsEvenSelector",           /// this is same as useMemo which will help in to only run the the expensive calculation logic only when dependcy variable changes and avoid expensive run when no change in depended state
    // here in recoil we have selectors which are same as another state that need to be calculated when CountAtom changes and will only compute if that changes here syntax is to be observed the outer get is key to a function the inner function has value access to key and then that get can get us depended atoms and use it 
    // we get "get" inside automaticlly to access the atom
    
    get:(({get})=>{
        const count =get(CountAtom);
        return count%2==0;
    })
})