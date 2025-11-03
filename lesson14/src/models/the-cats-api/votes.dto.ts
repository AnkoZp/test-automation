import { ImageDto } from "./image.dto";

export interface VoteDto {
    id: number;
    user_id: string;
    image_id: string;
    sub_id: string;
    created_at: string;
    value: number;
    country_code: string;
    image : ImageDto;
}
