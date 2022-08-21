const anchor = require("@project-serum/anchor");

const main = async () => {
    console.log("Starting tests");
    anchor.setProvider(anchor.Provider.env());
    const program = anchor.workspace.GifPortal;
    const tx = await program.rpc.startStuffOff();
    console.log("Ypur transaction signature", tx);
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch{
        console.error(error);
        process.exit(1);
    }
};
runMain();