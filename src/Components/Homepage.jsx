import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router";

import img01 from "../assets/images/img-01.webp";
import img02 from "../assets/images/img-02.webp";
import img03 from "../assets/images/img-03.webp";
import img04 from "../assets/images/img-04.webp";
import img05 from "../assets/images/img-05.webp";
import img06 from "../assets/images/img-06.webp";
import img07 from "../assets/images/img-07.webp";

function Homepage() {
  return (
    <>
      <Header />

      {/* Contact us */}
      <section className="mt-24 flex flex-col items-center justify-center gap-8 md:flex-row">
        <img src={img01} alt="Interior Design Image 01" />

        <div className="max-w-[480px]">
          <h2>خلق فضاهایی فراتر از زیبایی</h2>
          <p className="mt-1">
            هر فضای داخلی، داستانی منحصر به فرد را روایت می‌کند؛ ما با هنر،
            خلاقیت و دقت، محیطی خلق می‌کنیم که نه تنها زیباست، بلکه احساس آرامش
            و الهام را در دل شما زنده می‌کند. طراحی داخلی ما فراتر از ظاهر است؛
            ما فضایی می‌سازیم که زندگی شما را به بهترین شکل ممکن بازتاب دهد و هر
            گوشه‌اش نشان‌دهنده ذوق و شخصیت شما باشد.
          </p>

          <Link className="mt-6 inline-block w-full max-w-40 border border-teal-700 px-3 py-2 text-center text-xl text-teal-700 transition-colors duration-150 ease-in-out hover:bg-teal-700 hover:text-white">
            تماس با ما
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section className="mt-24 flex flex-col justify-center gap-y-4">
        <h2 className="text-center">گالری آثار</h2>

        <div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="row-span-4 overflow-hidden">
            <img
              src={img02}
              alt="Interior Design Image 02"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="row-span-3 overflow-hidden">
            <img
              src={img03}
              alt="Interior Design Image 03"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="row-span-4 overflow-hidden">
            <img
              src={img04}
              alt="Interior Design Image 04"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="row-span-3 overflow-hidden md:row-start-5">
            <img
              src={img05}
              alt="Interior Design Image 05"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="row-span-4 overflow-hidden">
            <img
              src={img06}
              alt="Interior Design Image 06"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
          <div className="row-span-3 overflow-hidden">
            <img
              src={img07}
              alt="Interior Design Image 07"
              className="transition-all duration-700 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Homepage;
