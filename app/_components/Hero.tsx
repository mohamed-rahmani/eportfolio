/* eslint-disable react/no-unescaped-entities */
import { Code } from "./Code";
import { Section } from "./Section";
import { Uspn13Icon } from "./icons/Uspn13Icon";

export const Hero = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl">Mohamed RAHMANI</h2>
        <h3 className="text-3xl font-caption text-primary">
          Computer Science Student
        </h3>
        <p className="text-justify">
          Souhaitant devenir un développeur full stack pour l'engouement de
          créer des solutions informatiques, j'ai intégré le BUT Informatique à
          l'Université
          <Code className="inline-flex items-center gap-1">
            <Uspn13Icon size={16} className="inline" /> Sorbonne Paris Nord
          </Code>
          . Cette formation propose dans son cursus de découvrir tous les
          aspects du développement web et de l'algorithmie en plus de
          connaissance en réseau. Aujourd'hui en 2ème année, je suis
          actuellement à la recherche d'un contrat d'apprentissage d'un an avec
          un rythme d'alternance de 15jours/15jours pour ma dernière année en
          BUT.
        </p>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://avatars.githubusercontent.com/u/128792690?v=5"
          className="w-full h-auto max-w-xs max-md:w-56"
          alt="mohamed's picture"
        />
      </div>
    </Section>
  );
};
