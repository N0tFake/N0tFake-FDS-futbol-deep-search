import { themeDuration } from "@/app/constants";
import Image from "next/image";
import { scrapeData } from "../../../utils/scraper";
import { ScoreColumn, Title } from "./components/components";

export default async function HomePage(){
  const data = await scrapeData();
  const [promise] = await Promise.all([data]);
  const title = promise.title;
  const times = promise.times;
  return (
    <main>
      <Title title={title} />
      <div className="w flex justify-center">
        <table className="border-collapse">
          <thead className={`text-sm text-light uppercase bg-light dark:bg-dark dark:text-dark ${themeDuration}`}>
            <tr className={`bg-darkLight dark:bg-lightDark ${themeDuration}`}>
              <th className="px-6 py-3">Classificação</th>
              <th className="px-6 py-3">P</th>
              <th className="px-6 py-3">J</th>
              <th className="px-6 py-3">V</th>
              <th className="px-6 py-3">E</th>
              <th className="px-6 py-3">D</th>
              <th className="px-6 py-3">GP</th>
              <th className="px-6 py-3">GC</th>
              <th className="px-6 py-3">SG</th>
              <th className="px-6 py-3">%</th>
            </tr>
          </thead>

          <tbody className="">
            {times.map(time =>(
              <tr key={time.slug} className="">
                <td className={`bg-darkLight dark:bg-lightDark px-6 py-3 ${themeDuration}`}>
                  <div className={`flex space-x-3 pt-2 pl-2 text-light dark:text-dark ${themeDuration}`}>
                    <span>{time.position}</span>
                    <Image
                      src={time.img}
                      width={30}
                      height={30}
                      alt= {time.name + ' - ' + time.slug}
                    />
                    <div>
                      <span className="font-bold">{time.name}</span>
                      {/* <span className="">{time.slug}</span> */}
                    </div>
                  </div>
                </td>

                <ScoreColumn score={time.score} />
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
};
