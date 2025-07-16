import { StartContent } from "~/components";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1 className="text-red-500 text-2xl text-center py-10">
        Deeplink ID: {id}
      </h1>
      <StartContent id={id} />
    </div>
  );
}
