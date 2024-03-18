import Sedans from "./components/Sedans"
import SUVS from "./components/SUVS"
import Luxury from "./components/Luxury"

export default function App() {
  return (
    <main className="border-2 border-orange min-h-svh bg-Off-white-bg py-20 px-6 lg:flex justify-content items-center">
      <section className="lg:flex max-w-[920px]">

        <Sedans />

        <SUVS />

        <Luxury />

      </section>
    </main>
  )
}