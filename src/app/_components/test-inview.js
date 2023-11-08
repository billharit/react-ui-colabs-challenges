"use client";

import { InView } from "react-intersection-observer";

export default function TestInview() {
  return (
    <div>
      TESTSETS
      <InView onChange={() => console.log(inView)}>
        {({ ref, inView }) => (
          <div ref={ref}>
            <h2>Element is inside the viewport: {inView.toString()}</h2>
          </div>
        )}
      </InView>
    </div>
  );
}
