export interface InfoItemType {
  label: string;
  value: string;
}

export interface InfoRowType {
  horizontal?: boolean;
  items: InfoItemType[];
}

export interface FooterInfoProps {
  title: string;
  rows: InfoRowType[];
  gap?: string;
}

export type InfoRowProps = {
  items: InfoItemType[];
  className?: string;
};
