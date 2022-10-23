// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:security-contact coiiasd88@gmail.com
contract Movie is ERC721, ERC721URIStorage, Pausable, Ownable {
    using Counters for Counters.Counter;
    //total supply of this NFTs
    uint256 public _totalSupply;
    uint256 public _publicMintPrice;
    uint256 public _whiteMintPrice;

    //white list root
    bytes32 public _whitelistRoot;

    mapping(address => uint128) public _addressToTokenID;
    mapping(address => bool) public _whitelistMined;

    Counters.Counter private _tokenIdCounter;

    //base URI
    string private _baseMetaURI;

    constructor(uint256 totalSupply, string memory baseURI)
        ERC721("Movie", "MVE")
    {
        _totalSupply = totalSupply;
        _publicMintPrice = 0.01 ether;
        _whiteMintPrice = 0.001 ether;
        _baseMetaURI = baseURI;
    }

    function pause() external onlyOwner {
        _pause();
    }

    function unpause() external onlyOwner {
        _unpause();
    }

    function setMintPrice(uint256 publibMintPrice, uint256 whiteMintPrice)
        external
        onlyOwner
    {
        _publicMintPrice = publibMintPrice;
        _whiteMintPrice = whiteMintPrice;
    }

    function setTotalSupply(uint256 totalSupply) external onlyOwner {
        _totalSupply = totalSupply;
    }

    function publicMint() public payable {
        //check total supply
        require(_tokenIdCounter.current() < _totalSupply, "reach total supply");
        //check mint price
        require(msg.value >= _publicMintPrice, "don't have enough token");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);

        //set tokenURI
        _setTokenURI(
            tokenId,
            string(
                abi.encodePacked(
                    // bytes(_baseMetaURI),
                    Strings.toString(tokenId),
                    ".json"
                )
            )
        );
    }

    function whiteMint(bytes32[] memory _proof) public payable {
        //check total supply
        require(_tokenIdCounter.current() < _totalSupply, "reach total supply");
        //check mint price
        require(msg.value >= _whiteMintPrice, "don't have enough token");
        //require white list
        bytes32 leaf = keccak256(abi.encodePacked(msg.sender));
        require(
            MerkleProof.verify(_proof, _whitelistRoot, leaf),
            "Verification failed"
        );
        //require not claimed
        require(!_whitelistMined[msg.sender], "Address already claimed!");

        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(msg.sender, tokenId);

        //set tokenURI
        _setTokenURI(
            tokenId,
            string(
                abi.encodePacked(
                    // bytes(_baseMetaURI),
                    Strings.toString(tokenId),
                    ".json"
                )
            )
        );

        _whitelistMined[msg.sender] = true;
    }

    function setWhiteList(bytes32 whitelistRoot) external onlyOwner {
        _whitelistRoot = whitelistRoot;
    }

    function _baseURI() internal view override returns (string memory) {
        return _baseMetaURI;
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override whenNotPaused {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function withdrawToken(IERC20 _token, address _to) external onlyOwner {
        _token.transfer(_to, _token.balanceOf(address(this)));
    }

    // The following functions are overrides required by Solidity.
    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
