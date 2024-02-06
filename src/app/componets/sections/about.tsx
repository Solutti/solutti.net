import aboutData from "@/app/data/about";


export function QuemSomos(){
    return(
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-dark" id="quemSomos">
            <div className=" center flex flex-1">
                {/*QUEM SOMOS*/}
                <div>

                </div>
                {/*O QUE FAZEMOS*/}
                <div>

                </div>
                {/*POR QUE ESCOLHER SOLUTTI NETWORKS?*/}
                <div className="flex flex-1 flex-row justify-center items-center">
                    <div className="w-[100%] lg:w-[50%] p-2 space-y-2">
                        <div className=" text-lilas font-sans font-medium text-4xl normal-case">Por que escolher</div>
                        <div className=" text-lilas font-sans font-bold text-4xl capitalize">solutti networks?</div>
                    </div>
                    <div className="w-[100%] lg:w-[50%] p-2 bg-green">
                        {aboutData.map((items) =>
                            <div key={items.id} >{items.name}</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}