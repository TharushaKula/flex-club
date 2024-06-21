import "./App.css";
import Logo from "./assets/logo.png";
import heroImage from "./assets/heroImg.png";
import heroImage2 from "./assets/heroImg2.png";
import heroImage3 from "./assets/heroImg3.png";
import heroImage4 from "./assets/heroImg4.png"

function App() {
  return (
    <div className="grid grid-cols-1">
      <nav className="navbar container">
        <div className="logo flex justify-start">
          <div className="h-20 w-48">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        <div className="navContent">
          <h1 className="p-5">Home</h1>
          <h1 className="p-5"> About Us</h1>
          <h1 className="p-5">Classes</h1>
          <h1 className="p-5">Membership</h1>
        </div>
        <div className="login flex justify-end">
          <div className="h-16 w-40 bg-violet-900 text-white rounded-md">
            Get Started
          </div>
        </div>
      </nav>

      <section className="pt-16">
        <div className="container">
          <div className="hero">
            <div className="herodiv1 pb-40">
              <p className="text-xl pb-4">WE ARE THE BEST</p>
              <h1 className="text-7xl font-bold">
                The Best Fitness <br /> Studio In Your Town
              </h1>
              <p className="pt-7 text-lg text-slate-600">
                Seize the opportunity! It's time to get in <br /> the best shape
                of your life
              </p>
              <h4 className="pt-10 text-xl">
                <span className="border pr-11 pl-11 pt-4 pb-4 rounded-lg bg-violet-900 text-white font-bold">
                  Join Now
                </span>{" "}
                30 blah blah blah
              </h4>
            </div>
            <div className="herodiv2">
              <div className="w-full h-full">
                <img src={heroImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container grid grid-cols-[repeat(4,1fr)]">
          <div className="flex justify-start ">
            <h1 className="text-4xl font-bold">
              Training <br /> Programs <br /> We Offer For You
            </h1>
          </div>
          <div className="flex flex-col items-start rounded-l-xl  bg-[#fdd595] pt-10 pb-10 px-9">
            <span className="flex items-center text-3xl pb-7 font-medium gap-5">
              Yoga{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d51515"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-flower-2"
              >
                <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
                <circle cx="12" cy="8" r="2" />
                <path d="M12 10v12" />
                <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
                <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
              </svg>
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            dolor. Dolore, provident quos, tempora aliquid minus{" "}
          </div>
          <div className="flex flex-col items-start bg-[#fdd595] pt-10 pb-10 px-9">
            <span className="flex items-center text-3xl pb-7 font-medium gap-5">
              Fitness{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d51515"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-activity"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            dolor. Dolore, provident quos, tempora aliquid minus{" "}
          </div>
          <div className="flex flex-col items-start rounded-r-xl  bg-[#fdd595] pt-10 pb-10 px-9">
            <span className="flex items-center text-3xl pb-7 font-medium gap-5">
              Muscles{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d51515"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-biceps-flexed"
              >
                <path d="M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1" />
                <path d="M15 14a5 5 0 0 0-7.584 2" />
                <path d="M9.964 6.825C8.019 7.977 9.5 13 8 15" />
              </svg>
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
            dolor. Dolore, provident quos, tempora aliquid minus{" "}
          </div>
        </div>
      </section>

      <section className="pt-20">
        <div className="container grid grid-cols-2">
          <div>
            <img src={heroImage2} alt="heroImg 2" />
          </div>
          <div className="flex flex-col items-start gap-5">
            <p>FIT YOUR BODY</p>
            <p className="text-6xl font-bold">
              Ready to make a <br />
              change?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus in iste similique ipsa rerum harum maxime temporibus
              omnis, id ex expedita, odio, voluptatum aliquid accusantium.
            </p>
            <div className="h-16 w-40 bg-violet-900 text-white rounded-md">
              Get Started
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="hero container grid grid-cols-[repeat(8,1fr)]">
          <div className="col-[1/4] flex flex-col items-start gap-5 pl-7">
            <p className="text-6xl font-bold">
              Challenge Your <br />
              Friend
            </p>
            <p>
              Stop doing your sport alone <br /> and challenge your friend who{" "}
              <br /> will be the best?
            </p>
            <div className="h-16 w-40 bg-violet-900 text-white rounded-md">
              Join Community
            </div>
          </div>
          <div className="col-[4/7]">
            <img src={heroImage3} alt="" />
          </div>
          <div className="col-[7/-1] flex flex-col mt-28">
            <div className="flex flex-col items-start px-14 gap-2">
              <p className="text-3xl font-semibold">Get Inspired</p>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iure possimus et. Amet
              </p>
              <p className="flex gap-3 font-semibold items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-play"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </span>
                Roshan ranawaka
              </p>
            </div>
            <div className="flex flex-col items-start px-14 gap-2 pt-10">
              <p className="text-3xl font-semibold">Get Inspired</p>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iure possimus et. Amet
              </p>
              <p className="flex gap-3 font-semibold items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-play"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </span>
                Roshan ranawaka
              </p>
            </div>
            <div className="flex flex-col items-start px-14 gap-2 pt-10">
              <p className="text-3xl font-semibold">Others Inspired</p>
              <p className="text-slate-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                iure possimus et. Amet
              </p>
              <p className="flex gap-3 font-semibold items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-circle-play"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                </span>
                Roshan ranawaka
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container grid grid-cols-[repeat(10,1fr)] pt-20">
          <div className="col-[1/7] flex flex-col items-start gap-4 pb-16">
            <p className="text-6xl font-bold">
              Find the package that suits <br />
              you the best
            </p>
            <p className="font-semibold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
            </p>
            <ul class="">
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <div className="w-4 h-4 rounded-full bg-black"></div>blah blah
                blah
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <div className="w-4 h-4 rounded-full bg-black"></div>blah blah
                blah
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <div className="w-4 h-4 rounded-full bg-black"></div>blah blah
                blah
              </li>
            </ul>
          </div>
          <div className="col-[7/9] flex flex-col items-start">
            <ul>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
              <li className="flex items-center gap-3 pb-4 font-semibold">
                <label class="relative inline-flex items-center cursor-pointer">
                  <input class="sr-only peer" value="" type="checkbox" />
                  <div class="peer rounded-full outline-none duration-100 after:duration-500 w-16 h-8 bg-blue-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500  after:content-['N'] after:absolute after:outline-none after:rounded-full after:h-6 after:w-6 after:bg-white after:top-1 after:left-1 after:flex after:justify-center after:items-center  after:text-sky-800 after:font-bold peer-checked:after:translate-x-7 peer-checked:after:content-['Y'] peer-checked:after:border-white"></div>
                </label>
                blah blah blah{" "}
              </li>
            </ul>
          </div>
          <div className="col-[9/-1] flex-col border-[5px] border-violet-400 pb-4">
            <p className="text-4xl font-bold pb-24 pt-4">
              $ 125 <br />
              <span className="text-sm">blaah blah blah </span>
            </p>
            <p>per month</p>
            <p className="pb-7">blah blah blah blah blah</p>
            <div className="h-10 w-32 bg-violet-900 text-white rounded-md">
              Get now
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10">
        <div className="container grid grid-cols-2">
          <div className="">
            <img src={heroImage4} alt="" />
          </div>
          <div className="flex flex-col ">
            <p className="text-5xl font-bold pb-6">
              Start Your Fitness <br /> Journey today
            </p>
            <p className="pb-6 ml-24">
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit. A, odio
              iste. Magnam reiciendis, <br /> quos esse optio magni fugit cupiditate
              iusto! Architecto vitae nesciunt
            </p>
            <div className="grid grid-cols-4">
              <div className="bg-red-500 flex flex-col pt-7 pb-7 rounded-full px-7 mr-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <p className="text-xl font-bold pt-2">Sleep</p>
                <p className="pb-3 font-semibold">30:00</p>
                <p>Kcl 30</p>
              </div>
              <div className="bg-red-500 flex flex-col pt-7 pb-7 rounded-full px-7 mr-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <p className="text-xl font-bold pt-2">Sleep</p>
                <p className="pb-3 font-semibold">30:00</p>
                <p>Kcl 30</p>
              </div>
              <div className="bg-red-500 flex flex-col pt-7 pb-7 rounded-full px-7 mr-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <p className="text-xl font-bold pt-2">Sleep</p>
                <p className="pb-3 font-semibold">30:00</p>
                <p>Kcl 30</p>
              </div>
              <div className="bg-red-500 flex flex-col pt-7 pb-7 rounded-full px-7 mr-2">
                <div className="w-6 h-6 rounded-full bg-black"></div>
                <p className="text-xl font-bold pt-2">Sleep</p>
                <p className="pb-3 font-semibold">30:00</p>
                <p>Kcl 30</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
