import { IApiService } from '../../services/abstractions/i-api-service';
import { VoteDto } from '../../models/the-cats-api/votes.dto';


export class TheCatVoteApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async voteImage(imageId: string, subId: string, value: number): Promise<[Response, VoteDto]> {
        const body = JSON.stringify({
            image_id: imageId,
            sub_id: subId,
            value: value
        });

        const response = await this.apiService.post('/votes', body);

        const contentType = response.headers.get('content-type');

        let voteResponse: any;
        if (contentType && contentType.includes('application/json')) {
            voteResponse = await response.json();
        } else {
            const text = await response.text();
            console.warn(' Non-JSON response:', text);
            voteResponse = { error: text };
        }
        return [response, voteResponse];
    }

    public async getVotes(): Promise<[Response, VoteDto[]]> {
        const response = await this.apiService.get('/votes');
        const votes = await response.json();

        return [response, votes];
    }

    public async getVoteById(voteId: string): Promise<[Response, VoteDto]> {
        const response = await this.apiService.getById('/votes', voteId);
        const vote = await response.json();

        return [response, vote];
    }

    public async deleteVoteById(voteId: string): Promise<Response> {
        const response = await this.apiService.delete('/votes', voteId);
        return response;
    }
}
