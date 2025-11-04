import { IApiService } from '../../services/abstractions/i-api-service';
import { ImageDto } from '../../models/the-cats-api/image.dto';
import * as fs from 'fs';

export class TheCatImageApi {
    public constructor(private readonly apiService: IApiService<Response>) {}

    public async uploadImage(imagePath: string, subId?: string, breeds?: string[]): Promise<[Response, ImageDto]> {
        const formData = new FormData();
        const file = fs.readFileSync(imagePath);

        const binaryFile = new File([new Uint8Array(file)], 'the_cat_1.jpg', { type: 'image/jpeg' });

        formData.append('file', binaryFile);
        subId && formData.append('sub_id', subId);
        breeds && formData.append('breeds', breeds.join(','));
        console.log(breeds);

        const response = await this.apiService.postForm('/images/upload', formData);

        const imageResponse = await response.json();

        return [response, imageResponse];
    }

    public async getMyImages(): Promise<[Response, ImageDto[]]> {
        const response = await this.apiService.get('/images');
        const images = await response.json();

        return [response, images];
    }

    public async getImageById(imageId: string): Promise<[Response, ImageDto]> {
        const response = await this.apiService.getById('/images', imageId);
        const image = await response.json();

        return [response, image];
    }

    public async deleteImage(imageId: string): Promise<Response> {
        const response = await this.apiService.delete('/images', imageId);

        return response;
    }
}
