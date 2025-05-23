import { chain, client } from '@/utils/constants'
import React from 'react'
import { ConnectButton, darkTheme } from 'thirdweb/react'
import { createWallet, walletConnect } from 'thirdweb/wallets'

const projectId = process.env.PROJECT_ID

const wallets = [
  createWallet('io.metamask'),
  createWallet('com.coinbase.wallet'),
  walletConnect(),
  createWallet('com.trustwallet.app'),
  createWallet('me.rainbow'),
  createWallet('app.phantom'),
]

const Login = () => {
  return (
    <div>
      <ConnectButton
        client={client}
        chain={chain}
        wallets={wallets}
        theme={darkTheme({
          colors: { primaryButtonBg: '#5e008a', primaryButtonText: '#ffffff' },
        })}
        connectModal={{ size: 'compact' }}
        walletConnect={{ projectId: projectId }}
      />
    </div>
  )
}

export default Login
