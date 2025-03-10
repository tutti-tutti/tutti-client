const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M11 3.81818C11 3.36631 11.4477 3 12 3C12.5523 3 13 3.36631 13 3.81818V11H20.1818C20.6337 11 21 11.4477 21 12C21 12.5523 20.6337 13 20.1818 13H13V20.1818C13 20.6337 12.5523 21 12 21C11.4477 21 11 20.6337 11 20.1818L11 13H3.81818C3.36631 13 3 12.5523 3 12C3 11.4477 3.36631 11 3.81818 11H11L11 3.81818Z"
      />
    </svg>
  );
};

export default PlusIcon;
