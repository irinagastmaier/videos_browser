export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">&copy;{year} Irina Gastmaier</footer>
    </>
  );
}
