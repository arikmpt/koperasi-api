import { IsOptional, IsString } from 'class-validator';

export class MetaPaginationRequest {
    @IsString()
    @IsOptional()
    page?: string;

    @IsString()
    @IsOptional()
    perPage?: string;
}

export interface MetaPaginationResponse {
    meta?: {
        page: number;
        perPage: number;
        totalPage: number;
        totalData: number;
    };
}
