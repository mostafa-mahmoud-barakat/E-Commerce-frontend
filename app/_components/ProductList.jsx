import React from 'react'
import ProductItem from './ProductItem'

export function ProductList({productList}) {
  return (
    <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 gap-5'>
        {productList.map(item=>(
            <div key={item.id}><ProductItem product={item} /></div>
        ))}
    </div>
  )
}

export default ProductList