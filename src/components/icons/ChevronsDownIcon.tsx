const ChevronsDownIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M20.7071 7.29289C20.3166 6.90237 19.6834 6.90237 19.2929 7.29289L12 14.5858L4.70711 7.29289C4.31658 6.90237 3.68342 6.90237 3.29289 7.29289C2.90237 7.68342 2.90237 8.31658 3.29289 8.70711L11.2929 16.7071C11.6834 17.0976 12.3166 17.0976 12.7071 16.7071L20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289Z"
      />
    </svg>
  );
};

export default ChevronsDownIcon;
