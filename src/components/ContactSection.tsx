import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  Mail, 
  Send, 
  Paperclip, 
  UploadCloud, 
  FileText, 
  Image as ImageIcon, 
  FileArchive, 
  X, 
  CheckCircle2, 
  Copy, 
  Check, 
  AlertCircle,
  Shield,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { AttachmentFile, ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    country: '',
    subject: 'Partnership & Verification Inquiry',
    message: '',
    preferredContact: 'email',
    contactHandle: '',
  });

  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const recipientEmail = 'james@zeusguy.xyz';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(recipientEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleFileSelection = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const newFiles: AttachmentFile[] = Array.from(files).map((file, idx) => ({
      id: `${Date.now()}-${idx}-${file.name}`,
      name: file.name,
      size: file.size,
      type: file.type || 'application/octet-stream',
      status: 'uploading',
      progress: 0,
    }));

    setAttachments((prev) => [...prev, ...newFiles]);

    // Simulate progress
    newFiles.forEach((f) => {
      let currentProgress = 0;
      const interval = setInterval(() => {
        currentProgress += 25;
        setAttachments((prev) =>
          prev.map((item) =>
            item.id === f.id
              ? {
                  ...item,
                  progress: Math.min(currentProgress, 100),
                  status: currentProgress >= 100 ? 'complete' : 'uploading',
                }
              : item
          )
        );
        if (currentProgress >= 100) clearInterval(interval);
      }, 150);
    });
  };

  const handleRemoveAttachment = (id: string) => {
    setAttachments((prev) => prev.filter((item) => item.id !== id));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const getFileIcon = (fileName: string) => {
    const ext = fileName.split('.').pop()?.toLowerCase();
    if (['png', 'jpg', 'jpeg', 'webp', 'svg'].includes(ext || '')) {
      return <ImageIcon className="w-5 h-5 text-cyan-500" />;
    }
    if (['zip', 'rar', 'tar', 'gz', '7z'].includes(ext || '')) {
      return <FileArchive className="w-5 h-5 text-amber-500" />;
    }
    return <FileText className="w-5 h-5 text-indigo-500" />;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!formData.name.trim()) {
      setErrorMessage('Please provide your name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please provide a valid contact email address.');
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage('Please include a brief message (minimum 10 characters).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(`[NEXATECH Inquiry] ${formData.subject}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCountry/Region: ${formData.country || 'Not specified'}\nPreferred Channel: ${formData.preferredContact} (${formData.contactHandle || 'Same as email'})\nAttachments: ${attachments.map(a => a.name).join(', ') || 'None'}\n\nMessage:\n${formData.message}`
    );
    return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
      
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest mb-3">
            <span>05. DIRECT COMMUNICATIONS</span>
            <span>·</span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white font-display tracking-tight uppercase">
            CONTACT US
          </h2>
          <p className="mt-4 text-base sm:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
            Ready to explore international partnership opportunities, review VMware virtual machine setups, or discuss project scopes? Send a direct message directly to our coordination inbox.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Recipient Card & Verification Guide (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Primary Recipient Badge Box */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 card-3d-depth shadow-xl">
              <div className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider mb-2 font-semibold">
                OFFICIAL RECIPIENT ADDRESS
              </div>

              <div className="p-4 rounded-2xl bg-cyan-50/60 dark:bg-slate-950/80 border border-cyan-200/80 dark:border-slate-800 mt-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg icon-3d-cyan flex items-center justify-center text-white shrink-0 shadow-sm">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-600 dark:text-slate-400 font-medium">Operations Director</div>
                      <div className="text-base font-bold text-slate-950 dark:text-white font-mono tracking-tight select-all">
                        {recipientEmail}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    aria-label="Copy recipient email"
                    className="p-2.5 rounded-xl bg-white hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Shield className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>Monitored 24/7 for urgent verification & inquiries</span>
              </div>

              {/* Direct Mailto Fallback Button - High Contrast 3D Cyan */}
              <a
                href={`mailto:${recipientEmail}`}
                className="mt-6 w-full py-3.5 rounded-xl text-xs sm:text-sm font-bold text-white btn-3d-primary flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:brightness-105 transition-all"
              >
                <span>Open in Mail App</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Quick Assurance Checklist */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 space-y-4 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white font-display flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>What to Include in Your Note:</span>
              </h4>

              <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 font-medium">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Your general country/time zone for meeting coordination.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Whether you prefer using VMware for sandboxed isolation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Any questions regarding pre-agreed percentage payout schedules.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>Optional attachments (resumes, NDAs, verification agreements).</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Right Column: Send Direct Message Box & Dedicated File Upload Section (8 Cols) */}
          <div className="lg:col-span-8">
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 card-3d-depth shadow-2xl">
              
              <div className="pb-6 mb-6 border-b border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest block mb-1 font-semibold">
                  DIRECT TRANSMISSION PORTAL
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                  Send Direct Message Box
                </h3>
              </div>

              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 px-6 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full icon-3d-cyan mx-auto flex items-center justify-center text-white">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                    Message Dispatched Successfully
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Thank you, {formData.name}. Your direct message and {attachments.length} attachment(s) have been routed to <strong className="text-cyan-600 dark:text-cyan-400">{recipientEmail}</strong>. James and our operations leads will reply within 12 hours.
                  </p>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={generateMailtoUrl()}
                      className="px-5 py-2.5 rounded-xl text-xs font-bold text-white btn-3d-primary flex items-center gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Verify via Email Client</span>
                    </a>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          name: '',
                          email: '',
                          country: '',
                          subject: 'Partnership & Verification Inquiry',
                          message: '',
                          preferredContact: 'email',
                          contactHandle: '',
                        });
                        setAttachments([]);
                      }}
                      className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {errorMessage && (
                    <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-sm flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-sm shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. alex@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-sm shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Country & Subject row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        Country / Time Zone
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. United States (EST)"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-sm shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                        Topic / Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Subject inquiry"
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-sm shadow-sm"
                      />
                    </div>
                  </div>

                  {/* Direct Message text area */}
                  <div>
                    <label className="block text-xs font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                      Direct Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your direct message to NEXATECH (mention your questions regarding remote verification, VMware VM preferences, or revenue share terms)..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:border-cyan-500 text-sm shadow-sm"
                    />
                  </div>

                  {/* Dedicated Message Attachments & File Uploads Section */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider flex items-center gap-1.5 font-semibold">
                        <Paperclip className="w-3.5 h-3.5" />
                        <span>Dedicated Message Attachments & File Uploads</span>
                      </label>
                      <span className="text-xs text-slate-500 dark:text-slate-400">PDF, DOCX, PNG, JPG, ZIP (up to 25MB)</span>
                    </div>

                    {/* Drag and Drop Zone */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                      }}
                      onDragLeave={() => setIsDragging(false)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setIsDragging(false);
                        handleFileSelection(e.dataTransfer.files);
                      }}
                      onClick={() => fileInputRef.current?.click()}
                      className={`p-6 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center flex flex-col items-center justify-center ${
                        isDragging
                          ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30'
                          : 'border-slate-300 dark:border-slate-700/80 hover:border-cyan-500 bg-slate-50 dark:bg-slate-950/40'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        multiple
                        className="hidden"
                        onChange={(e) => handleFileSelection(e.target.files)}
                      />
                      <div className="w-12 h-12 rounded-xl icon-3d-cyan flex items-center justify-center text-white mb-3 shadow">
                        <UploadCloud className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900 dark:text-white">
                        Drop files here or <span className="text-cyan-600 dark:text-cyan-400 underline decoration-cyan-400/40">browse from computer</span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                        Securely attach identity verification docs, NDA, or questions
                      </p>
                    </div>

                    {/* Attached files preview list */}
                    {attachments.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <div className="text-xs font-mono text-slate-500 dark:text-slate-400 font-semibold">
                          {attachments.length} file(s) attached:
                        </div>
                        {attachments.map((file) => (
                          <div
                            key={file.id}
                            className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/90 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 text-xs"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <div className="p-2 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 shrink-0">
                                {getFileIcon(file.name)}
                              </div>
                              <div className="truncate">
                                <div className="font-semibold text-slate-900 dark:text-white truncate">
                                  {file.name}
                                </div>
                                <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                                  {formatFileSize(file.size)} · {file.status === 'uploading' ? `Uploading (${file.progress}%)` : 'Ready'}
                                </div>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleRemoveAttachment(file.id)}
                              aria-label="Remove attachment"
                              className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-200 dark:hover:bg-slate-800 cursor-pointer transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Submission Row with 3D Primary Button */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Encrypted transmission to <code className="text-cyan-700 dark:text-cyan-300 font-mono font-semibold">{recipientEmail}</code></span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm text-white btn-3d-primary flex items-center justify-center gap-2 cursor-pointer shadow-lg whitespace-nowrap"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                          <span>Routing Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Transmit Direct Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
