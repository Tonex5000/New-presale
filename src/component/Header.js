import {ConnectButton} from '@web3uikit/web3';

export default function Header() {
    return (
        <div className="border-b-2 flex flex-row">
            <h1 className="py-4 px-4 font-blog text-3xl">Purchase BLAB Token</h1>
            <p className="py-4 px-4 font-blog text-3xl">Please, connect to your wallet.</p>
            <div className="ml-auto py-2 px-4">
                <ConnectButton moralisAuth={false}/>
            </div>
        </div>
    )
}
