import { ComponentPropsWithoutRef } from "react"

export const NextjsLogo = (props: ComponentPropsWithoutRef<"img"> & {size?: number}) => {
    return (
        <img 
        width={props.size}
        height={props.size}
        src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
        alt="uspn13 logo"
        />
    )
}