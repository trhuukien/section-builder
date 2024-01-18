import { Card, Page, Layout, TextContainer, Text, Box, BlockStack } from "@shopify/polaris";
import { useTranslation } from "react-i18next";

import CollapsibleDefault from "~/components/collapsible/default";

export default function SectionDetail() {
  const { t } = useTranslation();
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Box>
            <Text variant="headingXl" as="h2">
              Online store dashboard
            </Text>
          </Box>
        </Layout.Section>

        <Layout.Section>
          <BlockStack gap={200}>
            <CollapsibleDefault />
            <CollapsibleDefault />
            <CollapsibleDefault />
            <CollapsibleDefault />
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
