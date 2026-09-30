import React, { useState } from 'react';
import { 
  X, 
  UploadCloud, 
  Check, 
  FileText, 
  Image as ImageIcon, 
  Video, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { MEDIA_COLLECTION } from '../data/athleteData';
import { saveMediaUrl, clearCustomMedia, getStoredMediaUrl, resolveMediaUrl } from '../utils/mediaStorage';

interface MediaManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onMediaChanged: () => void;
}

export const MediaManagerModal: React.FC<MediaManagerModalProps> = ({
  isOpen,
  onClose,
  onMediaChanged,
}) => {
  const [notification, setNotification] = useState<string | null>(null);
  const [isZipping, setIsZipping] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (fileName: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      if (result) {
        saveMediaUrl(fileName, result);
        setNotification(`Successfully updated: ${fileName}`);
        onMediaChanged();
        setTimeout(() => setNotification(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleBulkUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    let matchedCount = 0;
    Array.from(files).forEach((file) => {
      const matched = MEDIA_COLLECTION.find(
        (m) => m.fileName.toLowerCase() === file.name.toLowerCase()
      );

      if (matched) {
        matchedCount++;
        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result as string;
          if (result) {
            saveMediaUrl(matched.fileName, result);
            onMediaChanged();
          }
        };
        reader.readAsDataURL(file);
      }
    });

    setNotification(`Successfully synchronized ${matchedCount} matching assets!`);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleDownloadAllZip = async () => {
    try {
      setIsZipping(true);
      setNotification('Compressing all 15 media files into ZIP package...');
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const folder = zip.folder('ramsports_athlete_assets');

      for (const item of MEDIA_COLLECTION) {
        const url = resolveMediaUrl(item.fileName);
        try {
          const res = await fetch(url);
          const blob = await res.blob();
          folder?.file(item.fileName, blob);
        } catch (err) {
          console.warn('Could not add to zip:', item.fileName, err);
        }
      }

      const content = await zip.generateAsync({ type: 'blob' });
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(content);
      downloadLink.download = 'ramsports_sulthan_rafy_assets.zip';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      setNotification('ZIP package downloaded successfully!');
      setTimeout(() => setNotification(null), 3500);
    } catch (err) {
      console.error(err);
      setNotification('Failed to generate ZIP package.');
    } finally {
      setIsZipping(false);
    }
  };

  const handleResetAll = () => {
    if (confirm('Reset all asset overrides to standard default visuals?')) {
      clearCustomMedia();
      onMediaChanged();
      setNotification('All media assets reset to defaults.');
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl card-luxury border border-white/20 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col bg-[#06080D]">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div>
            <div className="flex items-center gap-2 sm:gap-2.5">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#D4FF00]/15 border border-[#D4FF00]/30 flex items-center justify-center glow-volt-sm shrink-0">
                <UploadCloud className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#D4FF00]" />
              </div>
              <h3 className="text-base sm:text-2xl font-black font-display text-white uppercase tracking-tight">
                ASSET VAULT & FILE MANAGER (15 FILES)
              </h3>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-1 font-mono-code">
              Storage root: <code className="text-[#D4FF00] bg-black/50 px-2 py-0.5 rounded border border-white/10">/public/assets/</code> (15 authentic assets connected).
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="mx-4 sm:mx-6 mt-3 sm:mt-4 p-3 sm:p-3.5 rounded-2xl bg-[#D4FF00]/15 border border-[#D4FF00]/40 text-[#D4FF00] text-[11px] sm:text-xs font-bold font-mono-code flex items-center justify-between shadow-lg glow-volt-sm">
            <span>{notification}</span>
            <Check className="w-4 h-4" />
          </div>
        )}

        {/* Bulk Drop, Download ZIP & Reset Toolbar */}
        <div className="p-4 sm:p-6 pb-2">
          <div className="p-3.5 sm:p-5 rounded-2xl card-luxury border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-[#D4FF00] shrink-0" />
              <div>
                <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider font-display text-white block">
                  SYNCHRONIZED FOLDER (/public/assets)
                </span>
                <span className="text-[10px] sm:text-xs text-slate-300 font-normal">
                  Export the entire folder as a single ZIP archive or replace assets directly from your computer.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0 flex-wrap font-mono-code w-full sm:w-auto">
              <button
                onClick={handleDownloadAllZip}
                disabled={isZipping}
                className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-xs flex items-center gap-1.5 transition-all border border-white/15 cursor-pointer"
              >
                <span>{isZipping ? 'Compressing...' : 'Download ZIP Archive'}</span>
              </button>

              <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-[#D4FF00] hover:bg-lime-300 text-black font-black text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md glow-volt-sm">
                <UploadCloud className="w-4 h-4" />
                <span>Upload Assets</span>
                <input
                  type="file"
                  multiple
                  onChange={handleBulkUpload}
                  className="hidden"
                />
              </label>

              <button
                onClick={handleResetAll}
                title="Reset to default visuals"
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Assets List Table */}
        <div className="p-6 overflow-y-auto space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {MEDIA_COLLECTION.map((item) => {
              const customStored = getStoredMediaUrl(item.fileName);
              const isVideo = item.category === 'video';
              const resolvedUrl = resolveMediaUrl(item.fileName);

              return (
                <div
                  key={item.fileName}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between gap-3 hover:border-white/20 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-12 h-12 rounded-lg overflow-hidden bg-black shrink-0 relative border border-white/10">
                    <img
                      src={resolvedUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = item.highResStockFallback;
                      }}
                    />
                    {isVideo && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Video className="w-3 h-3 text-[#D4FF00]" />
                      </div>
                    )}
                  </div>

                  {/* Meta */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-semibold text-white truncate">
                        {item.fileName}
                      </span>
                      {customStored ? (
                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300">
                          Custom
                        </span>
                      ) : (
                        <span className="text-[9px] font-medium px-1.5 py-0.2 rounded bg-white/5 text-slate-400">
                          Active
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-slate-400 block truncate">
                      {item.title}
                    </span>
                  </div>

                  {/* Upload action button */}
                  <label className="cursor-pointer shrink-0 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-[11px] font-semibold flex items-center gap-1.5 transition-colors">
                    <UploadCloud className="w-3 h-3 text-[#D4FF00]" />
                    <span>Upload</span>
                    <input
                      type="file"
                      accept={isVideo ? 'video/*' : 'image/*'}
                      onChange={(e) => handleFileUpload(item.fileName, e)}
                      className="hidden"
                    />
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between text-xs text-slate-400">
          <span>Files cached locally in browser for rapid offline access.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#D4FF00] text-black font-bold hover:bg-[#c2e800] transition-colors"
          >
            Apply & Close
          </button>
        </div>

      </div>
    </div>
  );
};
