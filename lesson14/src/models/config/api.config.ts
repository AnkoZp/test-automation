export interface ConfigDto {
    auth: AuthConfigDto;
    api: ApiConfigDto;
}

export interface AuthConfigDto {
    theCatsApi?: TheCatsApiAuthConfigDto;
    rdApi: RDAuthConfigDto;
}

export interface ApiConfigDto {
    theCatsApi: TheCatsApiConfigDto;
    rd: RDConfigDto;
}

export interface TheCatsApiAuthConfigDto {
    apiKey?: string;
}

export interface TheCatsApiConfigDto {
    baseUrl: string;
}

export interface RDAuthConfigDto {
    userName: string;
    password: string;
    token?: string;
}

export interface RDConfigDto {
    baseUrl: string;
    loginUrl: string;
}
