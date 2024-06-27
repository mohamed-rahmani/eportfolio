import { ComponentPropsWithoutRef } from "react";

export const JsLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      alt="css logo"
    />
  );
};
