import Benefits from "@/components/Benefits";
import SignUpForm from "@/components/SignUpForm";
import TopMessage from "@/components/TopMessage";
import Header from './../components/Header';

export default function SignUp(){
    return(
        <div className="">
            <TopMessage />
            <div  className="wrapper bg-[#3B2779] px-[20px] pb-[20px] lg:pb-[40px]">
                <Header />
                <div className='font-sans antialiased lg:relative flex flex-col text-[13px] p-[30px] lg:p-[20px] m-auto lg:flex-row lg:w-[790px] bg-[rgb(249,248,250)] box-border rounded-md'>
                    <Benefits />
                    <SignUpForm />
                </div>
            </div>
        </div>
    )
}