/* eslint-disable react/no-unescaped-entities */
import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { JsonLogo } from "./icons/JsonLogo";
import { NextjsLogo } from "./icons/NextjsLogo";
import { NodejsLogo } from "./icons/NodejsLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { PostgresqlLogo } from "./icons/PostgresqlLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { TailwindcssLogo } from "./icons/TailwindcssLogo";

export const Skills = () => {
  return (
    <Section className="flex flex-col gap-4 items-start">
      <Badge variant={"outline"}>Skills</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Ce que je sais faire ...
      </h2>
      <div className="flex max-md:flex-col gap-4 flex-1">
        <div className="flex flex-col gap-2">
          <NodejsLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">Node.js</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Utilisant uniquement du HTML/CSS/JS pour mes projets, j'ai décidé de
            consulter des librairies Javascript front-end et j'ai pu découvrir{" "}
            <Code className="inline-flex items-center gap-1">
              <ReactLogo size={16} className="inline" />
              React
            </Code>
            ,{" "}
            <Code className="inline-flex items-center gap-1">
              <TailwindcssLogo size={16} className="inline" />
              TailwindCSS
            </Code>{" "}
            et{" "}
            <Code className="inline-flex items-center gap-1">
              <NextjsLogo size={16} className="inline" />
              Next.js
            </Code>{" "}
            qui m'ont permis de réaliser notamment mon portfolio.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <PhpLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">PHP</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Durant mon curseur universitaire, j'ai principalement appris à
            maîtriser le language{" "}
            <Code className="inline-flex items-center gap-1">
              <PhpLogo size={16} className="inline" />
              PHP
            </Code>{" "}
            et nous avons adoptez le modèle d'architecture
            MVC(Model-View-Controller) pour mieux comprendre ce qui est fait
            dans le monde professionnel.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <PostgresqlLogo size={42} />
          <h3 className="text-2xl font-semibold tracking-tight">PostgreSQL</h3>
          <p className="text-sm text-muted-foreground text-justify">
            Bien entendu pour créer des applications digne de ce nom, il faut
            maîtriser un SGBD et celui que j'ai eu l'occasion d'utiliser sur la
            plupart de mes projets est{" "}
            <Code className="inline-flex items-center gap-1">
              <PostgresqlLogo size={16} className="inline" />
              PostgreSQL
            </Code>{" "}
            de la modélisation au SQL. J'ai pu me familiariser avec les concepts
            de normalisation, dénormalisation avec le format{" "}
            <Code className="inline-flex items-center gap-1">
              <JsonLogo size={16} className="inline" />
              JSON
            </Code>
            .
          </p>
        </div>
      </div>
    </Section>
  );
};
