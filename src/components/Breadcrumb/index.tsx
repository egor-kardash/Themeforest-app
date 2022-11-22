import React from 'react';

import { useLocation } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { Paths } from '@/constants';
import { parsePathName } from '@/helpers';

import { BaseLocation, BreadcrumbContainer, DividerLine } from './styled';

export const Breadcrumb = () => {
  const location = useLocation();

  const pathNames = location.pathname.split('/');
  const parsedPathNames = parsePathName(location.pathname);

  return (
    <BreadcrumbContainer>
      {parsedPathNames.map((item, index) => {
        const url = `${pathNames.slice(0, index + 1).join('/')}`;

        const isLast = index === parsedPathNames.length - 1;

        return (
          <React.Fragment key={getId()}>
            <BaseLocation to={url} isLast={isLast}>
              {item}
            </BaseLocation>
            <DividerLine isLast={isLast} />
          </React.Fragment>
        );
      })}
    </BreadcrumbContainer>
  );
};
