import React from "react";

export default function Home() {
  return (
    <div className="px-10 md:px-20 xl:px-40 2xl:px-60 py-20 md:py-40 xl:py-48 overflow-hidden">
      <h1
        className="text-2xl md:text-4xl font-medium"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1500"
      >
        Carl Justine Mosquida
      </h1>
      <h2
        className="text-xl md:text-2xl text-gray-400 md:pt-2"
        data-aos="fade-up"
        data-aos-delay="1000"
        data-aos-duration="1500"
      >
        Software Engineer
      </h2>

      {/* About */}
      {/* <div className="pt-60 md:grid grid-cols-4">
        <div className=" col-span-1" data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1500">
          <p>about</p>
        </div>
        <div className=" col-span-1" data-aos="fade-left"
          data-aos-delay="1000"
          data-aos-duration="1500">
          <p>about</p>
        </div>
        <div className="col-span-2 text-sm">
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eaque
            ab aperiam, aliquam ut facere magnam animi autem quis iusto
            aspernatur illo impedit culpa sapiente, mollitia expedita sint
            eveniet? Blanditiis?
          </p>

          <p className="pt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi eaque
            ab aperiam, aliquam ut facere magnam animi autem quis iusto
            aspernatur illo impedit culpa sapiente, mollitia expedita sint
            eveniet? Blanditiis?
          </p>
        </div>
      </div> */}

      {/* Projects */}
      <div className="pt-40 md:grid grid-cols-4">
        <div
          className=" col-span-1"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <p className="font-bold pt-6">Projects</p>
        </div>
        <div className=" col-span-3">
          <div className="grid grid-cols-3 gap-10">
            {/* 1st Project */}
            <div
              className=" col-span-1"
              data-aos="fade-left"
              data-aos-delay="1000"
              data-aos-duration="1500"
            >
              <small className="pl-8 text-gray-400">Publishing Platform</small>

              <p className="font-semibold flex gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="33.785"
                    height="29.562"
                    viewBox="0 0 33.785 29.562"
                    className="w-6 h-6"
                  >
                    <path
                      id="Path_117"
                      data-name="Path 117"
                      d="M11.613,33.584A1.58,1.58,0,0,1,13.2,32h1.056a1.584,1.584,0,1,1,0,3.167H13.2A1.58,1.58,0,0,1,11.613,33.584ZM13.2,36.751h1.056a1.584,1.584,0,1,1,0,3.167H13.2a1.584,1.584,0,1,1,0-3.167ZM3.7,41.5H4.751a1.584,1.584,0,1,1,0,3.167H3.7a1.584,1.584,0,1,1,0-3.167ZM0,48.589a1.811,1.811,0,0,1,1.808-1.808H31.977a1.811,1.811,0,0,1,1.808,1.808,10.867,10.867,0,0,1-7.041,10.168l-.119.957a2.11,2.11,0,0,1-2.1,1.848H9.251a2.115,2.115,0,0,1-2.1-1.848l-.119-.95A10.886,10.886,0,0,1,0,48.589Zm14.781-5.5A1.58,1.58,0,0,1,16.364,41.5H17.42a1.584,1.584,0,1,1,0,3.167H16.364A1.58,1.58,0,0,1,14.781,43.086Zm-6.335,0A1.58,1.58,0,0,1,10.03,41.5h1.056a1.584,1.584,0,1,1,0,3.167H10.03A1.58,1.58,0,0,1,8.446,43.086ZM6.862,36.751H7.918a1.584,1.584,0,1,1,0,3.167H6.862a1.584,1.584,0,1,1,0-3.167Zm14.253,6.335A1.58,1.58,0,0,1,22.7,41.5h1.056a1.584,1.584,0,1,1,0,3.167H22.7A1.58,1.58,0,0,1,21.115,43.086Zm-1.584-6.335h1.056a1.584,1.584,0,1,1,0,3.167H19.532a1.584,1.584,0,1,1,0-3.167Zm7.918,6.335A1.58,1.58,0,0,1,29.034,41.5h1.056a1.584,1.584,0,1,1,0,3.167H29.034A1.58,1.58,0,0,1,27.45,43.086Zm-1.584-6.335h1.056a1.584,1.584,0,1,1,0,3.167H25.866a1.584,1.584,0,1,1,0-3.167ZM19.532,32h1.056a1.584,1.584,0,1,1,0,3.167H19.532a1.584,1.584,0,1,1,0-3.167Z"
                      transform="translate(0 -32)"
                      fill="#b04209"
                    />
                  </svg>
                </i>
                Recipe Builders
              </p>
            </div>
            <div className="col-span-2">
              <p
                className="pt-6 text-sm"
                data-aos="fade-left"
                data-aos-delay="1200"
                data-aos-duration="1500"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                eaque ab aperiam, aliquam ut facere magnam animi autem quis
                iusto aspernatur illo impedit culpa sapiente, mollitia expedita
                sint eveniet? Blanditiis?
              </p>
            </div>

            {/* 2nd Project */}
            <div
              className=" col-span-1 pt-10"
              data-aos="fade-left"
              data-aos-delay="1400"
              data-aos-duration="1500"
            >
              <small className="pl-8 text-gray-400">Ecommerce Shop</small>
              <p className="font-semibold flex gap-2">
                <i>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-orange-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </i>
                OneShop
              </p>
            </div>
            <div className="col-span-2 text-sm">
              <p
                className="pt-11"
                data-aos="fade-left"
                data-aos-delay="1600"
                data-aos-duration="1500"
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
                eaque ab aperiam, aliquam ut facere magnam animi autem quis
                iusto aspernatur illo impedit culpa sapiente, mollitia expedita
                sint eveniet? Blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact  */}
      <div className="pt-60 md:grid grid-cols-4">
        <div
          className=" col-span-1"
          data-aos="fade-left"
          // data-aos-delay="500"
          data-aos-duration="1500"
        >
          <p className="font-bold">Connect</p>
        </div>
        <div className="text-sm col-span-3">
          <a
            href="mailto:mosquidacarljustine@gmail.com"
            className="flex gap-2 transform"
            data-aos="fade-left"
            data-aos-delay="1000"
            data-aos-duration="1500"
          >
            mosquidacarljustine@gmail.com
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </i>
          </a>

          <a
            href="https://linkedin.com/in/carl-justine-mosquida"
            className="flex gap-2 pt-8"
            data-aos="fade-left"
            data-aos-delay="1200"
            data-aos-duration="1500"
          >
            linkedin.com/in/carl-justine-mosquida
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </i>
          </a>

          <a
            href="https://github.com/mosquida"
            className="flex gap-2 pt-8"
            data-aos="fade-left"
            data-aos-delay="1400"
            data-aos-duration="1500"
          >
            github.com/mosquida
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </i>
          </a>
        </div>
      </div>
    </div>
  );
}
