import { scrapeDataGamesCBF } from "@/utils/scraperGames";

export default async function GamesPage(){
  const data = scrapeDataGamesCBF();
  return (
    <h1>TESTE</h1>
  )

}