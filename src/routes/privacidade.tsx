import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Salubritá" },
      {
        name: "description",
        content: "Política de Privacidade da Salubritá e informações sobre o tratamento de dados pessoais conforme a LGPD.",
      },
      { property: "og:title", content: "Política de Privacidade | Salubritá" },
      {
        property: "og:description",
        content: "Saiba como a Salubritá trata os dados pessoais informados em seus canais de contato.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://salubrita-zap-lead.lovable.app/privacidade" }],
  }),
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-5 sm:px-6">
          <Link to="/" className="font-display text-xl font-extrabold text-brand-teal-deep">
            Salubritá
          </Link>
          <Link to="/" className="text-sm font-bold text-brand-teal-deep hover:text-brand-teal">
            Voltar ao início
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
        <p className="text-sm font-bold uppercase text-brand-teal">Transparência e privacidade</p>
        <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-5 leading-relaxed text-muted-foreground">
          Esta Política descreve como a Salubritá trata os dados pessoais informados por pessoas interessadas em seus serviços, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
        </p>

        <div className="mt-10 space-y-9">
          <section>
            <h2 className="text-2xl font-bold">1. Identificação do responsável</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Razão social: [PREENCHER: razão social] • CNPJ: [PREENCHER: CNPJ] • Endereço: [PREENCHER: endereço completo].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">2. Dados coletados</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              No formulário de solicitação de proposta, podem ser coletados nome, empresa, WhatsApp, e-mail, cidade/UF, número de pessoas a treinar, funções dos participantes e tipo de capacitação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">3. Finalidades do tratamento</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Os dados são usados para atender solicitações, entender a necessidade da empresa, elaborar propostas, responder dúvidas e manter comunicações relacionadas ao serviço solicitado. O formulário desta página apenas monta uma mensagem no WhatsApp e não armazena os dados no site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">4. Compartilhamento e conservação</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Os dados podem ser tratados por fornecedores necessários ao atendimento, observadas medidas de segurança e confidencialidade. O prazo de conservação seguirá a finalidade do atendimento e as obrigações legais aplicáveis. [PREENCHER: política interna de retenção e compartilhamento].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">5. Direitos do titular</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Nos termos da LGPD, o titular pode solicitar confirmação e acesso, correção, anonimização, bloqueio ou eliminação quando aplicável, portabilidade, informações sobre compartilhamento, revogação do consentimento e revisão das decisões cabíveis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">6. Segurança</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              A Salubritá adota medidas razoáveis para proteger dados pessoais contra acessos não autorizados e situações acidentais ou ilícitas de perda, alteração ou divulgação.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">7. Contato e responsável por dados</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Para exercer seus direitos ou esclarecer dúvidas, entre em contato pelo e-mail [PREENCHER: e-mail de privacidade] ou com [PREENCHER: nome e contato do responsável pelo tratamento de dados].
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">8. Atualizações</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Esta Política pode ser atualizada para refletir mudanças legais ou operacionais. Última atualização: 21 de setembro de 2026.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}