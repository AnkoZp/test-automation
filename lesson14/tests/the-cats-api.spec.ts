import { describe, expect,  test } from 'vitest';
import { ConfigService } from '../src/services/config.service';
import { FetchApiService } from '../src/services/fetch-api.service';
import { TheCatImageApi } from '../src/apis/the-cat-api/images.api';
import { ImageDto } from '../src/models/the-cats-api/image.dto';
import { TheCatVoteApi } from '../src/apis/the-cat-api/votes.api';
import { TheCatFavoureApi } from '../src/apis/the-cat-api/favourites.api';
describe('The Cats API integration test', () => {
    const config = (new ConfigService()).getConfig();
    const fetchApiService = new FetchApiService(config.api.theCatsApi.baseUrl, { apiKey: config.auth?.theCatsApi?.apiKey });
    const catsImages = new TheCatImageApi(fetchApiService);
    const catsVotes = new TheCatVoteApi(fetchApiService);
    const catsFavourites = new TheCatFavoureApi(fetchApiService);


    let uploadedImageJson: ImageDto;
    let imageId: string;
    let voteId : string;
    let favouriteId : string;

    describe('upload image tests', () => {
        test('upload image', async () => {
            const [response, json] = await catsImages.uploadImage('artifacts/the_cat_1.jpg', 'Aapo_subId');

            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.id).toBeDefined();

            uploadedImageJson = json;
            imageId = json.id;
            console.log('Uploaded image id:', imageId);
        });

        test('check that image was uploaded', async () => {
            const [response, json] = await catsImages.getMyImages();

            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.length).toBeGreaterThan(0);

            const uploadedImage = json.find(image => image.id === uploadedImageJson.id);

            expect(uploadedImage?.id).toBe(uploadedImageJson.id);
            expect(uploadedImage?.url).toBe(uploadedImageJson.url);
            expect(uploadedImage?.original_filename).toBe(uploadedImageJson.original_filename);
            expect(uploadedImage?.sub_id).toBe(uploadedImageJson.sub_id);

            imageId = uploadedImageJson.id;
            console.log('Uploaded image id:', imageId);
        });

        test('vote for the image', async () => {
            const [response, json] = await catsVotes.voteImage(imageId, 'Aapo_subId', 1);

            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.id).toBeDefined();

            voteId = String(json.id);
        });

        test('check that image was voted', async () => {
            const [response, json] = await catsVotes.getVoteById(voteId);

            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.id).toBeDefined();
            expect(json.id).toBe(voteId);
            expect(json.image_id).toBe(imageId);

            // Additional integration checks for vote.image
            expect(json.image).toBeDefined();
            expect(typeof json.image).toBe('object');
            // id and url should be strings and match the uploaded image
            expect(typeof json.image.id).toBe('string');
            expect(json.image.id).toBe(String(imageId));
            expect(typeof json.image.url).toBe('string');
            expect(json.image.url).toBe(String(uploadedImageJson.url));
        });

        test('favourite the image', async () => {
            const [response, json] = await catsFavourites.favoureImage(imageId, 'Aapo_subId');
            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.id).toBeDefined();

            favouriteId = String(json.id);
        });

        test('check that image was favourited', async () => {
            const [response, json] = await catsFavourites.getFavouriteById(favouriteId);

            expect(response.ok).toBeTruthy();
            expect(json).toBeDefined();
            expect(json.id).toBeDefined();
            expect(json.id).toBe(favouriteId);
            expect(json.image_id).toBe(imageId);

            // Additional integration checks for favourite.image
            expect(json.image).toBeDefined();
            expect(typeof json.image).toBe('object');
            // id and url should be strings and match the uploaded image
            expect(typeof json.image.id).toBe('string');
            expect(json.image.id).toBe(String(imageId));
            expect(typeof json.image.url).toBe('string');
            expect(json.image.url).toBe(String(uploadedImageJson.url));
        });

        test('delete the image', async () => {
            const response = await catsImages.deleteImage(imageId);
            expect(response.ok).toBeTruthy();
        });

        test('check that image was deleted', async () => {
            const getResponse = await fetchApiService.getById('/images', imageId);
            expect(getResponse.status).toBe(400);
            const text = await getResponse.text();
            expect(text).toBe("Couldn't find an image matching the passed 'id' of " + imageId);
        });
    });
});
