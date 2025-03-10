const ChevronsUpIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M3.29289 16.7071C3.68342 17.0976 4.31658 17.0976 4.70711 16.7071L12 9.41421L19.2929 16.7071C19.6834 17.0976 20.3166 17.0976 20.7071 16.7071C21.0976 16.3166 21.0976 15.6834 20.7071 15.2929L12.7071 7.29289C12.3166 6.90236 11.6834 6.90236 11.2929 7.29289L3.29289 15.2929C2.90237 15.6834 2.90237 16.3166 3.29289 16.7071Z"
      />
    </svg>
  );
};

export default ChevronsUpIcon;
