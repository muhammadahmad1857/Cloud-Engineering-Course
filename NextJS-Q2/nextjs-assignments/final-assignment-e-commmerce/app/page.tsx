import Image from "next/image";
import { FiShoppingCart } from "react-icons/fi";
import SectionHeading from "./(components)/sectionHeading";
import ProductsShowCase from "./(components)/productsShowCase";
import CustomLayout from "./(components)/customLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="relative mb-16 mt-10 flex flex-col-reverse items-center max-md:gap-10 md:flex-row md:items-start md:justify-between">
        {/* Content Section */}
        <div className="flex h-[600px] flex-1 flex-col justify-between text-center md:ml-8 md:text-left">
          {" "}
          {/* Match the height of the hero image */}
          <div>
            <p className="mx-auto h-10 w-32 content-center rounded-md bg-[#E1EDFF] text-center text-[#0000FF] md:mx-0">
              Sale 70%
            </p>
            <h1 className="mt-4 font-[sora] text-3xl font-bold leading-tight md:text-5xl">
              An Industrial Take on Streetwear
            </h1>
            <p className="pt-4 font-[sora] text-base font-normal md:text-lg">
              Anyone can beat you but no one can beat your outfit as long as you
              wear Dine outfits.
            </p>
            <Link href={"/products"}>
              <button className="mt-8 rounded-lg bg-black px-6 py-3 text-white transition-colors duration-300 hover:bg-gray-800">
                {" "}
                <FiShoppingCart className="mr-2 inline h-6 w-6" />
                Start Shopping
              </button>
            </Link>
          </div>
          {/* Container for Brand Logos */}
          <div className="mt-auto flex flex-wrap justify-center gap-6 pt-10 md:justify-start">
            <Image
              src="/bazaar.png"
              alt="Bazaar"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/bustle.png"
              alt="Bustle"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/versace.png"
              alt="Versace"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
            <Image
              src="/instyle.png"
              alt="InStyle"
              width={100}
              height={35}
              className="cursor-pointer transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>

        <div className="relative flex items-center justify-center rounded-full bg-[#FFECE3] md:w-1/2 md:flex-none">
          <Image
            src="/hero.png"
            alt="Model"
            width={600}
            height={600}
            className="h-full w-full scale-110 cursor-pointer rounded-full transition-transform duration-1000 hover:scale-100 hover:shadow-lg hover:shadow-[#FFECE3]"
          />
        </div>
      </header>
      <SectionHeading heading="our promotion events" title="promotions" />
      <main className="mt-5 grid grid-cols-2 gap-4 font-[sora] md:grid-cols-4">
        <div className="order-1 col-span-2 flex cursor-pointer items-center justify-center bg-[#D6D6D8] sm:gap-32 md:order-1">
          <div className="px-2 text-center">
            <h1 className="text-nowrap text-xl font-bold uppercase sm:text-2xl">
              get up to{" "}
              <span className="text-2xl font-extrabold sm:text-3xl">60%</span>
            </h1>
            <p>For the summer season</p>
          </div>
          <div>
            <Image
              src="/event-banner-img1.png"
              height={200}
              width={260}
              alt="Banner model"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-3 row-span-2 cursor-pointer bg-[#EFE1C7] md:order-2">
          <div className="p-4">
            <p className="text-base">Flex Sweatshirt</p>
            <p className="flex items-center gap-3 font-semibold">
              <span className="font-normal line-through">$100.00 </span> $75.00
            </p>
          </div>
          <div>
            <Image
              src="/horizantalbanner1.png"
              height={340}
              width={280}
              alt="horizantal banner model 1"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-4 row-span-2 cursor-pointer bg-[#D7D7D9] md:order-3">
          <div className="p-4">
            <p className="text-base">Flex Push Button </p>
            <p className="flex items-center gap-3 font-semibold">
              <span className="font-normal line-through">$225.00</span> $190.00
            </p>
          </div>
          <div>
            <Image
              src="/horizantalbanner2.png"
              height={340}
              width={280}
              alt="horizantal banner model 1"
              className="transition-transform duration-500 hover:scale-90"
            />
          </div>
        </div>

        <div className="order-2 col-span-2 flex cursor-pointer flex-col items-center justify-center bg-[#212121] p-4 text-white md:order-4">
          <p className="mt-3 text-4xl font-extrabold">GET 30% Off</p>
          <p className="mt-5 text-sm uppercase">use promo code</p>
          <button className="rounded-lg bg-[#474747] px-4 py-5 uppercase transition-colors duration-500 hover:bg-[#3d3c3c]">
            dineweekendsale
          </button>
        </div>
      </main>
      <CustomLayout>
        <ProductsShowCase />
      </CustomLayout>
      <div>
        <h1 className="mt-12 text-center font-[sora] text-2xl font-bold mob:text-end mob:text-3xl tab:text-5xl">
          Unique and Authentic Vintage Designer Jewellery
        </h1>
      </div>
      <div className="mt-6 flex flex-col items-center gap-8 font-[sora] xl:flex-row xl:justify-between">
        <div className="relative grid grid-cols-1 gap-y-10 max-xl:place-items-center sm:grid-cols-2 xl:w-1/2">
          <p className="pointer-events-none absolute left-1/2 top-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 transform text-center text-5xl font-bold uppercase tracking-widest text-[#F2F3F7] sm:text-6xl lg:text-[76px]">
            Different <br /> from <br /> others
          </p>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Using Good Quality Materials
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              100% Handmade Products
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Modern Fashion Design
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
          <div className="w-72">
            <h1 className="text-lg font-semibold sm:text-xl">
              Discount for Bulk Orders
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 xl:w-1/2 xl:flex-row">
          <Image
            src="/design-section.png"
            alt="Design Section"
            width={300}
            height={300}
            className="h-full w-full object-cover sm:w-80"
          />
          <div className="text-center xl:text-left">
            <p className="font-light">
              This piece is ethically crafted in our small family-owned workshop
              in Peru with unmatched attention to detail and care. The Natural
              color is the actual natural color of the fiber, undyed and 100%
              traceable.
            </p>
            <Link href={"/products"}>
              <button className="mt-6 rounded-md capitalize bg-black px-5 py-3 font-semibold text-white transition-colors duration-500 hover:bg-[#2b2929]">
                See All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
