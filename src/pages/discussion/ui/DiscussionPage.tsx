import { useState } from "react";
import { LandingHeader } from "@/widgets/landing-header";
import { DiscussionChat } from "./DiscussionChat";
import { DiscussionModal } from "./DiscussionModal";
import type { DiscussionFilters } from "./DiscussionModal";

export const DiscussionPage = () => {
  const [filters, setFilters] = useState<DiscussionFilters | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F8F8]">
      <LandingHeader />
      {filters ? <DiscussionChat filters={filters} /> : <DiscussionModal onContinue={setFilters} />}
    </div>
  );
};
