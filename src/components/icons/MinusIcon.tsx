const MinusIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className="fill-current"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12C23 11.4477 22.5523 11 22 11H2C1.44772 11 1 11.4477 1 12C1 12.5523 1.44772 13 2 13H22C22.5523 13 23 12.5523 23 12Z"
      />
    </svg>
  );
};

export default MinusIcon;
