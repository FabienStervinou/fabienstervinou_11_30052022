import Datas from '../../assets/data/data.json'
import Card from '../../components/card/index'
import './style.scss'

export default function CardList () {

  return (
    <div className="cardList">
      {
        Datas.map(data => {
          return (
            <Card key={data.id} data={data} />
          )
        })
      }
    </div>
  )
}
