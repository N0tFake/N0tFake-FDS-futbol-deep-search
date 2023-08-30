
type TitleProps = {
  title?: string;
}

const Title:React.FC<TitleProps> = ({title}) => {
  return (
    <div className="max-w-none h-24 bg-primary flex flex-col justify-center items-center text-dark" >
      <h1 className="text-lg font-extrabold">FDS - Futebol Deep Search</h1>
      <h2 className="">{title || "Brasileirão"}</h2>
    </div>
  )
}

export default Title;