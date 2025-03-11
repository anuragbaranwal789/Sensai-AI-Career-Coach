import { redirect } from "next/navigation";
import { getUserOnboardingStatus } from "@/actions/user";

const IndustryInsightPage = async () => {
    const { isOnboarded } = await getUserOnboardingStatus();
    
      if (!isOnboarded) {
        redirect("/onboarding");
      }
  return (
    <div>IndustryInsightPage</div>
  )
}

export default IndustryInsightPage