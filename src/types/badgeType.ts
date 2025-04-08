export type BadgeColor =
  | 'secondary'
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger';

export type BadgeStyle =
  | 'default'
  | 'subtle'
  | 'subtleSquare'
  | 'outlineSquare'
  | 'dot';

export interface BadgeVariant {
  color: BadgeColor;
  style: BadgeStyle;
}
