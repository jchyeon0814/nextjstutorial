export default function List() {
    let 상품 = ['토마토', '파스타', '코코넛']
    return (
        <div>
            <h4 className="title">상품목록</h4>
            {
                상품.map((element) => {
                    return (
                        <div>
                            <h4 className="food">{element} $40</h4>
                        </div>
                    );
                })
            }
        </div>
    );
}