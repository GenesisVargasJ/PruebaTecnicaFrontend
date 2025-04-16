import Link from "next/link";
import ActorList from "@/components/actor/ActorList";

export default function Actors() {
  return (
    <div className="flex flex-col justify-center antialiased text-gray-600 min-h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <div className="h-full">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">Listado de Actores</h1>
        <div className="flex justify-end mb-5">
          <Link
            href={"/actors/new"}
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            Registrar
          </Link>
        </div>
        <ActorList />
      </div>
    </div>
  );
}