export type Language = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      mission: "Missão",
      platform: "Plataforma",
      impact: "Impacto",
      team: "Equipe",
      contact: "Contato",
    },
    hero: {
      badge: "Suporte Contextual para Operadores de Saneamento",
      headline: "Treinamento adaptativo",
      headline_span: "para equipes de infraestrutura",
      subhead: "Dê aos seus técnicos orientação passo a passo durante os reparos. O Fluence é como ter seu melhor especialista em cada trabalho, disponível 24/7.",
      cta_primary: "Veja como funciona",
      cta_secondary: "Solicite uma demo",
      value_props: {
        train: "Treine novos técnicos em semanas, não anos",
        emergency: "Lide com emergências mais rápido com suporte em tempo real",
        retention: "Nunca perca conhecimento quando especialistas se aposentam",
      },
      diagram: {
        expert: "Conhecimento Especialista",
        manuals: "Manuais e Experiência",
        ai: "COPILOTO FLUENCE",
        reasoning: "Raciocínio Contextual",
        crew: "Equipe de Campo",
        guidance: "Restauração Guiada",
        loop_top: "INSIGHTS DE CAMPO ATUALIZAM O CONHECIMENTO",
        loop_bottom: "CICLO DE APRENDIZADO CONTÍNUO",
      }
    },
    problem: {
      title: "O Risco Oculto: Conhecimento Concentrado",
      lead: "O setor de saneamento do Brasil enfrenta uma crise dupla: <strong class='text-foreground font-medium'>volatilidade climática crescente</strong> e uma <strong class='text-foreground font-medium'>severa escassez de mão de obra</strong>. Até 2033, o setor precisa de 700.000 novos trabalhadores. No entanto, o conhecimento crítico reside quase exclusivamente nas mentes de especialistas que estão se aposentando.",
      context_title: "O Estresse Climático",
      context_desc: "Inundações e eventos climáticos extremos estão danificando a infraestrutura em um ritmo sem precedentes. Modos de falha estão se tornando desconhecidos, e a pressão sobre as equipes de restauração está aumentando.",
      context_tag: "Resultado: Modos de falha desconhecidos",
      gap_title: "A Lacuna da Força de Trabalho",
      gap_desc: "Quando especialistas se aposentam, seu conhecimento tácito vai embora com eles. Equipes juniores ficam sem orientação durante crises, levando a interrupções prolongadas e riscos de segurança.",
      gap_tag: "Resultado: Interrupções de serviço prolongadas",
      footer: "Estamos fortalecendo a infraestrutura física, mas negligenciamos os <strong class='text-foreground font-medium'>sistemas humanos</strong> necessários para mantê-la.",
    },
    solution: {
      title: "O Cérebro do Seu Especialista, No Bolso de Cada Técnico",
      lead: "O Fluence captura o conhecimento especializado e o entrega como orientação em tempo real—para que cada técnico possa resolver problemas complexos como um veterano.",
      mobile: {
        alert: {
          title: "Alerta Crítico",
          message: "Estação Elevatória 4: Baixa Pressão. Entrada de água detectada na Zona B.",
          action: "Iniciar Diagnóstico"
        },
        analysis: {
          title: "Fluxo Fluence",
          message: "Analisando Contexto: Chuva Forte + Vibração Anterior.",
          detail: "Protocolo obtido do Técnico Sênior A. Silva (ID: 442).",
          result: "Recomendado: Protocolo #42 - Folga do Impulsor."
        },
        step1: {
          title: "Isolar Energia",
          message: "Desligue o disjuntor principal da Zona B antes da inspeção.",
          safety: "Risco de Alta Tensão"
        },
        step2: {
          title: "Inspecionar Entrada",
          message: "Verifique a tela de entrada quanto a bloqueio de detritos.",
          tool: "Lanterna"
        },
        capture: {
          title: "Capturar Insight",
          message: "Correção verificada. Gravando dados operacionais para atualização do modelo.",
          detail: "Nota de voz adicionada: 'Detritos eram argila, não plástico'.",
          action: "Enviar Insight"
        }
      },
      features: {
        manual: {
          title: "Não é um manual estático",
          desc: "Adapta-se a cada situação e nível de habilidade do técnico"
        },
        chatbot: {
          title: "Não é um chatbot",
          desc: "Protocolos estruturados e verificados pelos seus especialistas"
        },
        course: {
          title: "Não é um curso de treinamento",
          desc: "Integrado ao trabalho diário, aprendendo na prática"
        }
      }
    },
    howItWorks: {
      title: "O Sistema Fluence",
      lead: "Um sistema de circuito fechado que captura expertise, entrega orientação e melhora continuamente tanto a capacidade da equipe quanto o conhecimento organizacional.",
      steps: [
        {
          label: "Captura de Conhecimento",
          desc: "Trabalhamos com seus técnicos seniores para documentar seu processo de diagnóstico—capturando não apenas os passos, mas o raciocínio por trás de cada decisão.",
          detail: "Fontes: Relatórios de campo, fotos, vídeos, registros de reparo e acompanhamento direto"
        },
        {
          label: "Raciocínio Contextual",
          desc: "Quando uma equipe encontra um problema, o Fluence analisa a situação (sintomas, tipo de equipamento, clima) e a combina com protocolos especialistas relevantes para entregar execução guiada.",
          detail: "Entradas: Códigos de erro, fotos, dados de localização, histórico do equipamento, condições ambientais"
        },
        {
          label: "Aprendizado Contínuo",
          desc: "Registra o que cada membro da equipe concluiu com sucesso, identifica lacunas de habilidades e atualiza a base de conhecimento com insights de campo.",
          detail: "Resultados: Perfis de habilidades individuais, métricas de prontidão da equipe, protocolos refinados"
        }
      ]
    },
    whyNow: {
      title: "Por que isso importa para o Brasil",
      lead: "O Brasil não pode treinar <strong class='text-foreground font-medium'>700.000 novos trabalhadores de saneamento</strong> usando apenas métodos tradicionais de sala de aula.",
      skill_gap: "Fechando a Lacuna de Habilidades",
      skill_desc: "O Fluence acelera a integração incorporando o treinamento nas operações diárias. Isso permite que técnicos juniores atuem com segurança e eficácia ao lado de pares experientes desde o primeiro dia, em vez de esperar anos para construir intuição.",
      climate: "Adaptação Climática",
      climate_desc: "Resiliência não é apenas concreto mais forte; é tempo de resposta mais rápido. Ao reduzir a carga cognitiva durante condições extremas, garantimos que os serviços de água sejam restaurados rapidamente após inundações, minimizando impactos na saúde pública em comunidades vulneráveis."
    },
    impact: {
      title: "Impacto Sistêmico",
      lead: "Medindo o sucesso não apenas em eficiência, mas em <strong class='text-foreground font-medium'>segurança humana</strong> e <strong class='text-foreground font-medium'>resiliência comunitária</strong>.",
      workforce: "Para a Força de Trabalho",
      operator: "Para Operadores de Serviços",
      list: {
        safety: { title: "Segurança", outcome: "Reduz taxas de erro em ambientes operacionais de alto risco." },
        mobility: { title: "Mobilidade", outcome: "Fornece um registro documentado de competência técnica, apoiando o avanço na carreira." },
        support: { title: "Suporte", outcome: "Reduz a pressão da tomada de decisão durante eventos de crise." },
        resilience: { title: "Resiliência", outcome: "Reduz o tempo médio de reparo (MTTR) para ativos críticos." },
        retention: { title: "Retenção", outcome: "Preserva a memória institucional independentemente da rotatividade de pessoal." },
        efficiency: { title: "Eficiência", outcome: "Padroniza a qualidade do reparo em equipes geograficamente dispersas." }
      }
    },
    progress: {
      title: "Piloto e Modelo de Negócios",
      lead: "Implantando pilotos de alto impacto com concessões regionais de saneamento.",
      deployment: "Implantação Atual",
      pilot_title: "Programa Piloto Regional",
      pilot_desc: "Estamos implantando com concessões regionais de saneamento, focando em ativos de alto impacto propensos a interrupções climáticas.",
      partners: {
        concessionaires: "Concessionárias (Integração de Operações)",
        schools: "Escolas Técnicas (Padrões de Competência)",
        funds: "Fundos de Resiliência (Medição de Impacto)"
      },
      business: "Modelo de Negócios",
      saas: "SaaS Industrial",
      saas_desc: "Contratos anuais de licenciamento com operadores de serviços públicos, precificados por tamanho da força de trabalho e complexidade dos ativos.",
      value_opex: "Reduz custos de retrabalho, horas extras e treinamento.",
      value_capex: "Estende a vida útil dos ativos através de protocolos de manutenção corretos."
    },
    founder: {
      title: "Sobre o Fundador",
      quote: "\"Estamos construindo o Fluence para garantir que o conhecimento necessário para sustentar os sistemas mais críticos da civilização nunca seja perdido.\"",
      role: "MSc Robótica (Stanford) | Ex-Inovação AB-InBev"
    },
    footer: {
      title: "Garanta o futuro da infraestrutura hídrica do Brasil.",
      desc: "Procuramos parceiros comprometidos com resiliência operacional e desenvolvimento da força de trabalho.",
      thanks: "Obrigado. Entraremos em contato em breve.",
      email_label: "Email",
      org_label: "Organização / Cargo",
      cta: "Contate nossa equipe",
      sending: "Enviando...",
      links: {
        mission: "Missão",
        platform: "Plataforma",
        impact: "Impacto"
      },
      tagline: "Fluence. Resiliência da Força de Trabalho.",
      brand_desc: "Ajudando equipes de infraestrutura a resolver problemas complexos mais rapidamente"
    }
  },
  en: {
    nav: {
      mission: "Mission",
      platform: "Platform",
      impact: "Impact",
      team: "Team",
      contact: "Contact",
    },
    hero: {
      badge: "Context-Aware Support for Water & Sanitation Operators",
      headline: "Adaptive training",
      headline_span: "for infrastructure crews",
      subhead: "Give your technicians step-by-step guidance during repairs. Fluence is like having your best expert on every job, available 24/7.",
      cta_primary: "See how it works",
      cta_secondary: "Request a demo",
      value_props: {
        train: "Train new technicians in weeks, not years",
        emergency: "Handle emergencies faster with real-time support",
        retention: "Never lose knowledge when experts retire",
      },
      diagram: {
        expert: "Expert Knowledge",
        manuals: "Manuals & Experience",
        ai: "FLUENCE COPILOT",
        reasoning: "Contextual Reasoning",
        crew: "Field Crew",
        guidance: "Guided Restoration",
        loop_top: "FIELD INSIGHTS UPDATE KNOWLEDGE",
        loop_bottom: "CONTINUOUS LEARNING LOOP",
      }
    },
    problem: {
      title: "The Hidden Risk: Concentrated Knowledge",
      lead: "Brazil’s sanitation sector faces a dual crisis: <strong class='text-foreground font-medium'>escalating climate volatility</strong> and a <strong class='text-foreground font-medium'>severe labor shortage</strong>. By 2033, the sector needs 700,000 new workers. Yet critical knowledge resides almost exclusively in the minds of retiring experts.",
      context_title: "The Climate Stress",
      context_desc: "Floods and extreme weather are damaging infrastructure at an unprecedented rate. Failure modes are becoming unfamiliar, and the pressure on restoration crews is increasing.",
      context_tag: "Result: Unfamiliar failure modes",
      gap_title: "The Workforce Gap",
      gap_desc: "When experts retire, their tacit knowledge leaves with them. Junior crews are left without guidance during crises, leading to prolonged outages and safety risks.",
      gap_tag: "Result: Prolonged service outages",
      footer: "We are strengthening the physical infrastructure, but we have neglected the <strong class='text-foreground font-medium'>human systems</strong> required to maintain it.",
    },
    solution: {
      title: "Your Expert's Brain, In Every Technician's Pocket",
      lead: "Fluence captures expert knowledge and delivers it as real-time guidance—so every technician can solve complex problems like a veteran.",
      mobile: {
        alert: {
          title: "Critical Alert",
          message: "Pump Station 4: Low Pressure. Water ingress detected in Zone B.",
          action: "Start Diagnosis"
        },
        analysis: {
          title: "Fluence Flow",
          message: "Analyzing Context: Heavy Rain + Previous Vibration.",
          detail: "Protocol sourced from Senior Tech A. Silva (ID: 442).",
          result: "Recommended: Protocol #42 - Impeller Clearance."
        },
        step1: {
          title: "Isolate Power",
          message: "Turn off main breaker to Zone B before inspection.",
          safety: "High Voltage Risk"
        },
        step2: {
          title: "Inspect Intake",
          message: "Check intake screen for debris blockage.",
          tool: "Flashlight"
        },
        capture: {
          title: "Capture Insight",
          message: "Fix verified. Recording operational data for model update.",
          detail: "Voice note added: 'Debris was clay, not plastic.'",
          action: "Submit Insight"
        }
      },
      features: {
        manual: {
          title: "Not a static manual",
          desc: "Adapts to each situation and technician's skill level"
        },
        chatbot: {
          title: "Not a chatbot",
          desc: "Structured, verified protocols from your experts"
        },
        course: {
          title: "Not a training course",
          desc: "Embedded in daily work, learning by doing"
        }
      }
    },
    howItWorks: {
      title: "The Fluence System",
      lead: "A closed-loop system that captures expertise, delivers guidance, and continuously improves both crew capability and organizational knowledge.",
      steps: [
        {
          label: "Knowledge Capture",
          desc: "We work with your senior technicians to document their diagnostic process—capturing not just the steps, but the reasoning behind each decision.",
          detail: "Sources: Field reports, photos, video walkthroughs, repair logs, and direct shadowing"
        },
        {
          label: "Contextual Reasoning",
          desc: "When a crew encounters a problem, Fluence analyzes the situation (symptoms, equipment type, weather) and matches it to relevant expert protocols to deliver guided execution.",
          detail: "Inputs: Error codes, photos, location data, equipment history, environmental conditions"
        },
        {
          label: "Continuous Learning",
          desc: "Records what each crew member has successfully completed, identifies skill gaps, and updates the knowledge base with field insights.",
          detail: "Outcomes: Individual skill profiles, team readiness metrics, refined protocols"
        }
      ]
    },
    whyNow: {
      title: "Why This Matters for Brazil",
      lead: "Brazil cannot train <strong class='text-foreground font-medium'>700,000 new sanitation workers</strong> using traditional classroom methods alone.",
      skill_gap: "Closing the Skills Gap",
      skill_desc: "Fluence accelerates onboarding by embedding training into daily operations. This allows junior technicians to perform safely and effectively alongside experienced peers from day one, rather than waiting years to build intuition.",
      climate: "Climate Adaptation",
      climate_desc: "Resilience is not just stronger concrete; it is faster response times. By reducing cognitive load during extreme conditions, we ensure water services are restored rapidly after floods, minimizing public health impacts on vulnerable communities."
    },
    impact: {
      title: "Systemic Impact",
      lead: "Measuring success not just in efficiency, but in <strong class='text-foreground font-medium'>human safety</strong> and <strong class='text-foreground font-medium'>community resilience</strong>.",
      workforce: "For the Workforce",
      operator: "For Utility Operators",
      list: {
        safety: { title: "Safety", outcome: "Reduces error rates in high-risk operational environments." },
        mobility: { title: "Mobility", outcome: "Provides a documented record of technical competency, supporting career advancement." },
        support: { title: "Support", outcome: "Reduces the pressure of decision-making during crisis events." },
        resilience: { title: "Resilience", outcome: "Reduces mean time to repair (MTTR) for critical assets." },
        retention: { title: "Retention", outcome: "Preserves institutional memory regardless of staff turnover." },
        efficiency: { title: "Efficiency", outcome: "Standardizes repair quality across geographically dispersed teams." }
      }
    },
    progress: {
      title: "Pilot & Business Model",
      lead: "Deploying high-impact pilots with regional sanitation concessions.",
      deployment: "Current Deployment",
      pilot_title: "Regional Pilot Program",
      pilot_desc: "We are deploying with regional sanitation concessions, focusing on high-impact assets prone to climate disruption.",
      partners: {
        concessionaires: "Concessionaires (Operations Integration)",
        schools: "Technical Schools (Competency Standards)",
        funds: "Resilience Funds (Impact Measurement)"
      },
      business: "Business Model",
      saas: "Industrial SaaS",
      saas_desc: "Annual licensing contracts with utility operators, priced by workforce size and asset complexity.",
      value_opex: "Reduces rework, overtime, and training costs.",
      value_capex: "Extends asset lifespan through correct maintenance protocols."
    },
    founder: {
      title: "About the Founder",
      quote: "\"We are building Fluence to ensure that the knowledge required to sustain civilization’s most critical systems is never lost.\"",
      role: "MSc Robotics (Stanford) | Ex-AB-InBev Innovation"
    },
    footer: {
      title: "Secure the future of Brazil’s water infrastructure.",
      desc: "We are looking for partners committed to operational resilience and workforce development.",
      thanks: "Thanks. We'll be in touch.",
      email_label: "Email",
      org_label: "Organization / Role",
      cta: "Contact our team",
      sending: "Sending...",
      links: {
        mission: "Mission",
        platform: "Platform",
        impact: "Impact"
      },
      tagline: "Fluence. Workforce Resilience.",
      brand_desc: "Helping infrastructure crews solve complex problems faster"
    }
  }
};
