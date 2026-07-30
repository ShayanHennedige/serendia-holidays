import AIStaffStudio from './AIStaffStudio';

export const metadata = {
  title: 'AI Review Studio - Serendia Holidays',
  robots: { index: false, follow: false },
};

export default function StaffAiStudioPage() {
  return (
    <main className="staff-studio-page">
      <AIStaffStudio />
    </main>
  );
}
