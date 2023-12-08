import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandTypescript, TbBrandVite } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="flex justify-center space-x-4">
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <FaReact className="h-6 w-6" />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <TbBrandTypescript className="h-6 w-6" />
        </a>
        <a
          href="https://vitejs.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <TbBrandVite className="h-6 w-6" />
        </a>
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300"
        >
          <BiLogoTailwindCss className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
