"use client";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowUpRight,
  GraduationCap,
  LucideIcon,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Code } from "./Code";
import { Section } from "./Section";
import { CssLogo } from "./icons/CssLogo";
import { HtmlLogo } from "./icons/HtmlLogo";
import { JsLogo } from "./icons/JsLogo";
import { LaravelLogo } from "./icons/LaravelLogo";
import { LiquidLogo } from "./icons/LiquidLogo";
import { PhpLogo } from "./icons/PhpLogo";
import { PostgresqlLogo } from "./icons/PostgresqlLogo";
import { ReactLogo } from "./icons/ReactLogo";
import { ShopifyLogo } from "./icons/ShopifyLogo";
import { TypescriptLogo } from "./icons/TypescriptLogo";
import { UserLogo } from "./icons/UserLogo";

export const Status = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index: any) => {
    if (openFaqIndex === index) {
      setOpenFaqIndex(null);
    } else {
      setOpenFaqIndex(index);
    }
  };

  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className="w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Mes projets</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <div
                key={index}
                className="items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <SideProject
                  key={index}
                  Logo={project.Logo}
                  title={project.title}
                  subtitle={project.subtitle}
                  description={project.description}
                  role={project.role}
                  outil={project.outil}
                  url={project.url}
                  rep={project.rep}
                />
                {openFaqIndex === index && (
                  <div className="p-3">
                    <p className="text-justify">{project.description}</p>
                    <br />
                    {project.role && (
                      <>
                        <p className="mb-2">
                          <Badge variant={"outline"}>Rôle</Badge>
                        </p>
                        {project.role == "Auditeur Interne" && (
                          <Code className="inline-flex items-center gap-1 mr-2 text-sm">
                            <UserLogo size={16} className="inline" />
                            Auditeur interne
                          </Code>
                        )}
                        {project.role == "Développeur full stack" && (
                          <Code className="inline-flex items-center gap-1 mr-2 text-sm">
                            <UserLogo size={16} className="inline" />
                            Développeur full stack
                          </Code>
                        )}
                      </>
                    )}
                    <br />
                    <br />
                    {project.outil && (
                      <p className="mb-2">
                        <Badge variant={"outline"}>Stack technique</Badge>
                      </p>
                    )}
                    {project.outil &&
                      project.outil.map((outil, index) => (
                        <div
                          key={index}
                          className="inline-flex text-sm text-muted-foreground text-justify"
                        >
                          {outil === "html" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <HtmlLogo size={14} className="inline" />
                              HTML
                            </Code>
                          )}
                          {outil === "react" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <div className="animate-spin-slow delay-150">
                                <ReactLogo size={19} className="inline" />
                              </div>
                              React
                            </Code>
                          )}
                          {outil === "css" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <CssLogo size={16} className="inline" />
                              CSS
                            </Code>
                          )}
                          {outil === "typescript" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <TypescriptLogo size={16} className="inline" />
                              Typescript
                            </Code>
                          )}
                          {outil === "js" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <JsLogo size={16} className="inline" />
                              JS
                            </Code>
                          )}
                          {outil === "php" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <PhpLogo size={16} className="inline" />
                              PHP
                            </Code>
                          )}
                          {outil === "laravel" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <LaravelLogo size={16} className="inline" />
                              Laravel
                            </Code>
                          )}
                          {outil === "postgresql" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <PostgresqlLogo size={16} className="inline" />
                              PostgreSQL
                            </Code>
                          )}
                          {outil === "shopify" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <ShopifyLogo size={16} className="inline" />
                              Shopify
                            </Code>
                          )}
                          {outil === "liquid" && (
                            <Code className="inline-flex items-center gap-1 mr-2 mb-2">
                              <LiquidLogo size={16} className="inline" />
                              Liquid
                            </Code>
                          )}
                        </div>
                      ))}
                    <br />
                    <br />
                    <div className="inline-flex">
                      {project.url != "/" && (
                        <>
                          <br />
                          <Link
                            href={project.url}
                            className="text-lime-600 mr-2"
                          >
                            <button className="px-4 py-1 bg-black text-white text-sm font-bold rounded-sm hover:bg-lime-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                              Voir le site
                            </button>
                          </Link>
                        </>
                      )}
                      {project.rep != "/" && (
                        <Link
                          href={project.rep}
                          className="text-orange-600 mr-2"
                        >
                          <button className="px-4 py-1 bg-black text-white text-sm font-bold rounded-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            Voir le repository
                          </button>
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Expérience</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contactez-moi</p>
          <ContactCard
            image="https://avatars.githubusercontent.com/u/128792690?v=5"
            mediumImage="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            name="mohamed rahmani"
            description="Mail"
            url="mailto:mohamedrahmani.contact@gmail.com"
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: GraduationCap,
    title: "Site de formations en ligne",
    subtitle: "SAS PERFORM VISION",
    description:
      "Pour mon deuxième semestre en 2ème année de BUT Informatique, j'ai eu pour projet d'entreprise d'auditer un site de formations en ligne, dans une équipe de 6 en tant qu'auditeur interne, qui était principalement codé en PHP mais avec mon groupe nous avons décider de moderniser l'application en utilisant React pour le front-end et crée une API REST Laravel pour le back-end avec la même structure de base de donnée relationnel sur PostgreSQL.",
    role: "Auditeur Interne",
    outil: ["react", "css", "typescript", "laravel", "api", "postgresql"],
    url: "https://perform-vision.netchill.net/",
    rep: "https://gitlab.sorbonne-paris-nord.fr/lorbh/audit-paqueta",
  },
  {
    Logo: ShoppingCart,
    title: "Site e-commerce",
    subtitle: "DIGI&ITECH",
    description:
      "Duran mon stage au sein de l'entreprise Digi&Tech, j'ai créé un site de e-commerce à l'aide du framework shopify. Le site a été principalement développé sur le CMS Shopify avec son propre langage de templating LIQUID.",
    role: "Développeur full stack",
    outil: ["shopify", "liquid"],
    url: "https://f904f9-3.myshopify.com",
    rep: "/",
  },
  {
    Logo: Workflow,
    title: "Site extranet",
    subtitle: "SAS PERFORM VISION",
    description:
      "Pour mon premier semestre en 2ème année de BUT Informatique, j'ai eu pour projet d'entreprise de réaliser, au sein d'un groupe de 6, un site extranet en tant que développeur full stack. Pour ce projet, nous avons décidé de le développer entièrement en PHP avec l'architecture MVC.",
    role: "Développeur full stack",
    outil: ["html", "css", "js", "php", "postgresql"],
    url: "/",
    rep: "https://gitlab.sorbonne-paris-nord.fr/12203379/zeengine",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  role: string;
  outil: Array<string>;
  url: string;
  rep: string;
};

const SideProject = (props: SideProjectProps) => {
  return (
    <div className="inline-flex items-center gap-4 p-1 rounded">
      <span className="bg-accent text-accent-foreground p-3 rounded-sm">
        <props.Logo />
      </span>
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.subtitle}</p>
      </div>
    </div>
  );
};

