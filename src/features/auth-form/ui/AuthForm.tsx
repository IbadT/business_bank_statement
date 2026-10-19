import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import { FaTelegramPlane } from "react-icons/fa";
import { useSessionStore } from "@/entities/session";
import { ROUTES } from "@/shared/config";
import { Button } from "@/shared/ui/button";
import { InputField } from "@/shared/ui/input";

type AuthMode = "signIn" | "signUp";
type AuthStep = "main" | "forgotEmail" | "code" | "newPassword";

interface AuthFormProps {
  mode: AuthMode;
}

const MAIN_FIELDS: Record<AuthMode, readonly string[]> = {
  signIn: ["email", "password"],
  signUp: ["name", "email", "password"],
};

const STEP_FIELDS: Record<Exclude<AuthStep, "main">, readonly string[]> = {
  forgotEmail: ["email"],
  code: ["code"],
  newPassword: ["newPassword", "repeatPassword"],
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const maskEmail = (email: string) => {
  const [name, domain] = email.split("@");
  if (!domain) return email;
  return `${name.length > 2 ? name.slice(0, 2) : name[0]}***@${domain}`;
};

const isPasswordField = (field: string) => /password/i.test(field);

export const AuthForm = ({ mode }: AuthFormProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const signIn = useSessionStore((state) => state.signIn);
  const [values, setValues] = useState<Record<string, string>>({});
  const [step, setStep] = useState<AuthStep>("main");
  const [error, setError] = useState("");

  const isSignIn = mode === "signIn";
  const fields = step === "main" ? MAIN_FIELDS[mode] : STEP_FIELDS[step];
  // В регистрации после Continue вводится код, после него — вход
  const isFinalCodeStep = step === "code" && !isSignIn;

  const goTo = (next: AuthStep) => {
    setStep(next);
    setError("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const finish = () => {
    // Заглушка: запроса на сервер нет, любые введённые данные считаем валидными
    signIn();
    navigate(ROUTES.home);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (fields.some((field) => !values[field]?.trim())) {
      setError(t("auth.fillAll"));
      return;
    }

    if (step === "main") {
      if (isSignIn) {
        // Заглушка проверки данных: без сервера считаем неверными некорректный email или короткий пароль
        if (!EMAIL_RE.test(values.email) || values.password.length < 6) {
          setError(t("auth.invalid"));
          return;
        }
        finish();
      } else {
        goTo("code");
      }
      return;
    }

    if (step === "forgotEmail") return goTo("code");
    if (isFinalCodeStep) return finish();
    if (step === "code") return goTo("newPassword");

    if (values.newPassword !== values.repeatPassword) {
      setError(t("auth.mismatch"));
      return;
    }
    setValues({});
    goTo("main");
  };

  const title =
    step === "forgotEmail"
      ? t("auth.forgotTitle")
      : step === "code"
        ? t("auth.checkEmail")
        : step === "newPassword"
          ? t("auth.newPassword")
          : t(isSignIn ? "auth.signInTitle" : "auth.createTitle");

  const actionText =
    step === "forgotEmail"
      ? t("auth.send")
      : isFinalCodeStep
        ? t("auth.signUpAction")
        : step === "main"
          ? t(isSignIn ? "auth.signInAction" : "auth.continue")
          : t("auth.continue");

  const getInputType = (field: string) =>
    isPasswordField(field) ? "password" : field === "email" ? "email" : "text";

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-12 w-[600px] max-w-full min-h-[441px] text-center"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-[32px] leading-tight font-extrabold">{title}</h1>

        {step === "main" && (
          <div>
            <div className="flex flex-col text-[var(--primary-gray-text-color)]">
              <p>{t("auth.heroTitle")}</p>
              <p className="text-sm">{t("auth.heroNote")}</p>
            </div>
            <Button
              color="none"
              fullWidth
              className="py-3"
              icon={<FaTelegramPlane size={18} />}
              text={t("auth.telegram")}
            />
          </div>
        )}
        {step === "forgotEmail" && (
          <p className="text-[#736728]">{t("auth.forgotSubtitle")}</p>
        )}
        {step === "code" && (
          <p className="text-[var(--primary-gray-text-color)]">
            {t("auth.codeSubtitle")}{" "}
            <span className="text-[#736728]">
              {maskEmail(values.email ?? "")}
            </span>
          </p>
        )}
      </div>

      {/* {step === "main" && (
        <Button
          color="none"
          fullWidth
          className="py-3"
          icon={<FaTelegramPlane size={18} />}
          text={t("auth.telegram")}
        />
      )} */}

      <div className="flex flex-col gap-4">
        {fields.map((field) => (
          <InputField
            key={field}
            name={field}
            type={getInputType(field)}
            placeholder={t(`auth.${field}`)}
            value={values[field] ?? ""}
            onChange={handleChange}
          />
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {error && <p className="text-sm text-[#FF191D]">{error}</p>}

        <Button
          type="submit"
          color="primary"
          fullWidth
          className="py-3"
          text={actionText}
        />

        {step === "main" && isSignIn && (
          <Button
            color="none"
            fullWidth
            text={t("auth.forgot")}
            onClick={() => goTo("forgotEmail")}
          />
        )}
        {step === "main" && (
          <Button
            color="none"
            fullWidth
            text={t(isSignIn ? "auth.createAccount" : "auth.signInAction")}
            onClick={() => navigate(isSignIn ? ROUTES.signUp : ROUTES.signIn)}
          />
        )}
        {step !== "main" && (
          <Button
            color="none"
            fullWidth
            text={t("auth.back")}
            onClick={() =>
              goTo(
                step === "newPassword"
                  ? "code"
                  : step === "code" && isSignIn
                    ? "forgotEmail"
                    : "main",
              )
            }
          />
        )}
      </div>
    </form>
  );
};
