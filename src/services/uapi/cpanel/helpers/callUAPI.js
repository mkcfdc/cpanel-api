import axios from 'axios';
import config from '../../../../config/env.config.js'

const { CPANEL_HOST, CPANEL_USERNAME, CPANEL_API_TOKEN } = config.cpanel;

const BASE_URL = `https://${CPANEL_HOST}:2083/execute`;

export async function callUAPI(endpoint, method = 'GET', data = {}) {
  try {
    const response = await axios({
      url: `${BASE_URL}/${endpoint}`,
      method,
      headers: {
        'Authorization': `cpanel ${CPANEL_USERNAME}:${CPANEL_API_TOKEN}`,
      },
      data,
    });
    return response.data;
  } catch (error) {
    throw new Error(`Failed to call UAPI endpoint ${endpoint}: ${error.message}`);
  }
}