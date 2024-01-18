import {
    Card,
    Text,
    Collapsible,
    Link,
    BlockStack,
    InlineStack,
    Icon,
} from '@shopify/polaris';
import {
    CircleChevronDownMinor,
    CircleChevronUpMinor
} from '@shopify/polaris-icons';
import {useState, useCallback, memo} from 'react';

function CollapsibleDefault() {
    const [open, setOpen] = useState(false);

    const handleToggle = useCallback(() => setOpen((open) => !open), []);

    return (
        <Card sectioned>
            <InlineStack vertical>
                <div className='title-collapsible pointer' onClick={handleToggle} ariaExpanded={open}>
                    <Text as="p" variant="bodyLg" tone='magic' ariaControls="basic-collapsible">
                        Can I use Section Store with any Shopify theme?
                    </Text>
                    
                    <BlockStack as='div'>
                        {
                            open
                            ? <Icon source={CircleChevronUpMinor} tone="base" />
                            : <Icon source={CircleChevronDownMinor} tone="base" />
                        }
                    </BlockStack>
                </div>

                <div className='content-collapsible'>
                    <Collapsible
                        open={open}
                        id="basic-collapsible"
                        transition={{duration: '200ms', timingFunction: 'ease-in-out'}}
                        expandOnPrint
                    >
                        <BlockStack gap={200}>
                            <Text as="p" variant="bodyMd" tone='subdued'>
                                Your mailing list lets you contact customers or visitors who
                                have shown an interest in your store. Reach out to them with
                                exclusive offers or updates about your products.
                            </Text>
                            <Link url="#">Test link</Link>
                        </BlockStack>
                    </Collapsible>
                </div>
            </InlineStack>
        </Card>
    );
}

export default memo(CollapsibleDefault);