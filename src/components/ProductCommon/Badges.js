import cn from 'classnames';
import { Badge } from 'components/UI/Badge';

export const Badges = ({ badges, className = '' }) => {
  return (
    badges.length > 0 && (
      <div className={cn('absolute z-10', className)}>
        {badges.map((badge) => {
          return (
            <Badge key={`badgr${badge}`} variant={badge}>
              {badge}
            </Badge>
          );
        })}
      </div>
    )
  );
};
