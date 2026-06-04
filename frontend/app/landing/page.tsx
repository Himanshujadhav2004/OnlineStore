import { Header } from "@/components/navbar"

export default function Page(){
    return(
        <>
    <div className="mx-auto max-w-5xl flex justify-center">
    <Header />
  </div>
    
    <div className="pt-24 flex">
        <div>
        <h1 className="text-3xl font-bold">PERFORMANCE</h1>
        <h1 className="text-3xl font-bold">REDEFINED</h1>
        <p>
  Titan Fuel is engineered for athletes, fitness enthusiasts, and champions who refuse to settle for average. 
  Packed with high-quality protein and performance-driven nutrition, Titan Fuel helps build strength, 
  enhance recovery, and power every workout. Redefine your limits, fuel your ambition, and unleash the titan within.
</p>
        </div>
        <div>
            <img src="/logo.png" alt="" />
        </div>

    </div>
    </>
    
)
}