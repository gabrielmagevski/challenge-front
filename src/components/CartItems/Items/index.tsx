import React from 'react'
import { TypeItem } from '../../../@types/TypesAll';
import { 
  GroupProducts, 
  Items,
  Title,
  GroupQuantity,
  SummaryInformation,
  Line 
} from './styles';


export function Item({ data }: TypeItem) {
  return (
    <>
      <Items>
        <GroupProducts>      
          <img src={data.image} alt="product" />
          <div>
            <Title>
              {data.name}
            </Title>
            <GroupQuantity>
              <SummaryInformation>Qtd.:{data.quantity}</SummaryInformation>
              <SummaryInformation price={true}>{data.bestPriceFormated}</SummaryInformation>
            </GroupQuantity>
          </div>
        </GroupProducts>
      </Items>
    <Line />
  </>
  )
}
