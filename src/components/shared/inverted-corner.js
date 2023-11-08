export default function InvertedCorner({
  className,
  width,
  height,
  fill = "#f9f8f6",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 100 100"
      className={className}
    >
      <path d="m100,0H0v100C0,44.77,44.77,0,100,0Z" fill={fill}></path>
    </svg>
  );
}
