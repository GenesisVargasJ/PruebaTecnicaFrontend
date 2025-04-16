import { IActor, IColumn } from "@/lib/features/actor/domain/Actor";
import React from "react";
import TextIconButton from "./buttons/TextIconButton";

const DataTable = ({ data, columns }: { data: IActor[], columns: IColumn[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full text-sm text-center text-gray-600">
        <thead>
          <tr className="bg-gray-200 uppercase leading-normal">
            {columns.map((column) => (
              <th
                key={column.key}
                className={'py-3 px-3'}
              >
                {column.title}
              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={`row-${row.id}`} className="border border-gray-200 hover:bg-gray-100">
              {columns.map((column) => (
                <td
                  key={`row-${row.id}-column-${column.key}`}
                  className={'py-3 px-3'}
                >
                  {row[column.key as keyof IActor]}
                </td>
              ))}
              <td
                key={`row-${row.id}-column-acciones`}
                className={'py-3 px-3'}>
                <TextIconButton className={'bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center'}>
                  <>
                    <img src="/icons/edit.svg" width={18} /> Editar
                  </>
                </TextIconButton>
                {" "}
                <TextIconButton className={'bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-2 rounded inline-flex items-center'}>
                  <>
                    <img src="/icons/delete.svg" width={18} /> Borrar
                  </>
                </TextIconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;