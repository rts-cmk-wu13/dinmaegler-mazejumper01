

export default function HomeDownload() {

    return (
        <>

        <section className="h-[32rem] bg-[#162A41] text-white grid grid-cols-[23rem_1fr_1fr_23rem] gap-x-[2rem]">

            <div className="col-start-2 flex flex-col items-start justify-center ">

                <h2 className="text-[2.375rem] font-bold">Hold dig opdateret 
                på salgsprocessen</h2>

                <p>Når du sælger din bolig hos Din Mægler, kommunikerer du nemt med den ansvarlige mægler eller butik med vores app.
                    Her kan du også se statistik på interessen for din bolig i alle vores salgskanaler.</p>


                    <div className="flex gap-x-[1rem] mt-[2rem] w-[25.688rem] ">
                        <button className="w-[11.813rem] h-[3.875rem] bg-white text-[#162A41] flex items-center justify-center gap-x-[0.5rem]">
                        <img src="../src/assets/play-store.svg" alt="" /> Google Play</button>

                        <button className="w-[11.813rem] h-[3.875rem] border-1 flex items-center justify-center gap-x-[0.5rem]">
                        <img src="../src/assets/apple.svg" alt="" />Apple Store</button>
                    </div>
            </div>

                <img className="col-start-3 self-end" src="../src/assets/phones.png" alt="" />

        </section>
        
        </>
    )
}