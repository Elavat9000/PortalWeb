import imgNote from "../assets/img-projects/Utel.png";
import imgRemolques from "../assets/img-projects/Pagina de Remolques.png";
import imgRemolquesAlt from "../assets/img-projects/Pagina de remolques1.png";
import imgPortfolio from "../assets/img-projects/AnalisisDatos.png";



export const proyectos = [
  {
    titulo: "App con Tkinter Python",
    imagen: imgNote.src,
    tecnologias: ["React", "Tailwind", "Express", "MongoDB"],
    codigo: "https://github.com/Lautaro-R-collins/Front-react-todo",
  },
  {
    titulo: "Página de Remolques",
    imagen: imgRemolques.src,
    tecnologias: ["Astro", "Tailwind", "JavaScript"],
    codigo: "https://github.com/tu-repo/remolques",
  },
  {
    titulo: "Página de Remolques (Landing)",
    imagen: imgRemolquesAlt.src,
    tecnologias: ["HTML", "CSS", "JavaScript"],
    codigo: "https://github.com/tu-repo/remolques-landing",
  },
  {
    titulo: "Analisis de Datos",
    imagen: imgPortfolio.src,
    tecnologias: ["Astro", "React", "Tailwind"],
    codigo: "https://github.com/tu-repo/portfolio",
  },
];

