import Link from 'next/link';
import mintJSON from '../utils/mint.json';
import { ethers } from "ethers";
import { FaChartBar, FaEthereum } from "react-icons/fa";
import { useAccount, useNetwork } from 'wagmi'

export default function Minter() {
    const contractAddress = "0x9975E0F73ddFcCAEBf03cDD3528c328EB3BcC37C";

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    // const connectedContract = new web3.eth.Contract(mintJSON.abi, contractAddress);
    const connectedContract = new ethers.Contract(contractAddress, mintJSON.abi, signer);

    const { address, isConnected } = useAccount();
    const { chain } = useNetwork();
    console.log(address, isConnected);

    const mint = async (event) => {
        if (!isConnected) {
            alert("please connect wallet");
            return;
        }
        if (chain.id != 80001) {
            alert("please use mumbai net!!");
            return;
        }

        const m = await connectedContract.publicMint({
            value: ethers.utils.parseEther("0.01"),
            // nonce: window.ethersProvider.getTransactionCount(address, "latest"),
            gasLimit: ethers.utils.hexlify(0x100000), //100000
        });


    }

    return (
        <div className="w-full py-12 ml-10 -mt-20 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
            <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">
                    NFTs mint website
                </span>
            </h2>
            <p className="text-md mt-4 text-gray-400">
                We are next-generation Web3 creators producing world-class NFT and metaverse experiences through the lens of dynamic storytelling, gamification, creativity, and technology.
            </p>
            <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex">
                    <button className="btn btn-wide btn-info gap-2 text-gray-50" onClick={mint}>
                        MINT
                        <FaEthereum size="1rem" />
                    </button>
                    <Link href="#information">
                        <button className="btn btn-wide btn-error gap-2 ml-3 text-gray-50">
                            STAT
                            <FaChartBar size="1rem" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}