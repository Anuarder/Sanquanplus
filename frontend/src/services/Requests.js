import Api from '@/services/Api'

export default {
  sendRequest(payload) {
    return Api().get("/send_request", payload);
  },
  sendMessage(payload) {
    return Api().get("/send_message", payload);
  },
}