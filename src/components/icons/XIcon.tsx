const XIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M18.3445 4.28405C18.7232 3.90532 19.3372 3.90532 19.7159 4.28405C20.0947 4.66277 20.0947 5.27681 19.7159 5.65554L13.3715 12L19.716 18.3445C20.0947 18.7232 20.0947 19.3372 19.716 19.716C19.3372 20.0947 18.7232 20.0947 18.3445 19.716L12 13.3715L5.65554 19.716C5.27681 20.0947 4.66277 20.0947 4.28405 19.716C3.90532 19.3372 3.90532 18.7232 4.28405 18.3445L10.6285 12L4.28405 5.65554C3.90533 5.27681 3.90533 4.66277 4.28405 4.28405C4.66278 3.90532 5.27682 3.90532 5.65555 4.28405L12 10.6285L18.3445 4.28405Z"
      />
    </svg>
  );
};

export default XIcon;
