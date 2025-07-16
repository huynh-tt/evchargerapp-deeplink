export const dynamic = "force-dynamic";

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Open in App</h1>
      <p>Link ID: {params.id}</p>
    </div>
  );
}
