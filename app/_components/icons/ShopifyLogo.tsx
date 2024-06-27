import { ComponentPropsWithoutRef } from "react";

export const ShopifyLogo = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  return (
    <img
      width={props.size}
      height={props.size}
      src="https://cdn.iconscout.com/icon/free/png-256/free-shopify-226579.png?f=webp"
      alt="css logo"
    />
  );
};
