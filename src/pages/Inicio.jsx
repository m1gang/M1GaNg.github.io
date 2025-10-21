import React from 'react'
import Icon from '../components/Icon'

export const Inicio = () => {
    return (
        <div className="flex w-full h-screen overflow-hidden">
            <header className="flex justify-center items-center w-1/5 h-full overflow-y-auto bg-gray-50">

                <nav className="flex flex-col h-full p-4 gap-2 justify-center">
                    <a href="#" className="flex items-center gap-2 mb-4 font-medium">
                        <Icon name="home" color="red" />INICIO
                    </a>
                    <a href="#" className="flex items-center gap-2 mb-4 font-medium">
                        <Icon name="user" color="red" />PERFIL
                    </a>
                    <a href="#" className="flex items-center gap-2 mb-4 font-medium">
                        <Icon name="folder" color="red" />PROYECTOS
                    </a>
                    <a href="#" className="flex items-center gap-2 mb-4 font-medium">
                        <Icon name="road" color="black" />EXPERIENCIA
                    </a>
                    <a href="#" className="flex items-center gap-2 mb-4 font-medium">
                        <Icon name="contact" color="red" />CONTACTO
                    </a>
                </nav>
            </header>

            <main className="flex-1 h-full overflow-hidden flex flex-col items-center">

                <h1 className="text-xl font-bold p-2">INICIO</h1>

                <div className="nav-vertical p-2">
                    <nav className="flex gap-4">
                        <a href="#">Portada</a>
                        <a href="#">Redes</a>
                    </nav>
                </div>

                <section className="flex-1 overflow-hidden p-2 w-full">
                    <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full">
                        <div className="col-span-2 row-span-2 col-start-1 row-start-1 bg-amber-200 rounded-2xl">2</div>
                        <div className="col-span-4 row-span-2 col-start-3 row-start-1 bg-blue-400 rounded-2xl">3</div>
                        <div className="col-span-2 row-span-3 col-start-1 row-start-3 bg-red-600 rounded-2xl" >4</div>
                        <div className="col-span-2 row-span-1 col-start-1 row-start-6 bg-emerald-300 rounded-2xl">5</div>
                        <div className="col-span-2 row-span-4 col-start-3 row-start-3 bg-cyan-400 rounded-2xl">6</div>
                        <div className="col-span-2 row-span-2 col-start-5 row-start-3 bg-amber-400 rounded-2xl">7</div>
                        <div className="col-span-2 row-span-1 col-start-5 row-start-5 bg-pink-400 rounded-2xl">8</div>
                        <div className="col-span-1 row-span-1 col-start-5 row-start-6 bg-emerald-900 rounded-2xl">9</div>
                        <div className="col-span-1 row-span-1 col-start-6 row-start-6 bg-pink-900 rounded-2xl">10</div>
                    </div>
                </section>
            </main>
        </div>
    )
}
