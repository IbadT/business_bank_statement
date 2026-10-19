import { useState } from "react";
import { Button } from "@/shared/ui/button";

interface ReferralLinkProps {
  link: string;
}

export const ReferralLink = ({ link }: ReferralLinkProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
    } catch {
      const el = document.createElement("textarea");
      el.value = link;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-[#171717] text-sm truncate min-w-0" title={link}>
        {link}
      </span>
      <Button
        color="primary"
        onClick={handleCopy}
        className="px-5 py-2 text-sm shrink-0"
        // icon={copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
        text={copied ? "Copied!" : "Copy"}
      />
    </div>
  );
};
