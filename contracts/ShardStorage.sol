//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ShardStorage {
    struct UserShards{
        string[] ipfsCIDs;
        address userAddr;
    }

    mapping (address => UserShards) private _userShards;

    event ShardsStored(address indexed user,uint shardCount);

    //Store user cids
    function storeShards(
        string[] calldata cids,
        address addr
    ) external{
        _userShards[addr] = UserShards({
            ipfsCIDs:cids,
            userAddr:addr
        });

        emit ShardsStored(addr, cids.length);
    }

    function getUserSthards(
    )external view returns (
        string[] memory cids
    ){
        UserShards storage data = _userShards[msg.sender];
        return (data.ipfsCIDs);
    }
}