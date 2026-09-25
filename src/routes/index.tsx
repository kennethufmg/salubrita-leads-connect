import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  Award,
  Building2,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  Mail,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-altura.jpg";
import logoAsset from "@/assets/salubrita-logo.webp.asset.json";
import trainingImg from "@/assets/treinamento-altura.jpg";

const WHATSAPP_URL =
  "https://wa.me/553131669006?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para o treinamento de Trabalho em Altura (NR-35).",
  );

const RECYCLING_WHATSAPP_URL =
  "https://wa.me/553131669006?text=" +
  encodeURIComponent(
    "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para o treinamento presencial de atualização da NR-35 (reciclagem de Trabalho em Altura).",
  );

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Treinamento de Trabalho em Altura (NR-35) | Salubritá" },
      {
        name: "description",
        content:
          "Treinamento presencial de trabalho em altura conforme a NR-35: formação, atualização da norma e reciclagem, com parte prática. Solicite uma proposta à Salubritá.",
      },
      {
        property: "og:title",
        content: "Treinamento de Trabalho em Altura (NR-35) | Salubritá",
      },
      {
        property: "og:description",
        content:
          "Treinamento presencial de trabalho em altura com formação, atualização da norma e reciclagem para empresas. Fale com a Salubritá.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://salubrita-zap-lead.lovable.app/" }],
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

