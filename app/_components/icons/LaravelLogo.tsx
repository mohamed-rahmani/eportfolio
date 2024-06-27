import { ComponentPropsWithoutRef } from "react";

export const LaravelLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
      alt="html logo"
    />
  );
};
