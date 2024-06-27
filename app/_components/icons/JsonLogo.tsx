import { ComponentPropsWithoutRef } from "react";

export const JsonLogo = (
  props: ComponentPropsWithoutRef<"img"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/JSON_vector_logo.svg/121px-JSON_vector_logo.svg.png"
      alt="json logo"
    />
  );
};
