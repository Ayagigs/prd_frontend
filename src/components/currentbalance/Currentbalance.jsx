// import React from 'react'
import React, { useEffect, useState } from 'react';
import './currentbalance.scss';
// import { ArrangeHorizontal } from 'iconsax-react';
// import { Wallet2 } from 'iconsax-react';
// import { Copy } from 'iconsax-react';
import {
    connect,
    isMetaMaskInstalled,
    getProvider,
    getSigner,
  } from './connection/metamask';

  import { formatEther, Contract } from 'ethers';
  import view from './abi/view.json';
  import Alert from 'react-bootstrap/Alert';
//   import Button from 'react-bootstrap/Button';
// import Send from './Send';


const Currentbalance = () => {
    const [account, setAccount] = useState('');
    const [myBalance, setMyBalance] = useState('');
    const [data, setData] = useState('');
    const [chainError, setChainError] = useState(null);
    // const toast = useToast();

    useEffect(() => {
        if (account) {
          getBalance(account);
          setChainError(null);
        }
        console.log(view);
      }, [chainError, account]);
    
      const checkMetamask = async () => {
        if (isMetaMaskInstalled) {
          if (window.ethereum.chainId === '0x13881') {
            const userAccount = await connect({method: "eth_requestAccounts"});
            console.log(userAccount);
            setAccount(userAccount[0]);
          } else {
            setChainError('change to Mumbai Polygon');
            throw new Error('change to Mumbai Polygon');
          }
        } else {
          throw new Error('Install metamask');
        }
      };
    

      const getBalance = async myAccount => {
        const provider = getProvider();
        const balance = await provider.getBalance(myAccount);
        console.log(formatEther(balance));
        setMyBalance(formatEther(balance));
        return balance;
      };
    
        
      const viewContract = async () => {
        // const Address = "0xb8f21ca11a20e98e9bcb7638abf9d696be68b943";
        const abi = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "_role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "_account",
                        "type": "address"
                    }
                ],
                "name": "assignRole",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address[]",
                        "name": "_recipients",
                        "type": "address[]"
                    },
                    {
                        "internalType": "uint256[]",
                        "name": "_amounts",
                        "type": "uint256[]"
                    }
                ],
                "name": "batchTransfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "BatchTransferDelegated",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burnFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_account",
                        "type": "address"
                    }
                ],
                "name": "delegateBatchTransfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "grantRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "renounceRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "revokeRole",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "previousAdminRole",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "newAdminRole",
                        "type": "bytes32"
                    }
                ],
                "name": "RoleAdminChanged",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "RoleGranted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "sender",
                        "type": "address"
                    }
                ],
                "name": "RoleRevoked",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "_amount",
                        "type": "uint256"
                    }
                ],
                "name": "sendToAddress",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "BATCH_TRANSFER_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "DEFAULT_ADMIN_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    }
                ],
                "name": "getRoleAdmin",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "role",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "hasRole",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "MINTER_ROLE",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "threshold",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];

        const signer = await getSigner();
        // Create a contract
        const viewContract = new Contract(
          '0xb8f21ca11a20e98e9bcb7638abf9d696be68b943',
          abi,
          signer
        );
        return viewContract;
      };
    
      // const checkEvents = async() => {
      //   let teamleadContract = new ethers.Contract {"0xB0b72FB76a9390943A869eD2e837D183Cd44F954", abi, signer} 
    
      //   teamleadContract.on  {"LeadSet"}
      // }
      // // const ethers = require("ethers");s
      // // const teamlead = require("")
    
      
      const getData = async () => {
        try {
          const teamCon = await viewContract();
          console.log(teamCon);
          const currentCont = await teamCon.getData();
          setData(currentCont);
          console.log(currentCont);
        } catch (error) {
          console.log(error);
        }
      };
    ;
    
      const walletConnection = () => {
        try {
          checkMetamask();
        } catch (error) {
          console.log(error);
        }
      };
    



  return (
    <div>
        <div className="accountbalance">
            <div className='accountdetailsbox'>
                <p className='topdiv'>Current Balance</p>
                <p className='currentamount'>{myBalance}
                <select className='selectcurrency'>
                  <option value="usdt">USDT</option>
                  <option value="bnb">BNB</option>
                  <option value="eth">ETH</option>
                  <option value="btc">BTC</option>
                </select>
                </p>
                <h1 className="fee">{account}</h1>
                {/* <p className='fee'>20.000 USD</p> */}
            </div>
            <div className='clickbox'>
                <div classname="connectbox">
                {chainError && (
                    <Alert className="redalert" status="error" variant="danger">
                        <Alert.Heading> Wrong Network!</Alert.Heading>
                      
                        Please change to Polygon Mumbai testnet
                    </Alert>
                  )}
                    
                    {/* <h1>{myBalanc}</h1> */}
                <button className="connectbtn" onClick={walletConnection} disabled={account}>
                    {account ? 'Connected' : 'Connect Wallet'}
                </button>
                <button onClick={getData}></button>
                <h1>{data}</h1>
                </div>
                
                    {/* <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <ArrangeHorizontal size="32" color="#5157ed" />
                            </div>
                        <button className="sendmoneybtn">
                    
                            Send
                            </button>
                        </div>
                    </div>
                    
                    <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <Wallet2 size="32" color="#02790d"/>
                            </div>
                            <button className="recievemoneybtn">Receive</button>
                        </div>
                    </div >
                    <div className='sendbox'>
                        <div className='sendmoney'>
                            <div className='sendicon'>
                            <Copy  size="32" color="#838387"/>
                            </div>
                            <button className="copytransbtn">Copy</button>
                        </div>
                    </div> */}

                
            </div>

        </div>
    </div>
  )
}

export default Currentbalance