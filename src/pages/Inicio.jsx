import React from 'react'
import Icon from '../components/Icon'
import profile from '../assets/profile.png'

export const Inicio = () => {
    return (
        <div id='portafolio' className="text-white flex w-full h-screen overflow-hidden">
            <header className="flex justify-center items-center w-1/5 h-full overflow-y-auto ">

                <nav className="flex flex-col h-full p-4 gap-2 justify-center border-indigo-500">
                    <a href="#" className="flex items-center gap-1.5 mb-7 font-medium">
                        <Icon name="home" fill="white" />INICIO
                    </a>
                    <a href="#" className="flex items-center gap-1.5 mb-7 font-medium">
                        <Icon name="user" fill="white" />PERFIL
                    </a>
                    <a href="#" className="flex items-center gap-1.5 mb-7 font-medium">
                        <Icon name="folder" fill="white" />PROYECTOS
                    </a>
                    <a href="#" className="flex items-center gap-1.5 mb-7 font-medium">
                        <Icon name="road" fill="white" />EXPERIENCIA
                    </a>
                    <a href="#" className="flex items-center gap-1.5 mb-7 font-medium">
                        <Icon name="contact" fill="white" />CONTACTO
                    </a>
                </nav>
            </header>

            <main className="flex-1 h-full overflow-hidden flex flex-col items-center ">

                <h1 className="text-xl font-bold p-2">INICIO</h1>

                <div className="nav-vertical p-2">
                    <nav className="flex gap-4">
                        <a href="#">Portada</a>
                        <a href="#">Redes</a>
                    </nav>
                </div>

                <section className="flex-1 overflow-hidden p-2 w-full">
                    <div className="grid grid-cols-6 grid-rows-5 gap-2 w-full h-full">
                        <div className="card-glass flex justify-center p-2 col-span-2 row-span-2 col-start-1 row-start-1">
                            <img src={profile} alt="profile-migang" />
                        </div>

                        <div className="card-glass flex flex-col justify-center text-center col-span-4 row-span-2 col-start-3 row-start-1">
                            <h1 className='text-4xl'>Hola soy <span className='text-red-600 text-6xl font-bold'>MiGaNg</span></h1>
                            <h2 className='bg-white rounded-full text-black'>&lt;Ingeniero de Sistemas & Frontend Deceloper/&gt;</h2>
                            <p>"Me especializo en construir experiencias digitales que no solo funcionan, sino que comunican y fluyen."
                            </p>
                        </div>
                        <div className="card-glass shadow-lg p-6 col-span-2 row-span-2 col-start-1 row-start-3" ></div>
                        <div className="card-glass col-span-2 row-span-1 col-start-1 row-start-5"></div>
                        <div className="card-glass col-span-2 row-span-3 col-start-3 row-start-3"></div>

                        <div className="col-span-2 row-span-3 flex flex-col gap-2">
                            <div className="card-glass grow-3 "></div>
                            <div className="card-glass grow-2 "></div>
                        </div>


                    </div>
                </section>
            </main>
        </div>
    )
}
