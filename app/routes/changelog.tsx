
export default function Changelog(){
    return(
        <>
        <div className="bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp">
            <div className="h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"><h2 className="text-md">Changelog</h2></div>
            <div className="p-4 text-xs text-white">
                {/* 1.0 Notes */}
                <div>
                    <div className="flex flex-row h-full">
                     <p className="flex font-bold text-md">v.1.0 </p>
                     <p className="flex italic text-[10px] pb-2 pl-2">(3/13/2022)</p></div>
                   
                    <ul className="changelog-list pl-4">
                        <li className="list-inside">Initial Release</li>
                    </ul>
                </div>
                {/* Notes End */}
            </div>
        </div>
        </>
    )
}