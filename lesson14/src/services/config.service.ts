import * as dotenv from 'dotenv-safe';
import { ApiConfigDto, AuthConfigDto, ConfigDto } from '../models/config/api.config';
import * as fs from 'fs';

export class ConfigService {
    private _token: string;

    public constructor() {
        dotenv.config();
        this._token = '';
    }

    public getConfig(): ConfigDto {
        const authConfig = this.getAuthConfig();
        const apiConfig = this.getApiConfig();

        return {
            auth: authConfig,
            api: apiConfig
        };
    }

    public updateJwtToken(token: string): void {
        fs.writeFileSync('token.txt', token);
        this._token = token;
    }

    private getAuthConfig(): AuthConfigDto {
        if (fs.existsSync('token.txt')) {
            this._token = fs.readFileSync('token.txt', 'utf8');
        }

        return {
            theCatsApi: {
                apiKey: process.env.CAT_API_KEY ? process.env.CAT_API_KEY : 'live_ENXOQbwBvSTpb15VHhZ3fexqhRxG7vMSVa0NDLHEpsmnqaTuuqGBoAfxEIc5n0zk'
            },
            rdApi: {
                userName: process.env.RD_USER_NAME ? process.env.RD_USER_NAME : '',
                password: process.env.RD_PASSWORD ? process.env.RD_PASSWORD : '',
                token: this._token
            }
        };
    }

    private getApiConfig(): ApiConfigDto {
        return {
            theCatsApi: {
                baseUrl: 'https://api.thecatapi.com/v1'
            },
            // jira: {
            //     baseUrl: 'https://levkoniuk.atlassian.net/rest/api/3'
            // },
            rd: {
                baseUrl: 'https://lms.academius.io/',
                loginUrl: 'https://lms.robotdreams.cc/login'
            }
        };
    }
}
