import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import { ContactsUs } from '@/components/ContactsUs';
import { HeadlineSinglePage } from '@/components/HeadlineSinglePage';
import { SolutionDescription } from '@/components/SolutionDescription';
import { Subscribe } from '@/components/Subscribe';
import { Paths } from '@/constants';
import { pageDataList } from '@/constants/singleSolutionData';

export const SingleSolution = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const currentSolution = pageDataList.find((item) => item.id === id);

  if (!currentSolution) {
    history.push(Paths.Home);
    return null;
  }

  return (
    <>
      <HeadlineSinglePage title={currentSolution.pageTitle} />
      <SolutionDescription {...currentSolution} />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
