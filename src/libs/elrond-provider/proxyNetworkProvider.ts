import axios, { AxiosRequestConfig } from "axios";
import { defaultAxiosConfig } from "./defaultAxiosConfig";
import { ErrNetworkProvider } from "./errorInstances";

export class ProxyNetworkProvider {
  private url: string;
  private config: AxiosRequestConfig;

  constructor(url: string, config?: AxiosRequestConfig) {
    this.url = url;
    this.config = { ...defaultAxiosConfig, ...config };
  }

  async doGetRequest<T = any>(resourceUrl: string): Promise<T> {
    const response = await this.getRequest(resourceUrl);
    return response;
  }

  async doPostRequest<T = any, K = any>(resourceUrl: string, payload: T): Promise<K | undefined> {
    const response = await this.postRequest<K>(resourceUrl, payload);
    return response;
  }

  /**
   * @private
   * @param {string} resourceUrl - one of the endpoints
   * @returns {T}
   */
  private async getRequest<T = any>(resourceUrl: string): Promise<T | undefined> {
    const requestUrl = `${this.url}/${resourceUrl}`;
    try {
      const response = await axios.get(requestUrl, this.config);
      const responseData = response.data.data;
      return responseData;
    } catch (err) {
      this.handleProxyError(err, requestUrl);
    }
  }

  /**
   * @private
   * @param {string} resourceUrl - one of the endpoints
   * @param {any} payload - any type of payload
   * @returns {T}
   */
  private async postRequest<T = any>(
    resourceUrl: string,
    payload: any
  ): Promise<T | undefined> {
    const url = `${this.url}/${resourceUrl}`;

    try {
      const response = await axios.post(url, payload, {
        ...this.config,
        headers: {
          "Content-Type": "application/json",
        },
      });
      const responseData = response.data.data;
      return responseData;
    } catch (error) {
      this.handleProxyError(error, resourceUrl);
    }
  }

  /**
   *
   * @param {string} endpoint - endpoint of the gateway
   * @param {Record<string, string>} params - object which contains key and parameter of query
   * @returns {string} endpoint url with query parameters
   */
  private buildUrlWithQueryParameters(
    endpoint: string,
    params: Record<string, string>
  ): string {
    let searchParams = new URLSearchParams();

    for (let [key, value] of Object.entries(params)) {
      if (value) {
        searchParams.append(key, value);
      }
    }

    return `${endpoint}?${searchParams.toString()}`;
  }

  private handleProxyError(error: any, resourceUrl: string) {
    if (!error.response) {
      console.warn(error);
      throw new ErrNetworkProvider(resourceUrl, error.toString(), error);
    }

    const errorData = error.response.data;
    const originalErrorMessage =
      errorData.error || errorData.message || JSON.stringify(errorData);
    throw new ErrNetworkProvider(resourceUrl, originalErrorMessage, error);
  }
}