const WORKS: WorkProps[] = [
  {
    image:
      "https://f904f9-3.myshopify.com/cdn/shop/files/Logo_D_I_Transparent.png?v=1710837473&width=60",
    title: "DIGI&TECH",
    role: "Développeur Full Stack",
    date: "2 mois",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQFKqpSTY7n3Vg/company-logo_200_200/0/1630490023079?e=1724284800&v=beta&t=AdF0oF0ZNoZ6dE2ziZDtII3Q18msDqLfOG_dJDCwLtE",
    title: "GASEL",
    role: "Stagiaire",
    date: "1 semaine",
    url: "https://gasel.com",
  },
];

type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />
      <div>
        <p className="text-lg font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.role}</p>
      </div>
      <div className="ml-auto">
        <p className="text-sm text-muted-foreground">{props.date}</p>
      </div>
    </Link>
  );
};

const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
  url: string;
}) => {
  return (
    <Link href={props.url}>
      <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors flex items-center group gap-4">
        <div className="relative">
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          <img
            src={props.mediumImage}
            alt={props.name}
            className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
          />
        </div>
        <div className="mr-auto">
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{props.name}</p>
          </div>
          <p className="text-xs text-muted-foreground">{props.description}</p>
        </div>
        <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 mr-4 transition-transform" />
      </Card>
    </Link>
  );
};
