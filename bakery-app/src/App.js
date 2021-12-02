function BakeryItems() {
  return (
    <div className='bakerylist'>
      <BakedGood food='concha' />
      <BakedGood />
      <BakedGood />
      <BakedGood />
      <BakedGood />
      <BakedGood />
    </div>
  )
}
const title = 'Bread #2'
const price = 2.34
const description = 'Product description goes here.'
const img = 'https://i.imgur.com/NmhFVwam.jpg'

const BakedGood = (props) => {
  console.log(props)
  return (
    <div className='bakery-item'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h3>{price}</h3>
      <h4>{description}</h4>
      <p>{props.food}</p>
    </div>
  )
}

export default BakeryItems
