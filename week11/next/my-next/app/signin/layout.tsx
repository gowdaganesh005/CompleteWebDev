export default function({children}:{
    children:React.ReactNode
}){
    return(
        <>
        <div className="p-4 border">
            20% off in few days
        </div>
        {children}
        </>
    )
}