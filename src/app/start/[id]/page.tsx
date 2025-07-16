// src/app/start/[id]/page.tsx

interface PageProps {
  params: {
    id: string; // 'id' matches the folder name '[id]'
  };
  searchParams?: { [key: string]: string | string[] | undefined }; // Optional, if you use search params
}

export default function StartPage({ params }: PageProps) {
  const { id } = params;

  return (
    <div>
      <h1>Start Page for ID: {id}</h1>
      {/* Your component content */}
    </div>
  );
}
