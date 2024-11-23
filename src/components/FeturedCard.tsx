type Props = {
    title: string,
    imgSrc: string,
    date:number,
    subject:string,
    paragraph:string
}

const FeturedCard = ({title,imgSrc,date,subject,paragraph}:Props) => {
  return (
    <div className="flex justify-center gap-5 items-center md:flex-row flex-col md:text-start text-center border p-3">
    <div className="md:max-w-[15.375rem] max-w-full">
        <img src={imgSrc} alt="postImg" className="object-contain"/>
    </div>
    <div className="flex gap-5 flex-col">
        <h1 className="font-bold text-3xl">{title}</h1>
        <div className="flex gap-3 md:justify-start justify-center items-center">
            <span className="rounded-3xl bg-[#142850] text-white px-2">{date}</span> <span>{subject}</span>
        </div>
        <p className="md:max-w-[37.125rem] max-w-[35.125rem]">
           {paragraph}
        </p>
    </div>
</div>
  )
}

export default FeturedCard