import React from 'react';

import aboutTeamImage from '@/assets/images/about-team-image.jpg';

import { AboutTeamContainer } from './styled';

export const AboutTeam = () => {
  return (
    <AboutTeamContainer>
      <img src={aboutTeamImage} />
      <p>
        Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet
        in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt
        aliquam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id
        commodo libero.
        <br />
        <br />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Nulla rhoncus consectetur eros non iaculis. Phasellus tristique
        eu nisl eu consectetur. Morbi urna massa, imperdiet in mauris et,
        euismod vestibulum lacus. Integer enim elit, tincidunt aliquam ligula
        id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo
        libero.
        <br />
        <br />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas. Nulla rhoncus consectetur eros non iaculis.
      </p>
    </AboutTeamContainer>
  );
};
