import React from 'react';

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
  return (
    <SolutionDescriptionContainer>
      <SideBar>
        {content.map((item) => (
          <Tab key={getId()}>
            <a href={`#${item.id}`}>{item.title}</a>
          </Tab>
        ))}
      </SideBar>
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
            </ContentItem>
          );
        })}
      </ContentList>
    </SolutionDescriptionContainer>
  );
};
