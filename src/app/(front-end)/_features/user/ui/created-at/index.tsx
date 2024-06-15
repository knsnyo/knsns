import { CalendarMonthRounded } from '@mui/icons-material';
import IconText from 'src/app/(front-end)/__shared/icon-text';

const CreatedAt: React.FC = () => {
  return (
    <IconText text='가입일자: 1999.08.29' icon={<CalendarMonthRounded />} />
  );
};

export default CreatedAt;
