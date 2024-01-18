import { BlockStack, Box, Button, Card, Icon, Image, SkeletonBodyText, SkeletonDisplayText, Spinner, Text } from '@shopify/polaris';
import { ViewMinor } from '@shopify/polaris-icons';
import { memo, useState } from 'react';

function ProductCard({id, handleShowModal}) {
  console.log('re-render-productCard');
  const [isLoading, setIsLoading] = useState(false);
  const handleShowModal1 = async () => {
    setIsLoading(true);

    setTimeout(() => {
      handleShowModal();
      setIsLoading(false);
    }, 500);
  }

  return (
    <Card padding={0}>
      <div className='pointer' onClick={() => handleShowModal1()}>
        <Image
          source="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="app"
        />
      </div>

      <Box background="bg-surface-secondary" padding="400">
        <BlockStack gap={200}>
          <SkeletonDisplayText variant="headingMd" as="h2">About {id}</SkeletonDisplayText>
          <SkeletonBodyText as="p" variant="bodyMd">
            You can use sales reports to see information about your customers’
            orders based on criteria such as sales over time, by channel, or by
            staff.
          </SkeletonBodyText>
          <Button loading={isLoading} icon={<Icon source={ViewMinor} tone="base" />} size="large" fullWidth onClick={() => handleShowModal1()}>Quick view</Button>
        </BlockStack>
      </Box>
    </Card>
  );
}

export default memo(ProductCard);