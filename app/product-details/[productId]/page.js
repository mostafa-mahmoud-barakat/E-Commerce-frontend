"use client"

import ProductApis from '../../_utils/ProductApis'
import React, { useEffect, useState} from 'react'
import ProductBanner from '../_components/ProductBanner';
import ProductInfo from '../_components/ProductInfo';
import ProductList from '../../_components/ProductList';
import { usePathname } from 'next/navigation';
import BreadCrumb from '../../_components/BreadCrumb';

function ProductsDetails({params}) {
    const path= usePathname();
    console.log('path', path)
    const [productDetails, setProductDetails]= useState({})
    const [productList, setProductList]= useState([])
    useEffect(()=>{
        getProductById_();
    }, [params?.productId])

    const getProductById_=()=>{
        ProductApis.getProductById(params?.productId).then(res=>{
            console.log('product item ', res.data.data)
            setProductDetails(res.data.data)
            getProductlistByCategory(res.data.data)
        })
    }
    const getProductlistByCategory = (product)=>{
        ProductApis.getProductByCategory(product?.attributes.category).then(res=>{
            console.log(res?.data?.data)
            setProductList(res?.data?.data)
        })
    }
  return (
    <div className='px-10 py-8 md:px-28 '>
        <BreadCrumb path={path}/>
        <div className=' grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0 mt-10 
        justify-around'>
            <ProductBanner product={productDetails} />
            <ProductInfo product={productDetails}/>
        </div>
        <div>
            <h2 className='mt-24 text-xl mb-4'>Similar Products</h2>
            <ProductList productList={productList}/>
        </div>
    </div>
  )
}

export default ProductsDetails