import iconSedans from "../assets/icon-sedans.svg"

export default function Sedans() {
  return (
    <div className="bg-Orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="Icone dos carros Sedan." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Sedans</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="blank" className="font-Lexend bg-Off-white-bg px-10 py-3 block w-fit rounded-3xl text-Orange border-2 border-Off-white-bg hover:bg-Orange hover:text-Off-white-bg ">Ver mais</a>
    </div>
  )
}


