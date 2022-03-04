import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Tooltip from 'components/common/Tooltip';
import { useAddToWishlist, useRemoveFromWishlist } from 'api/wishlist';
import {
  handleMutationErrors,
  handleMutationSuccess,
} from 'components/common/mutationHandlers';

const greyBlue = '#7E859C';
const midBlue = '#1F2948';
const bgLightBlue = '#F1F3F5';
const red = '#FF6970';

export const Wish = ({ id, className = '', isSelected = false }) => {
  const { t } = useTranslation('common');
  const [isHover, setIsHover] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(isSelected);
  const { mutation: mutationAdd, add } = useAddToWishlist(['me']);
  const { mutation: mutationRemove, remove } = useRemoveFromWishlist(['me']);

  useEffect(() => {
    setIsInWishlist(isSelected);
  }, [isSelected]);

  const toggleWishlist = (toAdd) => {
    if (toAdd) {
      add({ items_id: id });
    } else {
      remove({ items_id: id });
    }
  };

  handleMutationErrors(mutationAdd);
  handleMutationSuccess(mutationAdd, () => {
    setIsInWishlist(true);
  });
  handleMutationErrors(mutationRemove);
  handleMutationSuccess(mutationRemove, () => {
    setIsInWishlist(false);
  });

  return (
    <div
      onClick={() => {
        toggleWishlist(!isInWishlist);
      }}
    >
      <Tooltip isShow={isHover} className="ml-2.5">
        {t(isInWishlist ? 'Удалить из избранного' : 'Добавить в избранное')}
      </Tooltip>

      <svg
        viewBox="0 0 22 19"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          className,
          isHover ? ' cursor-pointer' : '',
          isInWishlist ? 'text-red' : 'hover:text-midBlue'
        )}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {/* colorInCenter */}
        <path
          d="M20.9861 6.39777C20.9807 6.33327 20.9745 6.28383 20.969 6.24988C20.6892 3.31948 18.3646 1 15.3478 1C13.6001 1 12.0029 1.76491 10.9571 3.00496C9.93572 1.75657 8.39939 1 6.6609 1C3.65438 1 1.33519 3.30377 1.03658 6.26653C1.03084 6.30105 1.02506 6.34309 1.01979 6.39253C0.968756 6.8712 1.0112 7.50545 1.20844 8.27824C1.62751 9.92013 2.60748 11.4156 3.98965 12.5744L10.426 17.8082C10.7395 18.0631 11.2086 18.064 11.5233 17.8104L18.0068 12.5852C19.535 11.1143 20.4432 9.79113 20.8033 8.26643C20.984 7.50072 21.0261 6.87062 20.9861 6.39777Z"
          fill={isInWishlist ? red : isHover ? bgLightBlue : 'none'}
        />
        {/* colorPath */}
        <path
          d="M20.9861 6.39776C20.9807 6.33326 20.9745 6.28381 20.9689 6.24987C20.6892 3.31947 18.3646 0.999988 15.3478 0.999988C13.6001 0.999988 12.0029 1.7649 10.9571 3.00494C9.93571 1.75656 8.39938 0.999988 6.66089 0.999988C3.65436 0.999988 1.33518 3.30376 1.03657 6.26652C1.03083 6.30104 1.02505 6.34308 1.01978 6.39252C0.968745 6.87119 1.01119 7.50544 1.20843 8.27822C1.6275 9.92012 2.60747 11.4156 3.98964 12.5744L10.426 17.8082C10.7395 18.0631 11.2086 18.064 11.5233 17.8104L18.0068 12.5852C19.535 11.1143 20.4432 9.79111 20.8033 8.26641C20.984 7.50071 21.0261 6.87061 20.9861 6.39776ZM19.1756 7.93777C18.8924 9.13693 18.1388 10.2348 16.858 11.4714L10.9787 16.2058L5.09917 11.4249C3.9714 10.4793 3.16992 9.25622 2.82993 7.92423C2.67557 7.31941 2.64456 6.85577 2.68142 6.51033L2.69318 6.43282C2.90748 4.20172 4.57209 2.5409 6.66089 2.5409C8.21592 2.5409 9.53894 3.41803 10.1819 4.82676C10.4685 5.45451 11.4303 5.45451 11.7168 4.82676C12.3469 3.44627 13.7637 2.5409 15.3478 2.5409C17.4367 2.5409 19.1012 4.20183 19.3155 6.43358C19.3213 6.47844 19.3228 6.49086 19.3251 6.51784C19.3526 6.84378 19.3207 7.32302 19.1756 7.93777Z"
          fill={isInWishlist ? red : isHover ? midBlue : greyBlue}
        />
        {/* colorShadow */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.1854 6.38092C21.2275 6.8789 21.1825 7.53051 20.998 8.31235C20.6254 9.88962 19.6874 11.2451 18.1455 12.7293L18.1392 12.7354L11.6488 17.9661C11.2606 18.279 10.6866 18.2779 10.2998 17.9633L3.86113 12.7277C2.45004 11.5446 1.44505 10.014 1.01464 8.32769C0.812903 7.53726 0.766816 6.87865 0.820909 6.37132C0.826227 6.32144 0.832127 6.27767 0.838214 6.2402C1.1488 3.18776 3.54453 0.799988 6.66089 0.799988C8.37496 0.799988 9.90263 1.51168 10.9594 2.69958C12.0428 1.51855 13.6258 0.799988 15.3478 0.799988C18.4738 0.799988 20.8759 3.20293 21.1674 6.22448C21.1737 6.26412 21.18 6.31661 21.1854 6.38092ZM20.9689 6.24987C20.9745 6.28381 20.9807 6.33326 20.9861 6.39776C21.0261 6.87061 20.984 7.50071 20.8033 8.26641C20.4432 9.79111 19.535 11.1143 18.0068 12.5852L11.5233 17.8104C11.2086 18.064 10.7395 18.0631 10.426 17.8082L3.98964 12.5744C2.60747 11.4156 1.6275 9.92012 1.20843 8.27822C1.01119 7.50544 0.968745 6.87119 1.01978 6.39252C1.02505 6.34308 1.03083 6.30104 1.03657 6.26652C1.33518 3.30376 3.65436 0.999988 6.66089 0.999988C8.32646 0.999988 9.80647 1.69442 10.8259 2.85047C10.8705 2.90108 10.9143 2.95258 10.9571 3.00494C11.0007 2.95329 11.0452 2.90246 11.0906 2.85247C12.1362 1.7025 13.6729 0.999988 15.3478 0.999988C18.3646 0.999988 20.6892 3.31947 20.9689 6.24987ZM19.3155 6.43358C19.1012 4.20183 17.4367 2.5409 15.3478 2.5409C13.7637 2.5409 12.3469 3.44627 11.7168 4.82676C11.4303 5.45451 10.4685 5.45451 10.1819 4.82676C9.53894 3.41803 8.21592 2.5409 6.66089 2.5409C4.57209 2.5409 2.90748 4.20172 2.69318 6.43282L2.68142 6.51033C2.64456 6.85577 2.67557 7.31941 2.82993 7.92423C3.16992 9.25622 3.9714 10.4793 5.09917 11.4249L10.9787 16.2058L16.858 11.4714C18.1388 10.2348 18.8924 9.13693 19.1756 7.93777C19.3207 7.32302 19.3526 6.84378 19.3251 6.51784C19.3228 6.49086 19.3213 6.47844 19.3155 6.43358ZM18.981 7.89185C19.1226 7.29159 19.1511 6.83417 19.1258 6.53467C19.124 6.51249 19.1229 6.50384 19.1172 6.45897L19.1164 6.45271C18.9105 4.30856 17.3193 2.7409 15.3478 2.7409C13.8397 2.7409 12.4954 3.60272 11.8988 4.9098C11.7173 5.30733 11.3252 5.49757 10.9494 5.49757C10.5736 5.49757 10.1814 5.30734 9.99997 4.90981C9.38857 3.57025 8.13536 2.7409 6.66089 2.7409C4.68949 2.7409 3.09814 4.30847 2.89226 6.45195L2.89121 6.46286L2.87984 6.53584C2.84684 6.85136 2.87424 7.2891 3.02371 7.87476C3.35223 9.16176 4.12818 10.3494 5.22653 11.2707L10.9793 15.9486L16.7255 11.3212C17.9899 10.0993 18.7108 9.03547 18.981 7.89185Z"
          fill={isInWishlist ? red : isHover ? midBlue : greyBlue}
        />
      </svg>
    </div>
  );
};