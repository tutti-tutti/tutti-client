const UpArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M4.27212 10.4826C4.64414 10.8702 5.25806 10.881 5.64334 10.5067L11.0303 5.27385L11.0303 21.0244C11.0303 21.5632 11.4644 22 12 22C12.5356 22 12.9697 21.5632 12.9697 21.0244L12.9697 5.27385L18.3567 10.5067C18.7419 10.881 19.3559 10.8702 19.7279 10.4826C20.0999 10.0949 20.0891 9.4773 19.7038 9.10302L12.6736 2.27377C12.2978 1.90874 11.7022 1.90874 11.3264 2.27377L4.29615 9.10303C3.91087 9.4773 3.90011 10.0949 4.27212 10.4826Z"
      />
    </svg>
  );
};

export default UpArrowIcon;
