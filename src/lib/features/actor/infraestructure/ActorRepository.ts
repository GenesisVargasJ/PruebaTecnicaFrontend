import Actor from "../domain/Actor";
import IActorRepository from "../domain/ActorRepository";
import api from "@/lib/api";
  
const actorRepository: IActorRepository = {
  getAll: async(): Promise<Array<Actor>> => {
    const actors = await api.getActors();
    return actors;
  }
};

export default actorRepository;