
import Image from "next/image"

function Header() {
    return (
        <div className="text-white flex flex-col font-sans text-center justify-between lg:w-[800px] lg:h-[181px] m-auto">
            <div className="flex items-center justify-between pt-[20px]">
                <a className="top-5" href="#" ><Image src="/assets/heroku_logo.png" width={150}  height={42} alt="logo" className="h-[42px]" /></a>
                <div className="flex justify-center text-sm items-center">
                    <span className="hidden sm:block text-[13px">Already have an account? &nbsp;</span>
                    <button className="flex text-[#ffffffcc] px-[16px] m-[5px] py-[7px] bg-[#00000033] rounded-[4px] w-auto border-[1px] border-transparent subpixel-antialiased box-border font-normal text-[13px] cursor-pointer">Log in</button>
                </div>
            </div>
            <h1 className="text-[30px] leading-[2rem] font-light antialiased mb-[35px] mt-[40px] text-center">Get started on Heroku today</h1>
        </div>
    )
}

export default Header