import { callUAPI } from '../helpers/callUAPI.js';


export const blockIp = async (ip) => {
    return callUAPI(`BlockIP/add_ip?ip=${ip}`);
}

export const unblockIp = async (ip) => {
    return callUAPI(`BlockIP/remove_ip?ip=${ip}`);
}