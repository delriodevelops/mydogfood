import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MY DOG FOOD",
  description: "Explora MyDogFood, tu guía definitiva para una alimentación canina saludable. Descubre cuáles alimentos son beneficiosos, cuáles evitar y los tóxicos para tu perro, con explicaciones claras y basadas en la ciencia. Desde frutas y verduras seguras hasta snacks comerciales, nuestra plataforma clasifica meticulosamente cada alimento para garantizar la salud y el bienestar de tu mejor amigo. ¿Buscas mejorar la dieta de tu perro con opciones seguras y nutritivas? Visita MyDogFood hoy y descubre cómo transformar la alimentación de tu mascota. ¡Empieza ahora a nutrir a tu perro con la mejor comida!",
  openGraph: {
    title: 'MY DOG FOOD',
    description: 'Explora MyDogFood, tu guía definitiva para una alimentación canina saludable. Descubre cuáles alimentos son beneficiosos, cuáles evitar y los tóxicos para tu perro, con explicaciones claras y basadas en la ciencia. Desde frutas y verduras seguras hasta snacks comerciales, nuestra plataforma clasifica meticulosamente cada alimento para garantizar la salud y el bienestar de tu mejor amigo. ¿Buscas mejorar la dieta de tu perro con opciones seguras y nutritivas? Visita MyDogFood hoy y descubre cómo transformar la alimentación de tu mascota. ¡Empieza ahora a nutrir a tu perro con la mejor comida!',
    url: 'https://mydogfood.iamdelrio.com',
    siteName: 'mydogfood',
    type: 'website',
    images: [
      {
        url: 'https://i.imgur.com/wXHYvI7.png',
        width: 1920,
        height: 1440,
        alt: 'Og Image Alt preview de la página web',
      },
    ],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + ' select-none antialiased'}>
        {children}
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </body>
    </html>
  );
}
