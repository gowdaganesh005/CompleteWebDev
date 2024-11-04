export const RevenueCard=(
    {
        title,
        amount,
        ordercount

    }
)=>{
    // no assumption about width so create for full size
    return <>
    <div className="bg-white rounded shadow-lg p-4">
        <div className="text-gray-600 ">{title} ?</div>
        <div className="flex justify-between">
            <div><b>₹ {amount}</b></div>
            {ordercount? <div className="text-blue-500"> {ordercount} {" order(s) >"}</div> :null}
            
        </div>
    </div>
    </>
}