"use client";

import { useState } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:3000";

type FormType = "JOIN" | "GENERAL";

interface ContactFormProps {
  enrollmentOpen: boolean;
  enrollmentClosedMessage: string;
}

const DIVISIONS = [
  "ジュニア（年齢制限あり）",
  "競技選手",
  "ストリーマー",
  "デザイナー",
  "動画エディター",
  "チーム運営スタッフ",
];

const TRACKER_REQUIRED_DIVISIONS = [
  "ジュニア（年齢制限あり）",
  "競技選手",
];

const DEVICES = ["PC", "PS4・PS5・XBOX", "スイッチ", "その他"];

export function ContactForm({ enrollmentOpen, enrollmentClosedMessage }: ContactFormProps) {
  const [formType, setFormType] = useState<FormType>("GENERAL");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // JOIN form state
  const [join, setJoin] = useState({
    name: "",
    desired_division: "",
    age: "",
    date_of_birth: "",
    epic_id: "",
    x_id: "",
    device: "",
    pr_rank: "",
    tracker_url: "",
    team_history: "",
    motivation: "",
    appeal: "",
    parent_consent: false,
    parent_x_id: "",
    parent_can_join: "",
  });

  function updateJoin(field: string, value: string | boolean) {
    setJoin(prev => ({ ...prev, [field]: value }));
  }

  const ageNum = parseInt(join.age, 10);
  const showParentConsent = !isNaN(ageNum) && ageNum >= 13;
  const trackerRequired = TRACKER_REQUIRED_DIVISIONS.includes(join.desired_division);

  async function handleJoinSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!join.name.trim()) { setError("活動名を入力してください"); return; }
    if (!join.desired_division) { setError("希望部門を選択してください"); return; }
    if (!join.age || isNaN(parseInt(join.age, 10))) { setError("年齢を入力してください"); return; }
    if (!join.date_of_birth) { setError("生年月日を入力してください"); return; }
    if (!join.epic_id.trim()) { setError("Epic IDを入力してください"); return; }
    if (!join.x_id.trim()) { setError("X IDを入力してください"); return; }
    if (!join.device) { setError("デバイスを選択してください"); return; }
    if (trackerRequired && !join.tracker_url.trim()) { setError("選手・ジュニア希望の方はトラッカーURLが必須です"); return; }
    if (!join.team_history.trim()) { setError("他チーム経歴を入力してください（なしの場合は「なし」）"); return; }
    if (!join.motivation.trim()) { setError("志望理由を入力してください"); return; }
    if (!join.appeal.trim()) { setError("アピールポイントを入力してください"); return; }
    if (showParentConsent && !join.parent_consent) { setError("保護者の同意にチェックを入れてください"); return; }

    setSubmitting(true);
    try {
      const res = await fetch(`${API_BASE}/api/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: join.name.trim(),
          age: parseInt(join.age, 10),
          date_of_birth: join.date_of_birth,
          epic_id: join.epic_id.trim(),
          motivation: join.motivation.trim(),
          type: "JOIN",
          desired_division: join.desired_division,
          x_id: join.x_id.trim().replace(/^@/, ""),
          device: join.device,
          team_history: join.team_history.trim(),
          appeal: join.appeal.trim(),
          pr_rank: join.pr_rank.trim() || undefined,
          tracker_url: join.tracker_url.trim() || undefined,
          parent_consent: join.parent_consent || undefined,
          parent_x_id: join.parent_x_id.trim().replace(/^@/, "") || undefined,
          parent_can_join: join.parent_can_join || undefined,
        }),
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

  async function handleGeneralSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const body: Record<string, string | number> = { type: "GENERAL" };
    formData.forEach((value, key) => {
      if (value) body[key] = String(value);
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
        {formType === "JOIN" ? (
          <div className="text-sub-text space-y-2">
            <p>ご応募ありがとうございます</p>
            <p className="text-sm">
              書類審査の上、通過された方にXのDMにてご連絡いたします
              <br />
              DMを受信できるよう設定をお願いいたします
            </p>
          </div>
        ) : (
          <p className="text-sub-text">
            お問い合わせありがとうございます。内容を確認の上、ご連絡いたします
          </p>
        )}
      </div>
    );
  }

  const inputClass =
    "w-full bg-card border border-border rounded-sm px-4 py-3 text-white placeholder:text-sub-text/50 focus:outline-none focus:border-neos-red transition-colors text-sm";
  const selectClass =
    "w-full bg-card border border-border rounded-sm px-4 py-3 text-white focus:outline-none focus:border-neos-red transition-colors text-sm";
  const labelClass = "block text-sm text-sub-text mb-1";

  return (
    <div>
      {/* Type selector */}
      <div className="flex gap-2 mb-8">
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
      </div>

      {/* 入隊受付停止中メッセージ */}
      {!enrollmentOpen && formType === "JOIN" && (
        <div className="text-center py-12 px-4 bg-card rounded-sm border border-border">
          <p className="text-sub-text leading-relaxed whitespace-pre-line">
            {enrollmentClosedMessage}
          </p>
        </div>
      )}

      {/* ===== JOIN FORM ===== */}
      {formType === "JOIN" && enrollmentOpen && (
        <form onSubmit={handleJoinSubmit} className="space-y-8">
          <p className="text-xs text-sub-text">
            ご記入いただいた内容をもとに書類審査を行います。審査を通過された方にのみ、XのDMにて面談日程をご連絡いたします
          </p>

          {/* 基本情報 */}
          <fieldset className="space-y-4">
            <legend className="text-xs font-medium text-sub-text/60 tracking-wider mb-2">基本情報</legend>

            <div>
              <label className={labelClass}>活動名（ハンドルネーム） <span className="text-neos-red">*</span></label>
              <input value={join.name} onChange={e => updateJoin("name", e.target.value)} placeholder="ゲーム内で使用している名前" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>希望部門 <span className="text-neos-red">*</span></label>
              <select value={join.desired_division} onChange={e => updateJoin("desired_division", e.target.value)} className={selectClass}>
                <option value="">選択してください</option>
                {DIVISIONS.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>年齢 <span className="text-neos-red">*</span></label>
                <input type="number" min={1} max={99} value={join.age} onChange={e => updateJoin("age", e.target.value)} placeholder="現在の年齢" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>生年月日 <span className="text-neos-red">*</span></label>
                <input type="date" value={join.date_of_birth} onChange={e => updateJoin("date_of_birth", e.target.value)} className={inputClass} />
              </div>
            </div>
          </fieldset>

          {/* ゲーム・SNS */}
          <fieldset className="space-y-4">
            <legend className="text-xs font-medium text-sub-text/60 tracking-wider mb-2">ゲーム・SNS</legend>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>Epic ID <span className="text-neos-red">*</span></label>
                <input value={join.epic_id} onChange={e => updateJoin("epic_id", e.target.value)} placeholder="FORTNITEのプレイヤーネーム" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>X ID <span className="text-neos-red">*</span></label>
                <input value={join.x_id} onChange={e => updateJoin("x_id", e.target.value)} placeholder="@なしで入力" className={inputClass} />
              </div>
            </div>

            <div>
              <label className={labelClass}>デバイス <span className="text-neos-red">*</span></label>
              <select value={join.device} onChange={e => updateJoin("device", e.target.value)} className={selectClass}>
                <option value="">選択してください</option>
                {DEVICES.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ASIAパワーランキング</label>
                <input value={join.pr_rank} onChange={e => updateJoin("pr_rank", e.target.value)} placeholder="半角英数字で入力" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>トラッカーURL{trackerRequired ? <span className="text-neos-red"> *</span> : ""}</label>
                <input value={join.tracker_url} onChange={e => updateJoin("tracker_url", e.target.value)} placeholder="Fortnite TrackerのプロフィールURL" className={inputClass} />
              </div>
            </div>
          </fieldset>

          {/* 志望について */}
          <fieldset className="space-y-4">
            <legend className="text-xs font-medium text-sub-text/60 tracking-wider mb-2">志望について</legend>

            <div>
              <label className={labelClass}>他チームに所属していた経歴 <span className="text-neos-red">*</span></label>
              <input value={join.team_history} onChange={e => updateJoin("team_history", e.target.value)} placeholder="チーム名を記入（なければ「なし」）" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>NEOSを希望する理由 <span className="text-neos-red">*</span></label>
              <textarea value={join.motivation} onChange={e => updateJoin("motivation", e.target.value)} rows={4} placeholder="入隊を希望する理由を教えてください" className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>アピールポイント <span className="text-neos-red">*</span></label>
              <textarea value={join.appeal} onChange={e => updateJoin("appeal", e.target.value)} rows={4} placeholder="ご自身のアピールポイントをご記入ください" className={inputClass} />
            </div>
          </fieldset>

          {/* 保護者について */}
          <fieldset className="space-y-4">
            <legend className="text-xs font-medium text-sub-text/60 tracking-wider mb-2">保護者について</legend>

            {showParentConsent && (
              <div className="rounded-sm border border-neos-red/30 bg-neos-red/5 p-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={join.parent_consent}
                    onChange={e => updateJoin("parent_consent", e.target.checked)}
                    className="mt-1 accent-[#E50914]"
                  />
                  <span className="text-sm text-white">
                    保護者の同意を得ています <span className="text-neos-red">*</span>
                    <span className="block text-xs text-sub-text mt-1">
                      未成年の方は保護者の同意が必要です
                    </span>
                  </span>
                </label>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>保護者のX ID</label>
                <input value={join.parent_x_id} onChange={e => updateJoin("parent_x_id", e.target.value)} placeholder="@なしで入力" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>保護者の入隊</label>
                <select value={join.parent_can_join} onChange={e => updateJoin("parent_can_join", e.target.value)} className={selectClass}>
                  <option value="">選択してください</option>
                  <option value="可能">入隊可能</option>
                  <option value="不可">入隊はできない</option>
                </select>
              </div>
            </div>
          </fieldset>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <p className="text-xs text-sub-text/60">
            送信することで、
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-neos-red hover:text-neos-red-bright transition-colors">
              プライバシーポリシー
            </a>
            に同意したものとみなされます
          </p>

          <button type="submit" disabled={submitting} className="w-full bg-neos-red hover:bg-neos-red-bright disabled:opacity-50 text-white font-medium py-3 rounded-sm transition-colors">
            {submitting ? "送信中..." : "送信する"}
          </button>
        </form>
      )}

      {/* ===== GENERAL FORM ===== */}
      {formType === "GENERAL" && (
        <form onSubmit={handleGeneralSubmit} className="space-y-5">
          <div>
            <label className={labelClass}>お名前 <span className="text-neos-red">*</span></label>
            <input name="name" required placeholder="お名前" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>メールアドレス</label>
            <input name="email" type="email" placeholder="example@email.com" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>メッセージ <span className="text-neos-red">*</span></label>
            <textarea name="message" rows={6} required placeholder="お問い合わせ内容" className={inputClass} />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <p className="text-xs text-sub-text/60">
            送信することで、
            <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-neos-red hover:text-neos-red-bright transition-colors">
              プライバシーポリシー
            </a>
            に同意したものとみなされます
          </p>

          <button type="submit" disabled={submitting} className="w-full bg-neos-red hover:bg-neos-red-bright disabled:opacity-50 text-white font-medium py-3 rounded-sm transition-colors">
            {submitting ? "送信中..." : "送信する"}
          </button>
        </form>
      )}
    </div>
  );
}
