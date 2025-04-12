import { ReadCvLogo } from '@phosphor-icons/react';
import { CardExperience } from './card-experience';

export type Experience = {
  company: string;
  position: string;
  period: string;
  logo: string;
  description?: string;
};

export function Experiences() {
  const experiences: Experience[] = [
    {
      company: 'Teddy Open Finance',
      position: 'Engenheiro de Software Backend Jr I',
      logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQEGllI9UxHWhA/company-logo_200_200/company-logo_200_200/0/1680778497571/teddyopenfinance_logo?e=1749686400&v=beta&t=Rnc4tdtl3Nmhn10-jbNr85HD3gLYQ8RTQb_p8d5FUVA',
      period: 'Abril 2025 - Presente',
    },
    {
      company: 'StageTree',
      position: 'Desenvolvedor de Software',
      logo: 'https://github.com/stagetreedevs.png',
      period: 'Agosto 2023 - Abril 2025',
      description: `Atuei no desenvolvimento de soluções robustas utilizando tecnologias como NestJS, Node.js, Angular, PostgreSQL, MongoDB, Redis e Kafka, com foco em sistemas escaláveis e de alta performance. Entre os principais projetos, destaque para um microserviço de chat em tempo real, capaz de suportar milhares de conexões simultâneas com baixa latência, onde otimizei a entrega de mensagens em 40% com WebSockets e Redis para gerenciamento distribuído, além de integração com Kafka para garantir escalabilidade e resiliência. Também desenvolvi um sistema completo de gestão para haras, automatizando 80% dos processos manuais e melhorando significativamente a eficiência operacional com recursos como relatórios financeiros e painéis de monitoramento. Em outra frente, trabalhei no desenvolvimento fullstack de uma plataforma para contratação de serviços de construção de stands em eventos, aprimorando a comunicação entre fornecedores e clientes e reduzindo em 30% o tempo de fechamento de contratos, com um sistema integrado de gestão de pagamentos e contratos.`,
    },
  ];

  return (
    <section className="flex flex-col gap-3">
      <span className="flex flex-row items-center gap-1">
        <ReadCvLogo
          size={32}
          color="#416447"
          className="animate-bounce"
          weight="duotone"
        />
        <h1 className="text-3xl font-semibold">Experiências</h1>
      </span>

      <div className="flex flex-row flex-wrap gap-3">
        {experiences.map((experience, index) => (
          <CardExperience key={index} data={experience} />
        ))}
      </div>
    </section>
  );
}
