import { useUI } from 'components/UI/context';
import HeaderMobile from './HeaderMobile';
import HeaderDesktop from './HeaderDesktop';

export default function Header({ product }) {
  const { isTouchDevice } = useUI();

  return (
    <>
      {isTouchDevice ? (
        <HeaderMobile product={product} />
      ) : (
        <HeaderDesktop product={product} />
      )}
    </>
  );
}
