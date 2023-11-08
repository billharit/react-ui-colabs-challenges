/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
export default function JarallaxImage({ className = "", ...props }) {
  return <img className={`jarallax-img ${props.className}`} {...props} />;
}
