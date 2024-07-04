import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = ({ theme }: { theme: any }) => {
    return (
        <div className="flex flex-row md:flex-col max-sm:space-x-4 md:space-y-4 !absolute !right-4 !top-4">
            <ConnectWallet className="mb-2 md:mb-0" theme={theme} />
            <a
                href="https://marketplace.witwhisker.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="!bg-blue-500 !text-white !py-2 !px-4 !rounded"
            >
                Go to Marketplace
            </a>
        </div>
    );
};

export default Header;
