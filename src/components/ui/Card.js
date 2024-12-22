const Card = ({Icon, Title, SubTitle, style}) =>{
    return(
        <div class="gap-5 flex flex-col items-center cursor-pointer"style={style}>
            <img width="48"src={Icon}/>
            <div className="font-semibold text-xl md:text-2xl"> {Title}</div>
            <div className="font text-lg md:text-xl">{SubTitle}</div>
        </div>
    )
}
export default Card;