import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "15px", backgroundColor: "#111", color: "#fff" }}>
      <h1>🏀 SPADA</h1>
      <div>
        <Link href="/">Inicio</Link> | 
        <Link href="/stats"> Estadísticas</Link> | 
        <Link href="/predictions"> Predicciones</Link>
      </div>
    </nav>
  );
}
