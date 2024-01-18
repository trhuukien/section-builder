import {
  Page,
  Layout,
  Text
} from "@shopify/polaris";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import '~/assets/style.css';
import MediaTutorial from '~/components/media/tutorial';
import ProductList from '~/components/product/list';
import ModalProduct from '~/components/modal/product';

function HomePage() {
  const { t } = useTranslation();
  const list = useMemo(() => [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19], []);
  const [isShowPopup, setIsShowPopup] = useState(false);
  const handleShowModal = useCallback(() => {
    setIsShowPopup(!isShowPopup);
  }, []);

  console.log('re-render-homePage');
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Text variant="headingLg" as="h2">{t("HomePage.tutorialTitle")}</Text>
          <MediaTutorial />
        </Layout.Section>

        <Layout.Section>
          <Text variant="headingLg" as="h2">{t("HomePage.sectionTitle")}</Text>
          <ProductList list={list} handleShowModal={handleShowModal} />
        </Layout.Section>

        <ModalProduct isShowPopup={isShowPopup} setIsShowPopup={setIsShowPopup} />
      </Layout>
    </Page>
  );
}

export default HomePage;
