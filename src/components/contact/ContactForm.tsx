"use client";

import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";

type FormType = "JOIN" | "GENERAL";

interface ContactFormProps {
  enrollmentOpen: boolean;
  enrollmentClosedMessage: string;
}

export function ContactForm({ enrollmentOpen, enrollmentClosedMessage }: ContactFormProps) {
  const [formType, setFormType] = useState<FormType>(enrollmentOpen ? "JOIN" : "GENERAL");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const body: Record<string, string | number> = { type: formType };

    formData.forEach((value, key) => {
      if (value) {
        body[key] = key === "age" ? Number(value) : String(value);
      }
    });

    try {
      const res = await fetch(`${API_BASE}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "送信に失敗しました");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "送信に失敗しました");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-16">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-xl font-bold text-white mb-2">送信完了</h3>
        <p className="text-sub-text">
          お問い合わせありがとうございます。内容を確認の上、ご連絡いたします。
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full bg-card border border-border rounded-sm px-4 py-3 text-white placeholder:text-sub-text/50 focus:outline-none focus:border-neos-red transition-colors";

  return (
    <div>
      {/* Type selector */}
      <div className="flex gap-2 mb-8">
        {enrollmentOpen ? (
          <button
            type="button"
            onClick={() => setFormType("JOIN")}
            className={`flex-1 py-3 text-sm font-medium rounded-sm transition-colors ${
              formType === "JOIN"
                ? "bg-neos-red text-white"
                : "bg-card text-sub-text hover:text-white"
            }`}
          >
            入隊希望
          </button>
        ) : (
          <div className="flex-1 py-3 text-sm font-medium rounded-sm bg-card/50 text-sub-text/50 text-center cursor-not-allowed">
            入隊希望（受付停止中）
          </div>
        )}
        <button
          type="button"
          onClick={() => setFormType("GENERAL")}
          className={`flex-1 py-3 text-sm font-medium rounded-sm transition-colors ${
            formType === "GENERAL"
              ? "bg-neos-red text-white"
              : "bg-card text-sub-text hover:text-white"
          }`}
        >
          一般お問い合わせ
        </button>
      </div>

      {/* 入隊受付停止中メッセージ */}
      {!enrollmentOpen && formType === "JOIN" && (
        <div className="text-center py-12 px-4 bg-card rounded-sm border border-border">
          <p className="text-sub-text leading-relaxed whitespace-pre-line">
            {enrollmentClosedMessage}
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className={`space-y-5 ${!enrollmentOpen && formType === "JOIN" ? "hidden" : ""}`}>
        <div>
          <label className="block text-sm text-sub-text mb-1">
            お名前 <span className="text-neos-red">*</span>
          </label>
          <input
            name="name"
            required
            placeholder="お名前"
            className={inputClass}
          />
        </div>

        <div>
          <label className="block text-sm text-sub-text mb-1">
            メールアドレス
          </label>
          <input
            name="email"
            type="email"
            placeholder="example@email.com"
            className={inputClass}
          />
        </div>

        {formType === "JOIN" && (
          <>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-sub-text mb-1">年齢</label>
                <input
                  name="age"
                  type="number"
                  min={1}
                  max={99}
                  placeholder="年齢"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-sub-text mb-1">
                  Epic ID
                </label>
                <input
                  name="epic_id"
                  placeholder="Epic Games ID"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-sub-text mb-1">
                プレイ歴
              </label>
              <input
                name="play_history"
                placeholder="例: Fortnite 3年"
                className={inputClass}
              />
            </div>

            <div>
              <label className="block text-sm text-sub-text mb-1">
                志望動機
              </label>
              <textarea
                name="motivation"
                rows={4}
                placeholder="入隊を希望する理由をお聞かせください"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-sub-text mb-1">
                  保護者名
                </label>
                <input
                  name="parent_name"
                  placeholder="未成年の方は保護者名"
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-sm text-sub-text mb-1">
                  保護者連絡先
                </label>
                <input
                  name="parent_contact"
                  placeholder="電話番号 or メール"
                  className={inputClass}
                />
              </div>
            </div>
          </>
        )}

        {formType === "GENERAL" && (
          <div>
            <label className="block text-sm text-sub-text mb-1">
              メッセージ <span className="text-neos-red">*</span>
            </label>
            <textarea
              name="message"
              rows={6}
              required
              placeholder="お問い合わせ内容"
              className={inputClass}
            />
          </div>
        )}

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        <p className="text-xs text-sub-text/60">
          送信することで、
          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-neos-red hover:text-neos-red-bright transition-colors">
            プライバシーポリシー
          </a>
          に同意したものとみなされます。
        </p>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-neos-red hover:bg-neos-red-bright disabled:opacity-50 text-white font-medium py-3 rounded-sm transition-colors"
        >
          {submitting ? "送信中..." : "送信する"}
        </button>
      </form>
    </div>
  );
}
