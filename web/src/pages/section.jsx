import { Page, Badge, Card, Layout, Button, Icon, Text, ProgressBar, BlockStack, Box } from '@shopify/polaris';
import { ViewMinor } from '@shopify/polaris-icons';
import React from 'react';
import { memo } from "react";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import CollapsibleButton from "~/components/collapsible/button";

function SectionDetail() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  console.log("re-render-pageSection");
  return (
    <Page
      backAction={{content: 'Products', onAction: () => navigate(-1)}}
      title="About #01"
      titleMetadata={<Badge tone="success">Free</Badge>}
      subtitle="Perfect about section"
      compactTitle
    >
      <Layout>
        <Layout.Section>
          <Card title="Credit card">
            <BlockStack gap={200}>
              <Text variant="headingSm">Setup guide</Text>
              <Text variant="bodySm">Only 3 simple steps to add any sections & blocks to your theme</Text>
              <ProgressBar progress={33} size="small" />
            </BlockStack>
            <Box paddingBlockStart={400}>
              <BlockStack gap={200}>
                <CollapsibleButton />
                <CollapsibleButton />
                <CollapsibleButton />
              </BlockStack>
            </Box>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

export default memo(SectionDetail);
