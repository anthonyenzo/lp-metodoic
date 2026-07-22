"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";

const checkout = "https://checkout.wiven.com.br/checkout/cmqqbdlw607x001put1j4asq8?offer=2J6IE74";

const outcomes = [
  ["01", "Influencer do zero", "Crie uma personagem consistente, altere roupas e acessórios e coloque produtos nas mãos dela."],
  ["02", "Vídeos que parecem reais", "Transforme imagens em vídeos profissionais, inclusive conteúdos em primeira pessoa e com fala."],
  ["03", "Seu clone digital", "Gere uma versão ultrarrealista de você, troque aparência e cenário e produza sem precisar gravar toda hora."],
  ["04", "Conteúdo que vende", "Use roteiros estratégicos para TikTok Shop, Instagram, produtos, serviços e campanhas para marcas."],
];

const audiences = [
  "Está começando do zero e quer um caminho direto",
  "Cria conteúdo, mas não quer depender de câmera todos os dias",
  "Trabalha como afiliado e quer produzir criativos em escala",
  "Tem uma empresa ou perfil profissional com pouco tempo para gravar",
  "Quer oferecer criação de influencers e clones como serviço",
];

const modules = [
  { number: "01", title: "Boas-vindas + comunidade", description: "Acesse o treinamento, entenda o caminho e entre no grupo exclusivo de alunos no WhatsApp.", lessons: ["Seja bem-vindo(a)!", "Link de acesso à comunidade"] },
  { number: "02", title: "Influencer IA × Clone de IA", description: "Entenda as diferenças, aplicações e qual formato faz mais sentido para cada objetivo.", lessons: ["O que é um Influencer de IA", "O que é um Clone de IA"] },
  { number: "03", title: "Influencer de IA", description: "Da criação da personagem ao primeiro conjunto de conteúdos prontos para publicar ou apresentar a clientes.", lessons: ["Criando a nossa influencer", "Alterando roupas e acessórios", "Influencer segurando produtos", "Gerando o primeiro vídeo", "Vídeo com visão de POV", "Vídeo com influencer no HeyGen"] },
  { number: "04", title: "Clone de IA", description: "Crie uma versão digital ultrarrealista e adapte o visual a diferentes conteúdos e campanhas.", lessons: ["Criando e gerando o primeiro vídeo do clone", "Alterando aparência e background do clone"] },
];

const faqs = [
  ["Preciso ter experiência com inteligência artificial?", "Não. O treinamento foi pensado para iniciantes e mostra o processo passo a passo, do conceito à criação dos primeiros vídeos."],
  ["Preciso pagar ferramentas para começar?", "Não necessariamente. Você conhecerá opções que permitem começar gratuitamente. Depois dos primeiros trabalhos, poderá avaliar planos pagos que trazem mais agilidade e qualidade."],
  ["Consigo assistir pelo celular?", "Sim. A área de membros é responsiva e pode ser acessada pelo celular ou computador."],
  ["Por quanto tempo terei acesso?", "Nesta condição de lançamento, o acesso ao treinamento é vitalício. Essa condição é exclusiva para os primeiros alunos e pode ser retirada em ofertas futuras."],
  ["Como recebo os agentes MAX e RUI?", "Os dois agentes fazem parte do treinamento: MAX auxilia na geração de imagens e RUI ajuda a estruturar roteiros para vídeos e criativos."],
  ["Como funciona o suporte?", "Você terá suporte direto com Anthony Ribeiro pelo WhatsApp, além da comunidade de alunos para trocar experiências e networking."],
  ["Existe garantia?", "Sim. Você tem 7 dias corridos após a compra para conhecer o treinamento. Se entender que não é para você, poderá solicitar o reembolso dentro desse prazo, conforme as regras da plataforma de pagamento."],
  ["Vou ganhar dinheiro no primeiro dia?", "O método entrega conhecimento e caminhos de aplicação imediata, mas resultados financeiros dependem da sua execução, oferta, mercado e consistência. Não existe garantia de renda."],
];

