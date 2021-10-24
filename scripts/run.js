const main = async () => {
  const myNftContract = await hre.ethers.getContractFactory("MyNFT");
  const nftContract = await myNftContract.deploy();
  await nftContract.deployed();
  console.log("My NFT Contract has been deployed to => ", nftContract.address);

  // Call the function TO MAKE AN NFT.
  let mtxn = await nftContract.makeMyNFT();
  // Wait for nft to be minted
  await mtxn.wait();

  mtxn = await nftContract.makeMyNFT();
  await mtxn.wait();

  mtxn = await nftContract.makeMyNFT();
  await mtxn.wait();

  mtxn = await nftContract.makeMyNFT();
  await mtxn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log("error running main function", error);
    process.exit(1);
  }
};

runMain();
