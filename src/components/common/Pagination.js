import cn from 'classnames';
import { useRouter } from 'next/router';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import { useDevice } from 'utils/useDevice';
import { RightArrowPage } from 'components/UI/svg';
import { TWTS } from 'const-styles';

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange = null,
  getUrl = null,
  hrefBuilder = null,
  urlPrefix = null,
}) => {
  const router = useRouter();
  const { isMobile, isTablet, isDesktop } = useDevice();

  const getUrlDefault = (forPage) => {
    const params = new URLSearchParams();
    const queryString = params.toString();

    let pageString = '';
    if (forPage !== 1) {
      pageString = `/page/${forPage}`;
    }

    return `/${urlPrefix}${pageString}${queryString ? '?' : ''}${queryString}`;
  };

  const getUrlFn =
    urlPrefix !== null && typeof getUrl === 'function' ? getUrl : getUrlDefault;

  const onPageChangeDefault = ({ selected }) => {
    const page = selected + 1;
    const url = getUrlFn(page);
    router.push(url);
  };

  const hrefBuilderDefault = (selected) => {
    const url = getUrlFn(selected);
    return url;
  };

  const onPageChangeFn =
    urlPrefix !== null && typeof onPageChange === 'function'
      ? onPageChange
      : onPageChangeDefault;

  const hrefBuilderFn =
    urlPrefix !== null && typeof hrefBuilder === 'function'
      ? hrefBuilder
      : hrefBuilderDefault;

  const [marginPagesDisplayed, setMarginPagesDisplayed] = useState(0);
  const [pageRangeDisplayed, setPageRangeDisplayed] = useState(0);
  useEffect(() => {
    setMarginPagesDisplayed(isMobile ? 0 : isTablet ? 5 : 7);
    setPageRangeDisplayed(isMobile ? 2 : isTablet ? 5 : 7);
  }, [isMobile, isTablet, isDesktop]);

  return (
    <div className="flex flex-col items-center my-23px xl:my-21px">
      <ReactPaginate
        disableInitialCallback={true}
        // initialPage={currentPage - 1}
        forcePage={currentPage - 1}
        previousLabel={
          <RightArrowPage className="mr-1 -mb-px transform rotate-180 xl:w-5px xl:h-2 xl:ml-0.5" />
        }
        nextLabel={<RightArrowPage className="xl:w-5px xl:h-2 xl:-mr-px" />}
        // breakLabel={`... ${remainCount}`} remainCount не вычисляется библиотекой
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={marginPagesDisplayed}
        pageRangeDisplayed={pageRangeDisplayed}
        onPageChange={onPageChangeFn}
        hrefBuilder={hrefBuilderFn}
        containerClassName={'flex text-greyBlue font-bold'}
        activeClassName={''}
        activeLinkClassName={cn(
          'bg-greyBlue border-none text-white',
          'xl:hover:text-white focus:outline-none'
        )}
        previousLinkClassName={cn(
          'flex items-center justify-center w-10 h-10 rounded-full',
          'bg-white border border-darkLightBlue text-greyBlue focus:outline-none',
          currentPage !== 1 && 'xl:hover:text-greyBlue xl:hover:border-greyBlue',
          'mr-1.5',
          'xl:w-8 xl:h-8 xl:mr-1'
        )}
        pageLinkClassName={cn(
          TWTS.mob['Body - bold'],
          'flex items-center justify-center h-10 w-10 rounded-full',
          'bg-white border border-darkLightBlue focus:outline-none',
          'xl:hover:border-greyBlue',
          'mx-1.5 pt-1',
          TWTS.xl['Remark text-bold'],
          'xl:w-8 xl:h-8 xl:mx-3px'
        )}
        breakLinkClassName={cn(
          TWTS.mob['Body - bold'],
          'flex items-center justify-center h-10 w-10',
          'text-greyBlue font-bold focus:outline-none',
          '-ml-0.5 mr-1 pt-1',
          'xl:mx-0 xl:pt-0 xl:pb-3px',
          'xl:hover:opacity-80',
          TWTS.xl['Remark text-bold']
        )}
        nextLinkClassName={cn(
          'flex items-center justify-center w-10 h-10 rounded-full',
          'bg-white border border-darkLightBlue text-greyBlue focus:outline-none',
          'xl:hover:text-greyBlue xl:hover:border-greyBlue',
          'xl:w-8 xl:h-8 xl:ml-3px'
        )}
        disabledClassName="opacity-70 xl:hover:cursor-not-allowed"
      />
    </div>
  );
};

export { Pagination };
