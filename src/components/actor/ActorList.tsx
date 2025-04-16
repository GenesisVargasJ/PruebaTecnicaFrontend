'use client';
import { IColumn } from "@/types";
import DataTable from "@/components/ui/DataTable";
import useActors from "@/hooks/useActors"

const ActorList = () => {
  const { actors } = useActors();

  const columns: IColumn[] = [{ title: "Nombre", key: "name" }, { title: "Fecha de Nacimiento", key: "birthDate" }, { title: "Sexo", key: "genre" }];
  return (
    <DataTable data={actors} columns={columns} />
  );
}

export default ActorList;