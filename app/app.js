// The object 'Contracts' is injected here, which contains all data for all contracts, keyed on contract name:
// Contracts['PatientBlock'] = {
//  abi: [],
//  address: "0x..",
//  endpoint: "http://...."
// }
function PatientBlock(Contract) {
    this.web3 = null;
    this.instance = null;
    this.Contract = Contract;
}

PatientBlock.prototype.init = function () {
    // Create a new Web3 instance using either the Metamask provider
    // or an independent provider created as the endpoint configured for the contract.
    this.web3 = new Web3(
        (window.web3 && window.web3.currentProvider) ||
        new Web3.providers.HttpProvider(this.Contract.endpoint));

    // Create the contract interface using the ABI provided in the configuration.
    var contract_interface = this.web3.eth.contract(this.Contract.abi);

    // Create the contract instance for the specific address provided in the configuration.
    this.instance = this.Contract.address ? contract_interface.at(this.Contract.address) :  { message: () => {} };
};

// Get the hello message from the contract.
PatientBlock.prototype.getMessage = function (cb) {
    this.instance.message(function (error, result) {
        cb(error, result);
    });
};

// Get the current block number and show it.
PatientBlock.prototype.getBlockNumber = function (cb) {
    this.web3.eth.getBlockNumber(function (error, result) {
        cb(error, result);
    });
};

PatientBlock.prototype.update = function () {
    var that = this;
    this.getMessage(function (error, result) {
        if (error) {
            $(".error").show();
            return;
        }
        $("#message").text(result);

        that.getBlockNumber(function (error, result) {
            if (error) {
                $(".error").show();
                return;
            }
            $("#blocknumber").text(result);
            setTimeout(function () { that.update() }, 1000);
        });
    });
}

PatientBlock.prototype.main = function () {
    $(".blocknumber").show();
    $(".message").show();
    this.update();
}

PatientBlock.prototype.onReady = function () {
    this.init();
    this.main();
};

if(typeof(Contracts) === "undefined") var Contracts={ PatientBlock: { abi: [] }};
var PatientBlock = new PatientBlock(Contracts['PatientBlock']);

$(document).ready(function () {
    PatientBlock.onReady();
});
