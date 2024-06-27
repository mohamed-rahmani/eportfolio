import { ComponentPropsWithoutRef } from "react";

export const HtmlLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.worldvectorlogo.com/logos/html-1.svg"
      alt="html logo"
    />
  );
};
