import Image from "next/image";
import { scrapeData } from "../../utils/scraper";

export default async function ScrapePage(){
  const data = await scrapeData();
  const [promise] = await Promise.all([data]);
  const title = promise.title;
  const times = promise.times;
  return (
    <main>
      <h1>FDS - Futebol Deep Search</h1>
      <h2>{title}</h2>
      <table>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>P</th>
            <th>J</th>
            <th>V</th>
            <th>E</th>
            <th>D</th>
            <th>GP</th>
            <th>GC</th>
            <th>SG</th>
            <th>%</th>
          </tr>
        </thead>

        <tbody>
          {times.map(time =>(
            <tr>
              <td>
                <div>
                  <span>{time.position}</span>
                  <span>{time.name}</span>
                  <span>({time.slug})</span>
                  <Image
                    src={time.img}
                    width={40}
                    height={40}
                    alt='teste'
                  />
                </div>
              </td>

              <td><span>{time.score.points}</span></td>
              <td><span>{time.score.game}</span></td>
              <td>
                <span>{time.score.wins}</span>
              </td>
              <td>
                <span>{time.score.draw}</span>
              </td>
              <td>
                <span>{time.score.defeats}</span>
              </td>
              <td>
                <span>{time.score.goalsPro}</span>
              </td>
              <td>
                <span>{time.score.goalsContra}</span>
              </td>
              <td>
                <span>{time.score.goalsDifference}</span>
              </td>
              <td>
                <span>{time.score.percentageUse}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
};
