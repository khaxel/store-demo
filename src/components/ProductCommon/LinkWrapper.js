import React from 'react';
import Link from 'next/link';

const LinkWrapper = ({ item, children }) => {
  // TODO set different slugs for langs
  const href = item.is_old ? `/${item.slug}` : `/tov/${item.slug}`;

  return <Link href={href}>{children}</Link>;
};

export default LinkWrapper;
