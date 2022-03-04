import { useState } from 'react';
import HeaderTop from './HeaderTop';
import HeaderTabs from './HeaderTabs';

export default function HeaderMobile({ product: p }) {
  const [isSticked, setIsSticked] = useState(false);

  return (
    <>
      <HeaderTop product={p} isSticked={isSticked} />
      <HeaderTabs isSticked={isSticked} setIsSticked={setIsSticked} />
    </>
  );
}
