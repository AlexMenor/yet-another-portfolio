function Icon({ className, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox={`0 0 24 24`}
      className={`inline ${className}`}
    >
      <path d="M5 3l3.057-3L20 12 8.057 24 5 21l9-9z"></path>
    </svg>
  );
}

export default Icon;
