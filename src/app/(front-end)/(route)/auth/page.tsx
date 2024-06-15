import { Typography } from '@mui/material';
import Feature from 'src/app/(front-end)/_features';

const Page: React.FC = () => {
  return (
    <>
      <Typography>계정을 선택해주세요.</Typography>
      <Feature.Auth.UI.GoogleButton />
      <Feature.Auth.UI.FacebookButton />
    </>
  );
};

export default Page;
