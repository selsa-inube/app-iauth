import type { IUserWelcome } from '@ptypes/components/register/IUserWelcome';
import { StyledUserWelcome } from './styles';

const UserWelcome = (props: IUserWelcome) => {
  const { userData, labels } = props;

  return (
    <StyledUserWelcome>
      {labels.welcomeMessage.greeting}, <b>{`${userData.firstNames} ${userData.lastNames}`}</b> - {userData.identificationType} {userData.identificationNumber}
    </StyledUserWelcome>
  );
};

export { UserWelcome };
