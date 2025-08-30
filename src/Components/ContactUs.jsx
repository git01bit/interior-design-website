import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Header from "./Header";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
      <Header />

      <section className="mt-24">
        <h1 className="mb-6 text-center">تماس با ما</h1>

        {/* Contact info and form */}
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          {/* Contact info */}
          <div className="flex w-full flex-col gap-y-8 md:max-w-96">
            <div>
              <h3>نشانی:</h3>
              <p className="text-gray-400">
                تهران، میدان هارمونی، خیابان معمار، کوچه طراحی، مجتمع چیدمان،
                پلاک 24، واحد 3
              </p>
            </div>

            <div>
              <h3>تلفن:</h3>
              <p className="tracking-wider text-gray-400">2648-1537 (021)</p>
            </div>

            <div>
              <h3>فضای مجازی:</h3>
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
            </div>
          </div>

          {/* Contact form */}
          {/* GET for testing, use POST in real projects */}
          <form
            action="#"
            method="get"
            className="flex w-full flex-col gap-y-2 md:max-w-[480px]"
          >
            <input
              type="text"
              placeholder="نام"
              className="rounded-lg border border-gray-200 p-2 focus-visible:outline-1 focus-visible:outline-gray-400"
              name="name"
              id="name"
              required
            />
            <input
              type="tel"
              placeholder="شماره تماس"
              className="rounded-lg border border-gray-200 p-2 text-right focus-visible:outline-1 focus-visible:outline-gray-400"
              name="phone"
              id="phone"
              required
            />
            <textarea
              rows="8"
              placeholder="متن پیام"
              className="rounded-lg border border-gray-200 p-2 focus-visible:outline-1 focus-visible:outline-gray-400"
              name="message"
              id="message"
              required
            ></textarea>

            <button
              type="submit"
              className="cursor-pointer rounded-lg border border-teal-700 px-3 py-2 text-teal-700 transition-colors duration-300 ease-in-out hover:bg-teal-700 hover:text-white"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactUs;
