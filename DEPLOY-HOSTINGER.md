# Deploy da landing page na Hostinger

O projeto exporta HTML, CSS e JavaScript estÃ¡ticos para a pasta `out/`. O workflow `.github/workflows/deploy-hostinger.yml` compila e envia essa pasta para a Hostinger a cada push na branch `main`.

## 1. Obter os dados FTP na Hostinger

No hPanel, abra:

`Websites â†’ metodoic.viralizeaimachine.com â†’ Dashboard â†’ Files â†’ FTP Accounts`

Copie o hostname/IP FTP e o username. Crie ou redefina uma senha FTP forte. O FTP padrÃ£o da Hostinger usa a porta 21.

## 2. Criar os Secrets no GitHub

No repositÃ³rio `anthonyenzo/lp-metodoic`, abra:

`Settings â†’ Secrets and variables â†’ Actions â†’ Secrets â†’ New repository secret`

Crie estes trÃªs Secrets:

- `HOSTINGER_FTP_SERVER`: hostname ou IP FTP exibido no hPanel.
- `HOSTINGER_FTP_USERNAME`: usuÃ¡rio FTP exibido no hPanel.
- `HOSTINGER_FTP_PASSWORD`: senha FTP definida no hPanel.

Nunca coloque esses valores diretamente no workflow ou em arquivos versionados.

## 3. Criar a variÃ¡vel do diretÃ³rio remoto

Na mesma tela, abra a aba `Variables` e crie:

- Nome: `HOSTINGER_FTP_SERVER_DIR`
- Valor sugerido para o usuÃ¡rio FTP principal: `/domains/viralizeaimachine.com/public_html/metodoic/`

Se o usuÃ¡rio FTP foi criado com acesso restrito diretamente Ã  pasta do subdomÃ­nio, use apenas `/`. O caminho precisa terminar com uma barra.

O caminho absoluto mostrado no hPanel Ã©:

`/home/u551016023/domains/viralizeaimachine.com/public_html/metodoic`

O GitHub Actions utiliza o caminho relativo Ã  raiz disponÃ­vel para o usuÃ¡rio FTP, por isso normalmente o trecho `/home/u551016023` nÃ£o entra na variÃ¡vel.

## 4. Enviar o projeto

Depois de configurar Secrets e Variable:

```bash
git push -u origin main
```

O push inicia automaticamente o workflow **Deploy landing page to Hostinger**.

## 5. Acompanhar e testar

1. Abra a aba `Actions` do repositÃ³rio.
2. Entre na execuÃ§Ã£o mais recente.
3. Confirme que as etapas de build e deploy ficaram verdes.
4. Acesse `https://metodoic.viralizeaimachine.com`.
5. Teste a pÃ¡gina principal, o checkout, `/politica-de-privacidade/` e `/termos-de-uso/`.
6. No hPanel, confirme que o SSL estÃ¡ ativo para o subdomÃ­nio.

TambÃ©m Ã© possÃ­vel executar o workflow manualmente em `Actions â†’ Deploy landing page to Hostinger â†’ Run workflow`.