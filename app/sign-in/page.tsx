// app/sign-in/page.tsx
export default function SignInPage() {
  return (
    <main style={{maxWidth: 640, margin: "0 auto", padding: "32px 18px"}}>
      <h1 style={{fontSize: 32, fontWeight: 800, marginBottom: 12}}>Sign in</h1>
      <p style={{color: "#667488", marginBottom: 24}}>
        This is a placeholder sign-in page. Add your form or provider buttons here later.
      </p>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Demo only"); }}
        style={{
          display: "grid",
          gap: 12,
          border: "1px solid rgba(15,23,42,.12)",
          borderRadius: 12,
          padding: 16,
          background: "#fff",
          boxShadow: "0 8px 24px rgba(16,24,40,.08)",
        }}
      >
        <label style={{display:"grid", gap:6}}>
          <span>Email</span>
          <input type="email" required placeholder="you@example.com"
            style={{padding:"10px 12px", border:"1px solid #cbd5e1", borderRadius:10}}/>
        </label>

        <label style={{display:"grid", gap:6}}>
          <span>Password</span>
          <input type="password" required placeholder="••••••••"
            style={{padding:"10px 12px", border:"1px solid #cbd5e1", borderRadius:10}}/>
        </label>

        <button type="submit"
          style={{
            padding:"12px 16px",
            borderRadius:12,
            border:"1px solid rgba(15,23,42,.12)",
            background:"linear-gradient(90deg,#6aa6ff,#27b082)",
            color:"#fff",
            fontWeight:800
          }}>
          Continue
        </button>
      </form>
    </main>
  );
}
