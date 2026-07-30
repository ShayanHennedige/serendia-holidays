import CustomTripForm from './components/CustomTripForm';
import PlannerIntro from './components/PlannerIntro';

export const metadata = {
  title: 'Plan Your Trip - Serendia Holidays By Venom',
  description: 'Fill in your trip details and send a personalised itinerary inquiry to Serendia Holidays.',
};

export default function CustomizePage() {
  return (
    <main className="planner-page">
      <section className="planner-page-shell">
        <PlannerIntro />
        <div className="planner-page-body">
          <CustomTripForm />
        </div>
      </section>
    </main>
  );
}
