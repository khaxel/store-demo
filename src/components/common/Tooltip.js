import cn from 'classnames';
import { useEffect, useState } from 'react';

const Tooltip = ({ isShow, className, children }) => {
  const [delayedShow, setDelayedShow] = useState(false);

  useEffect(() => {
    let t1;
    if (isShow) {
      t1 = setTimeout(() => {
        setDelayedShow(true);
      }, 300);
    } else {
      setDelayedShow(false);
    }

    return () => {
      if (t1) clearTimeout(t1);
    };
  }, [isShow]);

  return (
    <>
      {delayedShow && (
        <div className={cn('tooltip hidden xl:block', className)}>{children}</div>
      )}
    </>
  );
};

export default Tooltip;
