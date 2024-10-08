import React from "react";

const FeaturesSection = () => {
  return (
    <div className=" md:min-h-[80vh] bg-cover bg-center bg-no-repeat  ">
      <div class="max-w-screen-lg  mx-auto px-9 lg:px-1 flex flex-col justify-evenly ">
        <div class="text-center">
          <h3
            class="text-2xl lg:text-3xl leading-normal font-Makeba tracking-tight  mt-10 rounded-l-full rounded-t-full px-4 py-2 inline-block bg-gradient-to-r from-purple-400 to-indigo-400 text-white "
            style={{ boxShadow: "0 4px 6px rgb(75, 0, 130)" }}
          >
            Why choose Us?
          </h3>
        </div>
        <div class="mt-20  ">
          <ul class="grid grid-row-3 md:grid-cols-3  gap-5 md:gap-20 pb-10  ">
            <li class=" bg-indigo-300 opacity-85  p-6 pb-12 shadow-lg  text-center  rounded-xl  ">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      className="hover:-translate-y-1 duration-200 cursor-pointer"
                      height="40"
                      viewBox="0 0 400 400.00001"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m289.17578.73828125-234.794921 234.79491875-53.2812496 163.72852 164.0937506-55.0918 22.34375-22.34375c-9.85455-1.94269-28.78583-5.92502-29.31836-6.03711l-.35937.35938-73.556646-75.18164 204.873046-204.87305 74.36914 74.36914-47.36719 47.36719 4.01758 31.33789 78.70508-78.70508zm-7.34375 162.45507875c-11.05611 0-12.45377.08606-13.88476.85352-2.80482 1.50423-3.09475 2.68083-4.20118 16.98437-.55197 7.13569-1.1942 13.2064-1.42578 13.49023-.23159.28382-2.13818.99811-4.23828 1.58594-6.03381 1.68891-11.69943 3.96626-17.88476 7.19141-3.14922 1.64207-5.97835 2.98633-6.28711 2.98633-.30877 0-4.61449-3.4607-9.56641-7.69141-11.11936-9.49987-11.43298-9.74-13.29492-10.13477-2.66879-.56584-4.89229 1.02335-13.41602 9.59766-8.36863 8.4183-9.7126 10.33324-9.14258 13.02539.38328 1.81014.68292 2.20254 10.1211 13.22461 4.23171 4.94187 7.69336 9.24563 7.69336 9.56445 0 .31884-1.34231 3.15547-2.98438 6.30469-3.22515 6.18533-5.50446 11.85096-7.19336 17.88477-.58783 2.1001-1.30015 4.00865-1.58398 4.24023-.28381.23159-6.35455.87186-13.49024 1.42383-14.30355 1.10643-15.48208 1.39829-16.98632 4.20312-.76743 1.43098-.85352 2.82865-.85352 13.88477 0 11.05611.08607 12.45378.85352 13.88477 1.50044 2.79773 2.69934 3.09591 16.7539 4.17578 7.00828.53846 13.05856 1.07338 13.44531 1.1875.43455.12821 1.12642 1.75633 1.81055 4.26367 1.66587 6.10538 3.92856 11.76428 7.24414 18.12305 1.64207 3.1492 2.98438 5.98752 2.98438 6.30664 0 .31916-3.30556 4.44128-7.34571 9.16015-11.65484 13.6127-11.60613 13.5309-9.83789 17.1836 1.3983 2.8885 16.84905 18.06796 19.1543 18.81836 2.93431.9551 4.30546.12358 15.27149-9.25782l10.19531-8.7207 5.62695 2.95703c6.76863 3.5579 13.62157 6.32638 19.00195 7.67578 2.66963.6697 4.04759 1.24471 4.20118 1.75391.1257.4166.66636 6.4918 1.20312 13.5 1.07646 14.0551 1.37487 15.25381 4.17188 16.7539 1.43099.7674 2.82865.85352 13.88476.85352 11.05612 0 12.45377-.08602 13.88477-.85352 2.79701-1.49999 3.09541-2.6988 4.17187-16.7539.53675-7.0082 1.07711-13.07322 1.19922-13.47852.14718-.4887 1.8191-1.16551 4.96289-2.00781 5.869-1.5725 11.06771-3.68775 17.82813-7.25195 2.86525-1.5106 5.48634-2.7461 5.82421-2.7461.33789 0 4.66526 3.46256 9.61719 7.69336 4.95193 4.2306 9.69079 8.2241 10.53125 8.875 2.17122 1.6806 4.91776 1.67478 7.35742-.01562 3.10907-2.1544 16.76066-16.27107 17.54102-18.13867 1.32812-3.1787.83997-4.03656-8.63672-15.1543-4.81461-5.64827-8.7539-10.55333-8.7539-10.90039 0-.34705 1.23547-2.97458 2.74609-5.83984 3.56421-6.76043 5.67941-11.95913 7.25195-17.82813.84234-3.14379 1.51918-4.81765 2.00781-4.96484.40536-.12211 6.47025-.66052 13.47852-1.19727 14.05506-1.07646 15.25386-1.37486 16.75391-4.17187.76744-1.43099.85351-2.82866.85351-13.88477 0-11.05612-.08606-12.45379-.85351-13.88477-1.50521-2.80664-2.67885-3.09667-16.98438-4.19531-8.60801-.66108-13.18016-1.19339-13.58398-1.58203-.33475-.32217-1.01315-2.16672-1.50782-4.09766-1.35089-5.2733-3.84646-11.49185-7.17578-17.87695-1.64207-3.14922-2.98632-5.99756-2.98632-6.33008 0-.33253 3.83418-5.08198 8.51953-10.55468 9.17539-10.71724 10.01241-12.10688 9.05859-15.03711-.7456-2.29059-15.93135-17.7554-18.79688-19.14258-3.44221-1.66634-4.0853-1.31792-15.53124 8.41797-5.661 4.81523-10.54492 8.75586-10.85352 8.75586s-3.14724-1.34989-6.30859-3c-6.1887-3.23026-13.41037-6.10053-18.79493-7.47071-2.05924-.524-3.44228-1.13073-3.57031-1.56445-.11495-.38933-.64903-6.44095-1.1875-13.44922-1.07987-14.05457-1.37999-15.25347-4.17773-16.7539-1.43099-.76744-2.82865-.85352-13.88477-.85352zm1.17969 66.8125c11.05233.22693 22.03213 3.99394 31.21094 11.33789 16.12823 12.90419 22.87964 33.66659 17.62695 54.20898-1.33842 5.23432-5.81759 14.00331-9.50195 18.59961-8.37117 10.44313-20.25698 17.15112-33.79688 19.07618-2.96432.42142-10.1363.56511-11.81445.23632-.38228-.07488-2.25857-.39049-4.16992-.70117-6.48652-1.05445-13.78867-4.01166-19.69336-7.97656-16.15862-10.85014-25.15064-30.74763-22.45703-49.69336 1.76991-12.44887 8.20734-24.49261 17.25-32.27539 10.20064-8.77943 22.81973-13.06969 35.3457-12.8125zm-212.119142 35.63672 62.787112 62.78711-60.013674 20.28125-22.451172-22.44922z" />
                    </svg>
                  </div>
                </div>
                <div class="mt-4  ">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">
                    Customizable Experiences
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-700 mb-5">
                    We offer tailored travel solutions designed to meet your
                    unique preferences. From personalized itineraries to
                    exclusive destination options, we ensure your journey is
                    perfectly aligned with your desires.
                  </p>
                </div>
              </div>
            </li>
            <li class=" bg-indigo-300 opacity-85 p-5 pb-10 text-center mt-8 md:mt-0 shadow-lg rounded-xl">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      className="hover:-translate-y-1 duration-200 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      height="50"
                      viewBox="0 0 24 24"
                      width="50"
                    >
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z" />
                      <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
                    </svg>
                  </div>
                </div>
                <div class="mt-4">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">
                    Exceptional Speed and Efficiency
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-700 mb-5">
                    Our service is built for speed, providing quick and seamless
                    booking experiences. Enjoy prompt responses and fast
                    processing times, so you can focus on planning your
                    adventures without delays.
                  </p>
                </div>
              </div>
            </li>
            <li class=" bg-indigo-300 opacity-85 p-5 pb-10 text-center mt-8 md:mt-0 shadow-lg rounded-xl">
              <div class="flex flex-col items-center">
                <div class="flex-shrink-0 relative top-0 -mt-16">
                  <div class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                    <svg
                      className="hover:-translate-y-1 duration-200 cursor-pointer"
                      enable-background="new 0 0 20 20"
                      height="50"
                      viewBox="0 0 20 20"
                      width="50"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m0 0h20v20h-20z" fill="none" />
                      <path d="m15.71 13.21-3.46-3.46 1.33-1.33-2-2-1.33 1.33-3.46-3.46c-.39-.39-1.03-.39-1.42 0l-1.08 1.08c-.39.39-.39 1.03 0 1.42l3.46 3.46-3.75 3.75v1.5c0 .28.22.5.5.5h1.5l3.75-3.75 3.46 3.46c.39.39 1.02.39 1.41 0l1.08-1.08c.4-.39.4-1.03.01-1.42zm-7.25-3.67-3.46-3.46 1.08-1.08.69.69-.21.21c-.18.18-.18.48 0 .67.18.18.48.18.67 0l.21-.21 1.06 1.06-.22.2c-.18.18-.18.48 0 .67.18.18.48.18.67 0l.21-.21.38.38zm5.46 5.46-3.46-3.46 1.08-1.08.4.4-.21.21c-.18.18-.18.48 0 .67.18.18.48.18.67 0l.21-.21 1.06 1.06-.21.21c-.18.18-.18.48 0 .67.18.18.48.18.67 0l.21-.21.66.66z" />
                      <path d="m15.62 6.38c.2-.2.2-.51 0-.71l-1.29-1.29c-.2-.2-.51-.2-.71 0l-1.34 1.34 2 2z" />
                    </svg>
                  </div>
                </div>
                <div class="mt-4">
                  <h4 class="text-lg leading-6 font-semibold text-gray-900">
                    Comprehensive Solutions
                  </h4>
                  <p class="mt-2 text-base leading-6 text-gray-700">
                    We provide a full range of travel services all in one place.
                    From initial planning to final booking, everything you need
                    is available right here, with no additional installations or
                    setups required.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
