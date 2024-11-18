import { Games } from "../../../models/Games";
import { HttpResponse } from "../protocol";

export interface IGetGamesControllers  {
    handle(): Promise<HttpResponse<Games[]>>
}

export interface IGetGamesRepository{
    getGames(): Promise<Games>;
}