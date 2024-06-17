"use client";
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
import { Section } from "./Section";

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
          <p className="text-lg text-muted-foreground">Projets personnels</p>
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
                  url={project.url}
                  rep={project.rep}
                />
                {openFaqIndex === index && (
                  <div className="p-3">
                    <p className="text-justify">{project.description}</p>
                    <br />
                    {project.url != "/" && (
                      <Link
                        href={project.url}
                        className="text-primary text-lime-600"
                      >
                        - Voir le site -
                      </Link>
                    )}
                    <br />
                    {project.rep != "/" && (
                      <Link
                        href={project.rep}
                        className="text-primary text-orange-600"
                      >
                        - Voir le repository -
                      </Link>
                    )}
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
    Logo: Workflow,
    title: "Site extranet",
    subtitle: "SAS PERFORM VISION",
    description:
      "Pour mon premier semestre en 2ème année de BUT Informatique, j'ai eu pour projet d'entreprise de réaliser, au sein d'un groupe de 6, un site extranet en tant que développeur full stack. Pour ce projet, nous avons décidé de le développer entièrement en PHP avec l'architecture MVC.",
    url: "/",
    rep: "https://gitlab.sorbonne-paris-nord.fr/12203379/zeengine",
  },
  {
    Logo: ShoppingCart,
    title: "Site e-commerce",
    subtitle: "DIGI&ITECH",
    description:
      "Duran mon stage au sein de l'entreprise Digi&Tech, j'ai créer un site de e-commerce à l'aide du framework shopify. Le site a été principalement développé sur le CMS Shopify avec son propre langage de templating LIQUID.",
    url: "https://f904f9-3.myshopify.com",
    rep: "/",
  },
  {
    Logo: GraduationCap,
    title: "Site de formation en ligne",
    subtitle: "SAS PERFORM VISION",
    description:
      "Pour mon deuxième semestre en 2ème année de BUT Informatique, j'ai eu pour projet d'entreprise d'auditer un site de formations en ligne, dans une équipe de 6 en tant qu'auditeur interne, qui était à la base en PHP mais avec mon groupe nous avons décider de moderniser l'application en utilisant React pour le front-end et crée une API Laravel pour le back-end avec la même structure de base de donnée relationnel sur PostgreSQL.",
    url: "https://perform-vision.netchill.net/",
    rep: "https://gitlab.sorbonne-paris-nord.fr/lorbh/audit-paqueta",
  },
];

type SideProjectProps = {
  Logo: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
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
    title: "Digi&iTech",
    role: "Développeur Full Stack",
    date: "2024",
    url: "/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D0BAQFKqpSTY7n3Vg/company-logo_200_200/0/1630490023079?e=1724284800&v=beta&t=AdF0oF0ZNoZ6dE2ziZDtII3Q18msDqLfOG_dJDCwLtE",
    title: "GASEL",
    role: "Stagiaire",
    date: "2018",
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
