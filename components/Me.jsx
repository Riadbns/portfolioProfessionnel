import Link from "next/link";
import React from "react";

import { MdExpandMore } from "react-icons/md";

const Me = () => {
  return (
    <div id="me" className="w-full">
      <div className="max-w-screen-xl mx-auto px-8 py-16 text-center md:text-left">
        <h2 className="pt-4 text-3xl md:text-4xl tracking-wider uppercase text-blue-500 font-bold">
        à propos
        </h2>

        <div className="shadow-xl shadow-blue-300 my-8 px-8">
          <p className="py-4 max-w-2xl mx-auto">
          Je suis un développeur web passionné et déterminé, titulaire d&apos;un diplôme de baccalauréat en informatique de l&apos;université. Je suis actuellement en train de terminer ma formation à la cité collégiale pour poursuivre mon objectif de devenir un développeur web accompli.</p>
          <p className="py-4 max-w-2xl mx-auto">
          Mon intérêt pour les technologies émergentes et ma fascination pour la manière dont elles peuvent améliorer la vie des gens m&apos;ont motivé à me spécialiser en programmation informatique. Je suis fermement convaincu que ma passion et ma détermination me permettront de réaliser mes objectifs professionnels.</p>
          <p className="py-4 max-w-2xl mx-auto">
          Je suis un candidat motivé et passionné qui aspire à faire partie d&apos;une entreprise dans le domaine de l&apos;informatique où je pourrais mettre mes compétences et mes connaissances en pratique et me développer professionnellement. Je suis un individu motivé et déterminé, doté d&apos;une attitude positive et d&apos;une grande capacité d&apos;apprentissage. Je suis attentif aux besoins des autres et je suis capable de résoudre des problèmes en équipe tout en apportant une attention particulière aux détails Je suis particulièrement doué pour travailler en équipe, où j&apos;apporte non seulement des idées innovantes mais aussi un sens aigu de l&apos;écoute et de la coopération.</p>
          <p className="py-4 max-w-2xl mx-auto">
          Je suis particulièrement passionné par le développement web et la création d&apos;interfaces utilisateur attrayantes et interactives. Je suis toujours à la recherche de nouveaux défis et de nouvelles technologies pour améliorer mes compétences et créer des applications web modernes et performantes. Mon expertise et ma capacité à travailler en équipe font de moi un candidat idéal pour toute organisation dans le domaine de l&apos;informatique. Je suis prêt à apporter mes connaissances, mon engagement et mon dévouement à tout projet sur lequel je travaillerai.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <Link legacyBehavior href="/resume" >
            <a className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              resume
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </a>
          </Link>

          <Link href="/#portfolio">
            <div className="group flex items-center justify-center my-2 bg-blue-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer">
              projets
              <span className="-rotate-90 duration-100 ease-in group-hover:-rotate-180">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Me;
