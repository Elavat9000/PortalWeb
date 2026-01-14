import imgNote from "../assets/img-projects/Utel.png";
import imgRemolques from "../assets/img-projects/Pagina de Remolques.png";
import imgRemolquesAlt from "../assets/img-projects/Pagina de remolques1.png";
import imgPortfolio from "../assets/img-projects/AnalisisDatos.png";



export const proyectos = [
  {
    titulo: "App con Tkinter Python",
    imagen: imgNote.src,
    tecnologias: ["tkinter","threading","Selenium", "sys", "Python"],
    codigo: "https://github.com/Elavat9000/Campanas_Selenium/tree/main",
    demo: "https://youtu.be/ybT9QY36-uE",
  },
  {
    titulo: "Página de Remolques",
    imagen: imgRemolques.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    codigo: "https://github.com/Elavat9000/concaresa-trailers-hub",
    demo: "https://concaresa-trailers-hub.vercel.app/",
  },
  {
    titulo: "Página de Remolques (Landing)",
    imagen: imgRemolquesAlt.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    codigo: "https://github.com/Elavat9000/remolquesC",
    demo: "https://remolques-c.vercel.app/",
  },
  {
    titulo: "Analisis de Datos",
    imagen: imgPortfolio.src,
    tecnologias: ["Astro", "React", "Tailwind"],
    codigo: "https://github.com/Elavat9000/Challenge-ONE-Data-Science-Telecom-X-parte-2",
    demo: "https://github.com/Elavat9000/Challenge-ONE-Data-Science-Telecom-X-parte-2/blob/main/Telecom_X_parte_2.ipynb",
  },
];

