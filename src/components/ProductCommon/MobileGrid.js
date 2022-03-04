import cn from 'classnames';
import Card from 'components/ProductGrid/Card';

export const MobileGrid = ({ data = [] }) => {
  return (
    <>
      <div className={cn('flex flex-wrap')}>
        {data.map((item, index) => {
          return <Card item={item} key={`item${index}`} />;
        })}
      </div>
    </>
  );
};
