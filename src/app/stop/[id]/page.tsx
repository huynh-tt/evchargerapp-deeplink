import { StartContent } from "~/components";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          color: "red",
          margin: "20px 0",
        }}
      >
        Deeplink ID: {id}
      </h1>
      <StartContent id={id} />
    </div>
  );
}
