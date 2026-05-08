"use client";

import { useState, useCallback } from "react";
import {
  Users, User, Phone, Mail, IdCard, GraduationCap, BookOpen,
  Lightbulb, Target, Sparkles, FileUp, CreditCard,
  Download, Presentation, Send, Trash2, CheckCircle2,
  AlertCircle, ChevronDown, Hash, Banknote, CircleCheck,
} from "lucide-react";
import Section from "./Section";
import Input from "./Input";
import Textarea from "./Textarea";
import SuccessMessage from "./SuccessMessage";

const PITCH_TEMPLATE_URL = "https://idea.gov.bd/images/Knowledge-center/pitch-template/StartupPitchDeckTemplate.pptx";
const API_URL = "https://aspire-intern-server.thenexgenix.com/api";

const TEAM_SIZE_OPTIONS = [
  { value: 3, label: "3 Members" },
  { value: 4, label: "4 Members" },
  { value: 5, label: "5 Members" },
];

const EMPTY_MEMBER = { name: "", phone: "", email: "", studentId: "", university: "", department: "" };

const initialFormData = {
  teamName: "",
  teamSize: 3,
  leaderName: "",
  leaderPhone: "",
  leaderEmail: "",
  leaderStudentId: "",
  leaderUniversity: "",
  leaderDepartment: "",
  members: [EMPTY_MEMBER, EMPTY_MEMBER, EMPTY_MEMBER, EMPTY_MEMBER],
  ideaTitle: "",
  ideaOverview: "",
  targetMarket: "",
  ideaUnique: "",
  pitchDeck: null,
  videoPitchLink: "",
  leaderTransactionId: "",
  member2TransactionId: "",
  member3TransactionId: "",
  member4TransactionId: "",
  member5TransactionId: "",
};

