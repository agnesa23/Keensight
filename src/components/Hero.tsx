import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/ai.png";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Generative AI Tools
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Generative AI tools are advanced software applications that use
              machine learning models to create new content, such as text,
              images, audio, or code. These tools analyze patterns from existing
              data to generate realistic and creative outputs, making them
              useful for tasks like content creation, design, automation, and
              problem-solving in various industries.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
            <a
    href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
    target="_blank"
    rel="noopener"
    className="flex items-center justify-center w-full sm:w-auto rounded-full bg-black px-4 py-4 text-white text-lg font-medium text-center duration-500 ease-in-out hover:bg-transparent hover:text-black hover:border border-black dark:hover:border-white dark:bg-white dark:text-black dark:hover:bg-gray-800 dark:hover:text-white"
  >
                Get Expert Advice
              </a>
              
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
  <div className="relative">
    <Image
      src={heroImg}
      width="616"
      height="617"
      className="object-cover rounded-full transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/20 dark:hover:shadow-white/30"
      alt="Hero Illustration"
      loading="eager"
      placeholder="blur"
    />
  </div>
</div>

      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            Trusted by <span className="text-gray-500">2000+</span> customers
            worldwide
          </div>

          <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AmazonLogo />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <VerizonLogo />
            </div>
        
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <NetflixLogo />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <SonyLogo />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

function AmazonLogo() {
  return (
    <div className="flex items-center justify-center space-x-1">
         <div className="w-[50px] h-[33px] flex items-center justify-center">
      <Image
        src="/img/ChatGPT-Logo.svg.png"
        alt="ChatGPT Logo"
        width={110} 
        height={33}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-lg font-semibold">Open AI</span>
 
  </div>
);

  }
 function VerizonLogo(){
  return (
    <div className="flex items-center justify-center space-x-0">
         <div className="w-[90px] h-[33px] flex items-center justify-center">
      <Image
        src="/img/nivida.png"
        alt=" Logo"
        width={110} 
        height={33}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-lg font-semibold">NIVIDA</span>
 
  </div>
);
 }

function NetflixLogo() {
  return (
    <div className="flex items-center justify-center space-x-0">
         <div className="w-[90px] h-[33px] flex items-center justify-center">
      <Image
        src="/img/anthropic.png"
        alt=" Logo"
        width={110} 
        height={33}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-lg font-semibold">Anthropic</span>
 
  </div>
);
}

function SonyLogo() {
  return (
    <div className="flex items-center justify-center space-x-0">
         <div className="w-[90px] h-[33px] flex items-center justify-center">
      <Image
        src="/img/mistral.png"
        alt=" Logo"
        width={110} 
        height={33}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-lg font-semibold">Mistral</span>
 
  </div>
);}


