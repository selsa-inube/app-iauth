import { SecurityCheckUI } from './interface';
import { ISecurityCheck } from '@ptypes/components/login/SecurityCheck/ISecurityCheck';

const SecurityCheck = (props: ISecurityCheck) => {
  const { imageUrl, phrase, isMobile } = props;
  return <SecurityCheckUI imageUrl={imageUrl} phrase={phrase} isMobile={isMobile} />;
};

export { SecurityCheck };
