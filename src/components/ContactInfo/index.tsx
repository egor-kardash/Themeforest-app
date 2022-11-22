import React from 'react';

import { v4 as getId } from 'uuid';

import { contactInfoList } from '@/constants/contactsPageData';

import { ContactItem, ContactList } from './styled';

export const ContactInfo = () => {
  return (
    <ContactList>
      {contactInfoList.map((item) => (
        <ContactItem key={getId()}>
          <img
            src={item.icon}
            alt='Contact icon'
            title={`${item.tittle} icon`}
          />
          <h6>{item.tittle}</h6>
          <p>{item.description}</p>
        </ContactItem>
      ))}
    </ContactList>
  );
};
