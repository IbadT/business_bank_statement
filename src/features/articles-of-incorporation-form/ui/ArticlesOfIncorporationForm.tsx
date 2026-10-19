import { useTranslation } from "react-i18next";
import { HELP_TEXT_PLACEHOLDER } from "@/shared/config";
import { fieldChange } from "@/shared/lib/field-change";
import { SectionHeader } from "@/shared/ui/section-header";
import { InputCalendar, InputField } from "@/shared/ui/input";
import { FileUpload } from "@/shared/ui/file-upload";
import { ProfileSelect } from "@/entities/profile";
import { AddressFields, emptyAddress } from "@/entities/location";
import { defaultGeneral, defaultPerson } from "../config/defaults";
import { useArticlesStep } from "../model/store";

export const ArticlesOfIncorporationForm = () => {
  const { t } = useTranslation();
  const [general, setGeneral] = useArticlesStep("general", defaultGeneral);
  const [principalAddress, setPrincipalAddress] = useArticlesStep("principalAddress", emptyAddress);
  const [agent, setAgent] = useArticlesStep("agent", defaultPerson);
  const [agentAddress, setAgentAddress] = useArticlesStep("agentAddress", emptyAddress);
  const [director, setDirector] = useArticlesStep("director", defaultPerson);
  const [directorAddress, setDirectorAddress] = useArticlesStep("directorAddress", emptyAddress);
  const [signatureName, setSignatureName] = useArticlesStep("signatureName", "");

  const onGeneral = fieldChange(setGeneral);

  return (
    <div className="flex flex-col gap-6 w-full max-w-[480px] mx-auto">
      <ProfileSelect value={general.profile} onChange={onGeneral} />

      <div className="form-section">
        <SectionHeader title={t("general_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField
          placeholder={t("filling_state")}
          value={general.fillingState}
          name="fillingState"
          onChange={onGeneral}
        />
        <InputCalendar
          placeholder={t("filling_date")}
          value={general.fillingDate}
          name="fillingDate"
          onChange={onGeneral}
        />
        <InputField
          placeholder={t("corporate_name")}
          value={general.corporateName}
          name="corporateName"
          onChange={onGeneral}
        />
      </div>

      <div className="form-section">
        <SectionHeader title={t("principal_address_info")} helpText={HELP_TEXT_PLACEHOLDER} />
        <AddressFields value={principalAddress} onChange={fieldChange(setPrincipalAddress)} />
      </div>

      <div className="form-section">
        <SectionHeader title={t("registered_agent_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={agent.name} name="name" onChange={fieldChange(setAgent)} />
        <AddressFields value={agentAddress} onChange={fieldChange(setAgentAddress)} cityLabelKey="town" />
      </div>

      <div className="form-section">
        <SectionHeader title={t("director_information")} helpText={HELP_TEXT_PLACEHOLDER} />
        <InputField placeholder={t("name")} value={director.name} name="name" onChange={fieldChange(setDirector)} />
        <AddressFields value={directorAddress} onChange={fieldChange(setDirectorAddress)} cityLabelKey="town" />
        <FileUpload
          label={t("upload_directors_signature")}
          hint={t("signature_hint")}
          fileName={signatureName}
          onChange={(file) => setSignatureName(file?.name ?? "")}
        />
      </div>
    </div>
  );
};
