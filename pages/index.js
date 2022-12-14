import Head from 'next/head'
import Footer from '../components/Footer';
import dynamic from 'next/dynamic';
import React from "react";
import Image from 'next/image'
import { FaEthereum, FaTwitter, FaGithub, FaYoutube, FaMixer, FaHandPointUp, FaHandHoldingHeart } from "react-icons/fa";

const Header = dynamic(() => import('../components/Header'), {
  ssr: false,
})

const Minter = dynamic(() => import('../components/Minter'), {
  ssr: false,
})

export default function Home() {

  return (
    <div className="min-h-screen bg-base-200" data-theme="bumblebee">
      <Head>
        <title>Lets Mint Some NFTs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <div class="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center h-screen">

        <Minter />

        <div class="grid grid-rows-3 grid-flow-col gap-8 mr-32 -mt-20">
          <div><Image src="/nft/0.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/1.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/2.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/3.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/4.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/5.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/6.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/7.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/8.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/9.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/10.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/11.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/12.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/13.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/14.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/15.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/16.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/17.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/18.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/19.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/20.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/21.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/22.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
          <div><Image src="/nft/23.jpg" className="mx-auto object-cover rounded-xl w-44" width={500} height={500}></Image></div>
        </div>
      </div>

      <p class="text-center text-3xl font-bold text-gray-800 dark:text-white bg-white" id="information">
        Mint information
      </p>

      <p class="text-center pb-12 text-xl font-normal text-gray-500 dark:text-gray-200 bg-white">
        Lets get it started
      </p>

      <div className='bg-white w-full p-auto flex flex-row justify-around'>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-figure text-info">
              <FaMixer size="2rem" />
            </div>
            <div className="stat-title">Total Supply</div>
            <div className="stat-value text-info">1000</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-error">
              <FaHandPointUp size="2rem" />
            </div>
            <div className="stat-title">Total Mints</div>
            <div className="stat-value text-error">888</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-info">
              <FaHandHoldingHeart size="2rem" />
            </div>
            <div className="stat-title">Total Address</div>
            <div className="stat-value text-info">787</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-error">
              <FaEthereum size="2rem" />
            </div>
            <div className="stat-title">Total Volume</div>
            <div className="stat-value text-error">10E</div>
          </div>

        </div>

      </div>

      <div class="p-8 bg-white dark:bg-gray-800  shadow pt-32 ">
        <p class="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Professional team
        </p>
        <p class="text-center mb-12 text-xl font-normal text-gray-500 dark:text-gray-200">
          Meat the best team in wolrd
        </p>
        <div class="flex flex-col justify-center md:flex-row evenly m-auto">
          <div className="">
            <div class="text-center mb-4 opacity-90">
              <a href="#" class="block relative">
                <Image alt="profil" src="/images/1.jpg" class="mx-auto object-cover rounded-full h-40 w-40 " width={200} height={200} />
              </a>
            </div>
            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white text-info">
                Patrick Sebastien
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light text-error">
                Fonder
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Patrick S??bastien, born November 14, 1953 in Brive-la-Gaillarde, is an imitator.
              </p>
            </div>
            <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">

            </div>
          </div>
          <div className="">
            <div class="text-center mb-4 opacity-90">
              <a href="#" class="block relative">
                <Image alt="profil" src="/images/3-1.jpg" class="mx-auto object-cover rounded-full h-40 w-40 " width={200} height={200} />
              </a>
            </div>
            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white text-info">
                Jean Castux
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light text-error">
                Developpeur
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
              </p>
            </div>
            <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">

            </div>
          </div>


          <div className="">
            <div class="text-center mb-4 opacity-90">
              <a href="#" class="block relative">
                <Image alt="profil" src="/images/4-1.jpg" class="mx-auto object-cover rounded-full h-40 w-40 " width={200} height={200} />
              </a>
            </div>
            <div class="text-center">
              <p class="text-2xl text-gray-800 dark:text-white text-info">
                Jean Castux
              </p>
              <p class="text-xl text-gray-500 dark:text-gray-200 font-light text-error">
                Market
              </p>
              <p class="text-md text-gray-500 dark:text-gray-400 max-w-xs py-4 font-light">
                Jean Castux is an imitator, humorist, actor, born November 14, 1953 in Pontivy.
              </p>
            </div>
            <div class="pt-8 flex border-t border-gray-200 w-44 mx-auto text-gray-500 items-center justify-between">

            </div>
          </div>

        </div>
      </div>


      <div className="pt-32 p-8 bg-white dark:bg-gray-800 shadow pb-40">
        <p className="text-center text-3xl font-bold text-gray-800 dark:text-white">
          Join Our Community
        </p>
        <div className="flex flex-col justify-center md:flex-row evenly gap-x-10">
          <div className="p-4 mt-20">
            <div className="text-center mb-4 opacity-90">
              <FaTwitter size="7rem" /> TWITTER
            </div>

          </div>
          <div className="p-4 mt-20">
            <div className="text-center mb-4 opacity-90">
              <FaGithub size="7rem" /> GITHUB
            </div>
          </div>


          <div className="p-4 mt-20">
            <div className="text-center mb-4 opacity-90">
              <FaYoutube size="7rem" />YOUTUBE
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div >
  )
}
