"use client";

import dynamic from "next/dynamic";
import { 
  SuiClientProvider,
  createNetworkConfig
} from "@mysten/dapp-kit";

const WalletProvider = dynamic(
  () => import("@mysten/dapp-kit").then((mod) => mod.WalletProvider),
  { ssr: false }
);
import { FC, ReactNode } from "react";
import { getFullnodeUrl } from "@mysten/sui.js/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const { networkConfig } = createNetworkConfig({
  localnet: { url: getFullnodeUrl('localnet') },
  devnet: { url: getFullnodeUrl('devnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
});

const queryClient = new QueryClient();

export const WalletContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
        <WalletProvider 
          preferredWallets={[]}
          autoConnect={false}
          features={["sui:signAndExecuteTransactionBlock"]}
        >
          {children}
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
};

export default WalletContextProvider;
