// Optional: dynamic rendering
export const dynamic = "force-dynamic";

// Correct type from Next.js App Router
type PageProps = {
  params: {
    id: string;
  };
};

export default function Page({ params }: PageProps) {
  return (
    <div>
      <h1>Open in App</h1>
      <p>Deep link ID: {params.id}</p>
    </div>
  );
}
