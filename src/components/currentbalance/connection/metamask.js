import { ethers } from 'ethers';

export const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

// export const checkMetamask = () => {
//   if (isMetaMaskInstalled) {
//     if (window.ethereum.chainId === '0x5') {
//       return connect();
//     } else {
//     }
//   } else {
//     throw new Error('Install metamask');
//   }
// };

export const getProvider = () => {
  const provider = new ethers.BrowserProvider(window.ethereum);
  return provider;
};

export const getSigner = () => {
  return getProvider().getSigner();
};

export const connect = () => {
  return window.ethereum
    .request({ method: 'eth_requestAccounts' })
    .then(accounts => {
      console.log(accounts);
      return accounts;
    })
    .catch(err => {
      if (err.code === 4001) {
        // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
      } else {
        console.error(err);
      }
    });
};
