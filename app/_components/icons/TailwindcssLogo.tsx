import { ComponentPropsWithoutRef } from "react"

export const TailwindcssLogo = (props: ComponentPropsWithoutRef<"img"> & {size?: number}) => {
    return (
        <img 
        width={props.size}
        height={props.size}
        src="https://cdn.icon-icons.com/icons2/2699/PNG/512/tailwindcss_logo_icon_167923.png"
        alt="uspn13 logo"
        />
    )
}