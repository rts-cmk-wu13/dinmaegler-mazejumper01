export default function HomeInfo() {

    return (
        <>
            <section className="InfoSection
            
                grid grid-cols-[20rem_1fr_1fr_20rem] grid-rows-[1fr_10rem_20rem]  mt-[7.688rem] items-start
                ">



                <img src="../src/assets/fam38.png" alt=""
                
                className="col-start-2 col-end-3"
                />

                <article
                
                className="col-start-3 col-span-3 max-w-[33.75rem]"
                >
                    <h2 className="text-[2.375rem] font-bold mb-[2rem] text-[#263048]">Vi har fulgt danskerne hjem i snart 4 årtier</h2>

                    <h3  className="text-[1.5rem] mb-[1rem] text-[#263048]">Det synes vi siger noget om os!</h3>

                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                         The point of using Lorem Ipsum is that it has normal distribution.</p>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                
                    <div className="flex gap-[5rem] mt-[2rem]">
                        <div className="grid grid-cols-[4.3rem_1fr] grid-rows-[2rem_2rem] gap-x-[1rem]">
                            <figure className="row-start-1 row-end-[3] w-[4.375rem] h-[4.375rem] flex justify-center bg-[#EEF7FF]">
                                <img
                                
                                className=" max-w-[2.625rem] max-h-[2.625rem] self-center"
                                src="../src/assets/house2.png" alt="" />
                            </figure>

                            <p className="self-center text-[1.5rem]">4829</p>
                            <p className="col-start-2 self-center">boliger solgt</p>
                        </div>

                        <div className="grid grid-cols-[4.3rem_1fr] grid-rows-[2rem_2rem] gap-x-[1rem]">
                            <figure className="row-start-1 row-end-[3] w-[4.375rem] h-[4.375rem] flex justify-center bg-[#EEF7FF]">
                                <img
                                
                                className="max-w-[2.625rem] max-h-[2.625rem] self-center"
                                src="../src/assets/house1.png" alt="" />

                            </figure>
                            <p className="self-center text-[1.5rem]">158</p>
                            <p className="col-start-2 self-center">boliger til salg</p>
                        </div>
                    </div>
                </article>

                <div className="w-[73.75rem] justify-self-center self-center h-[0.1rem]  bg-[#D3DEE8]  col-start-1 col-end-[-1]"/>

                <div
                className="col-start-1 col-end-[-1] flex items-center justify-center
                ">
                    
                    <div className="
                        max-w-[69.25rem] flex mb-[10rem]
                    ">
                        <div>
                            <img src="../src/assets/property1.png" alt="" />

                            <p>Bestil et salgstjek</p>
                            <p>Med et Din Mægler Salgstjek bliver du opdateret på værdien af din bolig.</p>
                        </div>

                        <div>
                            <img src="../src/assets/vector.svg" alt="" />

                            <p>74 butikker</p>
                            <p>Hos Din Mægler er din bolig til salg i alle vores 74 butikker, som er fordelt rundt om i Danmark.</p>
                        </div>

                        <div>
                            <img src="../src/assets/customer1.png" alt="" />

                            <p>Tilmeld køberkartotek</p>
                            <p>Når du er tilmeldt vores køberkartotek, bliver du kontaktet inden en ny bolig bliver annonceret.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}