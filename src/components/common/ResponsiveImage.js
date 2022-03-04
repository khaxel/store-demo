export default function ResponsiveImage({ image: i, widths }) {
  // TODO Use stub image
  if (!i) return <img />

  const srcSetArr = [];
  widths['srcSet'].map((width) => {
    srcSetArr.push(`${i.base_url}${i.responsive[width]} ${width}w`);
  });

  const srcSet = srcSetArr.join(', ');
  const src = `${i.base_url}${i.responsive[widths['src']]}`;

  const sizesArr = [];
  Object.keys(widths['bpSizes']).map((bp) => {
    const maxWidth = parseInt(bp) + 1;
    sizesArr.push(`(max-width: ${maxWidth}px) ${widths['bpSizes'][bp]}px`);
  });
  const sizes = sizesArr.join(', ') + ', ' + widths['src'] + 'px';

  return <img sizes={sizes} srcSet={srcSet} src={src} />;
}
