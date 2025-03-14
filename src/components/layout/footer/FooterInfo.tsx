import {
  FooterInfoProps,
  InfoRowProps,
  InfoItemType,
} from '@/types/footerType';

const FooterInfo = ({ title, rows, gap = 'gap-sm' }: FooterInfoProps) => {
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
const InfoRow = ({
  items,
  className = 'gap-sm flex flex-col',
}: InfoRowProps) => (
  <div className={className}>
    {items.map((item, index) => (
      <InfoItem key={index} label={item.label} value={item.value} />
    ))}
  </div>
);

// 각 Info 항목
const InfoItem = ({ label, value }: InfoItemType) => (
  <p>
    <strong>{label}</strong>
    <span className="text-text-secondary ml-2xs break-keep">{value}</span>
  </p>
);

export default FooterInfo;