function BuyButton({ label = "QUERO COMEÇAR AGORA" }: { label?: string }) {
  return <a className="buy-button" href={checkout} target="_blank" rel="noopener noreferrer"><span>{label}</span><b aria-hidden="true"><ArrowUpRight className="arrow-icon" strokeWidth={1.75} /></b></a>;
}

export default function Home() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main>
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Voltar ao início"><span>MÉTODO</span> I/C</a>
      <div className="topbar-note"><i /> ACESSO VITALÍCIO NESTA OFERTA</div>
      <a className="topbar-cta" href={checkout} target="_blank" rel="noopener noreferrer">GARANTIR ACESSO</a>
    </header>

    <section className="hero" id="inicio">
      <div className="hero-glow" />
      <div className="hero-copy" data-reveal>
        <div className="eyebrow"><span>MINITREINAMENTO PRÁTICO</span><span>EDIÇÃO 2026</span></div>
        <h1>CRIE. CRESÇA.<br /><em>VENDA.</em><br /><span>SEM PRECISAR APARECER.</span></h1>
        <p className="hero-lead">Domine o método para criar <strong>influencers e clones ultrarrealistas</strong>, produzir vídeos profissionais e transformar essa habilidade em conteúdo, vendas ou serviço para marcas.</p>
        <p className="hero-promise">Finalize o treinamento, entre para a comunidade e saia pronto para aplicar — com caminhos para começar a monetizar essa habilidade desde o primeiro dia.</p>
        <BuyButton label="QUERO DOMINAR O MÉTODO" />
        <div className="hero-trust"><span><i className="check-icon" aria-hidden="true" />Pagamento único</span><span><i className="check-icon" aria-hidden="true" />7 dias de garantia</span><span><i className="check-icon" aria-hidden="true" />Acesso imediato</span></div>
      </div>
      <div className="hero-media" data-reveal>
        <div className="media-label">ASSISTA E ENTENDA O MÉTODO <span>01:00</span></div>
        <div className="video-placeholder">
          <Image src="/metodo-cover.png" alt="Método Influencer e Clone de IA Ultrarrealista, com Anthony Ribeiro" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="video-shade" /><button type="button" aria-label="Vídeo de vendas em breve"><span className="play-icon" aria-hidden="true" /></button><p>VSL EM BREVE</p>
        </div>
        <div className="media-foot"><span>CONTEÚDO DIRETO AO PONTO</span><span>SEM EXPERIÊNCIA PRÉVIA</span></div>
      </div>
    </section>

    <div className="ticker" aria-hidden="true"><div>CRIE • PUBLIQUE • VENDA • SEM PRECISAR APARECER • CRIE • PUBLIQUE • VENDA • SEM PRECISAR APARECER •</div></div>

    <section className="section problem-section">
      <div className="section-kicker" data-reveal>O JOGO MUDOU</div>
      <div className="split-heading" data-reveal><h2>VOCÊ NÃO PRECISA MAIS ESCOLHER ENTRE <span>TEMPO, QUALIDADE E FREQUÊNCIA.</span></h2><p>A câmera, a agenda, o cenário e até a falta de um produto físico deixaram de ser barreiras. Com um processo claro, você pode construir uma presença digital que trabalha a favor do seu negócio.</p></div>
      <div className="statements" data-reveal>
        <article><b>01</b><h3>Não quer aparecer?</h3><p>Construa um influencer original e consistente para protagonizar seus conteúdos.</p></article>
        <article><b>02</b><h3>Sem tempo para gravar?</h3><p>Use um clone próprio para multiplicar sua presença sem viver diante da câmera.</p></article>
        <article><b>03</b><h3>Quer uma nova renda?</h3><p>Transforme a criação de personagens e vídeos em um serviço para marcas e profissionais.</p></article>
      </div>
    </section>

    <section className="section outcomes-section" id="resultados">
      <div className="section-kicker light" data-reveal>O QUE VOCÊ SERÁ CAPAZ DE FAZER</div>
      <div className="outcomes-grid">
        <div className="outcomes-title" data-reveal><h2>DO ZERO AO<br /><em>CONTEÚDO PRONTO.</em></h2><p>Uma habilidade. Diversas formas de aplicação.</p></div>
        <div className="outcomes-list">{outcomes.map(([number, title, copy]) => <article key={number} data-reveal><b>{number}</b><div><h3>{title}</h3><p>{copy}</p></div><ArrowUpRight className="arrow-icon" strokeWidth={1.75} aria-hidden="true" /></article>)}</div>
      </div>
      <div className="use-cases" data-reveal><span>PARA APLICAR EM:</span><p>TikTok Shop</p><p>Instagram orgânico</p><p>Afiliados</p><p>Infoprodutos</p><p>Serviços para marcas</p></div>
    </section>

    <section className="section proof-section">
      <div className="proof-head" data-reveal><div><span className="section-kicker">VEJA O POTENCIAL</span><h2>CRIADO COM<br />O <em>MÉTODO.</em></h2></div><p>Este espaço receberá vídeos reais de influencers e clones produzidos com o processo ensinado no treinamento.</p></div>
      <div className="showcase-grid" data-reveal>{["INFLUENCER + PRODUTO", "VÍDEO EM POV", "CLONE ULTRARREALISTA"].map((title, index) => <article className="showcase-card" key={title}><div className="showcase-number">0{index + 1}</div><div className="play-mini"><span className="play-icon" aria-hidden="true" /></div><p>{title}</p><small>VÍDEO DEMONSTRATIVO EM BREVE</small></article>)}</div>
      <p className="proof-note" data-reveal>Sem depoimentos inventados. Aqui você verá exemplos reais do que o método produz.</p>
    </section>

    <section className="section audience-section"><div className="audience-grid">
      <div data-reveal><span className="section-kicker light">FEITO PARA QUEM QUER EXECUTAR</span><h2>ISSO É PARA<br /><em>VOCÊ?</em></h2><p>Se você se identifica com pelo menos um destes pontos, o método foi construído para encurtar seu caminho.</p></div>
      <div className="check-list" data-reveal>{audiences.map((item) => <p key={item}><span><i className="check-icon" aria-hidden="true" /></span>{item}</p>)}</div>
    </div></section>

    <section className="section curriculum-section" id="conteudo">
      <div className="curriculum-head" data-reveal><span className="section-kicker">POR DENTRO DO TREINAMENTO</span><h2>UM CAMINHO CURTO.<br /><em>SEM ATALHOS CONFUSOS.</em></h2></div>
      <div className="modules">{modules.map((module) => <details key={module.number} data-reveal open={module.number === "03"}>
        <summary><span>{module.number}</span><div><small>MÓDULO</small><h3>{module.title}</h3><p>{module.description}</p></div><b>+</b></summary>
        <ul>{module.lessons.map((lesson, index) => <li key={lesson}><span>{String(index + 1).padStart(2, "0")}</span>{lesson}<i>PLAY</i></li>)}</ul>
      </details>)}</div>
    </section>

    <section className="section bonus-section">
      <div className="bonus-intro" data-reveal><span className="section-kicker light">BÔNUS QUE ACELERAM A EXECUÇÃO</span><h2>VOCÊ NÃO<br />COMEÇA <em>SOZINHO.</em></h2><p>Além das aulas, você recebe recursos prontos para reduzir o tempo entre a ideia e o conteúdo publicado.</p></div>
      <div className="bonus-cards">
        <article data-reveal><span>BÔNUS 01</span><div className="agent-badge">MAX</div><h3>Agente MAX</h3><p>Seu especialista em geração de imagens: ajuda a estruturar prompts e acelerar a criação dos visuais.</p><b>INCLUSO NO ACESSO</b></article>
        <article data-reveal><span>BÔNUS 02</span><div className="agent-badge">RUI</div><h3>Agente RUI</h3><p>Seu especialista em roteiros: cria estruturas pensadas para vídeos, criativos e conteúdos que prendem atenção.</p><b>INCLUSO NO ACESSO</b></article>
        <article data-reveal><span>BÔNUS 03</span><div className="agent-badge">24H</div><h3>Suporte + comunidade</h3><p>Contato direto com Anthony pelo WhatsApp e um grupo para networking, dúvidas e troca de experiências.</p><b>INCLUSO NO ACESSO</b></article>
      </div>
    </section>

    <section className="section founder-section">
      <div className="founder-photo" data-reveal><Image src="/metodo-cover.png" alt="Anthony Ribeiro, fundador do treinamento" fill sizes="(max-width: 800px) 100vw, 45vw" /><span>ANTHONY RIBEIRO<br /><small>CRIADOR &amp; FUNDADOR</small></span></div>
      <div className="founder-copy" data-reveal><span className="section-kicker">QUEM VAI TE GUIAR</span><h2>EU TESTEI O QUE FUNCIONA PARA VOCÊ NÃO PRECISAR <em>PAGAR PELO ERRO.</em></h2><p>Sou Anthony Ribeiro, tenho 24 anos e vivo da internet sem precisar aparecer desde 2021. Nesse caminho, investi muito dinheiro, testei ferramentas demais e perdi tempo em processos que pareciam promissores — até chegar a um método enxuto, funcional e replicável.</p><p>Este treinamento reúne exatamente o que eu gostaria de ter recebido no começo: um passo a passo prático que poupa testes desnecessários e leva você mais rápido até uma criação com qualidade profissional.</p><blockquote>“Eu poderia vender esse conhecimento por muito mais. Mas quero formar uma comunidade forte, unida por um objetivo: crescer perfis, vender mais e criar oportunidades sem depender de aparecer.”</blockquote><p>Minha intenção é trazer pessoas comprometidas para perto, trocar experiências e construir uma rede que evolui em conjunto.</p><div className="signature">Anthony Ribeiro <span>— fundador</span></div></div>
    </section>

    <section className="section offer-section" id="oferta">
      <div className="offer-card" data-reveal><div className="offer-main"><span className="section-kicker light">CONDIÇÃO PARA OS PRIMEIROS ALUNOS</span><h2>TUDO O QUE VOCÊ PRECISA PARA COMEÇAR.</h2><ul><li>Treinamento completo e prático</li><li>Acesso pelo celular ou computador</li><li>Agentes MAX e RUI</li><li>Comunidade exclusiva no WhatsApp</li><li>Suporte direto com o fundador</li><li>Acesso vitalício nesta condição</li></ul></div><div className="price-box"><p>PAGAMENTO ÚNICO</p><div><small>R$</small><strong>97</strong><sup>,00</sup></div><span>Sem mensalidade</span><BuyButton label="GARANTIR MEU ACESSO" /><small>Compra segura • acesso imediato</small></div></div>
      <div className="guarantee" data-reveal><div>7</div><div><h3>DIAS PARA DECIDIR COM TRANQUILIDADE.</h3><p>Acesse o conteúdo e conheça a metodologia. Se não fizer sentido para você, solicite o reembolso dentro do prazo de garantia.</p></div></div>
    </section>

    <section className="section faq-section"><div className="faq-head" data-reveal><span className="section-kicker">PERGUNTAS FREQUENTES</span><h2>AINDA FICOU<br />ALGUMA <em>DÚVIDA?</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} data-reveal><summary><span>{String(index + 1).padStart(2, "0")}</span>{question}<b>+</b></summary><p>{answer}</p></details>)}</div></section>

    <section className="final-cta"><div data-reveal><span className="section-kicker light">SUA PRÓXIMA PUBLICAÇÃO PODE COMEÇAR AQUI</span><h2>PARE DE ADIAR<br />O CONTEÚDO QUE<br /><em>PODERIA ESTAR VENDENDO.</em></h2><p>Entre agora, aprenda o processo e dê o primeiro passo para criar em escala sem depender de aparecer.</p><BuyButton label="QUERO ENTRAR PARA O MÉTODO" /><small>Resultados variam conforme aplicação, oferta, mercado e consistência.</small></div></section>

    <footer><div className="brand"><span>MÉTODO</span> I/C</div><p>© 2026 Método Influencer/Clone de IA Ultrarrealista. Todos os direitos reservados.</p><nav><a href="/politica-de-privacidade">Privacidade</a><a href="/termos-de-uso">Termos de uso</a></nav></footer>
    <div className="mobile-buy"><div><small>PAGAMENTO ÚNICO</small><strong>R$ 97</strong></div><a href={checkout} target="_blank" rel="noopener noreferrer">QUERO ACESSAR</a></div>
  </main>;
}

