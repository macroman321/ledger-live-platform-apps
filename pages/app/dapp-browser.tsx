import React, { useEffect, useState } from "react";
import {useRouter} from 'next/router';
import {DAPPBrowser} from "../../src/DAPPBrowser";

const nodeUrl = "wss://eth-mainnet.ws.alchemyapi.io/v2/0fyudoTG94QWC0tEtfJViM9v2ZXJuij2";

function DappBrowserPage() {
    const [mounted, setMounted] = useState(false);
    const router = useRouter();

    const { url, mock, accountId } = router.query;

    const isMock = !Array.isArray(mock) && mock === "true"
    const initialAccountId = !Array.isArray(accountId) ? accountId : undefined;

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (mounted) {
        return (
            !!url ? (
                <DAPPBrowser
                    dappName="paraswap"
                    dappUrl={String(url)}
                    pluginName="paraswap"
                    nodeUrl={nodeUrl}
                    mock={isMock}
                    initialAccountId={initialAccountId}
                />
            ) : null
        );
    }
    return null;
}

export default DappBrowserPage;
