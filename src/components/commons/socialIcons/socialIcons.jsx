import {
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="my-5 flex items-center justify-center">
      <a
        href="https://www.linkedin.com/in/francisco-javier-cervantes-mendieta-327575213/"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Linkedin"
      >
        <FaLinkedinIn className="h-7 w-7" />
      </a>

      <a
        href="https://github.com/Elavat9000"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="Github"
      >
        <FaGithub className="h-7 w-7" />
      </a>

      <a
        href="https://wa.me/5215630150637?text=Hola%20quiero%20más%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="mx-3 text-zinc-400 hover:text-[#69c7c7] drop-shadow-[1px_1px_0_#7836cf]"
        aria-label="WhatsApp"
      >
      <FaWhatsapp className="h-7 w-7" />
      </a>

    </div>
  );
};

export default SocialIcons;
