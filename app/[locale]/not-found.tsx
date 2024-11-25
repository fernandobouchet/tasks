import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Sorry, the page you are looking for does not exist.
      </p>
      <Button asChild>
        <Link href="/">Back to top</Link>
      </Button>
    </div>
  );
}
