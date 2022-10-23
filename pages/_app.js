import '../styles/globals.css'
//wagmi.
import { WagmiConfig, createClient, configureChains, chain } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public';
//rainbow kit UI framework.
import '@rainbow-me/rainbowkit/styles.css';
import '../styles/Home.module.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const { chains, provider } = configureChains([chain.mainnet, chain.polygon, chain.polygonMumbai, chain.localhost], [publicProvider()])

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const client = createClient({
  autoConnect: true,
  connectors,
  provider,
})

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  )

}

export default MyApp
