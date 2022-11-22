import styled from 'styled-components';

import theme from '@/theme';

export const TeamMemberInfoContainer = styled.section`
  max-width: 1141px;
  padding: 0 16px;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  gap: 30px;
  margin-bottom: 120px;
`;

export const InfoListWrapper = styled.div`
  max-width: 540px;
  align-self: flex-start;
  display: flex;
  flex-flow: column wrap;
  gap: 30px;
`;

export const InfoItem = styled.div`
  h6 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    color: ${theme.colors.primary};
  }

  p {
    font-family: 'Open Sans';
    font-size: 16px;
    line-height: 28px;
    color: ${theme.colors.black};
  }
`;

export const SocialNetworksList = styled.div`
  margin-top: 5px;
  display: flex;
  flex-flow: row wrap;
  gap: 15px;
`;

export const iconStyles = {
  color: theme.colors.grey,
};

export const ImageWrapper = styled.div`
  max-width: 540px;
  width: 100%;
  max-height: 650px;
  border-radius: 6px;
  overflow: hidden;
  /* position: relative; */

  img {
    /* position: absolute; */
    width: 100%;
    /* top: -15%; */
  }
`;
