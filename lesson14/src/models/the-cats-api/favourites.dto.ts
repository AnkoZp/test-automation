import { ImageDto } from "./image.dto";

export interface FavouritesDto {
    id: number;
    user_id: string
    image_id: string;
    sub_id: string;
    created_at: string;
    image : ImageDto;
}