function WhatsAppButton({ label = "Solicitar proposta no WhatsApp", className = "" }: { label?: string; className?: string }) {
  return (
    <a
      href={WHATSAPP_URL}
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
          <a href="#beneficios" className="transition-colors hover:text-brand-teal-deep">Benefícios</a>
          <a href="#conteudo" className="transition-colors hover:text-brand-teal-deep">Conteúdo</a>
          <a href="#duvidas" className="transition-colors hover:text-brand-teal-deep">Dúvidas</a>
          <a href="#contato" className="transition-colors hover:text-brand-teal-deep">Contato</a>
        </nav>
        <div className="hidden sm:block">
          <WhatsAppButton label="Falar com consultor" />
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
            Certificado emitido conforme a NR-35
          </div>
          <h1 className="mt-5 text-4xl leading-[1.06] font-extrabold text-foreground sm:text-5xl lg:text-6xl">
            Treinamento de <span className="text-brand-teal">Trabalho em Altura</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Prepare sua equipe para trabalhar acima de 2 metros com segurança, conforme a NR-35 — com treinamentos <strong className="font-bold text-foreground">presenciais de atualização da norma</strong> para manter o certificado sempre em dia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton />
            <a href="#conteudo" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-border bg-background px-6 py-3 font-display font-bold text-foreground transition hover:border-brand-teal">
              Ver conteúdo <ArrowDown className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <Check className="h-4 w-4 text-brand-teal" /> Turmas presenciais, com prática, proposta clara e sob medida.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:mx-0">
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-muted shadow-2xl">
            <img src={heroImg} alt="Profissional com cinturão de segurança e talabarte duplo trabalhando em altura em estrutura industrial" width={1200} height={960} className="h-full w-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 bg-brand-teal-deep/90 p-5 text-primary-foreground">
              <p className="font-display text-lg font-bold">Formação presencial, teórica e prática</p>
              <p className="mt-1 text-sm text-primary-foreground/80">Análise de risco, equipamentos de proteção, ancoragem e resgate.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 rounded-xl border border-border bg-card p-5 shadow-xl max-sm:justify-center">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-tint text-brand-teal-deep"><Award className="h-6 w-6" /></span>
            <div><p className="text-xs font-semibold text-muted-foreground">Desde 2017</p><p className="font-display text-lg font-bold text-foreground">Experiência que protege</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section aria-label="Conformidade do treinamento" className="bg-brand-teal-deep text-primary-foreground">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-8 text-center sm:px-6">
        <ShieldCheck className="h-7 w-7 shrink-0 text-brand-yellow" />
        <p className="font-display text-xl font-extrabold sm:text-2xl">Treinamentos presenciais, teóricos e práticos, em conformidade com a NR-35</p>
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
    { icon: ShieldCheck, title: "Conformidade com a NR-35", text: "Conteúdo alinhado à norma de trabalho em altura para apoiar a regularidade da operação e evitar multas." },
    { icon: Users, title: "Atualização da norma presencial", text: "Treinamentos presenciais de atualização da NR-35: sua equipe conhece as mudanças da norma direto com o instrutor, com espaço para dúvidas." },
    { icon: Building2, title: "Turma na sua empresa", text: "Planejamento conforme o número de pessoas, os riscos do local e a rotina da sua operação." },
  ];
  return (
    <section id="beneficios" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Evite riscos, multas e acidentes graves com queda" title="O que sua empresa ganha com esta capacitação" text="Uma formação objetiva, conectada aos riscos reais do local de trabalho e conduzida por especialistas em Saúde e Segurança do Trabalho." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-md">
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-tint text-brand-teal-deep"><Icon className="h-6 w-6" /></span>
              <h3 className="mt-5 text-xl font-bold text-foreground">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
          <article className="rounded-xl border border-border bg-card p-7 shadow-sm transition hover:-translate-y-1 hover:border-brand-teal/50 hover:shadow-md">
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-tint text-brand-teal-deep"><Clock3 className="h-6 w-6" /></span>
            <h3 className="mt-5 text-xl font-bold text-foreground">Evite o vencimento do certificado</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">A NR-35 exige reciclagem a cada 2 anos, no máximo — ou antes, em situações previstas na norma.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

function TrainingOptions() {
  const options = [
    { label: "Destaque", title: "Atualização da NR-35 (presencial)", hours: "Reciclagem bienal", description: "Treinamento presencial de atualização da norma e reciclagem periódica, para manter a equipe apta e o certificado válido.", items: ["Novidades e mudanças na NR-35", "Casos reais e lições aprendidas", "Reciclagem obrigatória a cada 2 anos, no máximo", "Prática com equipamentos e diálogo com o instrutor"] },
    { label: "Formação", title: "Trabalho em altura para a equipe", hours: "8 horas", description: "Para funcionários que atuam acima de 2 metros com risco de queda, conforme a carga horária mínima da NR-35.", items: ["Normas, análise de risco e permissão de trabalho", "Cinturão, talabarte, trava-quedas e ancoragem", "Montagem e uso de sistemas de acesso", "Plano de resgate e primeiros socorros"] },
  ];
  return (
    <section id="conteudo" className="bg-brand-tint-blue/55 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionTitle eyebrow="Capacitação por momento da equipe" title="A formação certa para cada necessidade" text="Conte ao consultor quem precisa ser treinado. A Salubritá orienta a composição adequada da turma." />
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          {options.map((option, index) => (
            <article key={option.title} className={`rounded-xl border p-7 shadow-sm ${index === 0 ? "border-brand-teal bg-brand-teal-deep text-primary-foreground" : "border-border bg-card text-card-foreground"}`}>
              <div className="flex items-center justify-between gap-4">
                <span className={`rounded-md px-3 py-1 text-xs font-bold uppercase ${index === 0 ? "bg-brand-yellow text-accent-foreground" : "bg-brand-tint text-brand-teal-deep"}`}>{option.label}</span>
                <span className={`flex items-center gap-1.5 text-sm font-bold ${index === 0 ? "text-brand-yellow" : "text-brand-teal-deep"}`}><Clock3 className="h-4 w-4" />{option.hours}</span>
              </div>
              <h3 className="mt-5 text-2xl font-extrabold">{option.title}</h3>
              <p className={`mt-3 leading-relaxed ${index === 0 ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{option.description}</p>
              <ul className={`mt-6 space-y-3 border-t pt-6 ${index === 0 ? "border-primary-foreground/15" : "border-border"}`}>
                {option.items.map((item) => <li key={item} className="flex items-center gap-3 text-sm font-semibold"><Check className={`h-5 w-5 ${index === 0 ? "text-brand-yellow" : "text-brand-teal"}`} />{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mx-auto mt-7 flex max-w-4xl flex-col items-start justify-between gap-5 rounded-xl border border-brand-teal/30 bg-card p-6 shadow-sm sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-xl font-extrabold text-foreground">Por que presencial?</p>
            <p className="mt-2 max-w-2xl leading-relaxed text-muted-foreground">A atualização da norma e a reciclagem acontecem com o instrutor na sala e na prática: sua equipe manuseia os equipamentos, treina ancoragem e resgate e tira dúvidas na hora.</p>
          </div>
          <a href={RECYCLING_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-lg bg-accent px-6 py-3.5 font-display font-bold text-accent-foreground shadow-lg shadow-accent/20 transition hover:-translate-y-0.5">
            <WhatsAppIcon className="h-5 w-5" /> Agendar atualização
          </a>
        </div>
        <p className="mx-auto mt-5 max-w-4xl text-center text-sm font-semibold text-brand-teal-deep">Formação teórica e prática, conforme a NR-35</p>
        <div className="mt-9 text-center"><WhatsAppButton label="Descobrir a melhor opção para minha equipe" /></div>
      </div>
    </section>
  );
}

function PracticalSection() {
  const points = ["Quando a NR-35 se aplica: trabalho acima de 2 metros com risco de queda", "Análise de risco e Permissão de Trabalho (PT)", "Cinturão tipo paraquedista, talabarte, trava-quedas e pontos de ancoragem", "Parte prática presencial com equipamentos e simulação de resgate", "Plano de resgate e procedimentos de emergência", "Documentação para apoiar a conformidade da empresa"];
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <img src={trainingImg} alt="Instrutor conduzindo treinamento presencial prático de trabalho em altura para uma equipe" width={1008} height={800} loading="lazy" className="aspect-[5/4] w-full rounded-2xl object-cover shadow-xl" />
          <div className="absolute right-4 bottom-4 max-w-sm rounded-lg bg-background/95 px-4 py-3 shadow-lg"><p className="text-xs font-semibold text-muted-foreground">Onde atendemos</p><p className="font-display font-bold text-brand-teal-deep">Atendimento direto em Minas Gerais e, nos demais estados, por rede de parceiros [PREENCHER: critério de seleção dos parceiros, ex.: homologados pela Salubritá].</p></div>
        </div>
        <div>
          <p className="text-sm font-bold text-brand-teal uppercase">Conteúdo aplicado</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Sua equipe sabe o que fazer nos metros mais críticos</h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">A formação traduz a norma para situações reais do seu ambiente, com linguagem clara e prática presencial com os equipamentos.</p>
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
    ["01", "Fale com o consultor", "Informe o número de pessoas, as funções e onde será o treinamento."],
    ["02", "Receba a proposta", "A equipe organiza formato, data e condições adequadas à sua operação."],
    ["03", "Capacite sua equipe", "A turma realiza a formação presencial e recebe a documentação correspondente."],
  ];
  return (
    <section className="bg-brand-teal-deep py-16 text-primary-foreground lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl"><p className="text-sm font-bold text-brand-yellow uppercase">Sem complicação</p><h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Da conversa à turma em três passos</h2></div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(([number, title, text]) => <div key={number} className="border-t border-primary-foreground/20 pt-6"><span className="font-display text-4xl font-extrabold text-brand-yellow">{number}</span><h3 className="mt-4 text-xl font-bold">{title}</h3><p className="mt-2 leading-relaxed text-primary-foreground/75">{text}</p></div>)}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    ["Quem precisa fazer o treinamento de NR-35?", "Todo trabalhador que atua em altura acima de 2 metros e que esteja exposto a risco de queda, conforme a NR-35. Cargas horárias e situações específicas: [PREENCHER: detalhamento adotado pela Salubritá]."],
    ["Quando é preciso fazer a atualização (reciclagem)?", "A NR-35 exige reciclagem a cada 2 anos, no máximo. Antes disso, o treinamento deve ser refeito quando houver mudança nas condições do local, após acidente grave ou fatal, ou quando o trabalhador voltar à atividade após afastamento superior a 90 dias."],
    ["Por que a Salubritá realiza o treinamento de forma presencial?", "Porque a prática faz diferença: a turma manuseia cinturão, talabarte e trava-quedas, treina ancoragem e resgate e discute as mudanças da norma diretamente com o instrutor, com espaço para dúvidas reais da operação."],
    ["Como é emitido o certificado?", "O treinamento segue a NR-35, com conteúdo teórico e parte prática, e é emitido com a documentação correspondente. [PREENCHER: quem emite o certificado e o nome do responsável técnico]."],
    ["A Salubritá pode treinar uma turma dentro da empresa?", "Sim. A turma pode ser organizada na sua empresa ou em local combinado, conforme estrutura, cidade e número de participantes."],
    ["É possível treinar equipes fora de Minas Gerais?", "Sim. O atendimento direto é realizado em Minas Gerais e, nos demais estados, por rede de parceiros [PREENCHER: quem ministra o curso, quem emite o certificado e critério de seleção dos parceiros]."],
    ["Qual o valor do treinamento?", "O valor depende do número de participantes, da função e do local. [PREENCHER: faixa de preço ou 'a partir de', se desejado]. Solicite uma proposta e receba a resposta em até [PREENCHER: prazo]."],
    ["Qual o tamanho mínimo da turma e qual o prazo para agendar?", "[PREENCHER: tamanho mínimo da turma e prazo para agendamento]."],
    ["Posso inscrever apenas uma pessoa?", "[PREENCHER: sim/não, vagas avulsas]."],
    ["Quando o certificado é entregue?", "[PREENCHER: prazo e forma de entrega do certificado]."],
    ["O que é necessário antes do treinamento?", "Os participantes devem estar com exame médico ocupacional (ASO) compatível com a atividade de trabalho em altura. [PREENCHER: outros requisitos]."],
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
    const functions = data.getAll("funcao").map(String);
    const whatsapp = String(data.get("whatsapp") ?? "").replace(/\D/g, "");

    if (functions.length === 0) {
      setFormError("Selecione pelo menos uma função.");
      setSubmitted(false);
      return;
    }

    if (whatsapp.length < 10 || whatsapp.length > 13) {
      setFormError("Informe um WhatsApp válido, com DDD.");
      setSubmitted(false);
      return;
    }

    setFormError("");
    setSubmitted(true);

    const message = [
      "Olá! Vim pelo site da Salubritá e quero solicitar uma proposta para o treinamento de Trabalho em Altura (NR-35).",
      "",
      `Nome: ${String(data.get("nome") ?? "")}`,
      `Empresa: ${String(data.get("empresa") ?? "")}`,
      `WhatsApp: ${String(data.get("whatsapp") ?? "")}`,
      `E-mail: ${String(data.get("email") ?? "")}`,
      `Cidade/UF: ${String(data.get("cidade") ?? "")}`,
      `Nº de pessoas: ${String(data.get("pessoas") ?? "")}`,
      `Função: ${functions.join(", ")}`,
      `Tipo: ${String(data.get("tipo") ?? "")}`,
    ].join("\n");

    window.open(`https://wa.me/553131669006?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  const inputClass = "mt-1.5 min-h-11 w-full rounded-lg border border-input bg-background px-3 py-2 text-foreground outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";

  return (
    <section id="contato" className="bg-brand-teal py-16 lg:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="text-primary-foreground">
          <p className="text-sm font-bold text-brand-yellow uppercase">Sua equipe está com o treinamento de trabalho em altura em dia?</p>
          <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">Receba uma proposta para o treinamento NR-35</h2>
          <p className="mt-3 text-primary-foreground/85">Resposta rápida, sem compromisso.</p>
          <div className="mt-7 flex flex-col items-start gap-3">
            <WhatsAppButton label="Chamar no WhatsApp" />
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
            <label className="text-sm font-semibold">Nº de pessoas a treinar<input className={inputClass} name="pessoas" type="number" inputMode="numeric" min={1} max={10000} required /></label>
          </div>

          <fieldset className="mt-5">
            <legend className="text-sm font-bold">Função</legend>
            <div className="mt-2 grid gap-2 sm:grid-cols-2">
              {["Trabalhador em altura", "Supervisão de trabalho em altura", "Responsável por resgate"].map((item) => (
                <label key={item} className="flex items-center gap-2 text-sm font-medium">
                  <input type="checkbox" name="funcao" value={item} className="h-4 w-4 accent-brand-teal" /> {item}
                </label>
              ))}
            </div>
          </fieldset>

          <label className="mt-5 block text-sm font-semibold">Tipo
            <select className={inputClass} name="tipo" defaultValue="" required>
              <option value="" disabled>Selecione</option>
              <option>Formação inicial (8h)</option>
              <option>Atualização da norma / Reciclagem (presencial)</option>
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
        <div><Wordmark /><p className="mt-4 text-sm text-primary-foreground/70">Belo Horizonte • MG — atendimento em [PREENCHER: estados]</p></div>
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
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Tirar dúvidas no WhatsApp" className="fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full border-4 border-background bg-accent p-3 text-accent-foreground shadow-2xl transition hover:-translate-y-1 sm:right-6 sm:bottom-6 sm:pr-5">
      <WhatsAppIcon className="h-6 w-6" /><span className="hidden text-sm font-bold sm:inline">Tirar dúvidas</span>
    </a>
  );
}

function Index() {
  /*
   * Seções intencionalmente ocultas até o envio de dados reais:
   * 1. "Quem confia na Salubritá": até 6 logos de clientes e 2 a 3 depoimentos
   *    com nome, cargo e empresa [PREENCHER].
   * 2. "Quem ministra o treinamento": foto, nome, formação e registro profissional
   *    do instrutor ou responsável técnico [PREENCHER].
   */
  return <div className="min-h-screen"><Header /><main><Hero /><Stats /><Benefits /><TrainingOptions /><PracticalSection /><Process /><FAQ /><FinalCTA /></main><Footer /><FloatingWhatsApp /></div>;
}
