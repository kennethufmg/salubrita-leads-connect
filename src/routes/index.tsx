import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  Award,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
  Tag,
  Wallet,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-clinica.jpg";
import logoAsset from "@/assets/salubrita-logo.webp.asset.json";
import clinicImg from "@/assets/atendimento-clinica.jpg";

function waLink(message: string) {
  return `https://wa.me/553131669006?text=${encodeURIComponent(message)}`;
}

const WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero saber mais sobre a parceria com a clínica ocupacional para realização de exames.",
);
const PROPOSAL_WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para a parceria de exames ocupacionais.",
);
const NO_FEE_WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para a parceria de exames ocupacionais sem mensalidade.",
);
const EXAMS_WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero saber quais exames ocupacionais a minha empresa precisa na parceria com a clínica ocupacional.",
);
const DOUBTS_WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero tirar dúvidas sobre a parceria de exames ocupacionais.",
);
const COMPLIANCE_WHATSAPP_URL = waLink(
  "Olá! Vim pelo site da Salubritá e quero verificar se os exames ocupacionais da minha empresa estão em conformidade com a NR-07 (PCMSO).",
);

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Parceria com Clínica Ocupacional para Exames | Salubritá" },
      {
        name: "description",
        content:
          "Clínica parceira para os exames ocupacionais da sua empresa, em conformidade com a NR-07 (PCMSO): alto padrão de qualidade, agilidade e sem mensalidade — pague apenas pelos exames realizados, com preço competitivo. Solicite uma proposta à Salubritá.",
      },
      {
        property: "og:title",
        content: "Parceria com Clínica Ocupacional para Exames | Salubritá",
      },
      {
        property: "og:description",
        content:
          "Clínica parceira para os exames ocupacionais da sua empresa, em conformidade com a NR-07 (PCMSO): alto padrão de qualidade, agilidade e sem mensalidade — pague apenas pelos exames realizados, com preço competitivo. Solicite uma proposta à Salubritá.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Parceria com Clínica Ocupacional para Exames | Salubritá" },
      {
        name: "twitter:description",
        content:
          "Clínica parceira para os exames ocupacionais da sua empresa, em conformidade com a NR-07 (PCMSO): alto padrão de qualidade, agilidade e sem mensalidade — pague apenas pelos exames realizados, com preço competitivo. Solicite uma proposta à Salubritá.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.83 9.83 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

function Wordmark() {
  return (
    <a href="#inicio" className="flex shrink-0 items-center" aria-label="Salubritá — início">
      <img src={logoAsset.url} alt="Salubritá" width={1176} height={345} className="h-10 w-auto object-contain sm:h-11" />
    </a>
  );
}

function WhatsAppButton({
  href,
  label = "Solicitar proposta no WhatsApp",
  className = "",
}: {
  href: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3.5 font-display font-bold text-accent-foreground shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-4 py-3 sm:px-6">
        <Wordmark />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-muted-foreground md:flex" aria-label="Navegação principal">
          <a href="#vantagens" className="transition-colors hover:text-brand-teal-deep">Vantagens</a>
          <a href="#exames" className="transition-colors hover:text-brand-teal-deep">Exames</a>
          <a href="#como-funciona" className="transition-colors hover:text-brand-teal-deep">Como funciona</a>
          <a href="#duvidas" className="transition-colors hover:text-brand-teal-deep">Dúvidas</a>
          <a href="#contato" className="transition-colors hover:text-brand-teal-deep">Contato</a>
        </nav>
        <div className="hidden sm:block">
          <WhatsAppButton href={WHATSAPP_URL} label="Falar com consultor" />
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Falar com consultor no WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-accent-foreground sm:hidden">
          <WhatsAppIcon className="h-6 w-6" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="overflow-hidden bg-brand-tint-blue/50">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div className="reveal-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-teal/25 bg-background px-3 py-1.5 text-xs font-bold text-brand-teal-deep uppercase">
            <ShieldCheck className="h-4 w-4 text-brand-teal" />
            Parceria sem mensalidade — pague só pelo exame realizado
          </div>
          <h1 className="mt-5 text-4xl leading-[1.06] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            Sua empresa com uma <span className="text-brand-teal">clínica ocupacional parceira</span>, sem mensalidade
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Conte com uma clínica parceira de alto padrão de qualidade para os exames ocupacionais da sua equipe, com agilidade no agendamento e nos resultados. <strong className="font-bold text-foreground">Sem taxa de adesão, sem mensalidade:</strong> você paga apenas pelos exames realizados, com preço competitivo.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton href={PROPOSAL_WHATSAPP_URL} />
            <a href="#vantagens" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-6 py-3 font-display font-bold text-foreground transition hover:border-brand-teal">
              Ver vantagens <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Check className="h-4 w-4 text-brand-teal" /> Exames ocupacionais com qualidade, agilidade e proposta sob medida para sua empresa.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted shadow-2xl">
            <img src={heroImg} alt="Profissional de saúde realizando exame ocupacional em ambiente clínico" width={1200} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-brand-teal-deep/90 p-5 text-primary-foreground">
              <p className="font-display text-lg font-bold">Sem mensalidade</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Pague somente pelos exames realizados, sem taxa fixa.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xl max-sm:justify-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-teal-deep"><Zap className="h-6 w-6" /></span>
            <div><p className="text-xs font-semibold text-muted-foreground">Alta agilidade</p><p className="font-display text-lg font-bold text-foreground">Agendamento rápido e resultado em prazo reduzido</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Padrão de qualidade da clínica parceira" className="bg-brand-teal-deep text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-8 text-center sm:px-6">
        <ShieldCheck className="h-7 w-7 shrink-0 text-brand-yellow" />
        <p className="font-display text-xl font-extrabold sm:text-2xl">
          Alto padrão de qualidade <span className="block text-sm font-semibold text-primary-foreground/80 sm:inline">— estrutura, equipamentos e equipe qualificada na clínica parceira</span>
        </p>
      </div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold text-brand-teal uppercase">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{text}</p> : null}
    </div>
  );
}

function Benefits() {
  const benefits = [
    { icon: Wallet, title: "Sem mensalidade ou taxa fixa", text: "Nenhum custo recorrente: você paga apenas pelos exames realizados, quando forem realizados." },
    { icon: Zap, title: "Agilidade no atendimento", text: "Agendamento rápido e resultados em prazo reduzido, sem filas nem burocracia." },
    { icon: Award, title: "Alto padrão de qualidade", text: "Clínica parceira com estrutura adequada, equipamentos calibrados e equipe qualificada em saúde ocupacional." },
    { icon: Tag, title: "Preço competitivo", text: "Valores acessíveis por exame, sem abrir mão da qualidade e da conformidade legal." },
  ];
  return (
    <section id="vantagens" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Exames ocupacionais sem burocracia" title="O que sua empresa ganha com esta parceria" text="Uma parceria simples e sem burocracia, com foco em qualidade, agilidade e economia para os exames ocupacionais da sua equipe." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-tint text-brand-teal-deep"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExamOptions() {
  const options = [
    {
      label: "Destaque",
      title: "Exames periódicos e de retorno ao trabalho",
      chip: "Recorrência conforme o PCMSO",
      description: "Acompanhamento recorrente da saúde da sua equipe, com agendamento facilitado e emissão de ASO em prazo ágil.",
      items: ["Exame clínico ocupacional atualizado", "Acompanhamento conforme o PCMSO da empresa", "Agendamento facilitado, sem mensalidade", "Emissão de ASO em prazo ágil"],
    },
    {
      label: "Contratação e desligamento",
      title: "Exames admissionais e demissionais",
      chip: "Conformidade com as normas vigentes",
      description: "Para novos colaboradores e para o encerramento do vínculo, com emissão de ASO e conformidade com as normas vigentes.",
      items: ["Exame clínico e avaliação ocupacional", "Exames complementares conforme a função", "Emissão de ASO", "Suporte para documentação da empresa"],
    },
  ];
  return (
    <section id="exames" className="bg-brand-tint-blue/55 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Exames para cada etapa da jornada do colaborador" title="O exame certo para cada momento" text="Conte ao consultor a situação da sua equipe. A Salubritá orienta os exames adequados junto à clínica parceira." />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {options.map((option, index) => (
            <article key={option.title} className={`rounded-xl border p-7 shadow-sm ${index === 0 ? "border-brand-teal bg-brand-teal-deep text-primary-foreground" : "border-border bg-card text-card-foreground"}`}>
              <div className="flex items-center justify-between gap-4">
                <span className={`rounded-md px-3 py-1 text-xs font-bold uppercase ${index === 0 ? "bg-brand-yellow text-accent-foreground" : "bg-brand-tint text-brand-teal-deep"}`}>{option.label}</span>
                <span className={`flex items-center gap-1.5 text-right text-sm font-bold ${index === 0 ? "text-brand-yellow" : "text-brand-teal-deep"}`}><Clock3 className="h-4 w-4 shrink-0" />{option.chip}</span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">{option.title}</h3>
              <p className={`mt-3 leading-relaxed ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{option.description}</p>
              <ul className={`mt-6 space-y-3 border-t pt-6 ${index === 0 ? "border-primary-foreground/15" : "border-border"}`}>
                {option.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className={`h-5 w-5 shrink-0 ${index === 0 ? "text-brand-yellow" : "text-brand-teal"}`} />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-7 max-w-4xl rounded-xl border border-brand-teal/30 bg-card p-6 shadow-sm">
          <p className="font-display text-xl font-extrabold text-foreground">Por que uma parceria sem mensalidade?</p>
          <p className="mt-2 leading-relaxed text-muted-foreground">Sua empresa não precisa se comprometer com um valor fixo mensal para ter uma clínica de confiança à disposição. Você aciona a parceria quando precisar, paga apenas pelos exames realizados e mantém previsibilidade de custos, com preço competitivo garantido pela parceria.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-muted/40 p-5">
              <p className="font-display font-bold text-muted-foreground">Modelo com mensalidade</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {["Valor fixo mensal, mesmo sem realizar exames", "Contrato de fidelidade em muitos casos", "Custo que não acompanha a variação de contratações"].map((t) => <li key={t} className="flex gap-2"><span aria-hidden="true">–</span>{t}</li>)}
              </ul>
            </div>
            <div className="rounded-lg border border-brand-teal bg-brand-tint p-5">
              <p className="font-display font-bold text-brand-teal-deep">Modelo Salubritá</p>
              <ul className="mt-3 space-y-2 text-sm font-semibold text-foreground">
                {["Sem mensalidade e sem taxa de adesão", "Você paga apenas pelos exames realizados", "Custo proporcional ao volume real de admissões e exames periódicos"].map((t) => <li key={t} className="flex gap-2"><Check className="h-4 w-4 shrink-0 text-brand-teal" />{t}</li>)}
              </ul>
            </div>
          </div>
          <p className="mt-3 text-center text-sm text-muted-foreground">Peça uma simulação com o número de colaboradores da sua empresa e compare.</p>
          <div className="mt-5 text-center"><WhatsAppButton href={NO_FEE_WHATSAPP_URL} label="Solicitar proposta sem mensalidade" className="max-sm:w-full" /></div>
        </div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-sm font-semibold text-brand-teal-deep">Parceria sem mensalidade, com pagamento apenas pelos exames realizados.</p>
        <div className="mt-9 text-center"><WhatsAppButton href={EXAMS_WHATSAPP_URL} label="Descobrir os exames que minha empresa precisa" /></div>
      </div>
    </section>
  );
}

function CoverageSection() {
  const points = [
    "Exames admissionais, periódicos, de retorno ao trabalho e demissionais",
    "Emissão de ASO (Atestado de Saúde Ocupacional)",
    "Exames complementares conforme a função (ex.: audiometria, acuidade visual)",
    "Agendamento ágil, sem mensalidade ou taxa de adesão",
    "Pagamento apenas pelos exames efetivamente realizados",
    "Documentação de apoio à conformidade com o PCMSO da empresa",
  ];
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          {/* [PREENCHER: substituir por foto real da clínica parceira] — ambiente de recepção/consultório da clínica */}
          <img src={clinicImg} alt="Atendimento em clínica ocupacional parceira" width={1008} height={800} loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-xl" />
          <div className="mt-5 rounded-xl border border-brand-teal/30 bg-card p-5 shadow-sm">
            <p className="text-xs font-bold text-brand-teal uppercase">Onde atendemos</p>
            <h3 className="mt-1 text-xl font-extrabold text-foreground">Rede de clínicas parceiras</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Atendimento direto em Minas Gerais e cobertura nos demais estados por meio de clínicas parceiras selecionadas.</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Minas Gerais", "[PREENCHER: nome do estado]", "[PREENCHER: nome do estado]", "[PREENCHER: nome do estado]"].map((uf, i) => (
                <li key={i} className="rounded-md bg-brand-tint px-3 py-1 text-xs font-bold text-brand-teal-deep">{uf}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-muted-foreground">[PREENCHER: critério de seleção das clínicas parceiras]</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-teal uppercase">Saúde ocupacional em dia</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Sua empresa em dia com a saúde ocupacional, sem complicação</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">A parceria cobre os exames exigidos pelo PCMSO, com agilidade no agendamento e qualidade na execução.</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => <li key={point} className="flex items-start gap-3 text-sm font-semibold text-foreground"><span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand-teal-deep"><Check className="h-3.5 w-3.5" /></span>{point}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    ["01", "Fale com o consultor", "Informe o número de colaboradores, as funções e os exames necessários."],
    ["02", "Receba a proposta", "Sem mensalidade: a equipe organiza prazos e condições, com preço por exame."],
    ["03", "Realize os exames", "Os colaboradores realizam os exames na clínica parceira e recebem a documentação (ASO) correspondente."],
  ];
  return (
    <section id="como-funciona" className="bg-brand-teal-deep py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl"><p className="text-sm font-bold text-brand-yellow uppercase">Sem complicação</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Da conversa ao exame em três passos</h2></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(([number, title, text]) => <div key={number} className="border-t border-primary-foreground/20 pt-6"><span className="font-display text-4xl font-extrabold text-brand-yellow">{number}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-primary-foreground/75">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Quais exames são exigidos pela NR-07 (PCMSO)?", "A NR-07 exige que o PCMSO da empresa preveja exame admissional, periódico, de retorno ao trabalho, de mudança de função e demissional, conforme os riscos da atividade, com emissão do ASO em cada um deles. A clínica parceira da Salubritá realiza todos esses exames e cuida da emissão correta do ASO."],
    ["Existe mensalidade ou taxa de adesão à parceria?", "Não. A parceria não tem mensalidade nem taxa de adesão: sua empresa paga apenas pelos exames realizados, quando forem realizados."],
    ["Como funciona o pagamento?", "O pagamento é feito por exame realizado, com preço competitivo. [PREENCHER: forma de pagamento e prazo de faturamento]."],
    ["É necessário assinar contrato de fidelidade?", "[PREENCHER: sim/não, condições contratuais da parceria]."],
    ["Quais exames a clínica parceira realiza?", "Exames admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais, com emissão de ASO, além de exames complementares conforme a função, como audiometria e acuidade visual. [PREENCHER: lista completa de exames disponíveis]."],
    ["Qual o prazo para agendamento dos exames?", "[PREENCHER: prazo médio de agendamento]."],
    ["Em quanto tempo sai o resultado e o ASO?", "[PREENCHER: prazo de emissão do ASO e dos resultados de exames complementares]."],
    ["A clínica atende fora de Minas Gerais?", "Sim. O atendimento direto é realizado em Minas Gerais e, nos demais estados, por rede de clínicas parceiras. [PREENCHER: critério de seleção das clínicas parceiras]."],
    ["Qual o valor dos exames?", "O valor varia conforme o tipo de exame e a função do colaborador. [PREENCHER: faixa de preço ou tabela de valores, se desejado]."],
    ["Como a empresa acompanha os vencimentos dos exames periódicos?", "[PREENCHER: se há controle/alerta de vencimento oferecido pela Salubritá]."],
    ["Como solicito um exame para um colaborador?", "Basta enviar uma solicitação pelo WhatsApp com os dados do colaborador e a função. A equipe organiza o agendamento na clínica parceira."],
  ];
  return (
    <section id="duvidas" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionTitle eyebrow="Dúvidas frequentes" title="Respostas antes de solicitar sua proposta" />
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => <details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold text-foreground"><span>{q}</span><ChevronDown className="h-5 w-5 shrink-0 text-brand-teal transition-transform group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{a}</p></details>)}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const examType = String(data.get("tipo") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "").replace(/\D/g, "");
    const examCount = String(data.get("colaboradores") ?? "");

    if (!examType) {
      setFormError("Selecione o tipo de exame.");
      setSubmitted(false);
      return;
    }

    if (whatsapp.length < 10 || whatsapp.length > 13) {
      setFormError("Informe um WhatsApp válido, com DDD.");
      setSubmitted(false);
      return;
    }

    if (examCount && (Number(examCount) < 1 || Number(examCount) > 10000)) {
      setFormError("Informe um número de colaboradores válido.");
      setSubmitted(false);
      return;
    }

    setFormError("");
    setSubmitted(true);

    const message = [
      "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para a parceria de exames ocupacionais, sem mensalidade.",
      "",
      `Nome: ${String(data.get("nome") ?? "")}`,
      `Empresa: ${String(data.get("empresa") ?? "")}`,
      `WhatsApp: ${String(data.get("whatsapp") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Cidade/UF: ${String(data.get("cidade") ?? "")}`,
      `Nº de colaboradores a examinar: ${examCount}`,
      `Tipo de exame: ${examType}`,
    ].join("\n");

    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }

  const inputClass = "mt-1.5 min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";

  return (
    <section id="contato" className="bg-brand-teal py-16 lg:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="text-primary-foreground">
          <p className="text-sm font-bold text-brand-yellow uppercase">Sua empresa já tem uma clínica parceira para os exames ocupacionais?</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Receba uma proposta sem mensalidade para os exames da sua empresa</h2>
          <p className="mt-3 text-primary-foreground/85">Resposta rápida, sem compromisso.</p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <WhatsAppButton href={NO_FEE_WHATSAPP_URL} label="Chamar no WhatsApp" />
            <a href="tel:+553131669006" className="inline-flex items-center gap-2 font-bold hover:text-brand-yellow"><Phone className="h-4 w-4" /> Ligar: (31) 3166-9006</a>
            <span className="inline-flex items-center gap-2 font-bold"><Mail className="h-4 w-4" /> [PREENCHER: e-mail comercial]</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-xl bg-card p-5 text-card-foreground shadow-xl sm:p-7" noValidate={false}>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Nome<input className={inputClass} name="nome" autoComplete="name" maxLength={100} required /></label>
            <label className="text-sm font-semibold">Empresa<input className={inputClass} name="empresa" autoComplete="organization" maxLength={120} required /></label>
            <label className="text-sm font-semibold">WhatsApp<input className={inputClass} name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="(31) 99999-9999" minLength={10} maxLength={20} required /></label>
            <label className="text-sm font-semibold">E-mail<input className={inputClass} name="email" type="email" autoComplete="email" maxLength={254} required /></label>
            <label className="text-sm font-semibold">Cidade/UF<input className={inputClass} name="cidade" autoComplete="address-level2" maxLength={100} placeholder="Belo Horizonte/MG" required /></label>
            <label className="text-sm font-semibold">Nº de colaboradores a examinar<input className={inputClass} name="colaboradores" type="number" inputMode="numeric" min={1} max={10000} required /></label>
          </div>

          <label className="mt-5 block text-sm font-semibold">Tipo de exame
            <select className={inputClass} name="tipo" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>Admissional</option>
              <option>Periódico</option>
              <option>Retorno ao trabalho</option>
              <option>Mudança de função</option>
              <option>Demissional</option>
              <option>Outro</option>
            </select>
          </label>

          {formError ? <p role="alert" className="mt-4 text-sm font-bold text-destructive">{formError}</p> : null}
          {submitted ? <p role="status" className="mt-4 rounded-lg bg-brand-tint p-3 text-sm font-bold text-brand-teal-deep">Dados conferidos. O WhatsApp foi aberto com sua solicitação.</p> : null}

          <Button type="submit" className="mt-5 min-h-12 w-full bg-brand-teal-deep font-display text-base font-bold text-primary-foreground hover:bg-brand-teal-deep/90">
            <WhatsAppIcon className="h-5 w-5" /> Solicitar proposta
          </Button>
          <p className="mt-4 text-center text-xs text-muted-foreground">Ao enviar, você concorda com nossa <Link to="/privacidade" className="font-bold text-brand-teal-deep underline underline-offset-2">Política de Privacidade</Link>.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-brand-teal-deep py-10 text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-7 px-4 text-center sm:px-6 md:grid-cols-3 md:text-left">
        <div><Wordmark /><p className="mt-4 text-sm text-primary-foreground/70">Belo Horizonte • MG — atendimento direto em Minas Gerais e, nos demais estados, por rede de clínicas parceiras</p></div>
        <div className="text-sm leading-relaxed text-primary-foreground/75">
          <p>[PREENCHER: razão social]</p><p>CNPJ: [PREENCHER: CNPJ]</p><p>[PREENCHER: endereço completo]</p><p>[PREENCHER: e-mail comercial]</p>
        </div>
        <div className="flex flex-col items-center gap-2 text-sm md:items-end">
          <a href="tel:+553131669006" className="font-bold hover:text-brand-yellow">(31) 3166-9006</a>
          <a href="https://salubrita.com.br" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-brand-yellow">salubrita.com.br</a>
          <Link to="/privacidade" className="font-bold hover:text-brand-yellow">Política de Privacidade</Link>
        </div>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a href={DOUBTS_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Tirar dúvidas no WhatsApp" className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full border-4 border-background bg-accent p-3 text-accent-foreground shadow-2xl transition hover:-translate-y-1 sm:right-6 sm:bottom-6 sm:pr-5">
      <WhatsAppIcon className="h-6 w-6" /><span className="hidden text-sm font-bold sm:inline">Tirar dúvidas</span>
    </a>
  );
}

function SocialProof() {
  const indicators = [
    ["[PREENCHER: nº]", "empresas atendidas"],
    ["[PREENCHER: nº]", "exames ocupacionais realizados por mês"],
    ["Até [PREENCHER: horas/dias]", "para responder sua solicitação"],
    ["Nota [PREENCHER]", "no Google"],
  ];
  const testimonials = [1, 2, 3];
  return (
    <section aria-labelledby="prova-social" className="bg-brand-tint-blue/40 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 id="prova-social" className="text-center text-3xl font-extrabold text-foreground sm:text-4xl">Quem confia na parceria Salubritá</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {indicators.map(([value, label]) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-brand-teal/25 bg-background p-5 shadow-sm">
              <ShieldCheck className="h-6 w-6 shrink-0 text-brand-teal" />
              <p><span className="block font-display text-lg font-extrabold text-brand-teal-deep">{value}</span><span className="text-sm font-semibold text-muted-foreground">{label}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {testimonials.map((n) => (
            <figure key={n} className="rounded-xl border border-border bg-card p-6 shadow-sm">
              <blockquote className="leading-relaxed text-foreground">“[PREENCHER: frase de depoimento]”</blockquote>
              <figcaption className="mt-4 text-sm"><span className="block font-bold text-brand-teal-deep">[PREENCHER: nome da empresa]</span><span className="text-muted-foreground">[PREENCHER: setor]</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Compliance() {
  return (
    <section id="nr-07" className="bg-brand-tint py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-bold text-brand-teal uppercase">Conformidade com a NR-07</p>
        <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Sua empresa está em dia com o PCMSO?</h2>
        <p className="mx-auto mt-5 text-lg leading-relaxed text-muted-foreground">A NR-07 exige que toda empresa mantenha um Programa de Controle Médico de Saúde Ocupacional (PCMSO) atualizado, com exames admissionais, periódicos, de retorno ao trabalho, de mudança de função e demissionais realizados dentro do prazo, e com o ASO (Atestado de Saúde Ocupacional) emitido e registrado corretamente no eSocial. Inconsistências entre o PCMSO e os exames realizados podem gerar autuação. A clínica parceira da Salubritá cuida de todo esse ciclo, com agilidade no agendamento e emissão do ASO, para manter sua empresa em conformidade sem custo fixo mensal.</p>
        <div className="mt-8"><WhatsAppButton href={COMPLIANCE_WHATSAPP_URL} label="Verificar a conformidade do meu PCMSO" /></div>
      </div>
    </section>
  );
}

function TrustSeals() {
  const seals = [
    "Responsável técnico: [PREENCHER: nome e CRM]",
    "Clínica parceira credenciada [PREENCHER: órgão/credenciamento]",
    "Dados de saúde tratados conforme a LGPD",
  ];
  return (
    <section aria-label="Selos de confiança" className="border-y border-border bg-background py-8">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3 px-4 sm:px-6">
        {seals.map((s) => (
          <span key={s} className="inline-flex items-center gap-2 rounded-full border border-brand-teal/25 bg-background px-4 py-2 text-xs font-bold text-brand-teal-deep uppercase">
            <ShieldCheck className="h-4 w-4 shrink-0 text-brand-teal" />{s}
          </span>
        ))}
      </div>
    </section>
  );
}

function LeadMagnet() {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = [
      "Olá! Vim pelo site da Salubritá e quero receber o checklist de exames obrigatórios pela NR-07.",
      "",
      `Nome: ${String(data.get("nome") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Empresa: ${String(data.get("empresa") ?? "")}`,
    ].join("\n");
    setSent(true);
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  }
  const inputClass = "mt-1.5 min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";
  return (
    <section id="checklist" className="bg-brand-tint-blue/50 py-16 lg:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-brand-teal uppercase">Para quem ainda está avaliando</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Baixe o checklist de exames obrigatórios pela NR-07</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Descubra quais exames ocupacionais sua empresa precisa realizar em cada etapa — admissional, periódico, mudança de função, retorno ao trabalho e demissional — e evite inconsistências no PCMSO.</p>
          <p className="mt-3 text-xs text-muted-foreground">[PREENCHER: definir se o envio do checklist será automático por e-mail ou manual pela equipe]</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-xl bg-card p-5 shadow-xl sm:p-7">
          <div className="grid gap-4">
            <label className="text-sm font-semibold">Nome<input className={inputClass} name="nome" autoComplete="name" maxLength={100} required /></label>
            <label className="text-sm font-semibold">E-mail<input className={inputClass} name="email" type="email" autoComplete="email" maxLength={254} required /></label>
            <label className="text-sm font-semibold">Empresa<input className={inputClass} name="empresa" autoComplete="organization" maxLength={120} required /></label>
          </div>
          {sent ? <p role="status" className="mt-4 rounded-lg bg-brand-tint p-3 text-sm font-bold text-brand-teal-deep">Pedido enviado! Em breve você recebe o checklist.</p> : null}
          <Button type="submit" className="mt-5 min-h-12 w-full bg-brand-teal-deep font-display text-base font-bold text-primary-foreground hover:bg-brand-teal-deep/90">Quero receber o checklist</Button>
        </form>
      </div>
    </section>
  );
}

function Index() {
  return <div className="min-h-screen"><Header /><main><Hero /><Stats /><SocialProof /><Benefits /><Compliance /><ExamOptions /><CoverageSection /><Process /><FAQ /><LeadMagnet /><TrustSeals /><FinalCTA /></main><Footer /><FloatingWhatsApp /></div>;
}
