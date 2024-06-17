import { ComponentPropsWithoutRef } from "react"

export const ReactLogo = (props: ComponentPropsWithoutRef<"img"> & {size?: number}) => {
    return (
        <img 
        width={props.size}
        height={props.size}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png?20220125121207"
        alt="react logo"
        />
    )
}