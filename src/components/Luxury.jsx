import iconLuxury from "../assets/icon-luxury.svg"

export default function Luxury() {
  return (
    <div className="bg-Dark-green p-12 max-lg:rounded-b-lg lg:rounded-r-lg">
          <img src={iconLuxury} alt="Icone do carro Luxury." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">Luxuosos</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Passeie nos melhores carros sem os preços exorbitantes. Desfrute do conforto aprimorado de um aluguel de luxo e chegue com estilo.</p>
          <a className="font-Lexend bg-Off-white-bg text-Dark-green px-10 py-3 w-fit rounded-3xl block border-2 border-Off-white-bg hover:bg-Dark-green hover:text-Off-white-bg" href="https://www.webmotors.com.br/carros/estoque/ferrari" target="_blank">Ver mais</a>
    </div>
  )
}
