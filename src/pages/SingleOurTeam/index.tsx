import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { Breadcrumb } from '@/components/Breadcrumb';
import { HeadlineSinglePage } from '@/components/HeadlineSinglePage';
import { Subscribe } from '@/components/Subscribe';
import { TeamMemberInfo } from '@/components/TeamMemberInfo';
import { Paths } from '@/constants';
import { memberList } from '@/constants/ourTeamPageData';

export const SingleOurTeam = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const currentMember = memberList.find((item) => item.id === id);

  if (!currentMember) {
    history.push(Paths.Home);
    return null;
  }

  return (
    <>
      <HeadlineSinglePage title={currentMember.name} />
      <TeamMemberInfo {...currentMember} />
      <Subscribe />
    </>
  );
};
