import { v4 as getId } from 'uuid';

import advantagesImagePath from '@/assets/images/advantages-image.png';
import { chooseUsContentList } from '@/constants/advantagesData';

import { AdvantagesContainer, ChooseUsBlock, Technology } from './styled';

export const AdvantagesSection = () => {
  return (
    <AdvantagesContainer>
      <img
        src={advantagesImagePath}
        alt='Advantages section image'
        title='Advantages section image'
      />
      <ChooseUsBlock>
        <h2>Why choose us?</h2>
        {chooseUsContentList.map((item) => (
          <Technology key={getId()}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </Technology>
        ))}
      </ChooseUsBlock>
    </AdvantagesContainer>
  );
};
