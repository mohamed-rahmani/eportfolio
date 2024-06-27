import { ComponentPropsWithoutRef } from "react";

export const LiquidLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://assets-global.website-files.com/64be309a0c8ae7454454fcef/653932043d90a3fa696fd68a_liquid-logo-text.png"
      alt="css logo"
    />
  );
};
