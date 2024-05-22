import { callUAPI } from '../helpers/callUAPI.js';

export async function getDiskQuota() {
  return callUAPI('Quota/get_local_quota_info');
}