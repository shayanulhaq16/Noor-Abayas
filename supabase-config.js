// ===== SUPABASE SETTINGS =====
// Supabase dashboard > Project Settings > API se copy karein
const SUPABASE_URL = "https://jyccewoceooxemadscfa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5Y2Nld29jZW9veGVtYWRzY2ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI3ODMyNTEsImV4cCI6MjEwODM1OTI1MX0.wuiczuktFjLzs2gkhYq0PEiRiq75iNDCR1FlW_845iw";

// Database aur login ke liye connection
const db = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Agar user login nahi hai to user.html par bhej dega
async function requireLogin() {
    const { data } = await db.auth.getSession();
    if (!data.session) {
        window.location.href = "user.html";
        return null;
    }
    return data.session;
}

// Logout karke login page par bhej dega
async function logout() {
    await db.auth.signOut();
    window.location.href = "user.html";
}

// Number ko 1,234.50 jaisa dikhata hai
function money(n) {
    return Number(n || 0).toLocaleString("en-US", { maximumFractionDigits: 2 });
}