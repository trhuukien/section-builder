import { InlineGrid } from '@shopify/polaris';
import { memo } from 'react';
import ProductCard from '~/components/product/card';

function ProductList({list, handleShowModal}) {
  console.log('re-render-productList');

  return (
    <InlineGrid columns={{sm: 1, md: 2, lg: 4}} gap={800}>
        {list.map((idx) => {
            return <ProductCard key={idx} id={idx} handleShowModal={handleShowModal} />
        })}
    </InlineGrid>
  );
}

export default memo(ProductList);