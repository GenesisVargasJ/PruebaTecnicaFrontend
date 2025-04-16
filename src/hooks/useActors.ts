//import { fetchApiUsers, setActors } from "@/lib/features/actor/infraestructure/actorSlice";
//import { useAppSelector, useAppDispatch } from "@/lib/hooks";
import getActorsUseCase from "@/lib/features/actor/application/GetActorsUseCase";
import Actor from "@/lib/features/actor/domain/Actor";
import actorRepository from "@/lib/features/actor/infraestructure/ActorRepository";
import { useEffect, useState } from "react";

const useActors = () => {
  //const actors = useAppSelector((state) => state.actors);
  //const dispatch = useAppDispatch()
  const [actors, setActors] = useState<Actor[]>([])

  const readActors = async () => {
    const actorsFromApi = await getActorsUseCase(actorRepository);
    setActors(actorsFromApi);
  };
  
  useEffect(() => {
    readActors();
  }, []);
  
  return { actors, };
}

export default useActors;