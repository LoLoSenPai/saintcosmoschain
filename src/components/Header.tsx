import React from 'react';
import { ConnectWallet } from "@thirdweb-dev/react";

const Header = ({ theme }: { theme: any }) => {
    return (
        <ConnectWallet className="!absolute !right-4 !top-4" theme={theme} />
    );
};

export default Header;
