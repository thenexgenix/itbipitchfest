import Hero from "@/components/modules/events/innnovation-workshop/Hero";
import InnovationAbout from "@/components/modules/events/innnovation-workshop/InnovationAbout";
import InnovationAgenda from "@/components/modules/events/innnovation-workshop/InnovationAgenda";
import PrizeMoney from "@/components/modules/events/innnovation-workshop/PrizeMoney";
import InnovationCountdown from "@/components/modules/events/innnovation-workshop/innovationCountdown";
import InnovationEnvironment from "@/components/modules/events/innnovation-workshop/innovationEnvironment";
import InnovationKeyDiscussion from "@/components/modules/events/innnovation-workshop/InnovationKeyDiscussion";
import InnovationSpeaker from "@/components/modules/events/innnovation-workshop/InnovationSpeaker";
import InnovationNote from "@/components/modules/events/innnovation-workshop/InnovationNote";
import InnovationOrganizer from "@/components/modules/events/innnovation-workshop/InnovationOrganizer";
import InnovationPartner from "@/components/modules/events/innnovation-workshop/InnovationPartner";
import InnovationRegistration from "@/components/modules/events/innnovation-workshop/InnovationRegistration";
import InnovationWhatYouWillGain from "@/components/modules/events/innnovation-workshop/InnovationWhatYouWillGain";
import InnovationWhoShouldAttend from "@/components/modules/events/innnovation-workshop/InnovationWhoShouldAttend";
import InnovationPastEvent from "@/components/modules/events/innnovation-workshop/innovationPastEvents";

export default function Home() {
  return (
    <main>
      <Hero />
      <InnovationCountdown />
      <InnovationPastEvent />
      <InnovationAbout />
      <InnovationOrganizer />
      <InnovationPartner />
      <PrizeMoney />
      <InnovationAgenda />
      <InnovationNote />
      <InnovationSpeaker />
      <InnovationEnvironment />
      <InnovationKeyDiscussion />
      <InnovationWhoShouldAttend />
      <InnovationWhatYouWillGain />
      <InnovationRegistration />
    </main>
  );
}
