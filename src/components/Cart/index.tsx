import React from 'react'
import { useFetchsAPI } from '../../hooks/useFetchAPI'
import './cart.modules.scss'

export function Cart() {

  const { products } = useFetchsAPI();
  return (
   <>
      <section>
        <div className="cart">
          {
            products.map(product => {
              return(
                <>
                <div key={product.productId} className="items">
                  <div className="group-products">
                    <div>
                      <img src={product.image} alt="product" />
                    </div>
                    <div className="group-info">
                    <h3 className="title">{product.name}</h3>
                      <div className="group-quantity">
                        <span>Qtd.:{product.quantity}</span>
                        <span className="price">{product.bestPriceFormated}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </>
              )
            })
          }
        <div className="div-cart">
          <div className="price">
            <span>Total do pedido:</span> 
            <span className="total">R$ 20.356,95</span>
          </div>
        </div>
          <button>Finalizar compra</button>
        </div>
      </section>
   </>
  )
}
