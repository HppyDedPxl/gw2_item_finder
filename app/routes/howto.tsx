
export default function Howto() {

    return(
        <>
        <div className="bg-gray-800 outline rounded-2xl outline-2 outline-gray-900 overflow-hidden">

            <div className="h-auto w-full bg-gray-900 p-3 text-white text-md outline-gray-900 outline outline-5"><h2 className="text-md">Setting up your Account</h2></div>
            <ol className="list-disc text-white test-sx text-xs px-5 py-5" type="1">
                <li type="1" className="list-inside">Head over to the <a href="https://account.arena.net/applications" target="_blank">Guild Wars 2 API Key Management</a>.</li>
                <li type="1" className="list-inside">Click on the "New Key" button.</li>
                <li type="1" className="list-inside">Enter a name of your choice and check at least the following permissions.
                    <div style={{width:"35%",marginLeft:"auto",marginRight:"auto",paddingTop:"8px",paddingBottom:"8px"}}>
                        <a href="Tutorial.png" target="_blank"><img className="border-solid border-gray-500 rounded-md border-2 p-1" src="Tutorial.png"></img></a>
                    </div> 
                </li>
               
                <li type="1" className="list-inside">Copy your new API key.</li>
                <li type="1" className="list-inside">Paste it into the API-Key Input field.</li>
                <li type="1" className="list-inside">Click the "Set Account" button and wait.</li>

            </ol>
        </div>
        </>
    )
}
