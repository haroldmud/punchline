import Punch from "../components/punch"
export default function Home(){
  return(
    <section className="flex justify-center mt-20 text-xl mx-2">
      <div className="w-[fit-content] p-4 border-2 rounded-xl border-cyan-200">
        <Punch
          first="I got my daughter a fridge for her birthday"
          second="I can't wait to see her face light up when she opens it"
        />
        <Punch
          first="How did the hacker excape the police?"
          second="He just ransomware!"
        />
        <Punch
          first="Why don't pirates travel mountain roads?"
          second="Scurvy"
        />
      </div>
    </section>
  )
}