import { Courier_Prime } from "next/font/google";

const courierPrime = Courier_Prime({ weight: ['400', '700'], subsets: ['latin'] })

const Skills = () => {
  return (
    <div className={courierPrime.className}>
      <div className="py-4 md:py-8 px-6 md:px-12 text-2xl rounded-b-[0.5rem] bg-zinc-800">
        <div className="my-4">
          <span className="text-primary">thanh $ </span>
          <span>cd skills</span>
        </div>
        <div className="my-4">
          <span className="text-primary">skills <span className="text-secondary">(main)</span> $ </span>
          <span>ls</span>
          <p className="text-primary my-4">languages</p>
          <ul className="md:columns-2">
            <li className="py-2 md:py-3">JavaScript</li>
            <li className="py-2 md:py-3">TypeScript</li>
            <li className="py-2 md:py-3">HTML/CSS</li>
            <li className="py-2 md:py-3">Ruby</li>
          </ul>

          <p className="text-primary my-4">frameworks</p>
          <ul className="md:columns-2">
            <li className="py-2 md:py-3">NestJS</li>
            <li className="py-2 md:py-3">ExpressJS</li>
            <li className="py-2 md:py-3">Rails</li>
            <li className="py-2 md:py-3">ReactJS</li>
            <li className="py-2 md:py-3">NextJS</li>
            <li className="py-2 md:py-3">Bootstrap/jQuery</li>
          </ul>

          <p className="text-primary my-4">databases</p>
          <ul className="md:columns-2">
            <li className="py-2 md:py-3">MySQL</li>
            <li className="py-2 md:py-3">PostgreSQL</li>
            <li className="py-2 md:py-3">MongoDB</li>
            <li className="py-2 md:py-3">TypeORM</li>
          </ul>

          <p className="text-primary my-4">cloudServices</p>
          <ul className="md:columns-2">
            <li className="py-2 md:py-3">Google services</li>
            <li className="py-2 md:py-3">Heroku</li>
            <li className="py-2 md:py-3">Netlify</li>
            <li className="py-2 md:py-3">Microsoft Azure</li>
          </ul>

          <p className="text-primary my-4">tools</p>
          <ul className="md:columns-2">
            <li className="py-2 md:py-3">Git</li>
            <li className="py-2 md:py-3">Postman</li>
            <li className="py-2 md:py-3">Docker</li>
            <li className="py-2 md:py-3">Swagger</li>
            <li className="py-2 md:py-3">Git</li>
            <li className="py-2 md:py-3">Jira</li>
            <li className="py-2 md:py-3">npm</li>
            <li className="py-2 md:py-3">yarn</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Skills;
