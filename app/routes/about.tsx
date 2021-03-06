import { CodeIcon, MailIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons"
export default function About(){
    return(
        <>
        <div className="bg-primary outline rounded-2xl outline-2 outline-secondary overflow-hidden shadow-sp">
            <div className="h-auto w-full bg-secondary p-3 text-white text-md outline-secondary outline outline-5"><h2 className="text-md">About</h2></div>
            <div className="p-4 text-xs text-white">
                <div>
                <div className="flex flex-row h-5 w-full pt-1">
                    <p>Created by Alexander Konrad (HppyDedPxl.7508)</p>
                </div>
                <div className="pl-2">
                <div className="flex flex-row h-5 w-full pt-1">
                <div className="align-middle"><SocialIcon network="twitter"style={{height:"14px",width:"14px"}} color="white"></SocialIcon></div>
                    <p className="flex pl-1"><a className="text-link hover:text-white hover:transition-all transition-all" href="https://twitter.com/HppyPxl" target="_blank">@HppyPxl</a></p>
                </div>
                <div className="flex flex-row h-5 w-full pt-1">
                    <CodeIcon className="flex pr-1" color="white" fontSize={2}></CodeIcon>
                    <p className="flex"><a className="text-link hover:text-white hover:transition-all transition-all" href="https://github.com/HppyDedPxl/gw2_item_finder" target="_blank">Find the Source on Github</a></p>
                </div>
                <div className="flex flex-row h-5 w-full pt-1">
                    <MailIcon className="flex pr-1" color="white" fontSize={2}></MailIcon>
                    <p className="flex">alexander@thelazydev.net</p>
                </div>
                </div>
                </div>
                <div className="pt-2"></div>
                <div>
                    <p>Special Thanks:</p>
                    <div className="pb-1"></div>
                    <div className="pl-2">
                    <div className="flex flex-row h-5 w-full pt-1">    
                    <div className="align-middle"><SocialIcon network="twitter" style={{height:"14px",width:"14px"}} color="white"></SocialIcon></div>             
                    <p className="flex pl-1"><a className="text-link hover:text-white hover:transition-all transition-all" href="https://twitter.com/Rolilichan" target="_blank">@Rolilichan (Logo Design)</a> </p>
                    </div>
                    </div>   
                </div>
                <div className="pt-6"></div>
                <p>Something not working as expected?</p>
                
                <div className="pb-1"></div>
                <div className="flex flex-row w-full pt-1">    
                <button className="transition-all hover:transition-all duration-300 ease-in-out h-6 w-full bg-info  text-black hover:text-gray rounded-3xl hover:rounded-md mx-1" onClick={(e)=>{e.preventDefault(); window.open('https://status.gw2efficiency.com/','_blank')}}>Check the API Status!</button>
                <button className="transition-all hover:transition-all duration-300 ease-in-out h-6 w-full bg-negative  text-black hover:text-gray rounded-3xl hover:rounded-md mx-1" onClick={(e)=>{e.preventDefault(); window.open('https://github.com/HppyDedPxl/gw2_item_finder/issues','_blank')}}>Create a bug report!</button>
                </div>
            </div>
        </div>

        </>
    )
}