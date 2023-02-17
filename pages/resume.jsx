import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
       

      <div className='max-w-[940px] mx-auto p-2 pt-[60px] border-4'>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <div className='flex flex-col justify-start'>
            <h1 className='font-bold'>RIAD BENOSMANE</h1>
            <p className=''>Ottawa, ON</p>
         </div>
          
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/riad-benosmane/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Riadbns'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Développeur Front End <span className='px-1'>|</span> Développeur Web{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Développeur Front End</p>
            <p className='py-2'>Développeur Web</p>
          </div>
        </div>
        <p>
        Je suis un développeur web passionné et déterminé, titulaire d&apos;un diplôme de baccalauréat en informatique 
        de l&apos;université. Je suis actuellement en train de terminer ma formation à la cité collégiale pour poursuivre 
        mon objectif de devenir un développeur web accompli.
        Je suis un candidat motivé et passionné qui aspire à faire partie d&apos;une entreprise dans le domaine de 
        l&apos;informatique où je pourrais mettre mes compétences et mes connaissances en pratique et me développer 
        professionnellement. Je suis un individu motivé et déterminé, doté d&apos;une attitude positive et d&apos;une grande 
        capacité d&apos;apprentissage. Je suis attentif aux besoins des autres et je suis capable de résoudre des problèmes 
        en équipe tout en apportant une attention particulière aux détails Je suis particulièrement doué pour travailler 
        en équipe, où j&apos;apporte non seulement des idées innovantes mais aussi un sens aigu de l&apos;écoute et de la 
        coopération.

        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Compétances</h5>
          <p className='py-2'>
            <span className='font-bold'>Compétences techniques</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span>HTML5
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript(ES6+)
            <span className='px-2'>|</span>React JS
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL SERVER
            <span className='px-2'>|</span>SQLITE
            <span className='px-2'>|</span>Bootstrap 5
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span>C#
            <span className='px-2'>|</span>Node Js 
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Formations 
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='py-1 italic'><span className='font-bold'>DEC.  Diplôme collégial de l&apos;Ontario</span> : programmation informatique  (2021/09 - 2023/04)</p>
          <p className='list-disc list-outside px-7 py-1 leading-relaxed'>Collège La cité | Ontario, Canada</p>
            
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='py-1 italic'> <span className='font-bold'>Baccalauréat</span>: Informatique (2018/09 - 2021/06)</p>
          <a className='list-disc list-outside px-7 py-1 leading-relaxed'>université Djilali liabes | sidi bel abbes, Algeria</a>
            
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
           QUALIFICATIONS
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            	Grande connaissance en développement web utilisant des technologies telles que JavaScript (ES2015 / ES6+), ReactJS 16.8+, Next.js, Node.js, Material UI, Tailwind, Handlebars et Chakra UI.            </li>
            <li>
            Grande connaissance en HTML/HTML5, CSS/CSS5
            </li>
            <li>
            	Solide connaissance de Bootstrap 5 et du design web responsive.
            </li>
            <li>
            	Familiarité avec les principes de base des Lignes directrices pour l&apos;accessibilité des contenus Web (WCAG).
            </li>
            <li>
            	Capacité à écrire un code bien conçu et testé, et à effectuer des revues de code avec ses pairs.            </li>
            <li>
            	Connaissance des principes et des designs d&apos;interface utilisateur et d&apos;expérience utilisateur (UI/UX).            </li>
            <li>
            	Expérience dans l&apos;utilisation de (Git, npm) et de systèmes de contrôle de version.            </li>
            <li>
            	Conscience des dernières tendances et technologies utilisées dans le monde de la conception et du développement web.            </li>
            <li>
            	Bonne connaissance de développement sur Android et iOS            </li>
            <li>
            	Expérience en conception pour plusieurs contextes tels que les appareils mobiles, les ordinateurs de bureau et les tablettes.            </li>
            <li>
            	Bonne connaissance de langages de programmation tels que Java, C#, C, C++ et Python.            </li>
            <li>
            	Contribuer aux processus, pratiques et activités d&apos;assurance qualité logicielle et d&apos;amélioration des logiciels conformément aux normes et modèles en vigueur.            </li>
            <li>
            	Bonne connaissance des principes de programmation orientée objet en utilisant Java et C#.            </li>
            <li>
            	Familiarité avec les plateformes d&apos;API et les commandes Linux.            </li>
            <li>
            	Familiarité avec la méthodologie Agile.            </li>
            <li>
            Bonne compréhension des algorithmes et des structures de données.            </li>
            <li>
            Solide connaissance des systèmes de gestion de base de données tels que SQL Server, MongoDB et SQLite.            </li>
            
          </ul>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
           Certifications
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Introduction to Front-End Development
            </li>
            <li>
            Programming with JavaScript
            </li>
            <li>
            HTML and CSS in depth
            </li>
            <li>
            Version Control
            </li>
            <li>
            React Basics
            </li>
            <li>
            Advanced React
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
