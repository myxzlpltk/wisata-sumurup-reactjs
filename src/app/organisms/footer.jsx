import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Image from "react-image-webp";
import Space from "../components/space";

const Footer = () => {
  return (
    <footer
      id="contact"
      aria-label="Site Footer"
      className="bg-gray-900 text-white lg:grid lg:grid-cols-5"
    >
      <div className="hidden lg:relative lg:col-span-2 lg:block">
        <Image
          src="/images/footer.jpg"
          webp="/images/footer.webp"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="px-4 py-12 sm:px-6 lg:col-span-3 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          <div>
            <p className="font-medium text-xs uppercase tracking-widest">
              <span>Built with </span>
              <FontAwesomeIcon icon={faHeart} className="text-red-500" />
              <span> and </span>
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-300"
                title="ReactJS"
              />
              <span> by</span>
            </p>
            <a
              href="https://github.com/myxzlpltk"
              className="block text-2xl hover:opacity-75 sm:text-3xl"
            >
              @myxzlpltk
            </a>

            <ul className="mt-8 text-sm">
              <li>Kuliah Kerja Nyata Reguler</li>
              <li>Universitas Negeri Malang</li>
            </ul>
          </div>

          <div>
            <p className="font-medium">Tautan Penting</p>

            <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300">
              <a
                className="hover:opacity-75"
                href="https://sumurup-bendungan.trenggalekkab.go.id/"
              >
                Situs Web Desa Sumurup
              </a>
              <a
                className="hover:opacity-75"
                href="https://instagram.com/kedung.gede"
              >
                Instagram Kedung Gede
              </a>
              <a className="hover:opacity-75" href="https://kkn.lp2m.um.ac.id">
                LP2M Universitas Negeri Malang
              </a>
              <a
                className="hover:opacity-75"
                href="https://www.instagram.com/kknreg.um_sumurup22/"
              >
                KKN Reguler UM 2022
              </a>
            </nav>
          </div>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-6">
          <p className="text-xs text-gray-500 max-w-md">
            Apabila terdapat perubahan pada data maupun pengembangan lebih
            lanjut, silahkan hubungi developer situs web ini melalui email
            <Space />
            <a href="mailto:myxzlpltk@gmail.com" className="text-blue-500">
              myxzlpltk@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
