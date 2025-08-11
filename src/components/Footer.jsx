import { NavLink } from 'react-router';

export default function Footer() {

    return (
        <footer className="  grid grid-cols-[25rem_1fr_1fr_1rem]">
            <div className="py-[5rem] bg-gray-100 col-start-1 col-end-[-1] grid grid-cols-[25rem_1fr_1fr_1rem]">
                <div className="col-start-2">
                    <img className="pb-[2rem]" src="../src/assets/g1430.png" alt="#" />
                    <p className="pb-[3rem]">There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered alteration in some form,
                        by injected humour, or randomised words.</p>
                </div>
                
                <div className="card max-w-[27.75rem] relative col-start-2">
                    <div className=" shadow-lg bg-white rounded-l p-8 absolute h-[27.125rem]">
                        <ul className="grid grid-rows-3 gap-4">
                            
                            <li className="grid grid-cols-[4rem_1fr] grid-rows-[2rem_2rem]">
                                <figure className="rounded-full w-[3.75rem] h-[3.75rem] bg-indigo-400  flex items-center justify-center">
                                <img className="
                                flex items-center justify-center
                                " src="../src/assets/call 1.svg" alt="#" />
                                </figure>
                                
                                <p className="text-[0.75rem] text-[#7B7B7B] flex items-end">Ring til os</p>
                                <p className="col-start-2">+45 7070 4000</p>
                            </li>
                                
                            <li className="grid grid-cols-[4rem_1fr] grid-rows-[2rem_2rem]">
                                <figure className="rounded-full w-[3.75rem] h-[3.75rem] bg-indigo-400  flex items-center justify-center">
                                <img className="" src="../src/assets/paper-plane.svg" alt="#" />
                                </figure>
                                <p className="text-[0.75rem] text-[#7B7B7B] flex items-end">Send os en mail</p>
                                <p className="col-start-2">email@gmail.com</p>
                            </li>

                            <li className="grid grid-cols-[4rem_1fr] grid-rows-[2rem_2rem]">
                                 <figure className="rounded-full w-[3.75rem] h-[3.75rem] bg-indigo-400  flex items-center justify-center">
                                <img className="row-start-1 row-end-[-1] " src="../src/assets/Vector.svg" alt="#" />
                                </figure>
                                <p className="text-[0.75rem] text-[#7B7B7B] flex items-end">Besøg os</p>
                                <p className="col-start-2 ">Din Mægler, Gadevej 1, 4000 Roskilde</p>
                            </li>
                        </ul>

                        <p className="mt-[1rem]">Din Mægler Roskilde, er din boligibutik i lokalområdet.</p>
                    </div>
                </div>

                <nav>
                    <h2 className="capitalize pb-[1rem] text-[1.5rem] font-bold">quick links</h2>
                    <ul>
                        <li className="pb-[1rem]">
                            <NavLink>Boliger til salg</NavLink>
                        </li>


                        <li className="pb-[1rem]">
                            <NavLink>Mæglere</NavLink>
                        </li>


                        <li className="pb-[1rem]">
                            <NavLink>Kontakt os</NavLink>
                        </li>


                        <li>
                            <NavLink>Log ind / bliv bruger</NavLink>
                        </li>
                    </ul>
                 </nav> 

       
            </div>
            <div className="bg-white col-start-3 py-[3rem]  flex flex-col items-start ">
                <p className="text-center text-[0.75rem]">Medlem af</p>
                <p className="text-center uppercase text-[2.4rem]">dms</p>
                <p className="text-center">dansk mægler sammenslutning</p>
            </div>

            <p className="col-start-1 bg-indigo-900 py-[1rem] col-end-[-1] text-center text-white">website by magnus borregaard 2025</p>
        </footer>
    )
}