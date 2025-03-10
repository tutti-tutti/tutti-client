const RightIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M7.29289 3.29289C6.90237 3.68341 6.90237 4.31657 7.29289 4.7071L14.5858 12L7.29289 19.2929C6.90237 19.6834 6.90237 20.3166 7.29289 20.7071C7.68341 21.0976 8.31658 21.0976 8.7071 20.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L8.7071 3.29289C8.31658 2.90236 7.68341 2.90236 7.29289 3.29289Z"
      />
    </svg>
  );
};

export default RightIcon;
