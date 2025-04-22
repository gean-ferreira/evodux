import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <h1 className="text-indigo-600 text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-bold mb-6">Página não encontrada</h2>
        <p className="text-gray-600 mb-8">
          A página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" className="btn btn-primary">
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
}