export default function EventForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const teamSizeValue = parseInt(formData.teamSize);
  const memberCount = teamSizeValue - 1;

  const clearFieldError = useCallback((name) => {
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    clearFieldError(name);
  }, [clearFieldError]);

  const handleTeamSizeChange = useCallback((e) => {
    const newSize = parseInt(e.target.value);
    const newMemberCount = newSize - 1;
    setFormData((prev) => {
      const newMembers = [...prev.members];
      while (newMembers.length < newMemberCount) newMembers.push({ ...EMPTY_MEMBER });
      newMembers.length = newMemberCount;
      return { ...prev, teamSize: newSize, members: newMembers };
    });
  }, []);

  const handleMemberChange = useCallback((index, field, value) => {
    setFormData((prev) => {
      const newMembers = [...prev.members];
      newMembers[index] = { ...newMembers[index], [field]: value };
      return { ...prev, members: newMembers };
    });
    setErrors((prev) => {
      const key = `member${index}${field.charAt(0).toUpperCase() + field.slice(1)}`;
      if (!prev[key]) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }, []);

  const handleFileChange = useCallback((e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.type === "application/pdf") {
      setFormData((prev) => ({ ...prev, pitchDeck: file }));
      clearFieldError("pitchDeck");
    } else {
      setErrors((prev) => ({ ...prev, pitchDeck: "Only PDF files are allowed" }));
    }
  }, [clearFieldError]);

  const handleClearForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
  }, []);

  const validate = () => {
    const e = {};
    if (!formData.teamName?.trim()) e.teamName = "Required";
    if (!formData.leaderName?.trim()) e.leaderName = "Required";
    if (!formData.leaderPhone?.trim()) e.leaderPhone = "Required";
    if (!formData.leaderEmail?.trim()) e.leaderEmail = "Required";
    if (!formData.leaderStudentId?.trim()) e.leaderStudentId = "Required";
    if (!formData.leaderUniversity?.trim()) e.leaderUniversity = "Required";
    if (!formData.ideaTitle?.trim()) e.ideaTitle = "Required";
    if (!formData.ideaOverview?.trim()) e.ideaOverview = "Required";
    if (formData.ideaOverview?.trim().split(/\s+/).length > 400) e.ideaOverview = "Exceeds 400 word limit";
    if (!formData.targetMarket?.trim()) e.targetMarket = "Required";
    if (!formData.pitchDeck) e.pitchDeck = "Pitch deck is required";
    if (!formData.leaderTransactionId?.trim()) e.leaderTransactionId = "Required";

    for (let i = 0; i < memberCount; i++) {
      const m = formData.members[i];
      if (!m?.name?.trim()) e[`member${i}Name`] = "Required";
      if (!m?.phone?.trim()) e[`member${i}Phone`] = "Required";
      if (!m?.email?.trim()) e[`member${i}Email`] = "Required";
      if (!m?.studentId?.trim()) e[`member${i}StudentId`] = "Required";
      if (!m?.university?.trim()) e[`member${i}University`] = "Required";
      const txField = `member${i + 2}TransactionId`;
      if (!formData[txField]?.trim()) e[txField] = "Required";
    }

    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = document.querySelector("[data-error='true']");
      firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setIsLoading(true);
    try {
      const fd = new FormData();
      fd.append("team_name", formData.teamName.trim());
      fd.append("team_size", teamSizeValue);
      fd.append("leader_name", formData.leaderName.trim());
      fd.append("leader_phone", formData.leaderPhone.trim());
      fd.append("leader_email", formData.leaderEmail.trim());
      fd.append("leader_student_id", formData.leaderStudentId.trim());
      fd.append("leader_university", formData.leaderUniversity.trim());
      fd.append("leader_department", formData.leaderDepartment?.trim() || "");
      fd.append("leader_transaction_id", formData.leaderTransactionId.trim());
      fd.append("idea_title", formData.ideaTitle.trim());
      fd.append("idea_overview", formData.ideaOverview.trim());
      fd.append("target_market", formData.targetMarket.trim());
      fd.append("idea_uniqueness", formData.ideaUnique?.trim() || "");
      fd.append("video_pitch_link", "https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // placeholder, field disabled on UI

      for (let i = 0; i < memberCount; i++) {
        const m = formData.members[i];
        const n = i + 2;
        fd.append(`member${n}_name`, m.name?.trim() || "");
        fd.append(`member${n}_phone`, m.phone?.trim() || "");
        fd.append(`member${n}_email`, m.email?.trim() || "");
        fd.append(`member${n}_studentId`, m.studentId?.trim() || "");
        fd.append(`member${n}_university`, m.university?.trim() || "");
        fd.append(`member${n}_department`, m.department?.trim() || "");
        fd.append(`member${n}_TransactionId`, formData[`member${n}TransactionId`]?.trim() || "");
      }

      if (formData.pitchDeck) fd.append("pitch_deck", formData.pitchDeck);

      const response = await fetch(`${API_URL}/registrations/`, { method: "POST", body: fd });
      const result = await response.json();

      if (!response.ok) {
        const msg = result.errors
          ? Object.values(result.errors).flat().join(", ")
          : result.error || "Registration failed";
        throw new Error(msg);
      }

      setSubmitted(true);
      setFormData(initialFormData);
      setErrors({});
      setTimeout(() => setIsLoading(false), 1500);
    } catch (err) {
      setErrors({ submit: err.message });
      setIsLoading(false);
    }
  };

  const errorCount = Object.keys(errors).filter((k) => k !== "submit").length;

  return (
    <>
      {submitted ? (
        <SuccessMessage
          isLoading={isLoading}
          onReset={() => {
            setSubmitted(false);
            setFormData(initialFormData);
            setErrors({});
            setIsLoading(false);
          }}
        />
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-6">

          {/* Pitch Template Banner */}
          <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-100 rounded-lg shrink-0">
                <Presentation className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Pitch Deck Template</p>
                <p className="text-xs text-gray-500 mt-0.5">Download the template to structure your pitch deck before uploading.</p>
              </div>
            </div>
            <a
              href={PITCH_TEMPLATE_URL}
              download
              className="ml-4 shrink-0 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          </div>

          {/* Validation error summary */}
          {errorCount > 0 && (
            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <p className="text-sm text-red-700 font-medium">
                Please fix <span className="font-bold">{errorCount}</span> error{errorCount > 1 ? "s" : ""} before submitting.
              </p>
            </div>
          )}

          {/* Section 1: Team Information */}
          <Section title="Team Information" description="Enter your team details" icon={Users}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Team Name"
                name="teamName"
                placeholder="e.g., Innovation Warriors"
                required
                value={formData.teamName}
                onChange={handleInputChange}
                error={errors.teamName}
                icon={Users}
              />
              <div className="space-y-1" data-error={!!errors.teamSize}>
                <label className="block text-sm font-medium text-gray-700">
                  Team Size <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Hash className="w-4 h-4 text-gray-400" />
                  </div>
                  <select
                    name="teamSize"
                    value={formData.teamSize}
                    onChange={handleTeamSizeChange}
                    className="w-full pl-9 pr-10 py-2.5 border border-gray-300 hover:border-gray-400 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer"
                  >
                    {TEAM_SIZE_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          </Section>

          {/* Section 2: Team Leader */}
          <Section title="Team Leader Information" description="Provide accurate details of the team leader" icon={User}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Full Name" name="leaderName" placeholder="John Doe" required value={formData.leaderName} onChange={handleInputChange} error={errors.leaderName} icon={User} />
              <Input label="Mobile Number" name="leaderPhone" type="tel" placeholder="+880 1XXXXXXXXX" required value={formData.leaderPhone} onChange={handleInputChange} error={errors.leaderPhone} icon={Phone} />
              <Input label="Email Address" name="leaderEmail" type="email" placeholder="john@example.com" required value={formData.leaderEmail} onChange={handleInputChange} error={errors.leaderEmail} icon={Mail} />
              <Input label="Student ID" name="leaderStudentId" placeholder="12345678" required value={formData.leaderStudentId} onChange={handleInputChange} error={errors.leaderStudentId} icon={IdCard} />
              <Input label="University / College" name="leaderUniversity" placeholder="CUET" required value={formData.leaderUniversity} onChange={handleInputChange} error={errors.leaderUniversity} icon={GraduationCap} />
              <Input label="Department & Year" name="leaderDepartment" placeholder="CSE - 4th Year" value={formData.leaderDepartment} onChange={handleInputChange} icon={BookOpen} />
            </div>
          </Section>

          {/* Section 3: Other Members */}
          {memberCount > 0 && (
            <Section
              title="Other Team Members"
              description={`Enter details for ${memberCount} team member${memberCount > 1 ? "s" : ""}`}
              icon={Users}
            >
              <div className="space-y-6">
                {formData.members.slice(0, memberCount).map((member, index) => (
                  <div key={index} className="rounded-xl border border-gray-200 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                      <div className="flex items-center justify-center w-6 h-6 bg-purple-600 text-white rounded-full text-xs font-bold shrink-0">
                        {index + 2}
                      </div>
                      <span className="font-semibold text-gray-800 text-sm">Member {index + 2}</span>
                    </div>
                    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input label="Full Name" placeholder="Jane Doe" value={member.name} onChange={(e) => handleMemberChange(index, "name", e.target.value)} error={errors[`member${index}Name`]} icon={User} />
                      <Input label="Mobile Number" type="tel" placeholder="+880 1XXXXXXXXX" value={member.phone} onChange={(e) => handleMemberChange(index, "phone", e.target.value)} error={errors[`member${index}Phone`]} icon={Phone} />
                      <Input label="Email Address" type="email" placeholder="jane@example.com" value={member.email} onChange={(e) => handleMemberChange(index, "email", e.target.value)} error={errors[`member${index}Email`]} icon={Mail} />
                      <Input label="Student ID" placeholder="12345678" value={member.studentId} onChange={(e) => handleMemberChange(index, "studentId", e.target.value)} error={errors[`member${index}StudentId`]} icon={IdCard} />
                      <Input label="University / College" placeholder="CUET" value={member.university} onChange={(e) => handleMemberChange(index, "university", e.target.value)} error={errors[`member${index}University`]} icon={GraduationCap} className="md:col-span-2" />
                      <Input label="Department & Year" placeholder="CSE - 4th Year" value={member.department} onChange={(e) => handleMemberChange(index, "department", e.target.value)} icon={BookOpen} className="md:col-span-2" />
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          )}

          {/* Section 4: Startup Idea */}
          <Section title="Startup Idea" description="Tell us about your innovative idea" icon={Lightbulb}>
            <Input label="Idea Title" name="ideaTitle" placeholder="e.g., AI-Powered Health Monitoring" required value={formData.ideaTitle} onChange={handleInputChange} error={errors.ideaTitle} icon={Sparkles} />
            <Textarea label="Idea Overview" name="ideaOverview" placeholder="Describe your idea in detail... (max 400 words)" required maxWords={400} value={formData.ideaOverview} onChange={handleInputChange} error={errors.ideaOverview} rows={5} />
            <Textarea label="Target Market / Customers" name="targetMarket" placeholder="Who are your target customers? What problem do you solve?" required value={formData.targetMarket} onChange={handleInputChange} error={errors.targetMarket} rows={3} />
            <Textarea label="Why is your idea unique?" name="ideaUnique" placeholder="What sets your idea apart from competitors?" value={formData.ideaUnique} onChange={handleInputChange} rows={3} />
          </Section>

          {/* Section 5: Submission Files */}
          <Section title="Submission Files" description="Upload your pitch deck (PDF only)" icon={FileUp}>
            <div data-error={!!errors.pitchDeck}>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pitch Deck <span className="text-red-500">*</span>
                <span className="text-xs text-gray-400 font-normal ml-2">(PDF only)</span>
              </label>
              <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-colors duration-200 ${errors.pitchDeck ? "border-red-400 bg-red-50" : formData.pitchDeck ? "border-green-400 bg-green-50" : "border-gray-300 bg-gray-50 hover:border-purple-400 hover:bg-gray-100"}`}>
                <div className="flex flex-col items-center gap-2 text-center px-4">
                  {formData.pitchDeck ? (
                    <>
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                      <p className="text-sm font-medium text-green-700">{formData.pitchDeck.name}</p>
                      <p className="text-xs text-green-600">Click to replace</p>
                    </>
                  ) : (
                    <>
                      <FileUp className="w-8 h-8 text-gray-400" />
                      <p className="text-sm text-gray-600"><span className="font-semibold text-purple-600">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-gray-400">PDF only</p>
                    </>
                  )}
                </div>
                <input type="file" accept=".pdf" onChange={handleFileChange} className="hidden" />
              </label>
              {errors.pitchDeck && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.pitchDeck}
                </p>
              )}
            </div>
          </Section>

          {/* Section 6: Payment */}
          <Section title="Payment Information" description="Complete payment via bKash before submitting" icon={CreditCard}>

            {/* Fee breakdown */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <Banknote className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-gray-900 text-sm">Registration Fee</span>
                <span className="text-xs text-gray-500 font-normal">— per person, paid individually</span>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">CUET Students</p>
                      <p className="text-xs text-gray-500">Chittagong University of Engineering & Technology</p>
                    </div>
                  </div>
                  <span className="font-bold text-purple-700 text-base">BDT 400</span>
                </div>
                <div className="flex items-center justify-between px-4 py-3 bg-white">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-800">Other Universities</p>
                      <p className="text-xs text-gray-500">All other institutions outside CUET</p>
                    </div>
                  </div>
                  <span className="font-bold text-gray-800 text-base">BDT 650</span>
                </div>
              </div>
            </div>

            {/* bKash payment instructions */}
            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-200">
                <CreditCard className="w-4 h-4 text-purple-600" />
                <span className="font-semibold text-gray-900 text-sm">bKash Payment Instructions</span>
              </div>
              <div className="px-4 py-4 space-y-3 bg-white">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <CircleCheck className="w-4 h-4 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-500 mb-0.5">bKash Merchant Number</p>
                    <p className="text-sm font-bold text-gray-900 tracking-wide">01897015708</p>
                    <p className="text-xs text-gray-500 mt-0.5">Send Money → Payment option</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">1</span>
                    Open bKash app → tap <strong className="text-gray-800">Payment</strong>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">2</span>
                    Enter merchant number <strong className="text-gray-800">01897015708</strong>
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">3</span>
                    Enter your applicable fee amount (BDT 400 or BDT 650)
                  </li>
                  <li className="flex items-start gap-2 text-xs text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-purple-100 text-purple-700 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">4</span>
                    Copy the <strong className="text-gray-800">Transaction ID</strong> from the confirmation SMS and paste below
                  </li>
                </ul>
                <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <p className="text-xs text-amber-800">Each team member must pay separately and submit their own transaction ID.</p>
                </div>
              </div>
            </div>

            {/* Transaction ID inputs */}
            <div className="space-y-4 pt-1">
              <p className="text-sm font-semibold text-gray-800">Enter Transaction IDs</p>
              <Input label="Team Leader Transaction ID" name="leaderTransactionId" placeholder="e.g., ABC12345DEF" required value={formData.leaderTransactionId} onChange={handleInputChange} error={errors.leaderTransactionId} icon={Hash} />
              {memberCount >= 1 && <Input label="Member 2 Transaction ID" name="member2TransactionId" placeholder="e.g., ABC12345DEF" required value={formData.member2TransactionId} onChange={handleInputChange} error={errors.member2TransactionId} icon={Hash} />}
              {memberCount >= 2 && <Input label="Member 3 Transaction ID" name="member3TransactionId" placeholder="e.g., ABC12345DEF" required value={formData.member3TransactionId} onChange={handleInputChange} error={errors.member3TransactionId} icon={Hash} />}
              {memberCount >= 3 && <Input label="Member 4 Transaction ID" name="member4TransactionId" placeholder="e.g., ABC12345DEF" required value={formData.member4TransactionId} onChange={handleInputChange} error={errors.member4TransactionId} icon={Hash} />}
              {memberCount >= 4 && <Input label="Member 5 Transaction ID" name="member5TransactionId" placeholder="e.g., ABC12345DEF" required value={formData.member5TransactionId} onChange={handleInputChange} error={errors.member5TransactionId} icon={Hash} />}
            </div>
          </Section>

          {/* Submit error */}
          {errors.submit && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-5 py-4">
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
              <p className="text-sm text-red-700">{errors.submit}</p>
            </div>
          )}

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200 mt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed text-white font-semibold py-3.5 rounded-xl transition-colors duration-200"
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Submit Registration
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              disabled={isLoading}
              className="px-5 inline-flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 disabled:opacity-50 text-gray-700 font-semibold py-3.5 rounded-xl transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
              Clear
            </button>
          </div>
        </form>
      )}
    </>
  );
}
