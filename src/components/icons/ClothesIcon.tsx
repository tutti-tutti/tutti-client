const ClothesIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      className="fill-current"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.3333 15L36.6666 15C36.6666 17.7384 34.5773 19.9583 32 19.9583C29.4227 19.9583 27.3333 17.7384 27.3333 15V15L25.6666 15C25.6666 18.3693 28.4838 21.1333 32 21.1333C35.5161 21.1333 38.3333 18.3693 38.3333 15ZM39.6666 15C39.6666 19.1418 36.2158 22.4667 32 22.4667C27.7841 22.4667 24.3333 19.1418 24.3333 15L20.6 15C20.6 15 13 25.5938 13 27C13 28.4062 20.6 27 20.6 27V48H43.4V27C43.4 27 51 28.4062 51 27C51 25.5938 43.4 15 43.4 15L39.6666 15Z"
      />
    </svg>
  );
};

export default ClothesIcon;
