import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { InstagramIcon } from "./icons/InstagramIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    mohamed.portfolio
                </h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/mohamed-rahmani" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
                        <GithubIcon size={12} className="text-foreground"></GithubIcon>
                    </Link>
                    <Link href="https://www.linkedin.com/in/mohamed-rahmani-6143b72a1/" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
                        <LinkedinIcon size={12} className="text-foreground"></LinkedinIcon>
                    </Link>
                    <Link href="https://www.instagram.com/mohamedrahmani__/" className={cn(buttonVariants({ variant: "outline"}), "size-6 p-0")}>
                        <InstagramIcon size={12} className="text-foreground"></InstagramIcon>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}