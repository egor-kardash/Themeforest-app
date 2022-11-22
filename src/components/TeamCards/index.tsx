import React, { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
import { v4 as getId } from 'uuid';

import { memberList } from '@/constants/ourTeamPageData';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';

import { MemberCard } from '../MemberCard';
import { MemberCardProps } from '../MemberCard/types';
import { TeamCardsContainer } from './styled';

export const TeamCards = () => {
  const [teamMembers, setTeamMembers] = useState<MemberCardProps[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const [lastElementRef] = useInfiniteScroll(
    hasMore ? uploadMore : () => {},
    isFetching,
  );

  useEffect(() => {
    uploadMore();
  }, []);

  useEffect(() => {
    if (teamMembers.length === memberList.length) {
      setHasMore(false);
    }
  });

  function uploadMore() {
    setIsFetching(true);

    setTimeout(() => {
      const uploadedData = memberList.slice(
        teamMembers.length,
        teamMembers.length + 9,
      );

      setTeamMembers([...teamMembers, ...uploadedData]);
      setIsFetching(false);
    }, 500);
  }

  return (
    <TeamCardsContainer>
      {teamMembers.map((item, index) => {
        if (teamMembers.length === index + 1) {
          return <MemberCard key={getId()} {...item} ref={lastElementRef} />;
        } else {
          return <MemberCard key={getId()} {...item} />;
        }
      })}
    </TeamCardsContainer>
  );
};
