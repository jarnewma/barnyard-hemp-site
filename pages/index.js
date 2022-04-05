import { ethers } from 'ethers'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Web3Modal from 'web3modal'
import NFTMarketplace from '..artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
import {
  marketplaceAddress
} from '../config'

export default function Home() {

  // const [nfts, setNfts] = useState([])
  // const [loadingState, setLoadingState] = useState('not-loaded')
  // useEffect(() => {
  //   loadNFTs()
  // }, [])
  // async function loadNFTs() {
  //   const provider = new ethers.providers.JsonRpcProvider()
  //   const contract = new ethers.Contract(marketplaceAddress, NFTMarketplace.abi, provider)
  //   const data = await contract.fetchMarketItems
  // }

  return (
    <div className="flex justify-center">
      <h1>Home</h1>
    </div>
  )
}