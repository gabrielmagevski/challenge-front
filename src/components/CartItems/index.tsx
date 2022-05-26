import React from 'react'
import { useFetchsAPI } from '../../hooks/useFetchAPI';
import { 
  GroupProducts, 
  Items,
  Image,
  Title,
  GroupQuantity,
  SummaryInformation,
  Line 
} from './styles';

export function CartItems() {
  const { products } = useFetchsAPI();

  return (
    <>
      { 
        products.map(product => {
          return(
            <>
              <Items key={product.productId}>
                <GroupProducts>
                  <div>
                    <Image src={product.image} alt="product" />
                  </div>
                  <div>
                    <Title>
                      {product.name}
                    </Title>
                    <GroupQuantity>
                      <SummaryInformation>Qtd.:{product.quantity}</SummaryInformation>
                      <SummaryInformation price={true}>{product.bestPriceFormated}</SummaryInformation>
                    </GroupQuantity>
                  </div>
                </GroupProducts>
              </Items>
            <Line />
          </>
          )
        })
      }
    </>
  )
}
