import Actor from "../domain/Actor";
import IActorRepository from "../domain/ActorRepository";

const getActorsUseCase = async (actorRepository: IActorRepository): Promise<Actor[]> => {
  const actors = await actorRepository.getAll();
  return actors;
}

export default getActorsUseCase;