# RULES — Constituição do APSIDE-OS

Regras-mãe. Se uma instrução nova entrar em conflito com estas, esta constituição vence.

1. **Uma fonte por assunto.** Cada tipo de informação tem um único dono (veja
   `MAPA.md`). Se a mesma informação aparecer em dois lugares, uma delas é mentira.
2. **Destino imediato.** Tudo que entra tem um destino canônico na hora (veja
   `PROPAGATION.md`). Não existe "pasta geral" nem inbox onde as coisas esperam.
3. **Archive ≠ Delete.** Itens concluídos vão para `archive/` via `mv`/`copy`.
   Nada é apagado — histórico é imutável e recuperável.
4. **Estado do agente é versionado.** O "sinal de vida" vive em `HEARTBEAT.md`
   (e não em runtime fora do git). Quem abre sessão lê o heartbeat antes de agir.
5. **Poda mensal.** Toda virada de mês, conteúdo frio vai para `archive/` e o
   diário vira mensal.
6. **Gates humanos.** Publicar, pagar, enviar em massa ou qualquer ação externa
   só ocorre após OK explícito do operador.
