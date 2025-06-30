import Image from "next/image"

export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((element, i) => {
                    return (
                        <div key={i}>
                            <Image src={`/food${i + 1}.png`} width={100} height={100} alt={"22"}></Image>
                            <h4 className="food" >
                                {element} $40
                            </h4>
                        </div>
                    );
                })
            }
        </div>
    );
}