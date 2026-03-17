const $ = (id) => document.getElementById(id);

function setHidden(el, hidden) {
  if (!el) return;
  el.hidden = Boolean(hidden);
}

function safeText(el, text) {
  if (!el) return;
  el.textContent = text ?? "";
}

function setLoading(btn, spinner, labelEl, loading, labelWhenIdle) {
  if (btn) btn.disabled = Boolean(loading);
  if (spinner) spinner.classList.toggle("hidden", !loading);
  if (labelEl) safeText(labelEl, loading ? "Working…" : labelWhenIdle);
}

function togglePassword(input, btn) {
  if (!input || !btn) return;
  const icon = btn.querySelector("i");
  const isPw = input.type === "password";
  input.type = isPw ? "text" : "password";
  btn.setAttribute("aria-label", isPw ? "Hide password" : "Show password");
  if (icon) {
    icon.className = isPw ? "ph ph-eye-slash text-lg" : "ph ph-eye text-lg";
  }
}

const LS = {
  auth: "intellexa_auth_v1",
  users: "intellexa_users_v1",
  profile: "intellexa_profile_v1",
};

function loadUsers() {
  try {
    const raw = localStorage.getItem(LS.users);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(LS.users, JSON.stringify(users));
}

function saveSession(session) {
  localStorage.setItem(LS.auth, JSON.stringify(session));
}

function setProfileFromUser(user) {
  if (!user) return;
  localStorage.setItem(
    LS.profile,
    JSON.stringify({
      name: user.name || "Alex Sterling",
      role: user.role || "Senior Analyst",
      email: user.email || "",
      password: user.password || "",
    })
  );
}

function showToastBox(el, msg) {
  setHidden(el, !msg);
  safeText(el, msg || "");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

function setMode(mode) {
  const indicator = $("tabIndicator");
  const track = $("formsTrack");
  const loginTab = $("loginTab");
  const regTab = $("registerTab");
  const isReg = mode === "register";

  if (indicator) indicator.style.transform = isReg ? "translateX(100%)" : "translateX(0%)";
  if (track) track.style.transform = isReg ? "translateX(-50%)" : "translateX(0%)";

  if (loginTab) loginTab.classList.toggle("text-white/70", isReg);
  if (loginTab) loginTab.classList.toggle("text-white/90", !isReg);
  if (regTab) regTab.classList.toggle("text-white/70", !isReg);
  if (regTab) regTab.classList.toggle("text-white/90", isReg);

  showToastBox($("loginError"), "");
  showToastBox($("regError"), "");
}

async function fakeDelay(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function handleLogin(e) {
  e.preventDefault();
  const email = $("loginEmail")?.value?.trim?.() || "";
  const password = $("loginPassword")?.value || "";

  if (!isValidEmail(email)) return showToastBox($("loginError"), "Enter a valid email.");
  if (String(password).length < 4) return showToastBox($("loginError"), "Password must be at least 4 characters.");

  const users = loadUsers();
  const found = users.find((u) => u.email?.toLowerCase?.() === email.toLowerCase());
  if (found && found.password !== password) return showToastBox($("loginError"), "Incorrect password.");

  const remember = Boolean($("rememberMe")?.checked);
  const user = found || { id: `u_${Date.now()}`, name: "Alex Sterling", role: "Senior Analyst", email, password };
  if (!found) {
    users.unshift(user);
    saveUsers(users);
  }

  setLoading($("loginSubmit"), $("loginSpinner"), $("loginSubmitText"), true, "Sign in");
  showToastBox($("loginError"), "");
  await fakeDelay(650);

  saveSession({ ok: true, userId: user.id, email: user.email, ts: Date.now(), remember });
  setProfileFromUser(user);
  window.location.href = "/";
}

async function handleRegister(e) {
  e.preventDefault();
  const name = $("regName")?.value?.trim?.() || "";
  const email = $("regEmail")?.value?.trim?.() || "";
  const password = $("regPassword")?.value || "";

  if (!name) return showToastBox($("regError"), "Enter your full name.");
  if (!isValidEmail(email)) return showToastBox($("regError"), "Enter a valid email.");
  if (String(password).length < 4) return showToastBox($("regError"), "Password must be at least 4 characters.");

  const users = loadUsers();
  const exists = users.some((u) => u.email?.toLowerCase?.() === email.toLowerCase());
  if (exists) return showToastBox($("regError"), "An account with this email already exists. Try signing in.");

  setLoading($("regSubmit"), $("regSpinner"), $("regSubmitText"), true, "Create account");
  showToastBox($("regError"), "");
  await fakeDelay(750);

  const user = { id: `u_${Date.now()}`, name, role: "Senior Analyst", email, password };
  users.unshift(user);
  saveUsers(users);
  saveSession({ ok: true, userId: user.id, email: user.email, ts: Date.now(), remember: true });
  setProfileFromUser(user);
  window.location.href = "/";
}

window.addEventListener("DOMContentLoaded", () => {
  // Live theme updates (Light/Dark/System)
  try {
    const KEY = "intellexa_theme_v1";
    const apply = () => {
      const c = localStorage.getItem(KEY) || "system";
      const dark =
        c === "dark" ||
        (c === "system" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      document.documentElement.classList.toggle("dark", dark);
    };
    apply();
    window.addEventListener("storage", (e) => {
      if (e.key === KEY) apply();
    });
    window.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", () => {
      if ((localStorage.getItem(KEY) || "system") === "system") apply();
    });
  } catch {}

  setMode("login");

  $("loginTab")?.addEventListener("click", () => setMode("login"));
  $("registerTab")?.addEventListener("click", () => setMode("register"));

  $("loginPwToggle")?.addEventListener("click", () => togglePassword($("loginPassword"), $("loginPwToggle")));
  $("regPwToggle")?.addEventListener("click", () => togglePassword($("regPassword"), $("regPwToggle")));

  $("loginForm")?.addEventListener("submit", handleLogin);
  $("registerForm")?.addEventListener("submit", handleRegister);

  $("forgotBtn")?.addEventListener("click", () => {
    showToastBox($("loginError"), "Demo app: password reset isn’t enabled.");
  });
});

