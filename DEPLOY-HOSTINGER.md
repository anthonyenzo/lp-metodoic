# Deploy da landing page na Hostinger

O projeto exporta HTML, CSS e JavaScript estáticos para a pasta `out/`. O workflow `.github/workflows/deploy-hostinger.yml` compila e envia essa pasta para a Hostinger a cada push na branch `main`.

## 1. Obter os dados FTP na Hostinger

No hPanel, abra:

`Websites → metodoic.viralizeaimachine.com → Dashboard → Files → FTP Accounts`

Copie o hostname/IP FTP e o username. Crie ou redefina uma senha FTP forte. O FTP padrão da Hostinger usa a porta 21.

## 2. Criar os Secrets no GitHub

No repositório `anthonyevzo/lp-metodoic`, abra:

`Settings → Secrets and variables → Actions → Secrets → New repository secret`

Crie estes três Secrets:

- `HOSTINGER_FTP_SERVER`: hostname ou IP FTP exibido no hPanel.
- `HOSTINGER_FTP_USERNAME`: usuário FTP exibido no hPanel.
- `HOSTINGER_FTP_PASSWORD`: senha FTP definida no hPanel.

Nunca coloque esses valores diretamente no workflow ou em arquivos versionados.

## 3. Criar a variável do diretório remoto

Na mesma tela, abra a aba `Variables` e crie:

- Nome: `HOSTINGER_FTP_SERVER_DIR`
- Valor sugerido para o usuário FTP principal: `/domains/viralizeaimachine.com/public_html/metodoic/`

Se o usuário FTP foi criado com acesso restrito diretamente à pasta do subdomínio, use apenas `/`. O caminho precisa terminar com uma barra.

O caminho absoluto mostrado no hPanel é:

`/home/u551016023/domains/viralizeaimachine.com/public_html/metodoic`

O GitHub Actions utiliza o caminho relativo à raiz disponível para o usuário FTP, por isso normalmente o trecho `/home/u551016023` não entra na variável.

## 4. Enviar o projeto

Depois de configurar Secrets e Variable:

```bash
git push -u origin main
```

O push inicia automaticamente o workflow **Deploy landing page to Hostinger**.

## 5. Acompanhar e testar

1. Abra a aba `Actions` do repositório.
2. Entre na execução mais recente.
3. Confirme que as etapas de build e deploy ficaram verdes.
4. Acesse `https://metodoic.viralizeaimachine.com`.
5. Teste a página principal, o checkout, `/politica-de-privacidade/` e `/termos-de-uso/`.
6. No hPanel, confirme que o SSL está ativo para o subdomínio.

Também é possível executar o workflow manualmente em `Actions → Deploy landing page to Hostinger → Run workflow`.