import { SendTransactionRequest, TonConnect, UserRejectsError, WalletInfo, WalletInfoInjected } from '@tonconnect/sdk';
import { isMobile, openLink } from './utils';

const dappMetadata = {
    manifestUrl:
        'https://gist.githubusercontent.com/siandreev/75f1a2ccf2f3b4e2771f6089aeb06d7f/raw/d4986344010ec7a2d1cc8a2a9baa57de37aaccb8/gistfile1.txt',
};

export const connector = new TonConnect(dappMetadata);

export async function sendTransaction(tx: SendTransactionRequest, wallet: WalletInfo): Promise<{ boc: string }> {
    try {
        if ('universalLink' in wallet && !(wallet as WalletInfoInjected).embedded && isMobile()) {
            openLink(addReturnStrategy(wallet.universalLink, 'none'), '_blank');
        }

        const result = await connector.sendTransaction(tx);
        return result;
    } catch (e) {
        let message = 'Send transaction error';
        let description = '';

        if (typeof e === 'object' && e instanceof UserRejectsError) {
            message = 'You rejected the transaction';
            description = 'Please try again and confirm transaction in your wallet.';
        }
        console.log(e);
        throw e;
    }
}

export function addReturnStrategy(url: string, returnStrategy: 'back' | 'none'): string {
    const link = new URL(url);
    link.searchParams.append('ret', returnStrategy);
    return link.toString();
}