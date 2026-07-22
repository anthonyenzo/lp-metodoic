import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://metodoic.viralizeaimachine.com"),
  title: "Método Influencer/Clone de IA Ultrarrealista",
  description: "Aprenda a criar influencers e clones de IA ultrarrealistas, gerar vídeos profissionais e transformar essa habilidade em conteúdo, vendas ou serviços.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Método Influencer/Clone de IA Ultrarrealista",
    description: "Do zero aos seus primeiros vídeos profissionais com influencers e clones de IA.",
    type: "website",
    images: [{ url: "/metodo-cover.png", width: 1600, height: 714, alt: "Método Influencer/Clone de IA Ultrarrealista" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
