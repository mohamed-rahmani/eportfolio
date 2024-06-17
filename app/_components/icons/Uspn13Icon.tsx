import { ComponentPropsWithoutRef } from "react"

export const Uspn13Icon = (props: ComponentPropsWithoutRef<"img"> & {size?: number}) => {
    return (
        <img 
        width={props.size}
        height={props.size}
        src="https://www.univ-spn.fr/wp-content/uploads/2023/01/cropped-cropped-favicon_round-180x180.png"
        alt="uspn13 logo"
        />
    )
}