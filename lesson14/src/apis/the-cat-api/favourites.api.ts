import { IApiService } from '../../services/abstractions/i-api-service';
import { FavouritesDto } from '../../models/the-cats-api/favourites.dto';


export class TheCatFavoureApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async favoureImage(imageId: string, subId: string): Promise<[Response, FavouritesDto]> {
        const body = {
            image_id: imageId,
            sub_id: subId
        };

        const response = await this.apiService.post('/favourites', body);

        const contentType = response.headers.get('content-type');

        let favouritesResponse: any;
        if (contentType && contentType.includes('application/json')) {
            favouritesResponse = await response.json();
        } else {
            const text = await response.text();
            console.warn(' Non-JSON response:', text);
            favouritesResponse = { error: text };
        }
        return [response, favouritesResponse];
    }

    public async getFavourites(): Promise<[Response, FavouritesDto[]]> {
        const response = await this.apiService.get('/favourites');
        const favourites = await response.json();

        return [response, favourites];
    }

    public async getFavouriteById(favouriteId: string): Promise<[Response, FavouritesDto]> {
        let response = await this.apiService.getById('/favourites', favouriteId);
        const contentType = response.headers.get('content-type');

        let favourite: any;
        if (contentType && contentType.includes('application/json')) {
            favourite = await response.json();
        } else {
            const text = await response.text();
            console.warn(' Non-JSON response:', text);
            // Fallback: fetch the list and find by id
            const [listResponse, list] = await this.getFavourites();
            response = listResponse;
            favourite = list.find((f: any) => String(f.id) === String(favouriteId));
        }

        if (favourite && typeof favourite.id === 'number') {
            favourite.id = String(favourite.id);
        }

        return [response, favourite as FavouritesDto];
    }

    public async deleteFavouriteById(favouriteId: string): Promise<Response> {
        const response = await this.apiService.delete('/favourites', favouriteId);
        return response;
    }
}
