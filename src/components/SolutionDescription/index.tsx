import React from 'react';

import { useMediaQuery } from 'react-responsive';
import { v4 as getId } from 'uuid';

import {
  ContentItem,
  ContentList,
  ImageWrapper,
  SideBar,
  SolutionDescriptionContainer,
  Tab,
} from './styled';
import { SolutionDescriptionProps } from './types';

export const SolutionDescription = ({ content }: SolutionDescriptionProps) => {
  const isDesktopOrTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <SolutionDescriptionContainer>
      {!isDesktopOrTablet && (
        <SideBar>
          {content.map((item) => (
            <Tab key={getId()}>
              <a href={`#${item.id}`}>{item.title}</a>
            </Tab>
          ))}
        </SideBar>
      )}
      <ContentList>
        {content.map((item) => {
          return (
            <ContentItem key={getId()} id={item.id}>
              <h2>{item.title}</h2>
              {item.image && (
                <ImageWrapper>
                  <img
                    src={item.image}
                    alt='Paragraph image'
                    title={`${item.title} image`}
                  />
                </ImageWrapper>
              )}
              <p>{item.description}</p>
              {item.typeList && (
                <ul>
                  {item.typeList.map((type) => (
                    <li key={getId()}>{type}</li>
                  ))}
                </ul>
              )}
            </ContentItem>
          );
        })}
      </ContentList>
    </SolutionDescriptionContainer>
  );
};
