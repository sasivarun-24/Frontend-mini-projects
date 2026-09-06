export interface Address {
  street: string;
  city: string;
  postalCode: string;
  country: string;
}

export interface User {
  id: number;
  name: string;
  address: Address;
  email: string;
  telephone: string;
}
