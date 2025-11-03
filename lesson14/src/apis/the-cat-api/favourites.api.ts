import { IApiService } from '../../services/abstractions/i-api-service';
import { FavouritesDto } from '../../models/the-cats-api/favourites.dto';


export class TheCatFavoureApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async favoureImage(imageId: string, subId: string): Promise<[Response, FavouritesDto]> {
        const body = JSON.stringify({
            image_id: imageId,
            sub_id: subId
        });
        const response = await this.apiService.post('/favourites', body);

        const voteResponse = await response.json();

        return [response, voteResponse];
    }

    public async getFavourites(): Promise<[Response, FavouritesDto[]]> {
        const response = await this.apiService.get('/favourites');
        const favourites = await response.json();

        return [response, favourites];
    }

    public async getFavouriteById(favouriteId: string): Promise<[Response, FavouritesDto]> {
        const response = await this.apiService.getById('/favourites', favouriteId);
        const favourite = await response.json();

        return [response, favourite];
    }

    public async deleteFavouriteById(favouriteId: string): Promise<Response> {
        const response = await this.apiService.delete('/favourites', favouriteId);
        return response;
    }
}
