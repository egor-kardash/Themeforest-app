import { Link } from 'react-router-dom';
import { v4 as getId } from 'uuid';

import { Paths } from '@/constants';
import { servicesCardList } from '@/constants/servicesCardData';

import { SearchBar } from '../SearchBar';
import { ServicesBar } from '../ServicesBar';
import {
  ContentItem,
  ContentList,
  ImageWrapper,
  ServicesDescriptionContainer,
  SolutionList,
} from './styled';
import { ServicesDescriptionProps } from './types';

export const ServicesDescription = ({ content }: ServicesDescriptionProps) => {
  console.log(content);

  return (
    <ServicesDescriptionContainer>
      <SearchBar />
      <ContentList>
        {content.map((item) => {
          return (
            <ContentItem key={getId()} id={item.id}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.solutions && (
                <SolutionList>
                  {item.solutions.map((solution) => (
                    <li key={getId()}>{solution}</li>
                  ))}
                </SolutionList>
              )}
              {item.image && (
                <ImageWrapper>
                  <img
                    src={item.image}
                    alt='Paragraph image'
                    title={`${item.title} image`}
                  />
                </ImageWrapper>
              )}
            </ContentItem>
          );
        })}
      </ContentList>
      <ServicesBar />
    </ServicesDescriptionContainer>
  );
};
