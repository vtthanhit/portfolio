import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] })

const Hobbies = () => {
  return (
    <div className={courierPrime.className}>
      <div className="py-4 md:py-8 px-6 md:px-12 text-2xl rounded-b-[0.5rem] bg-zinc-800">
        <div className="my-4">
          <span className="text-primary">thanh $ </span>
          <span>cd hobbies/interests</span>
        </div>
        <div className="my-4">
          <span className="text-primary">hobbies/interests <span className="text-secondary">(main)</span> $ </span>
          <span>ls</span>
        </div>
        <ul>
          <li className="py-2 md:py-3"><span className="mr-4">🎮</span>Play games</li>
          <li className="py-2 md:py-3"><span className="mr-4">🎞️</span>Films</li>
          <li className="py-2 md:py-3"><span className="mr-4">✈️</span>Traveling</li>
          <li className="py-2 md:py-3"><span className="mr-4">🏋️</span>Gym</li>
        </ul>
      </div>

    </div>
  )
}

export default Hobbies;
