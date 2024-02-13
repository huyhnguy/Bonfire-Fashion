
function Image({ src }) {
    

    return (
        <img src={src}></img>
    )
}

export default function Product({ imgSrc }) {
    return (
        <div>
            <Image src={imgSrc}/>
        </div>
    )
}