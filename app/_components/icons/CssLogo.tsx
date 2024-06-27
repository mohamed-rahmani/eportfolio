import { ComponentPropsWithoutRef } from "react";

export const CssLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1024px-CSS3_logo.svg.png"
      alt="css logo"
    />
  );
};
