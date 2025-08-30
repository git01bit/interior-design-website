import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-y-2 border-t border-gray-200 pt-4 md:flex-row">
      <div className="flex gap-x-3 text-gray-400">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon="fa-brands fa-instagram"
            size="xl"
            className="transition-colors duration-300 ease-in-out hover:text-teal-700"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon="fa-brands fa-youtube"
            size="xl"
            className="transition-colors duration-300 ease-in-out hover:text-teal-700"
          />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon="fa-brands fa-x-twitter"
            size="xl"
            className="transition-colors duration-300 ease-in-out hover:text-teal-700"
          />
        </a>
      </div>

      <p className="text-sm text-gray-400">
        این صفحه با هدف تمرین و یادگیری طراحی شده است.
      </p>
    </footer>
  );
}

export default Footer;
