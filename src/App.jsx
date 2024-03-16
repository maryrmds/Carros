import iconSedans from "./assets/icon-sedans.svg"
import iconSuvs from "./assets/icon-suvs.svg"
import iconLuxury from "./assets/icon-luxury.svg"

export default function App() {
  return (
    <main className="border-2 border-orange min-h-svh bg-Off-white-bg py-20 px-6">
      <section>

        <div className="bg-Orange p-12 rounded-t-lg">
          <img src={iconSedans} alt="Icone dos carros Sedan." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Sedans</h2>
          <p className="font-Lexend mb-7">Escolha um sedan pelo seu preço acessível e excelente economia de combustível. Ideal para dirigir na cidade ou na sua próxima viagem.</p>
          <a href="https://www.webmotors.com.br/sedans" target="blank" className="font-Lexend">Ver mais</a>
        </div>

        <div className="bg-Green p-12">
          <img src={iconSuvs} alt="Icone do carro Suvs." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">SUVS</h2>
          <p className="font-Lexend mb-7">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a href="https://www.webmotors.com.br/suvs" target="_blank" className="font-Lexend">Ver mais</a>
        </div>

        <div className="bg-Dark-green p-12 rounded-b-lg">
          <img src={iconLuxury} alt="Icone do carro Luxury." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Luxuosos</h2>
          <p className="font-Lexend mb-7">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a href="https://www.webmotors.com.br/carros/estoque/ferrari" target="_blank" className="font-Lexend">Ver mais</a>
        </div>

      </section>
    </main>
  )
}