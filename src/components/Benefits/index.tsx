import React from 'react';

import { v4 as getId } from 'uuid';

import { benefitsCardList } from '@/constants/benefitsCardData';

import { BenefitsCard } from '../BenefitsCard';
import {
  BenefitsContainer,
  BenefitsHeadlineWrapper,
  CardsContainer,
  Wrapper,
} from './styled';

export const Benefits = () => {
  return (
    <BenefitsContainer>
      {/* <Wrapper>

      </Wrapper> */}
      <BenefitsHeadlineWrapper>
        <h2>The benefits of Ensome </h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
      </BenefitsHeadlineWrapper>

      <CardsContainer>
        {benefitsCardList.map((item) => (
          <BenefitsCard key={getId()} {...item} />
        ))}
      </CardsContainer>
    </BenefitsContainer>
  );
};
