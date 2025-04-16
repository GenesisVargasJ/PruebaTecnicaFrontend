import Actor from "./Actor";

interface ActorRepository {
  getAll: () => Promise<Array<Actor>>;
}

export default ActorRepository;