const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      className="fill-current"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.41871 16.6618C7.41871 11.557 11.5569 7.41877 16.6617 7.41877C21.7666 7.41877 25.9048 11.557 25.9048 16.6618C25.9048 21.7665 21.7666 25.9048 16.6617 25.9048C11.5569 25.9048 7.41871 21.7665 7.41871 16.6618ZM16.6617 4.5C9.94502 4.5 4.5 9.94498 4.5 16.6618C4.5 23.3785 9.94502 28.8235 16.6617 28.8235C19.4942 28.8235 22.1005 27.8552 24.1677 26.2316L29.0087 31.0726C29.5786 31.6425 30.5026 31.6425 31.0726 31.0726C31.6425 30.5026 31.6425 29.5786 31.0726 29.0087L26.2316 24.1677C27.8552 22.1005 28.8235 19.4942 28.8235 16.6618C28.8235 9.94498 23.3785 4.5 16.6617 4.5Z"
        fill="#8565FF"
      />
    </svg>
  );
};

export default SearchIcon;
