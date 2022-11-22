import bookDatabaseIcon from '@/assets/icons/book-database.svg';
import calendarDataIcon from '@/assets/icons/calendar-data.svg';
import clipboardDataIcon from '@/assets/icons/clipboard-data.svg';
import dataPieIcon from '@/assets/icons/data-pie.svg';
import dataWhiskerIcon from '@/assets/icons/data-whisker.svg';
import databaseIconIcon from '@/assets/icons/database.svg';

export const solutionList = [
  {
    id: 'data-transferring',
    icon: bookDatabaseIcon,
    tittle: 'Data transferring',
    description: `Extract, transform, load (ETL) or extract, load, transform (ELT); 
    data governance (security, availability, quality) implementation.`,
  },
  {
    id: 'data-integration',
    icon: calendarDataIcon,
    tittle: 'Data integration',
    description: `Data preparation and management; machine learning (ML); 
    designing and implanting artificial intelligence (AI) solutions.`,
  },
  {
    id: 'big-data',
    icon: clipboardDataIcon,
    tittle: 'Big data',
    description: `Big data infrastructure setup and support.; 
    big data quality and security management; big data capture, analysis and reporting.`,
  },
  {
    id: 'data-warehousing',
    icon: databaseIconIcon,
    tittle: 'Data warehousing',
    description: `The process of constructing and using a data warehouse. 
    Data warehouse and data marts design and implementation.`,
  },
  {
    id: 'self-service-BI',
    icon: dataWhiskerIcon,
    tittle: 'Self-service BI',
    description: `Business intelligence; data analytics infrastructure design and implementation; 
    scheduled analytics querying and reporting.`,
  },
  {
    id: 'data-visualization',
    icon: dataPieIcon,
    tittle: 'Data visualization',
    description: `Interactive dashboarding; custom and pre-built visuals; 
    multiple visualization techniques (symbol maps, line charts, pie charts...)`,
  },
];
