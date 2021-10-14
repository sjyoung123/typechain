var Block = /** @class */ (function () {
    function Block(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
    return Block;
}());
var genesisBlock = new Block(0, "12313", "", "hello", 123);
var blockchain = [genesisBlock];
console.log(blockchain);
