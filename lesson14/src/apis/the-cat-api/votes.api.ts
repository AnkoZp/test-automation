import { IApiService } from '../../services/abstractions/i-api-service';
import { VoteDto } from '../../models/the-cats-api/votes.dto';


export class TheCatVoteApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async voteImage(imageId: string, subId: string, value: number): Promise<[Response, VoteDto]> {
        if (!imageId) {
            throw new Error('image_id is required');
        }

        const body = {
            image_id: imageId,
            sub_id: subId,
            value: value
        };

        console.log('Vote request payload:', JSON.stringify(body));

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
        const contentType = response.headers.get('content-type');

        let vote: any;
        if (contentType && contentType.includes('application/json')) {
            vote = await response.json();
        } else {
            const text = await response.text();
            console.warn(' Non-JSON response:', text);
            vote = { error: text };
        }

        if (vote && typeof vote.id === 'number') {
            vote.id = String(vote.id);
        }

        return [response, vote as VoteDto];
    }

    public async deleteVoteById(voteId: string): Promise<Response> {
        const response = await this.apiService.delete('/votes', voteId);
        return response;
    }
}
