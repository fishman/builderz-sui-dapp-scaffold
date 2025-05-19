"use client";

import dynamic from "next/dynamic";

const WalletButtonDynamic = dynamic(
  () => import("@mysten/dapp-kit").then((mod) => mod.WalletButton),
  { ssr: false }
);

export default function MyMultiButton() {
  return (
    <div className="relative z-[999]">
      <WalletButtonDynamic 
        className="mymultibutton text-sm break-keep flex items-center justify-center text-white py-[18px] px-[36px] rounded-[120px] w-full hover:bg-sui-dark transition-colors"
        connectText="Connect Sui Wallet"
        connectedText="Connected"
      />
    </div>
  );
}
