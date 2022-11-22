import { useLoadScript } from '@react-google-maps/api';

import { Breadcrumb } from '@/components/Breadcrumb';
import { ContactsHeadline } from '@/components/ContactsHeadline';
import { MapSection } from '@/components/MapSection';

export const Contacts = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string,
  });

  return (
    <>
      <Breadcrumb />
      <ContactsHeadline />
      {isLoaded && <MapSection />}
    </>
  );
};
