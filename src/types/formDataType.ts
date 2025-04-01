export interface AddressInputItem {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  vaildType: 'name' | 'phone' | 'email' | 'number' | 'note' | 'address';
}
