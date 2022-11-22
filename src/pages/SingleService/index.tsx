import React from 'react';

import { useHistory, useParams } from 'react-router-dom';

import { ContactsUs } from '@/components/ContactsUs';
import { HeadlineSinglePage } from '@/components/HeadlineSinglePage';
import { ServicesDescription } from '@/components/ServicesDescription';
import { Subscribe } from '@/components/Subscribe';
import { Paths } from '@/constants';
import { singleServiceData } from '@/constants/singleServiceData';

export const SingleService = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  const currentService = singleServiceData.find((item) => item.id === id);

  if (!currentService) {
    history.push(Paths.Home);
    return null;
  }

  return (
    <>
      <HeadlineSinglePage title={currentService.pageTitle} />
      <ServicesDescription {...currentService} />
      <ContactsUs />
      <Subscribe />
    </>
  );
};
