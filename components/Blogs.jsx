import Image from "next/image";
import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import img1 from "../public/images/blog1.png";
import img2 from "../public/images/blog2.png";
import img3 from "../public/images/blog3.png";
const Blogs = () => {
  return (
    <div className="bg-[#080C10] w-full">
      <header>
        <MainHeader />
      </header>

      <main className="flex flex-col xl:max-w-[1280px]">
        <h1 className="font-poppins font-semibold text-center xs:text-[48px] text-[38px] text-white xs:leading-[76.8px] leading-[66.8px] my-10 w-full">
          Blog financiero
        </h1>
        <div className="flex flex-col gap-[3rem]">
          <div className="flex flex-col lg:flex-row items-center">
            <Image src={img1} className="w-full max-w-[600px] p-4" alt="/" />
            <div>
              <h3 className="text-[#01A78A] text-center text-3xl m-10">
                Los mercados siguen creciendo
              </h3>

              <p className="font-poppins font-normal text-gray-300 text-justify text-[16px] ss:text-[18px] leading-[30.8px] px-2">
                La Reserva Federal de los Estados Unidos (FED) ha estado
                aumentando los tipos de interés en los últimos meses, una medida
                que históricamente ha tenido un impacto negativo en la bolsa.
                Sin embargo, a pesar de estos aumentos, el mercado de valores ha
                continuado creciendo a un ritmo constante. Hay varias razones
                por las que la bolsa ha sido resistente a los aumentos de los
                tipos de interés. En primer lugar, la economía estadounidense se
                ha mantenido sólida, con un crecimiento constante y una tasa de
                desempleo baja. Esto ha aumentado la confianza de los inversores
                en el mercado y les ha dado más disposición a invertir en él, lo
                que ha impulsado su crecimiento. Además, la FED ha sido muy
                clara en su comunicación con respecto a sus objetivos y su
                enfoque en el control de la inflación. Esto ha ayudado a calmar
                los temores de los inversores de que la FED pueda aumentar
                demasiado los tipos de interés, lo que podría tener un impacto
                negativo en la economía y en la bolsa.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <Image src={img2} className="w-full max-w-[600px] p-4" alt="/" />
            <div>
              <h3 className="text-[#01A78A] text-center text-3xl m-10">
                La inteligencia artificial en nuestras finanzas
              </h3>

              <p className="font-poppins font-normal text-gray-300 text-justify text-[16px] ss:text-[18px] leading-[30.8px] px-2">
                La inteligencia artificial (IA) es una tecnología que está
                cambiando la forma en que vivimos y trabajamos. La IA está
                revolucionando la industria financiera, y es probable que tenga
                un impacto significativo en nuestras finanzas personales en el
                futuro. Por un lado, la IA está ayudando a los consumidores a
                tomar decisiones financieras más informadas. Por ejemplo, muchas
                aplicaciones y servicios financieros ofrecen herramientas de IA
                que permiten a los usuarios comparar productos financieros,
                predecir gastos futuros y optimizar sus carteras de inversión.
                Estos servicios ayudan a los consumidores a tomar decisiones más
                informadas y efectivas sobre sus finanzas personales. Además, la
                IA está cambiando la forma en que se realiza el seguimiento y la
                gestión de las inversiones. Los fondos de inversión y las
                gestoras de patrimonios están utilizando la IA para automatizar
                la identificación y seguimiento de las tendencias del mercado,
                así como para mejorar la eficiencia y la precisión de las
                operaciones financieras.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center">
            <Image src={img3} className="w-full max-w-[600px] p-4" alt="/" />
            <div>
              <h3 className="text-[#01A78A] text-center text-3xl m-10">
                La historia detrás del crecimiento constante del SP500 en Wall
                Street
              </h3>

              <p className="font-poppins font-normal text-gray-300 text-justify text-[16px] ss:text-[18px] leading-[30.8px] px-2">
                El índice Standard & Poor&apos;s 500 (SP500) es uno de los índices 
                bursátiles más importantes y ampliamente seguidos en el mundo.
                Este índice mide el rendimiento de las 500 mayores empresas
                cotizadas en bolsa en Estados Unidos, y se utiliza comúnmente
                como un indicador del rendimiento general del mercado de
                valores. Desde su creación en 1923, el SP500 ha experimentado un
                crecimiento impresionante a lo largo de los años. Durante el
                siglo XX, el índice se multiplicó por más de 20 veces su valor
                inicial. En los últimos 30 años, el SP500 ha experimentado una
                tasa de crecimiento anual compuesta de alrededor del 7% por año.
                Sin embargo, el crecimiento del SP500 no ha sido uniforme a lo
                largo de los años. El índice ha experimentado varias crisis y
                períodos de incertidumbre, incluyendo la Gran Depresión, la
                crisis de los años 80, la crisis financiera de 2008 y la
                recesión actual. A pesar de estos altibajos, el SP500 ha
                continuado creciendo a largo plazo.
              </p>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <MainFooter />
      </footer>
    </div>
  );
};

export default Blogs;
