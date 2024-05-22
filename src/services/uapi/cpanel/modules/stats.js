import { callUAPI } from "../helpers/callUAPI"

export const getResourceStats = () => {
    return callUAPI('ResourceUsage/get_usages');
}