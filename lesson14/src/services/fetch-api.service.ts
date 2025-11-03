import { IApiService } from './abstractions/i-api-service';

export class FetchApiService implements IApiService<Response> {
    public constructor(
        private readonly baseUrl: string,
        private readonly secret: {
            apiKey?: string;
            basicToken?: string;
            bearerToken?: string;
        }
    ) {}

    public async get(uri: string, params?: Record<string, string | number | boolean>, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const queries = params ? '?' + Object.entries(params || {}).map(([key, value]) => `${key}=${value}`).join('&') : '';
        const url = `${this.baseUrl}${uri}${queries}`;
        return await fetch(url, {
            method: 'GET',
            headers: defaultHeaders
        });
    }

    public async getById(uri: string, id: string | number, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const url = `${this.baseUrl}${uri}/${id}`;
        return await fetch(url, {
            method: 'GET',
            headers: defaultHeaders
        });
    }

    public async post(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);

        const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
        const isString = typeof body === 'string';

        const finalHeaders = { ...defaultHeaders } as Record<string, string>;
        if (!isFormData && !isString && !finalHeaders['Content-Type']) {
            finalHeaders['Content-Type'] = 'application/json';
        }

        const payload = isFormData ? (body as FormData) : isString ? (body as string) : JSON.stringify(body);

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'POST',
            body: payload as any,
            headers: finalHeaders
        });
    }
    public async postForm(uri: string, formData: FormData, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'POST',
            body: formData,
            headers: defaultHeaders
        });
    }
    public async put(uri: string, body: unknown, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);

        const isFormData = typeof FormData !== 'undefined' && body instanceof FormData;
        const isString = typeof body === 'string';

        const finalHeaders = { ...defaultHeaders } as Record<string, string>;
        if (!isFormData && !isString && !finalHeaders['Content-Type']) {
            finalHeaders['Content-Type'] = 'application/json';
        }

        const payload = isFormData ? (body as FormData) : isString ? (body as string) : JSON.stringify(body);

        return await fetch(`${this.baseUrl}${uri}`, {
            method: 'PUT',
            body: payload as any,
            headers: finalHeaders
        });
    }

    public async delete(uri: string, id?: string, headers?: Record<string, string>): Promise<Response> {
        const defaultHeaders = this.getDefaultHeaders(headers);
        const url = `${this.baseUrl}${uri}/${id}`;
        return await fetch(url, {
            method: 'DELETE',
            headers: defaultHeaders
        });
    }

    private getDefaultHeaders(headers?: Record<string, string>): Record<string, string> {
        return {
            ...this.getAuthHeaders(),
            ...headers,
            ...{
                Accept: 'application/json'
            }
        };
    }

    private getAuthHeaders(): Record<string, string> {
        const headers: Record<string, string> = {};
        if (this.secret.apiKey) {
            headers['x-api-key'] = this.secret.apiKey;
        } else if (this.secret.basicToken) {
            headers['Authorization'] = `Basic ${this.secret.basicToken}`;
        } else if (this.secret.bearerToken) {
            headers['Authorization'] = `Bearer ${this.secret.bearerToken}`;
        }

        return headers;
    }
}
