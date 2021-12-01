function BakeryItems() {
  return (
    <div className='bakerylist'>
      <BakedGood />
      <BakedGood />
      <BakedGood />
      <BakedGood />
      <BakedGood />
      <BakedGood />
    </div>
  )
}

const BakedGood = () => {
  return (
    <div>
      <Image />
      <ItemTitle />
      <ItemPrice />
      <ItemDescription />
    </div>
  )
}

const Image = () => <img src='https://i.imgur.com/NmhFVwam.jpg' alt='' />
const ItemTitle = () => <h1>Bread #1</h1>
const ItemDescription = () => (
  <h4>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </h4>
)
const ItemPrice = () => <h3>$2.00</h3>

export default BakeryItems
