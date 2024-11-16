import { NewBoardForm } from "@/components/board/newBoardForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function Page() {
  return (
    <div>
      <div className="pb-4">
        <h1>Create a new board</h1>
      </div>
      <section className="max-w-xl">
        <Card>
          <CardHeader />
          <CardContent>
            <NewBoardForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
