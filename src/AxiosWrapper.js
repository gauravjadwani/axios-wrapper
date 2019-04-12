import axios from "axios";

export default class ApiHandler {
  constructor(
    customHeaders = false,
    customParams = false,
    handleError = this.handleError,
    handleSuccess = this.handleSuccess
  ) {
    let service = axios.create({
      headers: customHeaders,
      params: customParams
    });
    service.interceptors.response.use(handleSuccess, handleError);
    this.service = service;
  }
  // default handle success function
  handleSuccess(response) {
    return response;
  }
  // default handle error function
  handleError(error) {
    return Promise.reject(error);
  }

  get(path) {
    return this.service.request({
      method: "GET",
      url: path,
      responseType: "json"
    });
  }

  patch(path, payload) {
    return this.service.request({
      method: "PATCH",
      url: path,
      responseType: "json",
      data: payload
    });
  }

  post(path, bodyPayload = false) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }

  delete(path, bodyPayload = false) {
    return this.service.request({
      method: "DELETE",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }

  put(path, bodyPayload = false) {
    return this.service.request({
      method: "PUT",
      url: path,
      responseType: "json",
      data: bodyPayload
    });
  }
}
