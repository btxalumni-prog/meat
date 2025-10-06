// api_integration.js — dùng trên Vercel
const API_BASE = "/api";

let uploadBtn, uploadInput, analysisBox, capturedWrap, capturedImgEl;

document.addEventListener("DOMContentLoaded", () => {
  uploadBtn     = document.getElementById("upload-photo");
  uploadInput   = document.getElementById("upload-input");
  analysisBox   = document.getElementById("analysis-result");
  capturedWrap  = document.getElementById("captured-image");
  capturedImgEl = document.getElementById("captured-img");

  if (uploadBtn && uploadInput) {
    uploadBtn.addEventListener("click", () => uploadInput.click());
    uploadInput.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;
      const url = URL.createObjectURL(file);
      if (capturedImgEl && capturedWrap) {
        capturedImgEl.src = url;
        capturedWrap.classList.remove("hidden");
      }
      await predictViaApi(file);
    });
  }
});

async function predictViaApi(file) {
  try {
    showInfo("⏳ Đang phân tích trên máy chủ...");
    const fd = new FormData();
    fd.append("file", file, file.name || "upload.jpg");
    const res = await fetch(`${API_BASE}/predict`, { method: "POST", body: fd });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || `${res.status} ${res.statusText}`);
    renderPredictResult(data);
  } catch (err) {
    console.error(err);
    showError(`❌ Lỗi: ${String(err.message || err)}`);
  }
}

function renderPredictResult(data) {
  const { meat_type, freshness_percent, label_vi, label_en, confidence } = data;
  const levelMap = { 100: "5", 50: "3", 0: "1" };
  const targetLevel = levelMap[freshness_percent] ?? "3";
  const statusClass =
    freshness_percent === 100 ? "status--success" :
    freshness_percent === 50  ? "status--warning" : "status--error";
  const goDetailBtn = (meat_type === "pork")
    ? `<button class="btn btn--primary btn--sm" onclick="showMeatDetail('pork','${targetLevel}')">
         📖 Xem hướng dẫn — Thịt Heo • Level ${targetLevel}
       </button>` : "";

  const imageUrl = capturedImgEl ? capturedImgEl.src : '';
  const resultData = { meat_type, freshness_percent, label_vi, label_en, confidence };

  const saveBtn = `
    <button class="btn btn--success btn--sm"
            onclick="handleSaveDetection('${meat_type}', ${targetLevel}, '${imageUrl}', ${JSON.stringify(resultData).replace(/"/g, '&quot;')})"
            style="background: var(--color-success); border-color: var(--color-success);">
      💾 Lưu kết quả
    </button>`;

  analysisBox.classList.remove("hidden");
  analysisBox.innerHTML = `
    <div class="card"><div class="card__body">
      <div class="status ${statusClass}">
        Kết quả: <strong>${label_vi}</strong> – ${freshness_percent}%
      </div>
      <p style="margin-top:10px;">
        (Model: <code>${label_en}</code>; độ tự tin ~ ${(confidence*100).toFixed(1)}%)
      </p>
      <div style="display:flex; gap:8px; margin-top:12px;">
        ${goDetailBtn}
        ${saveBtn}
      </div>
    </div></div>`;
}

function showInfo(text){
  analysisBox.classList.remove("hidden");
  analysisBox.innerHTML = `<div class="card"><div class="card__body">
    <div class="status status--info">${text}</div></div></div>`;
}
function showError(text){
  analysisBox.classList.remove("hidden");
  analysisBox.innerHTML = `<div class="card"><div class="card__body">
    <div class="status status--error">${text}</div></div></div>`;
}
window.predictViaApi = predictViaApi;
