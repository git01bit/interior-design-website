import Header from "./Header";
import { Link } from "react-router";
import img01 from "../assets/images/img-01.webp";

function Homepage() {
  return (
    <>
      <Header />

      {/* Contact us */}
      <section className="mt-16 flex flex-col items-center justify-center gap-8 md:flex-row">
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
    </>
  );
}

export default Homepage;
