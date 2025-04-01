const ThinkingFaceIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.5 13C4 13 4.5 14.0129 4.5 15.5C4.5 17 6.49999 20 9 20C10.5 20 11 19 11.5 17.5C12 16 14.5 14.5 13.5 13.5C12.41 12.41 10.7941 15 8.5 15C6 15 7 13 5.5 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <circle
        cx="9"
        cy="8"
        r="1"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <circle
        cx="15"
        cy="7"
        r="1"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M9 12.5C9 11.5 9.90036 11 13.0004 11C14.5004 11 16.0004 11.5 16.0004 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default ThinkingFaceIcon;
