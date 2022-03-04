import { useEffect } from 'react';
import cn from 'classnames';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { LayoutMain } from 'components/Layout';
import { origin } from 'const';
import { useUI } from 'components/UI/context';
import { Breadcrumbs } from 'components/common/Breadcrumbs';
import Header from './Header';
import { useOne } from 'api/product';
import Body from './Body';
import { Product as s } from './styles';
import Related from './Related';
import RecentlyViewed from './RecentlyViewed';
import SwiperCore, { FreeMode, Navigation, Thumbs } from 'swiper';
SwiperCore.use([FreeMode, Navigation, Thumbs]);
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export default function ProductView({ coreData, product: initProduct }) {
  // const router = useRouter();
  // const { isTouchDevice } = useUI();
  const { t } = useTranslation('common');
  const { setBreadcrumbs } = useUI();

  const { data: product } = useOne({
    slug: initProduct['slug_direct'],
    initialData: initProduct,
  });

  const getBreadcrumbs = (product) => {
    const links = [];
    if (product.path?.breadcrumbs?.length) {
      product.path.breadcrumbs.map((link) =>
        links.push({
          href: `/cat/${link.slug}`,
          title: link.title ?? link.breadcrumbs,
        })
      );
      links.push({
        href: `/${product.slug}`,
        title: product.item_name,
      });
    }
    return links;
  };
  const initLinks = getBreadcrumbs(initProduct);

  useEffect(() => {
    const links = getBreadcrumbs(product);
    setBreadcrumbs(links);
  }, [product]);

  // TODO Remove test data
  // console.log("product", product)
  // product.stock_status = 'outofstock';
  // product.price = 4550;
  // product.price = 0;
  // product.price_sale = 4323;
  // product.price = null;
  // product.price_sale = null;
  product.rating_count = 4;
  // product.rating_count = null;

  return (
    <LayoutMain coreData={coreData}>
      <Head>
        <title>{t('Товар')}</title>
        <meta name="description" content={`Товар`}></meta>
        <link rel="canonical" href={`${origin}`} />
      </Head>

      <Breadcrumbs initLinks={initLinks} />
      <Header product={product} />

      <div className={cn(s['product'], 'product-contentsAnchorRoot')}>
        <Body product={product} />

        <div
          className={cn(s['related'], 'contentsAnchor')}
          id={'content-related'}
        >
          <Related id={product.id} list={product.recommendations} />
        </div>

        <div
          className={cn(s['recently-viewed'], 'contentsAnchor')}
          id={'content-recently-viewed'}
        >
          <RecentlyViewed id={product.id} />
        </div>

        {/* <div className="contentsAnchor" id={'content-review'}>
          {t('Отзывы')}
        </div>
        <div className="contentsAnchor" id={'content-video'}>
          {t('Видеообзор')}
        </div>
        <div className="contentsAnchor" id={'content-docs'}>
          {t('Документы')}
        </div>
         */}
      </div>
    </LayoutMain>
  );
}
