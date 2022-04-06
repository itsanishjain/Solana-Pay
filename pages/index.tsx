import { useWallet } from '@solana/wallet-adapter-react'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Products from '../components/Products'
import SiteHeading from '../components/SiteHeading'
import CouponBook from '../components/CouponBook'

export default function HomePage() {
  // We get the public key of the connected wallet, if there is one
  const { publicKey } = useWallet()

  return (
    <div className="flex flex-col gap-8 max-w-4xl items-stretch m-auto pt-24">
      <SiteHeading>Cookies Inc</SiteHeading>

      {/* We add the Solana wallet connect button */}
      <div className="basis-1/4">
        <WalletMultiButton className='!bg-gray-900 hover:scale-105' />
      </div>

      {publicKey && <CouponBook />}

      {/* We disable checking out without a connected wallet */}
      <Products submitTarget='/checkout' enabled={publicKey !== null} />
    </div>
  )
}

/*
$ node scripts/create-coupon.js
bigint: Failed to load bindings, pure JS will be used (try npm run rebuild?)
Creating token...
Token created: 3hLnZgFY11NkoLET9iQ4wndemvGRNQxpYCSHYfi2dUzU
Creating token account for the shop...
Token account created: 9KjM47zLXiuM4vbezuyY8vJhy2DZhsD3mvvjv4WhADM7
Minting 1 million coupons to the shop account...
Minted 1 million coupons to the shop account
{
  myCouponAddress: '3hLnZgFY11NkoLET9iQ4wndemvGRNQxpYCSHYfi2dUzU',
  shopCouponAddress: '9KjM47zLXiuM4vbezuyY8vJhy2DZhsD3mvvjv4WhADM7',
  balance: '10,00,000'
}

*/