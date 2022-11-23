import { StyledLink } from './styled';
import { ReadMoreLinkProps } from './types';

export const ReadMoreLink = ({ path }: ReadMoreLinkProps) => {
  return <StyledLink to={path}>Read more</StyledLink>;
};
