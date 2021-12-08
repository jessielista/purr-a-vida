// import { BrowserRouter } from 'react-router-dom'

const items = [
  {
    id: 1,
    title: 'Bread',
    img: 'https://i.imgur.com/NmhFVwam.jpg',
    price: 2.34,
    description: 'Product description goes here.',
  },
  {
    id: 2,
    title: 'Cake',
    img: 'https://i.imgur.com/nUiAItDm.jpg',
    price: 24.34,
    description: 'Product description goes here.',
  },
  {
    id: 3,
    title: 'Drinks',
    img: 'https://i.imgur.com/tluGaY4m.jpg',
    price: 4.34,
    description: 'Product description goes here.',
  },
]

function BakeryItems() {
  return (
    <div className='bakerylist'>
      {items.map((item) => {
        return <BakedGood key={item.id} {...item}></BakedGood>
      })}
    </div>
  )
}

const BakedGood = (props) => {
  console.log(props)
  const { img, title, price, description } = props
  const clickHandler1 = (e) => {
    alert('Your item has been added')
    console.log('item added')
    console.log(e)
    console.log(e.target)
  }
  const clickHandler2 = () => {
    alert('Your item has been removed')
    console.log('item removed')
  }

  return (
    <div className='bakery-item'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h3>{price}</h3>
      <h4>{description}</h4>
      <button type='button' onClick={clickHandler1}>
        Add Item to Cart
      </button>
      <button type='button' onClick={clickHandler2}>
        Remove Item from Cart
      </button>
    </div>
  )
}

// add base url & fetch the backend
export default BakeryItems
