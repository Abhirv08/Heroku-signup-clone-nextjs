
import Image from "next/image"

function Benefits() {
    const width = 33, height = 33;
    return (
        <div id="benefits" className="flex flex-col lg:p-10 font-light bg-[#F9F8FA] pb-5 lg:w-[calc(100%-332px)] box-border">
            <div className="flex flex-col text-white">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4 md:mx-[84px] lg:mx-0 mb-[15px]">
                    <Image src="/assets/user.png" width={width} height={height}  alt='item' className="object-cover mr-3" />
                    <div className="text-left font-light">Heroku account</div>
                </h2>
                <p className="text-left text-sm text-text_color ml-1 leading-6">Create apps, connect databases and add-on services, and collaborate on your apps.</p>
            </div>
            <hr className="mt-12 mb-10 m-auto w-full" />
            <div className="flex flex-col text-center justify-center text-white">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4 md:mx-[84px] lg:mx-0 mb-[15px]">
                    <Image src="/assets/util.png"  width={width} height={height}  alt='item' className="object-cover mr-3"/>
                    <div className="text-left font-light">Your app platform</div>
                </h2>
                <p className="text-left text-sm text-text_color ml-1 leading-6">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
            <hr className="mt-12 mb-10 m-auto w-full" />
            <div className="flex flex-col text-center justify-center text-white mb-7">
                <h2 className="flex items-center text-[#79589F] text-2xl mb-4 md:mx-[84px] lg:mx-0 mb-[15px]">
                    <Image src="/assets/deploy.png"  width={width} height={height}  alt='item' className="object-cover mr-3"/>
                    <div className="text-left font-light">Deploy now</div>
                </h2>
                <p className="text-left text-sm text-text_color ml-1 leading-6">A platform for apps, with app management & instant scaling, for development and production.</p>
            </div>
        </div>
    )
}

export default Benefits