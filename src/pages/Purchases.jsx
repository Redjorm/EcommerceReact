import React, { useEffect } from 'react'
import usePurchases from '../hooks/usePurchases'
import ProductPurchase from '../components/Purchases/ProductPurchase'

const Purchases = () => {

    const { purchases, getAllProductsPurchased } = usePurchases()

    useEffect(() => {
        getAllProductsPurchased()
    }, [])


    return (
        <div>
            <h2>Purchases</h2>
            <div>
                {
                    purchases?.map((productPurchase) => (
                        <ProductPurchase
                            key={productPurchase.id}
                            productPurchase={productPurchase} />
                    ))
                }
            </div>
        </div>
    )
}

export default Purchases