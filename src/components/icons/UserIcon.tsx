const UserIcon = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M14.1824 9.87818C14.1824 7.66751 15.9198 5.92724 18 5.92724C20.0802 5.92724 21.8176 7.66751 21.8176 9.87818C21.8176 12.0888 20.0802 13.8291 18 13.8291C15.9198 13.8291 14.1824 12.0888 14.1824 9.87818ZM18 3C14.2564 3 11.2725 6.10809 11.2725 9.87818C11.2725 13.6483 14.2564 16.7564 18 16.7564C21.7437 16.7564 24.7275 13.6483 24.7275 9.87818C24.7275 6.10809 21.7437 3 18 3ZM8.9099 26.1218C8.9099 23.9398 10.6683 22.1709 12.8374 22.1709H23.1626C25.3317 22.1709 27.0901 23.9398 27.0901 26.1218C27.0901 28.3039 25.3317 30.0728 23.1626 30.0728H12.8374C10.6683 30.0728 8.9099 28.3039 8.9099 26.1218ZM12.8374 19.2436C9.06122 19.2436 6 22.3231 6 26.1218C6 29.9205 9.06122 33 12.8374 33H23.1626C26.9388 33 30 29.9205 30 26.1218C30 22.3231 26.9388 19.2436 23.1626 19.2436H12.8374Z"
      />
    </svg>
  );
};

export default UserIcon;
