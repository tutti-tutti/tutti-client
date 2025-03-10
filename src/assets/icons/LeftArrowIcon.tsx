const LeftArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M10.4825 4.27214C10.8701 4.64416 10.881 5.25808 10.5067 5.64336L5.27379 11.0303H21.0244C21.5632 11.0303 22 11.4644 22 12C22 12.5356 21.5632 12.9697 21.0244 12.9697H5.27379L10.5067 18.3566C10.881 18.7419 10.8701 19.3558 10.4825 19.7279C10.0949 20.0999 9.47733 20.0891 9.10306 19.7039L2.27378 12.6736C1.90874 12.2978 1.90874 11.7022 2.27378 11.3264L9.10306 4.29614C9.47733 3.91086 10.0949 3.90011 10.4825 4.27214Z"
      />
    </svg>
  );
};

export default LeftArrowIcon;
