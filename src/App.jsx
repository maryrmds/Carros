import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="border-2 border-orange min-h-svh bg-Off-white-bg py-20 px-6 lg:flex justify-content items-center">
      <section className="lg:flex max-w-[920px]">

        <div className="bg-Orange p-12 max-lg:rounded-t-lg lg:rounded-l-lg">
          <img src={iconSedans} alt="Icone dos carros Sedan." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Sedans</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="blank" className="font-Lexend bg-Off-white-bg px-10 py-3 block w-fit rounded-3xl text-Orange border-2 border-Off-white-bg hover:bg-Orange hover:text-Off-white-bg ">Ver mais</a>
        </div>

        <div className="bg-Green p-12">
          <img src={iconSuvs} alt="Icone do carro Suvs." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">SUVS</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-Lexend bg-Off-white-bg text-Green px-10 py-3 block rounded-3xl w-fit border-2 border-Off-white-bg hover:bg-Green hover:text-Off-white-bg" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
        </div>

        <div className="bg-Dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="Icone do carro Luxury." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Luxuosos</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-Lexend bg-Off-white-bg text-Dark-green px-10 py-3 w-fit rounded-3xl block border-2 border-Off-white-bg hover:bg-Dark-green hover:text-Off-white-bg" href="https://www.webmotors.com.br/carros/estoque/ferrari" target="_blank">Ver mais</a>
        </div>

      </section>
    </main>
  )
}