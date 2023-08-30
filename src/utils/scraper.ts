import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeData() {
  try {
    // Fazer uma requisição HTTP para a página web que deseja fazer o scraping
    const { data } = await axios.get('https://www.uol.com.br/esporte/futebol/campeonatos/brasileirao/');
   
    // Utilizar o Cheerio para carregar o HTML da página
    const $ = cheerio.load(data);
    
    // /html/body/div[5]/section/section/div/section/div/div[1]/div/div[2]/div[1]/table/tbody/tr[1]

    // const [title, setTitle] = useState<string>('');
    let title
    $('h1').each((index, element) => {
      title = $(element).text()
    });

    const classification = $('.data-table.name').find('tbody').first()
    const scores = $('.data-table.score').find('tbody').first()
    const lastGames = $('.data-table.score').find('tbody').last()
    const times = new Array;

    classification.children().each((index, element) => {
      
      const position = $(element).find('.position').text()
      const imgSrc = $(element).find('img').attr('src')
      let name, slug
      $(element).find('.name').children().each((i, elem) => {
        const children = $(elem).children()
        name = children.first().text() 
        slug = children.last().text()
      })

      const timeScore = scores.children().eq(index)
      
      const points = timeScore.children().eq(0).text()
      const games = timeScore.children().eq(1).text()
      const wins = timeScore.children().eq(2).text()
      const draw = timeScore.children().eq(3).text()
      const defeats = timeScore.children().eq(4).text()
      const goalsPro = timeScore.children().eq(5).text()
      const goalsContra = timeScore.children().eq(6).text()
      const goalsDifference = timeScore.children().eq(7).text()
      const percentageUse = timeScore.children().eq(8).text()
      
      times.push({
        'position': position,
        'name': name,
        'slug': slug,
        'img': imgSrc,
        'score':{
          'points': points,
          'game': games,
          'wins': wins,
          'draw': draw,
          'defeats': defeats,
          'goalsPro': goalsPro,
          'goalsContra': goalsContra,
          'goalsDifference': goalsDifference,
          'percentageUse': percentageUse
        }
      })  

    })

    const result = {
      "title": title,
      "times": times,
    }

    return result;
      
  } catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro durante o scraping.');
  }
}
