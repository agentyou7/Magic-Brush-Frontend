
export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  fullDetails: string;
  imageUrl: string;
}

export interface BusinessData {
  companyName: string;
  director: string;
  phone: string;
  email: string;
  address: string;
  socials: {
    instagram: string;
    tiktok: string;
    facebook: string;
    x: string;
  };
}
