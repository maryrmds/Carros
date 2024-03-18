import iconSuvs from "../assets/icon-suvs.svg"

export default function SUVS() {
  return (
    <div className="bg-Green p-12">
          <img src={iconSuvs} alt="Icone do carro Suvs." className="mb-7"/>
          <h2 className="font-Shoulders mb-7 uppercase text-4xl font-bold text-Off-white-bg">SUVS</h2>
          <p className="font-Lexend mb-7 text-Off-white lg:mb-20">Escolha um SUV pelo seu interior espaçoso, poder e versatilidade. Perfeito para passar as férias em família ou para aventuras off-road.</p>
          <a className="font-Lexend bg-Off-white-bg text-Green px-10 py-3 block rounded-3xl w-fit border-2 border-Off-white-bg hover:bg-Green hover:text-Off-white-bg" href="https://www.webmotors.com.br/suvs" target="_blank">Ver mais</a>
    </div>
  )
}
