// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/components/LanguageContext";
import { translations } from "@/lib/translations";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading,
  logos = [
    {
      id: "logo-1",
      description: "24/7 logo",
      image: "/images/Clientlogos/24-7.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-2",
      description: "AlRabeh HR logo",
      image: "/images/Clientlogos/alrabeh-hr-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-3",
      description: "AlRabeh International logo",
      image: "/images/Clientlogos/Alrabeh-INT.svg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-4",
      description: "Badash logo",
      image: "/images/Clientlogos/badash.jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-5",
      description: "Bila logo",
      image: "/images/Clientlogos/Bila-Logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-6",
      description: "Dar Ward logo",
      image: "/images/Clientlogos/dar-ward.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-7",
      description: "Najd Hall logo",
      image: "/images/Clientlogos/najd-hall.png",
      className: "h-12 w-auto",
    },
    {
      id: "logo-8",
      description: "SANS logo",
      image: "/images/Clientlogos/sans-logo-new.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-9",
      description: "Tarqeem logo",
      image: "/images/Clientlogos/Tarqeem.jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-10",
      description: "Absher logo",
      image: "/images/Clientlogos/absher.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-11",
      description: "Al Amor logo",
      image: "/images/Clientlogos/al-amor.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-12",
      description: "Alma Water logo",
      image: "/images/Clientlogos/alma-water.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-13",
      description: "Black Parking logo",
      image: "/images/Clientlogos/black-parking.jpg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-14",
      description: "Chill Lounge logo",
      image: "/images/Clientlogos/chill-lounge.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-15",
      description: "Cornet logo",
      image: "/images/Clientlogos/cornet.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-16",
      description: "Deva logo",
      image: "/images/Clientlogos/deva-logo-1.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-17",
      description: "Exefai logo",
      image: "/images/Clientlogos/exafai.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-18",
      description: "FRVR Lab logo",
      image: "/images/Clientlogos/frvr-lab.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-19",
      description: "IFBS logo",
      image: "/images/Clientlogos/ifbs.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-20",
      description: "Maple logo",
      image: "/images/Clientlogos/maple.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-21",
      description: "Mawj logo",
      image: "/images/Clientlogos/mawj-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-22",
      description: "Nongshim logo",
      image: "/images/Clientlogos/nongshim.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-23",
      description: "Nozol In logo",
      image: "/images/Clientlogos/nozol-in.svg",
      className: "h-20 w-auto",
    },
    {
      id: "logo-24",
      description: "Pharo logo",
      image: "/images/Clientlogos/pharo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-25",
      description: "Qasr El Seyooh logo",
      image: "/images/Clientlogos/qasr-el-seyooh.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-26",
      description: "Saeq logo",
      image: "/images/Clientlogos/saeq.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-27",
      description: "Sand Brew logo",
      image: "/images/Clientlogos/sand-brew.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-28",
      description: "Seet logo",
      image: "/images/Clientlogos/seet-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-30",
      description: "Swissotel logo",
      image: "/images/Clientlogos/swissotel.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-31",
      description: "Tayseer logo",
      image: "/images/Clientlogos/tayseer.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-32",
      description: "Veagle logo",
      image: "/images/Clientlogos/veagle-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-33",
      description: "Ze logo",
      image: "/images/Clientlogos/ze-logo.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-34",
      description: "Client logo",
      image: "/images/Clientlogos/group-18812.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-35",
      description: "Client logo",
      image: "/images/Clientlogos/group-59634.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-36",
      description: "Client logo",
      image: "/images/Clientlogos/images-1.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-37",
      description: "Client logo",
      image: "/images/Clientlogos/layer-1-2.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-38",
      description: "Amancool logo",
      image: "/images/Clientlogos/amancool.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-39",
      description: "Saudi Tech logo",
      image: "/images/Clientlogos/logosaudi-tech-2.png",
      className: "h-20 w-auto",
    },
    {
      id: "logo-40",
      description: "Mayasem logo",
      image: "/images/Clientlogos/mayasem-logo-1.png",
      className: "h-20 w-auto",
    },
  ],
}: Logos3Props) => {
  const { language, dir } = useLanguage();
  const t = translations[language];
  const displayHeading = heading || t.logos.heading;

  return (
    <section style={{ padding: "60px 0 80px", borderTop: "1px solid var(--border)" }}>
      <div className="container mx-auto text-center">
        <h3 style={{ textAlign: "center", fontSize: "clamp(22px, 2.6vw, 32px)", color: "var(--text-2)", fontWeight: 600, marginBottom: "44px" }}>
          {displayHeading}
        </h3>
      </div>
      <div style={{ paddingTop: "10px" }}>
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true, direction: dir }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
