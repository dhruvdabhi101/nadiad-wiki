import Link from "next/link";

type CardProps = {
    header: string,
    data: {
        label: string,
        link: string
    }[]
};


const Card = (props: CardProps) => {
    return (
        <div className="flex flex-col border border-gray-200 self-center sm:self-auto rounded-md ">
            <div className="border-b-2 w-full py-2 px-3">
                <p className="font-semibold">{props.header}</p>
            </div>
            <div className="flex flex-col gap-4 w-full p-4 ">
                {props.data.map((item, idx) => {
                    return (
                        <div className="flex gap-3 justify-start">
                            <span>{idx+1}.</span>
                        <Link href={item.link} className="underline underline-offset-3">{item.label} &rarr;</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Card;
