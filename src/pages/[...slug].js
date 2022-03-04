import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';
import { getCoreData } from 'components/Sys/coreData';
import { productSSGAPI } from 'api/product';
import ProductView from 'components/Product';

export default function ProductOld({ locale, coreData, product }) {
  return <ProductView locale={locale} coreData={coreData} product={product} />;
}

// TODO Get list of old products
// export async function getStaticPaths({ locales }) {
//   const paths = [];
//   for (let locale of locales) {
//     const slugs = await productSSGAPI.getBuildOldSlugsList({ locale });

//     slugs.map((slug, index) => {
//       // TODO remove 10
//     if (index > 10) return;
//       console.log('slug', slug);
//       paths.push({ params: { slug }, locale });
//     });
//   }

//   // paths.map((item) => {
//   //   console.log('\n', item.params.slug);
//   // });
//   // return { paths, fallback: 'blocking' };
//   return { paths, fallback: false };
// }

const tempSlugs = [
  'servernye-shkafy/kompleksnye_reshenyia/komplekt-shkaf-6u-seryj-patch-panel-blok-rozetok-organizator-kabelja-polka-detail',
  'aktivnoe-setevoe/kommutatory/neupravlyaemye/kommutator-d-link-des-1026g-detail',
  'aktivnoe-setevoe/kommutatory/neupravlyaemye/kommutator-d-link-des-1050g-detail',
];

// export const getStaticPaths = ({ locales }) => {
//   const paths = [];
//   for (let locale of locales) {
//     tempSlugs.map((slugStr) => {
//       const slug = slugStr.split('/');
//       paths.push({ params: { slug }, locale });
//     });
//   }

//   return { paths, fallback: false };
//   // return { paths, fallback: 'blocking' };
// };

// export async function getStaticProps({ params: { slug }, locale }) {
export async function getServerSideProps({ params: { slug }, locale }) {
  const coreData = await getCoreData({ locale });
  // console.log("\nP R O D U C T ServerSideProps [...slug]\n" + slug)
  const productSlug = slug[slug.length - 1];
  const product = await productSSGAPI.getOne({
    locale,
    slug: productSlug,
  });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['item_one', locale, slug], () =>
    productSSGAPI.getOne({
      locale,
      slug: productSlug,
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      locale,
      coreData,
      product,
    },
  };
}
