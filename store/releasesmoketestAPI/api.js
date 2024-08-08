import axios from "axios"
const releasesmoketestAPI = axios.create({
  baseURL: "https://release-smoke-test-48988.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return releasesmoketestAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_calculationhistory_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/calculationhistory/`)
}
function api_v1_calculationhistory_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/calculationhistory/`, payload)
}
function api_v1_calculationhistory_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/calculationhistory/${payload.id}/`)
}
function api_v1_calculationhistory_update(payload) {
  return releasesmoketestAPI.put(
    `/api/v1/calculationhistory/${payload.id}/`,
    payload
  )
}
function api_v1_calculationhistory_partial_update(payload) {
  return releasesmoketestAPI.patch(
    `/api/v1/calculationhistory/${payload.id}/`,
    payload
  )
}
function api_v1_calculationhistory_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/calculationhistory/${payload.id}/`)
}
function api_v1_cloudsetting_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/cloudsetting/`)
}
function api_v1_cloudsetting_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/cloudsetting/`, payload)
}
function api_v1_cloudsetting_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/cloudsetting/${payload.id}/`)
}
function api_v1_cloudsetting_update(payload) {
  return releasesmoketestAPI.put(`/api/v1/cloudsetting/${payload.id}/`, payload)
}
function api_v1_cloudsetting_partial_update(payload) {
  return releasesmoketestAPI.patch(
    `/api/v1/cloudsetting/${payload.id}/`,
    payload
  )
}
function api_v1_cloudsetting_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/cloudsetting/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/login/`, payload)
}
function api_v1_operation_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/operation/`)
}
function api_v1_operation_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/operation/`, payload)
}
function api_v1_operation_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/operation/${payload.id}/`)
}
function api_v1_operation_update(payload) {
  return releasesmoketestAPI.put(`/api/v1/operation/${payload.id}/`, payload)
}
function api_v1_operation_partial_update(payload) {
  return releasesmoketestAPI.patch(`/api/v1/operation/${payload.id}/`, payload)
}
function api_v1_operation_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/operation/${payload.id}/`)
}
function api_v1_securitysetting_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/securitysetting/`)
}
function api_v1_securitysetting_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/securitysetting/`, payload)
}
function api_v1_securitysetting_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/securitysetting/${payload.id}/`)
}
function api_v1_securitysetting_update(payload) {
  return releasesmoketestAPI.put(
    `/api/v1/securitysetting/${payload.id}/`,
    payload
  )
}
function api_v1_securitysetting_partial_update(payload) {
  return releasesmoketestAPI.patch(
    `/api/v1/securitysetting/${payload.id}/`,
    payload
  )
}
function api_v1_securitysetting_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/securitysetting/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_user_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return releasesmoketestAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return releasesmoketestAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/user/${payload.id}/`)
}
function api_v1_userpreference_list(payload) {
  return releasesmoketestAPI.get(`/api/v1/userpreference/`)
}
function api_v1_userpreference_create(payload) {
  return releasesmoketestAPI.post(`/api/v1/userpreference/`, payload)
}
function api_v1_userpreference_retrieve(payload) {
  return releasesmoketestAPI.get(`/api/v1/userpreference/${payload.id}/`)
}
function api_v1_userpreference_update(payload) {
  return releasesmoketestAPI.put(
    `/api/v1/userpreference/${payload.id}/`,
    payload
  )
}
function api_v1_userpreference_partial_update(payload) {
  return releasesmoketestAPI.patch(
    `/api/v1/userpreference/${payload.id}/`,
    payload
  )
}
function api_v1_userpreference_destroy(payload) {
  return releasesmoketestAPI.delete(`/api/v1/userpreference/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return releasesmoketestAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return releasesmoketestAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return releasesmoketestAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return releasesmoketestAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return releasesmoketestAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return releasesmoketestAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_calculationhistory_list,
  api_v1_calculationhistory_create,
  api_v1_calculationhistory_retrieve,
  api_v1_calculationhistory_update,
  api_v1_calculationhistory_partial_update,
  api_v1_calculationhistory_destroy,
  api_v1_cloudsetting_list,
  api_v1_cloudsetting_create,
  api_v1_cloudsetting_retrieve,
  api_v1_cloudsetting_update,
  api_v1_cloudsetting_partial_update,
  api_v1_cloudsetting_destroy,
  api_v1_login_create,
  api_v1_operation_list,
  api_v1_operation_create,
  api_v1_operation_retrieve,
  api_v1_operation_update,
  api_v1_operation_partial_update,
  api_v1_operation_destroy,
  api_v1_securitysetting_list,
  api_v1_securitysetting_create,
  api_v1_securitysetting_retrieve,
  api_v1_securitysetting_update,
  api_v1_securitysetting_partial_update,
  api_v1_securitysetting_destroy,
  api_v1_signup_create,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  api_v1_userpreference_list,
  api_v1_userpreference_create,
  api_v1_userpreference_retrieve,
  api_v1_userpreference_update,
  api_v1_userpreference_partial_update,
  api_v1_userpreference_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
