<<<<<<< HEAD
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
=======
import React, { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchase from "../components/Purchases/ProductPurchase";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  return (
    <div>
      <h2>Puchases</h2>
      <div>
        {
          purchases?.map((purchase) => (
            <ProductPurchase 
            key={purchases.id}
            prodPurchase={purchase}/>
          ))
        }
      </div>
    </div>
  );
};

export default Purchases;
>>>>>>> 035753b7bbd15d2c73ffd7df59fa34814fb15cc9
