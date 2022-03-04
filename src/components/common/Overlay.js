import { Overlay as s } from './styles';

const Overlay = ({ onClick }) => {
  return (
    <>
      <div className={s['overlay']} onClick={onClick}></div>
    </>
  );
};

export default Overlay;
