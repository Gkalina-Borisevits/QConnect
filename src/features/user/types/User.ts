export default interface User {
    id?: number;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  photos: string[]; 
  token: string;
  birthday?: string;
  address?: {
    city?: string;
    street?: string;
    zipCode?: string;
  };
  specialty?: string;
  company?: string;
  website?: string;
  phone?: string;
  languages?: string;
  hobbies?: string;
  maritalStatus?: string;
  education?: {
    degree?: string;
    school?: string;
    vocationalTraining?: string;
  };
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    whatsapp?: string;
    telegram?: string;
  };
}