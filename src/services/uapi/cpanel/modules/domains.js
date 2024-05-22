import { callUAPI } from '../helpers/callUAPI.js';

export async function getDomains() {
  return callUAPI('DomainInfo/domains_data');
}