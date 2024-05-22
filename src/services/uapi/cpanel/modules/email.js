import { callUAPI } from '../helpers/callUAPI.js';

// Email Endpoints

// Create a new email account
export async function createEmailAccount(email, password, domain, quota = 20) {
    return callUAPI('Email/add_pop', 'POST', {
      email,
      password,
      domain,
      quota,
      send_welcome_email: 1
    });
  }
  
  // Delete an email account
  export async function deleteEmailAccount(email, domain) {
    return callUAPI('Email/delete_pop', 'POST', {
      email,
      domain,
    });
  }
  
  // Get email account quota
  export async function getEmailAccountQuota(email, domain) {
    return callUAPI('Email/get_pop_quota', 'GET', {
      email,
      domain,
    });
  }
  
  // List email accounts
  export async function listEmailAccounts(domain) {
    return callUAPI('Email/list_pops', 'GET', { domain });
  }

  // List email accounts with disk info
  export async function listEmailAccountsWDisk(user, domain) {
    
    if(!domain && !user){
      return callUAPI(`Email/list_pops_with_disk?get_restrictions=1`);
    }

    return callUAPI(`Email/list_pops_with_disk?domain=${domain}&email=${user}&get_restrictions=1`);
  }
  
  // Change email account password
  export async function changeEmailAccountPassword(email, domain, password) {
    return callUAPI('Email/passwd_pop', 'POST', {
      email,
      domain,
      password
    });
  }
  
  // Change email account quota
  export async function changeEmailAccountQuota(email, domain, quota) {
    return callUAPI('Email/edit_quota', 'POST', {
      email,
      domain,
      quota
    });
  }
  
  // List default email accounts
  export async function listDefaultEmailAccounts(domain) {
    return callUAPI('Email/list_default_email_accounts', 'GET', { domain });
  }
  
  // Get email accounts statistics
  export async function getEmailAccountsStats() {
    return callUAPI('Email/get_pop_stats', 'GET');
  }
  
  // Get email disk usage
  export async function getEmailDiskUsage(email, domain) {
    return callUAPI('Email/get_disk_usage', 'GET', {
      email,
      domain
    });
  }
  
  // Suspend an email account
  export async function suspendEmailAccount(email, domain) {
    return callUAPI('Email/suspend_email', 'POST', {
      email,
      domain
    });
  }
  
  // Unsuspend an email account
  export async function unsuspendEmailAccount(email, domain) {
    return callUAPI('Email/unsuspend_email', 'POST', {
      email,
      domain
    });
  }
  
  // Check email account suspension
  export async function checkEmailAccountSuspension(email, domain) {
    return callUAPI('Email/is_suspended', 'GET', {
      email,
      domain
    });
  }
  
  // Get auto responder
  export async function getAutoResponder(email, domain) {
    return callUAPI('Email/get_auto_responder', 'GET', {
      email,
      domain
    });
  }
  
  // Add auto responder
  export async function addAutoResponder(email, domain, message, subject, from, to) {
    return callUAPI('Email/add_auto_responder', 'POST', {
      email,
      domain,
      message,
      subject,
      from,
      to
    });
  }
  
  // Delete auto responder
  export async function deleteAutoResponder(email, domain) {
    return callUAPI('Email/delete_auto_responder', 'POST', {
      email,
      domain
    });
  }
  
  // Get email filter
  export async function getEmailFilter(account, domain) {
    return callUAPI('Email/get_filter', 'GET', {
      account,
      domain
    });
  }
  
  // Add email filter
  export async function addEmailFilter(account, domain, filter_name, filter_rules) {
    return callUAPI('Email/add_filter', 'POST', {
      account,
      domain,
      filtername: filter_name,
      rules: filter_rules
    });
  }
  
  // Delete email filter
  export async function deleteEmailFilter(account, domain, filter_name) {
    return callUAPI('Email/delete_filter', 'POST', {
      account,
      domain,
      filtername: filter_name
    });
  }
  
  // List forwarders
  export async function listEmailForwarders(domain) {
    return callUAPI('Email/list_forwarders', 'GET', {
      domain
    });
  }
  
  // Add forwarder
  export async function addEmailForwarder(email, domain, forward_to) {
    return callUAPI('Email/add_forwarder', 'POST', {
      email,
      domain,
      forwardto: forward_to
    });
  }
  
  // Delete forwarder
  export async function deleteEmailForwarder(email, domain) {
    return callUAPI('Email/delete_forwarder', 'POST', {
      email,
      domain
    });
  }

  // Create webmail session
  export const createWMSession = async (username, domain, password) => {
    return callUAPI(`Session/create_webmail_session_for_mail_user_check_password?login=${username}&domain=${domain}&password=${password}`);
  }