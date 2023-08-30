import { themeDuration } from "@/app/constants";
import React from "react";

type ScoreProps = {
  score: {
    points: number;
    game: number;
    wins: number;
    draw: number;
    defeats: number;
    goalsPro: number;
    goalsContra: number;
    goalsDifference: number;
    percentageUse: number;
  };
}

const ScoreColumn: React.FC<ScoreProps> = ({score}) => {
  const renderScoreColumns = () => {
    const columns = [];
    let count = 0;
    let bgColor = ''
    for (const key in score) {
      if (count % 2 != 0){
        bgColor = 'bg-darkLight dark:bg-lightDark'
      }else{
        bgColor = ''
      }
      columns.push(
        // <td key={key} className={`px-6 py-3 text-light dark:text-dark ${bgColor}`}>
        //   {score[key as keyof typeof score]}
        // </td>
        <td key={key} className={`px-6 py-3 text-light dark:text-dark border-e border-darkLight dark:border-lightDark ${themeDuration}`}>
          {score[key as keyof typeof score]}
        </td>
      
        )
      count += 1;
    }

    return columns
  }

  return renderScoreColumns(); 
}

export default ScoreColumn;