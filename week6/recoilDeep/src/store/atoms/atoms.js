import { atom, selector } from  "recoil"

export const networkAtom=atom({
    key:"networkAtom",
    default:0,
})

export const messagingAtom=atom({
    key:"messagingAtom",
    default:3,
})

export const jobsAtom=atom({
    key:"jobsAtom",
    default:0,
})

export const NotificationAtom=atom({
    key:"NotificationAtom",
    default:103,
})

export const Mecount=selector({
    key:"MeCount",
    get:(({get})=>{
        const meCount=get(networkAtom)+get(jobsAtom)+get(NotificationAtom)+get(messagingAtom)
        return meCount
    })
})

