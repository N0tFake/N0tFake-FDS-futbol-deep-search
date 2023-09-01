import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeDataGamesCBF(){
  try {
    // Fazer uma requisição HTTP para a página web que deseja fazer o scraping
    const { data } = await axios.get('https://www.uol.com.br/esporte/futebol/campeonatos/brasileirao/');
   
    // Utilizar o Cheerio para carregar o HTML da página
    const $ = cheerio.load(data);

    let title
    $('h1').each((index, element) => {
      title = $(element).text()
    });

    const rounds = $('.rounds-content').first()
    rounds.children().first().each((index, liRounds) => {
      const matches: any[] = [];

      $(liRounds).find('.rounds-item').each((index, element) => {
        const transformText = (text: string | undefined) => {
          if (!text) return ''; // Retorna uma string vazia se o texto for undefined
    
          // Remove acentuação e converte para minúsculas
          const textSemAcentos = text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
          
          // Substitui espaços por hífens
          return textSemAcentos.replace(/\s+/g, '-');
        };
        
        const nameTime1 = $(element).find('.team-home meta[itemprop="name"]').attr('content')
        const nameTime2 = $(element).find('.team-away meta[itemprop="name"]').attr('content')
        const matchData = {
          round: $(element).attr('data-round'),
          date: $(element).find('.match-info div').text(),
          stadium: $(element).find('place meta[itemprop="name"]').text(),
          team1: {
            name: nameTime1,
            logo: `https://e.imguol.com/futebol/brasoes/40x40/${transformText(nameTime1)}.png`,
          },
          team2: {
            name: nameTime2,
            logo: `https://e.imguol.com/futebol/brasoes/40x40/${transformText(nameTime2)}.png`,
          },
          score1: $(element).find('.team-home .team-score').text(),
          score2: $(element).find('.team-away .team-score').text(),
          postMatch: $(element).find('.match-label.pos-jogo div').text().trim() === 'pós-jogo',
          matchLink: $(element).find('.match-content-score a').attr('href'),
        };

        matches.push(matchData);
      });

      console.log(matches);
    })


  } catch (error) {
    console.error(error);
    throw new Error('Ocorreu um erro durante o scraping.');
  }
}