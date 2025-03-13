import {
  FooterInfoProps,
  InfoRowProps,
  InfoItemType,
} from '@/types/footerType';

const FooterInfo: React.FC<FooterInfoProps> = ({
  title,
  rows,
  gap = 'gap-sm',
}) => {
  return (
    <section className="gap-lg flex flex-col">
      <h6 className="font-style-subHeading">{title}</h6>

      <div className={`${gap} flex flex-col`}>
        {rows.map((row, index) => (
          <InfoRow
            key={index}
            items={row.items}
            className={
              row.horizontal
                ? 'gap-xs flex flex-col md:flex-row'
                : 'gap-sm flex flex-col'
            }
          />
        ))}
      </div>
    </section>
  );
};

// Info 행
const InfoRow: React.FC<InfoRowProps> = ({
  items,
  className = 'gap-sm flex flex-col',
}) => (
  <div className={className}>
    {items.map((item, index) => (
      <InfoItem key={index} label={item.label} value={item.value} />
    ))}
  </div>
);

// 각 Info 항목
const InfoItem: React.FC<InfoItemType> = ({ label, value }) => (
  <p>
    <strong>{label}</strong>
    <span className="text-text-secondary ml-2xs">{value}</span>
  </p>
);

export default FooterInfo;
