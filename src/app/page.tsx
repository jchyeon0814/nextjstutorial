
export default function Home() {
  let subTitle = '소제목'
  let link = 'https://google.co.kr'

  return (
    <div>
      
      <h4 style={{ color: 'red' }} className="title">대제목</h4>
      <p className="title-sub">{subTitle}</p>
      <a href={link}>링크</a>
    </div>
  );
}
