import { FeatureCard } from "@/components/featureCard";
import { SignInButton } from "@/components/login/signInButton";
import { ClipboardCheck, Layout, PlusCircle } from "lucide-react";

const features = [
  {
    icon: Layout,
    title: "Tableros intuitivos",
    description:
      "Visualiza y gestiona tus tareas con tableros personalizables y fáciles de usar.",
  },
  {
    icon: ClipboardCheck,
    title: "Gestión de listas",
    description:
      "Alterna fácilmente entre vistas de lista y tablero para controlar cada detalle de tus proyectos.",
  },
  {
    icon: PlusCircle,
    title: "Agrega tareas facilmente",
    description:
      "Añade nuevas tareas a tus tableros, manteniendo todo organizado y en seguimiento",
  },
];

export default function Login() {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center px-4">
      <nav className="container mx-auto p-4">
        <div className="text-2xl font-bold text-primary">
          <span>SimpleTaskBoard</span>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Organiza tus tareas como nunca antes
        </h1>
        <p className="text-xl mb-8 text-gray-600">
          SimpleTaskBoard te ayuda a visualizar tu trabajo y maximizar la
          eficiencia de forma sencilla e intuitiva.
        </p>
        <SignInButton />
      </section>

      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Características principales
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <FeatureCard key={index} feature={item} />
          ))}
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            ¿Listo para mejorar tu productividad?
          </h2>
          <p className="text-xl mb-8">
            Únete a miles de equipos que ya están usando SimpleTaskBoard para
            alcanzar sus metas.
          </p>
        </div>
      </section>

      <footer className="container mx-auto p-4 text-center text-gray-600">
        <p>&copy; 2024 SimpleTaskBoard. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
