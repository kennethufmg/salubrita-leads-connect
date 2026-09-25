# Correções técnicas e comerciais da landing NR-33

## Objetivo
Preservar o visual atual e corrigir apenas conteúdo técnico, transparência comercial, captação e informações institucionais solicitadas.

## Alterações na landing
- Atualizar as cargas horárias para 16h, 40h e reciclagem anual de 8h, incluindo o novo bloco e CTA específico.
- Corrigir certificado, atuação geográfica, conteúdo prático, benefícios, urgência e todas as respostas do FAQ.
- Remover os três contadores sem comprovação; manter no código, ocultas, as futuras seções de clientes/depoimentos e instrutor com marcadores `[PREENCHER]`.
- Adicionar “Contato” ao menu e um formulário obrigatório com validação de e-mail, WhatsApp, quantidade e múltiplas funções.
- Ao enviar, confirmar na tela e abrir o WhatsApp com todos os dados preenchidos; manter WhatsApp direto, telefone e e-mail pendente como alternativas.
- Completar o rodapé com os dados institucionais pendentes e retirar afirmações nacionais não confirmadas.

## Privacidade e metadados
- Criar `/privacidade` com política LGPD padrão, identificação clara dos dados coletados, finalidades, direitos e contatos pendentes.
- Adicionar metadados exclusivos à nova página, incluir “reciclagem” na descrição da landing e remover `twitter:site` incorreto.
- Verificar se o selo “Made with Lovable” pode ser ocultado pelas configurações disponíveis, sem alterar a marca da página.

## Validação
- Conferir por busca que não restaram “24 horas”, “válido em todo o Brasil”, “comprovação em fiscalizações” ou contadores inventados.
- Testar formulário e mensagem gerada para o WhatsApp, inclusive validações e confirmação.
- Validar visualmente a landing e a página de privacidade em desktop e celular, sem sobreposição ou rolagem horizontal.
- Entregar uma lista consolidada de todos os campos `[PREENCHER]` ainda pendentes.

## Detalhes técnicos
- Implementação somente no front-end; nenhum dado do formulário será armazenado.
- A mensagem do WhatsApp será montada localmente com codificação segura dos valores validados.
- A nova rota seguirá o padrão atual do projeto e terá título, descrição e metadados sociais próprios.
