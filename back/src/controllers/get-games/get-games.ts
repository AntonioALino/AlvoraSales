import { IGetGamesControllers, IGetGamesRepository } from "./protocols";

export class GetGamesController implements IGetGamesControllers{
    
    constructor(private readonly getGamesRepository: IGetGamesRepository){}
    
    async handle(){
        try {
            const games = await this.getGamesRepository.getGames();

        return {
            statusCode: 200,
            body: games
        }

        }
        catch(error){
            return {
                statusCode: 500,
                body: "Something went wrong"
            }
        }
    }
}