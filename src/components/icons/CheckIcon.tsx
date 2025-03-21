const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M19.7112 6.27643C20.0925 6.64865 20.0968 7.25635 19.7207 7.63377L9.67735 17.7142C9.49514 17.897 9.24648 18 8.98698 18C8.72749 18 8.47883 17.897 8.29662 17.7142L4.27926 13.682C3.90323 13.3046 3.90749 12.6969 4.28877 12.3247C4.67005 11.9524 5.28397 11.9567 5.66 12.3341L8.98698 15.6733L18.34 6.28584C18.716 5.90843 19.33 5.90421 19.7112 6.27643Z"
      />
    </svg>
  );
};

export default CheckIcon;
