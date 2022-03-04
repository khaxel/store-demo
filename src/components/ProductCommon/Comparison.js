import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import Tooltip from 'components/common/Tooltip';
import { useAddToComparison, useRemoveFromComparison } from 'api/comparison';
import {
  handleMutationErrors,
  handleMutationSuccess,
} from 'components/common/mutationHandlers';

const bgLightBlue = '#F1F3F5';
const brandOrange = '#F09A19';

export const Comparison = ({ id, className = '', isSelected = false }) => {
  const { t } = useTranslation('common');
  const [isHover, setIsHover] = useState(false);
  const [isInComparison, setIsInComparison] = useState(isSelected);
  const { mutation: mutationAdd, add } = useAddToComparison(['me']);
  const { mutation: mutationRemove, remove } = useRemoveFromComparison(['me']);

  useEffect(() => {
    setIsInComparison(isSelected);
  }, [isSelected]);

  const toggleComparison = (toAdd) => {
    if (toAdd) {
      add({ items_id: id });
    } else {
      remove({ items_id: id });
    }
  };

  handleMutationErrors(mutationAdd);
  handleMutationSuccess(mutationAdd, () => {
    setIsInComparison(true);
  });
  handleMutationErrors(mutationRemove);
  handleMutationSuccess(mutationRemove, () => {
    setIsInComparison(false);
  });

  return (
    <div
      onClick={() => {
        toggleComparison(!isInComparison);
      }}
    >
      <Tooltip isShow={isHover} className="ml-13px">
        {t(isInComparison ? 'Удалить из сравнения' : 'Добавить к сравнению')}
      </Tooltip>

      <svg
        viewBox="0 0 30 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          className,
          isInComparison ? 'text-midBlue' : 'text-greyBlue hover:text-midBlue',
          isHover ? ' cursor-pointer' : ''
        )}
        onMouseOver={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <path
          d="M29 16.64C29 19.048 26.7614 21 24 21C21.2386 21 19 19.048 19 16.64C19 14.2321 21.2386 15.1866 24 15.1866C26.7614 15.1866 29 14.2321 29 16.64Z"
          fill={isInComparison ? bgLightBlue : isHover ? bgLightBlue : 'none'}
        />
        <path
          d="M12 16.64C12 19.048 9.76142 21 7 21C4.23858 21 2 19.048 2 16.64C2 14.2321 4.23858 15.1866 7 15.1866C9.76142 15.1866 12 14.2321 12 16.64Z"
          fill={isInComparison ? bgLightBlue : isHover ? bgLightBlue : 'none'}
        />
        <path
          d="M11.9031 14.632L7.78962 5.83188H13.7853C13.7785 5.77644 13.7785 5.72101 13.7785 5.65865C13.7785 5.22903 13.8469 4.80635 13.929 4.38367H6.21542C5.85266 5.23596 5.57889 5.83188 5.57889 5.83188L1.46542 14.632C1.19164 14.736 1.01369 14.9923 1 15.2834C1 18.4431 3.53242 21 6.64661 21C6.6603 21 6.66715 21 6.68083 21C9.80871 20.9584 12.3411 18.4154 12.4027 15.2418C12.4096 14.9438 12.1974 14.6805 11.9031 14.632ZM6.68768 6.66339L10.3015 14.5212H3.07385L6.68768 6.66339ZM6.68768 19.5518C4.61383 19.5587 2.84114 18.0412 2.50576 15.9694H10.9107C10.5137 18.0274 8.75468 19.5241 6.68768 19.5518Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.78962 5.83188L11.9031 14.632C12.1974 14.6805 12.4096 14.9438 12.4027 15.2418C12.3411 18.4154 9.80871 20.9584 6.68083 21H6.64661C3.53242 21 1 18.4431 1 15.2834C1.01369 14.9923 1.19164 14.736 1.46542 14.632L5.57889 5.83188C5.57889 5.83188 5.85266 5.23596 6.21542 4.38367H13.929C13.9128 4.46698 13.8972 4.5503 13.8825 4.63367C13.827 4.94803 13.7851 5.26316 13.7792 5.58188C13.7787 5.60744 13.7785 5.63303 13.7785 5.65865C13.7785 5.72101 13.7785 5.77644 13.7853 5.83188H7.78962ZM5.35172 5.7275L5.35241 5.72601L5.36392 5.70083L5.3996 5.62231C5.43074 5.55356 5.47608 5.45292 5.53274 5.32568C5.64608 5.07118 5.80465 4.71041 5.98538 4.28576L6.05012 4.13367H14.2323L14.1744 4.43135C14.0929 4.85074 14.0285 5.25405 14.0285 5.65865C14.0285 5.72398 14.0288 5.76374 14.0334 5.80124L14.0681 6.08188H8.18244L12.0798 14.4196C12.427 14.5387 12.661 14.8752 12.6527 15.2471C12.6527 15.2472 12.6527 15.2469 12.6527 15.2471M5.35172 5.7275L1.27828 14.442C0.964197 14.6028 0.766775 14.9209 0.750276 15.2716L0.75 15.2834C0.75 18.5785 3.39165 21.25 6.64661 21.25H6.68067L6.68416 21.25C9.94949 21.2066 12.5883 18.5526 12.6527 15.2471M6.68768 6.66339L3.07385 14.5212H10.3015L6.68768 6.66339ZM9.91136 14.2712L6.68768 7.26171L3.46399 14.2712H9.91136ZM2.81024 16.2194C3.23682 18.0211 4.83514 19.3074 6.68558 19.3018C8.52982 19.2765 10.1177 18.0083 10.5968 16.2194H2.81024ZM2.55374 16.2194C2.53542 16.137 2.5194 16.0536 2.50576 15.9694H10.9107C10.8944 16.0537 10.8759 16.137 10.8551 16.2194C10.3691 18.1475 8.67002 19.5252 6.68768 19.5518C4.69819 19.5584 2.98584 18.1621 2.55374 16.2194Z"
          fill="currentColor"
        />
        <path
          d="M24.2777 4.38366H16.6257C16.6257 4.39059 16.6257 4.40445 16.6189 4.41138C16.6189 4.42524 16.612 4.43217 16.612 4.45296C16.612 4.46681 16.6052 4.48067 16.6052 4.50146C16.5847 4.67469 16.571 4.84792 16.5573 5.02115C16.5368 5.29139 16.5094 5.56163 16.4752 5.83188H22.6967L18.5832 14.632C18.2821 14.7013 18.0767 14.9716 18.0836 15.2834C18.0836 18.4431 20.616 21 23.7302 21C23.7439 21 23.7507 21 23.7644 21C26.8855 20.9792 29.4247 18.4431 29.4863 15.2834C29.4658 14.9923 29.2878 14.7429 29.0209 14.632L24.9074 5.83188L24.2777 4.38366ZM23.8123 6.66339L27.4262 14.5212H20.1985L23.8123 6.66339ZM23.7781 19.5518C21.7043 19.5587 19.9316 18.0412 19.5962 15.9694H28.0011C27.6041 18.0274 25.8451 19.5241 23.7781 19.5518Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.4417 4.13366L25.1353 5.72907L29.2096 14.4453C29.5131 14.609 29.711 14.9162 29.7357 15.2658L29.7365 15.277L29.7363 15.2882C29.6721 18.5807 27.0254 21.2283 23.7661 21.25L23.7644 21.25L23.7304 21.25C20.4762 21.25 17.835 18.5798 17.8336 15.2859C17.8264 14.9038 18.0534 14.5619 18.4034 14.4263L22.3039 6.08188H16.1915L16.2271 5.80047C16.2608 5.53435 16.2878 5.26827 16.308 5.00221L16.3082 4.99914C16.3216 4.83066 16.3353 4.65679 16.3558 4.48208C16.3571 4.45848 16.3606 4.43936 16.363 4.42777C16.3638 4.41749 16.365 4.40755 16.3666 4.3979C16.3673 4.39366 16.3681 4.38964 16.3689 4.38591V4.30873L16.3757 4.3018V4.13366H24.4417ZM16.3757 4.38257V4.38366C16.3757 4.38536 16.3757 4.38478 16.3757 4.38257ZM16.6052 4.50146C16.5847 4.67469 16.571 4.84792 16.5573 5.02115C16.5431 5.20806 16.5256 5.39497 16.5049 5.58188C16.4956 5.66521 16.4857 5.74854 16.4752 5.83188H22.6967L18.5832 14.632C18.2821 14.7013 18.0767 14.9716 18.0836 15.2834C18.0836 18.4431 20.616 21 23.7302 21H23.7644C26.8855 20.9792 29.4247 18.4431 29.4863 15.2834C29.4658 14.9923 29.2878 14.7429 29.0209 14.632L24.9074 5.83188L24.2777 4.38366H16.6257C16.6257 4.39059 16.6257 4.40445 16.6189 4.41138C16.6189 4.41761 16.6175 4.42244 16.616 4.42776C16.6141 4.43427 16.612 4.44151 16.612 4.45296C16.612 4.45918 16.6107 4.46541 16.6091 4.47227C16.6073 4.48067 16.6052 4.49002 16.6052 4.50146ZM23.8123 6.66339L20.1985 14.5212H27.4262L23.8123 6.66339ZM23.8123 7.26171L20.5886 14.2712H27.036L23.8123 7.26171ZM19.9007 16.2194C20.3273 18.0211 21.9256 19.3074 23.776 19.3018C25.6202 19.2765 27.2081 18.0083 27.6872 16.2194H19.9007ZM19.6442 16.2194C19.6259 16.137 19.6098 16.0536 19.5962 15.9694H28.0011C27.9848 16.0537 27.9663 16.137 27.9455 16.2194C27.4595 18.1475 25.7604 19.5252 23.7781 19.5518C21.7886 19.5584 20.0763 18.1621 19.6442 16.2194Z"
          fill="currentColor"
        />
        <path
          d="M19.1923 5.83187H8.67937C8.39875 5.83187 8.17973 5.60321 8.17973 5.32604V4.89642C8.17973 4.61232 8.40559 4.39059 8.67937 4.39059H19.1923C19.473 4.39059 19.692 4.61925 19.692 4.89642V5.32604C19.6988 5.60321 19.473 5.83187 19.1923 5.83187Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.1923 6.08187H8.67937C8.25557 6.08187 7.92973 5.73611 7.92973 5.32604V4.89642C7.92973 4.47492 8.26685 4.14059 8.67937 4.14059H19.1923C19.6161 4.14059 19.942 4.48635 19.942 4.89642V5.32326C19.9505 5.74226 19.6094 6.08187 19.1923 6.08187ZM19.692 5.32604V4.89642C19.692 4.61925 19.473 4.39059 19.1923 4.39059H8.67937C8.40559 4.39059 8.17973 4.61232 8.17973 4.89642V5.32604C8.17973 5.60321 8.39875 5.83187 8.67937 5.83187H19.1923C19.473 5.83187 19.6988 5.60321 19.692 5.32604Z"
          fill="currentColor"
        />
        <path
          d="M14.5314 9.70532V2.72064C14.5314 2.31875 14.8531 2 15.2432 2C15.6402 2 15.955 2.32567 15.955 2.72064V9.69839C15.955 10.1003 15.6333 10.419 15.2432 10.419C14.8531 10.426 14.5314 10.1072 14.5314 9.70532Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.2814 9.70532V2.72064C14.2814 2.18202 14.7137 1.75 15.2432 1.75C15.7827 1.75 16.205 2.1921 16.205 2.72064V9.69839C16.205 10.2363 15.7739 10.6678 15.2454 10.669C14.7125 10.6772 14.2814 10.2423 14.2814 9.70532ZM15.2432 10.419C15.6333 10.419 15.955 10.1003 15.955 9.69839V2.72064C15.955 2.32567 15.6402 2 15.2432 2C14.8531 2 14.5314 2.31875 14.5314 2.72064V9.70532C14.5314 10.1072 14.8531 10.426 15.2432 10.419Z"
          fill="currentColor"
        />
        <circle
          cx="24.5"
          cy="5.5"
          r="5.5"
          fill={brandOrange}
          className={isInComparison ? '' : 'hidden'}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M27.2391 3.18143C27.5531 3.45156 27.5887 3.9251 27.3186 4.23911L24.7379 7.23911C24.5955 7.40474 24.3878 7.50001 24.1694 7.50001C23.9509 7.50001 23.7433 7.40474 23.6008 7.23911L22.1814 5.58911C21.9113 5.2751 21.9469 4.80156 22.2609 4.53143C22.5749 4.26131 23.0485 4.2969 23.3186 4.61091L24.1694 5.59994L26.1814 3.26091C26.4516 2.9469 26.9251 2.91131 27.2391 3.18143Z"
          fill="white"
          className={isInComparison ? '' : 'hidden'}
        />
      </svg>
    </div>
  );
};
