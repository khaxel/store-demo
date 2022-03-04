import { ArticleTableOfContents as s } from './styles';

const ArticleTableOfContents = ({ headings, activeId = 0 }) => {
  let prevIsActive = false;
  return (
    <nav className={s['wrapper']}>
      {headings?.length > 0 &&
        headings.map((heading, index) => {
          prevIsActive = index > 0 && activeId === headings[index - 1].id;
          return (
            <Li
              id={heading.id}
              isActive={activeId === heading.id}
              prevIsActive={prevIsActive}
              isLast={headings.length === index + 1}
              key={`atrhead${index}`}
            >
              {heading.title}
            </Li>
          );
        })}
    </nav>
  );
};

const scrollTo = ({ id }) => {
  const el = document.querySelector(`#${id}`);
  el?.scrollIntoView({ behavior: 'smooth' });
};

const Li = ({ id, isActive, prevIsActive, isLast, children }) => {
  return (
    <div className={s['item']({ isActive })} onClick={() => scrollTo({ id })}>
      <div className={s['item__body']({ isActive, prevIsActive, isLast })}>
        {children}
      </div>
    </div>
  );
};

export { ArticleTableOfContents };
