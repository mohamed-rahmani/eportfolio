import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { GitlabIcon } from "./icons/GitlabIcon";
import { InstagramIcon } from "./icons/InstagramIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 backdrop-blur-sm z-50">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold text-primary">mohamed.portfolio</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/mohamed-rahmani"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={12} className="text-foreground"></GithubIcon>
          </Link>
          <Link
            href="https://gitlab.sorbonne-paris-nord.fr/12203379"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GitlabIcon size={12} className="text-foreground"></GitlabIcon>
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohamed-rahmani-6143b72a1/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={12} className="text-foreground"></LinkedinIcon>
          </Link>
          <Link
            href="https://www.instagram.com/mohamedrahmani__/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <InstagramIcon
              size={12}
              className="text-foreground"
            ></InstagramIcon>
          </Link>
        </ul>
      </Section>
    </header>
  );
};
