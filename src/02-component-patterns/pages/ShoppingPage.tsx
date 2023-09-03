import { ProductButtons, ProductCard, ProductImg, ProductTitle } from "../components"
import '../styles/custom-styles.css'
const product = {
  id : "1",
  title : 'Coffee Mug - Card',
  img : './coffee-mug.png'
}

const ShoppingPage = () => {

  return (
    <div >
      <h1>Shopping Store</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
        <ProductCard product={product} className="bg-green">
          <ProductCard.Image className={'custom-image'}/>
          <ProductCard.Title title={product.title} className={'text-gray text-bold'}/>
          <ProductCard.Buttons className={'green-buttons'}/>
        </ProductCard>

        <ProductCard 
          product={product}
          className="bg-dark"
        >
          <ProductImg className={'custom-image'}/>
          <ProductTitle title={'Custom'} className={'text-white text-bold'}/>
          <ProductButtons className={'dark-buttons'}/>
        </ProductCard>
        <ProductCard 
          product={product}
        >
          <ProductImg />
          <ProductTitle title={'Custom'} />
          <ProductButtons 
            styleButtons={{backgroundColor : 'green', color: 'white'}}
            counterStyle={{backgroundColor: 'white'}}
          />
        </ProductCard>
      </div>
    </div>
  )
}

export default ShoppingPage