import {create} from 'ipfs-http-client';
window.Buffer = window.Buffer || require("buffer").Buffer;
const projectId = '########################';   // <---------- your Infura Project ID

const projectSecret = '######################';  // <---------- your Infura Secret
// (for security concerns, consider saving these values in .env files)

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const cli = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth,
    },
});

export{cli}