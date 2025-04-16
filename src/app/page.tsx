import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Actors CRUD
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Un simple CRUD hecho en Next.js que contiene las siguientes vistas
        </p>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Vista para listar actores/actrices con sus accioes disponibles{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              editar/eliminar
            </code>
          </li>
          <li className="tracking-[-.01em]">
            Vista para registrar o editar un actor/actriz
          </li>
        </ol>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/actors"
          >
            Ir al listado
          </Link>
          <Link
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="/actors/new"
          >
            Ir al registro
          </Link>
        </div>
      </main>
      <footer className="row-start-3 justify-center">
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          2025 - <a className="over:underline hover:underline-offset-4"
            href="https://github.com/users/GenesisVargasJ/"
            target="_blank"
            rel="noopener noreferrer"
          >@genesisvargasj
          </a></span>
      </footer>
    </div>
  );
}
