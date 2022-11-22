import { ContactForm } from '../ContactForm';
import { ContactInfo } from '../ContactInfo';
import { ContactsHeadlineContainer } from './styled';

export const ContactsHeadline = () => {
  return (
    <ContactsHeadlineContainer>
      <h1>
        How can we <span>help you?</span>
      </h1>
      <ContactForm />
      <ContactInfo />
    </ContactsHeadlineContainer>
  );
};
