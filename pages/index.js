function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          maxWidth: "720px",
          width: "100%",
          textAlign: "center",

          fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
          fontSize: "clamp(1.4rem, 4.5vw, 1.9rem)",
          fontWeight: "400",
          lineHeight: "1.6",

          color: "#ffffff",
        }}
      >
        Oi, meu amor.  
        Só para te contar que fiz oficialmente meu primeiro deploy.  
        Então, oficialmente, agora tenho um pedacinho da internet.

        <br /><br />

        Mas minha jornada não importa se você não estiver no meio dela.  
        Então, se você me ama, quero que você dê um sorriso lindo para mim 😁.
      </h1>
    </div>
  );
}

export default Home;
